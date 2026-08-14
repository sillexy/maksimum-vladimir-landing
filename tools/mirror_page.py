"""Download a public page's static resources and change their links to local paths."""

from __future__ import annotations

import argparse
import hashlib
import json
import mimetypes
import os
import re
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urljoin, urlsplit, urlunsplit
from urllib.request import Request, urlopen


URL_RE = re.compile(r"(?:url\(\s*|@import\s+(?:url\(\s*)?)[\"']?([^\"'()\s;]+)", re.I)
HTML_ATTR_RE = re.compile(
    r"\b(?:src|href|poster|data-src|data-lazy-src)\s*=\s*([\"'])(.*?)\1", re.I | re.S
)
SRCSET_RE = re.compile(r"\bsrcset\s*=\s*([\"'])(.*?)\1", re.I | re.S)
STYLE_RE = re.compile(r"\bstyle\s*=\s*([\"'])(.*?)\1", re.I | re.S)
SCRIPT_TAG_RE = re.compile(r"<script\b([^>]*)>", re.I)
IGNORED_SCHEMES = ("#", "data:", "javascript:", "mailto:", "tel:", "blob:")
REQUEST_TIMEOUT_SECONDS = 2


def canonical(url: str) -> str:
    parts = urlsplit(url)
    return urlunsplit((parts.scheme, parts.netloc, parts.path, parts.query, ""))


def local_url(original: str, owner: Path, mapping: dict[str, str]) -> str:
    """Return a mapping target relative to the file containing the reference."""
    target = mapping.get(canonical(original)) or mapping.get(original)
    return os.path.relpath(target, owner.parent).replace(os.sep, "/") if target else original


def should_fetch(value: str) -> bool:
    value = value.strip()
    return bool(value) and not value.lower().startswith(IGNORED_SCHEMES)


def extension_for(url: str, content_type: str) -> str:
    suffix = Path(unquote(urlsplit(url).path)).suffix.lower()
    if suffix and len(suffix) <= 10:
        return suffix
    guessed = mimetypes.guess_extension(content_type.split(";", 1)[0].strip())
    return guessed or ".bin"


def category(url: str, content_type: str) -> str:
    path = urlsplit(url).path.lower()
    mime = content_type.lower()
    if path.endswith((".css",)) or "text/css" in mime:
        return "css"
    if path.endswith((".js", ".mjs")) or "javascript" in mime:
        return "js"
    if path.endswith((".woff", ".woff2", ".ttf", ".otf", ".eot")) or "font" in mime:
        return "fonts"
    if path.endswith((".ico",)):
        return "icons"
    return "images"


def filename_for(url: str, content_type: str) -> str:
    path_name = Path(unquote(urlsplit(url).path)).name or "resource"
    stem = Path(path_name).stem or "resource"
    digest = hashlib.sha256(canonical(url).encode()).hexdigest()[:10]
    return f"{stem}-{digest}{extension_for(url, content_type)}"


def fetch(url: str) -> tuple[bytes, str]:
    request = Request(url, headers={"User-Agent": "Mozilla/5.0 (offline page archiver)"})
    with urlopen(request, timeout=REQUEST_TIMEOUT_SECONDS) as response:
        return response.read(), response.headers.get_content_type()


def references_in_html(text: str, base: str) -> set[str]:
    found = set()
    for match in HTML_ATTR_RE.finditer(text):
        value = match.group(2).strip()
        if should_fetch(value):
            found.add(canonical(urljoin(base, value)))
    for match in SRCSET_RE.finditer(text):
        for part in match.group(2).split(","):
            value = part.strip().split()[0] if part.strip() else ""
            if should_fetch(value):
                found.add(canonical(urljoin(base, value)))
    for match in STYLE_RE.finditer(text):
        found.update(references_in_css(match.group(2), base))
    return found


def references_in_css(text: str, base: str) -> set[str]:
    return {
        canonical(urljoin(base, match.group(1).strip()))
        for match in URL_RE.finditer(text)
        if should_fetch(match.group(1).strip())
    }


def rewrite_css(text: str, owner: Path, base: str, mapping: dict[str, str]) -> str:
    def replace(match: re.Match[str]) -> str:
        original = match.group(1).strip()
        absolute = canonical(urljoin(base, original))
        return match.group(0).replace(original, local_url(absolute, owner, mapping))

    return URL_RE.sub(replace, text)


def rewrite_html(text: str, owner: Path, base: str, mapping: dict[str, str]) -> str:
    def replace_attr(match: re.Match[str]) -> str:
        original = match.group(2).strip()
        if not should_fetch(original):
            return match.group(0)
        return match.group(0).replace(original, local_url(canonical(urljoin(base, original)), owner, mapping))

    def replace_srcset(match: re.Match[str]) -> str:
        entries = []
        for part in match.group(2).split(","):
            chunks = part.strip().split(maxsplit=1)
            if chunks and should_fetch(chunks[0]):
                chunks[0] = local_url(canonical(urljoin(base, chunks[0])), owner, mapping)
            entries.append(" ".join(chunks))
        return match.group(0).replace(match.group(2), ", ".join(entries))

    def replace_style(match: re.Match[str]) -> str:
        return match.group(0).replace(match.group(2), rewrite_css(match.group(2), owner, base, mapping))

    return STYLE_RE.sub(replace_style, SRCSET_RE.sub(replace_srcset, HTML_ATTR_RE.sub(replace_attr, text)))


def disable_scripts(text: str) -> str:
    """Keep script markup for provenance, but prevent server-bound app hydration offline."""
    def replace(match: re.Match[str]) -> str:
        attrs = match.group(1)
        src = re.search(r"\bsrc\s*=\s*([\"'])(.*?)\1", attrs, re.I | re.S)
        original = f' data-offline-original-src="{src.group(2)}"' if src else ""
        attrs = re.sub(r"\s+type\s*=\s*([\"']).*?\1", "", attrs, flags=re.I | re.S)
        return f'<script type="application/x-offline-copy"{original}{attrs}>'

    return SCRIPT_TAG_RE.sub(replace, text)


def inject_static_overrides(text: str) -> str:
    link = '<link id="offline-copy-overrides" rel="stylesheet" href="css/offline-overrides.css"/>'
    script = '<script id="offline-review-modal-script" src="js/offline-reviews.js" defer></script>'
    if 'id="offline-copy-overrides"' not in text:
        text = text.replace("</head>", f"{link}</head>", 1)
    if 'id="offline-review-modal-script"' not in text:
        text = text.replace("</head>", f"{script}</head>", 1)
    return text


def download(root: Path, source: Path, base: str) -> dict[str, str]:
    text = source.read_text(encoding="utf-8")
    queue = list(references_in_html(text, base))
    mapping: dict[str, str] = {}
    visited: set[str] = set()
    failures: dict[str, str] = {}

    def persist_manifest() -> None:
        (root / "asset-manifest.json").write_text(
            json.dumps({"resources": mapping, "failed": failures}, ensure_ascii=False, indent=2), encoding="utf-8"
        )

    while queue:
        url = queue.pop(0)
        if url in visited:
            continue
        visited.add(url)
        digest = hashlib.sha256(canonical(url).encode()).hexdigest()[:10]
        existing = next(root.glob(f"*/*-{digest}.*"), None)
        if existing:
            mapping[url] = existing.relative_to(root).as_posix()
            if existing.parent.name == "css":
                try:
                    queue.extend(references_in_css(existing.read_text(encoding="utf-8"), url))
                except UnicodeDecodeError:
                    pass
            persist_manifest()
            continue
        try:
            payload, content_type = fetch(url)
        except (HTTPError, URLError, TimeoutError) as error:
            failures[url] = str(error)
            persist_manifest()
            continue
        folder = category(url, content_type)
        local = root / folder / filename_for(url, content_type)
        local.parent.mkdir(parents=True, exist_ok=True)
        local.write_bytes(payload)
        mapping[url] = local.relative_to(root).as_posix()
        if folder == "css":
            try:
                queue.extend(references_in_css(payload.decode("utf-8"), url))
            except UnicodeDecodeError:
                pass
        persist_manifest()
    persist_manifest()
    return mapping


def load_mapping(root: Path) -> dict[str, str]:
    return json.loads((root / "asset-manifest.json").read_text(encoding="utf-8"))["resources"]


def rewrite(root: Path, base: str) -> None:
    mapping = load_mapping(root)
    index = root / "index.html"
    index.write_text(rewrite_html(index.read_text(encoding="utf-8"), index, base, mapping), encoding="utf-8")
    for css in (root / "css").glob("*"):
        try:
            css.write_text(rewrite_css(css.read_text(encoding="utf-8"), css, "", mapping), encoding="utf-8")
        except UnicodeDecodeError:
            pass


def make_static(root: Path) -> None:
    index = root / "index.html"
    text = disable_scripts(index.read_text(encoding="utf-8"))
    text = re.sub(r"\.\./(?=(?:css|js|images|fonts|icons)/)", "", text)
    text = inject_static_overrides(text)
    index.write_text(text, encoding="utf-8")


def audit(root: Path) -> int:
    mapping = load_mapping(root)
    missing = [path for path in mapping.values() if not (root / path).is_file()]
    print(f"Saved resources: {len(mapping)}")
    print(f"Missing mapped files: {len(missing)}")
    return 1 if missing else 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path)
    parser.add_argument("--base", default="https://maximumtest.ru/proforientacia/free")
    parser.add_argument("--root", type=Path, default=Path("site-copy"))
    parser.add_argument("--download", action="store_true")
    parser.add_argument("--rewrite", action="store_true")
    parser.add_argument("--rewrite-css", action="store_true")
    parser.add_argument("--audit", action="store_true")
    parser.add_argument("--static", action="store_true")
    args = parser.parse_args()
    if args.download:
        if not args.source:
            parser.error("--download requires --source")
        download(args.root, args.source, args.base)
    if args.rewrite or args.rewrite_css:
        rewrite(args.root, args.base)
    if args.static:
        make_static(args.root)
    return audit(args.root) if args.audit else 0


if __name__ == "__main__":
    sys.exit(main())
