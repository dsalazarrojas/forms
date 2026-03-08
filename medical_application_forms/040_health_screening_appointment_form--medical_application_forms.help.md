# health_screening_appointment_form - Help Guide
## Purpose
The health screening appointment form is designed to collect patient information and appointment details for medical screenings.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the patient's information in the first field.
2. Select the appointment time from the available options.
3. Enter the provider's name.
4. Choose the date for the appointment.
5. Add any notes about the appointment.
6. Enter the patient's email address.
7. Enter the patient's phone number.
8. Select the medical group (if applicable).
9. If not listed, enter other medical group information.
10. Choose the screening type (if applicable).
11. If not listed, enter other screening type information.
12. Enter the appointment location.

## Field-by-Field Explanation
* **patient_information** (`patient_information`, text, required: false): This is the field where you can enter any patient information or comments.
* **select_appointment_time** (appointment_time, select_one, required: false): Select a time slot for the appointment between 08:00-16:00 or 16:00-24:00.
* **provider_name** (provider_name, text, required: false): Enter the name of the healthcare provider.
* **date** (date, date, required: false): Choose the date for the appointment in mm/dd/yyyy format.
* **notes** (`notes`, note, required: false): Add any additional notes about the appointment.
* **email** (email, email, required: false): Enter the patient's email address.
* **phone** (phone, text, required: false): Enter the patient's phone number.
* **medical_group** (medical_group, text, required: false): Select the medical group from the available options.
* **other_medical_group** (other_medical_group, text, required: false): If not listed, enter other medical group information.
* **screening_type** (screening_type, select_multiple, required: false): Choose the screening types from the available options.
* **other_screening_type** (other_screening_type, text, required: false): If not listed, enter other screening type information.
* **appointment_location** (appointment_location, text, required: false): Enter the address or location of the appointment.
