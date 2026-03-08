# Shopping By Appointment Form - Help Guide
## Purpose
The Shopping By Appointment Form is designed to collect and organize information about shopping sessions with storekeepers. This form helps storekeepers to schedule and manage appointments with customers.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant shopping sessions that apply to your appointment.
2. Enter the storekeeper's name and contact information (if applicable).
3. Choose the duration of the appointment.
4. Enter the start and end times of the appointment.
5. Select the day of the week for the shopping session.
6. Enter any additional comments or notes about the session.
7. If necessary, enter the customer's name, email, and phone number.
8. Choose the tool assigned to the storekeeper for the session (if applicable).
9. Finally, review and submit the form.

## Field-by-Field Explanation
* **shopping_sessions** (`shopping_sessions`, select_multiple, required/optional): Select all relevant shopping sessions that apply to your appointment.
	+ This field allows you to choose multiple shopping sessions at once.
* **storekeeper** (`storekeeper`, text, required/optional): Enter the storekeeper's name and contact information (if applicable).
	+ This field is used to store the storekeeper's details for the session.
* **shopping_session** (`shopping_session`, date, required/optional): Enter the date of the shopping session.
	+ This field is used to record the date of the shopping session.
* **start_time** (`start_time`, time, required/optional): Enter the start time of the appointment.
	+ This field is used to record the start time of the shopping session.
* **end_time** (`end_time`, time, required/optional): Enter the end time of the appointment.
	+ This field is used to record the end time of the shopping session.
* **shopping_day** (`shopping_day`, select_one, required/optional): Select the day of the week for the shopping session.
	+ This field is used to choose the day of the week for the shopping session.
* **appointment_length** (`appointment_length`, number, required/optional): Enter the duration of the appointment.
	+ This field is used to record the duration of the shopping session.
* **storekeeper_name** (`storekeeper`, text, required/optional): Enter the storekeeper's name.
	+ This field is used to store the storekeeper's details for the session.
* **storekeeper_phone** (`storekeeper_phone`, text, required/optional): Enter the storekeeper's phone number.
	+ This field is used to store the storekeeper's phone number.
* **storekeeper_email** (`storekeeper_email`, email, required/optional): Enter the storekeeper's email address.
	+ This field is used to store the storekeeper's email address.
* **customer_email** (`customer_email`, email, required/optional): Enter the customer's email address.
	+ This field is used to store the customer's email address.
* **customer_phone** (`customer_phone`, text, required/optional): Enter the customer's phone number.
	+ This field is used to store the customer's phone number.
* **shopping_session_description** (`shopping_session_description`, note, required/optional): Enter any additional comments or notes about the session.
	+ This field is used to record any additional comments or notes about the session.
* **shopping_session_comments** (`shopping_session_comments`, note, required/optional): Enter any additional comments or notes about the session.
	+ This field is used to record any additional comments or notes about the session.
* **customer_name** (`customer_name`, text, required/optional): Enter the customer's name.
	+ This field is used to store the customer's details for the session.
* **shopping_session_date** (`shopping_session_date`, date, required/optional): Enter the date of the shopping session.
	+ This field is used to record the date of the shopping session.
* **assigned_tool** (`assigned_tool`, select_one, required/optional): Choose the tool assigned to the storekeeper for the session.
	+ This field is used to choose the tool assigned to the storekeeper.
* **form_id** (`form_id`, number, required/optional): Enter the form ID.
	+ This field is used to store the form ID.
