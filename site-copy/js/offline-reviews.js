(() => {
  const style = document.createElement('style');
  style.textContent = `
    #header_container .offline-header-contact-control {
      display: inline-flex !important;
      align-items: center !important;
      white-space: nowrap !important;
    }

    #header_container .offline-header-contact-control,
    #header_container .offline-header-phone-number,
    #header_container .offline-header-location-text {
      column-gap: 8px;
    }

    #header_container .offline-header-phone-number,
    #header_container .offline-header-location-text {
      display: inline-block;
      flex: 0 0 auto;
      white-space: nowrap;
      color: #111;
      font: inherit;
      font-size: 14px;
      line-height: 1.2;
      text-decoration: none;
    }

    #header_container .offline-header-phone-number {
      max-width: 0;
      margin-left: 0;
      overflow: hidden;
      opacity: 0;
      transform: translateX(-4px);
      pointer-events: none;
      transition: max-width 280ms ease, margin-left 280ms ease, opacity 200ms ease, transform 280ms ease;
    }

    #header_container .offline-header-phone-number.is-visible {
      max-width: 120px;
      margin-left: 4px;
      opacity: 1;
      transform: translateX(0);
      pointer-events: auto;
    }

    #header_container .offline-header-location-text {
      margin-left: 4px;
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

  const enhanceHeader = () => {
    const phoneControl = getControl(findPhoneTarget());
    if (phoneControl && !document.querySelector('.offline-header-phone-number')) {
      phoneControl.classList.add('offline-header-contact-control');
      phoneControl.setAttribute('aria-expanded', 'false');

      const phoneNumber = document.createElement('a');
      phoneNumber.className = 'offline-header-phone-number';
      phoneNumber.href = 'tel:+79209494007';
      phoneNumber.textContent = '+79209494007';
      phoneNumber.setAttribute('aria-label', 'Позвонить +79209494007');
      phoneControl.insertAdjacentElement('afterend', phoneNumber);

      phoneControl.addEventListener('click', (event) => {
        event.preventDefault();
        const isVisible = phoneNumber.classList.toggle('is-visible');
        phoneControl.setAttribute('aria-expanded', isVisible ? 'true' : 'false');
      });
    }

    const locationControl = getControl(findLocationTarget());
    if (locationControl && !document.querySelector('.offline-header-location-text')) {
      locationControl.classList.add('offline-header-contact-control');

      const locationText = document.createElement('span');
      locationText.className = 'offline-header-location-text';
      locationText.textContent = 'Владимирская область';
      locationControl.insertAdjacentElement('afterend', locationText);
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

  const baseScript = document.createElement('script');
  baseScript.src = 'js/offline-reviews-base.js';
  baseScript.defer = true;
  document.head.append(baseScript);
})();
