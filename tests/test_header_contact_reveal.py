from pathlib import Path
import unittest


class HeaderContactRevealTests(unittest.TestCase):
    def test_phone_reveals_requested_number_and_location_has_region_text(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")
        css = (root / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")

        self.assertIn('[data-qa="headerPhone"]', script)
        self.assertIn('[data-qa="headerLocationButton"]', script)
        self.assertIn('+79209494007', script)
        self.assertIn('Владимирская область', script)
        self.assertIn('preventDefault()', script)
        self.assertIn('aria-expanded', script)
        self.assertIn('offline-header-phone-number', css)
        self.assertIn('offline-header-phone-number.is-visible', css)
        self.assertIn('transition:', css)
        self.assertIn('offline-header-location-text', css)


if __name__ == "__main__":
    unittest.main()
