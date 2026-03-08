# Pfizer COVID 19 Vaccine Appointment Request - Help Guide
## Purpose
This form is designed to request an appointment for a Pfizer COVID-19 vaccine. It will help healthcare staff to gather necessary information from patients to schedule an appointment and provide the vaccine.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the requested information, such as the date and time of the appointment, contact details, and medical provider's name.
2. Select the type of vaccine you would like to receive (Pfizer, Moderna, or AstraZeneca).
3. Choose the location for the appointment.
4. Provide any additional notes or comments.
5. Select the medical staff member who will be attending to you during the appointment.

## Field-by-Field Explanation
### 1. **Request A Pfizer Covid-19 Vaccine Appointment** (`appointment_request`, text, optional)
* This is the main heading of the form, providing a clear indication of the form's purpose.

### 2. **Choose A Date For Your Appointment** (`appointment_date`, date, optional)
* Enter the date you would like to schedule the appointment in the format: MM/dd/yyyy.

### 3. **Choose A Time For Your Appointment** (`appointment_time`, time, optional)
* Enter the time you would like to schedule the appointment in the format: hh:mm a.

### 4. **Phone Number** (`contact_phone`, text, optional)
* Enter your phone number so that we can contact you with any updates or reminders.

### 5. **Email Address** (`contact_email`, email, optional)
* Enter your email address so that we can contact you with any updates or reminders.

### 6. **Name Of Medical Provider** (`medical_provider`, text, optional)
* Enter the name of your medical provider if you are not sure who your medical provider will be.

### 7. **Patient Name** (`patient_name`, text, optional)
* Enter your name or the name of the patient you are representing.

### 8. **Patient Date Of Birth** (`patient_dob`, date, optional)
* Enter the date of birth of the patient if it is different from your own.

### 9. **Additional Contact Info For The Patient** (`patient_contact_info`, text, optional)
* If applicable, enter any additional information related to the patient that we need to know.

### 10. **Type Of Vaccine** (`vaccine_type`, select_one, optional)
* Select the type of vaccine you would like to receive: Pfizer, Moderna, or AstraZeneca.

### 11. **Location For The Appointment** (`appointment_location`, text, optional)
* Enter the location where you would like to have the appointment.

### 12. **Additional Notes** (`appointment_note`, note, optional)
* Enter any additional comments or notes about your appointment.

### 13. **Medical Staff** (`medical_staff`, select_multiple, required)
* Select the medical staff member who will be attending to you during the appointment. You can choose from Doctor, Nurse, or Receptionist.

### 14. **Medical Conditions** (`patient_medical_conditions`, text, optional)
* If you have any medical conditions that we should be aware of, please enter them here.
