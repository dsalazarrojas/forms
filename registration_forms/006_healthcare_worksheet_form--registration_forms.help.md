# Healthcare Worksheet Form - Help Guide
## Purpose
The Healthcare Worksheet Form is designed to capture essential patient information in a healthcare setting. It helps healthcare professionals to efficiently and accurately collect patient data for further processing and reference during patient interactions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's first name in the "Patient's First Name" field.
2. Enter the patient's last name in the "Patient's Last Name" field.
3. Select the patient's date of birth in the "Date of Birth" field using the calendar icon to easily navigate through the dates.
4. Enter the patient's email address in the "Email" field, following the standard email format.
5. Enter the patient's phone number in the "Phone Number" field.
6. Select the category that best categorizes the patient's condition or visit (Health or Non-Health).
7. If required, select one or multiple categories from "Category 1" field.
8. Add any additional notes or comments about the patient in the "Additional Notes" field.

## Field-by-Field Explanation
* **Patient's First Name** (`patient_first_name`, text, required): Enter the patient's first name in this field.
* **Patient's Last Name** (`patient_last_name`, text, required): Enter the patient's last name in this field.
* **Date of Birth** (`patient_date_of_birth`, date, required): Select the patient's date of birth from the calendar icon.
* **Email** (`patient_email`, email, required): Enter the patient's email address in the standard format (e.g., `user@example.com`).
* **Phone Number** (`patient_phone_number`, text, required): Enter the patient's phone number.
* **Category** (`category`, select_one, required): Select the category that best categorizes the patient's condition or visit (Health or Non-Health).
* **Category 1** (`category_1`, select_multiple, optional): Select one or multiple categories from the provided options (Health or Non-Health).
* **Additional Notes** (`additional_notes`, text, optional): Add any additional comments or notes about the patient in this field.
