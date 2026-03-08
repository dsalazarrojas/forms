# # Nurse Shift Report Checklist - Help Guide
## Purpose
The Nurse Shift Report Checklist is a form used to document patient care during a shift. It gathers information on patient identification, vital signs, medications administered, and other relevant details. The purpose of this form is to provide accurate and comprehensive documentation of patient care, ensuring continuity of care and patient safety.

## How To Complete This Form
- To complete this form, start by identifying the patient's information, such as their name, date of birth, and age.
- Next, record the patient's vital signs, including blood pressure and oxygen saturation levels.
- Then, document any medications administered during the shift, including the type and dosage.
- Finally, record any lab results, patient status, and comments about the patient's condition.

## Field-by-Field Explanation

* **Patient Identification** (`patient_name`, `text`, required): Enter the patient's name to ensure accurate identification.
* **Date of Birth** (`patient_dob`, `date`, required): Record the patient's date of birth to establish their age.
* **Age** (`patient_age`, `text`, required): Enter the patient's age to ensure accurate documentation.
* **Shift Date** (`shift_date`, `date`, required): Record the date of the shift to document the time period of care.
* **Shift Start Time** (`shift_start_time`, `time`, required): Enter the start time of the shift to mark the beginning of care.
* **Shift End Time** (`shift_end_time`, `time`, required): Record the end time of the shift to mark the conclusion of care.
* **Vital Signs** (`vital_signs_2`, `text`, required): Record the patient's blood pressure reading.
* **Oxygen Saturation** (`blood_oxygen_saturation`, `select_one`, required): Select the oxygen saturation level to document the patient's oxygen levels.
* **Patient Name 2** (`patient_name_2`, `text`, required): Enter the patient's name to verify accurate identification.
* **Patient Status 2** (`patient_status_2`, `select_one`, required): Select the patient's status to document their condition.
* **Lab Results 3** (`lab_results_3`, `select_one`, required): Select the lab results to document the patient's lab results.
* **Medications Administered 2** (`medication_administered_2`, `select_multiple`, required): Select any medications administered during the shift.
* **Comments 2** (`comments_2`, `text`, required): Record any comments or additional information about the patient's condition.
* **Patient Signature** (`patient_signature`, `select_one`, required): Select "Signature" if the patient signed the form, or "Other" if they did not.
* **Nurse Signature** (`nurse_signature`, `time`, required): Record the nurse's signature and time to confirm completion of the form.

## Tips
- Ensure accurate and complete documentation of patient care during the shift.
- Review and update the form as necessary to reflect any changes in the patient's condition.
- Store the form in the patient's electronic medical record for future reference.
