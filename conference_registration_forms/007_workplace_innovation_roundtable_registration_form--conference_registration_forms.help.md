<thinking>
To create a user-facing help guide for the "Workplace Innovation Roundtable Registration Form" that is clear, concise, and practical, let's first establish the form's purpose and internal reasoning. The form is designed to collect information from attendees for a workplace innovation roundtable, likely for event planning and organization purposes. The form seems to require basic attendee information (name, email, phone number) and event details (title, date, start and end times, venue), along with an RSVP option to indicate attendance confirmation.

Given this context, it's essential to ensure that the form is completed accurately and consistently to avoid duplication and incorrect data. A clear help guide is crucial to ensure that end users understand their responsibilities and the importance of providing precise information.

Upon reviewing the provided YAML, it appears that the form consists of 10 fields, each with a unique label, type, and required status. The fields are divided into two pages, but for the purpose of this guide, we'll focus on the individual fields.

</thinking>

# Workplace Innovation Roundtable Registration Form - Help Guide
## Purpose
The Workplace Innovation Roundtable Registration Form is designed to collect information from attendees for event planning and organization purposes.

## How To Complete This Form
To complete this form accurately and efficiently, follow these steps:

1. Fill out all required fields (denoted by *) with accurate and precise information.
2. Enter your name (attendee_name) as it appears on official records or identification.
3. Enter your valid email address (attendee_email).
4. Enter your phone number (attendee_phone) for contact purposes.
5. Enter the title of the event (event_title).
6. Enter the date (event_date) of the event in the standard date format (YYYY-MM-DD).
7. Enter the start and end times (event_start_time and event_end_time) of the event in the standard time format (HH:MM).
8. Enter the venue (venue) where the event will take place.
9. Select your RSVP status (rsvp) to indicate whether you will attend the event.

## Field-by-Field Explanation

* **Registration Form** (`registration_form`, text, optional): This field is not required but can be used to enter any additional comments or information about your participation in the event.
* **Attendee Name** (`attendee_name`, text, required): Enter your name as it appears on official records or identification.
* **Attendee Email** (`attendee_email`, email, required): Enter your valid email address for contact purposes.
* **Attendee Phone** (`attendee_phone`, text, required): Enter your phone number for contact purposes.
* **Event Title** (`event_title`, text, required): Enter the title of the event.
* **Event Date** (`event_date`, date, required): Enter the date of the event in the standard date format (YYYY-MM-DD).
* **Event Start Time** (`event_start_time`, time, required): Enter the start time of the event in the standard time format (HH:MM).
* **Event End Time** (`event_end_time`, time, required): Enter the end time of the event in the standard time format (HH:MM).
* **Venue** (`venue`, text, required): Enter the location where the event will take place.
* **RSVP** (`rsvp`, select_multiple, required): Select whether you will attend the event by choosing either "yes" or "no".
