(function () {
  const CORE_QUESTION_TYPES = [
    { value: 'audio', label: 'Audio' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'datetime', label: 'Date & Time' },
    { value: 'decimal', label: 'Decimal' },
    { value: 'file', label: 'File' },
    { value: 'geopoint', label: 'Geo Point' },
    { value: 'geoshape', label: 'Geo Shape' },
    { value: 'geotrace', label: 'Geo Trace' },
    { value: 'image', label: 'Image' },
    { value: 'integer', label: 'Integer' },
    { value: 'select_multiple', label: 'Select Multiple' },
    { value: 'select_one', label: 'Select One' },
    { value: 'text', label: 'Text' },
    { value: 'trigger', label: 'Trigger' },
    { value: 'video', label: 'Video' }
  ];

  const LEGACY_QUESTION_TYPES = [
    { value: 'email', label: 'Email (compat)' },
    { value: 'note', label: 'Note / Section (compat)' },
    { value: 'number', label: 'Number (compat)' }
  ];

  const QUESTION_TYPES = [...CORE_QUESTION_TYPES, ...LEGACY_QUESTION_TYPES];

  const QUESTION_TYPE_SET = new Set(QUESTION_TYPES.map(type => type.value));

  const HUMAN_TYPE_LABELS = {
    text: 'Short answer',
    select_one: 'Multiple choice',
    select_multiple: 'Checkboxes',
    date: 'Date',
    time: 'Time',
    datetime: 'Date & time',
    integer: 'Number',
    decimal: 'Decimal number',
    image: 'Photo',
    file: 'File',
    audio: 'Audio',
    video: 'Video'
  };

  function getTypeLabel(value) {
    if (Object.prototype.hasOwnProperty.call(HUMAN_TYPE_LABELS, value)) {
      return HUMAN_TYPE_LABELS[value];
    }
    const type = QUESTION_TYPES.find(entry => entry.value === value);
    return type ? type.label : String(value || 'text').replace(/_/g, ' ');
  }

  function isAdvancedType(value) {
    return QUESTION_TYPE_SET.has(value) && !Object.prototype.hasOwnProperty.call(HUMAN_TYPE_LABELS, value);
  }

  function clone(value) {
    if (typeof structuredClone === 'function') {
      return structuredClone(value);
    }
    return JSON.parse(JSON.stringify(value));
  }

  function stripCodeFences(text) {
    const raw = String(text || '').replace(/^\uFEFF/, '').trim();
    if (!raw.startsWith('```')) {
      return raw;
    }

    return raw
      .split(/\r?\n/)
      .filter(line => !line.trim().startsWith('```'))
      .join('\n')
      .trim();
  }

  function normalizeLegacyType(type) {
    const raw = String(type || 'text').trim().toLowerCase();
    if (!raw) {
      return 'text';
    }

    switch (raw) {
      case 'single':
        return 'select_one';
      case 'multiple':
        return 'select_multiple';
      case 'free_text':
        return 'text';
      default:
        return raw;
    }
  }

  function isOptionType(type) {
    return type === 'select_one' || type === 'select_multiple';
  }

  function generateSlug(text) {
    const lower = String(text || '')
      .toLowerCase()
      .replace(/\s+/g, '_');

    const filtered = lower.replace(/[^a-z0-9_]/g, '_');
    return filtered.replace(/_+/g, '_').replace(/^_+|_+$/g, '');
  }

  function normalizeOptionLabel(option) {
    if (option === null || option === undefined) {
      return '';
    }

    if (typeof option === 'object') {
      if (option.label !== undefined) {
        return String(option.label);
      }
      if (option.value !== undefined) {
        return String(option.value);
      }
      if (option.name !== undefined) {
        return String(option.name);
      }
      return JSON.stringify(option);
    }

    const raw = String(option).trim();
    if (!raw) {
      return '';
    }

    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        if (parsed.label !== undefined) {
          return String(parsed.label);
        }
        if (parsed.value !== undefined) {
          return String(parsed.value);
        }
        if (parsed.name !== undefined) {
          return String(parsed.name);
        }
      }
    } catch (_) {}

    const labelMatch = raw.match(/["']label["']\s*:\s*([^,}]+)/i);
    if (labelMatch) {
      let value = labelMatch[1].trim();
      if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
        value = value.slice(1, -1);
      }
      if (value === 'None') {
        return '';
      }
      return value;
    }

    return raw;
  }

  function normalizeOption(option, index) {
    const label = normalizeOptionLabel(option) || `Option ${index + 1}`;
    const name = option && typeof option === 'object' && option.name
      ? String(option.name)
      : generateSlug(label) || `option_${index + 1}`;

    return {
      name,
      label
    };
  }

  function normalizeOptions(options) {
    if (!Array.isArray(options)) {
      return [];
    }

    return options.map((option, index) => normalizeOption(option, index));
  }

  function toQuestionRecord(rawQuestion, index) {
    const fallbackLabel = rawQuestion && rawQuestion.text ? rawQuestion.text : `Question ${index + 1}`;
    const label = String(rawQuestion?.label ?? rawQuestion?.text ?? rawQuestion?.name ?? fallbackLabel);
    const generatedName = generateSlug(label) || `question_${index + 1}`;
    const providedName = String(rawQuestion?.name || '').trim();
    const type = normalizeLegacyType(rawQuestion?.type);

    return {
      id: Number.isFinite(Number(rawQuestion?.id)) ? Number(rawQuestion.id) : index + 1,
      name: providedName || generatedName,
      label,
      hint: rawQuestion?.hint == null ? '' : String(rawQuestion.hint),
      type: QUESTION_TYPE_SET.has(type) ? type : type || 'text',
      options: normalizeOptions(rawQuestion?.options),
      required: Boolean(rawQuestion?.required),
      _manualName: Boolean(providedName && providedName !== generatedName)
    };
  }

  function ensureSequentialIDs(questions) {
    return questions.map((question, index) => ({
      ...question,
      id: index + 1,
      name: String(question.name || generateSlug(question.label) || `question_${index + 1}`)
    }));
  }

  function createBlankForm(title) {
    return {
      title: title || 'Untitled Survey',
      questions: []
    };
  }

  function extractMetadata(rootDocument) {
    const safeRoot = rootDocument && typeof rootDocument === 'object' ? clone(rootDocument) : {};
    delete safeRoot.inputSchema;
    return safeRoot;
  }

  function parse(yamlString) {
    const cleaned = stripCodeFences(yamlString);
    const root = window.jsyaml.load(cleaned) || {};

    if (!root || typeof root !== 'object') {
      throw new Error('YAML must parse to an object.');
    }

    const properties = root.inputSchema?.properties || root.properties || {};
    const schemaPages = Array.isArray(properties.pages) ? properties.pages : null;
    const legacyQuestions = Array.isArray(root.questions) ? root.questions : null;

    const questions = ensureSequentialIDs((schemaPages || legacyQuestions || []).map((question, index) => {
      if (schemaPages) {
        return toQuestionRecord(question, index);
      }

      const legacyQuestion = {
        id: index + 1,
        name: question?.name,
        label: question?.text || question?.label,
        hint: question?.hint,
        type: normalizeLegacyType(question?.type),
        options: question?.options,
        required: question?.required
      };
      return toQuestionRecord(legacyQuestion, index);
    }));

    const title = String(properties.title ?? root.title ?? 'Untitled Survey');

    return {
      title,
      questions,
      metadata: extractMetadata(root)
    };
  }

  function sanitizeForm(form) {
    const questions = Array.isArray(form?.questions) ? form.questions : [];
    return {
      title: String(form?.title || 'Untitled Survey'),
      questions: ensureSequentialIDs(questions.map((question, index) => {
        const record = toQuestionRecord(question, index);
        return {
          ...record,
          type: normalizeLegacyType(record.type),
          options: normalizeOptions(record.options)
        };
      }))
    };
  }

  function serialize(form, extraRoot) {
    const safeForm = sanitizeForm(form);
    const root = extraRoot && typeof extraRoot === 'object' ? clone(extraRoot) : {};

    root.inputSchema = {
      type: 'object',
      properties: {
        title: safeForm.title,
        pages: safeForm.questions.map((question, index) => {
          const options = isOptionType(question.type)
            ? normalizeOptions(question.options).map(option => option.label)
            : [];

          return {
            id: index + 1,
            name: String(question.name || generateSlug(question.label) || `question_${index + 1}`),
            label: String(question.label || `Question ${index + 1}`),
            hint: question.hint ? String(question.hint) : null,
            type: normalizeLegacyType(question.type),
            options,
            required: Boolean(question.required)
          };
        })
      }
    };

    return window.jsyaml.dump(root, {
      lineWidth: 120,
      noRefs: true,
      sortKeys: false,
      quotingType: '"',
      forceQuotes: false
    });
  }

  window.GICYamlCodec = {
    CORE_QUESTION_TYPES,
    LEGACY_QUESTION_TYPES,
    QUESTION_TYPES,
    HUMAN_TYPE_LABELS,
    createBlankForm,
    extractMetadata,
    generateSlug,
    getTypeLabel,
    isAdvancedType,
    isOptionType,
    normalizeOption,
    normalizeOptionLabel,
    normalizeOptions,
    parse,
    sanitizeForm,
    serialize,
    stripCodeFences
  };
})();
