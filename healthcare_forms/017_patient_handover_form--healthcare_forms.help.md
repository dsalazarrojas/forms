# Patient Handover Form - Help Guide
## Purpose
The Patient Handover Form is a crucial document for transferring patients to another healthcare provider or facility. It ensures that the patient's medical information and care instructions are accurately and completely communicated, reducing errors and ensuring continuity of care.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the patient's medical chart and gather all necessary information.
2. Complete each section of the form, ensuring you have accurate and up-to-date information for each field.
3. Be sure to sign and date the form once completed.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's name as it appears on their medical record or ID band.
* **Transfer Date** (`transfer_date`, date, required): Enter the date and time of the patient's transfer.
* **Patient Phone** (`patient_phone`, text, required): Enter the patient's phone number or contact information.
* **Patient Email** (`patient_email`, email, required): Enter the patient's email address (if applicable).
* **Emergency Contact** (`emergency_contact`, text, required): Enter the name and contact information of the patient's emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of the patient's emergency contact.
* **Emergency Contact Email** (`emergency_contact_email`, text, required): Enter the email address of the patient's emergency contact.
* **Next of Kin** (`next_of_kin`, text, required): Enter the name and contact information of the patient's next of kin (if applicable).
* **Next of Kin Phone** (`next_of_kin_phone`, text, required): Enter the phone number of the patient's next of kin.
* **Next of Kin Email** (`next_of_kin_email`, text, required): Enter the email address of the patient's next of kin (if applicable).
* **Medical Chart** (`medical_chart`, select_one, required): Select the relevant medical chart section (e.g., Active Medications, Allergies, Surgical History).
* **Active Medications** (`medication_list`, select_multiple, required): Select all active medications the patient is currently taking.
* **Vital Signs** (`vital_signs`, number, required): Enter the patient's current vital signs (e.g., temperature, blood pressure, pulse).
* **Lab Results** (`lab_results`, number, required): Enter any relevant lab results (e.g., blood tests, cultures).
* **Patient History** (`patient_history`, time, required): Enter a brief summary of the patient's medical history.
* **Care Plan** (`patient_care_plan`, select_one, required): Indicate whether a care plan is in place.
* **Notes** (`notes`, note, required): Enter any additional relevant information about the patient's care.
* **Hospital** (`hospital`, text, required): Enter the name of the healthcare facility or hospital transferring the patient.
* **Physician Name** (`physician_name`, text, required): Enter the name of the attending physician.
* **Physician Signature** (`physician_signature`, text, required): Sign and date the form as the attending physician.
* **Nurse Signature** (`nurse_signature`, text, required): Sign and date the form as the transferring nurse.
* **Transfer Time** (`transfer_time`, time, required): Enter the time of the patient's transfer.
* **Additional Notes** (`notes_2`, note, required): Enter any additional information about the patient's care.
* **Medication List** (`medication_list`, select_multiple, required): Select all medications the patient should take or not take upon transfer.
* **Surgical History** (`medication_list`, select_multiple, required): Select the relevant surgical history (e.g., procedures, surgeries, implants).
