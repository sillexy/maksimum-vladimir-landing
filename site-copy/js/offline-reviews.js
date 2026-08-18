(() => {
  const style = document.createElement('style');
  style.textContent = `
    #header_container .offline-header-contact-row {
      display: inline-flex !important;
      align-items: center !important;
      column-gap: 3px !important;
      white-space: nowrap !important;
    }

    #header_container .offline-header-contact-group {
      display: inline-flex !important;
      align-items: center !important;
      white-space: nowrap !important;
    }

    #header_container .offline-header-phone-group {
      gap: 0 !important;
    }

    #header_container .offline-header-location-group {
      gap: 3px !important;
    }

    #header_container .offline-header-contact-control {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: auto !important;
      min-width: 0 !important;
      height: auto !important;
      min-height: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      white-space: nowrap !important;
    }

    #header_container .offline-header-contact-control > * {
      margin: 0 !important;
    }

    #header_container .offline-header-phone-number,
    #header_container .offline-header-location-text {
      display: inline-block;
      flex: 0 0 auto;
      margin: 0 !important;
      white-space: nowrap;
      color: #111;
      font: inherit;
      font-size: 14px;
      line-height: 1.2;
      text-decoration: none;
    }

    #header_container .offline-header-phone-number {
      max-width: 0;
      overflow: hidden;
      opacity: 0;
      transform: translateX(-3px);
      pointer-events: none;
      transition: max-width 260ms ease, margin-left 260ms ease, opacity 190ms ease, transform 260ms ease;
    }

    #header_container .offline-header-phone-number.is-visible {
      max-width: 116px;
      margin-left: 3px !important;
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }

    @media (max-width: 700px) {
      #header_container .offline-header-phone-number,
      #header_container .offline-header-location-text {
        font-size: 12px;
      }
    }
  `;
  document.head.append(style);

  const getControl = (target) => {
    if (!target) return null;
    if (target.matches('button, a')) return target;
    return target.closest('button, a') || target.parentElement;
  };

  const findPhoneTarget = () =>
    document.querySelector(
      '[data-qa="headerPhone"], [data-qa="headerPhoneButton"], #header_container a[href^="tel:"]'
    );

  const findLocationTarget = () =>
    document.querySelector(
      '[data-qa="headerLocationButton"], [data-qa="headerLocation"]'
    );

  const ensureGroup = (control, groupClass) => {
    if (!control) return null;
    if (control.parentElement?.classList.contains(groupClass)) return control.parentElement;
    const group = document.createElement('span');
    group.className = `offline-header-contact-group ${groupClass}`;
    control.parentNode.insertBefore(group, control);
    group.append(control);
    return group;
  };

  const enhanceHeader = () => {
    const phoneControl = getControl(findPhoneTarget());
    const locationControl = getControl(findLocationTarget());

    if (!phoneControl || !locationControl) return false;

    const phoneGroup = ensureGroup(phoneControl, 'offline-header-phone-group');
    const locationGroup = ensureGroup(locationControl, 'offline-header-location-group');

    if (phoneGroup && locationGroup) {
      let row = phoneGroup.parentElement;
      if (!row?.classList.contains('offline-header-contact-row')) {
        row = document.createElement('span');
        row.className = 'offline-header-contact-row';
        phoneGroup.parentNode.insertBefore(row, phoneGroup);
        row.append(phoneGroup, locationGroup);
      } else if (locationGroup.parentElement !== row) {
        row.append(locationGroup);
      }
    }

    if (!document.querySelector('.offline-header-phone-number')) {
      phoneControl.classList.add('offline-header-contact-control');
      phoneControl.setAttribute('aria-expanded', 'false');

      const phoneNumber = document.createElement('a');
      phoneNumber.className = 'offline-header-phone-number';
      phoneNumber.href = 'tel:+79209494007';
      phoneNumber.textContent = '+79209494007';
      phoneNumber.setAttribute('aria-label', 'Позвонить +79209494007');
      phoneGroup.append(phoneNumber);

      phoneControl.addEventListener('click', (event) => {
        event.preventDefault();
        const isVisible = phoneNumber.classList.toggle('is-visible');
        phoneControl.setAttribute('aria-expanded', isVisible ? 'true' : 'false');
      });
    }

    if (!document.querySelector('.offline-header-location-text')) {
      locationControl.classList.add('offline-header-contact-control');

      const locationText = document.createElement('span');
      locationText.className = 'offline-header-location-text';
      locationText.textContent = 'Владимирская область';
      locationGroup.append(locationText);
    }

    return Boolean(
      document.querySelector('.offline-header-phone-number') &&
      document.querySelector('.offline-header-location-text')
    );
  };

  if (!enhanceHeader()) {
    const observer = new MutationObserver(() => {
      if (enhanceHeader()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 10000);
  }

  const updateHeroTitle = () => {
    const expectedTitle = 'Бесплатная консультация по профориентации';
    const heading = Array.from(document.querySelectorAll('h1')).find(
      (node) => node.textContent.replace(/\s+/g, ' ').trim() === expectedTitle
    );

    if (!heading) return false;

    const target = heading.querySelector('span');
    if (target) {
      target.innerHTML = 'Бесплатная консультация по&nbsp;профориентации во Владимире';
    } else {
      heading.innerHTML = 'Бесплатная консультация по&nbsp;профориентации во Владимире';
    }
    return true;
  };

  if (!updateHeroTitle()) {
    const heroTitleObserver = new MutationObserver(() => {
      if (updateHeroTitle()) heroTitleObserver.disconnect();
    });
    heroTitleObserver.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => heroTitleObserver.disconnect(), 10000);
  }

  const normalizedText = (node) => node?.textContent.replace(/\s+/g, ' ').trim() || '';

  const getHeaderOffset = () => {
    const header = document.querySelector('#header_container');
    return (header ? header.getBoundingClientRect().height : 0) + 16;
  };

  const smoothScrollTo = (target) => {
    if (!target) return false;
    const top = window.scrollY + target.getBoundingClientRect().top - getHeaderOffset();
    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth'
    });
    return true;
  };

  const getConsultationFormTarget = () =>
    document.querySelector('[id^="50f91115-b4f9-4cd8-aba9-a46e91522033"]');

  const getConsultationCardTarget = () => document.getElementById('1');

  const getHeroCtas = () => {
    const all = Array.from(document.querySelectorAll('button, a'));
    const primary = all.find((node) => {
      const text = normalizedText(node);
      return text === 'Пройти тест' || text === 'Записаться';
    });
    const secondary = all.find((node) => normalizedText(node) === 'Узнать больше');
    return { primary, secondary };
  };

  const syncHeroOverrides = () => {
    const { primary } = getHeroCtas();
    if (primary && normalizedText(primary) !== 'Записаться') {
      primary.textContent = 'Записаться';
    }
  };

  const handleHeroCtaClick = (event) => {
    const control = event.target.closest('button, a');
    if (!control) return;

    if (control.matches('[data-offline-consultation-cta]')) {
      event.preventDefault();
      event.stopImmediatePropagation();
      smoothScrollTo(getConsultationFormTarget());
      return;
    }

    const text = normalizedText(control);
    if (text !== 'Пройти тест' && text !== 'Записаться' && text !== 'Узнать больше') return;

    const { primary, secondary } = getHeroCtas();

    if (control === primary) {
      event.preventDefault();
      event.stopImmediatePropagation();
      smoothScrollTo(getConsultationFormTarget());
      return;
    }

    if (control === secondary) {
      event.preventDefault();
      event.stopImmediatePropagation();
      smoothScrollTo(getConsultationCardTarget());
    }
  };

  document.addEventListener('click', handleHeroCtaClick, true);
  syncHeroOverrides();

  const heroOverrideObserver = new MutationObserver(syncHeroOverrides);
  heroOverrideObserver.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(() => heroOverrideObserver.disconnect(), 15000);

  const updateConsultationCount = () => {
    const oldText = 'Наши консультации уже прошли более 2 млн. учеников по всей России';
    const newText = 'Наши консультации уже прошли более 30 тыс. учеников по всей России';
    let updated = false;

    document.querySelectorAll('p').forEach((node) => {
      if (normalizedText(node) === oldText) {
        node.textContent = newText;
        updated = true;
      }
    });

    return updated;
  };

  updateConsultationCount();
  const consultationCountObserver = new MutationObserver(updateConsultationCount);
  consultationCountObserver.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(() => consultationCountObserver.disconnect(), 15000);

  const updateReachHeadline = () => {
    const oldText = 'Более 2 000 000 школьников прошли нашу профориентацию';
    const newText = 'Более 30 000 школьников прошли нашу профориентацию';
    const heading = Array.from(document.querySelectorAll('h1, h2, h3, p, div, span')).find(
      (node) => node.children.length === 0 && normalizedText(node) === oldText
    );

    if (!heading) return false;
    if (normalizedText(heading) !== newText) heading.textContent = newText;
    return true;
  };

  if (!updateReachHeadline()) {
    const reachHeadlineObserver = new MutationObserver(() => {
      if (updateReachHeadline()) reachHeadlineObserver.disconnect();
    });
    reachHeadlineObserver.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => reachHeadlineObserver.disconnect(), 10000);
  }

  const updateConsultationCard = () => {
    const card = document.getElementById('ee34b58c-b141-491b-9775-4fb1adbfdbce');
    if (!card) return false;

    const desiredItems = [
      'Вам придёт ссылка на проф. тест',
      'Вы в спокойной обстановке ответите на вопросы',
      'Мы свяжемся с вами и подберем удобное время для бесплатной консультации',
      'Эксперт по выбору профессии проведет детальный разбор с персональными рекомендациями по предметам, учебным заведениям и стратегии поступления'
    ];

    const listItems = Array.from(card.querySelectorAll('li'));
    desiredItems.forEach((text, index) => {
      if (listItems[index] && normalizedText(listItems[index]) !== text) {
        listItems[index].textContent = text;
      }
    });

    const freeText = Array.from(card.querySelectorAll('p, div, span, strong, h3, h4')).find(
      (node) => node.children.length === 0 && normalizedText(node) === 'Бесплатно'
    );
    if (freeText) freeText.textContent = 'Бесплатно до 30 августа';

    const cta = Array.from(card.querySelectorAll('button, a')).find((node) => {
      const text = normalizedText(node);
      return text === 'Пройти тест' || text === 'Записаться';
    });
    if (cta && normalizedText(cta) !== 'Записаться') {
      cta.textContent = 'Записаться';
    }
    if (cta && !cta.hasAttribute('data-offline-consultation-cta')) {
      cta.setAttribute('data-offline-consultation-cta', 'true');
    }

    return desiredItems.every((text, index) => normalizedText(listItems[index]) === text) &&
      Boolean(cta) && normalizedText(cta) === 'Записаться';
  };

  updateConsultationCard();
  const consultationCard = document.getElementById('ee34b58c-b141-491b-9775-4fb1adbfdbce');
  if (consultationCard) {
    const consultationCardObserver = new MutationObserver(updateConsultationCard);
    consultationCardObserver.observe(consultationCard, { childList: true, subtree: true });
    window.setTimeout(() => consultationCardObserver.disconnect(), 15000);
  }

  const updateConsultationContacts = () => {
    const leadRoot = document.getElementById('50f91115-b4f9-4cd8-aba9-a46e915220334');
    if (!leadRoot) return false;

    const links = Array.from(leadRoot.querySelectorAll('.sc-66c7e2be-2 a'));
    if (!links.length) return false;

    const mailLink = links.find((link) => (link.getAttribute('href') || '').startsWith('mailto:'));
    const phoneLink = links.find((link) => (link.getAttribute('href') || '').startsWith('tel:'));
    const socialLink = links.find((link) => {
      const href = link.getAttribute('href') || '';
      return !href.startsWith('mailto:') && !href.startsWith('tel:');
    });

    if (mailLink) mailLink.remove();

    if (phoneLink) {
      phoneLink.href = 'tel:+79209494007';
      phoneLink.setAttribute('aria-label', 'Позвонить +79209494007');
    }

    if (socialLink) {
      const iconVk = `<svg class="offline-contact-icon offline-contact-icon--vk" viewBox="0 0 25 25" aria-hidden="true"><circle cx="12.5" cy="12.5" r="12.5" fill="#2787F5"/><path d="M6.2 8.3h2.4c.2 0 .3.1.4.3.5 1.6 1.3 3 2.3 4.1.2.2.4.3.5.3.2 0 .3-.2.3-.5V9.1c0-.4-.1-.6-.5-.7v-.1h3.6c.3 0 .5.2.5.5v2.8c0 .3.1.5.3.5s.4-.2.6-.4c1-1.1 1.7-2.4 2.2-3.1.1-.2.2-.3.4-.3h2.5c.4 0 .5.2.4.5-.2.8-1.7 3-2.9 4.3-.2.3-.3.4 0 .8.3.3 1.2 1.2 1.8 2 .5.6.9 1.2 1.1 1.6.2.3 0 .6-.4.6h-2.7c-.4 0-.6-.2-.8-.5-.5-.8-1.1-1.5-1.8-2.2-.3-.3-.5-.4-.7-.4-.3 0-.4.2-.4.6v1.9c0 .4-.1.6-.5.6h-1.3c-2.3 0-4.8-1.4-6.7-4.1-1.5-2.2-2.5-4.7-2.5-5 0-.2.1-.3.4-.3Z" fill="#fff"/></svg>`;
      socialLink.href = 'https://vk.ru/maximumvld';
      socialLink.target = '_blank';
      socialLink.rel = 'noopener noreferrer';
      socialLink.setAttribute('aria-label', 'ВКонтакте Maximum Владимир');
      socialLink.innerHTML = iconVk;
    }

    return Boolean(phoneLink && socialLink && !leadRoot.querySelector('.sc-66c7e2be-2 a[href^="mailto:"]'));
  };

  const baseScript = document.createElement('script');
  baseScript.src = 'js/offline-reviews-base.js';
  baseScript.defer = true;
  baseScript.addEventListener('load', () => {
    updateConsultationContacts();
  });
  document.head.append(baseScript);
})();
