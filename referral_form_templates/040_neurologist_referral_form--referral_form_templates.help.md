# Neurologist Referral Form - Help Guide

## Purpose
This form is for new patient referrals from a neurologist. Please fill out this form to provide essential information about the patient you are referring.

## How To Complete This Form
- Fill out all the required fields marked with an asterisk (\*).
- Ensure that all information is accurate and up-to-date.
- If a field is not applicable or is not known, indicate "Not Applicable" or "Unknown".

## Field-by-Field Explanation

* **Patient First Name** (`patient_first_name`, text, \*): The patient's first name. Please enter the patient's first name as it appears on their identification documents.
* **Patient Last Name** (`patient_last_name`, text, \*): The patient's last name. Please enter the patient's last name as it appears on their identification documents.
* **Date of Birth** (`date_of_birth`, date, \*): The patient's date of birth. Enter the date in YYYY-MM-DD format.
* **Patient Address** (`patient_address`, text, \*): The patient's permanent address. This can be a physical or mailing address.
* **Patient Email** (`patient_email`, email, \*): The patient's email address, if applicable. Please use the format "john.doe@example.com".
* **Patient Phone** (`patient_phone`, text, \*): The patient's phone number, if applicable. This should be in the format "123-456-7890".
* **Provider Name** (`provider_name`, text, \*): The name of the provider referring the patient, including their title and initials.
* **Medical History** (`medical_history`, text, optional): Any relevant medical history or allergies the patient may have.
* **Referral Reason** (`referral_reason`, select_one, \*): The reason for the referral. Choose one of the following options: "new medication", "new surgery", or "new procedure".
* **Medical Condition** (`medical_condition`, text, \*): A brief description of the patient's medical condition.
* **Patient Notes** (`patient_notes`, text, optional): Any additional notes or comments about the patient.
 
## Tips
- Please ensure that all fields are complete and accurate.
- If you are unsure about any information, please contact the patient or their provider for clarification.
- This form is intended to provide essential information for the patient's referral; please do not include confidential or sensitive information.
