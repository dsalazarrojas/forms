<thinking>
This form is used for registering a patient's access to a pharmacy portal. 
The form is designed to gather patient information and determine the access status and type of access a patient has to the portal. The fields required are patient id, patient first name, patient last name, date of birth, access request date, refills requested, refills allowed, access type and access status. The access type is a selection between 'Yes' and 'No', and access status is a selection between 'Active', 'Inactive'. This form will not be used in cases when a patient already exists in the system.
</thinking>
# Pharmacy Portal Access Form - Help Guide
## Purpose
The Pharmacy Portal Access Form is designed to gather patient information and determine the access status and type of access a patient has to the pharmacy portal.

## How To Complete This Form
To complete this form, follow the steps below:
1. Fill in the patient's details such as patient first name, patient last name, and date of birth.
2. Select the access type by choosing 'Yes' or 'No' and the access status by choosing 'Active' or 'Inactive'.
3. Enter the patient's phone number and email if provided.
4. Click on the submit button to complete the form.

## Field-by-Field Explanation
* **patient_id** (`number`, optional): Enter the patient's ID number. This will be used to identify the patient in the system.
* **patient_first_name** (`text`, optional): Enter the patient's first name.
* **patient_last_name** (`text`, optional): Enter the patient's last name.
* **date_of_birth** (`date`, optional): Enter the patient's date of birth in the format MM/DD/YYYY.
* **access_request_date** (`date`, optional): Enter the date the patient is requesting access to the portal.
* **refills_requested** (`number`, optional): Enter the number of refills the patient is requesting.
* **refills_allowed** (`number`, optional): Enter the maximum number of refills allowed for the patient.
* **access_type** (`select_one`, optional): Select the access type by choosing 'Yes' or 'No'.
* **access_status** (`select_multiple`, optional): Select the access status by choosing 'Active' or 'Inactive'.
* **patient_phone** (`text`, optional): Enter the patient's phone number. This will be used to contact the patient.
* **patient_email** (`email`, optional): Enter the patient's email address. This will be used to contact the patient.
 
## Tips
* Make sure to enter accurate and up-to-date patient information.
* If the patient already exists in the system, this form will not be used to update their information.
