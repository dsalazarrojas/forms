# Patient Information And Specialty Selection Form - Help Guide
## Purpose
This form is used to collect patient information and medical specialty selection for patient care.

## How To Complete This Form
1. Fill out the form with the patient's information, including their name, phone number, email, date of birth, date of visit, time of visit, address, and any relevant medical history or medications.
2. Select the medical provider from the dropdown list.
3. Choose the patient's medical specialty from the dropdown list.
4. Indicate any medical conditions or allergies the patient has.
5. Add any additional notes or comments for the patient's care.
6. Select any medications the patient is currently taking.
7. Enter any medical history or notes for the patient's care.
8. Confirm the patient's information by reviewing and editing as necessary.

## Field-by-Field Explanation

* **Patient's full name** (`patient_name`, text, required): Please enter the patient's full name as it appears on their identification documents.
* **Patient's phone number** (`patient_phone`, text, required): Enter the patient's phone number for easy contact.
* **Patient's email** (`patient_email`, email, required): Enter the patient's email address for secure communication.
* **Date of birth** (`date_of_birth`, date, required): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Date of visit** (`date_of_visit`, date, required): Enter the date of the patient's visit in the format MM/DD/YYYY.
* **Time of visit** (`time_of_visit`, time, required): Enter the time of the patient's visit in the format HH:MM AM/PM.
* **Patient's address** (`patient_address`, text, required): Enter the patient's address for easy contact and billing purposes.
* **Medical provider** (`medical_provider`, select_one, required): Choose the medical provider from the dropdown list.
* **Medical specialty** (`medical_specialty`, select_one, required): Select the patient's medical specialty from the dropdown list.
* **Medical condition** (`medical_condition`, select_multiple, required): Indicate any medical conditions or allergies the patient has. Please select all relevant conditions.
* **Additional notes** (`additional_notes`, text, required): Add any additional comments or notes for the patient's care.
* **Patient's allergies** (`patient_allergies`, select_multiple, required): List any allergies the patient has. Please select all relevant allergies.
* **Patient's medications** (`patient_medications`, select_multiple, required): List any medications the patient is currently taking. Please select all relevant medications.
* **Medical history** (`medical_history`, text, required): Enter any relevant medical history for the patient's care.
* **Medical notes** (`medical_notes`, text, required): Add any additional notes for the patient's care.
* **Specialty selection** (`specialty_selection`, select_one, required): Confirm the patient's medical specialty selection.
* **Patient info** (`patient_info`, text, required): Enter any additional patient information.
* **Patient info 1** (`patient_info_1`, text, required): Enter any additional patient information.
