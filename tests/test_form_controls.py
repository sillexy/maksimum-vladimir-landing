from pathlib import Path
import unittest


class ConsultationFormControlTests(unittest.TestCase):
    def setUp(self):
        root = Path(__file__).parents[1]
        self.script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")
        self.css = (root / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")

    def test_parent_student_switch_has_target_pill_styling(self):
        self.assertIn('.offline-user-type__button.is-active', self.css)
        self.assertIn('background: #ff7a0d !important', self.css)
        self.assertIn('border-radius: 999px !important', self.css)

    def test_custom_grade_dropdown_is_not_a_native_select(self):
        self.assertIn('offline-grade-dropdown__trigger', self.script)
        self.assertIn('offline-grade-dropdown__menu', self.script)
        self.assertIn('data-grade="11"', self.script)
        self.assertNotIn('<select class="offline-grade-select"', self.script)

    def test_custom_grade_dropdown_has_reference_styling(self):
        self.assertIn('.offline-grade-dropdown__menu', self.script)
        self.assertIn('.offline-grade-dropdown__option.is-selected', self.script)
        self.assertIn('box-shadow: 0 6px 18px rgba(0, 0, 0, .14)', self.script)
        self.assertIn('background: #fff1e6 !important', self.script)
        self.assertIn('border-color: #ff7a0d !important', self.script)


if __name__ == "__main__":
    unittest.main()
