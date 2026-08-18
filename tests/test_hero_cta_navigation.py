from pathlib import Path
import unittest


class HeroCtaNavigationTests(unittest.TestCase):
    def test_hero_ctas_use_real_block_targets_with_header_offset(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const getHeroCtas = () =>", script)
        self.assertIn("const syncHeroOverrides = () =>", script)
        self.assertIn("Пройти тест", script)
        self.assertIn("Записаться", script)
        self.assertIn("Узнать больше", script)
        self.assertIn("[id^=\"50f91115-b4f9-4cd8-aba9-a46e91522033\"]", script)
        self.assertIn("document.getElementById('1')", script)
        self.assertIn("#header_container", script)
        self.assertIn("getBoundingClientRect().height", script)
        self.assertIn("window.scrollTo({", script)
        self.assertIn("behavior: 'smooth'", script)
        self.assertIn("document.addEventListener('click', handleHeroCtaClick, true)", script)
        self.assertIn("new MutationObserver(syncHeroOverrides)", script)


if __name__ == "__main__":
    unittest.main()
