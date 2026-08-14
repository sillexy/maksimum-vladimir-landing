import importlib.util
from pathlib import Path
import unittest


class MirrorPageTests(unittest.TestCase):
    def test_review_avatars_use_the_four_user_provided_image_files(self):
        root = Path(__file__).parents[1]
        css = (root / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")

        self.assertIn('offline-review-vladimir.webp', css)
        self.assertIn('offline-review-tv.webp', css)
        self.assertIn('background-size: cover', css)
        for asset in (
            'offline-review-vladimir.webp',
            'offline-review-nikita.webp',
            'offline-review-natalya.webp',
            'offline-review-tv.webp',
        ):
            self.assertTrue((root / "site-copy" / "images" / asset).is_file())

    def test_header_navigation_items_are_hidden(self):
        css = (Path(__file__).parents[1] / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")

        self.assertIn('header ul.sc-af66aef5-0 > li', css)
        self.assertIn('visibility: hidden !important', css)

    def test_header_uses_user_provided_logo(self):
        root = Path(__file__).parents[1]
        css = (root / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")

        self.assertIn('images/offline-logo.webp', css)
        self.assertIn('img[src="images/image-786b130475.jpg"]', css)
        self.assertTrue((root / "site-copy" / "images" / "offline-logo.webp").is_file())

    def test_benefits_block_uses_three_local_user_images(self):
        root = Path(__file__).parents[1]
        benefits_page = (root / "site-copy" / "images" / "page56718809-efa9d48ef9.html")
        html = benefits_page.read_text(encoding="utf-8") if benefits_page.exists() else ""

        self.assertIn('offline-benefits-grid', html)
        self.assertIn('offline-benefit-1.webp', html)
        for asset in ("offline-benefit-1.webp", "offline-benefit-2.webp", "offline-benefit-3.webp"):
            self.assertTrue((root / "site-copy" / "images" / asset).is_file())

    def test_hero_uses_user_provided_local_image(self):
        root = Path(__file__).parents[1]
        css = (root / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")

        self.assertIn('images/hero-image.webp', css)
        self.assertIn('img[src="images/image-54fa23705b.jpg"]', css)
        self.assertTrue((root / "site-copy" / "images" / "hero-image.webp").is_file())

    def test_offline_copy_uses_golos_text_globally(self):
        css = (Path(__file__).parents[1] / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")
        self.assertIn('font-family: GolosText, Arial, sans-serif !important', css)

    def test_consultation_card_has_clear_spacing_after_benefits_block(self):
        css = (Path(__file__).parents[1] / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")
        self.assertIn('[id="1"]', css)
        self.assertIn('margin-top: 64px', css)

    def test_review_slider_is_rendered_as_a_visible_four_column_grid(self):
        css = (Path(__file__).parents[1] / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")
        self.assertIn('grid-template-columns: repeat(4, minmax(0, 1fr))', css)
        self.assertIn('visibility: visible !important', css)

    def test_long_review_text_is_clamped_above_its_action_button(self):
        css = (Path(__file__).parents[1] / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")
        self.assertIn('-webkit-line-clamp: 10', css)
        self.assertIn('padding-bottom: 58px', css)

    def test_review_initials_use_soft_polygon_avatar_shape(self):
        css = (Path(__file__).parents[1] / "site-copy" / "css" / "offline-overrides.css").read_text(encoding="utf-8")
        self.assertIn('clip-path: polygon', css)

    def test_static_overrides_load_review_modal_script(self):
        script = Path(__file__).parents[1] / "tools" / "mirror_page.py"
        spec = importlib.util.spec_from_file_location("mirror_page", script)
        mirror_page = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mirror_page)

        result = mirror_page.inject_static_overrides('<head></head>')
        self.assertIn('src="js/offline-reviews.js"', result)

    def test_local_server_maps_the_original_page_path_to_index(self):
        script = Path(__file__).parents[1] / "tools" / "local_server.py"
        spec = importlib.util.spec_from_file_location("local_server", script)
        local_server = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(local_server)

        self.assertEqual(
            local_server.resolve_file(Path("site-copy"), "/proforientacia/free"),
            Path("site-copy/index.html"),
        )

    def test_local_server_maps_next_runtime_assets_from_manifest(self):
        script = Path(__file__).parents[1] / "tools" / "local_server.py"
        spec = importlib.util.spec_from_file_location("local_server", script)
        local_server = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(local_server)

        root = Path("site-copy")
        resolved = local_server.resolve_file(root, "/_next/static/css/fedf4d4bfca4f235.css")
        self.assertTrue(resolved.is_file())

    def test_local_server_maps_page_relative_asset_paths(self):
        script = Path(__file__).parents[1] / "tools" / "local_server.py"
        spec = importlib.util.spec_from_file_location("local_server", script)
        local_server = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(local_server)

        self.assertTrue(
            local_server.resolve_file(
                Path("site-copy"), "/proforientacia/css/fedf4d4bfca4f235-5e56471ec3.css"
            ).is_file()
        )

    def test_disable_scripts_keeps_script_markup_but_prevents_execution(self):
        script = Path(__file__).parents[1] / "tools" / "mirror_page.py"
        spec = importlib.util.spec_from_file_location("mirror_page", script)
        mirror_page = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mirror_page)

        result = mirror_page.disable_scripts('<script src="js/app.js"></script>')
        self.assertIn('data-offline-original-src="js/app.js"', result)
        self.assertIn('type="application/x-offline-copy"', result)

    def test_static_overrides_are_linked_once(self):
        script = Path(__file__).parents[1] / "tools" / "mirror_page.py"
        spec = importlib.util.spec_from_file_location("mirror_page", script)
        mirror_page = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mirror_page)

        result = mirror_page.inject_static_overrides('<head></head>')
        self.assertIn('href="css/offline-overrides.css"', result)

    def test_resource_request_timeout_is_short_enough_for_batch_downloads(self):
        script = Path(__file__).parents[1] / "tools" / "mirror_page.py"
        spec = importlib.util.spec_from_file_location("mirror_page", script)
        mirror_page = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mirror_page)

        self.assertLessEqual(mirror_page.REQUEST_TIMEOUT_SECONDS, 2)

    def test_local_url_makes_path_relative_to_owner(self):
        script = Path(__file__).parents[1] / "tools" / "mirror_page.py"
        spec = importlib.util.spec_from_file_location("mirror_page", script)
        mirror_page = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(mirror_page)

        mapping = {"https://example.test/assets/logo.svg": "images/logo.svg"}
        self.assertEqual(
            mirror_page.local_url(
                "https://example.test/assets/logo.svg", Path("css/main.css"), mapping
            ),
            "../images/logo.svg",
        )
