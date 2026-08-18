from pathlib import Path
import unittest


class HeaderContactRevealTests(unittest.TestCase):
    def test_phone_reveals_clickable_number_and_closed_state_has_equal_spacing(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn('[data-qa="headerPhone"]', script)
        self.assertIn('[data-qa="headerLocationButton"]', script)
        self.assertIn('+79209494007', script)
        self.assertIn("phoneNumber.href = 'tel:+79209494007'", script)
        self.assertIn('Владимирская область', script)
        self.assertIn('preventDefault()', script)
        self.assertIn('aria-expanded', script)
        self.assertIn('offline-header-phone-number', script)
        self.assertIn('offline-header-phone-number.is-visible', script)
        self.assertIn('transition:', script)
        self.assertIn('offline-header-location-text', script)
        self.assertIn('offline-header-contact-group', script)
        self.assertIn('offline-header-contact-row', script)
        self.assertIn('column-gap: 3px', script)
        self.assertIn('.offline-header-phone-group {\n      gap: 0 !important;', script)
        self.assertIn('.offline-header-location-group {\n      gap: 3px !important;', script)
        self.assertIn('padding: 0 !important;', script)
        self.assertIn('min-width: 0 !important;', script)
        self.assertIn('margin-left: 3px;', script)


if __name__ == "__main__":
    unittest.main()
