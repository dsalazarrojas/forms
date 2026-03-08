# Hospice Care Patient Demographics Form - Help Guide
## Purpose
The Hospice Care Patient Demographics Form is a tool for collecting essential information about patients receiving hospice care.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the `Patient Name` field.
2. Enter the patient's date of birth in the `Date of Birth` field.
3. Enter the patient's date of death (if applicable) in the `Date of Death` field.
4. Enter the patient's address in the `Patient Address` field.
5. Enter the name of the patient's caregiver in the `Caregiver Name` field.
6. Enter the patient's contact number in the `Contact Number` field.
7. Enter the patient's medical condition in the `Patient Medical Condition` field.
8. Enter the name of the hospice providing care in the `Hospice Name` field.
9. Indicate whether the patient has a medical team (yes/no) in the `Medical Team Members` field.
10. Indicate whether the patient has a medical team (yes/no) in the `Medical Team Roles` field.
11. Enter the date of admission in the `Date of Admission` field.
12. Enter the date of discharge (if applicable) in the `Date of Discharge` field.
13. Select the patient's hospice care level in the `Hospice Care Level` field.

## Field-by-Field Explanation

* **Patient Name (`patient_name`, text, required):** The patient's full name.
* **Date of Birth (`date_of_birth`, date, optional):** The patient's date of birth.
* **Date of Death (`date_of_death`, date, optional):** The date the patient passed away (if applicable).
* **Patient Address (`patient_address`, text, optional):** The patient's address.
* **Caregiver Name (`caregiver_name`, text, optional):** The name of the person or organization responsible for the patient's care.
* **Contact Number (`contact_number`, text, optional):** The patient's contact number.
* **Patient Medical Condition (`patient_medical_condition`, text, optional):** A brief description of the patient's medical condition.
* **Hospice Name (`hospice_name`, text, optional):** The name of the hospice providing care.
* **Medical Team Members (`medical_team_members`, select_multiple, optional):** Indicates whether the patient has a medical team (yes/no).
* **Medical Team Roles (`medical_team_roles`, select_one, optional):** Indicates whether the patient has a medical team (yes/no).
* **Date of Admission (`date_of_admission`, date, optional):** The date the patient began receiving hospice care.
* **Date of Discharge (`date_of_discharge`, date, optional):** The date the patient's care was discharged (if applicable).
* **Hospice Care Level (`hospice_care_level`, text, optional):** The level of care the patient requires (e.g., respite, palliative, etc.).
