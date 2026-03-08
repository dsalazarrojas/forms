<thinking>
This form is used to track and manage corporate training programs, including employee information, training program enrollment, and training session details. It's designed to help administrators monitor and analyze training data for the company. This form is not intended for employee self-service; it's meant for administrative purposes only. It's recommended that employees complete the training information in advance or through other means, not through this form. The form is meant to be completed by authorized personnel or system administrators.
</thinking>

# corporate_training_intake_form - Help Guide
## Purpose
The Corporate Training Intake Form is used to gather information about corporate training programs for employees. This form is used to track and manage employee enrollments, training sessions, and program status.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the employee information section with the relevant details.
2. Choose whether the employee is enrolled in a training program ('Yes' or 'No').
3. Select whether the employee has participated in a training session ('Yes' or 'No').
4. Enter the date and time of the training session.
5. Indicate the training location and status (Active or Inactive).
6. Provide the participant's name, email, and phone number if applicable.

## Field-by-Field Explanation

* **Employee Information** (`employee_info`, `text`, optional): Enter the employee's basic information such as name and title.
* **Employee ID** (`employee_id`, `number`, optional): Enter the employee's ID number (if applicable).
* **Employee Name** (`employee_name`, `text`, optional): Enter the employee's full name.
* **Training Program** (`training_program`, `select_one`, optional): Select 'Yes' if the employee is enrolled in a training program, or 'No' if not.
* **Training Session** (`training_session`, `select_multiple`, optional): Select 'Yes' if the employee has participated in a training session, or 'No' if not.
* **Training Date** (`training_date`, `date`, optional): Enter the date of the training session (in YYYY-MM-DD format).
* **Training Time** (`training_time`, `time`, optional): Enter the start time and end time of the training session (in 24-hour format, e.g., 08:00-10:00).
* **Training Location** (`training_location`, `text`, optional): Enter the location where the training took place.
* **Training Status** (`training_status`, `select_one`, optional): Select 'Active' if the training program is currently active, or 'Inactive' if not.
* **Participant Name** (`participant_name`, `text`, optional): Enter the name of the participant (if applicable).
* **Participant Email** (`participant_email`, `email`, optional): Enter the participant's email address (if applicable).
* **Participant Phone** (`participant_phone`, `text`, optional): Enter the participant's phone number (if applicable).
