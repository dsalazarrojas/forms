# telehealth_nexus_letter_request_form - Help Guide
## Purpose
The telehealth nexus letter request form is used to request a letter or other documentation from a telehealth visit or remote consultation. It's essential to fill it out only for this purpose and avoid providing unnecessary information to prevent duplication of existing patient data.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill in the patient's information section (`patient_info`) with the patient's name, date of birth, and any other identifying information.
2. Provide the patient's contact information (`patient_contact_info`) to allow us to contact the patient if needed.
3. Describe the appointment information (`appointment_info`), including the date, time, and reason for the visit.
4. Specify the telehealth services (`telehealth_services`) required, such as Telehealth Visit, Remote Consultation, or Virtual Visit.
5. Indicate if the services requested are needed (`services_requested`), and select all the services that apply.
6. If applicable, provide the patient's medical history (`patient_medical_history`) and details about any previous medical conditions or allergies.
7. Confirm if the patient has a medical history (`patient_medical_history_details`) that needs to be considered.
8. Enter the healthcare provider's information (`healthcare_provider_info`) and any relevant medical history (`medical_history`).

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required): Enter the patient's name, date of birth, and any other identifying information.
* **Patient Contact Info** (`patient_contact_info`, text, required): Provide the patient's contact information, including phone number and email address, to allow us to contact the patient if needed.
* **Appointment Info** (`appointment_info`, text, required): Describe the appointment date, time, and reason for the visit.
* **Telehealth Services** (`telehealth_services`, select_multiple, optional): Specify the telehealth services required, such as Telehealth Visit, Remote Consultation, or Virtual Visit.
* **Services Requested** (`services_requested`, select_multiple, optional): Indicate if the services requested are needed, and select all the services that apply.
* **Patient Medical History** (`patient_medical_history`, note, optional): If applicable, provide the patient's medical history and any previous medical conditions or allergies.
* **Patient Medical History Details** (`patient_medical_history_details`, select_one, optional): Confirm if the patient has a medical history that needs to be considered.
* **Healthcare Provider Info** (`healthcare_provider_info`, text, optional): Enter the healthcare provider's information and any relevant medical history.
* **Medical History** (`medical_history`, text, optional): Enter any relevant medical history.
