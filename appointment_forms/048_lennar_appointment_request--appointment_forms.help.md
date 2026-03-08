# Lennar Appointment Request - Help Guide
## Purpose
The Lennar Appointment Request form is designed to collect information from users to schedule appointments for various categories of professionals (Dentist, Physician, Nurse) or for a custom "Other" category. This form gathers details such as date of birth, email, phone number, appointment date, time, duration, notes, and category selection to facilitate efficient scheduling and appointment management.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have all the necessary information ready, as some fields are required.
2. Select a category from the "Category" field that best suits your appointment needs (Dentist, Physician, Nurse, or Other).
3. If you selected "Other", specify the category in the "Category" field.
4. Fill in your Date of Birth.
5. Enter your Email.
6. Provide your Phone number.
7. Schedule your appointment by selecting the desired date and time in the "Appointment Date" and "Appointment Time" fields.
8. Specify the appointment duration (in minutes) in the "Appointment Duration" field.
9. Add any additional notes about your appointment in the "Notes" field.
10. If you selected "Other" as your category, list the specific category in the "Category" field and "Other" field.

## Field-by-Field Explanation

* **New Appointment Request** (`new_appointment_request`, text, optional): This field is the main title of your appointment request.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth in the format DD/MM/YYYY.
* **Email** (`email`, email, optional): Enter your email address to help us contact you regarding your appointment.
* **Phone** (`phone`, text, optional): Enter your phone number so we can contact you about your appointment.
* **Appointment Date** (`appointment_date`, date, optional): Select the date of your appointment.
* **Appointment Time** (`appointment_time`, time, optional): Select the time of your appointment.
* **Appointment Duration** (`appointment_duration`, number, optional): Enter the duration of your appointment in minutes.
* **Notes** (`notes`, note, optional): Provide any additional information about your appointment in this field.
* **Category** (`category`, select_one, optional): Select the category of professional (Dentist, Physician, Nurse, or Other) for your appointment.
* **Other** (`category_other`, select_multiple, optional): If you selected "Other" as your category, specify the specific category in this field.
