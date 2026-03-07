<thinking>
This is a form for RSVPing to an event. It should only be completed for events where the user has already been invited.

The "Event Details" page is where you should enter a brief description of the event you are RSVPing to. This can include information like event name, date, time, and location.

The "Guest Details" page is where you should enter information about the guests attending the event. You can enter the names of the guests, their contact information, and any special requests they may have.

The "Special Requests" page is where you can enter any additional information or requests you have for the event.

On the "RSVP" page, you will be asked to confirm your response and select whether you will be attending the event or not. You must confirm your response.

The "Attendees" page is where you can select which guests will be attending the event.

The "Message or Comment" page is where you can include any additional comments or information about your RSVP.

</thinking>

# sweet16_event_rsvp - Help Guide
## Purpose
This form is for RSVPing to an event. It should only be completed for events where you have already been invited.

## How To Complete This Form
To complete this form, please follow these steps:

1. Complete the "Event Details" page with a brief description of the event you are RSVPing to.
2. Complete the "Guest Details" page with information about the guests attending the event.
3. Complete the "Special Requests" page with any additional information or requests you have.
4. On the "RSVP" page, confirm your response and select whether you will be attending the event or not.
5. On the "Attendees" page, select which guests will be attending the event.
6. Finally, on the "Message or Comment" page, include any additional comments or information about your RSVP.

## Field-by-Field Explanation

* **Event Details (Event Details)** (`event_details`, text, required/optional): Enter a brief description of the event you are RSVPing to.
* **Guest Details (Guest Details)** (`guest_details`, text, required/optional): Enter information about the guests attending the event.
* **Special Requests (Special Requests)** (`special_requests`, text, required/optional): Enter any additional information or requests you have.
* **Confirm your RSVP (RSVP)** (`rsvp_confirmation`, select_one, required/true): Confirm that you are responding to the event.
* **Attendees (Attendees)** (`attendees`, select_multiple, required/true): Select which guests will be attending the event.
* **Message or Comment (Message or Comment)** (`message`, text, required/optional): Include any additional comments or information about your RSVP.
* **Confirm Rsvp (Confirm Rsvp)** (`confirm_rsvp`, select_one, required/true): Confirm your RSVP selection.
