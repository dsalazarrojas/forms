<thinking>
Internal reasoning:
This form is used for workshop attendance requests. It is essential to ensure that users understand its purpose and how to complete it correctly. This form is meant to collect personal information and event-specific details from users, such as first name, last name, email, phone number, date of attendance, time of attendance, event name, date of the event, attendee type (e.g., event host, speaker, or attendee), comments, and assigned tool status.
Before filling out this form, ensure you're not already registered for the event. Double-check if you've already submitted a registration form in the past.
</thinking>

# workshop_attendance_request_form - Help Guide
## Purpose
The workshop attendance request form is used to register for a workshop, providing essential information about yourself and your role in the event.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your first name in the "First Name" field.
2. Enter your last name in the "Last Name" field.
3. Provide your email address in the "Email" field.
4. Enter your phone number in the "Phone" field.
5. Select your date of attendance from the calendar in the "Date" field.
6. Choose your time of attendance from the dropdown menu in the "Time" field.
7. Enter the name of the event you wish to attend in the "Event Name" field.
8. Select the date of the event from the calendar in the "Event Date" field.
9. Choose your role in the event from the dropdown menu in the "Attendee Type" field.
10. Add any comments or additional information in the "Comments" field.
11. Indicate whether you've been assigned a tool by selecting "Yes" or "No" in the "Assigned Tool" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required: false): Enter your first name.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name.
* **Email** (`email`, `email`, required: false): Provide your email address.
* **Phone** (`phone`, `text`, required: false): Enter your phone number.
* **Date** (`date`, `date`, required: false): Select the date you plan to attend the event.
* **Time** (`time`, `time`, required: false): Choose your time of attendance from the available options.
* **Event Name** (`event_name`, `text`, required: false): Enter the name of the event you wish to attend.
* **Event Date** (`event_date`, `date`, required: false): Select the date of the event from the calendar.
* **Attendee Type** (`attendee_type`, `select_one`, required: false): Choose your role in the event from the options provided.
	+ Event Host
	+ Speaker
	+ Attendee
* **Comments** (`comments`, `note`, required: false): Add any additional comments or information about your attendance.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Indicate whether you've been assigned a tool by selecting "Yes" or "No".
