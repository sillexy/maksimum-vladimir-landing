from pathlib import Path
import unittest


class MobileHeaderFitTests(unittest.TestCase):
    def test_mobile_header_is_shorter_and_vertically_centered(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        mobile_css = script[script.find("@media (max-width: 600px)"):script.find("  `;", script.find("@media (max-width: 600px)"))]

        self.assertIn("#header_container {", mobile_css)
        self.assertIn("height: 56px !important;", mobile_css)
        self.assertIn("min-height: 56px !important;", mobile_css)
        self.assertIn("#header_container header {", mobile_css)
        self.assertIn("align-items: center !important;", mobile_css)
        self.assertIn("#header_container header > div {", mobile_css)
        self.assertIn("padding-top: 0 !important;", mobile_css)
        self.assertIn("padding-bottom: 0 !important;", mobile_css)
        self.assertIn("#header_container [data-offline-header-logo-home] {", mobile_css)
        self.assertIn("align-self: center !important;", mobile_css)
        self.assertIn("#header_container .offline-header-contact-row {", mobile_css)


if __name__ == "__main__":
    unittest.main()
