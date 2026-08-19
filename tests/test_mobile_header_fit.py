from pathlib import Path
import unittest


class MobileHeaderFitTests(unittest.TestCase):
    def test_mobile_header_content_is_compacted_without_affecting_desktop(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("@media (max-width: 600px)", script)
        self.assertIn("[data-offline-header-logo-home] img", script)
        self.assertIn("img[data-offline-header-logo-home]", script)
        self.assertIn("width: 132px !important;", script)
        self.assertIn("height: 34px !important;", script)
        self.assertIn("#header_container .offline-header-contact-row", script)
        self.assertIn("column-gap: 6px !important;", script)
        self.assertIn("font-size: 11px;", script)
        self.assertIn("max-width: 118px;", script)


if __name__ == "__main__":
    unittest.main()
