# Hero Image Replacement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current first-screen illustration with the user-provided local WebP asset while keeping the offline page self-contained and distortion-free.

**Architecture:** The supplied image is copied into the offline site's `images` directory and becomes the sole source for the existing hero image element. A narrowly scoped CSS override preserves the existing layout while ensuring the transparent illustration is fully visible.

**Tech Stack:** Static HTML, CSS, Python `unittest`, PowerShell file copy.

## Global Constraints

- Use the supplied `C:\Users\kiranightly\Downloads\hero-image.webp` as the source asset.
- Keep the result offline-capable; no filesystem path outside `site-copy` may remain in HTML or CSS.
- Do not resize, crop, or alter the image pixels.

---

### Task 1: Replace the first-screen illustration with a local asset

**Files:**
- Create: `site-copy/images/hero-image.webp`
- Modify: `site-copy/index.html`
- Modify: `site-copy/css/offline-overrides.css`
- Test: `tests/test_mirror_page.py`

**Interfaces:**
- Consumes: `C:\Users\kiranightly\Downloads\hero-image.webp`
- Produces: relative asset URL `images/hero-image.webp` used by the first-screen illustration.

- [ ] **Step 1: Write the failing test**

```python
def test_hero_uses_user_provided_local_image(self):
    html = (ROOT / 'site-copy' / 'index.html').read_text(encoding='utf-8')
    self.assertIn('images/hero-image.webp', html)
    self.assertTrue((ROOT / 'site-copy' / 'images' / 'hero-image.webp').is_file())
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python -m unittest tests\\test_mirror_page.py -v`

Expected: FAIL because the local hero asset has not yet been included or referenced.

- [ ] **Step 3: Copy the asset and replace the target image source**

```powershell
Copy-Item -LiteralPath 'C:\Users\kiranightly\Downloads\hero-image.webp' -Destination 'site-copy\images\hero-image.webp'
```

Replace the source attributes of the first-screen image currently mapped from `538a4aad-91b9-42d6-8445-b37cc450d53d` with `images/hero-image.webp`. Add a selector scoped to that image which applies `object-fit: contain` and preserves its existing responsive container.

- [ ] **Step 4: Run test to verify it passes**

Run: `python -m unittest tests\\test_mirror_page.py -v`

Expected: PASS.

- [ ] **Step 5: Audit local resources**

Run: `python tools\\mirror_page.py --root site-copy --audit`

Expected: `Missing mapped files: 0`.
