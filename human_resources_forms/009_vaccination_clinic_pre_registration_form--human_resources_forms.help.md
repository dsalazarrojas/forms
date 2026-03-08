# vaccination_clinic_pre_registration_form - Help Guide

## Purpose
This form is designed to collect information from patients prior to a vaccination clinic session. The collected information will be reviewed by healthcare professionals to prepare for the session.

## How To Complete This Form
To complete this form, simply follow the instructions below:

1. Fill out the form in its entirety, but you can leave blank any field that does not apply to you.
2. Be as accurate as possible when providing your contact information.
3. Choose the correct vaccination type from the options provided.
4. Select a date and time for your appointment that works best for you.
5. If you have any additional comments or information, please provide it in the "Additional Info" field.

## Field-by-Field Explanation
### 1. **Patient Info** (`patient_info`, `text`, required: false)
This field is for your personal information, including your name, phone number, and any other relevant details.

* **Name**: Enter your name as it appears on your identification documents.
* **Phone Number**: Enter your contact phone number where you can be reached for the appointment.
* **Additional Info**: Enter any additional information that we should be aware of before your appointment.

### 2. **Vaccination Date** (`vaccination_date`, `date`, required: false)
Select a date for your vaccination appointment.

### 3. **Vaccination Time** (`vaccination_time`, `time`, required: false)
Select a time for your vaccination appointment.

### 4. **Vaccination Type** (`vaccination_type`, `select_one`, required: false)
Choose the type of vaccination you are scheduled to receive.

* **Vaccine 1**: Select this option if this is the type of vaccination you are scheduled to receive.
* **Vaccine 2**: Select this option if this is the type of vaccination you are scheduled to receive.
* **Vaccine 3**: Select this option if this is the type of vaccination you are scheduled to receive.

### 5. **Contact Info** (`contact_info`, `text`, required: false)
This field is for your contact information, including your address and any other relevant details.

* **Address**: Enter your mailing address where we can send you appointment reminders and follow-up information.
* **Additional Info**: Enter any additional information that we should be aware of before your appointment.

### 6. **Appointment Date** (`appointment_date`, `date`, required: false)
Select a date for your appointment.

### 7. **Appointment Time** (`appointment_time`, `time`, required: false)
Select a time for your appointment.

### 8. **Clinic Info** (`clinic_info`, `text`, required: false)
This field is for any additional information about your clinic visit, including any medical history.

* **Additional Info**: Enter any additional information that we should be aware of before your appointment.

### 9. **Additional Info** (`additional_info`, `note`, required: false)
This field is for any additional comments or information that you would like to provide to us.

* **Additional Comments**: Enter any additional comments or information that you would like to provide to us.

### 10. **Submit** 
This is the submit button to complete and submit the form.
