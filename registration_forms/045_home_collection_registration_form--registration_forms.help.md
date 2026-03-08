# home_collection_registration_form - Help Guide
## Purpose
This form is used to collect registration information from users for a home collection service.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the personal details section with your first name, email, phone number, and date of birth.
2. Select the services you are requesting from the "Service Request" dropdown menu.
3. Choose your preferred appointment time from the "Appointment Time" dropdown menu.
4. Confirm your appointment by selecting "True" in the "Confirm Appointment" menu.
5. If you want to schedule your appointment for a specific date and time, select "Later" in the "Schedule Appointment" menu and fill out the "Schedule Date" and "Schedule Time" fields.
6. Add any additional details in the "Additional Details" field.
7. Finally, review your selection and submit the form.

## Field-by-Field Explanation
- **First Name** (`first_name`, text, required): Fill in your first name.
- **Email** (`email`, email, required): Enter a valid email address.
- **Phone** (`phone`, text, optional): Enter your phone number.
- **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth.
- **Service Request** (`service_request`, select_one, optional): Select the services you are requesting.
- **Appointment Time** (`appointment_time`, select_multiple, optional): Choose your preferred appointment time.
- **Confirm Appointment** (`confirm_appointment`, select_one, optional): Confirm your appointment by selecting "True".
- **Schedule Appointment** (`schedule_appointment`, select_one, optional): If you want to schedule your appointment, select "Later".
- **Schedule Date** (`schedule_date`, date, optional): If you want to schedule your appointment, enter the date.
- **Schedule Time** (`schedule_time`, time, optional): If you want to schedule your appointment, enter the time.
- **Additional Details** (`additional_details`, note, optional): Add any additional details about your appointment.
- **Submit** (`submit`, select_one, optional): Select "Submit" to finalize your registration, or "Save and Continue Later" to save your progress and continue filling out the form later.
