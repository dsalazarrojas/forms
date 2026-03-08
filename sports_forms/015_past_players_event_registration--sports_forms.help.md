# Past Players Event Registration - Help Guide
## Purpose
The Past Players Event Registration form is designed to collect information about past players in a sports-related event.

## How To Complete This Form

To complete this form, follow the steps below:

1. Fill in the required fields:
   - **Name**: Enter the name of the player.
   - **Email**: Enter the player's email address.
   - **Phone**: Enter the player's phone number.
   - **Form Submission**: Select the status of the form submission (Completed, In Progress, Not Started).

2. If applicable, fill in the optional fields:
   - **Event Details**: Provide a brief description of the event.
   - **Attendees**: If the player was part of a team or group, select the relevant option.
   - **RSVP**: Select the player's RSVP status.
   - **Comments**: Add any additional comments about the player's participation.
   - **Date**: Enter the date of the event.
   - **Time**: Enter the time of the event.
   - **Venue**: Enter the location of the event.

## Field-by-Field Explanation

* **Event Details** (`event_details`, text, required: false): Enter a brief description of the event.
* **Name** (`name`, text, required: false): Enter the name of the player.
* **Email** (`email`, email, required: false): Enter the player's email address.
* **Phone** (`phone`, text, required: false): Enter the player's phone number.
* **Attendees** (`attendees`, select_multiple, required: false): If the player was part of a team or group, select the relevant option.
* **RSVP** (`rsvp`, select_one, required: false): Select the player's RSVP status.
* **Comments** (`comments`, note, required: false): Add any additional comments about the player's participation.
* **Date** (`date`, date, required: false): Enter the date of the event.
* **Time** (`time`, time, required: false): Enter the time of the event.
* **Venue** (`venue`, text, required: false): Enter the location of the event.
* **Form Submission** (`form_submission`, select_one, required: false): Select the status of the form submission.

## Tips

* Please ensure that you have already checked if a player with the same name, email, or phone number has already been registered for a similar event.
* For team or group events, select the correct option in the **Attendees** field.
* For events with multiple dates and times, use the correct format for the **Date** and **Time** fields.
