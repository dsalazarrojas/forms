<thinking>
We will create a user-facing help guide that explains the purpose of the form, how to complete it, and each field's meaning.
The form "prophets" appears to be related to event registrations, possibly for events with specific start and end dates, statuses, and types. The field options hint at a system for tracking bookings or events, with fields for start and end dates, statuses (active or inactive), and event types (yes or no).
We will need to verify that the form doesn't have any redundant or unnecessary fields and ensure that the explanations are clear and concise. For example, the "start_date" and "end_date" fields are both dates, but one of them might be redundant.
</thinking>

# prophets - Help Guide
## Purpose
The "prophets" form is used for event registrations, allowing users to input event details such as start and end dates, statuses, and types.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have the necessary information ready, including the event start and end dates, status, and type.
2. Select the start date for the event from the calendar picker.
3. Select the end date for the event from the calendar picker.
4. Choose the booking status for the event (active or inactive).
5. Choose the event type (yes or no).
6. Optionally, add any additional notes about the event.

## Field-by-Field Explanation
* **Start Date** (`start_date`, date, required): Enter the start date of the event.
* **End Date** (`end_date`, date, required): Enter the end date of the event.
* **Booking Status** (`booking_status`, select_multiple, optional): Select the status of the event booking (active or inactive).
* **Status Options** (`booking_status_options`, text, optional): Enter any additional status options for the event (e.g., "pending", "confirmed", etc.).
* **Event Type** (`event_type`, select_one, optional): Select the type of event (yes or no).
* **Event Types** (`event_types`, text, optional): Enter any additional event types (e.g., "workshop", "conference", etc.).
* **Start Time** (`start_time`, time, optional): Enter the start time of the event (HH:MM format).
* **End Time** (`end_time`, time, optional): Enter the end time of the event (HH:MM format).
* **Notes** (`notes`, note, optional): Add any additional notes about the event.

## Tips
* Ensure that you are entering the correct start and end dates for the event.
* Be careful when selecting the booking status, as it may affect how the event is displayed or processed.
* If you have any additional information about the event, use the "Notes" field to add it.
