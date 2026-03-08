# Intensive Care Patient Assessment Form - Help Guide
## Purpose

The Intensive Care Patient Assessment Form is a tool used by healthcare professionals to quickly and accurately assess a patient's condition in an intensive care unit. This form is designed to gather essential information about the patient, including their medical history, allergies, and medical devices.

## How To Complete This Form

1. Review the patient's previous medical records and assessments to ensure accuracy and avoid duplication of effort.
2. Complete each section thoroughly and accurately.
3. Answer all required questions.
4. Select "Yes" or "No" for select_multiple fields.
5. Provide brief descriptions for text fields.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
* **Birth Date** (`birth_date`, date, required): Enter the patient's date of birth.
* **Medical History** (`medical_history`, text, optional): Provide a brief description of the patient's medical history.
* **Medical Conditions** (`medical_conditions`, select_multiple, required): List all medical conditions the patient has (e.g., "Yes" for diabetes, "No" for none).
* **Allergies** (`allergies`, text, optional): List all known allergies.
* **Medications** (`medications`, text, optional): List all current medications.
* **Medical History Notes** (`medical_history_notes`, note, optional): Provide additional notes about the patient's medical history.
* **Vital Signs** (`vital_signs`, select_multiple, required): List all vital signs the patient has (e.g., "Yes" for high blood pressure, "No" for normal).
* **Medical Devices** (`medical_devices`, select_multiple, required): List all medical devices the patient has (e.g., "Yes" for dialysis machine, "No" for none).
* **Medical Devices Location** (`medical_devices_location`, text, optional): Specify the location of the medical devices.
* **Medical Devices Status** (`medical_devices_status`, select_multiple, required): List the status of each medical device (e.g., "Active" for in use, "Inactive" for not in use).
* **Medical Devices Frequency** (`medical_devices_frequency`, select_multiple, required): List how often the medical devices are used (e.g., "Yes" for daily, "No" for never).
* **Medical Devices Last Used** (`medical_devices_last_used`, select_multiple, required): Specify when the medical devices were last used (e.g., "Yes" for yesterday, "No" for never).
* **Medical Devices Next Used** (`medical_devices_next_used`, select_multiple, required): Specify when the medical devices will next be used (e.g., "Yes" for tomorrow, "No" for never).
* **Laboratory Results** (`laboratory_results`, text, optional): List all laboratory results.
* **Laboratory Results Location** (`laboratory_results_location`, text, optional): Specify the location of the laboratory results.
* **Laboratory Results Status** (`laboratory_results_status`, select_multiple, required): List the status of each laboratory result (e.g., "Active" for available, "Inactive" for not available).
* **Laboratory Results Frequency** (`laboratory_results_frequency`, select_multiple, required): List how often the laboratory results are used (e.g., "Yes" for daily, "No" for never).
* **Laboratory Results Last Used** (`laboratory_results_last_used`, select_multiple, required): Specify when the laboratory results were last used (e.g., "Yes" for yesterday, "No" for never).
* **Laboratory Results Next Used** (`laboratory_results_next_used`, select_multiple, required): Specify when the laboratory results will next be used (e.g., "Yes" for tomorrow, "No" for never).
* **Medication List** (`medication_list`, text, optional): List all medications.
* **Medication List Location** (`medication_list_location`, text, optional): Specify the location of the medication list.
* **Medication List Status** (`medication_list_status`, select_multiple, required): List the status of each medication (e.g., "Active" for in use, "Inactive" for not in use).
* **Medication List Frequency** (`medication_list_frequency`, select_multiple, required): List how often the medication list is used (e.g., "Yes" for daily, "No" for never).
* **Medication List Last Used** (`medication_list_last_used`, select_multiple, required): Specify when the medication list was last used (e.g., "Yes" for yesterday, "No" for never).
* **Medication List Next Used** (`medication_list_next_used`, select_multiple, required): Specify when the medication list will next be used (e.g., "Yes" for tomorrow, "No" for never).
