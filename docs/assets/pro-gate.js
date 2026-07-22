/**
 * GIC Forms Pro Gate
 * Self-contained monetization module — no external dependencies.
 * Exposes window.GICProGate
 */
(function () {
  'use strict';

  // ─── Constants ────────────────────────────────────────────────────────────
  const FREE_AI_LIMIT = 3;
  const STORAGE = {
    freeCredits: 'gic-free-ai-credits',
    jwt: 'gic-pro-jwt',
    checkoutState: 'gic-stripe-checkout-state',
    byoKey: 'gic-byo-llm-key',
    byoUrl: 'gic-byo-llm-url',
    brand: 'gic-business-brand'
  };

  // ─── Free Credit Tracking ─────────────────────────────────────────────────
  function getFreeCredits() {
    const stored = localStorage.getItem(STORAGE.freeCredits);
    if (stored === null) return FREE_AI_LIMIT;
    const n = parseInt(stored, 10);
    return isNaN(n) ? FREE_AI_LIMIT : Math.max(0, n);
  }

  function useFreeCredit() {
    const current = getFreeCredits();
    const next = Math.max(0, current - 1);
    localStorage.setItem(STORAGE.freeCredits, String(next));
    return next;
  }

  function hasFreeCredits() {
    return getFreeCredits() > 0;
  }

  function resetFreeCredits() {
    localStorage.removeItem(STORAGE.freeCredits);
  }

  // ─── JWT Management ───────────────────────────────────────────────────────
  function getJWT() {
    return localStorage.getItem(STORAGE.jwt) || null;
  }

  function setJWT(token) {
    if (token) {
      localStorage.setItem(STORAGE.jwt, token);
    } else {
      localStorage.removeItem(STORAGE.jwt);
    }
  }

  function clearJWT() {
    localStorage.removeItem(STORAGE.jwt);
  }

  function getCheckoutStateToken() {
    return sessionStorage.getItem(STORAGE.checkoutState) || null;
  }

  function setCheckoutStateToken(token) {
    if (token) {
      sessionStorage.setItem(STORAGE.checkoutState, token);
    } else {
      sessionStorage.removeItem(STORAGE.checkoutState);
    }
  }

  function decodeJWT(token) {
    if (!token) return null;
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      // Decode base64url payload
      const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      const padded = base64 + '='.repeat((4 - base64.length % 4) % 4);
      const payload = JSON.parse(atob(padded));
      return {
        customerId: payload.sub || payload.customerId || null,
        plan: payload.plan || null,
        exp: payload.exp || 0
      };
    } catch (_) {
      return null;
    }
  }

  function isJWTValid(token) {
    const decoded = decodeJWT(token);
    if (!decoded) return false;
    // exp is in seconds
    return decoded.exp > Math.floor(Date.now() / 1000);
  }

  // ─── Access Checks ────────────────────────────────────────────────────────
  function hasProAccess() {
    const jwt = getJWT();
    if (!jwt || !isJWTValid(jwt)) return false;
    const decoded = decodeJWT(jwt);
    return decoded && ['pro', 'business'].includes(decoded.plan);
  }

  function hasBusinessAccess() {
    const jwt = getJWT();
    if (!jwt || !isJWTValid(jwt)) return false;
    const decoded = decodeJWT(jwt);
    return decoded && decoded.plan === 'business';
  }

  function getBYOKey() {
    const sessionValue = sessionStorage.getItem(STORAGE.byoKey);
    if (sessionValue) return sessionValue;
    const legacyValue = localStorage.getItem(STORAGE.byoKey);
    if (legacyValue) {
      sessionStorage.setItem(STORAGE.byoKey, legacyValue);
      localStorage.removeItem(STORAGE.byoKey);
      return legacyValue;
    }
    return null;
  }

  function getBYOBaseUrl() {
    const sessionValue = sessionStorage.getItem(STORAGE.byoUrl);
    if (sessionValue) return sessionValue;
    const legacyValue = localStorage.getItem(STORAGE.byoUrl);
    if (legacyValue) {
      sessionStorage.setItem(STORAGE.byoUrl, legacyValue);
      localStorage.removeItem(STORAGE.byoUrl);
      return legacyValue;
    }
    return null;
  }

  function setBYOConfig(key, url) {
    localStorage.removeItem(STORAGE.byoKey);
    localStorage.removeItem(STORAGE.byoUrl);
    if (key) {
      sessionStorage.setItem(STORAGE.byoKey, key);
    } else {
      sessionStorage.removeItem(STORAGE.byoKey);
    }
    if (url) {
      sessionStorage.setItem(STORAGE.byoUrl, url);
    } else {
      sessionStorage.removeItem(STORAGE.byoUrl);
    }
    // BYOK replaces subscription flow
    clearJWT();
  }

  function clearBYOConfig() {
    sessionStorage.removeItem(STORAGE.byoKey);
    sessionStorage.removeItem(STORAGE.byoUrl);
    localStorage.removeItem(STORAGE.byoKey);
    localStorage.removeItem(STORAGE.byoUrl);
  }

  function hasAIAccess() {
    return hasProAccess() || !!getBYOKey() || hasFreeCredits();
  }

  // ─── Current Plan Label ───────────────────────────────────────────────────
  function getCurrentPlan() {
    const jwt = getJWT();
    if (jwt && isJWTValid(jwt)) {
      const decoded = decodeJWT(jwt);
      if (decoded?.plan) return decoded.plan;
    }
    if (getBYOKey()) return 'byok';
    return 'free';
  }

  // ─── Stripe Flow ──────────────────────────────────────────────────────────
  function getBridgeUrl() {
    // Reads from deploy-integrations if available, otherwise empty
    return (window.GICDeployIntegrations && typeof window.GICDeployIntegrations.getBridgeUrl === 'function')
      ? window.GICDeployIntegrations.getBridgeUrl()
      : '';
  }

  function normalizeCheckoutPlan(plan, interval) {
    const billing = interval === 'month' ? 'month' : 'year';
    if (plan === 'business') {
      return billing === 'month' ? 'business_monthly' : 'business_annual';
    }
    return billing === 'month' ? 'monthly' : 'annual';
  }

  async function startCheckout(plan, interval) {
    const bridge = getBridgeUrl();
    if (!bridge) {
      showUpgradeModal(plan, 'bridge_not_configured');
      return;
    }
    const normalizedPlan = normalizeCheckoutPlan(plan, interval);
    const successUrl = new URL('/success.html', window.location.origin).toString();
    const cancelUrl = window.location.href;
    try {
      const csrfToken = await window.GICDeployIntegrations.getBridgeCsrfToken();
      const response = await fetch(`${bridge}/stripe/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
        body: JSON.stringify({ plan: normalizedPlan, successUrl, cancelUrl })
      });
      const data = await response.json();
      if (data.url && data.stateToken) {
        setCheckoutStateToken(data.stateToken);
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Checkout failed');
      }
    } catch (err) {
      alert('Checkout unavailable: ' + (err.message || 'Please try again.'));
    }
  }

  async function verifySession(sessionId) {
    const bridge = getBridgeUrl();
    if (!bridge) throw new Error('Bridge not configured');
    const stateToken = getCheckoutStateToken();
    if (!stateToken) throw new Error('Missing checkout state. Retry checkout from the editor.');
    const csrfToken = await window.GICDeployIntegrations.getBridgeCsrfToken();
    const response = await fetch(`${bridge}/stripe/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
      body: JSON.stringify({ sessionId, stateToken })
    });
    const data = await response.json();
    const token = data.token || data.jwt;
    if (token) {
      setJWT(token);
      setCheckoutStateToken(null);
      return decodeJWT(token)?.plan || 'pro';
    }
    throw new Error(data.error || 'Verification failed');
  }

  async function renewIfNeeded() {
    const jwt = getJWT();
    if (!jwt) return;
    const decoded = decodeJWT(jwt);
    if (!decoded) return;
    // Renew if < 48h to expiry
    const secondsLeft = decoded.exp - Math.floor(Date.now() / 1000);
    if (secondsLeft > 48 * 3600) return;

    const bridge = getBridgeUrl();
    if (!bridge) return;
    try {
      const csrfToken = await window.GICDeployIntegrations.getBridgeCsrfToken();
      const response = await fetch(`${bridge}/stripe/renew`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`,
          'X-CSRF-Token': csrfToken
        },
        body: '{}'
      });
      const data = await response.json();
      const token = data.token || data.jwt;
      if (token) setJWT(token);
    } catch (_) {
      // silent — will prompt on next load if expired
    }
  }

  // ─── Upgrade Modal ────────────────────────────────────────────────────────
  const MODAL_HEADLINES = {
    ai_credits_exhausted: 'Unlock Unlimited AI Form Building',
    pro_feature: 'Upgrade to Pro',
    business_feature: 'Upgrade to Business',
    my_forms_limit: 'Unlimited Saved Forms',
    bridge_not_configured: 'AI Features Coming Soon',
    default: 'Upgrade Your Plan'
  };

  const MODAL_SUBTEXT = {
    ai_credits_exhausted: "You've used your 3 free AI uses. Upgrade for unlimited AI-powered form creation and editing.",
    pro_feature: 'This feature requires a Pro or Business plan.',
    business_feature: 'This feature requires the Business plan.',
    my_forms_limit: "You've reached the 5-form limit. Upgrade Pro for unlimited saved forms.",
    bridge_not_configured: 'AI features are being configured. Subscribe now to be ready when they launch.',
    default: 'Unlock the full power of GIC Forms.'
  };

  function showUpgradeModal(requiredPlan, triggerReason) {
    const modal = document.getElementById('modal-upgrade');
    if (!modal) return;

    const reason = triggerReason || 'default';
    const headlineEl = modal.querySelector('[data-modal-headline]');
    const subtextEl = modal.querySelector('[data-modal-subtext]');
    if (headlineEl) headlineEl.textContent = MODAL_HEADLINES[reason] || MODAL_HEADLINES.default;
    if (subtextEl) subtextEl.textContent = MODAL_SUBTEXT[reason] || MODAL_SUBTEXT.default;

    // Highlight appropriate plan tier
    const planCards = modal.querySelectorAll('[data-plan-card]');
    planCards.forEach(card => {
      const isFocus = card.dataset.planCard === (requiredPlan || 'pro');
      card.classList.toggle('ring-2', isFocus);
      card.classList.toggle('ring-primary', isFocus);
    });

    // Select annual tab by default
    selectBillingTab('year');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function hideUpgradeModal() {
    const modal = document.getElementById('modal-upgrade');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function selectBillingTab(interval) {
    const modal = document.getElementById('modal-upgrade');
    if (!modal) return;
    const tabs = modal.querySelectorAll('[data-billing-tab]');
    tabs.forEach(tab => {
      const isActive = tab.dataset.billingTab === interval;
      tab.classList.toggle('bg-primary', isActive);
      tab.classList.toggle('text-white', isActive);
      tab.classList.toggle('border-primary', isActive);
      tab.classList.toggle('border-slate-200', !isActive);
      tab.classList.toggle('dark:border-slate-700', !isActive);
      tab.classList.toggle('text-slate-600', !isActive);
      tab.classList.toggle('dark:text-slate-300', !isActive);
    });

    // Show/hide price sets and checkout buttons
    const monthlyEls = modal.querySelectorAll('.price-month, .period-month, .checkout-btn-month');
    const annualEls = modal.querySelectorAll('.price-year, .period-year, .checkout-btn-year');
    monthlyEls.forEach(el => el.classList.toggle('hidden', interval !== 'month'));
    annualEls.forEach(el => el.classList.toggle('hidden', interval !== 'year'));
  }

  // ─── Pro Badge ────────────────────────────────────────────────────────────
  function renderProBadge(containerEl) {
    if (!containerEl) return;
    const plan = getCurrentPlan();
    if (plan === 'free' || plan === 'byok') {
      containerEl.innerHTML = '';
      return;
    }
    const label = plan === 'business' ? 'Business' : 'Pro';
    const color = plan === 'business'
      ? 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300'
      : 'bg-primary/10 text-primary';
    containerEl.innerHTML = `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${color}">
      <span class="material-symbols-outlined" style="font-size:12px;">stars</span>${label}
    </span>`;
  }

  // ─── White-label Brand ────────────────────────────────────────────────────
  function getBrand() {
    try {
      const raw = localStorage.getItem(STORAGE.brand);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function setBrand(config) {
    if (config) {
      localStorage.setItem(STORAGE.brand, JSON.stringify(config));
    } else {
      localStorage.removeItem(STORAGE.brand);
    }
  }

  // ─── Settings Panel ───────────────────────────────────────────────────────
  function openSettingsPanel() {
    const panel = document.getElementById('panel-settings');
    if (!panel) return;
    refreshSettingsPanel();
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
    const overlay = document.getElementById('settings-overlay');
    if (overlay) overlay.classList.remove('hidden');
  }

  function closeSettingsPanel() {
    const panel = document.getElementById('panel-settings');
    if (!panel) return;
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
    const overlay = document.getElementById('settings-overlay');
    if (overlay) overlay.classList.add('hidden');
  }

  function refreshSettingsPanel() {
    // Account section
    const planLabel = document.getElementById('settings-plan-label');
    if (planLabel) {
      const plan = getCurrentPlan();
      const labels = { free: 'Free Plan', pro: 'Pro', business: 'Business', byok: 'Free (BYOK)' };
      planLabel.textContent = labels[plan] || 'Free Plan';
    }

    // Credits counter
    const creditsEl = document.getElementById('settings-free-credits');
    if (creditsEl) {
      const plan = getCurrentPlan();
      if (plan === 'free') {
        const credits = getFreeCredits();
        creditsEl.textContent = `${credits} free AI use${credits !== 1 ? 's' : ''} remaining`;
        creditsEl.parentElement?.classList.remove('hidden');
      } else {
        creditsEl.parentElement?.classList.add('hidden');
      }
    }

    // BYOK fields
    const byoKeyEl = document.getElementById('settings-byo-key');
    const byoUrlEl = document.getElementById('settings-byo-url');
    if (byoKeyEl) byoKeyEl.value = getBYOKey() || '';
    if (byoUrlEl) byoUrlEl.value = getBYOBaseUrl() || '';

    // Business section visibility
    const businessSection = document.getElementById('settings-business-section');
    if (businessSection) {
      businessSection.classList.toggle('hidden', !hasBusinessAccess());
    }

    // API keys section visibility (Pro + Business)
    const apiKeysSection = document.getElementById('settings-apikeys-section');
    if (apiKeysSection) {
      const showApiKeys = hasProAccess();
      apiKeysSection.classList.toggle('hidden', !showApiKeys);
      if (showApiKeys) {
        // Hide the one-time reveal panel when settings panel is (re)opened
        const revealEl = document.getElementById('settings-apikey-reveal');
        if (revealEl) revealEl.classList.add('hidden');
        const statusEl = document.getElementById('settings-apikeys-status');
        if (statusEl) statusEl.classList.add('hidden');
        loadApiKeyList();
      }
    }

    // White-label fields
    const brand = getBrand() || {};
    const brandName = document.getElementById('settings-brand-name');
    const brandLogo = document.getElementById('settings-brand-logo');
    const brandColor = document.getElementById('settings-brand-color');
    const brandFooter = document.getElementById('settings-brand-footer');
    const brandBadge = document.getElementById('settings-remove-badge');
    if (brandName) brandName.value = brand.name || '';
    if (brandLogo) brandLogo.value = brand.logoUrl || '';
    if (brandColor) brandColor.value = brand.primaryColor || '#ec5b13';
    if (brandFooter) brandFooter.value = brand.footerText || '';
    if (brandBadge) brandBadge.checked = !!brand.removeBadge;
  }

  function saveBYOConfig() {
    const key = (document.getElementById('settings-byo-key')?.value || '').trim();
    const url = (document.getElementById('settings-byo-url')?.value || '').trim();
    setBYOConfig(key || null, url || null);
    refreshSettingsPanel();
    const statusEl = document.getElementById('settings-byo-status');
    if (statusEl) {
      statusEl.textContent = key ? 'API key saved.' : 'API key cleared.';
      statusEl.classList.remove('hidden');
      setTimeout(() => statusEl.classList.add('hidden'), 2000);
    }
  }

  function saveBusinessBrand() {
    if (!hasBusinessAccess()) return;
    const brand = {
      name: (document.getElementById('settings-brand-name')?.value || '').trim(),
      logoUrl: (document.getElementById('settings-brand-logo')?.value || '').trim(),
      primaryColor: (document.getElementById('settings-brand-color')?.value || '#ec5b13').trim(),
      footerText: (document.getElementById('settings-brand-footer')?.value || '').trim(),
      removeBadge: !!(document.getElementById('settings-remove-badge')?.checked)
    };
    setBrand(brand);
    const statusEl = document.getElementById('settings-brand-status');
    if (statusEl) {
      statusEl.textContent = 'Brand settings saved.';
      statusEl.classList.remove('hidden');
      setTimeout(() => statusEl.classList.add('hidden'), 2000);
    }
  }

  function openStripePortal() {
    const integrations = window.GICDeployIntegrations;
    if (!integrations || typeof integrations.openStripePortal !== 'function') {
      alert('Subscription management is not available right now.');
      return;
    }
    integrations.openStripePortal(window.location.href)
      .then(data => {
        if (data?.url) {
          window.open(data.url, '_blank', 'noopener,noreferrer');
          return;
        }
        throw new Error('Missing Stripe portal URL');
      })
      .catch(err => {
        alert(err.message || 'Unable to open subscription portal.');
      });
  }

  function signOut() {
    clearJWT();
    setCheckoutStateToken(null);
    refreshSettingsPanel();
    closeSettingsPanel();
  }

  // ─── Credit Counter Badge ─────────────────────────────────────────────────
  function updateCreditBadge() {
    const badge = document.getElementById('ai-credit-badge');
    if (!badge) return;
    if (hasProAccess() || getBYOKey()) {
      badge.classList.add('hidden');
      return;
    }
    const credits = getFreeCredits();
    badge.classList.remove('hidden');
    badge.textContent = `${credits} free AI use${credits !== 1 ? 's' : ''} remaining`;
    badge.className = [
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      credits > 0
        ? 'bg-primary/10 text-primary'
        : 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400'
    ].join(' ');
  }

  // ─── API Key Management ───────────────────────────────────────────────────

  async function apiFetch(path, payload) {
    const integrations = window.GICDeployIntegrations;
    if (!integrations) throw new Error('GICDeployIntegrations not loaded');
    const bridgeUrl = integrations.getBridgeUrl();
    if (!bridgeUrl) throw new Error('Bridge worker not configured');
    const csrfToken = await integrations.getBridgeCsrfToken();
    const jwt = getJWT();
    if (!jwt) throw new Error('Not signed in');
    const resp = await fetch(`${bridgeUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(payload || {})
    });
    const text = await resp.text();
    if (!resp.ok) {
      let msg = `Request failed (${resp.status})`;
      try { msg = JSON.parse(text).error || msg; } catch (_) {}
      throw new Error(msg);
    }
    return JSON.parse(text);
  }

  async function loadApiKeyList() {
    const listEl = document.getElementById('settings-apikeys-list');
    if (!listEl) return;
    listEl.innerHTML = '<p class="text-xs text-slate-400 py-2">Loading…</p>';
    try {
      const data = await apiFetch('/api/keys/list');
      renderApiKeyList(data.keys || []);
    } catch (err) {
      listEl.innerHTML = `<p class="text-xs text-red-500 py-2">${err.message}</p>`;
    }
  }

  function renderApiKeyList(keys) {
    const listEl = document.getElementById('settings-apikeys-list');
    if (!listEl) return;
    if (!keys.length) {
      listEl.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-500 py-2">No API keys yet.</p>';
      return;
    }
    listEl.innerHTML = keys.map(k => `
      <div class="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 gap-2">
        <div class="min-w-0 flex-1">
          <p class="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">${escHtml(k.label)}</p>
          <p class="text-xs text-slate-400 dark:text-slate-500 font-mono truncate">${escHtml(k.maskedKey || '')}</p>
          ${k.lastUsedAt
            ? `<p class="text-xs text-slate-400 dark:text-slate-500">Last used: ${new Date(k.lastUsedAt).toLocaleDateString()}</p>`
            : `<p class="text-xs text-slate-400 dark:text-slate-500">Created: ${new Date(k.createdAt).toLocaleDateString()}</p>`
          }
        </div>
        ${k.active
          ? `<button data-revoke-key="${escHtml(k.keyId)}" class="shrink-0 text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium">Revoke</button>`
          : `<span class="shrink-0 text-xs text-slate-400 dark:text-slate-500">Revoked</span>`
        }
      </div>
    `).join('');

    listEl.querySelectorAll('[data-revoke-key]').forEach(btn => {
      btn.addEventListener('click', () => revokeApiKey(btn.dataset.revokeKey));
    });
  }

  async function generateApiKey() {
    const labelEl  = document.getElementById('settings-apikey-label');
    const revealEl = document.getElementById('settings-apikey-reveal');
    const rawKeyEl = document.getElementById('settings-apikey-raw');
    const statusEl = document.getElementById('settings-apikeys-status');
    const genBtn   = document.getElementById('settings-apikey-generate');

    const label = (labelEl?.value || '').trim();
    if (!label) {
      if (statusEl) { statusEl.textContent = 'Enter a label first.'; statusEl.classList.remove('hidden'); }
      return;
    }

    if (genBtn) genBtn.disabled = true;
    if (statusEl) statusEl.classList.add('hidden');

    try {
      const data = await apiFetch('/api/keys/create', { label });
      if (labelEl) labelEl.value = '';
      if (rawKeyEl) rawKeyEl.value = data.rawKey;
      if (revealEl) revealEl.classList.remove('hidden');
      await loadApiKeyList();
    } catch (err) {
      if (statusEl) {
        statusEl.textContent = err.message;
        statusEl.classList.remove('hidden');
        setTimeout(() => statusEl.classList.add('hidden'), 4000);
      }
    } finally {
      if (genBtn) genBtn.disabled = false;
    }
  }

  async function revokeApiKey(keyId) {
    if (!confirm('Revoke this API key? Any scripts using it will stop working immediately.')) return;
    const statusEl = document.getElementById('settings-apikeys-status');
    try {
      await apiFetch('/api/keys/revoke', { keyId });
      await loadApiKeyList();
      if (statusEl) {
        statusEl.textContent = 'Key revoked.';
        statusEl.classList.remove('hidden');
        setTimeout(() => statusEl.classList.add('hidden'), 2000);
      }
    } catch (err) {
      if (statusEl) {
        statusEl.textContent = err.message;
        statusEl.classList.remove('hidden');
        setTimeout(() => statusEl.classList.add('hidden'), 4000);
      }
    }
  }

  function copyApiKey() {
    const rawKeyEl = document.getElementById('settings-apikey-raw');
    const copyBtn  = document.getElementById('settings-apikey-copy');
    if (!rawKeyEl?.value) return;
    navigator.clipboard.writeText(rawKeyEl.value).then(() => {
      if (copyBtn) {
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = orig; }, 2000);
      }
    }).catch(() => {});
  }

  function escHtml(str) {
    return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ─── Modal Init (wire up buttons after DOM ready) ─────────────────────────
  function initModalHandlers() {
    // Close on backdrop
    const modal = document.getElementById('modal-upgrade');
    if (modal) {
      modal.addEventListener('click', event => {
        if (event.target === modal) hideUpgradeModal();
      });
    }

    // Billing tab toggles
    document.querySelectorAll('[data-billing-tab]').forEach(tab => {
      tab.addEventListener('click', () => selectBillingTab(tab.dataset.billingTab));
    });

    // Checkout buttons
    document.querySelectorAll('[data-checkout-plan]').forEach(btn => {
      btn.addEventListener('click', () => {
        const plan = btn.dataset.checkoutPlan;
        const interval = btn.dataset.checkoutInterval || 'year';
        startCheckout(plan, interval);
      });
    });

    // Maybe later
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
      btn.addEventListener('click', hideUpgradeModal);
    });

    // Settings panel
    const gearBtn = document.getElementById('btn-settings');
    if (gearBtn) gearBtn.addEventListener('click', openSettingsPanel);

    const closeSettingsBtn = document.getElementById('settings-close-btn');
    if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', closeSettingsPanel);

    const settingsOverlay = document.getElementById('settings-overlay');
    if (settingsOverlay) settingsOverlay.addEventListener('click', closeSettingsPanel);

    const byoSaveBtn = document.getElementById('settings-byo-save');
    if (byoSaveBtn) byoSaveBtn.addEventListener('click', saveBYOConfig);

    const brandSaveBtn = document.getElementById('settings-brand-save');
    if (brandSaveBtn) brandSaveBtn.addEventListener('click', saveBusinessBrand);

    const portalBtn = document.getElementById('settings-portal-btn');
    if (portalBtn) portalBtn.addEventListener('click', openStripePortal);

    const signOutBtn = document.getElementById('settings-signout-btn');
    if (signOutBtn) signOutBtn.addEventListener('click', signOut);

    // API key management
    const genKeyBtn = document.getElementById('settings-apikey-generate');
    if (genKeyBtn) genKeyBtn.addEventListener('click', generateApiKey);

    const copyKeyBtn = document.getElementById('settings-apikey-copy');
    if (copyKeyBtn) copyKeyBtn.addEventListener('click', copyApiKey);

    // Initial credit badge
    updateCreditBadge();

    // Renew JWT in background
    renewIfNeeded();
  }

  // ─── Public API ───────────────────────────────────────────────────────────
  window.GICProGate = {
    // Credits
    getFreeCredits,
    useFreeCredit,
    hasFreeCredits,
    resetFreeCredits,
    // JWT
    getJWT,
    setJWT,
    clearJWT,
    decodeJWT,
    // Access
    hasProAccess,
    hasBusinessAccess,
    hasAIAccess,
    getCurrentPlan,
    // BYOK
    getBYOKey,
    getBYOBaseUrl,
    setBYOConfig,
    clearBYOConfig,
    // Stripe
    startCheckout,
    verifySession,
    renewIfNeeded,
    // Modal
    showUpgradeModal,
    hideUpgradeModal,
    selectBillingTab,
    // Badge
    renderProBadge,
    updateCreditBadge,
    // Brand
    getBrand,
    setBrand,
    // Settings
    openSettingsPanel,
    closeSettingsPanel,
    refreshSettingsPanel,
    // API key management
    loadApiKeyList,
    generateApiKey,
    revokeApiKey,
    copyApiKey,
    // Init
    initModalHandlers
  };

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModalHandlers);
  } else {
    initModalHandlers();
  }
})();
