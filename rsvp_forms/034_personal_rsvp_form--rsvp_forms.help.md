# Personal RSVP Form - Help Guide

## Purpose
This form is designed to collect information from individuals about their attendance or status at an event. It provides organizers with necessary details to track attendance, contact information, and any additional notes or comments.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the event details and select the correct RSVP status for your attendance.
2. Enter your name and contact information, if required.
3. Select any additional guests who will be attending with you, if applicable.
4. Provide any additional notes or comments about your RSVP status.

## Field-by-Field Explanation

* **Event Info** (`event_info`, text, required/optional): Enter a brief description or title of the event.
* **RSVP Status** (`rsvp_status`, select_one, required/optional): Select whether you will attend (`True`), not attend (`False`), or have a Maybe status.
* **Guest Names** (`event_guests`, select_multiple, required/optional): Select any additional guests who will be attending with you.
* **Contact Email** (`contact_email`, email, required/optional): Enter a valid email address for contact purposes.
* **Contact Phone** (`contact_phone`, text, required/optional): Enter a phone number for contact purposes.
* **Event Date** (`event_date`, date, required/optional): Enter the date of the event.
* **Event Time** (`event_time`, time, required/optional): Enter the time of the event.
* **Note** (`note`, note, required/optional): Add any additional comments or notes about your RSVP status.
* **Event Location** (`event_location`, select_one, required/optional): Select whether the event is at a specific location (`Yes`) or not (`No`).
* **Event Start Time** (`event_start_time`, time, required/optional): Enter the start time of the event.
* **Event End Time** (`event_ending_time`, time, required/optional): Enter the end time of the event.
* **Created By** (`created_by`, text, required/optional): Enter the name of the person who created the event.
* **RSVP Status Note** (`rsvp_status_note`, select_multiple, required/optional): Select the status of your RSVP (Active or Inactive).
* **Contact Phone2** (`contact_phone2`, text, required/optional): Enter an alternative phone number for contact purposes.
