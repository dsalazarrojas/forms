# Covid 19 Daily Status Update Form - Help Guide
## Purpose
The Covid 19 Daily Status Update Form is used to track and manage patient information and vaccination status. Please complete this form accurately and once a day to ensure the medical team has up-to-date information.

## How To Complete This Form
1. Fill out the form once a day with the latest information about the patient.
2. Ensure you are not duplicating a patient's entry.
3. If you are unsure, consult with the medical team or check the internal database.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, optional): Enter the patient's name as it appears on their official identification.
* **Last Name** (`last_name`, `text`, optional): Enter the patient's surname as it appears on their official identification.
* **Date of Birth** (`date_of_birth`, `date`, optional): Enter the patient's date of birth in the correct format (DD/MM/YYYY).
* **Vaccination Status** (`vaccination_status`, `select_one`, optional): Select one of the following options:
	+ Fully Vaccinated
	+ Partly Vaccinated
	+ Not Vaccinated
	+ Declined Vaccination
	+ Unknown
* **Medical Team** (`medical_team`, `text`, optional): Enter the name of the medical team member responsible for the patient's care.
* **Patient Status** (`patient_status`, `select_multiple`, optional): Select all that apply:
	+ Active Case
	+ Recovered
	+ Deceased
* **Symptoms** (`symptoms`, `text`, optional): Enter any symptoms the patient is currently experiencing.
* **Test Result** (`test_result`, `select_one`, optional): Select one of the following options:
	+ Positive
	+ Negative
	+ Inconclusive
* **Date of Last Contact** (`date_of_last_contact`, `date`, optional): Enter the date and time of the last contact with the patient (MM/DD/YYYY).
* **Date of Last Update** (`date_of_last_update`, `date`, optional): Enter the date and time of the last update (MM/DD/YYYY).
* **Medical Notes** (`medical_notes`, `text`, optional): Enter any relevant medical notes or comments about the patient's condition.

## Tips
* Ensure all fields are filled out accurately and completely.
* Update the form once a day with the latest information.
* If you are unsure about any information, consult with the medical team or check the internal database.
