# Endodontic Referral Form - Help Guide
## Purpose
The Endodontic Referral Form is used to collect information from patients seeking endodontic care. This form ensures that the specialist has all the necessary details to provide quality care.

## How To Complete This Form
To complete this form, please provide the following information:
- Patient's demographic details: first name, last name, address, and zip code.
- Primary insurance information (if applicable).
- Referral details: date of referral, medical condition (if applicable), date of last visit (if applicable), and reason for referral (if applicable).
- Scheduling: date of next appointment.
- Signatures: patient and doctor's signatures, confirming agreement and consent.

## Field-by-Field Explanation

* **First name** (`first_name`, `text`, `required`): Enter the patient's first name.
* **Last name** (`last_name`, `text`, `required`): Enter the patient's last name.
* **Address** (`address`, `text`, `required`): Enter the patient's address.
* **State** (`state`, `select_one`, `required`): Select the patient's state of residence from the provided options.
* **Zip code** (`zip_code`, `number`, `required`): Enter the patient's zip code.
* **Primary insurance** (`primary_insurance`, `select_multiple`, `optional`): Select the patient's primary insurance provider from the options.
* **Medical condition** (`medical_condition`, `note`, `optional`): Provide a detailed description of the patient's medical condition, if applicable.
* **Date of referral** (`date_of_referral`, `date`, `required`): Enter the date the patient was referred for endodontic care.
* **Date of last visit** (`date_of_last_visit`, `date`, `optional`): Enter the date of the patient's last visit, if applicable.
* **Reason for referral** (`reason_for_referral`, `note`, `optional`): Explain the reason for referral, if applicable.
* **Next appointment** (`next_appointment`, `date`, `optional`): Schedule the next appointment date, if applicable.
* **Patient signature** (`patient_signature`, `text`, `required`): Sign and date the form, indicating agreement and consent.
* **Doctor signature** (`doctor_signature`, `text`, `required`): Sign and date the form, indicating agreement and consent.

## Tips
- Ensure that all required fields are completed accurately and truthfully.
- Use the select options for the State field to select the correct state of residence.
- If the patient has multiple insurance providers, select all applicable options.
- If the patient has a medical condition, provide a detailed description in the Medical condition field.
- If the patient has a last visit, enter the date in the Date of last visit field.
- If the patient has a next appointment scheduled, enter the date in the Next appointment field.
