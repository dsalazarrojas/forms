<thinking>
This form is intended to be used for patient registration, gathering information about a patient's medical history, risk factors, and contact details. This form likely serves as the first step in the patient intake process for a medical facility or healthcare organization. To create this form, the developer has defined a series of fields with various types and options, which we'll break down in the user guide below.

Before completing this form, please ensure that the information you are providing is accurate and up-to-date. If you are unsure about any field, it's best to consult with the patient or their medical provider for clarification.

The following guide will walk you through each step of the form completion process.

</thinking>

# <string> - Help Guide
## Purpose
This form is designed to collect information for patient registration, which will help healthcare providers understand patient needs and provide better care.

## How To Complete This Form
To complete this form, follow the steps below:

1. Fill out each field with the required information.
2. For fields with options, select the relevant answers from the dropdown menu.
3. Ensure that you enter accurate and up-to-date information for all fields.

## Field-by-Field Explanation

* **Patient Info (patient_info)** (`patient_info`, `text`, required: false): Enter the patient's basic information, such as name, address, and contact details.
* **Medical History (medical_history)** (`medical_history`, `text`, required: false): Describe the patient's medical history, including any allergies, medical conditions, or previous treatments.
* **Risk Factors (risk_factors)** (`risk_factors`, `select_multiple`, required: false): Identify any risk factors that may impact the patient's care, such as smoking status or previous hospitalizations.
* **Patient Registration Form Name (patient_registration_form_name)** (`patient_registration_form_name`, `text`, required: false): Enter the name of the patient registration form, which may be a unique identifier.
* **Date of Birth (patient_registration_form_dob)** (`patient_registration_form_dob`, `date`, required: false): Enter the patient's date of birth.
* **Patient Registration Form Gender (patient_registration_form_gender)** (`patient_registration_form_gender`, `select_one`, required: false): Select the patient's gender from the dropdown menu.
* **Patient Registration Form Race (patient_registration_form_race)** (`patient_registration_form_race`, `text`, required: false): Enter the patient's race or ethnicity.
* **Patient Registration Form Tribe (patient_registration_form_tribe)** (`patient_registration_form_tribe`, `text`, required: false): Enter any relevant tribal or ethnic information.
* **Phone (patient_registration_form_phone)** (`patient_registration_form_phone`, `text`, required: false): Enter the patient's contact phone number.
* **Email (patient_registration_form_email)** (`patient_registration_form_email`, `email`, required: false): Enter the patient's email address.
* **Address (patient_registration_form_address)** (`patient_registration_form_address`, `text`, required: false): Enter the patient's address, including street number and postal code.
* **City (patient_registration_form_city)** (`patient_registration_form_city`, `text`, required: false): Enter the city where the patient resides.
* **State (patient_registration_form_state)** (`patient_registration_form_state`, `text`, required: false): Enter the state where the patient resides.
* **Postal Code (patient_registration_form_postal_code)** (`patient_registration_form_postal_code`, `text`, required: false): Enter the postal code or zip code where the patient resides.
* **Country (patient_registration_form_country)** (`patient_registration_form_country`, `text`, required: false): Enter the country where the patient resides.

Note: The required status of each field is set to false for all fields, indicating that they are not mandatory. However, please ensure that you fill out as much information as possible to provide the best care for the patient.
