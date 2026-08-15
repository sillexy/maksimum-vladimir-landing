from pathlib import Path
import unittest


class ConsultationFormControlTests(unittest.TestCase):
    def setUp(self):
        root = Path(__file__).parents[1]
        self.script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

    def test_numeric_lead_form_id_is_not_used_as_an_invalid_css_id_selector(self):
        self.assertNotIn('#50f91115-b4f9-4cd8-aba9-a46e915220334', self.script)
        self.assertIn('[id="50f91115-b4f9-4cd8-aba9-a46e915220334"]', self.script)

    def test_parent_student_switch_has_target_pill_styling(self):
        self.assertIn('.offline-user-type__button.is-active', self.script)
        self.assertIn('background: #ff7a0d !important', self.script)
        self.assertIn('border-radius: 999px !important', self.script)
        self.assertIn('height: 40px !important', self.script)

    def test_grade_select_matches_the_target_field_height_and_shape(self):
        self.assertIn('.offline-grade-select', self.script)
        self.assertIn('height: 48px !important', self.script)
        self.assertIn('border-radius: 9px !important', self.script)
        self.assertIn('appearance: none !important', self.script)


if __name__ == "__main__":
    unittest.main()
