from pathlib import Path
import unittest


class ConsultationContactLinksTests(unittest.TestCase):
    def test_contact_icons_use_phone_and_vk_only(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const updateConsultationContacts = () =>", script)
        self.assertIn("mailto:", script)
        self.assertIn("mailLink.remove()", script)
        self.assertIn("phoneLink.href = 'tel:+79209494007'", script)
        self.assertIn("https://vk.ru/maximumvld", script)
        self.assertIn("socialLink.target = '_blank'", script)
        self.assertIn("socialLink.rel = 'noopener noreferrer'", script)
        self.assertIn("offline-contact-icon--vk", script)
        self.assertIn("baseScript.addEventListener('load'", script)


if __name__ == "__main__":
    unittest.main()
