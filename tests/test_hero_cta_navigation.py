from pathlib import Path
import unittest


class HeroCtaNavigationTests(unittest.TestCase):
    def test_hero_ctas_survive_react_hydration_and_scroll_to_requested_sections(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const getHeroCtas = () =>", script)
        self.assertIn("const syncHeroOverrides = () =>", script)
        self.assertIn("Пройти тест", script)
        self.assertIn("Записаться", script)
        self.assertIn("Узнать больше", script)
        self.assertIn("Записаться на консультацию", script)
        self.assertIn("Консультация по профориентации", script)
        self.assertIn("scrollIntoView({ behavior: 'smooth', block: 'start' })", script)
        self.assertIn("document.addEventListener('click', handleHeroCtaClick, true)", script)
        self.assertIn("new MutationObserver(syncHeroOverrides)", script)
        self.assertIn("window.setTimeout(() => heroOverrideObserver.disconnect(), 15000)", script)


if __name__ == "__main__":
    unittest.main()
