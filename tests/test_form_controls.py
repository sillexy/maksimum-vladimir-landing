from pathlib import Path
import unittest


class ConsultationFormControlTests(unittest.TestCase):
    def setUp(self):
        root = Path(__file__).parents[1]
        self.script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")
        self.css = (root / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")

    def test_form_controls_have_valid_numeric_id_scoped_css(self):
        scope = '[id="50f91115-b4f9-4cd8-aba9-a46e915220334"]'
        self.assertIn(scope + ' .offline-user-type', self.css)
        self.assertIn(scope + ' .offline-user-type__button.is-active', self.css)
        self.assertIn(scope + ' .offline-grade-select', self.css)

    def test_parent_student_switch_has_target_pill_styling(self):
        self.assertIn('.offline-user-type__button.is-active', self.css)
        self.assertIn('background: #ff7a0d !important', self.css)
        self.assertIn('border-radius: 999px !important', self.css)
        self.assertIn('height: 40px !important', self.css)

    def test_grade_select_matches_the_target_field_height_and_shape(self):
        self.assertIn('.offline-grade-select', self.css)
        self.assertIn('height: 48px !important', self.css)
        self.assertIn('border-radius: 9px !important', self.css)
        self.assertIn('appearance: none !important', self.css)

    def test_working_controls_are_still_created_by_the_offline_script(self):
        self.assertIn('offline-user-type__button is-active', self.script)
        self.assertIn('offline-grade-select', self.script)
        self.assertIn('<option value="11">11 класс</option>', self.script)


if __name__ == "__main__":
    unittest.main()
