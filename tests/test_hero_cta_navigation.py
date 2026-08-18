from pathlib import Path
import unittest


class HeroCtaNavigationTests(unittest.TestCase):
    def test_hero_ctas_scroll_to_requested_sections(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const setupHeroCtas = () =>", script)
        self.assertIn("Пройти тест", script)
        self.assertIn("Записаться", script)
        self.assertIn("Узнать больше", script)
        self.assertIn("Записаться на консультацию", script)
        self.assertIn("Консультация по профориентации", script)
        self.assertIn("scrollIntoView({ behavior: 'smooth', block: 'start' })", script)
        self.assertIn("stopPropagation()", script)


if __name__ == "__main__":
    unittest.main()
