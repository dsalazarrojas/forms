# Medical Report Form - Help Guide
## Purpose

This form is used to collect medical information from patients, including demographic details, medical conditions, treatment specifics, and appointment scheduling data. It's crucial to fill out the form accurately to ensure the best possible care and treatment plan for the patient.

## How To Complete This Form

1. Start by providing the patient's name on the first page.
2. Enter the patient's date of birth in the format `YYYY-MM-DD`.
3. Describe the patient's medical condition in the text box provided.
4. If applicable, provide the details of the treatment the patient is undergoing in the text box.
5. Indicate if the patient is taking any medications by selecting the corresponding option.
6. Provide any relevant notes from the doctor in the text box.
7. Choose the patient's current status (Active or Inactive) in the dropdown menu.
8. Enter the date of the next follow-up visit, if scheduled.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required: false): Enter the patient's full name as it appears on their identification.
*   **Date of Birth** (`date_of_birth`, `number`, required: false): Enter the patient's date of birth in the `YYYY-MM-DD` format.
*   **Medical Condition** (`medical_condition`, `text`, required: false): Describe the patient's current medical condition, including any symptoms, allergies, or other relevant information.
*   **Treatment Details** (`treatment_details`, `text`, required: false): If the patient is undergoing any treatment, describe the specifics of the treatment in this text box.
*   **Medications** (`medications`, `select_multiple`, required: false): Check all applicable options to indicate if the patient is taking any medications.
*   **Doctor's Notes** (`doctor_notes`, `text`, required: false): Enter any comments or notes from the doctor in this text box.
*   **Patient Status** (`patient_status`, `select_one`, required: false): Choose the patient's current status from the dropdown menu (Active or Inactive).
*   **Follow-up Visit** (`follow_up_visit`, `date`, required: false): Enter the date of the next follow-up visit, if scheduled.

Note: The fields marked as `required: false` are optional, but it's recommended to fill them out for a more comprehensive patient profile.
