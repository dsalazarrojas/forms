# Event Rentals Reservation Form - Help Guide
## Purpose
This form is used to reserve an event at a venue. It gathers information for event planning and management purposes. Please fill out this form to create or update an event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the event date and start time.
2. Enter a title and description for your event.
3. Choose the venue for your event.
4. Enter the contact information for your event, including phone number and email.
5. Provide the address of your event.
6. If necessary, choose the equipment needed for your event.
7. Add any additional notes about your event.

## Field-by-Field Explanation
* **Event Date** (`event_date`, date, required): Enter the date of the event.
* **Event Start Time** (`event_start_time`, time, required): Enter the start time of the event.
* **Event End Time** (`event_end_time`, time, optional): Enter the end time of the event (if applicable).
* **Event Title** (`event_title`, text, required): Enter a title for your event.
* **Event Location** (`event_location`, text, required): Enter the location of your event.
* **Venue** (`venue_id`, select_one, required): Choose a venue from the list.
* **Event Description** (`event_description`, text, optional): Enter a description of your event.
* **Event Equipment** (`event_equipment`, select_multiple, optional): Select the equipment needed for your event.
* **Event Capacity** (`event_capacity`, number, required): Enter the maximum number of attendees for your event.
* **Event Contact** (`event_contact`, email, required): Enter the contact email for your event.
* **Event Phone** (`event_phone`, text, required): Enter the phone number for your event.
* **Event Address** (`event`, text, required): Enter the address of your event.
* **Event Notes** (`event_notes`, note, optional): Add any additional notes about your event.
* **Assigned Tool** (`assigned_tool`, text, optional): If assigned to a tool, enter the tool name.
* **Event Status** (`event_status`, text, optional): Enter the current status of your event.
