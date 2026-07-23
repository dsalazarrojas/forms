(function () {
  const STORAGE_KEYS = {
    myForms: 'gic-my-forms',
    cfAccountId: 'gic-cf-account-id',
    cfApiToken: 'gic-cf-api-token',
    cfSubdomain: 'gic-cf-workers-subdomain'
  };

  const PLATFORM_TOKEN_FIELDS = [
    { inputId: 'dp-tally-token', storageKey: 'gic-tally-token' },
    { inputId: 'dp-formbricks-key', storageKey: 'gic-formbricks-key' },
    { inputId: 'dp-ona-token', storageKey: 'gic-ona-token' },
    { inputId: 'dp-kobo-token', storageKey: 'gic-kobo-token' }
  ];

  let currentForm = null;
  let currentYaml = '';
  let currentFormPath = null;
  let currentFormMeta = {};
  let currentLocalFormId = null;
  let responsesPanelState = { formId: null, mgmtToken: null, cursor: null, items: [], hasMore: false, localFormId: null };
  const responseCountsByFormId = Object.create(null);
  let originalYaml = '';
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

  function getClipboardFailureMessage() {
    return window.isSecureContext
      ? 'Copy unavailable'
      : 'HTTPS required';
  }

  function renderInlineMarkdown(text) {
    return escapeHtml(String(text || ''))
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  function renderHelpMarkdown(markdown) {
    const lines = String(markdown || '').split(/\r?\n/);
    const blocks = [];
    let paragraph = [];
    let listType = '';

    function flushParagraph() {
      if (!paragraph.length) {
        return;
      }
      blocks.push(`<p class="mb-3">${renderInlineMarkdown(paragraph.join(' '))}</p>`);
      paragraph = [];
    }

    function closeList() {
      if (!listType) {
        return;
      }
      blocks.push(listType === 'ol' ? '</ol>' : '</ul>');
      listType = '';
    }

    function openList(nextType) {
      if (listType === nextType) {
        return;
      }
      closeList();
      listType = nextType;
      blocks.push(nextType === 'ol'
        ? '<ol class="my-2 ml-5 list-decimal space-y-1">'
        : '<ul class="my-2 ml-5 list-disc space-y-1">');
    }

    lines.forEach(line => {
      const trimmed = line.trim();
      if (!trimmed) {
        flushParagraph();
        closeList();
        return;
      }

      const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
      if (headingMatch) {
        flushParagraph();
        closeList();
        const level = headingMatch[1].length;
        const classes = {
          1: 'text-xl font-bold text-slate-900 dark:text-slate-100 mt-0 mb-3',
          2: 'text-lg font-semibold text-slate-900 dark:text-slate-100 mt-6 mb-2',
          3: 'text-base font-semibold text-slate-800 dark:text-slate-200 mt-5 mb-1',
          4: 'text-sm font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-1'
        };
        blocks.push(`<h${level} class="${classes[level]}">${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
        return;
      }

      const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
      if (orderedMatch) {
        flushParagraph();
        openList('ol');
        blocks.push(`<li>${renderInlineMarkdown(orderedMatch[1])}</li>`);
        return;
      }

      const bulletMatch = trimmed.match(/^[-*]\s+(.+)$/);
      if (bulletMatch) {
        flushParagraph();
        openList('ul');
        blocks.push(`<li>${renderInlineMarkdown(bulletMatch[1])}</li>`);
        return;
      }

      closeList();
      paragraph.push(trimmed);
    });

    flushParagraph();
    closeList();
    return blocks.join('');
  }

  function isValidRemoteFormPath(formPath) {
    if (!formPath || typeof formPath !== 'string') {
      return false;
    }

    if (formPath.includes('..') || formPath.startsWith('/') || /^https?:/i.test(formPath)) {
      return false;
    }

    const parts = formPath.split('/');
    if (parts.length !== 2) {
      return false;
    }

    const [category, filename] = parts;
    if (!/^[a-z0-9_-]+$/i.test(category)) {
      return false;
    }

    if (!filename || filename.includes('/') || filename.includes('\\')) {
      return false;
    }

    return /\.(yaml|yml)$/i.test(filename);
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

  function getCurrentEditor() {
    if (!editor) {
      editor = new window.GICFormEditor({
        container: 'editor-root',
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
        onAutosave: () => {
          return autosaveCurrentFormSilently();
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
      return;
    }

    const failureLabel = `<span class="material-symbols-outlined icon-sm">error</span><span class="hidden sm:inline text-xs">${escapeHtml(getClipboardFailureMessage())}</span>`;
    flashCopyState(document.getElementById('btn-copy-yaml'), failureLabel);
    flashCopyState(document.getElementById('copy-yaml-inner'), `<span class="material-symbols-outlined icon-sm">error</span>${escapeHtml(getClipboardFailureMessage())}`);
  }

  function editYaml() {
    const pre = document.getElementById('yaml-pre');
    const editContainer = document.getElementById('yaml-edit-container');
    const textarea = document.getElementById('yaml-textarea');
    const editBtn = document.getElementById('edit-yaml-btn');
    const errorDiv = document.getElementById('yaml-edit-error');
    if (!pre || !editContainer || !textarea) return;
    textarea.value = currentYaml || '';
    errorDiv.classList.add('hidden');
    errorDiv.textContent = '';
    pre.classList.add('hidden');
    editContainer.classList.remove('hidden');
    editBtn.classList.add('hidden');
    textarea.focus();
  }

  async function saveYamlEdit() {
    const pre = document.getElementById('yaml-pre');
    const editContainer = document.getElementById('yaml-edit-container');
    const textarea = document.getElementById('yaml-textarea');
    const editBtn = document.getElementById('edit-yaml-btn');
    const errorDiv = document.getElementById('yaml-edit-error');
    if (!textarea) return false;
    const newYaml = textarea.value;
    try {
      const parsed = codec().parse(newYaml);
      if (!parsed) throw new Error('Empty or invalid YAML.');
      await loadYamlDocument(newYaml, {
        formPath: currentFormPath,
        localFormId: currentLocalFormId,
        updateUrl: false,
        markOriginal: false,
        editorStatus: 'YAML source edited and applied.'
      });
      pre.classList.remove('hidden');
      editContainer.classList.add('hidden');
      editBtn.classList.remove('hidden');
      return true;
    } catch (err) {
      errorDiv.textContent = `Parse error: ${err.message || String(err)}`;
      errorDiv.classList.remove('hidden');
      return false;
    }
  }

  function cancelYamlEdit() {
    const pre = document.getElementById('yaml-pre');
    const editContainer = document.getElementById('yaml-edit-container');
    const editBtn = document.getElementById('edit-yaml-btn');
    const errorDiv = document.getElementById('yaml-edit-error');
    if (!pre || !editContainer) return;
    pre.classList.remove('hidden');
    editContainer.classList.add('hidden');
    editBtn.classList.remove('hidden');
    if (errorDiv) {
      errorDiv.classList.add('hidden');
      errorDiv.textContent = '';
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
    if (currentFormPath) {
      const xlsxPath = currentFormPath.replace(/\.(yaml|yml)$/i, '.xlsx');
      window.open(`https://raw.githubusercontent.com/dsalazarrojas/forms/main/${xlsxPath}`, '_blank');
      return;
    }
    // Custom/editor form: generate XLSX in-browser using SheetJS
    if (!currentForm || !window.XLSX || !window.GICDeployIntegrations) {
      return;
    }
    try {
      const wb = window.GICDeployIntegrations.buildXlsFormWorkbook(currentForm);
      const filename = getSuggestedFileName().replace(/\.(yaml|yml)$/i, '.xlsx') || 'form.xlsx';
      window.XLSX.writeFile(wb, filename);
    } catch (_) {
      // ignore
    }
  }

  function renderPreviewError(message) {
    document.getElementById('form-renderer').innerHTML = `
      <div class="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center text-red-600 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
        <span class="material-symbols-outlined mb-3" style="font-size:32px;">error</span>
        <p class="text-sm font-semibold">Unable to load this form</p>
        <p class="mt-2 text-sm">${escapeHtml(message)}</p>
      </div>`;
  }

  function renderPreviewLoading(message) {
    document.getElementById('form-renderer').innerHTML = `
      <div class="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
        <span class="material-symbols-outlined mb-3 animate-pulse" style="font-size:32px;">progress_activity</span>
        <p class="text-sm font-semibold">${escapeHtml(message || 'Loading form...')}</p>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Fetching the YAML source from GitHub.</p>
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
          inputHtml = `<input type="text" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'email':
          inputHtml = `<input type="email" class="preview-input" data-testid="question-input" data-question-index="${index}" placeholder="name@example.com" ${required ? 'required' : ''}>`;
          break;
        case 'integer':
        case 'number':
          inputHtml = `<input type="number" step="1" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'decimal':
          inputHtml = `<input type="number" step="0.01" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'date':
          inputHtml = `<input type="date" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'time':
          inputHtml = `<input type="time" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'datetime':
          inputHtml = `<input type="datetime-local" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'audio':
          inputHtml = `<input type="file" accept="audio/*" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'image':
          inputHtml = `<input type="file" accept="image/*" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'video':
          inputHtml = `<input type="file" accept="video/*" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'file':
          inputHtml = `<input type="file" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
          break;
        case 'select_one': {
          const options = Array.isArray(page.options) ? page.options : [];
          inputHtml = `<select class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}><option value="">Select an option…</option>${options.map(option => {
            const labelValue = escapeHtml(normalizeOptionLabel(option));
            return `<option value="${labelValue}">${labelValue}</option>`;
          }).join('')}</select>`;
          break;
        }
        case 'select_multiple': {
          const options = Array.isArray(page.options) ? page.options : [];
          inputHtml = `<div class="space-y-2 mt-1" data-testid="question-input" data-question-index="${index}">${options.map(option => {
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
          inputHtml = `<input type="text" class="preview-input" data-testid="question-input" data-question-index="${index}" ${required ? 'required' : ''}>`;
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
    container.setAttribute('data-testid', 'form-renderer-ready');
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

  function getPublicPreviewUrl() {
    const baseUrl = 'https://forms.gic.mx/preview.html';
    if (!currentFormPath) {
      return baseUrl;
    }
    return `${baseUrl}?form=${encodeURIComponent(currentFormPath)}`;
  }

  function updateStructuredData({ pageTitle, templateTitle, description, category, language, fieldCount, fieldTypes, faqItems }) {
    const schemaEl = document.getElementById('form-schema-jsonld');
    if (!schemaEl) {
      return;
    }

    const pageUrl = getPublicPreviewUrl();
    const normalizedLanguage = language && !/^unknown$/i.test(String(language))
      ? String(language)
      : 'en';
    const keywords = [category, normalizedLanguage, ...fieldTypes.map(humanType)]
      .filter(Boolean);

    schemaEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: pageTitle,
          description,
          inLanguage: normalizedLanguage,
          about: { '@id': `${pageUrl}#template` },
          breadcrumb: { '@id': `${pageUrl}#breadcrumb` }
        },
        {
          '@type': 'CreativeWork',
          '@id': `${pageUrl}#template`,
          name: `${templateTitle} YAML Form Template`,
          description,
          url: pageUrl,
          genre: 'Form template',
          inLanguage: normalizedLanguage,
          isAccessibleForFree: true,
          license: 'https://creativecommons.org/licenses/by/4.0/',
          author: {
            '@type': 'Organization',
            name: 'GIC Forms',
            url: 'https://forms.gic.mx/'
          },
          publisher: {
            '@type': 'Organization',
            name: 'GIC Forms',
            url: 'https://forms.gic.mx/'
          },
          keywords
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'GIC Forms',
              item: 'https://forms.gic.mx/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Browse Forms',
              item: 'https://forms.gic.mx/browse.html'
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: templateTitle,
              item: pageUrl
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a
            }
          }))
        }
      ]
    }, null, 2);
  }

  function updateSeoContent(title, categorySlug, pages, language) {
    const category = slugToTitle(categorySlug);
    const qCount = pages.length;
    const types = [...new Set(pages.map(page => page.type || 'text'))];
    const typeList = types.slice(0, 4).map(humanType).join(', ');
    const useCase = inferUseCase(categorySlug, pages);
    const faqItems = [
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
    ];

    document.getElementById('seo-h1').textContent = `Free ${category} Form: ${title}`;
    document.getElementById('seo-intro').textContent =
      `This AI-generated YAML template is designed for ${useCase}. It includes ${qCount} fields and is compatible with GIC Collect, ODK Collect, Google Forms, Tally, and Formbricks.`;
    document.getElementById('seo-why').textContent =
      `Use this template to launch faster with a structured schema instead of building from scratch. The form covers key prompts for ${category.toLowerCase()} workflows, uses clear field definitions, and stays editable in the graphical editor and YAML source.`;
    document.getElementById('seo-steps').innerHTML = [
      'Review the live preview and graphical editor before publishing.',
      'Save the questionnaire to My Forms when you want to keep a local copy.',
      'Export YAML or deploy directly to Cloudflare Workers when the form is ready.',
      'Test required fields and choice options with sample responses before sharing the link.'
    ].map(step => `<li>${escapeHtml(step)}</li>`).join('');
    document.getElementById('seo-faq').innerHTML = faqItems.map(item => `
      <section>
        <h3 class="mb-1 font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(item.q)}</h3>
        <p>${escapeHtml(item.a)}</p>
      </section>`).join('');

    document.getElementById('seo-yaml-snippet').textContent = currentYaml || '';
    Prism.highlightElement(document.getElementById('seo-yaml-snippet'));

    const pageTitle = `Free ${category} Form: ${title} | GIC Forms`;
    const description = `Download this free ${category.toLowerCase()} form template with ${qCount} fields. Compatible with GIC Collect, ODK, Google Forms, Tally, and Formbricks.`;

    document.title = pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
    }

    updateStructuredData({
      pageTitle,
      templateTitle: title,
      description,
      category,
      language,
      fieldCount: qCount,
      fieldTypes: types,
      faqItems
    });
  }

  function closeFormGuideModal() {
    const modal = document.getElementById('help-md-modal');
    if (!modal) {
      return;
    }
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  function openFormGuideModal() {
    const modal = document.getElementById('help-md-modal');
    const modalContent = document.getElementById('help-md-modal-content');
    if (!modal || !modalContent || !modalContent.innerHTML.trim()) {
      return;
    }
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  function setHelpGuideContent(html) {
    const card = document.getElementById('help-md-card');
    const inlineContent = document.getElementById('help-md-content');
    const modalContent = document.getElementById('help-md-modal-content');
    const trigger = document.getElementById('btn-view-form-guide');
    const hasContent = Boolean(html && html.trim());

    if (inlineContent) {
      inlineContent.innerHTML = hasContent ? html : '';
    }
    if (modalContent) {
      modalContent.innerHTML = hasContent ? html : '';
    }
    if (card) {
      card.classList.toggle('hidden', !hasContent);
    }
    if (trigger) {
      trigger.classList.toggle('hidden', !hasContent);
    }
    if (!hasContent) {
      closeFormGuideModal();
    }
  }

  async function fetchAndRenderHelpMd(formPath) {
    setHelpGuideContent('');
    if (!formPath) return;
    const helpUrl = `https://raw.githubusercontent.com/dsalazarrojas/forms/main/${formPath.replace(/\.(yaml|yml)$/i, '.help.md')}`;
    try {
      const res = await fetch(helpUrl);
      if (!res.ok) return;
      let text = await res.text();
      text = text.replace(/<thinking>[\s\S]*?<\/thinking>/g, '').trim();
      if (!text) return;
      const html = renderHelpMarkdown(text);
      setHelpGuideContent(html);
    } catch (_) {
      // If fetch fails, silently skip
    }
  }

  async function updateRelatedForms(categorySlug, currentPath) {
    const container = document.getElementById('seo-related');
    if (!container) {
      return;
    }

    if (!currentPath || categorySlug === 'custom_forms') {
      container.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-500">Save this questionnaire to My Forms to manage your saved forms and deployments.</p>';
      return;
    }

    container.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-500">Loading related forms...</p>';

    try {
      const response = await fetch(window.GIC_FORMS_INDEX_URL || 'forms-index.json');
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

  function updateDeploySummary() {
    const summary = document.getElementById('deploy-target-summary');
    if (!summary) {
      return;
    }
    try {
      const form = getCurrentEditor().getForm();
      const title = form.title || getAppliedTitle();
      const source = currentFormPath ? `Source: ${currentFormPath}` : currentLocalFormId ? 'Source: My Forms' : 'Source: unsaved editor state';
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
    const creatorStoreUrl = 'https://apps.apple.com/ec/app/gic-xlsform-creation/id6754113283';

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

    document.getElementById('form-title-sidebar').textContent = title;
    document.getElementById('form-category-sidebar').textContent = categoryTitle;
    document.getElementById('form-meta-sidebar').innerHTML = `
      <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        <span class="material-symbols-outlined" style="font-size:12px;">quiz</span>${pages.length} questions
      </span>
      <span class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        <span class="material-symbols-outlined" style="font-size:12px;">language</span>${escapeHtml(language)}
      </span>`;

    hydrateAppLinks(rawUrl);
    renderForm(pages);
    document.getElementById('yaml-code').textContent = currentYaml;
    Prism.highlightElement(document.getElementById('yaml-code'));
    updateSeoContent(title, categorySlug, pages, language);
    await updateRelatedForms(categorySlug, currentFormPath);
    await fetchAndRenderHelpMd(currentFormPath);
    renderMyForms();
    updateDeploySummary();
    const publishedRecord = currentLocalFormId && findMyForm(currentLocalFormId);
    if (publishedRecord && publishedRecord.formId) {
      renderSharePublishSuccess(publishedRecord);
    } else {
      setSharePublishUiState('idle');
    }

    const editorStatus = config.editorStatus || (currentLocalFormId ? 'Saved form ready to edit.' : currentFormPath ? 'Library form ready. Save it to My Forms when you want a local copy.' : 'New form ready. Save it to My Forms when you want to keep it.');
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

  function persistPublishState(localFormId, patch) {
    const list = getMyForms();
    const item = list.find(record => record.id === localFormId);
    if (!item) return;
    Object.assign(item, patch);
    saveMyForms(list);
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
      const publishBadge = item.formId
        ? `<span class="rounded-full ${item.publishStatus === 'paused' ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'} px-2.5 py-1 font-semibold">${item.publishStatus === 'paused' ? 'Paused' : 'Live'}</span><span class="rounded-full bg-slate-100 px-2.5 py-1 font-semibold dark:bg-slate-800" data-response-count-for="${escapeHtml(item.formId)}">…</span>`
        : '';
      return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900" data-myform-id="${escapeHtml(item.id)}">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-primary">${escapeHtml(slugToTitle(item.category || 'custom_forms'))}</p>
              <h3 class="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(title)}</h3>
              <div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span class="rounded-full bg-slate-100 px-2.5 py-1 font-semibold dark:bg-slate-800">${questionCount} question${questionCount === 1 ? '' : 's'}</span>
                <span class="rounded-full bg-slate-100 px-2.5 py-1 font-semibold dark:bg-slate-800">Saved ${escapeHtml(formatSavedAt(item.savedAt))}</span>
                ${publishBadge}
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
                <span class="material-symbols-outlined icon-sm">rocket_launch</span>Share
              </button>
              ${item.formId ? `<button type="button" data-myforms-action="responses" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">inbox</span>Responses
              </button>` : ''}
              <button type="button" data-myforms-action="delete" data-myform-id="${escapeHtml(item.id)}" class="btn-outline" style="width:auto;padding:8px 12px;">
                <span class="material-symbols-outlined icon-sm">delete</span>Delete
              </button>
            </div>
          </div>
        </article>`;
    }).join('');
    refreshMyFormsResponseCounts();
  }

  async function refreshMyFormsResponseCounts() {
    const forms = getMyForms().filter(item => item.formId && item.mgmtToken);
    await Promise.all(forms.map(async item => {
      let displayed = '—';
      try {
        const result = await window.GICDeployIntegrations.listResponses(item.formId, item.mgmtToken, { limit: 100 });
        displayed = `${result.responses.length}${result.hasMore ? '+' : ''}`;
      } catch (_) {
        // A missing browser-local management credential is an expected outcome.
      }
      responseCountsByFormId[item.formId] = displayed;
      const countNode = Array.from(document.querySelectorAll('[data-response-count-for]')).find(node => node.dataset.responseCountFor === item.formId);
      if (countNode) countNode.textContent = displayed;
    }));
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
    if (config.switchTab === 'deploy') {
      switchTab('editor', true);
      openShareSheet();
    } else if (config.switchTab) {
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

  async function saveCurrentFormFromPage() {
    const yamlEditContainer = document.getElementById('yaml-edit-container');
    const isEditingYaml = yamlEditContainer && !yamlEditContainer.classList.contains('hidden');
    if (isEditingYaml) {
      const applied = await saveYamlEdit();
      if (!applied) {
        return false;
      }
    }
    await saveCurrentFormToMyForms();
    return true;
  }

  async function saveCurrentFormToMyForms(options) {
    const config = options || {};
    const silent = Boolean(config.silent);
    const gate = window.GICProGate;
    const currentEditor = getCurrentEditor();
    const yaml = currentEditor.buildYaml();
    const form = currentEditor.getForm();
    const list = getMyForms();

    // 5-form limit gate for free users
    const isExisting = list.some(item => item.id === currentLocalFormId);
    if (silent && !isExisting) {
      return;
    }
    if (!isExisting && gate && !gate.hasProAccess() && list.length >= 5) {
      gate.showUpgradeModal('pro', 'my_forms_limit');
      return;
    }

    const id = currentLocalFormId || (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `local-${Date.now()}`);
    const existingRecord = list.find(item => item.id === id);
    const record = {
      id,
      title: form.title || 'Untitled Survey',
      yaml,
      savedAt: new Date().toISOString(),
      category: getCurrentCategorySlug(),
      sourcePath: currentFormPath || null
    };
    const publishPatch = existingRecord && existingRecord.formId
      ? {
        formId: existingRecord.formId,
        mgmtToken: existingRecord.mgmtToken,
        publishUrl: existingRecord.publishUrl,
        publishStatus: existingRecord.publishStatus,
        lastPublishedAt: existingRecord.lastPublishedAt
      }
      : null;
    const existingIndex = list.findIndex(item => item.id === id);
    if (existingIndex >= 0) {
      list.splice(existingIndex, 1, record);
    } else {
      list.unshift(record);
    }
    currentLocalFormId = id;
    saveMyForms(list);
    if (publishPatch) persistPublishState(id, publishPatch);
    renderMyForms();
    if (!silent) {
      currentEditor.setStatus('Saved to My Forms.');
    }
    updateDeploySummary();
  }

  async function autosaveCurrentFormSilently() {
    if (!currentLocalFormId) {
      return;
    }
    await saveCurrentFormToMyForms({ silent: true });
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
      editorStatus: 'Blank form ready. Save it to My Forms when you want to keep it.',
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
    const newButton = document.getElementById('myforms-new-blank');
    const list = document.getElementById('myforms-list');

    if (newButton) {
      newButton.addEventListener('click', () => {
        openCreateSheet();
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
          case 'responses':
            openResponsesPanel(item);
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

  function setSharePublishUiState(state) {
    const idle = document.getElementById('share-publish-idle');
    const busy = document.getElementById('share-publish-busy');
    const success = document.getElementById('share-publish-success');
    if (!idle || !busy || !success) return;
    idle.classList.toggle('hidden', state !== 'idle');
    busy.classList.toggle('hidden', state !== 'busy');
    success.classList.toggle('hidden', state !== 'success');
  }

  function friendlyPublishError(error) {
    const status = error && error.status;
    if (status === 429) return 'Too many forms published from this network today. Try again tomorrow.';
    if (status === 403) return (error && error.body && error.body.error) || 'You’ve reached your active form limit. Pause or delete an existing form, or upgrade.';
    if (status === 404) return 'This form is no longer available to manage from this browser.';
    if (status === 400) return (error && error.body && error.body.error) || 'This form could not be published — check it has at least one question.';
    return 'Something went wrong publishing this form. Please try again.';
  }

  function renderSharePublishSuccess(record) {
    if (!record || !record.formId || !record.publishUrl) return;
    const link = document.getElementById('share-publish-link');
    const qrHolder = document.getElementById('share-qr-holder');
    const badge = document.getElementById('share-publish-status-badge');
    if (link) link.value = record.publishUrl;
    if (qrHolder && window.GICQr) qrHolder.innerHTML = window.GICQr.renderSvg(record.publishUrl, { size: 160 });
    if (badge) {
      const paused = record.publishStatus === 'paused';
      badge.classList.toggle('bg-emerald-50', !paused);
      badge.classList.toggle('text-emerald-700', !paused);
      badge.classList.toggle('dark:bg-emerald-950/40', !paused);
      badge.classList.toggle('dark:text-emerald-300', !paused);
      badge.classList.toggle('bg-amber-50', paused);
      badge.classList.toggle('text-amber-700', paused);
      badge.classList.toggle('dark:bg-amber-950/40', paused);
      badge.classList.toggle('dark:text-amber-300', paused);
      badge.innerHTML = `<span class="material-symbols-outlined" style="font-size:14px;">${paused ? 'pause_circle' : 'check_circle'}</span>${paused ? 'Paused' : 'Live'}`;
    }
    setSharePublishUiState('success');
  }

  async function handlePublishClick() {
    const form = getCurrentEditor().getForm();
    if (!currentLocalFormId) {
      await saveCurrentFormToMyForms();
      if (!currentLocalFormId) return;
    }
    const errorEl = document.getElementById('share-publish-error');
    setSharePublishUiState('busy');
    if (errorEl) {
      errorEl.classList.add('hidden');
      errorEl.textContent = '';
    }
    try {
      const record = findMyForm(currentLocalFormId);
      if (record && record.formId && record.mgmtToken) {
        await window.GICDeployIntegrations.updateForm(record.formId, record.mgmtToken, form);
        persistPublishState(currentLocalFormId, { publishStatus: 'live', lastPublishedAt: new Date().toISOString() });
      } else {
        const result = await window.GICDeployIntegrations.publishForm(form);
        persistPublishState(currentLocalFormId, { formId: result.formId, mgmtToken: result.mgmtToken, publishUrl: result.url, publishStatus: 'live', lastPublishedAt: new Date().toISOString() });
      }
      renderSharePublishSuccess(findMyForm(currentLocalFormId));
      renderMyForms();
    } catch (error) {
      if (errorEl) {
        errorEl.innerHTML = escapeHtml(friendlyPublishError(error));
        errorEl.classList.remove('hidden');
      }
      setSharePublishUiState('idle');
    }
  }

  function initSharePublish() {
    const publishButton = document.getElementById('share-publish-btn');
    const copyButton = document.getElementById('share-copy-link-btn');
    const republishButton = document.getElementById('share-republish-btn');
    const viewResponsesButton = document.getElementById('share-view-responses-btn');
    if (publishButton) publishButton.addEventListener('click', handlePublishClick);
    if (republishButton) republishButton.addEventListener('click', handlePublishClick);
    if (viewResponsesButton) viewResponsesButton.addEventListener('click', () => {
      const record = findMyForm(currentLocalFormId);
      if (record) {
        closeShareSheet();
        openResponsesPanel(record);
      }
    });
    if (copyButton) copyButton.addEventListener('click', async () => {
      const link = document.getElementById('share-publish-link');
      const copied = await copyText(link ? link.value : '');
      flashCopyState(copyButton, copied ? '<span class="material-symbols-outlined icon-sm">check</span>Copied' : `<span class="material-symbols-outlined icon-sm">error</span>${escapeHtml(getClipboardFailureMessage())}`);
    });
  }

  function updateResponsesPauseButton(status) {
    const button = document.getElementById('responses-pause-btn');
    if (!button) return;
    const paused = status === 'paused';
    button.dataset.publishStatus = paused ? 'paused' : 'live';
    button.innerHTML = `<span class="material-symbols-outlined icon-sm">${paused ? 'play_circle' : 'pause_circle'}</span>${paused ? 'Resume' : 'Pause'}`;
  }

  async function openResponsesPanel(myFormsItem) {
    responsesPanelState = { formId: myFormsItem.formId, mgmtToken: myFormsItem.mgmtToken, cursor: null, items: [], hasMore: false, localFormId: myFormsItem.id };
    const title = document.getElementById('responses-panel-title');
    if (title) title.innerHTML = `Responses: ${escapeHtml(myFormsItem.title || 'Untitled Survey')}`;
    updateResponsesPauseButton(myFormsItem.publishStatus);
    const panel = document.getElementById('panel-responses');
    if (panel) {
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
    }
    const overlay = document.getElementById('responses-overlay');
    if (overlay) overlay.classList.remove('hidden');
    await loadResponsesPage();
  }

  function closeResponsesPanel() {
    const panel = document.getElementById('panel-responses');
    if (panel) {
      panel.classList.remove('translate-x-0');
      panel.classList.add('translate-x-full');
    }
    const overlay = document.getElementById('responses-overlay');
    if (overlay) overlay.classList.add('hidden');
  }

  function openShareSheet() {
    const panel = document.getElementById('panel-share');
    if (panel) {
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
    }
    const overlay = document.getElementById('share-overlay');
    if (overlay) overlay.classList.remove('hidden');
  }

  function closeShareSheet() {
    const panel = document.getElementById('panel-share');
    if (panel) {
      panel.classList.remove('translate-x-0');
      panel.classList.add('translate-x-full');
    }
    const overlay = document.getElementById('share-overlay');
    if (overlay) overlay.classList.add('hidden');
  }

  function openYamlSourceModal() {
    const modal = document.getElementById('modal-yaml-source');
    if (modal) modal.classList.remove('hidden');
  }

  function closeYamlSourceModal() {
    const modal = document.getElementById('modal-yaml-source');
    if (modal) modal.classList.add('hidden');
  }

  function setupShareSheetHandlers() {
    document.getElementById('btn-create-new')?.addEventListener('click', openCreateSheet);
    const shareButton = document.getElementById('btn-share');
    const closeButton = document.getElementById('share-close-btn');
    const overlay = document.getElementById('share-overlay');
    if (shareButton) shareButton.addEventListener('click', openShareSheet);
    if (closeButton) closeButton.addEventListener('click', closeShareSheet);
    if (overlay) overlay.addEventListener('click', closeShareSheet);
  }

  function openCreateSheet() {
    const panel = document.getElementById('panel-create');
    if (panel) {
      panel.classList.remove('translate-x-full');
      panel.classList.add('translate-x-0');
    }
    document.getElementById('create-overlay')?.classList.remove('hidden');
    showCreateStep('create-choice-step');
  }

  function closeCreateSheet() {
    const panel = document.getElementById('panel-create');
    if (panel) {
      panel.classList.remove('translate-x-0');
      panel.classList.add('translate-x-full');
    }
    document.getElementById('create-overlay')?.classList.add('hidden');
  }

  function showCreateStep(stepId) {
    ['create-choice-step', 'create-describe-panel', 'create-import-panel'].forEach(id => {
      document.getElementById(id)?.classList.toggle('hidden', id !== stepId);
    });
  }

  function setupCreateSheetHandlers() {
    const overlay = document.getElementById('create-overlay');
    const closeBtn = document.getElementById('create-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeCreateSheet);
    if (overlay) overlay.addEventListener('click', closeCreateSheet);

    document.getElementById('create-choice-describe')?.addEventListener('click', () => showCreateStep('create-describe-panel'));
    document.getElementById('create-choice-import')?.addEventListener('click', () => showCreateStep('create-import-panel'));
    document.getElementById('create-choice-template')?.addEventListener('click', () => { window.location.href = 'browse.html'; });

    document.querySelectorAll('.create-back-btn').forEach(btn => {
      btn.addEventListener('click', () => showCreateStep(btn.dataset.backTo));
    });

    document.getElementById('create-blank-link')?.addEventListener('click', async () => {
      closeCreateSheet();
      await createNewBlankForm();
      switchTab('editor', true);
    });

    document.getElementById('create-yaml-toggle')?.addEventListener('click', () => {
      const wrap = document.getElementById('create-yaml-wrap');
      const toggle = document.getElementById('create-yaml-toggle');
      if (!wrap) return;
      const isHidden = wrap.classList.toggle('hidden');
      if (toggle) toggle.textContent = isHidden ? 'View YAML' : 'Hide YAML';
    });

    document.getElementById('btn-load-generated')?.addEventListener('click', closeCreateSheet);
  }

  function setupYamlSourceModalHandlers() {
    const viewButton = document.getElementById('btn-view-yaml-source');
    const closeButton = document.getElementById('yaml-source-close-btn');
    const overlay = document.getElementById('yaml-source-overlay');
    if (viewButton) viewButton.addEventListener('click', openYamlSourceModal);
    if (closeButton) closeButton.addEventListener('click', closeYamlSourceModal);
    if (overlay) overlay.addEventListener('click', closeYamlSourceModal);
  }

  async function loadResponsesPage(append) {
    const body = document.getElementById('responses-list-body');
    try {
      const result = await window.GICDeployIntegrations.listResponses(responsesPanelState.formId, responsesPanelState.mgmtToken, { limit: 25, cursor: append ? responsesPanelState.cursor : null });
      responsesPanelState.items = append ? responsesPanelState.items.concat(result.responses) : result.responses;
      responsesPanelState.cursor = result.cursor;
      responsesPanelState.hasMore = result.hasMore;
      renderResponsesList();
    } catch (_) {
      if (body) body.innerHTML = '<p class="text-sm text-slate-500 dark:text-slate-400">Couldn’t load responses — try again.</p>';
    }
  }

  function renderResponsesList() {
    const body = document.getElementById('responses-list-body');
    const loadMore = document.getElementById('responses-load-more-btn');
    if (!body) return;
    if (!responsesPanelState.items.length) {
      body.innerHTML = '<div class="rounded-xl border border-dashed border-slate-300 p-5 text-center dark:border-slate-700"><p class="text-sm text-slate-500 dark:text-slate-400">No responses yet. Share your form to get your first one.</p><button type="button" data-responses-share class="btn-outline mt-3" style="width:auto;padding:7px 12px;font-size:12px;">Share form</button></div>';
    } else {
      body.innerHTML = responsesPanelState.items.map(item => {
        const answerSummary = Object.entries(item.answers || {}).slice(0, 3).map(([key, value]) => `${escapeHtml(key)}: ${escapeHtml(Array.isArray(value) ? value.join(', ') : value)}`).join(' · ');
        return `<div class="flex items-start justify-between gap-3 border-b border-slate-200 py-3 last:border-0 dark:border-slate-800"><div class="min-w-0"><p class="text-xs text-slate-500 dark:text-slate-400">${escapeHtml(formatSavedAt(item.submittedAt))}</p><p class="mt-1 truncate text-sm text-slate-700 dark:text-slate-200">${answerSummary || 'No answers recorded'}</p></div><button type="button" data-response-key="${escapeHtml(item.key)}" class="btn-outline flex-shrink-0" style="width:auto;padding:6px 10px;font-size:12px;">Delete</button></div>`;
      }).join('');
    }
    if (loadMore) loadMore.classList.toggle('hidden', !responsesPanelState.hasMore);
  }

  function setupResponsesPanelHandlers() {
    const closeButton = document.getElementById('responses-close-btn');
    const overlay = document.getElementById('responses-overlay');
    const loadMore = document.getElementById('responses-load-more-btn');
    const pauseButton = document.getElementById('responses-pause-btn');
    const exportButton = document.getElementById('responses-export-btn');
    const body = document.getElementById('responses-list-body');
    if (closeButton) closeButton.addEventListener('click', closeResponsesPanel);
    if (overlay) overlay.addEventListener('click', closeResponsesPanel);
    if (loadMore) loadMore.addEventListener('click', () => loadResponsesPage(true));
    if (body) body.addEventListener('click', async event => {
      if (event.target.closest('[data-responses-share]')) {
        closeResponsesPanel();
        openShareSheet();
        return;
      }
      const deleteButton = event.target.closest('[data-response-key]');
      if (!deleteButton || !window.confirm('Delete this response?')) return;
      const key = deleteButton.dataset.responseKey;
      try {
        await window.GICDeployIntegrations.deleteResponse(responsesPanelState.formId, responsesPanelState.mgmtToken, key);
        responsesPanelState.items = responsesPanelState.items.filter(item => item.key !== key);
        renderResponsesList();
      } catch (error) {
        window.alert(friendlyPublishError(error));
      }
    });
    if (pauseButton) pauseButton.addEventListener('click', async () => {
      const resume = pauseButton.dataset.publishStatus === 'paused';
      try {
        const result = await window.GICDeployIntegrations.pauseForm(responsesPanelState.formId, responsesPanelState.mgmtToken, resume);
        persistPublishState(responsesPanelState.localFormId, { publishStatus: result.status });
        updateResponsesPauseButton(result.status);
        renderMyForms();
        if (currentLocalFormId === responsesPanelState.localFormId) renderSharePublishSuccess(findMyForm(currentLocalFormId));
      } catch (error) {
        window.alert(friendlyPublishError(error));
      }
    });
    if (exportButton) exportButton.addEventListener('click', async () => {
      try {
        const result = await window.GICDeployIntegrations.exportResponsesCsv(responsesPanelState.formId, responsesPanelState.mgmtToken);
        const url = URL.createObjectURL(result.blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = result.filename;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
      } catch (error) {
        window.alert(friendlyPublishError(error));
      }
    });
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

  function getDeployWebhooks() {
    return getWebhooks().map(hook => ({
      url: String(hook?.url || '').trim(),
      secret: String(hook?.secret || '').trim()
    })).filter(hook => hook.url);
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
            return;
          }
          copyButton.innerHTML = `<span class="material-symbols-outlined icon-sm">error</span>${escapeHtml(getClipboardFailureMessage())}`;
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

    const webhooks = getDeployWebhooks();
    const script = window.GICCloudflareWorker.createWorkerScript(form, { yaml, webhooks });
    const endpoint = `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId)}/workers/scripts/${encodeURIComponent(workerName)}`;
    const metadata = {
      main_module: 'worker.js',
      compatibility_date: '2024-01-01'
    };
    const payloadBody = new FormData();
    payloadBody.append('metadata', JSON.stringify(metadata));
    payloadBody.append('worker.js', new Blob([script], { type: 'application/javascript' }), 'worker.js');

    if (deployButton) {
      deployButton.disabled = true;
      deployButton.classList.add('opacity-70', 'cursor-not-allowed');
    }
    setDeployStatus({ type: 'info', headline: 'Deploying…', message: 'Uploading the generated Worker script to Cloudflare.' });

    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${apiToken}`
        },
        body: payloadBody
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
      localStorage.setItem('gic-last-deployed-url', deployedUrl);
      hydrateAppLinks(deployedUrl);
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

  function setPlatformStatus(statusId, type, message, url) {
    const el = document.getElementById(statusId);
    if (!el) return;
    el.classList.remove('hidden');
    const tones = {
      success: 'bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-300',
      error: 'bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300',
      info: 'bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    };
    el.className = `mt-3 rounded-xl px-4 py-3 text-sm ${tones[type] || tones.info}`;
    el.innerHTML = escapeHtml(message) + (url ? ` <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" class="ml-2 underline font-medium">Open →</a>` : '');
  }

  function setPlatformBusy(btnId, busy) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.disabled = busy;
    btn.classList.toggle('opacity-70', busy);
    btn.classList.toggle('cursor-not-allowed', busy);
  }

  function persistField(inputId, storageKey, useSession) {
    const el = document.getElementById(inputId);
    if (!el) return;
    el.value = (useSession ? sessionStorage : localStorage).getItem(storageKey) || '';
    el.addEventListener('input', () => {
      (useSession ? sessionStorage : localStorage).setItem(storageKey, el.value);
    });
  }

  function updatePlatformTokenConsentCopy() {
    const helper = document.getElementById('remember-platform-tokens-helper');
    if (!helper) return;
    helper.textContent = 'Tally, Formbricks, ONA, Kobo, and Cloudflare tokens are stored in session storage only and are cleared when the browser session ends.';
  }

  function syncPlatformTokenStorage() {
    const primary = sessionStorage;
    const secondary = localStorage;

    const cloudflareToken = localStorage.getItem(STORAGE_KEYS.cfApiToken);
    if (cloudflareToken && !sessionStorage.getItem(STORAGE_KEYS.cfApiToken)) {
      sessionStorage.setItem(STORAGE_KEYS.cfApiToken, cloudflareToken);
    }
    localStorage.removeItem(STORAGE_KEYS.cfApiToken);

    PLATFORM_TOKEN_FIELDS.forEach(({ inputId, storageKey }) => {
      const input = document.getElementById(inputId);
      const currentValue = (input?.value || '').trim();
      const storedValue = currentValue || primary.getItem(storageKey) || secondary.getItem(storageKey) || '';

      primary.removeItem(storageKey);
      secondary.removeItem(storageKey);

      if (storedValue) {
        primary.setItem(storageKey, storedValue);
      }

      if (input) {
        input.value = storedValue;
      }
    });
  }

  function persistSecretField(inputId, storageKey) {
    const el = document.getElementById(inputId);
    if (!el) return;

    const primary = sessionStorage;
    const secondary = localStorage;
    el.value = primary.getItem(storageKey) || secondary.getItem(storageKey) || '';

    el.addEventListener('input', () => {
      const value = el.value;

      localStorage.removeItem(storageKey);
      if (value) {
        sessionStorage.setItem(storageKey, value);
      } else {
        sessionStorage.removeItem(storageKey);
      }
    });
  }

  function initDeployControls() {
    // ── Cloudflare Workers (existing) ────────────────────────────────────
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
      apiTokenField.value = sessionStorage.getItem(STORAGE_KEYS.cfApiToken) || localStorage.getItem(STORAGE_KEYS.cfApiToken) || '';
      localStorage.removeItem(STORAGE_KEYS.cfApiToken);
      apiTokenField.addEventListener('input', () => {
        if (apiTokenField.value) {
          sessionStorage.setItem(STORAGE_KEYS.cfApiToken, apiTokenField.value);
        } else {
          sessionStorage.removeItem(STORAGE_KEYS.cfApiToken);
        }
        localStorage.removeItem(STORAGE_KEYS.cfApiToken);
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

    // ── YAML download button in deploy tab ───────────────────────────────
    const yamlDeployBtn = document.getElementById('btn-download-yaml-deploy');
    if (yamlDeployBtn) {
      yamlDeployBtn.addEventListener('click', () => {
        downloadFile(getSuggestedFileName(), currentYaml, 'text/yaml');
      });
    }

    // ── Platform panel toggles ───────────────────────────────────────────
    document.querySelectorAll('.dp-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        if (!panel) return;
        panel.classList.toggle('hidden');
        const isOpen = !panel.classList.contains('hidden');
        btn.innerHTML = btn.innerHTML.replace(
          /(settings|login|close)/,
          isOpen ? 'close' : (targetId.includes('gform') || targetId.includes('gsheet') ? 'login' : 'settings')
        );
      });
    });

    // ── Persist platform credentials ─────────────────────────────────────
    persistSecretField('dp-tally-token', 'gic-tally-token');
    persistSecretField('dp-formbricks-key', 'gic-formbricks-key');
    persistField('dp-formbricks-env', 'gic-formbricks-env', false);
    persistField('dp-formbricks-host', 'gic-formbricks-host', false);
    persistSecretField('dp-ona-token', 'gic-ona-token');
    persistField('dp-ona-project', 'gic-ona-project', false);
    persistSecretField('dp-kobo-token', 'gic-kobo-token');
    persistField('dp-kobo-server', 'gic-kobo-server', false);
    syncPlatformTokenStorage();
    updatePlatformTokenConsentCopy();

    // ── Tally deploy ─────────────────────────────────────────────────────
    const tallyBtn = document.getElementById('dp-tally-btn');
    if (tallyBtn) {
      tallyBtn.addEventListener('click', async () => {
        const token = document.getElementById('dp-tally-token')?.value?.trim();
        if (!token) {
          setPlatformStatus('dp-tally-status', 'error', 'Please enter your Tally API token.');
          return;
        }
        if (!currentForm) {
          setPlatformStatus('dp-tally-status', 'error', 'Load a form before deploying.');
          return;
        }
        if (!window.GICDeployIntegrations) {
          setPlatformStatus('dp-tally-status', 'error', 'Deploy integrations not loaded.');
          return;
        }
        setPlatformBusy('dp-tally-btn', true);
        setPlatformStatus('dp-tally-status', 'info', 'Creating Tally form…');
        try {
          const result = await window.GICDeployIntegrations.deployToTally(currentForm, token);
          setPlatformStatus('dp-tally-status', 'success', 'Tally form created!', result.url);
        } catch (err) {
          setPlatformStatus('dp-tally-status', 'error', err.message || 'Tally deployment failed.');
        } finally {
          setPlatformBusy('dp-tally-btn', false);
        }
      });
    }

    // ── Formbricks deploy ─────────────────────────────────────────────────
    const formbricksBtn = document.getElementById('dp-formbricks-btn');
    if (formbricksBtn) {
      formbricksBtn.addEventListener('click', async () => {
        const key = document.getElementById('dp-formbricks-key')?.value?.trim();
        const env = document.getElementById('dp-formbricks-env')?.value?.trim();
        const host = document.getElementById('dp-formbricks-host')?.value?.trim();
        if (!key || !env) {
          setPlatformStatus('dp-formbricks-status', 'error', 'Please enter your Formbricks API key and Environment ID.');
          return;
        }
        if (!currentForm) {
          setPlatformStatus('dp-formbricks-status', 'error', 'Load a form before deploying.');
          return;
        }
        if (!window.GICDeployIntegrations) {
          setPlatformStatus('dp-formbricks-status', 'error', 'Deploy integrations not loaded.');
          return;
        }
        setPlatformBusy('dp-formbricks-btn', true);
        setPlatformStatus('dp-formbricks-status', 'info', 'Creating Formbricks survey…');
        try {
          const result = await window.GICDeployIntegrations.deployToFormbricks(currentForm, key, env, host);
          setPlatformStatus('dp-formbricks-status', 'success', 'Formbricks survey created!', result.url);
        } catch (err) {
          setPlatformStatus('dp-formbricks-status', 'error', err.message || 'Formbricks deployment failed.');
        } finally {
          setPlatformBusy('dp-formbricks-btn', false);
        }
      });
    }

    // ── ONA.io upload ─────────────────────────────────────────────────────
    const onaBtn = document.getElementById('dp-ona-btn');
    if (onaBtn) {
      onaBtn.addEventListener('click', async () => {
        const token = document.getElementById('dp-ona-token')?.value?.trim();
        const project = document.getElementById('dp-ona-project')?.value?.trim();
        if (!token) {
          setPlatformStatus('dp-ona-status', 'error', 'Please enter your ONA.io API token.');
          return;
        }
        if (!currentForm || !window.GICDeployIntegrations) {
          setPlatformStatus('dp-ona-status', 'error', 'Load a form before uploading.');
          return;
        }
        setPlatformBusy('dp-ona-btn', true);
        setPlatformStatus('dp-ona-status', 'info', 'Uploading XLSForm to ONA.io…');
        try {
          const result = await window.GICDeployIntegrations.uploadToONA(currentForm, token, project);
          const msg = result.enketoUrl
            ? 'Uploaded! Enketo preview available.'
            : 'Form uploaded to ONA.io.';
          setPlatformStatus('dp-ona-status', 'success', msg, result.enketoUrl || result.url);
        } catch (err) {
          setPlatformStatus('dp-ona-status', 'error', err.message || 'ONA upload failed.');
        } finally {
          setPlatformBusy('dp-ona-btn', false);
        }
      });
    }

    // ── KoboToolbox upload ────────────────────────────────────────────────
    const koboBtn = document.getElementById('dp-kobo-btn');
    if (koboBtn) {
      koboBtn.addEventListener('click', async () => {
        const token = document.getElementById('dp-kobo-token')?.value?.trim();
        const server = document.getElementById('dp-kobo-server')?.value?.trim();
        if (!token) {
          setPlatformStatus('dp-kobo-status', 'error', 'Please enter your KoboToolbox API token.');
          return;
        }
        if (!currentForm || !window.GICDeployIntegrations) {
          setPlatformStatus('dp-kobo-status', 'error', 'Load a form before uploading.');
          return;
        }
        setPlatformBusy('dp-kobo-btn', true);
        setPlatformStatus('dp-kobo-status', 'info', 'Uploading XLSForm to KoboToolbox…');
        try {
          const result = await window.GICDeployIntegrations.uploadToKobo(currentForm, token, server);
          setPlatformStatus('dp-kobo-status', 'success', 'Form uploaded to KoboToolbox!', result.url);
        } catch (err) {
          setPlatformStatus('dp-kobo-status', 'error', err.message || 'Kobo upload failed.');
        } finally {
          setPlatformBusy('dp-kobo-btn', false);
        }
      });
    }

    // ── Google OAuth + Forms + Sheets ─────────────────────────────────────
    const googleConnectBtn = document.getElementById('dp-google-connect-btn');
    const gformsBtn = document.getElementById('dp-gforms-btn');
    const gsheetsBtn = document.getElementById('dp-gsheets-btn');

    if (googleConnectBtn && window.GICDeployIntegrations) {
      googleConnectBtn.addEventListener('click', async () => {
        try {
          await window.GICDeployIntegrations.connectGoogle();
          const el = document.getElementById('dp-google-status');
          if (el) el.textContent = 'Connected to Google.';
          if (gformsBtn) { gformsBtn.disabled = false; gformsBtn.classList.remove('opacity-50', 'cursor-not-allowed'); }
          if (gsheetsBtn) { gsheetsBtn.disabled = false; gsheetsBtn.classList.remove('opacity-50', 'cursor-not-allowed'); }
        } catch (err) {
          const el = document.getElementById('dp-google-status');
          if (el) el.textContent = 'Google sign-in failed: ' + (err.message || 'Unknown error');
        }
      });
    }

    if (gformsBtn && window.GICDeployIntegrations) {
      gformsBtn.addEventListener('click', async () => {
        if (!currentForm) { setPlatformStatus('dp-gforms-status', 'error', 'Load a form first.'); return; }
        setPlatformBusy('dp-gforms-btn', true);
        setPlatformStatus('dp-gforms-status', 'info', 'Creating Google Form…');
        try {
          const result = await window.GICDeployIntegrations.createGoogleForm(currentForm);
          setPlatformStatus('dp-gforms-status', 'success', 'Google Form created!', result.url);
        } catch (err) {
          setPlatformStatus('dp-gforms-status', 'error', err.message || 'Google Forms failed.');
        } finally {
          setPlatformBusy('dp-gforms-btn', false);
        }
      });
    }

    if (gsheetsBtn && window.GICDeployIntegrations) {
      gsheetsBtn.addEventListener('click', async () => {
        if (!currentForm) { setPlatformStatus('dp-gsheets-status', 'error', 'Load a form first.'); return; }
        setPlatformBusy('dp-gsheets-btn', true);
        setPlatformStatus('dp-gsheets-status', 'info', 'Exporting to Google Sheets…');
        try {
          const result = await window.GICDeployIntegrations.createGoogleSheet(currentForm);
          setPlatformStatus('dp-gsheets-status', 'success', 'Google Sheet created!', result.url);
        } catch (err) {
          setPlatformStatus('dp-gsheets-status', 'error', err.message || 'Google Sheets export failed.');
        } finally {
          setPlatformBusy('dp-gsheets-btn', false);
        }
      });
    }

    updateDeploySummary();
  }

  async function loadRemoteForm(formPath) {
    if (!isValidRemoteFormPath(formPath)) {
      throw new Error('Invalid form path specified.');
    }
    renderPreviewLoading('Loading form from GitHub...');
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
      editorStatus: 'Library form ready. Save it to My Forms when you want a local copy.'
    });
  }

  async function loadInitialForm() {
    updateDarkIcon();
    setupTabs();
    setupMyFormsHandlers();
    initDeployControls();
    initSharePublish();
    setupShareSheetHandlers();
    setupCreateSheetHandlers();
    setupYamlSourceModalHandlers();
    setupResponsesPanelHandlers();
    initCreateTab();
    initAiEditPanel();
    initSmImport();
    initSmExport();
    initEmbedCode();
    initWebhooks();
    initPlanBadge();
    const copyYamlButton = document.getElementById('btn-copy-yaml');
    if (copyYamlButton) copyYamlButton.addEventListener('click', copyYaml);

    getCurrentEditor();

    const formPath = new URLSearchParams(window.location.search).get('form');
    if (formPath) {
      currentFormPath = isValidRemoteFormPath(formPath) ? formPath : null;
      const titleEl = document.getElementById('form-title-sidebar');
      if (titleEl) {
        titleEl.textContent = 'Loading form...';
      }
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
      const requestedTab = parseRequestedTab();
      const validTabs = ['preview', 'editor', 'myforms'];
      const safeTab = validTabs.includes(requestedTab) ? requestedTab : 'myforms';
      if (safeTab === 'myforms' || safeTab === 'preview') {
        const titleEl = document.getElementById('form-title-sidebar');
        if (titleEl) titleEl.textContent = 'My Forms';
        renderMyForms();
        switchTab('myforms', false);
      } else {
        await createNewBlankForm();
        switchTab(safeTab, false);
      }
    }
    const pendingAiPrompt = (() => {
      try { return sessionStorage.getItem('gic-pending-ai-prompt'); } catch (_) { return null; }
    })();
    if (pendingAiPrompt) {
      try { sessionStorage.removeItem('gic-pending-ai-prompt'); } catch (_) {}
      openCreateSheet();
      showCreateStep('create-describe-panel');
      const promptEl = document.getElementById('create-prompt');
      if (promptEl) promptEl.value = pendingAiPrompt;
      handleGenerate();
    } else if (String(window.location.hash || '').replace(/^#/, '').trim() === 'import') {
      openCreateSheet();
      showCreateStep('create-import-panel');
    }
  }

  // ─── AI Create Tab ───────────────────────────────────────────────────────────

  function initCreateTab() {
    const generateBtn = document.getElementById('btn-generate');
    const loadBtn = document.getElementById('btn-load-generated');
    const promptEl = document.getElementById('create-prompt');
    const bridgeNote = document.getElementById('create-bridge-note');

    // Show bridge note if not configured
    if (window.GICDeployIntegrations && !window.GICDeployIntegrations.getBridgeUrl()) {
      bridgeNote?.classList.remove('hidden');
    } else if (window.GICDeployIntegrations && typeof window.GICDeployIntegrations.checkBridgeHealth === 'function') {
      window.GICDeployIntegrations.checkBridgeHealth().then(health => {
        if (!bridgeNote) return;
        bridgeNote.classList.remove('hidden');
        bridgeNote.textContent = health.ok
          ? `AI bridge online (${health.latencyMs} ms); ${health.body ? 'provider configuration is available.' : 'health response received.'}`
          : `AI bridge health check returned HTTP ${health.status}. Generation may be unavailable.`;
      }).catch(err => {
        if (!bridgeNote) return;
        bridgeNote.classList.remove('hidden');
        bridgeNote.textContent = `AI bridge health check failed: ${err.message || 'service unavailable'}`;
      });
    }

    if (generateBtn) {
      generateBtn.addEventListener('click', handleGenerate);
    }

    if (loadBtn) {
      loadBtn.addEventListener('click', loadGeneratedForm);
    }

    if (promptEl) {
      promptEl.addEventListener('keydown', event => {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
          handleGenerate();
        }
      });
    }
  }

  let lastGeneratedYaml = '';

  async function handleGenerate() {
    const gate = window.GICProGate;
    const integrations = window.GICDeployIntegrations;
    const promptEl = document.getElementById('create-prompt');
    const prompt = (promptEl?.value || '').trim();

    if (!prompt) {
      promptEl?.focus();
      return;
    }

    // Access check
    if (gate && !gate.hasAIAccess()) {
      gate.showUpgradeModal('pro', 'ai_credits_exhausted');
      return;
    }

    // Bridge not configured — show informational note only
    if (!integrations || !integrations.getBridgeUrl()) {
      document.getElementById('create-bridge-note')?.classList.remove('hidden');
      return;
    }

    const generateBtn = document.getElementById('btn-generate');
    const btnLabel = document.getElementById('btn-generate-label');
    const outputPanel = document.getElementById('create-output-panel');
    const outputCode = document.getElementById('create-output-code');
    const outputPre = document.getElementById('create-output-pre');
    const statusLabel = document.getElementById('create-status-label');
    const loadBtn = document.getElementById('btn-load-generated');

    generateBtn.disabled = true;
    if (btnLabel) btnLabel.textContent = 'Generating…';
    outputPanel?.classList.remove('hidden');
    if (outputCode) outputCode.textContent = '';
    if (statusLabel) { statusLabel.textContent = 'Generating…'; statusLabel.classList.remove('hidden'); }
    loadBtn?.classList.add('hidden');
    lastGeneratedYaml = '';

    let isFreeCreditUser = gate && !gate.hasProAccess() && !gate.getBYOKey();

    try {
      const fullYaml = await integrations.aiCreateStream(prompt, (chunk, full) => {
        streamToPanel(full, outputCode);
      });

      // A non-empty stream is not necessarily a usable form. Validate before
      // marking the generation successful or consuming a free credit.
      const parsedForm = window.GICYamlCodec?.parse(fullYaml);
      if (!parsedForm || !parsedForm.title || !Array.isArray(parsedForm.questions) || !parsedForm.questions.length) {
        throw new Error('The AI returned content, but it was not a valid form YAML. Please try again.');
      }

      lastGeneratedYaml = fullYaml;
      if (statusLabel) { statusLabel.textContent = 'Done'; statusLabel.classList.remove('animate-pulse'); }
      const yamlWrap = document.getElementById('create-yaml-wrap');
      const yamlToggle = document.getElementById('create-yaml-toggle');
      if (yamlWrap) yamlWrap.classList.remove('hidden');
      if (yamlToggle) yamlToggle.textContent = 'Hide YAML';
      loadBtn?.classList.remove('hidden');

      // Decrement free credit if applicable
      if (isFreeCreditUser && gate) {
        const remaining = gate.useFreeCredit();
        gate.updateCreditBadge();
        if (remaining === 0) {
          gate.showUpgradeModal('pro', 'ai_credits_exhausted');
        }
      }
    } catch (err) {
      if (err.authRequired && gate) {
        gate.showUpgradeModal('pro', 'ai_credits_exhausted');
      } else {
        const requestId = err.requestId || integrations.getLastAiDiagnostics?.()?.requestId;
        const suffix = requestId && !String(err.message || '').includes(requestId) ? ` (request ${requestId})` : '';
        if (statusLabel) statusLabel.textContent = `Error: ${err.message || 'Generation failed'}${suffix}`;
        console.error('AI form generation failed', {
          message: err.message,
          requestId,
          workerRequestId: err.workerRequestId || integrations.getLastAiDiagnostics?.()?.workerRequestId || null,
          status: err.status || integrations.getLastAiDiagnostics?.()?.status || null,
          endpoint: integrations.getLastAiDiagnostics?.()?.endpoint || null
        });
      }
    } finally {
      generateBtn.disabled = false;
      if (btnLabel) btnLabel.textContent = 'Generate Form';
    }
  }

  function streamToPanel(fullText, codeEl) {
    if (!codeEl) return;
    codeEl.textContent = fullText;
    if (window.Prism) {
      codeEl.className = 'language-yaml text-sm';
      window.Prism.highlightElement(codeEl);
    }
    const pre = codeEl.closest('pre');
    if (pre) pre.scrollTop = pre.scrollHeight;
  }

  async function loadGeneratedForm() {
    if (!lastGeneratedYaml) {
      const statusLabel = document.getElementById('create-status-label');
      if (statusLabel) {
        statusLabel.textContent = 'No generated form to load — try generating again.';
        statusLabel.classList.remove('hidden');
      }
      return;
    }
    try {
      await loadYamlDocument(lastGeneratedYaml, {
        formPath: null,
        localFormId: null,
        category: 'custom_forms',
        updateUrl: true,
        editorStatus: 'AI-generated form loaded. Save it to My Forms to keep it.',
        switchTab: 'editor'
      });
    } catch (err) {
      alert('Could not load generated form: ' + err.message);
    }
  }

  // ─── AI Edit Panel ────────────────────────────────────────────────────────────

  let preAiEditYaml = '';

  function initAiEditPanel() {
    const applyBtn = document.getElementById('btn-ai-apply');
    const undoBtn = document.getElementById('btn-ai-undo');
    const statusEl = document.getElementById('ai-edit-status');
    const creditBadge = document.getElementById('ai-edit-credit-badge');

    function updateEditCreditBadge() {
      if (!creditBadge) return;
      const gate = window.GICProGate;
      if (!gate || gate.hasProAccess() || gate.getBYOKey()) {
        creditBadge.textContent = '';
        return;
      }
      const credits = gate.getFreeCredits();
      creditBadge.textContent = `${credits} free use${credits !== 1 ? 's' : ''} left`;
    }
    updateEditCreditBadge();

    if (applyBtn) {
      applyBtn.addEventListener('click', async () => {
        const gate = window.GICProGate;
        const integrations = window.GICDeployIntegrations;
        const promptEl = document.getElementById('ai-edit-prompt');
        const instruction = (promptEl?.value || '').trim();

        if (!instruction) { promptEl?.focus(); return; }

        if (gate && !gate.hasAIAccess()) {
          gate.showUpgradeModal('pro', 'ai_credits_exhausted');
          return;
        }

        if (!integrations || !integrations.getBridgeUrl()) {
          if (statusEl) statusEl.textContent = 'AI not configured yet.';
          return;
        }

        const yaml = currentYaml;
        if (!yaml) { if (statusEl) statusEl.textContent = 'No form loaded.'; return; }

        preAiEditYaml = yaml;
        applyBtn.disabled = true;
        if (statusEl) statusEl.textContent = 'Applying…';

        let isFreeCreditUser = gate && !gate.hasProAccess() && !gate.getBYOKey();

        try {
          const result = await integrations.aiEditStream(yaml, instruction, (chunk, full) => {
            // update status
            if (statusEl) statusEl.textContent = 'Streaming…';
          });

          // A non-empty stream is not necessarily a usable form. Validate before
          // marking the edit successful or consuming a free credit.
          const parsedResult = window.GICYamlCodec?.parse(result);
          if (!parsedResult || !parsedResult.title || !Array.isArray(parsedResult.questions) || !parsedResult.questions.length) {
            throw new Error('The AI returned content, but it was not a valid form YAML. Please try again.');
          }

          await loadYamlDocument(result, {
            formPath: currentFormPath,
            localFormId: currentLocalFormId,
            updateUrl: false,
            markOriginal: false,
            editorStatus: 'AI edit applied.'
          });

          undoBtn?.classList.remove('hidden');
          if (statusEl) statusEl.textContent = 'Edit applied!';

          if (isFreeCreditUser && gate) {
            const remaining = gate.useFreeCredit();
            gate.updateCreditBadge();
            updateEditCreditBadge();
            if (remaining === 0) {
              gate.showUpgradeModal('pro', 'ai_credits_exhausted');
            }
          }
        } catch (err) {
          if (err.authRequired && gate) {
            gate.showUpgradeModal('pro', 'ai_credits_exhausted');
          } else {
            const requestId = err.requestId || integrations.getLastAiDiagnostics?.()?.requestId;
            const suffix = requestId && !String(err.message || '').includes(requestId) ? ` (request ${requestId})` : '';
            if (statusEl) statusEl.textContent = `Error: ${err.message || 'Edit failed'}${suffix}`;
            console.error('AI form edit failed', {
              message: err.message,
              requestId,
              workerRequestId: err.workerRequestId || integrations.getLastAiDiagnostics?.()?.workerRequestId || null,
              status: err.status || integrations.getLastAiDiagnostics?.()?.status || null,
              endpoint: integrations.getLastAiDiagnostics?.()?.endpoint || null
            });
          }
          preAiEditYaml = '';
        } finally {
          applyBtn.disabled = false;
        }
      });
    }

    if (undoBtn) {
      undoBtn.addEventListener('click', async () => {
        if (!preAiEditYaml) return;
        await loadYamlDocument(preAiEditYaml, {
          formPath: currentFormPath,
          localFormId: currentLocalFormId,
          updateUrl: false,
          markOriginal: false,
          editorStatus: 'AI edit undone.'
        });
        preAiEditYaml = '';
        undoBtn.classList.add('hidden');
        if (statusEl) statusEl.textContent = 'Reverted.';
      });
    }
  }

  // ─── SurveyMonkey Import ──────────────────────────────────────────────────────

  function initSmImport() {
    const toggleBtn = document.getElementById('sm-import-toggle-btn');
    const panel = document.getElementById('sm-import-panel');
    const listBtn = document.getElementById('sm-list-btn');
    const surveyList = document.getElementById('sm-survey-list');
    const statusEl = document.getElementById('sm-import-status');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const gate = window.GICProGate;
        if (gate && !gate.hasSmImportAccess()) {
          gate.showUpgradeModal('pro', 'sm_imports_exhausted');
          return;
        }
        panel?.classList.toggle('hidden');
        toggleBtn.classList.add('hidden');
      });
    }

    if (listBtn) {
      listBtn.addEventListener('click', async () => {
        const gate = window.GICProGate;
        if (gate && !gate.hasSmImportAccess()) {
          gate.showUpgradeModal('pro', 'sm_imports_exhausted');
          return;
        }
        const token = (document.getElementById('sm-import-token')?.value || '').trim();
        if (!token) { setSmStatus('sm-import-status', 'error', 'Enter your SurveyMonkey access token.'); return; }

        listBtn.disabled = true;
        setSmStatus('sm-import-status', 'info', 'Loading surveys…');
        try {
          const result = await window.GICDeployIntegrations.smListSurveys(token);
          const surveys = result.surveys || result.data || [];
          if (!surveys.length) { setSmStatus('sm-import-status', 'info', 'No surveys found.'); return; }

          surveyList?.classList.remove('hidden');
          if (surveyList) {
            surveyList.innerHTML = surveys.map(s => `
              <div class="flex items-center justify-between gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2.5">
                <span class="text-xs text-slate-700 dark:text-slate-300 truncate">${escapeHtml(s.title || s.id)}</span>
                <button class="sm-import-one flex-shrink-0 text-xs text-primary font-medium hover:underline" data-survey-id="${escapeHtml(String(s.id || ''))}" data-sm-token="${escapeHtml(token)}">Import</button>
              </div>`).join('');

            surveyList.querySelectorAll('.sm-import-one').forEach(btn => {
              btn.addEventListener('click', async () => {
                const surveyId = btn.dataset.surveyId;
                const tkn = btn.dataset.smToken;
                setSmStatus('sm-import-status', 'info', 'Importing survey…');
                try {
                  const imported = await window.GICDeployIntegrations.smImport(tkn, surveyId);
                  if (imported.yaml) {
                    await loadYamlDocument(imported.yaml, {
                      formPath: null, localFormId: null, category: 'imported', updateUrl: true,
                      editorStatus: 'SurveyMonkey survey imported.', switchTab: 'editor'
                    });
                    setSmStatus('sm-import-status', 'success', 'Survey imported successfully!');
                    const gate = window.GICProGate;
                    if (gate && !gate.hasProAccess()) {
                      const remaining = gate.useFreeSmImport();
                      if (remaining === 0) {
                        gate.showUpgradeModal('pro', 'sm_imports_exhausted');
                      }
                    }
                  }
                } catch (err) {
                  setSmStatus('sm-import-status', 'error', err.message || 'Import failed.');
                }
              });
            });
          }
          statusEl?.classList.add('hidden');
        } catch (err) {
          setSmStatus('sm-import-status', 'error', err.message || 'Failed to list surveys.');
        } finally {
          listBtn.disabled = false;
        }
      });
    }
  }

  function setSmStatus(id, type, message) {
    const el = document.getElementById(id);
    if (!el) return;
    const tone = type === 'success'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300'
      : type === 'error'
        ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300'
        : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200';
    el.className = `mt-3 rounded-xl border px-4 py-3 text-sm ${tone}`;
    el.textContent = message;
    el.classList.remove('hidden');
  }

  // ─── SurveyMonkey Export ──────────────────────────────────────────────────────

  function initSmExport() {
    const exportBtn = document.getElementById('sm-export-btn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', () => {
      setSmStatus(
        'sm-export-status',
        'info',
        'SurveyMonkey export is not enabled on this deployment yet. Survey import is available today.'
      );
    });
  }

  // ─── Embed Code ───────────────────────────────────────────────────────────────

  function initEmbedCode() {
    const widthEl = document.getElementById('embed-width');
    const heightEl = document.getElementById('embed-height');
    const responsiveEl = document.getElementById('embed-responsive');
    const previewEl = document.getElementById('embed-code-preview');
    const copyBtn = document.getElementById('btn-copy-embed');

    function buildEmbedUrl() {
      const deployedUrl = localStorage.getItem('gic-last-deployed-url') || window.location.href;
      return deployedUrl;
    }

    function buildEmbedCode() {
      const width = widthEl?.value || '100%';
      const height = heightEl?.value || '600px';
      const url = buildEmbedUrl();
      const iframe = `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allowfullscreen loading="lazy" title="Form"></iframe>`;
      if (responsiveEl?.checked) {
        return `<div style="position:relative;width:${width};padding-bottom:0;overflow:hidden;">\n  ${iframe}\n</div>`;
      }
      return iframe;
    }

    function updateEmbedPreview() {
      if (previewEl) previewEl.textContent = buildEmbedCode();
    }

    [widthEl, heightEl, responsiveEl].forEach(el => {
      if (el) el.addEventListener('input', updateEmbedPreview);
    });
    updateEmbedPreview();

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const code = buildEmbedCode();
        const copied = await copyText(code);
        flashCopyState(copyBtn, copied
          ? '<span class="material-symbols-outlined icon-sm">check</span>Copied!'
          : '<span class="material-symbols-outlined icon-sm">error</span>Failed');
      });
    }
  }

  // ─── Webhook Config ───────────────────────────────────────────────────────────

  const WEBHOOK_STORAGE_KEY = 'gic-webhooks';

  function getWebhooks() {
    try {
      return JSON.parse(localStorage.getItem(WEBHOOK_STORAGE_KEY) || '[]');
    } catch (_) {
      return [];
    }
  }

  function saveWebhooks(list) {
    localStorage.setItem(WEBHOOK_STORAGE_KEY, JSON.stringify(list));
  }

  function initWebhooks() {
    const addBtn = document.getElementById('btn-add-webhook');
    const listEl = document.getElementById('webhook-list');
    const limitNote = document.getElementById('webhook-limit-note');
    const regenBtn = document.getElementById('btn-regen-worker');

    function getMaxWebhooks() {
      const gate = window.GICProGate;
      if (!gate) return 0;
      if (gate.hasBusinessAccess()) return Infinity;
      if (gate.hasProAccess()) return 3;
      return 0;
    }

    function renderWebhookList() {
      const hooks = getWebhooks();
      if (!listEl) return;
      if (regenBtn) {
        regenBtn.classList.toggle('hidden', !hooks.length);
      }
      if (!hooks.length) {
        listEl.innerHTML = '<p class="text-xs text-slate-400 dark:text-slate-600">No webhooks configured.</p>';
        return;
      }
      listEl.innerHTML = hooks.map((hook, i) => `
        <div class="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2.5">
          <div class="flex-1 min-w-0">
            <p class="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">${escapeHtml(hook.url)}</p>
            ${hook.secret ? '<p class="text-xs text-slate-400">HMAC secret set</p>' : ''}
          </div>
          <button class="webhook-delete flex-shrink-0 text-xs text-red-500 hover:text-red-600" data-idx="${i}">Remove</button>
        </div>`).join('');

      listEl.querySelectorAll('.webhook-delete').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx, 10);
          const hooks = getWebhooks();
          hooks.splice(idx, 1);
          saveWebhooks(hooks);
          renderWebhookList();
        });
      });
    }

    function showAddWebhookForm() {
      const gate = window.GICProGate;
      if (gate && !gate.hasProAccess()) {
        gate.showUpgradeModal('pro', 'pro_feature');
        return;
      }
      const max = getMaxWebhooks();
      const current = getWebhooks().length;
      if (current >= max) {
        const gate = window.GICProGate;
        gate?.showUpgradeModal('business', 'business_feature');
        return;
      }

      const url = window.prompt('Webhook URL:');
      if (!url) return;
      let parsedUrl;
      try {
        parsedUrl = new URL(url.trim(), window.location.href);
      } catch (_) {
        window.alert('Enter a valid absolute webhook URL.');
        return;
      }
      const isLocalDev = parsedUrl.protocol === 'http:' && (parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1');
      if (parsedUrl.protocol !== 'https:' && !isLocalDev) {
        window.alert('Webhook URLs must use HTTPS unless you are testing on localhost.');
        return;
      }
      const secret = window.prompt('HMAC secret (optional, press Cancel to skip):');
      const hooks = getWebhooks();
      hooks.push({ url: parsedUrl.toString(), secret: secret || '' });
      saveWebhooks(hooks);
      renderWebhookList();
    }

    addBtn?.addEventListener('click', showAddWebhookForm);
    regenBtn?.addEventListener('click', () => {
      const form = getCurrentEditor().getForm();
      const yaml = getCurrentEditor().buildYaml();
      const script = window.GICCloudflareWorker.createWorkerScript(form, {
        yaml,
        webhooks: getDeployWebhooks()
      });
      const filename = `${sanitizeWorkerName(codec().generateSlug(form.title || 'gic-form').replace(/_/g, '-'))}.worker.js`;
      downloadFile(filename, script, 'application/javascript');
    });
    renderWebhookList();
  }

  // ─── Billing tab sync for annual toggle buttons in modal ─────────────────────
  // The checkout buttons have both annual and monthly variants — sync their visibility

  function syncModalCheckoutButtons() {
    const modal = document.getElementById('modal-upgrade');
    if (!modal) return;
    // Handled by GICProGate.selectBillingTab already
  }

  // ─── Plan Badge ───────────────────────────────────────────────────────────────

  function initPlanBadge() {
    const container = document.getElementById('plan-badge-container');
    if (container && window.GICProGate) {
      window.GICProGate.renderProBadge(container);
      container.classList.remove('hidden');
    }
  }

  window.toggleDark = toggleDark;
  window.setViewMode = setViewMode;
  window.copyYaml = copyYaml;
  window.editYaml = editYaml;
  window.saveYamlEdit = saveYamlEdit;
  window.cancelYamlEdit = cancelYamlEdit;
  window.openYamlSourceModal = openYamlSourceModal;
  window.downloadXlsx = downloadXlsx;
  window.saveCurrentFormFromPage = saveCurrentFormFromPage;
  window.saveCurrentFormToMyForms = saveCurrentFormToMyForms;
  window.autosaveCurrentFormSilently = autosaveCurrentFormSilently;
  window.openFormGuideModal = openFormGuideModal;
  window.closeFormGuideModal = closeFormGuideModal;
  window.createNewBlankForm = createNewBlankForm;

  window.addEventListener('DOMContentLoaded', () => {
    loadInitialForm().catch(error => {
      renderPreviewError(error.message || 'Unable to initialize the editor.');
    });
  });
})();
