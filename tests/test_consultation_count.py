from pathlib import Path
import unittest


class ConsultationCountTests(unittest.TestCase):
    def test_advantages_copy_uses_30_thousand_students(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews-base.js").read_text(encoding="utf-8")

        self.assertIn(
            "Наши консультации уже прошли более 30 тыс. учеников по всей России",
            script,
        )
        self.assertNotIn(
            "Наши консультации уже прошли более 2 млн. учеников по всей России",
            script,
        )


if __name__ == "__main__":
    unittest.main()
