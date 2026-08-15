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
        self.assertIn(scope + ' .offline-grade-dropdown', self.css)

    def test_parent_student_switch_has_target_pill_styling(self):
        self.assertIn('.offline-user-type__button.is-active', self.css)
        self.assertIn('background: #ff7a0d !important', self.css)
        self.assertIn('border-radius: 999px !important', self.css)
        self.assertIn('height: 40px !important', self.css)

    def test_grade_dropdown_matches_reference_visuals(self):
        self.assertIn('.offline-grade-dropdown__trigger', self.css)
        self.assertIn('.offline-grade-dropdown__menu', self.css)
        self.assertIn('.offline-grade-dropdown__option.is-selected', self.css)
        self.assertIn('box-shadow: 0 6px 18px rgba(0, 0, 0, .14)', self.css)
        self.assertIn('border-radius: 8px !important', self.css)

    def test_working_controls_are_created_by_the_offline_script(self):
        self.assertIn('offline-user-type__button is-active', self.script)
        self.assertIn('offline-grade-dropdown__trigger', self.script)
        self.assertIn('data-grade="11"', self.script)
        self.assertNotIn('<select class="offline-grade-select"', self.script)


if __name__ == "__main__":
    unittest.main()
