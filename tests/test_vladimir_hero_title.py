from pathlib import Path
import unittest


class VladimirHeroTitleTests(unittest.TestCase):
    def test_hero_title_mentions_vladimir(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const updateHeroTitle = () =>", script)
        self.assertIn("Бесплатная консультация по профориентации", script)
        self.assertIn("Бесплатная консультация по&nbsp;профориентации во Владимире", script)
        self.assertIn("heading.innerHTML", script)


if __name__ == "__main__":
    unittest.main()
