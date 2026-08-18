from pathlib import Path
import unittest


class VladimirFooterTests(unittest.TestCase):
    def test_footer_keeps_only_required_legal_contacts_and_map(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const renderVladimirFooter = () =>", script)
        self.assertIn('ООО "Максимум Образование".', script)
        self.assertIn('2023666710 от 03.08.2023', script)
        self.assertIn('8 (800) 707-25-62', script)
        self.assertIn("href = 'tel:+79209494007'", script)
        self.assertIn('+79209494007', script)
        self.assertIn('Политика обработки персональных данных', script)
        self.assertIn('images/privacy-policy-f96c444ede.html', script)
        self.assertIn('openstreetmap.org/export/embed.html', script)
        self.assertIn('Владимир', script)
        self.assertIn('footer.replaceChildren(footerInner)', script)
        self.assertIn('offline-vladimir-footer__map', script)
        self.assertIn('@media (max-width: 760px)', script)

    def test_old_footer_columns_are_not_recreated(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertNotIn("footerInner.innerHTML", script)
        self.assertNotIn("display: none", script[script.find('offline-vladimir-footer'):])


if __name__ == "__main__":
    unittest.main()
