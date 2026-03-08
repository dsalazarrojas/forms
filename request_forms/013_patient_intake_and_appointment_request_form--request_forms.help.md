# Patient Intake And Appointment Request Form - Help Guide
## Purpose
This form is used to collect patient information and preferences before their appointment, ensuring efficient processing and preparation for their visit.

## How To Complete This Form

1. Fill in the patient's name and contact details (email, phone, address, city, state, zip code, and country) in the corresponding fields.
2. Provide any medical conditions, medical record number, and medical history that may be relevant to their appointment.
3. Choose a date and time for their appointment that suits them best.
4. If applicable, provide details about their medical condition and any medication allergies.
5. Specify the relationship between the patient and their emergency contact (name, contact name, and contact phone number).
6. Check if they have a preferred provider, room assignment, and time assignment for their appointment.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required: false): Enter the patient's name.
* **Medical Condition** (`medical_condition`, `text`, required: false): Describe any medical conditions relevant to their appointment.
* **Medical Record Number** (`medical_record_number`, `text`, required: false): Enter their medical record number if available.
* **Appointment Date** (`appointment_date`, `date`, required: false): Choose a date for their appointment.
* **Appointment Time** (`appointment_time`, `time`, required: false): Choose a time for their appointment.
* **Patient Email** (`patient_email`, `email`, required: false): Enter their email address.
* **Patient Phone** (`patient_phone`, `text`, required: false): Enter their phone number.
* **Medical History** (`medical_history`, `text`, required: false): Provide any relevant medical history.
* **Medication Allergies** (`medication_allergies`, `text`, required: false): List any medication allergies.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, required: false): Enter the name of their emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, `text`, required: false): Describe their relationship with their emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, `text`, required: false): Enter the phone number of their emergency contact.
* **Appointment Request Details** (`appointment_request_details`, `text`, required: false): Provide any additional details about their appointment request.
* **Patient Address** (`patient_address`, `text`, required: false): Enter their address.
* **City** (`patient_city`, `text`, required: false): Enter their city.
* **State** (`patient_state`, `text`, required: false): Enter their state.
* **Zip Code** (`patient_zip_code`, `text`, required: false): Enter their zip code.
* **Country** (`patient_country`, `text`, required: false): Enter their country.
* **Assigned Provider** (`assigned_provider`, `select_one`, required: false): Choose if they have a preferred provider.
* **Assigned Room** (`assigned_room`, `select_one`, required: false): Choose if they have a preferred room assignment.
* **Assigned Time** (`assigned_time`, `select_one`, required: false): Choose if they have a preferred time assignment.
* **Assigned Date** (`assigned_date`, `select_one`, required: false): Choose if they have a preferred date assignment.
