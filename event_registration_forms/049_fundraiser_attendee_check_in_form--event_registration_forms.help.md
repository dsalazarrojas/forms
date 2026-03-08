# Fundraiser Attendee Check In Form - Help Guide
## Purpose
This form is used to check in attendees to a fundraiser event. It collects information about the attendee's name, contact details, and registration status. This information helps the event organizers to track attendee attendance and manage the event smoothly.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling in the "Check In" field, which is a text field for general comments or notes.
2. Enter the attendee's name in the "Attendee Name" field.
3. Confirm the attendee's name in the "Name Confirmation" field.
4. Provide the attendee's email address in the "Email" field.
5. Enter the attendee's phone number in the "Phone" field.
6. Enter the attendee's expected arrival time in the "Arrival Time" field.
7. Select the attendee's registration status from the options "Registered" or "Not Registered" in the "Registration Status" field.
8. Optionally, add any additional comments or feedback in the "Comments" field.

## Field-by-Field Explanation

* **Check In** (`check_in`, text, optional):
	+ A text field for general comments or notes about the attendee's check-in process.
* **Attendee Name** (`attendee_name`, text, optional):
	+ The name of the attendee, which should be entered correctly to ensure accurate tracking.
* **Name Confirmation** (`attendee_name_checkin`, note, optional):
	+ A field to confirm the attendee's name, usually a repetition of the attendee name.
* **Email** (`email`, email, optional):
	+ The email address of the attendee, which helps the event organizers to contact the attendee later.
* **Phone** (`phone`, text, optional):
	+ The phone number of the attendee, which is useful for communication during the event.
* **Arrival Time** (`arrival_time`, time, optional):
	+ The expected arrival time of the attendee, which helps the event organizers to schedule accordingly.
* **Registration Status** (`registration_status`, select_one, optional):
	+ A dropdown option to indicate whether the attendee is registered or not registered for the event.
* **Comments** (`comments`, text, optional):
	+ A text field for attendees or organizers to add any additional comments or feedback about the event.

## Tips
* Please ensure that the attendee's name is entered correctly to avoid any confusion.
* If the attendee has not yet registered for the event, please select "Not Registered" in the "Registration Status" field.
* You can add any additional comments or feedback in the "Comments" field for the event organizers to review.
