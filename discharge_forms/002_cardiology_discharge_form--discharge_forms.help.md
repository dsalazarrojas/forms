# Cardiology Discharge Form - Help Guide
## Purpose
The Cardiology Discharge Form is used to document the final steps and instructions for a patient's discharge from the hospital. This form is essential for ensuring a smooth and safe transition back to home care for patients with a cardiac condition.

## How To Complete This Form
1. Review the form carefully to understand each section and its purpose.
2. Ensure all required fields are filled out completely and accurately.
3. For each field, follow the instructions and guidelines provided.
4. If unsure about any information, please reach out to the cardiology team for clarification.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_full_name`, `text`, required): Enter the patient's full name as it appears on their identification documents.
* **Medical Record Number** (`medical_record_number`, `text`, required): Enter the patient's unique medical record number.
* **Date of Admission** (`date_of_admission`, `date`, required): Enter the date the patient was admitted to the hospital.
* **Date of Discharge** (`date_of_discharge`, `date`, required): Enter the date the patient is being discharged from the hospital.
* **Primary Diagnosis** (`primary_diagnosis`, `text`, required): Enter the main cardiac diagnosis or reason for the patient's hospitalization.
* **Secondary Diagnoses** (`secondary_diagnoses`, `text`, optional): List any additional diagnoses or conditions that may impact the patient's care.
* **Procedures Performed** (`procedures_performed`, `select_multiple`, required): Select all procedures performed during the patient's hospitalization, such as cardiac catheterization, angioplasty, etc.
* **Discharge Medications** (`discharge_medications`, `text`, required): List all medications the patient is taking, including dosage and frequency.
* **Medication Changes** (`medication_changes`, `text`, required): Describe any new, stopped, or adjusted medications the patient will be taking upon discharge.
* **Activity Restrictions** (`activity_restrictions`, `select_multiple`, required): Select all activity restrictions the patient must follow, such as no lifting over 10 lbs, no driving, etc.
* **Wound Care Instructions** (`wound_care_instructions`, `text`, optional): If applicable, provide wound care instructions for the patient.
* **Dietary Recommendations** (`dietary_recommendations`, `select_multiple`, required): Select all dietary recommendations the patient should follow, such as low-sodium, low-fat, etc.
* **Follow-up Appointments Scheduled** (`follow_up_appointments`, `text`, required): List appointment dates and providers for the patient's follow-up care.
* **Warning Signs to Watch For** (`warning_signs`, `select_multiple`, required): Select all warning signs or symptoms the patient should watch for, such as chest pain, shortness of breath, etc.
* **Emergency Instructions** (`emergency_instructions`, `text`, required): Provide instructions on when to seek immediate care if the patient experiences any of the selected warning signs.
* **Primary Care Physician Name** (`primary_care_physician`, `text`, required): Enter the name of the patient's primary care physician.
* **Primary Care Physician Contact** (`pcp_contact`, `text`, required): Enter the phone number of the patient's primary care physician.
* **Cardiologist Name** (`cardiologist_name`, `text`, required): Enter the name of the cardiologist who treated the patient.
* **Cardiologist Contact** (`cardiologist_contact`, `text`, required): Enter the phone number of the cardiologist who treated the patient.
* **Patient Understanding** (`patient_understanding`, `select_one`, required): Confirm the patient's understanding of the instructions and discharge information.
* **Condition at Discharge** (`discharge_condition`, `select_one`, required): Select the patient's condition at discharge, such as stable, improved, etc.
* **Additional Discharge Notes** (`additional_notes`, `text`, optional): Provide any other important information about the patient's care.

## Tips
* Double-check all information for accuracy before submitting the form.
* Ensure all required fields are filled out completely.
* If unsure about any information, please reach out to the cardiology team for clarification.
* Keep a copy of the completed form for the patient's file.
