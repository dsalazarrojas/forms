# pediatric_discharge_form - Help Guide
## Purpose
The pediatric discharge form is a document used to record the details of a pediatric patient's discharge from the hospital, including the discharge date, time, and parent's contact information. It ensures that the necessary information is properly documented for follow-up care and future reference.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the discharge date and time of the patient's visit.
2. Enter the patient's name (if required).
3. Enter the parent's name.
4. Enter the parent's phone number.
5. Add any additional notes about the discharge process, if necessary.
6. Provide information about follow-up care instructions (e.g., "Yes" or "No").
7. Enter any relevant allergies or medication lists.

## Field-by-Field Explanation

* **Discharge Date** (`discharge_date`, date, required): Enter the date the patient was discharged from the hospital.
* **Discharge Time** (`discharge_time`, time, required): Enter the time the patient was discharged from the hospital.
* **Patient Name** (`patient_name`, text, optional): Enter the name of the patient (optional but recommended for accurate records).
* **Parent Name** (`parent_name`, text, required): Enter the name of the parent or guardian of the patient.
* **Parent Phone** (`patient_phone`, text, required): Enter the phone number of the parent or guardian.
* **Additional Notes** (`discharge_date_note`, note, optional): Add any additional notes or comments about the discharge process.
* **Healthcare Provider Notes** (`healthcare_provider_notes`, note, optional): Add any additional notes or comments from the healthcare provider.
* **Follow-up Care** (`follow_up_care`, select_multiple, required): Select whether the patient needs follow-up care ("Yes" or "No").
* **Allergies** (`patient_allergies`, text, optional): Enter any allergies or sensitivities the patient has (if applicable).
* **Medication List** (`medication_list`, text, optional): List the patient's current medication regimen (if applicable). 

## Tips
* Ensure that all required fields are completed accurately and thoroughly.
* Use clear and concise language when adding notes or comments.
* If the patient needs follow-up care, ensure that the instructions are provided clearly and concisely.
* Double-check the patient's allergies and medication list for accuracy.
