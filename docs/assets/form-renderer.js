/**
 * Form Renderer for GitHub Pages
 * Renders InputSchema YAML as interactive HTML forms
 */

class FormRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    render(formData) {
        const props = formData.inputSchema?.properties || {};
        const pages = props.pages || [];

        return pages.map((page, index) => this.renderField(page, index)).join('');
    }

    renderField(field, index) {
        const type = field.type || 'text';
        const label = field.label || field.name || `Question ${index + 1}`;
        const hint = field.hint || '';
        const required = field.required ? 'required' : '';
        const requiredMarker = field.required ? '<span class="text-red-500">*</span>' : '';

        // Handle note fields (section headers)
        if (type === 'note') {
            return `<div class="section-header bg-gray-50 border-l-4 border-indigo-500 p-4 my-4">
                <h3 class="text-lg font-semibold text-gray-800">${label}</h3>
                ${hint ? `<p class="text-gray-600 mt-2">${hint}</p>` : ''}
            </div>`;
        }

        // Render based on type
        let inputHtml = '';

        switch (type) {
            case 'select_one':
                const options = field.options || [];
                inputHtml = `<select class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" ${required}>
                    <option value="">Select an option</option>
                    ${options.map(opt => `<option value="${this.escapeHtml(opt)}">${this.escapeHtml(opt)}</option>`).join('')}
                </select>`;
                break;

            case 'select_multiple':
                const multiOptions = field.options || [];
                inputHtml = `<div class="space-y-2">
                    ${multiOptions.map((opt, i) => `
                        <label class="flex items-center">
                            <input type="checkbox" name="${this.escapeHtml(field.name)}" value="${this.escapeHtml(opt)}"
                                   class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                            <span class="ml-2">${this.escapeHtml(opt)}</span>
                        </label>
                    `).join('')}
                </div>`;
                break;

            default:
                const inputType = type === 'text' || type === 'email' || type === 'number' || type === 'date' || type === 'time' ? type : 'text';
                inputHtml = `<input type="${inputType}" class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" ${required}>`;
        }

        return `<div class="form-field mb-6">
            <label class="block text-gray-800 font-medium mb-2">
                ${this.escapeHtml(label)}
                ${requiredMarker}
            </label>
            ${inputHtml}
            ${hint ? `<p class="text-sm text-gray-600 mt-2">${this.escapeHtml(hint)}</p>` : ''}
        </div>`;
    }

    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Export for use in preview.html
window.FormRenderer = FormRenderer;
