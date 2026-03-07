# 📋 100,000+ Free AI-Generated YAML Form Templates

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE-FORMS)
[![Code License: MIT](https://img.shields.io/badge/Code%20License-MIT-blue.svg)](LICENSE-CODE)
[![Forms Count](https://img.shields.io/badge/Forms-84,000+-green.svg)](docs/forms-index.json)
[![Categories](https://img.shields.io/badge/Categories-418-orange.svg)](docs/index.html)

**AI-powered survey templates compatible with ODK Collect, Google Forms, Tally, Formbricks, and Cloudflare Workers.**

Browse the full library at: **[forms.gic.mx](https://forms.gic.mx)** 🌐

---

## 👉 [Browse All Categories →](https://forms.gic.mx/browse.html)

Explore 7,460+ templates across 40+ categories — filter, preview, and deploy instantly.

---

## 🚀 Quick Start

### Browse & Preview Forms

1. **Web Browser**: Visit [forms.gic.mx](https://forms.gic.mx) to browse by category, search, and preview forms interactively
2. **GitHub**: Each category folder contains YAML + XLSX files ready to use
3. **Preview**: Click any form to see an interactive preview with all question types

### Use with Your Platform

| Platform | How to Use |
|----------|------------|
| **ODK Collect** | Download `.xlsx` XLSForm file → Import into ODK Collect or GicCollect app |
| **Google Forms** | Use [GicCollectCreator](https://apps.apple.com/app/giccollectcreator) to convert YAML → Google Forms in one tap |
| **Tally** | Compatible with Tally forms - export via GicCollectCreator or manual copy |
| **Formbricks** | Use YAML as template for Formbricks surveys |
| **Cloudflare Workers** | Deploy with [OneTimeUseWebApp](https://github.com/dsalazarrojas/oneTimeUseWebApp) for serverless survey collection |

### Download a Form

Each form comes in two formats:
- **`.yaml`** - Human-readable source format (InputSchema)
- **`.xlsx`** - XLSForm format for ODK Collect and compatible tools

Example:
```bash
# Download from GitHub
git clone https://github.com/dsalazarrojas/forms.git
cd forms/feedback_surveys/

# Use the YAML file directly or convert to XLSForm
```

---

## 📁 Browse by Category

Forms are organized into **418 categories** covering every industry and use case:

### Popular Categories

| Category | Forms | Use Cases |
|----------|-------|-----------|
| **Healthcare** | 2,000+ | Patient intake, HIPAA forms, medical history |
| **Human Resources** | 2,000+ | Onboarding, performance reviews, employee feedback |
| **Education** | 1,500+ | Student surveys, course evaluations, enrollment |
| **Customer Satisfaction** | 1,200+ | NPS, CSAT, product feedback |
| **Event Feedback** | 800+ | Conference surveys, event registration |
| **Market Research** | 600+ | Consumer insights, product testing |

👉 **[Browse all categories →](docs/index.html)**

---

## 🛠 Use with Our Apps

This forms library is part of the **GIC Ecosystem** - a suite of tools for form creation, data collection, and analytics:

### GicCollectCreator (iOS)
**Convert YAML to Google Forms, Tally, Formbricks in one tap**

[![Download on the App Store](https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83)](https://apps.apple.com/app/giccollectcreator)

- Browse the full 100k form library in-app
- Preview forms before importing
- One-tap conversion to Google Forms, Tally, or Formbricks
- Edit forms before publishing

### GicCollect (iOS)
**Offline ODK-compatible data collection**

[![Download on the App Store](https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83)](https://apps.apple.com/app/giccollect)

- Download forms for offline field data collection
- ODK Collect compatible
- GPS, photos, signatures support
- Sync data when online

### OneTimeUseWebApp (macOS)
**Deploy Cloudflare Workers surveys**

[Download for macOS](https://github.com/dsalazarrojas/oneTimeUseWebApp)

- Select any form from the library
- Configure branding and webhooks
- Deploy to Cloudflare Workers in minutes
- Serverless survey collection at the edge

---

## 📊 Form Format: InputSchema

All forms use the **InputSchema** format - a rich, lossless YAML schema that preserves all metadata:

```yaml
# AI-Generated Form
# Not affiliated with, endorsed by, or derived from any form platform
# This form was created by AI using only public survey topic metadata
# (title + industry/category) as inspiration. It is an original adaptation
# and does not copy, extract, or use proprietary content from Jotform,
# Google Forms, ODK Collect, Tally, Formbricks, Cloudflare, or any other
# form creation, data collection, or survey platform.
# Released under CC BY 4.0. You are free to use, modify, and even sell
# forms derived from it - just give credit.
# Contact: form@gic.mx

inputSchema:
  type: object
  properties:
    title: Employee Onboarding Form
    pages:
      - id: 1
        name: full_name
        label: Full Name
        hint: Enter your legal full name
        type: text
        required: true
        options: []
      - id: 2
        name: department
        label: Department
        type: select_one
        options: ["Engineering", "Sales", "HR", "Finance"]
        required: true
      - id: 3
        name: start_date
        label: Start Date
        type: date
        required: true
```

### Supported Question Types

| Type | Description | Example |
|------|-------------|---------|
| `text` | Free text input | Name, comments |
| `email` | Email validation | Contact email |
| `number` | Numeric input | Age, quantity |
| `date` | Date picker | Birth date, event date |
| `time` | Time picker | Appointment time |
| `select_one` | Single choice (radio) | Yes/No, rating |
| `select_multiple` | Multiple choice (checkbox) | Select all that apply |
| `note` | Section header / instructions | Form instructions |

### Optional: Analysis Block

Forms can include an optional `analysis` block for GicInsights (planned analytics app):

```yaml
analysis:
  suggested_charts: ["pie", "bar"]
  key_metrics: ["satisfaction_score", "nps"]
  actionable_insights:
    - "If >30% rate 'Dissatisfied' → trigger follow-up workflow"
  export_templates: ["csv", "google-sheets"]
```

---

## ⚖️ Legal & Licensing

### Forms: CC BY 4.0

All form templates (YAML and XLSX files) are licensed under **Creative Commons Attribution 4.0 International**.

**You are free to:**
- ✅ Share - copy and redistribute the material in any medium or format
- ✅ Adapt - remix, transform, and build upon the material
- ✅ Use commercially - even sell forms derived from this library

**Under these terms:**
- **Attribution** - You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.

📄 [Read the full license →](LICENSE-FORMS)

### Code: MIT

All code, scripts, and software tools in this repository are licensed under the **MIT License**.

📄 [Read the full license →](LICENSE-CODE)

### ⚠️ Important Disclaimer

> **All forms in this repository are AI-generated original works** inspired by common public survey patterns and industry best practices.
>
> They are **NOT**:
> - Affiliated with, endorsed by, or derived from Jotform or any other form platform
> - Scraped or copied from any proprietary source
> - Subject to any platform's terms of service
>
> Only public metadata (survey titles + industry/category) was used as inspiration. Every form's content — questions, options, logic — is 100% AI-generated original work.

---

## 🌐 Preview & Interactive Features

### GitHub Pages Preview

Each form has a rich preview page at **forms.gic.mx** with:

1. **Live Interactive Preview** - Fill out the form in your browser
2. **Raw YAML Viewer** - Syntax-highlighted with copy button
3. **XLSForm Download** - One-click `.xlsx` download
4. **PDF Printable** - Print-optimized layout
5. **Deploy Buttons**:
   - 🚀 Open in GicCollectCreator (iOS)
   - ⚡ Deploy to Cloudflare (OneTimeUseWebApp)
   - 📥 Import to GicCollect (iOS)
6. **Embed Code** - Embed the preview on your own site

### Embed Example

```html
<iframe 
  src="https://forms.gic.mx/preview.html?form=feedback_surveys/001_customer_feedback_survey--feedback_surveys.yaml&embed=true"
  width="100%" 
  height="600"
  frameborder="0">
</iframe>
```

---

## 📈 Statistics

| Metric | Count |
|--------|-------|
| **Total Forms** | 84,000+ |
| **Categories** | 418 |
| **Languages** | English, Spanish (more coming) |
| **XLSForm Files** | 84,000+ |
| **Last Updated** | 2026-02-28 |

### Top 10 Categories by Form Count

| Category | Forms |
|----------|-------|
| Healthcare | 2,052 |
| Human Resources | 2,008 |
| Education | 1,876 |
| Customer Satisfaction | 1,234 |
| Event Feedback | 987 |
| Market Research | 876 |
| Employee Engagement | 765 |
| Nonprofit | 654 |
| Technology | 543 |
| Social Surveys | 432 |

📊 **[View full category breakdown →](docs/forms-index.json)**

---

## 🤝 Contributing

We welcome contributions!

### Request a Form

Need a form that doesn't exist? [Open an issue](https://github.com/dsalazarrojas/forms/issues/new?template=request-a-form.md) with:
- Form title and purpose
- Target industry/use case
- Key questions you need

### Submit a Form

Created a great form? Submit it via pull request:
1. Fork the repository
2. Add your form to the appropriate category folder
3. Ensure it follows InputSchema format
4. Include both `.yaml` and `.xlsx` if possible
5. Add the disclaimer comment block at the top

### Report Issues

Found a broken form or validation error? [Open an issue](https://github.com/dsalazarrojas/forms/issues).

---

## 📞 Support & Contact

### Community Support

- **GitHub Issues** - Bug reports, feature requests, form requests
- **ODK Forum** - General ODK questions, form design tips
- **Discussions** - Community discussions (coming soon)

### Professional Services

Need custom forms or a data collection setup?

📧 **Email**: form@gic.mx  
💼 **Consulting**: Custom form packs, enterprise deployments, training

### Premium Form Packs (Coming Soon)

Support the project and get exclusive form packs:

| Pack | Price | Forms |
|------|-------|-------|
| **Healthcare Pack** | $29 | 200 HIPAA-friendly forms |
| **HR & People Ops** | $19 | 150 HR forms |
| **NGO / Field Research** | $24 | 100 ODK-optimized forms |

👉 **[Become a Sponsor →](https://github.com/sponsors/dsalazarrojas)**

---

## 🔗 Related Projects

This forms library is part of the GIC Ecosystem:

- **[GicCollectCreator](https://apps.apple.com/app/giccollectcreator)** - iOS app to convert YAML to Google Forms, Tally, Formbricks
- **[GicCollect](https://apps.apple.com/app/giccollect)** - iOS offline ODK data collection
- **[OneTimeUseWebApp](https://github.com/dsalazarrojas/oneTimeUseWebApp)** - macOS app to deploy Cloudflare Workers surveys
- **[gic.mx](https://gic.mx)** - Central hub for all GIC apps and services

---

## 📝 Changelog

### 2026-02-28
- ✅ 84,000+ forms generated and synced
- ✅ All forms include comprehensive legal disclaimer
- ✅ XLSForm files generated for all forms
- ✅ GitHub Pages previewer launched at forms.gic.mx

### 2026-02-20
- ✅ 500+ initial forms synced to repository
- ✅ InputSchema format standardized across all forms
- ✅ README and documentation created

### Coming Soon
- 🔄 Spanish translation of top 5,000 forms
- 🔄 Interactive form preview on GitHub Pages
- 🔄 Search and filter improvements
- 🔄 Premium form packs launch

---

## 🙏 Acknowledgments

- **ODK Community** - For the XLSForm standard and open data collection tools
- **Creative Commons** - For enabling open sharing of creative works
- **Cloudflare** - For serverless deployment options via Workers

---

<div align="center">

**Built with ❤️ by Daniel Salazar Rojas**

[forms.gic.mx](https://forms.gic.mx) • [gic.mx](https://gic.mx) • [GitHub](https://github.com/dsalazarrojas)

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](LICENSE-FORMS)
[![Code License: MIT](https://img.shields.io/badge/Code%20License-MIT-blue.svg)](LICENSE-CODE)

</div>

---

# 📋 100,000+ Plantillas YAML Gratuitas Generadas con IA

[![Licencia: CC BY 4.0](https://img.shields.io/badge/Licencia-CC%20BY%204.0-lightgrey.svg)](LICENSE-FORMS)
[![Código: MIT](https://img.shields.io/badge/C%C3%B3digo-MIT-blue.svg)](LICENSE-CODE)
[![Formularios](https://img.shields.io/badge/Formularios-84,000+-green.svg)](docs/forms-index.json)

**Plantillas de encuestas impulsadas por IA, compatibles con ODK Collect, Google Forms, Tally, Formbricks y Cloudflare Workers.**

Explora la biblioteca completa en: **[forms.gic.mx](https://forms.gic.mx)** 🌐

---

## 🚀 Inicio Rápido

### Explorar y Previsualizar Formularios

1. **Navegador Web**: Visita [forms.gic.mx](https://forms.gic.mx) para explorar por categoría, buscar y previsualizar formularios interactivamente
2. **GitHub**: Cada carpeta de categoría contiene archivos YAML + XLSX listos para usar
3. **Previsualizar**: Haz clic en cualquier formulario para ver una vista previa interactiva

### Usar con Tu Plataforma

| Plataforma | Cómo Usar |
|------------|-----------|
| **ODK Collect** | Descarga el archivo `.xlsx` XLSForm → Importa en ODK Collect o la app GicCollect |
| **Google Forms** | Usa [GicCollectCreator](https://apps.apple.com/app/giccollectcreator) para convertir YAML → Google Forms en un toque |
| **Tally** | Compatible con formularios Tally - exporta vía GicCollectCreator o copia manual |
| **Formbricks** | Usa YAML como plantilla para encuestas de Formbricks |
| **Cloudflare Workers** | Despliega con [OneTimeUseWebApp](https://github.com/dsalazarrojas/oneTimeUseWebApp) para recopilación serverless |

### Descargar un Formulario

Cada formulario viene en dos formatos:
- **`.yaml`** - Formato fuente legible por humanos (InputSchema)
- **`.xlsx`** - Formato XLSForm para ODK Collect y herramientas compatibles

Ejemplo:
```bash
# Descargar desde GitHub
git clone https://github.com/dsalazarrojas/forms.git
cd forms/feedback_surveys/

# Usar el archivo YAML directamente o convertir a XLSForm
```

---

## 📁 Explorar por Categoría

Los formularios están organizados en **418 categorías** que cubren todas las industrias y casos de uso:

### Categorías Populares

| Categoría | Formularios | Casos de Uso |
|-----------|-------------|--------------|
| **Salud** | 2,000+ | Admisión de pacientes, formularios HIPAA, historial médico |
| **Recursos Humanos** | 2,000+ | Incorporación, evaluaciones de desempeño, retroalimentación |
| **Educación** | 1,500+ | Encuestas estudiantiles, evaluaciones de cursos, inscripción |
| **Satisfacción del Cliente** | 1,200+ | NPS, CSAT, retroalimentación de productos |
| **Retroalimentación de Eventos** | 800+ | Encuestas de conferencias, registro de eventos |
| **Investigación de Mercados** | 600+ | Insights del consumidor, pruebas de productos |

👉 **[Explorar todas las categorías →](docs/index.html)**

---

## ⚖️ Legal y Licencias

### Formularios: CC BY 4.0

Todas las plantillas de formularios (archivos YAML y XLSX) tienen licencia **Creative Commons Atribución 4.0 Internacional**.

**Eres libre de:**
- ✅ Compartir - copiar y redistribuir el material en cualquier medio o formato
- ✅ Adaptar - remezclar, transformar y construir sobre el material
- ✅ Uso comercial - incluso vender formularios derivados de esta biblioteca

**Bajo estos términos:**
- **Atribución** - Debes dar el crédito apropiado, proporcionar un enlace a la licencia e indicar si se realizaron cambios.

📄 [Leer la licencia completa →](LICENSE-FORMS)

### Código: MIT

Todo el código, scripts y herramientas de software en este repositorio tienen licencia **MIT**.

📄 [Leer la licencia completa →](LICENSE-CODE)

### ⚠️ Descargo de Responsabilidad Importante

> **Todos los formularios en este repositorio son obras originales generadas por IA**, inspiradas en patrones comunes de encuestas públicas y mejores prácticas de la industria.
>
> **NO están**:
> - Afiliados con, respaldados por, o derivados de Jotform o cualquier otra plataforma
> - Extraídos o copiados de fuentes propietarias
> - Sujetos a los términos de servicio de ninguna plataforma
>
> Solo se usaron metadatos públicos (títulos de encuestas + industria/categoría) como inspiración. El contenido de cada formulario — preguntas, opciones, lógica — es 100% obra original generada por IA.

---

## 📞 Soporte y Contacto

### Soporte Comunitario

- **Issues de GitHub** - Reportes de errores, solicitudes de funciones, solicitudes de formularios
- **Foro ODK** - Preguntas generales sobre ODK, consejos de diseño de formularios

### Servicios Profesionales

¿Necesitas formularios personalizados o configuración de recopilación de datos?

📧 **Email**: form@gic.mx  
💼 **Consultoría**: Paquetes de formularios personalizados, implementaciones empresariales, capacitación

---

<div align="center">

**Creado con ❤️ por Daniel Salazar Rojas**

[forms.gic.mx](https://forms.gic.mx) • [gic.mx](https://gic.mx) • [GitHub](https://github.com/dsalazarrojas)

</div>
