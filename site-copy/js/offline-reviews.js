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

  const consultationImage = document.querySelector(
    '#ee34b58c-b141-491b-9775-4fb1adbfdbce img[alt="Изображение карточки"]'
  );

  if (consultationImage) {
    consultationImage.removeAttribute('srcset');
    consultationImage.removeAttribute('sizes');
    consultationImage.src = 'images/GreenWoman.webp';
    consultationImage.style.objectFit = 'contain';
    consultationImage.style.objectPosition = 'right bottom';
  }

  const leadRoot = document.getElementById('50f91115-b4f9-4cd8-aba9-a46e915220334');

  if (leadRoot) {
    const style = document.createElement('style');
    style.textContent = `
      #50f91115-b4f9-4cd8-aba9-a46e915220334 #userType {
        display: block !important;
        width: fit-content !important;
        min-width: 0 !important;
        height: auto !important;
        padding: 0 !important;
        border: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-user-type {
        display: inline-flex !important;
        align-items: center !important;
        gap: 0 !important;
        height: 40px !important;
        padding: 4px !important;
        box-sizing: border-box !important;
        border-radius: 999px !important;
        background: #f4f4f4 !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-user-type__button {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-width: 90px !important;
        height: 32px !important;
        padding: 0 16px !important;
        box-sizing: border-box !important;
        border: 0 !important;
        border-radius: 999px !important;
        outline: 0 !important;
        background: transparent !important;
        box-shadow: none !important;
        color: #111 !important;
        font: inherit !important;
        font-size: 14px !important;
        font-weight: 400 !important;
        line-height: 32px !important;
        cursor: pointer !important;
        transition: background-color .18s ease, color .18s ease !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-user-type__button.is-active {
        background: #ff7a0d !important;
        color: #fff !important;
        font-weight: 600 !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-student-field {
        margin-bottom: 8px !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334[data-offline-user-type="student"] .sc-4146ca2e-0,
      #50f91115-b4f9-4cd8-aba9-a46e915220334[data-offline-user-type="student"] .sc-4146ca2e-1 {
        height: auto !important;
        min-height: 512px !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334[data-offline-user-type="student"] .sc-99810472-0 {
        height: auto !important;
        min-height: 576px !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-grade-wrap {
        position: relative !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-grade-wrap::after {
        content: '' !important;
        position: absolute !important;
        top: 50% !important;
        right: 16px !important;
        width: 8px !important;
        height: 8px !important;
        margin-top: -6px !important;
        border-right: 1px solid #8c8c8c !important;
        border-bottom: 1px solid #8c8c8c !important;
        transform: rotate(45deg) !important;
        pointer-events: none !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-grade-select {
        display: block !important;
        width: 100% !important;
        height: 48px !important;
        box-sizing: border-box !important;
        padding: 0 42px 0 12px !important;
        border: 1px solid transparent !important;
        border-radius: 9px !important;
        outline: none !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        background: #f5f5f5 !important;
        color: #9aa4b3 !important;
        font: inherit !important;
        font-size: 16px !important;
        cursor: pointer !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-grade-select:focus {
        border-color: #ff7a0d !important;
        background: #fff !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-grade-select.has-value {
        color: #111 !important;
      }

      #50f91115-b4f9-4cd8-aba9-a46e915220334 .offline-contact-icon {
        display: block !important;
        width: 25px !important;
        height: 25px !important;
      }
    `;
    document.head.append(style);

    const parentNameInput = leadRoot.querySelector('#parentName, input[name="parentName"]');
    const parentPhoneInput = leadRoot.querySelector('#parentPhone, input[name="parentPhone"]');
    const parentNameItem = parentNameInput?.closest('.ant-form-item') || parentNameInput?.parentElement?.parentElement;
    const parentPhoneItem = parentPhoneInput?.closest('.ant-form-item') || parentPhoneInput?.parentElement?.parentElement;
    const fields = leadRoot.querySelector('.sc-4146ca2e-5') || parentNameItem?.parentElement || parentNameInput?.closest('form');

    const cloneInputField = (source, id, placeholder) => {
      if (!source) return null;
      const clone = source.cloneNode(true);
      clone.classList.add('offline-student-field');
      clone.dataset.offlineStudentField = 'true';
      const input = clone.querySelector('input');
      if (input) {
        input.id = id;
        input.name = id;
        input.value = '';
        input.placeholder = placeholder;
        input.removeAttribute('aria-describedby');
      }
      return clone;
    };

    const ensureStudentFields = () => {
      if (!fields || fields.querySelector('[data-offline-student-field]')) return;
      const nameItem = leadRoot.querySelector('#parentName, input[name="parentName"]')?.closest('.ant-form-item') || parentNameItem;
      const phoneItem = leadRoot.querySelector('#parentPhone, input[name="parentPhone"]')?.closest('.ant-form-item') || parentPhoneItem;
      if (!nameItem || !phoneItem) return;

      const nameField = cloneInputField(nameItem, 'studentName', 'Имя');
      const phoneField = cloneInputField(phoneItem, 'studentPhone', 'Телефон');
      if (nameField) fields.insertBefore(nameField, nameItem);
      if (phoneField) fields.insertBefore(phoneField, nameItem);
    };

    const removeStudentFields = () => {
      fields?.querySelectorAll('[data-offline-student-field]').forEach((item) => item.remove());
    };

    let currentMode = 'parent';
    const userType = leadRoot.querySelector('#userType');

    const setMode = (mode) => {
      currentMode = mode === 'student' ? 'student' : 'parent';
      leadRoot.dataset.offlineUserType = currentMode;

      userType?.querySelectorAll('.offline-user-type__button').forEach((button) => {
        const active = button.dataset.mode === currentMode;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', active ? 'true' : 'false');
      });

      if (currentMode === 'student') ensureStudentFields();
      else removeStudentFields();
    };

    if (userType) {
      userType.innerHTML = `
        <div class="offline-user-type" role="group" aria-label="Кто заполняет форму">
          <button class="offline-user-type__button is-active" type="button" data-mode="parent" aria-pressed="true">Родитель</button>
          <button class="offline-user-type__button" type="button" data-mode="student" aria-pressed="false">Ученик</button>
        </div>`;

      userType.querySelectorAll('.offline-user-type__button').forEach((button) => {
        button.addEventListener('click', () => setMode(button.dataset.mode));
      });
    }

    setMode('parent');

    const findLeafByText = (text) =>
      [...leadRoot.querySelectorAll('span, div, p')].find(
        (node) => node.children.length === 0 && node.textContent.trim() === text
      );

    const originalGradeInput = leadRoot.querySelector('#grade, input[name="grade"], input[id*="grade" i]');
    const gradePlaceholder = findLeafByText('В какой класс поступает ученик');
    const gradeItem =
      originalGradeInput?.closest('.ant-form-item') ||
      gradePlaceholder?.closest('.ant-form-item') ||
      null;

    const gradeWrap = document.createElement('div');
    gradeWrap.className = 'offline-grade-wrap';
    gradeWrap.innerHTML = `
      <select class="offline-grade-select" id="offlineGrade" name="grade" aria-label="В какой класс поступает ученик" required>
        <option value="" selected disabled>В какой класс поступает ученик</option>
        <option value="5">5 класс</option>
        <option value="6">6 класс</option>
        <option value="7">7 класс</option>
        <option value="8">8 класс</option>
        <option value="9">9 класс</option>
        <option value="10">10 класс</option>
        <option value="11">11 класс</option>
      </select>`;

    let gradeMounted = false;

    if (gradeItem) {
      gradeItem.innerHTML = '';
      gradeItem.append(gradeWrap);
      gradeMounted = true;
    } else if (gradePlaceholder) {
      const inertControl = gradePlaceholder.closest('.ant-select') || gradePlaceholder.parentElement;
      if (inertControl) {
        inertControl.style.display = 'none';
        inertControl.insertAdjacentElement('afterend', gradeWrap);
        gradeMounted = true;
      }
    }

    if (!gradeMounted && fields) {
      const fallbackAnchor = parentPhoneItem || parentPhoneInput?.parentElement;
      if (fallbackAnchor?.parentElement === fields) {
        fallbackAnchor.insertAdjacentElement('afterend', gradeWrap);
      } else {
        fields.append(gradeWrap);
      }
    }

    const gradeSelect = gradeWrap.querySelector('.offline-grade-select');
    gradeSelect?.addEventListener('change', () => {
      gradeSelect.classList.toggle('has-value', Boolean(gradeSelect.value));
    });

    const iconEnvelope = `
      <svg class="offline-contact-icon" viewBox="0 0 25 25" aria-hidden="true">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#ff9b50"/>
        <rect x="5.3" y="7.4" width="14.4" height="10.4" rx="2" fill="#fff"/>
        <path d="M6.4 9.1 12.5 14l6.1-4.9" fill="none" stroke="#ff9b50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;

    const iconPhone = `
      <svg class="offline-contact-icon" viewBox="0 0 25 25" aria-hidden="true">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#ff9b50"/>
        <path d="M8.1 6.5c.5-.4 1.2-.3 1.5.2l1.5 2.5c.3.5.2 1.1-.2 1.5l-1 .9c.8 1.7 2 2.9 3.7 3.7l.9-1c.4-.4 1-.5 1.5-.2l2.5 1.5c.5.3.6 1 .2 1.5l-1.1 1.4c-.5.6-1.2.9-2 .8-4.8-.8-8.6-4.6-9.4-9.4-.1-.8.2-1.5.8-2l1.1-1.4Z" fill="#fff"/>
      </svg>`;

    const iconTelegram = `
      <svg class="offline-contact-icon" viewBox="0 0 25 25" aria-hidden="true">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#29a9ea"/>
        <path d="M19.3 6.7 16.9 18c-.2.8-.7 1-1.3.6l-3.7-2.7-1.8 1.7c-.2.2-.4.4-.7.4l.3-3.8 6.8-6.2c.3-.3-.1-.4-.5-.2l-8.4 5.3-3.6-1.1c-.8-.2-.8-.8.2-1.2l13.9-5.4c.7-.3 1.3.1 1.2 1.3Z" fill="#fff"/>
      </svg>`;

    leadRoot.querySelectorAll('.sc-66c7e2be-2 a').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (href.startsWith('mailto:')) link.innerHTML = iconEnvelope;
      else if (href.startsWith('tel:')) link.innerHTML = iconPhone;
      else link.innerHTML = iconTelegram;
    });
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
