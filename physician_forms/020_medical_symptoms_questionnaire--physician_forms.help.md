# Medical Symptoms Questionnaire - Help Guide
## Purpose
This form is designed to collect information about a patient's medical condition, treatment, and symptoms to help healthcare professionals better understand their needs.

## How To Complete This Form
To complete this form, follow these steps:

1. Review each section carefully and ensure you've answered all relevant questions.
2. Fill out each section in order, from the first page to the last.
3. Provide as much information as possible about your medical condition, symptoms, and treatment.
4. If you're unsure about any question, ask a healthcare professional for guidance.

## Field-by-Field Explanation

### Main Page (Page 1)
* **Medical Condition** (`medical_condition`, `select_one`, required: false): Select the condition that best describes your current medical issue.
* **Allergy** (`allergy`, `select_multiple`, required: false): List any allergies you may have, if applicable.
* **Medication** (`medication`, `text`, required: false): If you're taking any medications, please list them here.
* **Medical History** (`medical_history`, `text`, required: false): Share any relevant medical history, including previous diagnoses, surgeries, or treatments.
* **Medical Test Results** (`medical_test_results`, `text`, required: false): If you've received any recent medical test results, please share them.

### Additional Information (Page 2)
* **Medical Test Ordered** (`medical_test_ordered`, `text`, required: false): If you've ordered any medical tests, please list them here.
* **Medical Test Results Interpreted** (`medical_test_results_interpreted`, `text`, required: false): If you've received any test results interpretations, please share them.
* **Medical Symptoms** (`medical_symptoms`, `text`, required: false): Describe your current symptoms, if any.
* **Medical Prognosis** (`medical_prognosis`, `text`, required: false): Share any information about your medical prognosis, if available.
* **Medical Diagnosis** (`medical_diagnosis`, `text`, required: false): If you've received a diagnosis from a healthcare professional, please share it.
* **Medical Treatment** (`medical_treatment`, `text`, required: false): If you're currently undergoing any medical treatment, please list it.
* **Patient Instructions** (`patient_instructions`, `text`, required: false): If you have any additional instructions or questions for your healthcare professional, please share them here.
