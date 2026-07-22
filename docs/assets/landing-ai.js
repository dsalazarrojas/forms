(function () {
  'use strict';
  var FREE_AI_LIMIT = 3;
  var STORAGE_KEY = 'gic-free-ai-credits';

  function getFreeCreditsRemaining() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) return FREE_AI_LIMIT;
      var n = parseInt(raw, 10);
      return isNaN(n) ? FREE_AI_LIMIT : Math.max(0, n);
    } catch (_) {
      return FREE_AI_LIMIT;
    }
  }

  function creditsLabel() {
    var n = getFreeCreditsRemaining();
    if (n <= 0) return 'Free AI uses exhausted — upgrade for unlimited generation.';
    return n + ' free AI use' + (n === 1 ? '' : 's') + ' remaining';
  }

  function renderCredits(el) {
    if (el) el.textContent = creditsLabel();
  }

  function submitPrompt(promptText) {
    var text = (promptText || '').trim();
    if (!text) return;
    try { sessionStorage.setItem('gic-pending-ai-prompt', text); } catch (_) {}
    window.location.href = 'preview.html';
  }

  function wireForm(formId, inputId) {
    var form = document.getElementById(formId);
    var input = document.getElementById(inputId);
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitPrompt(input ? input.value : '');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderCredits(document.getElementById('hero-ai-credits'));
    renderCredits(document.getElementById('header-ai-credits'));
    wireForm('hero-ai-form', 'hero-ai-prompt');
    wireForm('header-ai-form', 'header-ai-prompt');

    var headerBtn = document.getElementById('header-ai-btn');
    var headerPopover = document.getElementById('header-ai-popover');
    if (headerBtn && headerPopover) {
      headerBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var isHidden = headerPopover.classList.toggle('hidden');
        headerBtn.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
      });
      document.addEventListener('click', function (e) {
        if (!headerPopover.classList.contains('hidden') && !headerPopover.contains(e.target) && e.target !== headerBtn) {
          headerPopover.classList.add('hidden');
          headerBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });
})();
