from pathlib import Path
import unittest


class VladimirFooterTests(unittest.TestCase):
    def test_footer_keeps_only_required_legal_contacts_and_map(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const renderVladimirFooter = () =>", script)
        self.assertIn('ООО "Максимум Образование".', script)
        self.assertIn('2023666710 от 03.08.2023', script)
        footer_block = script[script.find("const renderVladimirFooter = () =>"):script.find("const mapWrap = document.createElement('div')")]
        self.assertNotIn('8 (800) 707-25-62', footer_block)
        self.assertNotIn("tel:88007072562", footer_block)
        self.assertNotIn('const mainPhone =', footer_block)
        self.assertIn("oldPhone.href = 'tel:+79209494007'", footer_block)
        self.assertIn("oldPhone.textContent = '+7 (920) 949-40-07'", footer_block)
        self.assertEqual(footer_block.count("tel:+79209494007"), 1)
        self.assertIn('Политика обработки персональных данных', script)
        self.assertIn("privacySource?.getAttribute('href') || '/privacy-policy'", script)
        self.assertIn('openstreetmap.org/export/embed.html', script)
        self.assertIn('Владимир', script)
        self.assertIn('footer.replaceChildren(footerInner)', script)
        self.assertIn('offline-vladimir-footer__map', script)
        self.assertIn('@media (max-width: 760px)', script)

    def test_old_footer_columns_are_physically_removed(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn('footer.replaceChildren(footerInner)', script)
        self.assertNotIn("footerInner.innerHTML", script)
        footer_css = script[script.find('.offline-vladimir-footer'):script.find('const getControl')]
        self.assertNotIn('display: none', footer_css)


if __name__ == "__main__":
    unittest.main()
