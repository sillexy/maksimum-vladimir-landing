from pathlib import Path
import unittest


class ConsultationCountTests(unittest.TestCase):
    def test_advantages_copy_is_overridden_to_30_thousand_students(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const updateConsultationCount = () =>", script)
        self.assertIn("Наши консультации уже прошли более 2 млн. учеников по всей России", script)
        self.assertIn("Наши консультации уже прошли более 30 тыс. учеников по всей России", script)
        self.assertIn("new MutationObserver(updateConsultationCount)", script)

    def test_reach_headline_is_overridden_to_30_thousand_students(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const updateReachHeadline = () =>", script)
        self.assertIn("Более 2 000 000 школьников прошли нашу профориентацию", script)
        self.assertIn("Более 30 000 школьников прошли нашу профориентацию", script)
        self.assertIn("new MutationObserver(() =>", script)
        self.assertIn("if (updateReachHeadline()) reachHeadlineObserver.disconnect()", script)


if __name__ == "__main__":
    unittest.main()
