# medication_reconciliation_form - Help Guide
## Purpose
The "medication_reconciliation_form" is a tool designed to gather information about a patient's medical history and treatment regimen. This form serves as an essential communication tool between healthcare providers and patients, helping healthcare teams understand a patient's overall health status.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the patient's medical history, including any known allergies, current medications, and medical conditions.
2. Document the patient's social history, including their living situation, employment, and other relevant factors that might impact their health.
3. Select all applicable medications from the provided options.
4. Indicate whether the patient has any allergies.
5. Report any medical conditions relevant to the patient's health status.

## Field-by-Field Explanation
### Patient Info
* **Patient Info** (`patient_info`, text, required: false): This section is used to collect basic patient information. Please enter the patient's name, date of birth, and any other relevant details.

### Medical History
* **Medical History** (`medical_history`, text, required: false): In this field, please provide a brief overview of the patient's medical history, including any past illnesses, surgeries, or other relevant medical events.

### Medications
* **Medications** (`medications`, select multiple, required: false): Choose all medications that the patient is currently taking, using the provided options.

### Allergies
* **Allergies** (`allergies`, select one, required: false): Indicate whether the patient has any known allergies, selecting "Yes" or "No" from the provided options.

### Medical Conditions
* **Medical Conditions** (`medical_conditions`, text, required: false): List any current or relevant medical conditions affecting the patient's health status.

### Social History
* **Social History** (`social_history`, text, required: false): Document the patient's living situation, employment, and other relevant factors that might impact their health.
