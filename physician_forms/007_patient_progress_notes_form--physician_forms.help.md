# Patient Progress Notes Form - Help Guide
## Purpose
This form is used to capture and document a patient's progress, including their health status, vital signs, medical history, and other relevant information. It is essential for healthcare providers to have accurate and up-to-date information on the patient's condition to make informed decisions about their care.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure that all required fields are filled out accurately and completely.
2. For each section, provide the most up-to-date information available.
3. Use the provided options for vital signs, medication sensitivities, and patient status.
4. Enter the patient's name correctly to associate the form with the correct patient.

## Field-by-Field Explanation

* **Patient Health Status** (`patient_health_status`, text, required: false): Briefly describe the patient's current health status.
* **Vital Signs** (`vital_signs`, select_multiple, required: true): Select all relevant vital signs that apply to the patient, such as Temperature (F), Blood Pressure, Pulse, and Respiratory Rate.
* **Medication Allergies** (`medication_allergies`, text, required: false): List any medication allergies the patient has, such as Penicillins, NSAIDs, and Cephalosporins.
* **Medication Sensitivities** (`medication_sensitivities`, select_multiple, required: false): Select any medication sensitivities the patient has from the provided options.
* **Patient Medications** (`patient_medications`, text, required: false): List any current medications the patient is taking.
* **Medical History** (`medical_history`, text, required: false): Describe the patient's medical history, including any relevant medical conditions or treatments.
* **Surgical History** (`surgical_history`, text, required: false): Describe any surgical history the patient has, including any procedures or complications.
* **Family Medical History** (`family_medical_history`, text, required: false): Describe any relevant family medical history.
* **Patient Status** (`patient_status`, select_one, required: true): Select the patient's current status from the provided options, which include Active, Stable, Stable but with concerns, Stable with concerns, Stable but not well, Stable and unstable, and Unstable.
* **Provider Comments** (`provider_comments`, text, required: false): Add any additional comments or notes from the healthcare provider.
* **Patient Name** (`patient_name`, text, required: false): Enter the patient's name to associate the form with the correct patient.

**Tips**

* Use clear and concise language when filling out the form.
* Ensure that each section is filled out completely and accurately.
* Double-check the patient's name to avoid errors.
* Review and update the form regularly to reflect the patient's changing condition.
