"""Serve the offline copy at the pathname required by the copied app."""

from __future__ import annotations

import argparse
import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


PAGE_PATH = "/proforientacia/free"


def resolve_file(root: Path, request_path: str) -> Path:
    path = urlsplit(request_path).path.rstrip("/") or "/"
    if path == PAGE_PATH:
        return root / "index.html"
    if path.startswith("/proforientacia/"):
        candidate = root / path.removeprefix("/proforientacia/")
        if candidate.is_file():
            return candidate
    manifest = root / "asset-manifest.json"
    if manifest.is_file():
        resources = json.loads(manifest.read_text(encoding="utf-8"))["resources"]
        original = f"https://maximumtest.ru{path}"
        if original in resources:
            return root / resources[original]
    return root / path.lstrip("/")


def handler_for(root: Path):
    class OfflineCopyHandler(SimpleHTTPRequestHandler):
        def translate_path(self, path: str) -> str:
            return str(resolve_file(root, path))

    return OfflineCopyHandler


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8080)
    parser.add_argument("--root", type=Path, default=Path("site-copy"))
    args = parser.parse_args()
    with ThreadingHTTPServer(("127.0.0.1", args.port), handler_for(args.root)) as server:
        print(f"Open http://127.0.0.1:{args.port}{PAGE_PATH}")
        server.serve_forever()


if __name__ == "__main__":
    main()
