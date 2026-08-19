from pathlib import Path
import unittest


class ConsultationContactLinksTests(unittest.TestCase):
    def test_contact_block_is_rebuilt_with_phone_and_vk_only(self):
        root = Path(__file__).parents[1]
        override = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")
        base = (root / "site-copy" / "js" / "offline-reviews-base.js").read_text(encoding="utf-8")

        self.assertNotIn("const updateConsultationContacts = () =>", override)
        self.assertNotIn("offline-contact-icon--vk", override)

        self.assertIn("const contactBlocks = leadRoot.querySelectorAll('.sc-66c7e2be-0')", base)
        self.assertIn("contactBlocks.forEach((block) => block.remove())", base)
        self.assertIn("const contactBlock = document.createElement('div')", base)
        self.assertIn("contactBlock.className = 'offline-consultation-contacts'", base)
        self.assertIn("Как еще с нами можно связаться", base)
        self.assertIn("href=\"tel:+79209494007\"", base)
        self.assertIn("href=\"https://vk.ru/maximumvld\"", base)
        self.assertIn("target=\"_blank\"", base)
        self.assertIn("rel=\"noopener noreferrer\"", base)
        self.assertIn("<svg", base)
        self.assertNotIn("<img", base[base.find("const contactBlock ="):])
        self.assertIn("leadRoot.append(contactBlock)", base)
        self.assertIn(".offline-consultation-contacts__links", base)
        self.assertIn("@media (max-width: 760px)", base)


if __name__ == "__main__":
    unittest.main()
