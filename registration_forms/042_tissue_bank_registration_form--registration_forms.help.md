# Tissue Bank Registration Form - Help Guide
## Purpose
The Tissue Bank Registration Form is used to collect relevant information about individuals who register with the tissue bank. The form is designed to gather essential details that will help us understand the individual's needs and preferences.

## How To Complete This Form
To complete the form, follow the steps below:

1. Fill out the required fields (First Name, Last Name, Date Of Birth, Gender, Address, Phone, Email, Consent Statement, and Date Signed).
2. If you have any medical conditions, medical treatment, or medication allergies, fill out the relevant fields in the Additional Information section.
3. Review and confirm your answers before submitting the form.

## Field-by-Field Explanation
* **First Name** (`donor_first_name`, text, required): Enter your first name as it appears on your identification documents.
* **Last Name** (`donor_last_name`, text, required): Enter your last name as it appears on your identification documents.
* **Date Of Birth** (`donor_date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Gender** (`donor_gender`, select_one, required): Select your gender (Male, Female, Other).
* **Address** (`donor_address`, text, required): Enter your current address, including your street address, city, and zip code.
* **Phone** (`donor_phone`, text, required): Enter your phone number for communication purposes.
* **Email** (`donor_email`, email, required): Enter a valid email address that you can be reached at.
* **Medical Condition** (`medical_condition`, text, optional): If you have any medical conditions that may impact your registration, enter them here.
* **Medical Treatment** (`medical_treatment`, text, optional): If you have any medical treatments that may impact your registration, enter them here.
* **Medication Allergies** (`medication_allergies`, text, optional): If you have any medication allergies, enter them here.
* **Consent Statement** (`consent_statement`, select_multiple, required): Select whether we can share your information (Yes, No).
* **Date Signed** (`consent_date_signed`, date, required): Enter the date you signed the consent statement.
* **We will not share your information** (`consent_statement`, select_multiple, required): This field is used to confirm your consent to share your information. Select Yes to share your information.
