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

  const baseScript = document.createElement('script');
  baseScript.src = 'js/offline-reviews-base.js';
  baseScript.defer = true;
  document.head.append(baseScript);
})();
