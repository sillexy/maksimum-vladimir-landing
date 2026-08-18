from pathlib import Path
import unittest


class ConsultationCardOverrideTests(unittest.TestCase):
    def test_consultation_card_copy_and_cta_are_overridden_without_mutation_loop(self):
        root = Path(__file__).parents[1]
        script = (root / "site-copy" / "js" / "offline-reviews.js").read_text(encoding="utf-8")

        self.assertIn("ee34b58c-b141-491b-9775-4fb1adbfdbce", script)
        self.assertIn("Вам придёт ссылка на проф. тест", script)
        self.assertIn("Вы в спокойной обстановке ответите на вопросы", script)
        self.assertIn("Мы свяжемся с вами и подберем удобное время для бесплатной консультации", script)
        self.assertIn("по предметам, учебным заведениям и стратегии поступления", script)
        self.assertIn("Бесплатно до 30 августа", script)
        self.assertIn("data-offline-consultation-cta", script)
        self.assertIn("smoothScrollTo(getConsultationFormTarget())", script)
        self.assertIn("if (cta && normalizedText(cta) !== 'Записаться')", script)
        self.assertIn("if (cta && !cta.hasAttribute('data-offline-consultation-cta'))", script)
        self.assertIn("consultationCardObserver.observe(consultationCard, { childList: true, subtree: true })", script)
        self.assertNotIn("consultationCardObserver.observe(document.documentElement", script)


if __name__ == "__main__":
    unittest.main()
