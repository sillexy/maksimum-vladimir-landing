from pathlib import Path
import unittest


class ConsultationContactLinksTests(unittest.TestCase):
    def test_contact_icon_row_and_icon_generation_are_removed_from_code(self):
        root = Path(__file__).parents[1]
        override = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")
        base = (root / "site-copy" / "js" / "offline-reviews-base.js").read_text(encoding="utf-8")

        self.assertNotIn("const updateConsultationContacts = () =>", override)
        self.assertNotIn("offline-contact-icon--vk", override)
        self.assertNotIn("https://vk.ru/maximumvld", override)

        self.assertNotIn("const iconEnvelope", base)
        self.assertNotIn("const iconPhone", base)
        self.assertNotIn("const iconTelegram", base)
        self.assertNotIn("const iconSvgs", base)
        self.assertIn("const contactLinksRow = leadRoot.querySelector('.sc-66c7e2be-2')", base)
        self.assertIn("contactLinksRow?.remove()", base)


if __name__ == "__main__":
    unittest.main()
