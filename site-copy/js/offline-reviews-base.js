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
    const formStyle = document.createElement('style');
    formStyle.textContent = `
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown {
        position: relative !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__trigger {
        position: relative !important;
        display: flex !important;
        align-items: center !important;
        width: 100% !important;
        height: 48px !important;
        box-sizing: border-box !important;
        padding: 0 44px 0 12px !important;
        border: 1px solid transparent !important;
        border-radius: 9px !important;
        outline: none !important;
        background: #f5f5f5 !important;
        color: #9aa4b3 !important;
        font: inherit !important;
        font-size: 16px !important;
        text-align: left !important;
        cursor: pointer !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown.is-open .offline-grade-dropdown__trigger {
        border-color: #ff7a0d !important;
        background: #fff !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown.has-value .offline-grade-dropdown__trigger {
        color: #111 !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__chevron {
        position: absolute !important;
        top: 50% !important;
        right: 16px !important;
        width: 8px !important;
        height: 8px !important;
        margin-top: -6px !important;
        border-right: 1px solid #8c8c8c !important;
        border-bottom: 1px solid #8c8c8c !important;
        transform: rotate(45deg) !important;
        transition: transform .15s ease, margin-top .15s ease !important;
        pointer-events: none !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown.is-open .offline-grade-dropdown__chevron {
        margin-top: -2px !important;
        transform: rotate(225deg) !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__menu[hidden] {
        display: none !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__menu {
        position: absolute !important;
        top: calc(100% + 6px) !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 10020 !important;
        box-sizing: border-box !important;
        padding: 6px 4px !important;
        border: 0 !important;
        border-radius: 8px !important;
        background: #fff !important;
        box-shadow: 0 6px 18px rgba(0, 0, 0, .14) !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__option {
        display: flex !important;
        align-items: center !important;
        width: 100% !important;
        height: 32px !important;
        box-sizing: border-box !important;
        padding: 0 12px !important;
        border: 0 !important;
        border-radius: 4px !important;
        outline: none !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        background: #fff !important;
        color: #111 !important;
        font: inherit !important;
        font-size: 14px !important;
        font-weight: 400 !important;
        text-align: left !important;
        cursor: pointer !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__option:hover,
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__option:focus-visible {
        background: #f7f7f7 !important;
      }
      [id="50f91115-b4f9-4cd8-aba9-a46e915220334"] .offline-grade-dropdown__option.is-selected {
        background: #fff1e6 !important;
        font-weight: 600 !important;
      }
    `;
    document.head.append(formStyle);

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

    const userType = leadRoot.querySelector('#userType');
    const setMode = (mode) => {
      const currentMode = mode === 'student' ? 'student' : 'parent';
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
    const gradeItem = originalGradeInput?.closest('.ant-form-item') || gradePlaceholder?.closest('.ant-form-item') || null;

    const gradeWrap = document.createElement('div');
    gradeWrap.className = 'offline-grade-wrap offline-grade-dropdown';
    gradeWrap.innerHTML = `
      <button class="offline-grade-dropdown__trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span class="offline-grade-dropdown__value">В какой класс поступает ученик</span>
        <span class="offline-grade-dropdown__chevron" aria-hidden="true"></span>
      </button>
      <div class="offline-grade-dropdown__menu" role="listbox" hidden>
        ${[5, 6, 7, 8, 9, 10, 11].map((grade) => `<button class="offline-grade-dropdown__option" type="button" role="option" data-grade="${grade}" aria-selected="false">${grade} класс</button>`).join('')}
      </div>
      <input type="hidden" name="grade" class="offline-grade-dropdown__hidden" value="">`;

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
      if (fallbackAnchor?.parentElement === fields) fallbackAnchor.insertAdjacentElement('afterend', gradeWrap);
      else fields.append(gradeWrap);
    }

    const trigger = gradeWrap.querySelector('.offline-grade-dropdown__trigger');
    const value = gradeWrap.querySelector('.offline-grade-dropdown__value');
    const menu = gradeWrap.querySelector('.offline-grade-dropdown__menu');
    const hiddenInput = gradeWrap.querySelector('.offline-grade-dropdown__hidden');
    const options = [...gradeWrap.querySelectorAll('.offline-grade-dropdown__option')];
    const closeGradeMenu = () => {
      gradeWrap.classList.remove('is-open');
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    };
    const openGradeMenu = () => {
      gradeWrap.classList.add('is-open');
      menu.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
    };
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (menu.hidden) openGradeMenu();
      else closeGradeMenu();
    });
    options.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const grade = option.dataset.grade;
        value.textContent = `${grade} класс`;
        hiddenInput.value = grade;
        gradeWrap.classList.add('has-value');
        options.forEach((item) => {
          const selected = item === option;
          item.classList.toggle('is-selected', selected);
          item.setAttribute('aria-selected', selected ? 'true' : 'false');
        });
        if (originalGradeInput) {
          originalGradeInput.value = grade;
          originalGradeInput.dispatchEvent(new Event('input', { bubbles: true }));
          originalGradeInput.dispatchEvent(new Event('change', { bubbles: true }));
        }
        closeGradeMenu();
        trigger.focus();
      });
    });
    document.addEventListener('click', (event) => {
      if (!gradeWrap.contains(event.target)) closeGradeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.hidden) {
        closeGradeMenu();
        trigger.focus();
      }
    });

    const contactBlocks = leadRoot.querySelectorAll('.sc-66c7e2be-0');
    contactBlocks.forEach((block) => block.remove());
  }

  const section = document.getElementById('1a104f13-de4c-4b7f-a7bb-ffc403b3ee203');
  if (!section) return;
  const modal = document.createElement('div');
  modal.id = 'offline-review-modal';
  modal.hidden = true;
  modal.innerHTML = `<div class="offline-review-modal__backdrop" data-close-review-modal></div><article class="offline-review-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="offline-review-modal-title"><button class="offline-review-modal__close" type="button" aria-label="Закрыть" data-close-review-modal>×</button><div class="offline-review-modal__title" id="offline-review-modal-title"></div><p class="offline-review-modal__text"></p></article>`;
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
    const paragraphs = [...card.querySelectorAll('p')].map((item) => item.textContent.trim()).filter(Boolean);
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
