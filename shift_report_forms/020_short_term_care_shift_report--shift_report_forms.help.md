<thinking>...</thinking>

# short_term_care_shift_report - Help Guide
## Purpose
The short_term_care_shift_report form is used to document the details of a shift report, including shift start and end times, patient information, medications administered, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the shift details in the `shift_details` field.
2. Enter the handover notes in the `handover_notes` field.
3. Enter the patient's ID in the `patient_id` field.
4. Enter the patient's first name in the `patient_first_name` field.
5. Enter the patient's last name in the `patient_last_name` field.
6. Enter the patient's date of birth in the `patient_dob` field in the format `YYYY-MM-DD`.
7. Enter the shift start time in the `shift_start_time` field.
8. Enter the shift end time in the `shift_end_time` field.
9. Enter the shift duration in the `shift_duration` field, if applicable.
10. Enter any notes about the shift in the `notes` field.
11. Enter the staff ID in the `staff_id` field.
12. Enter the staff name in the `staff_name` field.
13. Enter the handover to staff name in the `handover_to` field.
14. Enter the handover from staff name in the `handover_from` field.
15. Enter any medications administered in the `medications_administered` field.
16. Enter any medications refused in the `medications_refused` field.
17. Enter the dose of medications administered in the `medications_administered_dose` field.
18. Enter the dose of medications refused in the `medications_refused_dose` field.
19. Enter any allergies in the `allergies` field.
20. Enter any medical conditions in the `medical_conditions` field.
21. Enter a list of medical conditions in the `medical_condition_list` field.
22. Select the status of the medical condition in the `medical_condition_status` field.
23. Select the status of the shift in the `shift_status` field.

## Field-by-Field Explanation
* **shift_details** (`shift_details`, text, optional): Enter a brief description of the shift.
* **handover_notes** (`handover_notes`, text, optional): Enter any important notes about handover.
* **patient_id** (`patient_id`, number, optional): Enter the patient's ID number.
* **patient_first_name** (`patient_first_name`, text, optional): Enter the patient's first name.
* **patient_last_name** (`patient_last_name`, text, optional): Enter the patient's last name.
* **patient_dob** (`patient_dob`, date, optional): Enter the patient's date of birth in the format `YYYY-MM-DD`.
* **shift_start_time** (`shift_start_time`, time, optional): Enter the shift start time.
* **shift_end_time** (`shift_end_time`, time, optional): Enter the shift end time.
* **shift_duration** (`shift_duration`, number, optional): Enter the duration of the shift.
* **notes** (`notes`, text, optional): Enter any additional notes about the shift.
* **staff_id** (`staff_id`, number, optional): Enter the staff member's ID number.
* **staff_name** (`staff_name`, text, optional): Enter the staff member's name.
* **handover_to** (`handover_to`, text, optional): Enter the name of the staff member taking over the shift.
* **handover_from** (`handover_from`, text, optional): Enter the name of the staff member starting the shift.
* **shift_notes** (`shift_notes`, text, optional): Enter any additional notes about the shift.
* **medications_administered** (`medications_administered`, text, optional): Enter any medications administered during the shift.
* **medications_refused** (`medications_refused`, text, optional): Enter any medications refused during the shift.
* **medications_administered_dose** (`medications_administered_dose`, text, optional): Enter the dose of medications administered.
* **medications_refused_dose** (`medications_refused_dose`, text, optional): Enter the dose of medications refused.
* **allergies** (`allergies`, text, optional): Enter any allergies of the patient.
* **medications_allergies** (`medications_allergies`, text, optional): Enter any allergies related to medications.
* **medical_conditions** (`medical_conditions`, text, optional): Enter any medical conditions of the patient.
* **medical_condition_list** (`medical_condition_list`, text, optional): Enter a list of medical conditions.
* **medical_condition_status** (`medical_condition_status`, select_one, optional): Select the status of the medical condition.
* **shift_status** (`shift_status`, select_multiple, optional): Select the status of the shift.
