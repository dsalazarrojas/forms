<thinking>

This form, "outreach_date_confirmation_form", is used for confirming event dates with attendees. It's designed to be completed by both event organizers and attendees to ensure that everyone is on the same page. The form should only be filled out once for each event, and the data will be stored for future reference. Please ensure that you're filling out the correct event ID and date to avoid duplication of effort.

</thinking>

# outreach_date_confirmation_form - Help Guide
## Purpose
The purpose of this form is to collect and confirm event dates with attendees.

## How To Complete This Form
1. Find the event in the system that you would like to confirm the date for.
2. Ensure you have the correct `event_id` to associate with the event.
3. Fill out the date fields (`event_date` and `start_date`, `end_date`) according to the actual event schedule.
4. If the event has a fixed end time, fill out `end_time`. Otherwise, leave it blank.
5. Provide the `rsvp_id` if this is your personal RSVP ID (if provided by the event organizer).
6. List the attendees (names and numbers) in the `attendees` field.
7. If there are additional attendees not listed, enter them in the `other_attendees` field.
8. Enter the email address of at least one attendee in the `attendees_email` field.
9. Optionally, enter a phone number of at least one attendee in the `attendee_phone` field.

## Field-by-Field Explanation
* **Event ID (event_id)** (`event_id`, text, optional): A unique identifier for the event, used for reference and association.
* **Event Date (event_date)** (`event_date`, date, optional): The date of the event.
* **Start Date (start_date)** (`start_date`, date, optional): The start date of the event.
* **End Date (end_date)** (`end_date`, date, optional): The end date of the event.
* **End Time (end_time)** (`end_time`, text, optional): The end time of the event (if specified).
* **Event Type (event_type)** (`event_type`, text, optional): The type of event.
* **RSVP ID (rsvp_id)** (`rsvp_id`, text, optional): A personal RSVP ID provided by the event organizer (if applicable).
* **Attendees (attendees)** (`attendees`, text, optional): A list of attendees (names and numbers).
* **Other Attendees (other_attendees)** (`other_attendees`, text, optional): A list of additional attendees not included in the main list.
* **Attendee Email (attendees_email)** (`attendees_email`, email, optional): The email address of at least one attendee.
* **Attendee Phone (attendee_phone)** (`attendee_phone`, text, optional): A phone number of at least one attendee.

Note: This form should not be filled out multiple times for the same event. If you have any questions, please contact the event organizer.
