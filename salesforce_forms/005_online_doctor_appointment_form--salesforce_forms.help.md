# online_doctor_appointment_form - Help Guide
## Purpose
The online doctor appointment form is used by patients to provide their personal and appointment information to the assigned doctor before meeting with them. This form helps the doctor prepare for the meeting and saves time for both parties.

## How To Complete This Form
To complete this form, follow the steps below:

* Fill out the form with your personal and appointment information.
* Make sure to select an available date and time for your appointment.
* If necessary, provide additional information in the "Additional Info" field.
* Click submit to send your appointment request to the assigned doctor.

## Field-by-Field Explanation
### Patient Info
* **Patient Info** (`patient_info`, `text`, required/optional): Enter your name and any other identifying information that the doctor should be aware of before meeting with you.
### Select Date
* **Select Date** (`appointment_date`, `date`, required/optional): Choose a date for your appointment. Select a date that works for both you and the doctor.
### Select Time
* **Select Time** (`appointment_time`, `time`, required/optional): Choose a start time for your appointment. Select a time that is convenient for you and the doctor.
### Doctor
* **Doctor** (`doctor_name`, `text`, required/optional): You can leave this field blank if you don't know the doctor's name or would like the doctor to choose you one based on your needs.
### Appointment Duration
* **Appointment Duration** (`appointment_duration`, `number`, required/optional): Enter the length of your appointment in minutes.
### Reason for Visit
* **Reason for Visit** (`appointment_reason`, `text`, required/optional): Provide a brief description of the purpose of your visit.
### Medical Conditions
* **Medical Conditions** (`medical_conditions`, `text`, required/optional): If you have any medical conditions that you would like the doctor to be aware of, please enter them in this field.
### Appointment Type
* **Appointment Type** (`appointment_type`, `select_one`, required/true): Choose from the list to specify the type of appointment you require (initial consultation, follow-up).
### Patient Email
* **Patient Email** (`patient_email`, `email`, required/optional): Enter your email address so the doctor can contact you before or after your appointment.
### Patient Phone
* **Patient Phone** (`patient_phone`, `text`, required/optional): Enter your phone number so the doctor can contact you before or after your appointment.
### Doctor's Phone
* **Doctor's Phone** (`doctor_phone`, `text`, required/optional): You can enter the doctor's phone number if you have it.
### Additional Info
* **Additional Info** (`additional_info`, `note`, required/optional): Enter any additional information that you think is relevant to your appointment.

Note: This form is designed to gather the necessary information for a doctor's appointment. Some fields are optional, but it's recommended that you fill out as much information as possible to ensure that the doctor is well-prepared for your appointment.
