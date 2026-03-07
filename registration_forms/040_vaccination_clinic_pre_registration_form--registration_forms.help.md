<thinking>
This guide is intended to help users understand the purpose and functionality of the Vaccination Clinic Pre-Registration Form. This form is designed to gather information from patients before their visit to the vaccination clinic, allowing staff to prepare for their appointment and ensure a smooth process. The form includes fields for patient demographic information, appointment details, insurance information, and additional notes. The following guide provides a step-by-step explanation of the form and its fields.

</thinking>

# Vaccination Clinic Pre Registration Form - Help Guide
## Purpose
This form is used to gather essential information from patients prior to their visit to the vaccination clinic. Completing this form helps our staff prepare for their appointment and ensures a smooth and efficient process for everyone.

## How To Complete This Form
1. Fill in the required fields, marked with an asterisk (*). These fields are: date, patient age, contact number, appointment type, and follow-up appointments.
2. Enter your name, which will be used to identify you during your visit.
3. Choose a date for your appointment.
4. Select a time for your appointment.
5. Enter your location or nearest landmark for easy identification.
6. Enter your age for accurate and relevant medical care.
7. Enter your contact number for efficient communication.
8. Select the type of appointment you have scheduled (Routine Checkup, Follow-up Visit, or Emergency Visit).
9. If applicable, select the insurance ID you wish to use.
10. Enter any additional notes or comments.
11. Finally, enter any follow-up appointments you have scheduled, including their type and time.

## Field-by-Field Explanation
* **Patient Name** (`name`, text, optional): Enter your name as you would like to be referred to during your visit.
* **Date** (`date`, date, required): Choose a date for your appointment. Please use the MM/DD/YYYY format.
* **Time** (`time`, time, optional): Select a time for your appointment. Please use 24-hour format (HH:MM).
* **Location** (`location`, text, optional): Enter your location or nearest landmark for easy identification.
* **Patient Age** (`patient_age`, number, required): Enter your age for accurate and relevant medical care.
* **Contact Number** (`contact_number`, text, required): Enter your contact number for efficient communication.
* **Doctor Name** (`doctor_name`, text, optional): Enter the name of your doctor or the doctor you would like to see.
* **Type** (`type`, select_one, required): Select the type of appointment you have scheduled (Routine Checkup, Follow-up Visit, or Emergency Visit).
* **Insurance ID** (`insurance_id`, text, optional): Enter your insurance ID if applicable.
* **Patient ID** (`patient_id`, text, optional): Enter your patient ID if you have one.
* **Patient Notes** (`patient_notes`, note, optional): Enter any additional notes or comments about your visit.
* **Doctor Notes** (`doctor_notes`, note, optional): Enter any additional notes or comments for your doctor.
* **Next Steps** (`next_steps`, note, optional): Enter any next steps or instructions for your doctor.
* **Follow-up Appointments** (`follow_up_appointments`, select_multiple, required): Select any follow-up appointments you have scheduled, including their type and time.
* **Follow-up Appointments Time** (`follow_up_appointments_time`, number, optional): Enter the time for your follow-up appointments.
