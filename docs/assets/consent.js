(function () {
  'use strict';

  const STORAGE_KEY = 'gic-analytics-consent';
  const ANALYTICS_GRANTED = 'granted';
  const ANALYTICS_DENIED = 'denied';

  function getConsentValue() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === ANALYTICS_GRANTED || value === ANALYTICS_DENIED ? value : '';
    } catch (_) {
      return '';
    }
  }

  function setConsentValue(value) {
    if (value !== ANALYTICS_GRANTED && value !== ANALYTICS_DENIED) {
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (_) {
      return;
    }

    updateBannerVisibility();
    if (value === ANALYTICS_GRANTED) {
      enableAnalytics();
    }
  }

  function hasAnalyticsConsent() {
    return getConsentValue() === ANALYTICS_GRANTED;
  }

  function ensureGtagStub() {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
    }
  }

  function disableAnalyticsUntilConsent() {
    ensureGtagStub();
    window.gtag('consent', 'default', { analytics_storage: 'denied' });
  }

  function appendAnalyticsScript(measurementId) {
    const src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    if (document.querySelector(`script[data-gic-analytics="${measurementId}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.dataset.gicAnalytics = measurementId;
    document.head.appendChild(script);
  }

  function enableAnalytics() {
    const measurementId = String(window.GIC_ANALYTICS_ID || '').trim();
    if (!measurementId) {
      return;
    }

    ensureGtagStub();
    appendAnalyticsScript(measurementId);
    if (window.__gicAnalyticsConfigured === measurementId) {
      return;
    }

    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });
    window.__gicAnalyticsConfigured = measurementId;
  }

  function ensureBannerStyles() {
    if (document.getElementById('gic-consent-style')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'gic-consent-style';
    style.textContent = `
      .gic-consent-banner {
        position: fixed;
        left: 16px;
        right: 16px;
        bottom: 16px;
        z-index: 1000;
        margin: 0 auto;
        max-width: 920px;
        border: 1px solid rgba(15, 23, 42, 0.12);
        border-radius: 18px;
        background: rgba(15, 23, 42, 0.96);
        color: #f8fafc;
        box-shadow: 0 20px 60px rgba(15, 23, 42, 0.3);
      }

      .gic-consent-banner[hidden] {
        display: none !important;
      }

      .gic-consent-inner {
        display: flex;
        gap: 16px;
        align-items: flex-start;
        justify-content: space-between;
        padding: 16px 18px;
      }

      .gic-consent-copy {
        max-width: 640px;
      }

      .gic-consent-copy strong {
        display: block;
        margin-bottom: 6px;
        font-size: 0.95rem;
      }

      .gic-consent-copy p {
        margin: 0;
        color: rgba(241, 245, 249, 0.88);
        font-size: 0.875rem;
        line-height: 1.5;
      }

      .gic-consent-copy a {
        color: #fdba74;
      }

      .gic-consent-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
      }

      .gic-consent-btn {
        appearance: none;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 999px;
        padding: 10px 16px;
        background: transparent;
        color: #f8fafc;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }

      .gic-consent-btn-primary {
        border-color: #ec5b13;
        background: #ec5b13;
      }

      @media (max-width: 700px) {
        .gic-consent-inner {
          flex-direction: column;
        }

        .gic-consent-actions {
          width: 100%;
          justify-content: stretch;
        }

        .gic-consent-btn {
          flex: 1 1 160px;
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureBanner() {
    if (document.getElementById('gic-consent-banner')) {
      return;
    }

    const banner = document.createElement('aside');
    banner.id = 'gic-consent-banner';
    banner.className = 'gic-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML = `
      <div class="gic-consent-inner">
        <div class="gic-consent-copy">
          <strong>Analytics are optional.</strong>
          <p>
            GIC Forms uses Google Analytics only if you opt in. Declining keeps analytics disabled.
            See the <a href="privacy.html">Privacy Policy</a> for details.
          </p>
        </div>
        <div class="gic-consent-actions">
          <button type="button" class="gic-consent-btn" data-consent-action="deny">Decline</button>
          <button type="button" class="gic-consent-btn gic-consent-btn-primary" data-consent-action="allow">Allow analytics</button>
        </div>
      </div>
    `;

    banner.addEventListener('click', event => {
      const button = event.target.closest('[data-consent-action]');
      if (!button) {
        return;
      }

      setConsentValue(button.dataset.consentAction === 'allow' ? ANALYTICS_GRANTED : ANALYTICS_DENIED);
    });

    document.body.appendChild(banner);
    updateBannerVisibility();
  }

  function updateBannerVisibility() {
    const banner = document.getElementById('gic-consent-banner');
    if (!banner) {
      return;
    }
    banner.hidden = Boolean(getConsentValue());
  }

  function init() {
    disableAnalyticsUntilConsent();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        ensureBannerStyles();
        ensureBanner();
        if (hasAnalyticsConsent()) {
          enableAnalytics();
        }
      }, { once: true });
      return;
    }

    ensureBannerStyles();
    ensureBanner();
    if (hasAnalyticsConsent()) {
      enableAnalytics();
    }
  }

  window.GICConsent = {
    getConsentValue,
    hasAnalyticsConsent,
    setConsentValue
  };

  init();
})();
