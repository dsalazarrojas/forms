(function () {
  const BUTTON_BASE = 'inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-colors';
  const BUTTON_OUTLINE = `${BUTTON_BASE} border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5`;
  const BUTTON_PRIMARY = `${BUTTON_BASE} border-primary bg-primary text-white hover:bg-orange-600 hover:border-orange-600`;
  const ICON_BUTTON = 'inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-300 hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors';

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

  function clone(value) {
    if (typeof structuredClone === 'function') {
      return structuredClone(value);
    }
    return JSON.parse(JSON.stringify(value));
  }

  class FormEditor {
    constructor(options) {
      this.options = options || {};
      this.container = typeof this.options.container === 'string'
        ? document.getElementById(this.options.container)
        : this.options.container;

      if (!this.container) {
        throw new Error('FormEditor requires a valid container.');
      }

      this.codec = window.GICYamlCodec;
      if (!this.codec) {
        throw new Error('GICYamlCodec must be loaded before FormEditor.');
      }

      this.form = this.codec.createBlankForm();
      this.documentMeta = {};
      this.dirty = false;
      this.statusMessage = 'No local draft loaded.';
      this.statusIsError = false;
      this.draggingQuestionIndex = null;
      this.draggingOption = null;
      this.bound = false;

      this.attachDelegatedEvents();
      this.render();
    }

    attachDelegatedEvents() {
      if (this.bound) {
        return;
      }
      this.bound = true;

      this.container.addEventListener('click', event => {
        const actionEl = event.target.closest('[data-action]');
        if (!actionEl) {
          return;
        }
        this.handleAction(actionEl.dataset.action, actionEl, event);
      });

      this.container.addEventListener('input', event => {
        this.handleInput(event);
      });

      this.container.addEventListener('change', event => {
        this.handleChange(event);
      });

      this.container.addEventListener('dragstart', event => {
        const questionHandle = event.target.closest('[data-drag-question]');
        if (questionHandle) {
          const card = questionHandle.closest('[data-question-index]');
          if (!card) {
            return;
          }
          this.draggingQuestionIndex = Number(card.dataset.questionIndex);
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('text/plain', String(this.draggingQuestionIndex));
          card.classList.add('opacity-50');
          return;
        }

        const optionHandle = event.target.closest('[data-drag-option]');
        if (optionHandle) {
          const row = optionHandle.closest('[data-option-index]');
          const card = optionHandle.closest('[data-question-index]');
          if (!row || !card) {
            return;
          }
          this.draggingOption = {
            questionIndex: Number(card.dataset.questionIndex),
            optionIndex: Number(row.dataset.optionIndex)
          };
          event.dataTransfer.effectAllowed = 'move';
          event.dataTransfer.setData('text/plain', `${this.draggingOption.questionIndex}:${this.draggingOption.optionIndex}`);
          row.classList.add('opacity-50');
        }
      });

      this.container.addEventListener('dragover', event => {
        const card = event.target.closest('[data-question-index]');
        const optionRow = event.target.closest('[data-option-index]');
        if (card || optionRow) {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
        }
      });

      this.container.addEventListener('drop', event => {
        const card = event.target.closest('[data-question-index]');
        if (card && this.draggingQuestionIndex !== null) {
          event.preventDefault();
          const targetIndex = Number(card.dataset.questionIndex);
          this.moveQuestion(this.draggingQuestionIndex, targetIndex);
          this.draggingQuestionIndex = null;
          return;
        }

        const optionRow = event.target.closest('[data-option-index]');
        if (optionRow && this.draggingOption) {
          event.preventDefault();
          const questionIndex = Number(optionRow.closest('[data-question-index]').dataset.questionIndex);
          const targetIndex = Number(optionRow.dataset.optionIndex);
          this.moveOption(this.draggingOption.questionIndex, this.draggingOption.optionIndex, questionIndex, targetIndex);
          this.draggingOption = null;
        }
      });

      this.container.addEventListener('dragend', () => {
        this.draggingQuestionIndex = null;
        this.draggingOption = null;
        this.container.querySelectorAll('.opacity-50').forEach(el => el.classList.remove('opacity-50'));
      });
    }

    setStatus(message, isError) {
      this.statusMessage = message || '';
      this.statusIsError = Boolean(isError);
      this.refreshHeader();
    }

    setDocumentMeta(meta) {
      this.documentMeta = meta && typeof meta === 'object' ? clone(meta) : {};
    }

    getDocumentMeta() {
      return clone(this.documentMeta || {});
    }

    setForm(form, options) {
      const config = options || {};
      const sanitized = this.codec.sanitizeForm(form || this.codec.createBlankForm());
      this.form = {
        title: sanitized.title,
        questions: sanitized.questions.map((question, index) => {
          const generatedName = this.codec.generateSlug(question.label) || `question_${index + 1}`;
          return {
            id: index + 1,
            label: question.label || '',
            name: question.name || generatedName,
            hint: question.hint || '',
            type: question.type || 'text',
            required: Boolean(question.required),
            options: (question.options || []).map((option, optionIndex) => ({
              label: option.label || `Option ${optionIndex + 1}`,
              name: option.name || this.codec.generateSlug(option.label || `Option ${optionIndex + 1}`) || `option_${optionIndex + 1}`
            })),
            _manualName: Boolean(question._manualName || (question.name && question.name !== generatedName))
          };
        })
      };

      if (config.documentMeta !== undefined) {
        this.setDocumentMeta(config.documentMeta);
      }

      this.dirty = !config.markClean;
      if (config.statusMessage) {
        this.setStatus(config.statusMessage, Boolean(config.statusIsError));
      }
      this.render();
    }

    loadYaml(yaml, options) {
      const config = options || {};
      const parsed = this.codec.parse(yaml);
      this.setForm(parsed, {
        markClean: Boolean(config.markClean),
        statusMessage: config.statusMessage,
        statusIsError: config.statusIsError,
        documentMeta: parsed.metadata || {}
      });
    }

    getForm() {
      return this.codec.sanitizeForm({
        title: this.form.title,
        questions: this.form.questions.map(question => ({
          id: question.id,
          name: question.name,
          label: question.label,
          hint: question.hint,
          type: question.type,
          options: question.options,
          required: question.required
        }))
      });
    }

    buildYaml() {
      return this.codec.serialize(this.getForm(), this.documentMeta || {});
    }

    getQuestionCount() {
      return Array.isArray(this.form.questions) ? this.form.questions.length : 0;
    }

    getDraftKey() {
      return typeof this.options.getDraftKey === 'function'
        ? this.options.getDraftKey()
        : 'gic-editor-draft';
    }

    getDownloadName() {
      return typeof this.options.getDownloadName === 'function'
        ? this.options.getDownloadName()
        : 'edited-form.yaml';
    }

    setDirty(isDirty) {
      this.dirty = Boolean(isDirty);
      this.refreshHeader();
      this.refreshValidationUI();
    }

    refreshHeader() {
      const statusEl = this.container.querySelector('[data-editor-status]');
      const dirtyEl = this.container.querySelector('[data-editor-dirty]');
      const countEl = this.container.querySelector('[data-editor-count]');
      const draftEl = this.container.querySelector('[data-editor-draft]');

      if (statusEl) {
        statusEl.textContent = this.statusMessage || '';
        statusEl.className = this.statusIsError
          ? 'text-sm text-red-500'
          : 'text-sm text-slate-500 dark:text-slate-400';
      }

      if (dirtyEl) {
        dirtyEl.textContent = this.dirty ? 'Unsaved changes' : 'Applied state';
        dirtyEl.className = this.dirty
          ? 'inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/20 dark:text-amber-300'
          : 'inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300';
      }

      if (countEl) {
        countEl.textContent = `${this.getQuestionCount()} question${this.getQuestionCount() === 1 ? '' : 's'}`;
      }

      if (draftEl) {
        const hasDraft = Boolean(localStorage.getItem(this.getDraftKey()));
        draftEl.textContent = hasDraft ? 'Local draft available' : 'No local draft saved';
      }
    }

    validate() {
      const issues = [];
      const fieldErrors = {
        title: '',
        questions: {}
      };

      if (!this.form.title.trim()) {
        fieldErrors.title = 'Title is required.';
        issues.push('Title is required.');
      }

      const nameCounts = {};
      this.form.questions.forEach(question => {
        const name = question.name.trim();
        if (name) {
          nameCounts[name] = (nameCounts[name] || 0) + 1;
        }
      });

      this.form.questions.forEach((question, index) => {
        const questionErrors = {};
        if (!question.label.trim()) {
          questionErrors.label = 'Label is required.';
          issues.push(`Question ${index + 1} label is required.`);
        }
        if (!question.name.trim()) {
          questionErrors.name = 'Name is required.';
          issues.push(`Question ${index + 1} name is required.`);
        } else if (nameCounts[question.name.trim()] > 1) {
          questionErrors.name = 'Question names must be unique.';
          issues.push(`Question ${index + 1} name must be unique.`);
        }
        if (this.codec.isOptionType(question.type)) {
          const labels = question.options.map(option => option.label.trim()).filter(Boolean);
          if (!labels.length) {
            questionErrors.options = 'At least one option is required.';
            issues.push(`Question ${index + 1} requires at least one option.`);
          }
        }
        fieldErrors.questions[index] = questionErrors;
      });

      return { issues, fieldErrors };
    }

    refreshValidationUI() {
      const validation = this.validate();
      const titleError = this.container.querySelector('[data-error-for="title"]');
      const summary = this.container.querySelector('[data-validation-summary]');

      if (titleError) {
        titleError.textContent = validation.fieldErrors.title || '';
        titleError.classList.toggle('hidden', !validation.fieldErrors.title);
      }

      Object.keys(validation.fieldErrors.questions).forEach(key => {
        const questionIndex = Number(key);
        const errors = validation.fieldErrors.questions[key] || {};
        const card = this.container.querySelector(`[data-question-index="${questionIndex}"]`);
        if (!card) {
          return;
        }

        const labelError = card.querySelector('[data-error-for="label"]');
        const nameError = card.querySelector('[data-error-for="name"]');
        const optionsError = card.querySelector('[data-error-for="options"]');

        if (labelError) {
          labelError.textContent = errors.label || '';
          labelError.classList.toggle('hidden', !errors.label);
        }

        if (nameError) {
          nameError.textContent = errors.name || '';
          nameError.classList.toggle('hidden', !errors.name);
        }

        if (optionsError) {
          optionsError.textContent = errors.options || '';
          optionsError.classList.toggle('hidden', !errors.options);
        }

        card.classList.toggle('border-red-300', Boolean(errors.label || errors.name || errors.options));
        card.classList.toggle('dark:border-red-700', Boolean(errors.label || errors.name || errors.options));
      });

      if (summary) {
        if (validation.issues.length) {
          summary.innerHTML = `
            <div class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
              <p class="font-semibold mb-1">Validation checks</p>
              <ul class="list-disc pl-5 space-y-1">
                ${validation.issues.map(issue => `<li>${escapeHtml(issue)}</li>`).join('')}
              </ul>
            </div>`;
        } else {
          summary.innerHTML = `
            <div class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              Ready to apply. The current questionnaire matches the shared schema.
            </div>`;
        }
      }
    }

    notifyStateChange() {
      if (typeof this.options.onStateChange === 'function') {
        this.options.onStateChange(this.getForm(), this.buildYaml());
      }
    }

    addQuestion(type) {
      const nextIndex = this.form.questions.length + 1;
      const nextName = this.uniqueQuestionName(`question_${nextIndex}`);
      this.form.questions.push({
        id: nextIndex,
        label: 'New Question',
        name: nextName,
        hint: '',
        type: type || 'text',
        required: false,
        options: [],
        _manualName: true
      });
      this.renumberQuestions();
      this.setDirty(true);
      this.render();
      this.setStatus('Question added.');
      this.notifyStateChange();
    }

    removeQuestion(index) {
      const question = this.form.questions[index];
      if (!question) {
        return;
      }
      const confirmed = window.confirm(`Delete “${question.label || `Question ${index + 1}`}”?`);
      if (!confirmed) {
        return;
      }
      this.form.questions.splice(index, 1);
      this.renumberQuestions();
      this.setDirty(true);
      this.render();
      this.setStatus('Question removed.');
      this.notifyStateChange();
    }

    duplicateQuestion(index) {
      const question = this.form.questions[index];
      if (!question) {
        return;
      }
      const duplicate = clone(question);
      duplicate.id = this.form.questions.length + 1;
      duplicate.name = this.uniqueQuestionName(question.name || this.codec.generateSlug(question.label) || `question_${duplicate.id}`);
      duplicate._manualName = true;
      duplicate.options = (duplicate.options || []).map((option, optionIndex) => ({
        label: option.label,
        name: option.name || this.codec.generateSlug(option.label) || `option_${optionIndex + 1}`
      }));
      this.form.questions.splice(index + 1, 0, duplicate);
      this.renumberQuestions();
      this.setDirty(true);
      this.render();
      this.setStatus('Question duplicated.');
      this.notifyStateChange();
    }

    moveQuestion(fromIndex, toIndex) {
      if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) {
        return;
      }
      const question = this.form.questions[fromIndex];
      if (!question || !this.form.questions[toIndex]) {
        return;
      }
      this.form.questions.splice(fromIndex, 1);
      this.form.questions.splice(toIndex, 0, question);
      this.renumberQuestions();
      this.setDirty(true);
      this.render();
      this.setStatus('Question order updated.');
      this.notifyStateChange();
    }

    moveQuestionStep(index, direction) {
      const target = direction === 'up' ? index - 1 : index + 1;
      if (target < 0 || target >= this.form.questions.length) {
        return;
      }
      this.moveQuestion(index, target);
    }

    moveOption(questionIndex, optionIndex, targetQuestionIndex, targetOptionIndex) {
      if (questionIndex !== targetQuestionIndex) {
        return;
      }
      const question = this.form.questions[questionIndex];
      if (!question || !question.options[optionIndex] || !question.options[targetOptionIndex] || optionIndex === targetOptionIndex) {
        return;
      }
      const [option] = question.options.splice(optionIndex, 1);
      question.options.splice(targetOptionIndex, 0, option);
      this.setDirty(true);
      this.render();
      this.setStatus('Option order updated.');
      this.notifyStateChange();
    }

    moveOptionStep(questionIndex, optionIndex, direction) {
      const question = this.form.questions[questionIndex];
      if (!question) {
        return;
      }
      const target = direction === 'up' ? optionIndex - 1 : optionIndex + 1;
      if (target < 0 || target >= question.options.length) {
        return;
      }
      this.moveOption(questionIndex, optionIndex, questionIndex, target);
    }

    addOption(questionIndex) {
      const question = this.form.questions[questionIndex];
      if (!question) {
        return;
      }
      const nextOption = `Option ${question.options.length + 1}`;
      question.options.push({
        label: nextOption,
        name: this.codec.generateSlug(nextOption) || `option_${question.options.length + 1}`
      });
      this.setDirty(true);
      this.render();
      this.setStatus('Option added.');
      this.notifyStateChange();
    }

    removeOption(questionIndex, optionIndex) {
      const question = this.form.questions[questionIndex];
      if (!question || !question.options[optionIndex]) {
        return;
      }
      question.options.splice(optionIndex, 1);
      this.setDirty(true);
      this.render();
      this.setStatus('Option removed.');
      this.notifyStateChange();
    }

    ensureSelectOptions(question) {
      if (!this.codec.isOptionType(question.type)) {
        return;
      }
      if (question.options.length) {
        return;
      }
      question.options = [
        { label: 'Option 1', name: 'option_1' },
        { label: 'Option 2', name: 'option_2' }
      ];
    }

    uniqueQuestionName(baseName) {
      const rawBase = String(baseName || 'question').trim();
      let base = rawBase || 'question';
      const existing = new Set(this.form.questions.map(question => question.name));
      if (!existing.has(base)) {
        return base;
      }
      let index = 2;
      while (existing.has(`${base}_${index}`)) {
        index += 1;
      }
      return `${base}_${index}`;
    }

    renumberQuestions() {
      this.form.questions = this.form.questions.map((question, index) => ({
        ...question,
        id: index + 1
      }));
    }

    renderQuestion(question, index, validation) {
      const requiresOptions = this.codec.isOptionType(question.type);
      const errors = validation.fieldErrors.questions[index] || {};
      const typeOptions = this.codec.QUESTION_TYPES.map(type => `
        <option value="${escapeHtml(type.value)}" ${type.value === question.type ? 'selected' : ''}>${escapeHtml(type.label)}</option>`).join('');

      return `
        <article class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900" data-question-index="${index}">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div class="flex items-start gap-3 min-w-0">
                <button type="button" ${this.form.questions.length > 1 ? 'draggable="true"' : ''} data-drag-question="${index}" class="${ICON_BUTTON} cursor-grab ${this.form.questions.length > 1 ? '' : 'opacity-40 cursor-not-allowed'}" title="Drag to reorder">
                  <span class="material-symbols-outlined">drag_indicator</span>
                </button>
                <div class="min-w-0">
                  <p class="text-xs font-semibold uppercase tracking-wide text-primary">Question ${question.id}</p>
                  <h3 class="truncate text-base font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(question.label || 'Untitled question')}</h3>
                  <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${escapeHtml((question.type || 'text').replace(/_/g, ' '))}${question.required ? ' • required' : ''}</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <button type="button" data-action="duplicate-question" data-question-index="${index}" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">content_copy</span>
                  Duplicate
                </button>
                <button type="button" data-action="move-question-up" data-question-index="${index}" class="${ICON_BUTTON}" ${index === 0 ? 'disabled' : ''} title="Move up">
                  <span class="material-symbols-outlined">arrow_upward</span>
                </button>
                <button type="button" data-action="move-question-down" data-question-index="${index}" class="${ICON_BUTTON}" ${index === this.form.questions.length - 1 ? 'disabled' : ''} title="Move down">
                  <span class="material-symbols-outlined">arrow_downward</span>
                </button>
                <button type="button" data-action="remove-question" data-question-index="${index}" class="${ICON_BUTTON} hover:border-red-400 hover:text-red-500" title="Delete question">
                  <span class="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <div class="md:col-span-2">
                <label class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Label</label>
                <input type="text" class="preview-input" data-role="question-label" data-question-index="${index}" value="${escapeHtml(question.label)}" placeholder="What should respondents see?">
                <p data-error-for="label" class="mt-1 text-xs text-red-500 ${errors.label ? '' : 'hidden'}">${escapeHtml(errors.label || '')}</p>
              </div>
              <div>
                <label class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input type="text" class="preview-input" data-role="question-name" data-question-index="${index}" value="${escapeHtml(question.name)}" placeholder="question_slug">
                <p data-error-for="name" class="mt-1 text-xs text-red-500 ${errors.name ? '' : 'hidden'}">${escapeHtml(errors.name || '')}</p>
              </div>
              <div>
                <label class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Type</label>
                <select class="preview-input" data-role="question-type" data-question-index="${index}">
                  ${typeOptions}
                </select>
              </div>
              <div class="md:col-span-2">
                <label class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Hint</label>
                <input type="text" class="preview-input" data-role="question-hint" data-question-index="${index}" value="${escapeHtml(question.hint || '')}" placeholder="Optional helper text">
              </div>
              <label class="inline-flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
                <input type="checkbox" data-role="question-required" data-question-index="${index}" ${question.required ? 'checked' : ''} style="accent-color:#ec5b13;">
                Required response
              </label>
            </div>

            ${requiresOptions ? `
              <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950/60">
                <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">Choice options</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Add, remove, or drag to reorder response options.</p>
                  </div>
                  <button type="button" data-action="add-option" data-question-index="${index}" class="${BUTTON_OUTLINE}">
                    <span class="material-symbols-outlined text-[18px]">add</span>
                    Add option
                  </button>
                </div>
                <div class="space-y-2">
                  ${(question.options || []).map((option, optionIndex) => `
                    <div class="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center" data-option-index="${optionIndex}">
                      <button type="button" draggable="true" data-drag-option="${optionIndex}" class="${ICON_BUTTON} cursor-grab" title="Drag option">
                        <span class="material-symbols-outlined">drag_indicator</span>
                      </button>
                      <input type="text" class="preview-input flex-1" data-role="option-label" data-question-index="${index}" data-option-index="${optionIndex}" value="${escapeHtml(option.label)}" placeholder="Option label">
                      <div class="flex gap-2 sm:self-stretch">
                        <button type="button" data-action="move-option-up" data-question-index="${index}" data-option-index="${optionIndex}" class="${ICON_BUTTON}" ${optionIndex === 0 ? 'disabled' : ''} title="Move option up">
                          <span class="material-symbols-outlined">arrow_upward</span>
                        </button>
                        <button type="button" data-action="move-option-down" data-question-index="${index}" data-option-index="${optionIndex}" class="${ICON_BUTTON}" ${optionIndex === question.options.length - 1 ? 'disabled' : ''} title="Move option down">
                          <span class="material-symbols-outlined">arrow_downward</span>
                        </button>
                        <button type="button" data-action="remove-option" data-question-index="${index}" data-option-index="${optionIndex}" class="${ICON_BUTTON} hover:border-red-400 hover:text-red-500" title="Delete option">
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>`).join('')}
                </div>
                <p data-error-for="options" class="mt-2 text-xs text-red-500 ${errors.options ? '' : 'hidden'}">${escapeHtml(errors.options || '')}</p>
              </div>` : ''}
          </div>
        </article>`;
    }

    render() {
      const validation = this.validate();
      const emptyState = `
        <div class="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
          <span class="material-symbols-outlined mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary" style="font-size:28px;">quiz</span>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">No questions yet</h3>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Add a question, paste YAML from the clipboard, or start from a saved draft.</p>
        </div>`;

      this.container.innerHTML = `
        <div class="max-w-5xl mx-auto space-y-6">
          <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap gap-2">
                <button type="button" data-action="apply" class="${BUTTON_PRIMARY}">
                  <span class="material-symbols-outlined text-[18px]">check_circle</span>
                  Apply Changes
                </button>
                <button type="button" data-action="add-question" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">add_circle</span>
                  Add Question
                </button>
                <button type="button" data-action="import-clipboard" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">assignment_returned</span>
                  Paste YAML
                </button>
                <button type="button" data-action="save-draft" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">save</span>
                  Save Draft (Local)
                </button>
                <button type="button" data-action="load-draft" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">history</span>
                  Load Draft
                </button>
                <button type="button" data-action="clear-draft" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">delete</span>
                  Clear Draft
                </button>
                <button type="button" data-action="copy-yaml" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">content_copy</span>
                  Copy YAML
                </button>
                <button type="button" data-action="download-yaml" class="${BUTTON_OUTLINE}">
                  <span class="material-symbols-outlined text-[18px]">download</span>
                  Download YAML
                </button>
              </div>

              <div class="flex flex-wrap items-center gap-2 text-xs">
                <span data-editor-dirty class="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">Applied state</span>
                <span data-editor-count class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">${this.getQuestionCount()} question${this.getQuestionCount() === 1 ? '' : 's'}</span>
                <span data-editor-draft class="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">No local draft saved</span>
              </div>

              <p data-editor-status class="text-sm ${this.statusIsError ? 'text-red-500' : 'text-slate-500 dark:text-slate-400'}">${escapeHtml(this.statusMessage)}</p>

              <div>
                <label class="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Form title</label>
                <input type="text" class="preview-input" data-role="title" value="${escapeHtml(this.form.title)}" placeholder="Survey Title">
                <p data-error-for="title" class="mt-1 text-xs text-red-500 ${validation.fieldErrors.title ? '' : 'hidden'}">${escapeHtml(validation.fieldErrors.title || '')}</p>
              </div>
            </div>
          </section>

          <div data-validation-summary></div>

          <section class="space-y-4">
            ${this.form.questions.length ? this.form.questions.map((question, index) => this.renderQuestion(question, index, validation)).join('') : emptyState}
          </section>
        </div>`;

      this.refreshHeader();
      this.refreshValidationUI();
    }

    handleInput(event) {
      const target = event.target;
      const role = target.dataset.role;
      if (!role) {
        return;
      }

      if (role === 'title') {
        this.form.title = target.value;
        this.setDirty(true);
        this.notifyStateChange();
        return;
      }

      const questionIndex = Number(target.dataset.questionIndex);
      const question = this.form.questions[questionIndex];
      if (!question) {
        return;
      }

      switch (role) {
        case 'question-label': {
          question.label = target.value;
          const generated = this.codec.generateSlug(target.value) || `question_${question.id}`;
          if (!question._manualName || !question.name.trim()) {
            question.name = generated;
            const nameInput = this.container.querySelector(`[data-role="question-name"][data-question-index="${questionIndex}"]`);
            if (nameInput) {
              nameInput.value = question.name;
            }
          }
          break;
        }
        case 'question-name':
          question.name = target.value;
          question._manualName = Boolean(target.value.trim() && target.value.trim() !== (this.codec.generateSlug(question.label) || `question_${question.id}`));
          break;
        case 'question-hint':
          question.hint = target.value;
          break;
        case 'option-label': {
          const optionIndex = Number(target.dataset.optionIndex);
          const option = question.options[optionIndex];
          if (!option) {
            return;
          }
          option.label = target.value;
          option.name = this.codec.generateSlug(target.value) || option.name || `option_${optionIndex + 1}`;
          break;
        }
        default:
          return;
      }

      this.setDirty(true);
      this.notifyStateChange();
    }

    handleChange(event) {
      const target = event.target;
      const role = target.dataset.role;
      if (!role) {
        return;
      }

      const questionIndex = Number(target.dataset.questionIndex);
      const question = this.form.questions[questionIndex];
      if (!question) {
        return;
      }

      switch (role) {
        case 'question-type':
          question.type = target.value;
          this.ensureSelectOptions(question);
          this.setDirty(true);
          this.render();
          this.notifyStateChange();
          return;
        case 'question-required':
          question.required = Boolean(target.checked);
          this.setDirty(true);
          this.notifyStateChange();
          return;
        default:
          return;
      }
    }

    async handleAction(action, actionEl, event) {
      event.preventDefault();
      const questionIndex = Number(actionEl.dataset.questionIndex);
      const optionIndex = Number(actionEl.dataset.optionIndex);

      switch (action) {
        case 'apply': {
          const validation = this.validate();
          if (validation.issues.length) {
            this.setStatus('Please fix validation errors before applying changes.', true);
            this.refreshValidationUI();
            return;
          }
          try {
            const yaml = this.buildYaml();
            if (typeof this.options.onApply === 'function') {
              await this.options.onApply(yaml, this.getForm(), this.getDocumentMeta());
            }
            this.dirty = false;
            this.setStatus('Changes applied to the live preview and YAML source.');
            this.refreshHeader();
          } catch (error) {
            this.setStatus(error.message || 'Unable to apply changes.', true);
          }
          return;
        }
        case 'add-question':
          this.addQuestion();
          return;
        case 'duplicate-question':
          this.duplicateQuestion(questionIndex);
          return;
        case 'remove-question':
          this.removeQuestion(questionIndex);
          return;
        case 'move-question-up':
          this.moveQuestionStep(questionIndex, 'up');
          return;
        case 'move-question-down':
          this.moveQuestionStep(questionIndex, 'down');
          return;
        case 'add-option':
          this.addOption(questionIndex);
          return;
        case 'remove-option':
          this.removeOption(questionIndex, optionIndex);
          return;
        case 'move-option-up':
          this.moveOptionStep(questionIndex, optionIndex, 'up');
          return;
        case 'move-option-down':
          this.moveOptionStep(questionIndex, optionIndex, 'down');
          return;
        case 'save-draft':
          localStorage.setItem(this.getDraftKey(), this.buildYaml());
          this.setStatus('Draft saved locally.');
          this.refreshHeader();
          return;
        case 'load-draft': {
          const draft = localStorage.getItem(this.getDraftKey());
          if (!draft) {
            this.setStatus('No local draft found for this form.', true);
            return;
          }
          try {
            this.loadYaml(draft, { markClean: false, statusMessage: 'Draft loaded. Review it, then apply changes.' });
            this.notifyStateChange();
          } catch (error) {
            this.setStatus(error.message || 'Unable to load the saved draft.', true);
          }
          return;
        }
        case 'clear-draft':
          localStorage.removeItem(this.getDraftKey());
          this.setStatus('Draft cleared.');
          this.refreshHeader();
          return;
        case 'copy-yaml':
          try {
            await navigator.clipboard.writeText(this.buildYaml());
            this.setStatus('YAML copied to the clipboard.');
          } catch (_) {
            this.setStatus('Clipboard access is unavailable in this browser session.', true);
          }
          return;
        case 'download-yaml': {
          const blob = new Blob([this.buildYaml()], { type: 'text/yaml' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = this.getDownloadName();
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          this.setStatus('YAML downloaded.');
          return;
        }
        case 'import-clipboard':
          try {
            const clipboardText = await navigator.clipboard.readText();
            if (!clipboardText.trim()) {
              throw new Error('Clipboard is empty.');
            }
            this.loadYaml(clipboardText, { markClean: false, statusMessage: 'YAML imported from the clipboard.' });
            this.notifyStateChange();
          } catch (error) {
            this.setStatus(error.message || 'Clipboard import failed.', true);
          }
          return;
        default:
          return;
      }
    }
  }

  window.GICFormEditor = FormEditor;
})();
