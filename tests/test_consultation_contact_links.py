from pathlib import Path
import unittest


class ConsultationContactLinksTests(unittest.TestCase):
    def test_contact_block_reuses_original_orange_panel_mount(self):
        root = Path(__file__).parents[1]
        base = (root / "site-copy" / "js" / "offline-reviews-base.js").read_text(encoding="utf-8")

        self.assertIn("const contactBlocks = Array.from(leadRoot.querySelectorAll('.sc-66c7e2be-0'))", base)
        self.assertIn("block.textContent.includes('Как еще с нами можно связаться')", base)
        self.assertIn("contactMount.classList.add('offline-consultation-contacts')", base)
        self.assertIn("contactMount.replaceChildren()", base)
        self.assertIn("contactMount.append(title, links)", base)
        self.assertNotIn("leadRoot.append(contactBlock)", base)
        self.assertNotIn("margin-top: 56px", base)
        self.assertNotIn("margin-top: 40px", base)
        self.assertIn('href="tel:+79209494007"', base)
        self.assertIn('href="https://vk.ru/maximumvld"', base)
        self.assertIn('target="_blank"', base)
        self.assertIn('rel="noopener noreferrer"', base)
        self.assertIn("<svg", base)
        self.assertIn("@media (max-width: 760px)", base)


if __name__ == "__main__":
    unittest.main()
