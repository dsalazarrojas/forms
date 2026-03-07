<thinking>
This form is used for checking in attendees at virtual events. It helps to track attendee information, status, and other relevant details. The form can be completed by attendees to confirm their attendance and provide any additional information required by the event organizers.
Before starting the form, make sure you are not duplicating an existing record for your event. You can check the event's registration form in the database or ask the event organizer if there is already a record for you.
</thinking>

# Virtual Event Check In - Help Guide
## Purpose
This form is used for checking in attendees at virtual events, allowing you to track your attendance and provide additional information as required.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields with the requested information.
2. Select your status as an attendee from the options provided.
3. Choose any additional options that apply to you from the selection options.
4. Enter any comments or additional information as needed.
5. Review your submission for accuracy before submitting.

## Field-by-Field Explanation
* **Name** (`name`, `text`, required: false): Enter your full name as it appears on your registration form.
* **Email** (`email`, `email`, required: false): Enter your email address, which is used for communication and event updates.
* **Phone** (`phone`, `text`, required: false): Provide your phone number for any additional contact or support.
* **Attendee Info** (`attendee_info`, `text`, required: false): This field is intended for any additional information or notes about your attendance.
* **Attendee Status** (`attendee_status`, `select_one`, required: false): Choose your attendee status from the options provided:
	+ Active: You are actively participating in the event.
	+ Inactive: You are not currently attending the event.
* **Registered At** (`registered_at`, `date`, required: false): If applicable, enter the date and time you registered for the event.
* **Checked In At** (`checked_in_at`, `time`, required: false): If applicable, enter the time you checked in for the event.
* **Checked Out At** (`checked_out_at`, `time`, required: false): If applicable, enter the time you checked out for the event.
* **Comments** (`comments`, `text`, required: false): Add any comments or remarks about your attendance.
* **Additional Info** (`additional_info`, `select_multiple`, required: false): Select any additional options that apply to you:
	+ Yes: You have additional information to provide.
	+ No: You do not have additional information to provide.

## Tips
* Make sure to review your submission for accuracy before submitting.
* If you are having trouble filling out a field, contact the event organizers for assistance.
* This form is intended for attendee use only; do not attempt to use it for other purposes.
