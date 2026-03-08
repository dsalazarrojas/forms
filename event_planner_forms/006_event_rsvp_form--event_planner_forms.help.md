# event_rsvp_form - Help Guide
## Purpose
The event_rsvp_form is a simple form designed to collect RSVP information from event attendees. It helps event organizers collect necessary details such as first and last names, email addresses, phone numbers, event dates and times, and attendees' status.

## How To Complete This Form
To complete the event_rsvp_form, follow these steps:

1. Fill in your First Name in the "First Name" field.
2. Enter your Last Name in the "Last Name" field.
3. Enter your email address in the "Email" field. Ensure it's a valid email address format.
4. Enter your phone number in the "Phone" field.
5. Select the date and time you plan to attend the event in the "Event Date" and "Event Time" fields respectively.
6. Choose your attending status in the "Attending" field. Select "Yes" or "No" depending on whether you can attend the event.
7. Optionally, enter any comments about the event in the "Comments" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, optional): Enter your first name as it is.
* **Last Name** (`last_name`, text, optional): Enter your last name as it is.
* **Email** (`email`, email, optional): Enter a valid email address in the format of `username@domain`.
* **Phone** (`phone`, text, optional): Enter your phone number. This can be any format, but it's better to use the international format like `+1-123-456-7890`.
* **Event Date** (`event_date`, date, optional): Select the date you plan to attend the event. This is the date of the event.
* **Event Time** (`event_time`, time, optional): Select the time you plan to attend the event.
* **Attending** (`attending`, select_multiple, optional): Choose "Yes" if you can attend the event and "No" if you cannot.
* **Comments** (`comments`, text, optional): Enter any comments about the event if you have any.

## Tips
- Make sure to fill in all required fields (if any) before submitting the form.
- Double-check your email and phone number formats for correctness.
- Be honest when selecting your attending status.
- Use the "Comments" field to provide any additional information you think is important for the event organizer.
