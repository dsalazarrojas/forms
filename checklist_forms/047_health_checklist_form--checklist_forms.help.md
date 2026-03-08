# health_checklist_form - Help Guide
## Purpose
This form is designed to collect patient health information for various aspects of their health, including medical history, symptoms, allergies, and test results. It's intended to be a comprehensive tool for healthcare providers to assess a patient's health status and identify potential areas of concern.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the appropriate answers for each field based on the patient's information. For fields with multiple options, select all relevant answers.
2. Provide additional comments for specific areas of concern, such as medical history or test results.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, `number`, `false`): Enter the patient's ID number for identification purposes.
* **Medical History** (`medical_history`, `select_multiple`, `false`):
	+ Choose 'Yes' if the patient has a medical history.
	+ Enter any relevant comments about the patient's medical history in the 'Medical History Comments' field.
* **Symptoms** (`symptoms`, `select_one`, `false`):
	+ Choose 'Yes' if the patient is experiencing any symptoms.
	+ Enter any relevant comments about the patient's symptoms in the 'Symptoms Comments' field.
* **Allergies** (`allergies`, `select_one`, `false`):
	+ Choose 'Yes' if the patient has any allergies.
	+ Enter any relevant comments about the patient's allergies in the 'Allergies Comments' field.
* **Medications** (`medications`, `select_multiple`, `false`):
	+ Choose 'Yes' for each medication the patient is taking.
	+ Enter any relevant comments about the patient's medications in the 'Medications Comments' field.
* **Medical Conditions** (`medical_conditions`, `select_multiple`, `false`):
	+ Choose 'Yes' for each medical condition the patient has.
	+ Enter any relevant comments about the patient's medical conditions in the 'Medical Conditions Comments' field.
* **Vital Signs** (`vital_signs`, `select_one`, `false`):
	+ Choose 'Yes' if the patient's vital signs are within the normal range.
	+ Enter any relevant comments about the patient's vital signs in the 'Vital Signs Comments' field.
* **Risk Factors** (`risk_factors`, `select_multiple`, `false`):
	+ Choose 'Yes' for each risk factor the patient has.
	+ Enter any relevant comments about the patient's risk factors in the 'Risk Factors Comments' field.
* **Test Results** (`test_results`, `select_multiple`, `false`):
	+ Choose 'Yes' for each test result the patient has.
	+ Enter any relevant comments about the patient's test results in the 'Test Results Comments' field.
* **Test Results Comments** (`test_results_comments`, `note`, `false`): Enter any additional comments about the patient's test results.
* **Medical History Comments** (`medical_history_comments`, `note`, `false`): Enter any additional comments about the patient's medical history.
* **Allergies Comments** (`allergies_comments`, `note`, `false`): Enter any additional comments about the patient's allergies.
* **Medical Conditions Comments** (`medical_conditions_comments`, `note`, `false`): Enter any additional comments about the patient's medical conditions.
* **Risk Factors Comments** (`risk_factors_comments`, `note`, `false`): Enter any additional comments about the patient's risk factors.
* **Patient Info Comments** (`patient_info_comments`, `note`, `false`): Enter any additional comments about the patient's information.
