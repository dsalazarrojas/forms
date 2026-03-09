# Event Viewing Registration Form - Help Guide
## Purpose
The Event Viewing Registration Form is a form used for attendees and organizers of virtual events to register and provide information about their attendance. This form helps event organizers gather the necessary details to manage the event smoothly.

## How To Complete This Form
- Fill in the form completely and accurately.
- Select the correct options for "inPersonRSVP" and "sessionSelection" based on your attendance status.
- Enter your attendee details, event details, venue details, and any additional comments in the text fields.
- Enter your email and phone number if you want to receive updates or notifications.
- If you want to receive updates via email or phone, make sure to fill in the "email" and "phone" fields respectively.
- Enter the event ID and form ID if required (usually only for internal use).
- Optionally, enter the date of the event.

## Field-by-Field Explanation
* **inPersonRSVP** (`inPersonRSVP`, `select_multiple`, required: false): Select 'Yes' if you plan to attend the event in person, 'No' if you do not plan to attend.
* **sessionSelection** (`sessionSelection`, `select_one`, required: false): Choose 'Yes' if you are interested in attending one of the sessions, 'No' if you are not.
* **attendeeDetails** (`attendeeDetails`, `note`, required: false): Enter any relevant details about yourself as an attendee, such as your name, title, or department.
* **eventDetails** (`eventDetails`, `text`, required: false): Provide any additional event-specific details or information about the event.
* **venueDetails** (`venueDetails`, `text`, required: false): Enter any details about the venue where the event is being held.
* **organizerDetails** (`organizerDetails`, `text`, required: false): Enter any details about the event organizer or the company hosting the event.
* **comments** (`comments`, `note`, required: false): Enter any additional comments or feedback about the event.
* **email** (`email`, `email`, required: false): Enter your email address to receive updates or notifications about the event.
* **phone** (`phone`, `text`, required: false): Enter your phone number to receive updates or notifications about the event.
* **emailSent** (`emailSent`, `text`, required: false): If you have already sent an email to the event organizer, enter the date you sent it.
* **phoneSent** (`phoneSent`, `text`, required: false): If you have already sent a phone call to the event organizer, enter the date you sent it.
* **eventId** (`eventId`, `number`, required: false): Enter the unique ID of the event.
* **formId** (`formId`, `number`, required: false): Enter the unique ID of the form.
* **date** (`date`, `date`, required: false): Enter the date of the event.
