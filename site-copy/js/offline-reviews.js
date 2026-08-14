(() => {
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
