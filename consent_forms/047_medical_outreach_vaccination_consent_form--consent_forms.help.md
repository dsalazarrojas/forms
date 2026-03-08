# Medical Outreach Vaccination Consent Form - Help Guide
## Purpose
This form is used to collect patient information for outreach vaccination programs. It includes fields for patient details, medical history, contact information, and vaccination status.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your patient's details, including their date of birth and date of vaccination.
2. Enter your patient's medical phone number and email address.
3. Select the correct medical history and vaccination status.
4. Choose whether you consent to the outreach vaccination program.
5. Fill in the vaccination dose information, if applicable.

## Field-by-Field Explanation

* **Patient Details** (`patient_details`, text, required):
 Enter your patient's name and other identifying information (e.g., address).
* **Medical History** (`medical_history`, text, required):
 Describe any medical conditions or allergies that may impact your patient's health.
* **Patient Email** (`patient_email`, email, required):
Enter your patient's email address.
* **Medical Phone** (`medical_phone`, text, required):
Enter your patient's medical phone number.
* **Consent Form** (`consent_form`, select_one, required):
 Select "Consent" to indicate your patient's agreement to participate in the outreach vaccination program.
* **Date of Birth** (`date_of_birth`, date, required):
 Enter your patient's date of birth in the format MM/DD/YYYY.
* **Date of Vaccination** (`date_of_vaccination`, date, required):
 Enter the date of the vaccination, if applicable.
* **Vaccination Status** (`vaccination_status`, select_multiple, required):
 Select all relevant vaccination status options (e.g., Fully Vaccinated, Partially Vaccinated).
* **Vaccination Dose** (`vaccination_dose`, text, required):
Enter the number of vaccination doses your patient has received, if applicable.
