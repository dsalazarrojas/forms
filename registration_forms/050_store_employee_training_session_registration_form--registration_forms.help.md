# Store Employee Training Session Registration Form - Help Guide
## Purpose
This form is designed to collect information from store employees about their training sessions. It helps in organizing and tracking employee training data.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "Name" field.
2. Provide your email address in the "Email" field.
3. Enter your phone number in the "Phone" field.
4. Choose the start and end dates of the session in the "Start Date" and "End Date" fields respectively.
5. Enter the session name in the "Session Name" field.
6. Provide a brief description of the session in the "Session Description" field.
7. Select the number of employees attending and not attending in the "Employees Attended" and "Employees Not Attended" fields respectively.
8. Choose the status of the session from the "Status" field.
9. Indicate if the attendance is confirmed or not in the "Attendance Confirmation" field.
10. Enter any additional notes about the session in the "Notes" field.
11. Finally, select the training provider from the "Training Provider" field.

## Field-by-Field Explanation
* **Name** (`store_employee_training_session_registration_form_name`, text, required): Enter your full name.
* **Email** (`store_employee_training_session_registration_form_email`, text, email): Provide your email address.
* **Phone** (`store_employee_training_session_registration_form_phone`, text, required): Enter your phone number.
* **Start Date** (`store_employee_training_session_registration_form_start_date`, date, required): Choose the start date of the session.
* **End Date** (`store_employee_training_session_registration_form_end_date`, date, required): Choose the end date of the session.
* **Session Name** (`store_employee_training_session_registration_form_session_name`, text, required): Enter the session name.
* **Session Description** (`store_employee_training_session_registration_form_session_description`, text, required): Provide a brief description of the session.
* **Employees** (`store_employee_training_session_registration_form_employees`, select_multiple, required): Select the number of employees attending and not attending the session.
* **Status** (`store_employee_training_session_registration_form_status`, select_one, required): Choose the status of the session.
* **Attendance Confirmation** (`store_employee_training_session_registration_form_attendance_confirmation`, select_multiple, required): Indicate if the attendance is confirmed or not.
* **Notes** (`store_employee_training_session_registration_form_notes`, note, required): Enter any additional notes about the session.
* **Employees Attended** (`store_employee_training_session_registration_form_employees_attended`, text, optional): Enter the number of employees attended.
* **Employees Not Attended** (`store_employee_training_session_registration_form_employees_not_attended`, text, optional): Enter the number of employees not attended.
* **Training Provider** (`store_employee_training_session_registration_form_training_provider`, text, optional): Select the training provider.
* **Venue** (`store_employee_training_session_registration_form_venue`, text, optional): Enter the venue of the session.
* **Attendance Confirmation Options** (`store_employee_training_session_registration_form_attendance_confirmation_options_1`, text, optional): Enter the confirmation status.
* **Training Session Status Options** (`store_employee_training_session_registration_form_status_options_1`, text, optional): Enter the status options.
* **Session Status Options** (`store_employee_training_session_registration_form_status_options_2`, text, optional): Enter the status options.
