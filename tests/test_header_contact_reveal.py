from pathlib import Path
import unittest


class HeaderContactRevealTests(unittest.TestCase):
    def test_phone_reveals_clickable_number_and_closed_state_has_equal_spacing(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn('[data-qa="headerPhone"]', script)
        self.assertIn('[data-qa="headerLocationButton"]', script)
        self.assertIn("phoneNumber.href = 'tel:+79209494007'", script)
        self.assertIn("phoneNumber.textContent = '+7 (920) 949-40-07'", script)
        self.assertIn("phoneNumber.setAttribute('aria-label', 'Позвонить +7 (920) 949-40-07')", script)
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

    def test_mobile_phone_calls_directly_and_location_is_not_truncated(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("window.matchMedia('(max-width: 600px)').matches", script)
        self.assertIn("window.location.href = 'tel:+79209494007'", script)
        mobile_css = script[script.find('@media (max-width: 600px)'):script.find('  `;', script.find('@media (max-width: 600px)'))]
        self.assertIn('.offline-header-phone-number {\n        display: none !important;', mobile_css)
        self.assertIn('white-space: nowrap;', mobile_css)
        self.assertIn('max-width: none;', mobile_css)
        self.assertNotIn('text-overflow: ellipsis', mobile_css)
        self.assertNotIn('overflow: hidden', mobile_css)


if __name__ == "__main__":
    unittest.main()
