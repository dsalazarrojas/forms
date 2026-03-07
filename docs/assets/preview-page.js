(function () {
  const STORAGE_KEYS = {
    myForms: 'gic-my-forms',
    cfAccountId: 'gic-cf-account-id',
    cfApiToken: 'gic-cf-api-token',
    cfSubdomain: 'gic-cf-workers-subdomain'
  };

  let currentForm = null;
  let currentYaml = '';
  let currentFormPath = null;
  let currentFormMeta = {};
  let currentLocalFormId = null;
  let originalYaml = '';
  let hasXlsForm = false;
  let viewMode = 'desktop';
  let currentTab = 'preview';
  let editor = null;

  function codec() {
    return window.GICYamlCodec;
  }

  function clone(value) {
    if (typeof structuredClone === 'function') {
      return structuredClone(value);
    }
    return JSON.parse(JSON.stringify(value));
  }

  function escapeHtml(text) {
    if (text === null || text === undefined) {
      return '';
    }
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function humanType(type) {
    return String(type || 'text').replace(/_/g, ' ').replace(/\b\w/g, match => match.toUpperCase());
  }

  function slugToTitle(slug) {
    return String(slug || 'custom_forms')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, match => match.toUpperCase());
  }

  function normalizeOptionLabel(option) {
    return codec().normalizeOptionLabel(option);
  }

  function isValidRemoteFormPath(formPath) {
    if (!formPath || typeof formPath !== 'string') {
      return false;
    }

    if (formPath.includes('..') || formPath.startsWith('/') || /^https?:/i.test(formPath)) {
      return false;
    }

    return /^[a-z0-9_-]+\/[a-z0-9_.-]+\.(yaml|yml)$/i.test(formPath);
  }

  function getAppliedPages() {
    return Array.isArray(currentForm?.inputSchema?.properties?.pages)
      ? currentForm.inputSchema.properties.pages
      : [];
  }

  function getAppliedTitle() {
    return String(currentForm?.inputSchema?.properties?.title || 'Untitled Survey');
  }

  function getCurrentCategorySlug() {
    if (currentFormPath) {
      return currentFormPath.split('/')[0] || 'custom_forms';
    }
    return currentFormMeta.category || 'custom_forms';
  }

  function getSuggestedFileName() {
    if (currentFormPath) {
      return currentFormPath.split('/').pop() || 'form.yaml';
    }
    const slug = codec().generateSlug(getAppliedTitle()) || 'custom-form';
    return `${slug}.yaml`;
  }

  function getDraftKey() {
    return `gic-form-draft:${currentFormPath || currentLocalFormId || 'local'}`;
  }

  function getCurrentEditor() {
    if (!editor) {
      editor = new window.GICFormEditor({
        container: 'editor-root',
        getDraftKey: getDraftKey,
        getDownloadName: getSuggestedFileName,
        onApply: async yaml => {
          await loadYamlDocument(yaml, {
            formPath: currentFormPath,
            localFormId: currentLocalFormId,
            category: getCurrentCategorySlug(),
            updateUrl: false,
            markOriginal: false,
            editorStatus: 'Changes applied to the live preview and YAML source.'
          });
        },
        onStateChange: () => {
          updateDeploySummary();
        }
      });
    }
    return editor;
  }

  function parseRequestedTab() {
    const rawHash = String(window.location.hash || '').replace(/^#/, '').trim();
    if (!rawHash) {
      return 'preview';
    }

    if (rawHash.includes('=')) {
      const params = new URLSearchParams(rawHash);
      const requested = params.get('tab') || 'preview';
      return requested === 'my-forms' ? 'myforms' : requested;
    }

    return rawHash === 'my-forms' ? 'myforms' : rawHash;
  }

  function updateTabHash(tab) {
    const url = new URL(window.location.href);
    url.hash = `tab=${tab}`;
    history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function switchTab(tab, updateHash) {
    const nextTab = tab || 'preview';
    currentTab = nextTab;

    document.querySelectorAll('.tab-btn').forEach(button => {
      const isActive = button.dataset.tab === nextTab;
      button.classList.toggle('tab-active-pill', isActive);
      button.classList.toggle('tab-inactive-pill', !isActive);
      button.classList.toggle('rounded-md', !isActive);
    });

    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.toggle('hidden', content.id !== `tab-${nextTab}`);
    });

    if (updateHash !== false) {
      updateTabHash(nextTab);
    }
  }

  function setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(button => {
      button.addEventListener('click', () => {
        switchTab(button.dataset.tab, true);
      });
    });

    window.addEventListener('hashchange', () => {
      switchTab(parseRequestedTab(), false);
    });

    switchTab(parseRequestedTab(), false);
  }

  function toggleDark() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('gic-theme', isDark ? 'dark' : 'light');
    updateDarkIcon();
  }

  function updateDarkIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.getElementById('dark-icon');
    if (icon) {
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
  }

  function setViewMode(mode) {
    viewMode = mode;
    const wrap = document.getElementById('form-renderer-wrap');
    const renderer = document.getElementById('form-renderer');
    const btnDesktop = document.getElementById('btn-desktop');
    const btnMobile = document.getElementById('btn-mobile');

    if (!wrap || !renderer || !btnDesktop || !btnMobile) {
      return;
    }

    if (mode === 'mobile') {
      wrap.classList.remove('max-w-2xl');
      wrap.classList.add('max-w-sm');
      renderer.classList.add('phone-frame');
      btnMobile.className = 'view-active flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all';
      btnDesktop.className = 'view-inactive flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all';
    } else {
      wrap.classList.remove('max-w-sm');
      wrap.classList.add('max-w-2xl');
      renderer.classList.remove('phone-frame');
      btnDesktop.className = 'view-active flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all';
      btnMobile.className = 'view-inactive flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all';
    }
  }

  function flashCopyState(button, copiedLabel) {
    if (!button) {
      return;
    }
    const original = button.dataset.originalLabel || button.innerHTML;
    if (!button.dataset.originalLabel) {
      button.dataset.originalLabel = original;
    }
    button.innerHTML = copiedLabel;
    window.setTimeout(() => {
      button.innerHTML = original;
    }, 1800);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_) {
      return false;
    }
  }

  async function copyYaml() {
    if (!currentYaml) {
      return;
    }
    const success = await copyText(currentYaml);
    if (success) {
      flashCopyState(document.getElementById('btn-copy-yaml'), '<span class="material-symbols-outlined icon-sm">check</span><span class="hidden sm:inline text-xs">Copied!</span>');
      flashCopyState(document.getElementById('copy-yaml-inner'), '<span class="material-symbols-outlined icon-sm">check</span>Copied!');
    }
  }

  function downloadFile(path, content, mimeType) {
    const blob = new Blob([content], { type: mimeType || 'text/plain' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = path;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  }

  function downloadXlsx() {
    if (!currentFormPath) {
      return;
    }
    const xlsxPath = currentFormPath.replace(/\.(yaml|yml)$/i, '.xlsx');
    window.open(`https://raw.githubusercontent.com/dsalazarrojas/forms/main/${xlsxPath}`, '_blank');
  }

  function renderPreviewError(message) {
    document.getElementById('form-renderer').innerHTML = `
      <div class="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
        <span class="material-symbols-outlined mb-3" style="font-size:32px;">error</span>
        <p class="text-sm font-semibold">Unable to load this form</p>
        <p class="mt-2 text-sm">${escapeHtml(message)}</p>
      </div>`;
  }

  function renderForm(pages) {
    const container = document.getElementById('form-renderer');
    if (!container) {
      return;
    }

    const fieldsHtml = pages.map((page, index) => {
      const type = String(page.type || 'text');
      const label = escapeHtml((page.label || page.name || `Question ${index + 1}`).replace(/_/g, ' '));
      const hint = escapeHtml(page.hint || '');
      const required = Boolean(page.required);
      const reqStar = required ? '<span class="required-star">*</span>' : '';
      let inputHtml = '';

      switch (type) {
        case 'text':
          inputHtml = `<input type="text" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'email':
          inputHtml = `<input type="email" class="preview-input" placeholder="name@example.com" ${required ? 'required' : ''}>`;
          break;
        case 'integer':
        case 'number':
          inputHtml = `<input type="number" step="1" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'decimal':
          inputHtml = `<input type="number" step="0.01" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'date':
          inputHtml = `<input type="date" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'time':
          inputHtml = `<input type="time" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'datetime':
          inputHtml = `<input type="datetime-local" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'audio':
          inputHtml = `<input type="file" accept="audio/*" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'image':
          inputHtml = `<input type="file" accept="image/*" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'video':
          inputHtml = `<input type="file" accept="video/*" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'file':
          inputHtml = `<input type="file" class="preview-input" ${required ? 'required' : ''}>`;
          break;
        case 'select_one': {
          const options = Array.isArray(page.options) ? page.options : [];
          inputHtml = `<select class="preview-input" ${required ? 'required' : ''}><option value="">Select an option…</option>${options.map(option => {
            const labelValue = escapeHtml(normalizeOptionLabel(option));
            return `<option value="${labelValue}">${labelValue}</option>`;
          }).join('')}</select>`;
          break;
        }
        case 'select_multiple': {
          const options = Array.isArray(page.options) ? page.options : [];
          inputHtml = `<div class="space-y-2 mt-1">${options.map(option => {
            const labelValue = escapeHtml(normalizeOptionLabel(option));
            return `
              <label class="flex items-center gap-2 text-sm cursor-pointer">
                <input type="checkbox" value="${labelValue}" style="accent-color:#ec5b13;" class="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary">
                <span class="text-slate-700 dark:text-slate-300">${labelValue}</span>
              </label>`;
          }).join('')}</div>`;
          break;
        }
        case 'geopoint':
        case 'geoshape':
        case 'geotrace':
          inputHtml = `
            <div class="rounded-xl border border-dashed border-primary/40 bg-primary/5 px-4 py-4 text-sm text-slate-600 dark:text-slate-300">
              <div class="flex items-start gap-2">
                <span class="material-symbols-outlined text-primary">map</span>
                <div>
                  <p class="font-semibold text-slate-900 dark:text-slate-100">${humanType(type)} capture</p>
                  <p class="mt-1">Preview mode shows a placeholder. The deployed Cloudflare Worker uses a text area so you can collect coordinates or a location description.</p>
                </div>
              </div>
            </div>`;
          break;
        case 'trigger':
          inputHtml = `
            <button type="button" class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white" style="background:#ec5b13;">
              <span class="material-symbols-outlined icon-sm">bolt</span>
              Trigger action
            </button>`;
          break;
        case 'note':
          return `
            <div class="mb-5 rounded-xl border-l-4 border-primary bg-slate-50 px-4 py-4 dark:bg-slate-800">
              <p class="text-sm font-medium text-slate-800 dark:text-slate-200">${label}</p>
              ${hint ? `<p class="preview-hint">${hint}</p>` : ''}
            </div>`;
        default:
          inputHtml = `<input type="text" class="preview-input" ${required ? 'required' : ''}>`;
      }

      return `
        <div class="mb-5">
          <label class="preview-label">${label}${reqStar}</label>
          ${inputHtml}
          ${hint ? `<p class="preview-hint">${hint}</p>` : ''}
        </div>`;
    }).join('');

    container.innerHTML = `
      <form onsubmit="return false;">
        ${fieldsHtml}
        <div class="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
          <button type="submit" class="rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90" style="background:#ec5b13;">Submit Form</button>
        </div>
      </form>`;
  }

  function inferUseCase(categorySlug, pages) {
    const category = String(categorySlug || '').toLowerCase();
    if (category.includes('health') || category.includes('medical') || category.includes('dental')) {
      return 'healthcare intake and compliance-friendly data capture';
    }
    if (category.includes('business') || category.includes('commerce') || category.includes('order')) {
      return 'business workflows, operations, and customer requests';
    }
    if (category.includes('education') || category.includes('school') || category.includes('student')) {
      return 'education workflows, enrollment, and feedback';
    }
    if (category.includes('survey') || category.includes('research')) {
      return 'structured survey and research data collection';
    }
    if (pages.some(page => /consent/i.test(String(page.label || '')))) {
      return 'structured data capture with consent-oriented sections';
    }
    return 'structured field data collection across teams and platforms';
  }

  function updateSeoContent(title, categorySlug, pages, language) {
    const category = slugToTitle(categorySlug);
    const qCount = pages.length;
    const types = [...new Set(pages.map(page => page.type || 'text'))];
    const typeList = types.slice(0, 4).map(humanType).join(', ');
    const useCase = inferUseCase(categorySlug, pages);

    document.getElementById('seo-h1').textContent = `Free ${category} Form: ${title}`;
    document.getElementById('seo-intro').textContent =
      `This AI-generated YAML template is designed for ${useCase}. It includes ${qCount} fields and is compatible with GIC Collect, ODK Collect, Google Forms, Tally, and Formbricks.`;
    document.getElementById('seo-why').textContent =
      `Use this template to launch faster with a structured schema instead of building from scratch. The form covers key prompts for ${category.toLowerCase()} workflows, uses clear field definitions, and stays editable in the graphical editor and YAML source.`;
    document.getElementById('seo-steps').innerHTML = [
      'Review the live preview and graphical editor before publishing.',
      'Save a local draft or add the questionnaire to My Forms.',
      'Export YAML or deploy directly to Cloudflare Workers when the form is ready.',
      'Test required fields and choice options with sample responses before sharing the link.'
    ].map(step => `<li>${escapeHtml(step)}</li>`).join('');
    document.getElementById('seo-faq').innerHTML = [
      {
        q: 'Is this template free to use commercially?',
        a: 'Yes. These templates are released under CC BY 4.0. You can adapt and use them commercially with attribution.'
      },
      {
        q: 'Which tools can import this form?',
        a: 'This template supports YAML-based workflows and XLSForm export. Common paths include GIC Collect, ODK Collect/Central, and conversion to Google Forms or Tally.'
      },
      {
        q: 'What fields are included?',
        a: `${qCount} fields across types such as ${typeList || 'Text'}. Always validate option lists and required flags for your exact use case.`
      },
      {
        q: 'Can I localize this form?',
        a: `Yes. Current language metadata is ${language}. You can duplicate labels and hints for bilingual variants while keeping the same schema structure.`
      }
    ].map(item => `
      <section>
        <h3 class="mb-1 font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(item.q)}</h3>
        <p>${escapeHtml(item.a)}</p>
      </section>`).join('');

    document.getElementById('seo-yaml-snippet').textContent = currentYaml || '';
    Prism.highlightElement(document.getElementById('seo-yaml-snippet'));

    document.title = `Free ${category} Form: ${title} | GIC Forms`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', `Download this free ${category.toLowerCase()} form template with ${qCount} fields. Compatible with GIC Collect, ODK, Google Forms, Tally, and Formbricks.`);
    }
  }

  async function updateRelatedForms(categorySlug, currentPath) {
    const container = document.getElementById('seo-related');
    if (!container) {
      return;
    }

    if (!currentPath || categorySlug === 'custom_forms') {
      container.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-500">Save this questionnaire to My Forms to manage your local drafts and deployments.</p>';
      return;
    }

    container.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-500">Loading related forms...</p>';

    try {
      const response = await fetch('forms-index.json');
      if (!response.ok) {
        throw new Error(`Index HTTP ${response.status}`);
      }
      const index = await response.json();
      const forms = Array.isArray(index.forms) ? index.forms : [];
      const related = forms.filter(form => form && form.category === categorySlug && form.filePath && form.filePath !== currentPath).slice(0, 8);
      if (!related.length) {
        container.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-500">No related forms found yet in this category.</p>';
        return;
      }
      container.innerHTML = related.map(form => `
        <a href="preview.html?form=${encodeURIComponent(form.filePath)}" class="block rounded-lg border border-slate-200 px-3 py-2 transition-colors hover:border-primary hover:bg-primary/5 dark:border-slate-700 dark:hover:border-primary">
          <div class="text-sm font-medium text-slate-900 dark:text-slate-100 leading-snug">${escapeHtml(String(form.title || form.id || 'Untitled Form'))}</div>
          <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">${Number.isFinite(form.questionCount) ? `${form.questionCount} questions` : 'Template'}</div>
        </a>`).join('');
    } catch (_) {
      container.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-500">Related forms are unavailable right now.</p>';
    }
  }

  function updateStats(pages) {
    const questionCount = pages.length;
    const minutes = Math.max(1, Math.ceil(questionCount * 0.5));
    const types = [...new Set(pages.map(page => page.type || 'text'))];
    const typeCounts = {};
    pages.forEach(page => {
      const key = page.type || 'text';
      typeCounts[key] = (typeCounts[key] || 0) + 1;
    });

    document.getElementById('stat-est-time').textContent = `${minutes} min${minutes === 1 ? '' : 's'}`;
    document.getElementById('stat-total-fields').textContent = questionCount;
    document.getElementById('stat-unique-types').textContent = types.length;
    document.getElementById('stat-types-list').innerHTML = Object.entries(typeCounts).map(([type, count]) => `
      <div class="flex justify-between text-sm">
        <span class="text-xs capitalize text-slate-600 dark:text-slate-400">${escapeHtml(type.replace(/_/g, ' '))}</span>
        <span class="text-xs font-bold text-slate-900 dark:text-slate-100">${count}</span>
      </div>`).join('');

    const category = getCurrentCategorySlug().toLowerCase();
    let tip = 'Keep required fields to a minimum for better completion rates.';
    if (category.includes('health') || category.includes('medical')) {
      tip = 'Include a consent section at the start for compliance.';
    } else if (category.includes('business') || category.includes('commerce')) {
      tip = 'Add email validation for client contact fields.';
    } else if (category.includes('survey') || category.includes('research')) {
      tip = 'Use scale questions and clear labels to improve analysis later.';
    } else if (category.includes('education') || category.includes('school')) {
      tip = 'Group related questions into logical sections or note cards.';
    }
    document.getElementById('stat-tip').textContent = tip;
  }

  function setUrlForPath(formPath) {
    const url = new URL(window.location.href);
    if (formPath) {
      url.searchParams.set('form', formPath);
    } else {
      url.searchParams.delete('form');
    }
    history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
  }

  function setLinkState(anchorId, href, fallbackStoreUrl) {
    const anchor = document.getElementById(anchorId);
    if (!anchor) {
      return;
    }

    anchor.classList.remove('opacity-50', 'pointer-events-none');
    anchor.onclick = null;

    if (!href) {
      anchor.href = '#';
      anchor.classList.add('opacity-50', 'pointer-events-none');
      anchor.onclick = event => event.preventDefault();
      return;
    }

    anchor.href = href;
    if (fallbackStoreUrl) {
      anchor.onclick = () => {
        window.setTimeout(() => {
          if (!document.hidden) {
            window.open(fallbackStoreUrl, '_blank');
          }
        }, 800);
      };
    }
  }

  function getDraftStatusMessage(defaultMessage) {
    return localStorage.getItem(getDraftKey())
      ? 'Local draft found for this form. Click “Load Draft” to continue editing.'
      : defaultMessage;
  }

  function updateDeploySummary() {
    const summary = document.getElementById('deploy-target-summary');
    if (!summary) {
      return;
    }
    try {
      const form = getCurrentEditor().getForm();
      const title = form.title || getAppliedTitle();
      const source = currentFormPath ? `Source: ${currentFormPath}` : currentLocalFormId ? 'Source: My Forms draft' : 'Source: current browser draft';
      summary.innerHTML = `
        <p class="text-sm font-semibold text-slate-900 dark:text-slate-100">Current deployment target</p>
        <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">${escapeHtml(title)}</p>
        <p class="mt-1 text-xs text-slate-500 dark:text-slate-500">${escapeHtml(source)} • Deploy uses the current editor state, even if you have not clicked Apply Changes yet.</p>`;
    } catch (_) {
      summary.innerHTML = '<p class="text-sm text-slate-500 dark:text-slate-400">Load or create a form before deploying.</p>';
    }
  }

  function hydrateAppLinks(rawUrl) {
    const encodedUrl = rawUrl ? encodeURIComponent(rawUrl) : '';
    const appStoreUrl = 'https://apps.apple.com/us/app/gic-collect/id1485932698';
    const creatorStoreUrl = 'https://apps.apple.com/app/gic-xlsform-creation/id6737851526';

    setLinkState('btn-giccollect', rawUrl ? `giccollect://import-form?url=${encodedUrl}` : '', appStoreUrl);
    setLinkState('btn-giccollectcreator', rawUrl ? `giccollectcreator://open-form?id=${encodedUrl}` : '', creatorStoreUrl);
    setLinkState('btn-cloudflare', rawUrl ? `onetimeweb://deploy-form?id=${encodedUrl}` : '');
    setLinkState('deploy-giccollect', rawUrl ? `giccollect://import-form?url=${encodedUrl}` : '', appStoreUrl);
    setLinkState('deploy-giccollectcreator', rawUrl ? `giccollectcreator://open-form?id=${encodedUrl}` : '', creatorStoreUrl);
    setLinkState('deploy-cloudflare', rawUrl ? `onetimeweb://deploy-form?id=${encodedUrl}` : '');
  }

  async function hydrateUiFromCurrentForm(options) {
    const config = options || {};
    const title = getAppliedTitle();
    const pages = getAppliedPages();
    const language = String(currentForm?.language || currentFormMeta.language || 'English');
    const categorySlug = getCurrentCategorySlug();
    const categoryTitle = slugToTitle(categorySlug);
    const rawUrl = currentFormPath ? `https://raw.githubusercontent.com/dsalazarrojas/forms/main/${currentFormPath}` : '';

    hasXlsForm = Boolean(currentFormPath);

    document.getElementById('form-title-sidebar').textContent = title;
    document.getElementById('form-category-sidebar').textContent = categoryTitle;
    document.getElementById('form-meta-sidebar').innerHTML = `
      <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        <span class="material-symbols-outlined" style="font-size:12px;">quiz</span>${pages.length} questions
      </span>
      <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        <span class="material-symbols-outlined" style="font-size:12px;">language</span>${escapeHtml(language)}
      </span>`;

    document.getElementById('btn-download-yaml').onclick = () => downloadFile(getSuggestedFileName(), currentYaml, 'text/yaml');
    const xlsxButton = document.getElementById('btn-download-xlsx');
    if (hasXlsForm) {
      xlsxButton.classList.remove('hidden');
      xlsxButton.onclick = () => downloadXlsx();
    } else {
      xlsxButton.classList.add('hidden');
      xlsxButton.onclick = null;
    }

    hydrateAppLinks(rawUrl);
    renderForm(pages);
    document.getElementById('yaml-code').textContent = currentYaml;
    Prism.highlightElement(document.getElementById('yaml-code'));
    updateStats(pages);
    updateSeoContent(title, categorySlug, pages, language);
    await updateRelatedForms(categorySlug, currentFormPath);
    renderMyForms();
    updateDeploySummary();

    const editorStatus = config.editorStatus || getDraftStatusMessage('No local draft loaded.');
    getCurrentEditor().loadYaml(currentYaml, { markClean: true, statusMessage: editorStatus });
  }

  function safeParseSavedForm(yaml) {
    try {
      return codec().parse(yaml);
    } catch (_) {
      return codec().createBlankForm('Untitled Survey');
    }
  }

  function getMyForms() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.myForms);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveMyForms(list) {
    localStorage.setItem(STORAGE_KEYS.myForms, JSON.stringify(list));
  }

  function formatSavedAt(savedAt) {
    if (!savedAt) {
      return 'Unknown';
    }
    const date = new Date(savedAt);
    return Number.isNaN(date.getTime()) ? 'Unknown' : date.toLocaleString();
  }

  function renderMyForms() {
    const container = document.getElementById('myforms-list');
    if (!container) {
      return;
    }

    const forms = getMyForms();
    if (!forms.length) {
      container.innerHTML = `
        <div class="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <span class="material-symbols-outlined mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary" style="font-size:28px;">folder_open</span>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">No saved forms yet</h3>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Edit a form from the library, then save it here for quick reuse and deployment.</p>
        </div>`;
      return;
    }

    container.innerHTML = forms.map(item => {
      const parsed = safeParseSavedForm(item.yaml || '');
      const questionCount = parsed.questions.length;
      const title = item.title || parsed.title || 'Untitled Survey';
      return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900" data-myform-id="${escapeHtml(item.id)}">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-primary">${escapeHtml(slugToTitle(item.category || 'custom_forms'))}</p>
              <h3 class="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(title)}</h3>
              <div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span class="rounded-full bg-slate-100 px-2.5 py-1 font-semibold dark:bg-slate-800">${questionCount} question${questionCount === 1 ? '' : 's'}</span>
                <span class="rounded-full bg-slate-100 px-2.5 py-1 font-semibold dark:bg-slate-800">Saved ${escapeHtml(formatSavedAt(item.savedAt))}</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <button type="button" data-myforms-action="load" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">edit_note</span>Load
              </button>
              <button type="button" data-myforms-action="preview" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">visibility</span>Preview
              </button>
              <button type="button" data-myforms-action="deploy" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">rocket_launch</span>Deploy to Cloudflare
              </button>
              <button type="button" data-myforms-action="download" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">download</span>Download YAML
              </button>
              <button type="button" data-myforms-action="copy" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">content_copy</span>Copy YAML
              </button>
              <button type="button" data-myforms-action="delete" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">delete</span>Delete
              </button>
            </div>
          </div>
        </article>`;
    }).join('');
  }

  function findMyForm(id) {
    return getMyForms().find(item => item.id === id) || null;
  }

  async function loadYamlDocument(yaml, options) {
    const config = options || {};
    const parsed = window.jsyaml.load(yaml);
    currentYaml = yaml;
    currentForm = parsed;
    currentFormMeta = codec().extractMetadata(parsed);
    if (config.category) {
      currentFormMeta.category = config.category;
    }
    if (Object.prototype.hasOwnProperty.call(config, 'formPath')) {
      currentFormPath = config.formPath;
    }
    if (Object.prototype.hasOwnProperty.call(config, 'localFormId')) {
      currentLocalFormId = config.localFormId;
    }
    if (config.markOriginal !== false) {
      originalYaml = yaml;
    }
    if (config.updateUrl !== false) {
      setUrlForPath(currentFormPath);
    }
    await hydrateUiFromCurrentForm({ editorStatus: config.editorStatus });
    if (config.switchTab) {
      switchTab(config.switchTab, true);
    }
  }

  async function loadSavedForm(item, targetTab) {
    if (!item) {
      return;
    }
    await loadYamlDocument(item.yaml, {
      formPath: null,
      localFormId: item.id,
      category: item.category || 'custom_forms',
      updateUrl: true,
      editorStatus: 'Saved form loaded from My Forms.',
      switchTab: targetTab || 'editor'
    });
  }

  async function saveCurrentFormToMyForms() {
    const currentEditor = getCurrentEditor();
    const yaml = currentEditor.buildYaml();
    const form = currentEditor.getForm();
    const list = getMyForms();
    const id = currentLocalFormId || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `local-${Date.now()}`);
    const record = {
      id,
      title: form.title || 'Untitled Survey',
      yaml,
      savedAt: new Date().toISOString(),
      category: getCurrentCategorySlug(),
      sourcePath: currentFormPath || null
    };
    const existingIndex = list.findIndex(item => item.id === id);
    if (existingIndex >= 0) {
      list.splice(existingIndex, 1, record);
    } else {
      list.unshift(record);
    }
    currentLocalFormId = id;
    saveMyForms(list);
    renderMyForms();
    currentEditor.setStatus('Saved to My Forms.');
    updateDeploySummary();
  }

  async function createNewBlankForm() {
    const blank = codec().createBlankForm('Untitled Survey');
    const yaml = codec().serialize(blank, {});
    currentLocalFormId = null;
    await loadYamlDocument(yaml, {
      formPath: null,
      localFormId: null,
      category: 'custom_forms',
      updateUrl: true,
      editorStatus: 'Blank form ready to edit.',
      switchTab: 'editor'
    });
  }

  function deleteMyForm(id) {
    const target = findMyForm(id);
    if (!target) {
      return;
    }
    if (!window.confirm(`Delete “${target.title || 'Untitled Survey'}” from My Forms?`)) {
      return;
    }
    const remaining = getMyForms().filter(item => item.id !== id);
    saveMyForms(remaining);
    if (currentLocalFormId === id) {
      currentLocalFormId = null;
    }
    renderMyForms();
  }

  function setupMyFormsHandlers() {
    const saveButton = document.getElementById('myforms-save-current');
    const newButton = document.getElementById('myforms-new-blank');
    const list = document.getElementById('myforms-list');

    if (saveButton) {
      saveButton.addEventListener('click', () => {
        saveCurrentFormToMyForms();
      });
    }

    if (newButton) {
      newButton.addEventListener('click', () => {
        createNewBlankForm();
      });
    }

    if (list) {
      list.addEventListener('click', async event => {
        const button = event.target.closest('[data-myforms-action]');
        if (!button) {
          return;
        }
        const action = button.dataset.myformsAction;
        const item = findMyForm(button.dataset.myformId);
        if (!item) {
          return;
        }

        switch (action) {
          case 'load':
            await loadSavedForm(item, 'editor');
            return;
          case 'preview':
            await loadSavedForm(item, 'preview');
            return;
          case 'deploy':
            await loadSavedForm(item, 'deploy');
            return;
          case 'download':
            downloadFile(`${codec().generateSlug(item.title || 'saved-form') || 'saved-form'}.yaml`, item.yaml, 'text/yaml');
            return;
          case 'copy':
            await copyText(item.yaml || '');
            return;
          case 'delete':
            deleteMyForm(item.id);
            return;
          default:
            return;
        }
      });
    }
  }

  function sanitizeWorkerName(input) {
    const base = String(input || '')
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 48);
    const normalized = base || 'gic-form';
    return /^[a-z]/.test(normalized) ? normalized : `gic-${normalized}`;
  }

  function inferDeployUrl(workerName, subdomain, responseJson) {
    const urls = responseJson?.result?.urls;
    if (Array.isArray(urls) && urls.length && urls[0]) {
      return urls[0];
    }
    return `https://${workerName}${subdomain ? `.${subdomain}` : ''}.workers.dev`;
  }

  function extractDeployError(status, payload, fallback) {
    const apiErrors = Array.isArray(payload?.errors) ? payload.errors.map(error => error?.message || error).filter(Boolean) : [];
    if (apiErrors.length) {
      return apiErrors.join(' • ');
    }
    if (payload?.message) {
      return payload.message;
    }
    return fallback || `Cloudflare request failed (HTTP ${status}).`;
  }

  function setDeployStatus(options) {
    const status = document.getElementById('deploy-status');
    if (!status) {
      return;
    }
    const type = options?.type || 'info';
    const tone = type === 'success'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300'
      : type === 'error'
        ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300'
        : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200';

    status.innerHTML = `
      <div class="rounded-2xl border px-4 py-4 ${tone}">
        <p class="text-sm font-semibold">${escapeHtml(options?.headline || (type === 'success' ? 'Deployment complete' : type === 'error' ? 'Deployment failed' : 'Deployment status'))}</p>
        <p class="mt-1 text-sm">${escapeHtml(options?.message || '')}</p>
        ${options?.url ? `
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <a href="${escapeHtml(options.url)}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="width:auto;padding:8px 12px;">
              <span class="material-symbols-outlined icon-sm">open_in_new</span>Open deployed form
            </a>
            <button type="button" id="deploy-copy-url" class="btn-outline" style="width:auto;padding:8px 12px;">
              <span class="material-symbols-outlined icon-sm">content_copy</span>Copy URL
            </button>
          </div>
          <p class="mt-2 text-xs">${escapeHtml(options.url)}</p>` : ''}
      </div>`;

    if (options?.url) {
      const copyButton = document.getElementById('deploy-copy-url');
      if (copyButton) {
        copyButton.addEventListener('click', async () => {
          const copied = await copyText(options.url);
          if (copied) {
            copyButton.innerHTML = '<span class="material-symbols-outlined icon-sm">check</span>Copied';
          }
        }, { once: true });
      }
    }
  }

  async function deployCurrentForm() {
    const deployButton = document.getElementById('deploy-direct-btn');
    const accountIdField = document.getElementById('cf-account-id');
    const apiTokenField = document.getElementById('cf-api-token');
    const subdomainField = document.getElementById('cf-workers-subdomain');
    const workerNameField = document.getElementById('cf-worker-name');

    const accountId = accountIdField?.value.trim() || '';
    const apiToken = apiTokenField?.value.trim() || '';
    const subdomain = subdomainField?.value.trim() || '';

    if (!accountId || !apiToken) {
      setDeployStatus({ type: 'error', message: 'Cloudflare Account ID and API Token are required.' });
      return;
    }

    const currentEditor = getCurrentEditor();
    const form = currentEditor.getForm();
    const yaml = currentEditor.buildYaml();
    const desiredWorkerName = sanitizeWorkerName(workerNameField?.value || codec().generateSlug(form.title || 'gic-form').replace(/_/g, '-'));
    const workerName = workerNameField?.value.trim()
      ? desiredWorkerName
      : `${desiredWorkerName}-${Date.now().toString(36)}`;

    if (workerNameField) {
      workerNameField.value = workerName;
    }

    const script = window.GICCloudflareWorker.createWorkerScript(form, { yaml });
    const endpoint = `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}/workers/scripts/${encodeURIComponent(workerName)}`;

    if (deployButton) {
      deployButton.disabled = true;
      deployButton.classList.add('opacity-70', 'cursor-not-allowed');
    }
    setDeployStatus({ type: 'info', headline: 'Deploying…', message: 'Uploading the generated Worker script to Cloudflare.' });

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/javascript'
        },
        body: script
      });

      const responseText = await response.text();
      let payload = {};
      try {
        payload = responseText ? JSON.parse(responseText) : {};
      } catch (_) {
        payload = { message: responseText };
      }

      if (!response.ok || payload.success === false) {
        throw new Error(extractDeployError(response.status, payload));
      }

      const deployedUrl = inferDeployUrl(workerName, subdomain, payload);
      setDeployStatus({
        type: 'success',
        message: 'Your questionnaire is now deployed to Cloudflare Workers.',
        url: deployedUrl
      });
      currentEditor.setStatus(`Deployed to Cloudflare Workers: ${deployedUrl}`);
    } catch (error) {
      setDeployStatus({ type: 'error', message: error.message || 'Deployment failed.' });
    } finally {
      if (deployButton) {
        deployButton.disabled = false;
        deployButton.classList.remove('opacity-70', 'cursor-not-allowed');
      }
    }
  }

  function initDeployControls() {
    const accountIdField = document.getElementById('cf-account-id');
    const apiTokenField = document.getElementById('cf-api-token');
    const subdomainField = document.getElementById('cf-workers-subdomain');
    const deployButton = document.getElementById('deploy-direct-btn');

    if (accountIdField) {
      accountIdField.value = localStorage.getItem(STORAGE_KEYS.cfAccountId) || '';
      accountIdField.addEventListener('input', () => {
        localStorage.setItem(STORAGE_KEYS.cfAccountId, accountIdField.value.trim());
      });
    }

    if (apiTokenField) {
      apiTokenField.value = sessionStorage.getItem(STORAGE_KEYS.cfApiToken) || '';
      apiTokenField.addEventListener('input', () => {
        sessionStorage.setItem(STORAGE_KEYS.cfApiToken, apiTokenField.value);
      });
    }

    if (subdomainField) {
      subdomainField.value = localStorage.getItem(STORAGE_KEYS.cfSubdomain) || '';
      subdomainField.addEventListener('input', () => {
        localStorage.setItem(STORAGE_KEYS.cfSubdomain, subdomainField.value.trim());
      });
    }

    if (deployButton) {
      deployButton.addEventListener('click', () => {
        deployCurrentForm();
      });
    }

    updateDeploySummary();
  }

  async function loadRemoteForm(formPath) {
    if (!isValidRemoteFormPath(formPath)) {
      throw new Error('Invalid form path specified.');
    }
    const response = await fetch(`https://raw.githubusercontent.com/dsalazarrojas/forms/main/${formPath}`);
    if (!response.ok) {
      throw new Error(`Form not found (HTTP ${response.status}).`);
    }
    const yaml = await response.text();
    currentLocalFormId = null;
    await loadYamlDocument(yaml, {
      formPath,
      localFormId: null,
      updateUrl: true,
      editorStatus: getDraftStatusMessage('No local draft loaded.')
    });
  }

  async function loadInitialForm() {
    updateDarkIcon();
    setupTabs();
    setupMyFormsHandlers();
    initDeployControls();
    document.getElementById('btn-copy-yaml').addEventListener('click', copyYaml);

    getCurrentEditor();

    const formPath = new URLSearchParams(window.location.search).get('form');
    if (formPath) {
      currentFormPath = isValidRemoteFormPath(formPath) ? formPath : null;
      try {
        await loadRemoteForm(formPath);
      } catch (error) {
        renderPreviewError(error.message || 'Unknown error');
        const blankYaml = codec().serialize(codec().createBlankForm('Untitled Survey'), {});
        currentFormPath = null;
        currentLocalFormId = null;
        await loadYamlDocument(blankYaml, {
          formPath: null,
          localFormId: null,
          category: 'custom_forms',
          updateUrl: false,
          editorStatus: `Remote form load failed: ${error.message}`
        });
        document.getElementById('form-title-sidebar').textContent = 'Error loading form';
      }
    } else {
      await createNewBlankForm();
      const requestedTab = parseRequestedTab();
      switchTab(requestedTab === 'preview' ? 'editor' : requestedTab, false);
    }
  }

  window.toggleDark = toggleDark;
  window.setViewMode = setViewMode;
  window.copyYaml = copyYaml;
  window.downloadXlsx = downloadXlsx;
  window.saveCurrentFormToMyForms = saveCurrentFormToMyForms;
  window.createNewBlankForm = createNewBlankForm;

  window.addEventListener('DOMContentLoaded', () => {
    loadInitialForm().catch(error => {
      renderPreviewError(error.message || 'Unable to initialize the editor.');
    });
  });
})();
