# Testing Appointment Form - Help Guide
## Purpose
The Testing Appointment Form is used to collect information from patients who are scheduled for testing. This form will be used to prepare for and execute the testing procedure.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the schedule_form field with the date and time of the scheduled appointment.
2. Provide patient_info, including any relevant medical history or contact information.
3. Enter doctor_info, such as the doctor's name and contact information.
4. Enter appointment_date, which should be in the format of month/day/year (MM/DD/YY).
5. Enter appointment_time, which should be in 12-hour format (e.g., 1:00 PM).
6. Enter appointment_duration, which is the expected length of the test in minutes.
7. Enter disease_info, if applicable.
8. Enter patient_notes, for any additional comments or questions from the patient.
9. Enter doctor_notes, for any additional comments or instructions from the doctor.
10. Enter next_steps, which should include any follow-up instructions or actions for the patient.

## Field-by-Field Explanation
* **schedule_form** (`schedule_form`, text, optional): Fill in the scheduled appointment date and time.
* **patient_info** (`patient_info`, text, optional): Enter any relevant medical history or contact information for the patient.
* **doctor_info** (`doctor_info`, text, optional): Enter the doctor's name and contact information.
* **appointment_date** (`appointment_date`, date, optional): Enter the date of the appointment in the format of month/day/year (MM/DD/YY).
* **appointment_time** (`appointment_time`, time, optional): Enter the time of the appointment in 12-hour format (e.g., 1:00 PM).
* **appointment_duration** (`appointment_duration`, number, optional): Enter the expected length of the test in minutes.
* **disease_info** (`disease_info`, text, optional): If applicable, enter information about the disease or condition being tested.
* **patient_notes** (`patient_notes`, text, optional): Enter any additional comments or questions from the patient.
* **doctor_notes** (`doctor_notes`, text, optional): Enter any additional comments or instructions from the doctor.
* **next_steps** (`next_steps`, text, optional): Enter any follow-up instructions or actions for the patient.
