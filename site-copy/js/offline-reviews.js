(() => {
  const advantages = document.getElementById('8ad80d4b-dd6b-4b77-8e1b-49679da9795d1');

  if (advantages) {
    advantages.innerHTML = `
      <section class="offline-advantages" aria-labelledby="offline-advantages-title">
        <div class="offline-advantages__inner">
          <h2 class="offline-advantages__title" id="offline-advantages-title">Преимущества консультации по профориентации</h2>

          <div class="offline-advantages__grid">
            <article class="offline-advantages__card offline-advantages__card--quality">
              <div class="offline-advantages__copy offline-advantages__copy--quality">
                <h3>Гарантия качества</h3>
                <p>Это не просто тест из интернета, а уникальная методика оценки личности школьника</p>
              </div>
              <img class="offline-advantages__image offline-advantages__image--quality" src="images/advantages1.webp" alt="" decoding="async" />
            </article>

            <div class="offline-advantages__side">
              <article class="offline-advantages__card offline-advantages__card--experts">
                <div class="offline-advantages__copy offline-advantages__copy--experts">
                  <h3>Опытные эксперты-<br>профориентологи</h3>
                  <p>Наши консультации уже прошли более 2 млн. учеников по всей России</p>
                </div>
                <img class="offline-advantages__image offline-advantages__image--experts" src="images/advantages2.webp" alt="" decoding="async" />
              </article>

              <article class="offline-advantages__card offline-advantages__card--advice">
                <div class="offline-advantages__copy offline-advantages__copy--advice">
                  <h3>Практические советы</h3>
                  <p>Получите четкие и понятные рекомендации по выбранной профессии и шагам обучения</p>
                </div>
                <img class="offline-advantages__image offline-advantages__image--advice" src="images/advantages3.webp" alt="" decoding="async" />
              </article>
            </div>
          </div>
        </div>
      </section>`;
  }

  const section = document.getElementById('1a104f13-de4c-4b7f-a7bb-ffc403b3ee203');
  if (!section) return;

  const modal = document.createElement('div');
  modal.id = 'offline-review-modal';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="offline-review-modal__backdrop" data-close-review-modal></div>
    <article class="offline-review-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="offline-review-modal-title">
      <button class="offline-review-modal__close" type="button" aria-label="Закрыть" data-close-review-modal>×</button>
      <div class="offline-review-modal__title" id="offline-review-modal-title"></div>
      <p class="offline-review-modal__text"></p>
    </article>`;
  document.body.append(modal);

  const closeButton = modal.querySelector('.offline-review-modal__close');
  const title = modal.querySelector('.offline-review-modal__title');
  const text = modal.querySelector('.offline-review-modal__text');
  let activeButton = null;

  const closeModal = () => {
    modal.hidden = true;
    document.body.classList.remove('offline-review-modal-open');
    activeButton?.focus();
  };

  const openModal = (name, review, button) => {
    activeButton = button;
    title.textContent = name;
    text.textContent = review;
    modal.hidden = false;
    document.body.classList.add('offline-review-modal-open');
    closeButton.focus();
  };

  section.querySelectorAll('.sc-af0bad81-0').forEach((card) => {
    const paragraphs = [...card.querySelectorAll('p')]
      .map((item) => item.textContent.trim())
      .filter(Boolean);
    const review = paragraphs.reduce((longest, item) => item.length > longest.length ? item : longest, '');
    const name = paragraphs.find((item) => item !== review) || card.innerText.split('\n')[0].trim();
    card.classList.add('offline-review-card');

    if (review.length <= 300) return;

    const button = document.createElement('button');
    button.className = 'offline-review-card__more';
    button.type = 'button';
    button.textContent = 'читать полностью →';
    button.addEventListener('click', () => openModal(name, review, button));
    card.append(button);
  });

  modal.addEventListener('click', (event) => {
    if (event.target.closest('[data-close-review-modal]')) closeModal();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
})();
