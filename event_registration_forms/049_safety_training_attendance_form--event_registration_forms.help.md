<thinking>
This form is used to register for and track attendance at safety training sessions. It's designed to capture relevant information about the attendee, the training session, and the attendee's status. This form should only be used for safety training sessions that are relevant to the user's work. To ensure accuracy, please make sure to complete all required fields and only use this form for the correct training session.
</thinking>

# Safety Training Attendance Form - Help Guide
## Purpose
The Safety Training Attendance Form is used to register for and track attendance at safety training sessions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Session ID of the training session you attended.
2. Enter your name and contact information (email and phone number) to help us contact you about the training.
3. Select the name of the training session you attended.
4. Select the date and time of the training session.
5. Enter the location of the training session.
6. Select the status of your training completion (Active, Completed, Canceled, or Pending).
7. Optionally, add any additional notes about your attendance.

## Field-by-Field Explanation

* **Session ID** (`session_id`, number, required): Enter the unique ID of the training session you attended. This helps us track your attendance accurately.
* **Attendee Name** (`attendee_name`, text, required): Enter your full name as it is recorded in our system.
* **Attendee Email** (`attendee_email`, email, required): Enter your email address so we can contact you about the training.
* **Attendee Phone** (`attendee_phone`, text, required): Enter a valid phone number where we can reach you.
* **Training Name** (`training_name`, text): Enter the name of the training session you attended (e.g., "Fire Safety and Emergency Procedures").
* **Training Date** (`training_date`, date): Enter the date of the training session.
* **Training Time** (`training_time`, time): Enter the time of the training session.
* **Training Location** (`training_location`, text): Enter the location of the training session (e.g., "Conference Room A").
* **Training Session** (`training_session`, text): Enter the name of the training session (e.g., "Safety Training for Supervisors").
* **Attendee Company** (`attendee_company`, text): Enter the company or department you represent.
* **Attendee Department** (`attendee_department`, text): Enter the department you belong to.
* **Training Status** (`training_status`, select_one, required): Select the status of your training completion:
	+ Active: You are currently attending the training.
	+ Completed: You have completed the training.
	+ Canceled: You were scheduled to attend but did not show up.
	+ Pending: Your attendance is pending or in progress.
* **Notes** (`notes`, note): Enter any additional comments or notes about your attendance.
