from pathlib import Path
import unittest


class HeaderLogoNavigationTests(unittest.TestCase):
    def test_logo_scrolls_to_page_top_without_viewport_dependency(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("const enhanceHeaderLogo = () =>", script)
        self.assertIn("#header_container", script)
        self.assertIn("data-offline-header-logo-home", script)
        self.assertIn("event.preventDefault()", script)
        self.assertIn("window.scrollTo({ top: 0, behavior: 'smooth' })", script)
        self.assertIn("new MutationObserver(() =>", script)
        self.assertIn("if (enhanceHeaderLogo()) logoObserver.disconnect()", script)
        self.assertNotIn("matchMedia", script[script.find("const enhanceHeaderLogo = () =>"):script.find("const updateHeroTitle = () =>")])


if __name__ == "__main__":
    unittest.main()
