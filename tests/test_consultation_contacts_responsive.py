from pathlib import Path
import unittest


class ConsultationContactsResponsiveTests(unittest.TestCase):
    def setUp(self):
        root = Path(__file__).parents[1]
        self.script = (root / "site-copy" / "js" / "offline-reviews-base.js").read_text(encoding="utf-8")

    def test_keeps_and_updates_both_responsive_contact_blocks(self):
        self.assertIn(
            "const contactBlocks = Array.from(leadRoot.querySelectorAll('.sc-66c7e2be-0')).filter(",
            self.script,
        )
        self.assertIn("contactBlocks.forEach((contactMount) => {", self.script)
        self.assertIn("contactMount.replaceChildren();", self.script)
        self.assertNotIn("if (block !== contactMount) block.remove();", self.script)


if __name__ == "__main__":
    unittest.main()
