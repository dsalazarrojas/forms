<thinking>
This form is designed to collect RSVPs for the "Sweet 16" event. The form is meant to be filled out by guests who have been invited to the event. The purpose of the form is to gather essential information from guests, including their name, email, phone number, event date and time, event venue, RSVP status, number of attendees, and any comments they may have.
The form is divided into two sections: personal information and event-specific details. Guests will be asked to provide their personal details, such as name, email, and phone number. They will also be asked to confirm their attendance by indicating whether they will be attending or not. In case of multiple attendees, they can select the number of people attending. Additionally, they can provide any comments about the event.
</thinking>

# sweet16_event_rsvp - Help Guide
## Purpose
The sweet16_event_rsvp form is designed to collect RSVPs for the "Sweet 16" event.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your personal details, including your name, email, and phone number.
2. Confirm your attendance by selecting "Attending" or "Not Attending".
3. If you are attending with others, select the number of people attending.
4. Provide any additional comments about the event.

## Field-by-Field Explanation
* **guest_name** (`guest_name`, text, required): Enter your name as we have on file or as you would like to be listed on the event invitation.
* **guest_email** (`guest_email`, email, required): Enter the email address we have on file or as we would like to reach you with event updates.
* **guest_phone** (`guest_phone`, text, required): Enter your phone number as we have on file or as we would like to reach you with event updates.
* **event_date** (`event_date`, date, required): Select the date of the event from the calendar.
* **event_time** (`event_time`, time, required): Select the time of the event from the calendar.
* **event_venue** (`event_venue`, text, required): Enter the venue where the event will be held.
* **RSVP** (`RSVP`, select_one, required): Select "Attending" to confirm your attendance, or "Not Attending" to decline.
* **Attendees** (`attendees`, select_multiple, required): If you are attending with others, select the number of people attending.
* **comments** (`comments`, text, optional): Provide any comments about the event.

## Tips
- Make sure to fill out all required fields to ensure accurate record keeping.
- If you are unsure about any of the fields, please contact the event organizer.
- Double-check your responses before submitting the form to avoid mistakes.
