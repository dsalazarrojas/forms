# driver_medical_evaluation_form - Help Guide
## Purpose
The driver_medical_evaluation_form is designed to gather information about a driver's medical condition for evaluation purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name, driver license number, and medical license number (if applicable).
2. Answer the questions about your physical ability, mental health, and medical history.
3. Provide information about your doctor's contact details, including their name, phone number, email, and address.
4. Enter the date of your last medical consultation with your doctor.

## Field-by-Field Explanation
* **Name** (`name`, `text`, required: true): Enter your full name as it appears on your driver's license.
* **Driver License Number** (`driver_license_number`, `text`, required: true): Enter your valid driver's license number.
* **Medical License Number** (`medical_license_number`, `text`, required: false): If you have a medical license, enter your license number. If not, leave this field blank.
* **Medical Board Certification Number** (`medical_board_certification_number`, `text`, required: false): Enter your medical board certification number, if applicable. If not, leave this field blank.
* **Physical Ability** (`physical_ability`, `select_one`, required: false): Select "Yes" or "No" to indicate if you have any physical limitations that affect your ability to drive.
* **Mental Health** (`mental_health`, `select_multiple`, required: false): Select "Yes" or "No" for each condition that affects your mental health.
* **Medical History** (`medical_history`, `select_multiple`, required: false): Select "Yes" or "No" for each medical condition you have.
* **Medical Certification** (`medical_certification`, `select_one`, required: false): Select "Yes" or "No" if you have a medical certification.
* **Doctor Name** (`doctor_name`, `text`, required: false): Enter your doctor's name.
* **Doctor Phone** (`doctor_phone`, `text`, required: false): Enter your doctor's phone number.
* **Doctor Email** (`doctor_email`, `email`, required: false): Enter your doctor's email address.
* **Doctor Address** (`doctor_address`, `text`, required: false): Enter your doctor's address.
* **Doctor Date** (`doctor_date`, `date`, required: false): Enter the date of your last medical consultation with your doctor.

Note: The required fields are marked with an asterisk (*) and must be completed before submitting the form.
