# Esports Arena Time Booking Form - Help Guide
## Purpose
The Esports Arena Time Booking Form is used to book time slots for various events at the arena. This form gathers information about the event, including its type, date, time, duration, and contact details.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Select the event type from the options provided (Gaming Station, Event Room, or Other).
2. Enter the date and time of the event.
3. Choose the duration of the event from the available options or input a custom duration.
4. Add any event details or notes in the Event Details field.
5. Add any additional event notes in the Event Notes field.
6. Select one or more venues where the event will take place from the options provided.
7. Enter the contact number and contact email address of the event organizer.

## Field-by-Field Explanation

* **User** (id: 1, text, required: false): Enter the name of the user who is booking the event.
* **Event Type** (id: 2, select_one, required: false): Choose the type of event (Gaming Station, Event Room, or Other).
* **Event Date** (id: 3, date, required: false): Enter the date of the event in YYYY-MM-DD format.
* **Start Time** (id: 4, time, required: false): Select the start time of the event in 24-hour format (HH:MM).
* **End Time** (id: 5, time, required: false): Select the end time of the event in 24-hour format (HH:MM).
* **Duration** (id: 6, number, required: false): Enter the duration of the event in hours.
* **Event Details** (id: 7, note, required: false): Add any additional details about the event.
* **Event Notes** (id: 8, note, required: false): Add any other notes about the event.
* **Venue** (id: 9, select_multiple, required: false): Select one or more venues where the event will take place from the options provided.
* **Contact Number** (id: 10, text, required: false): Enter the contact number of the event organizer.
* **Contact Email** (id: 11, email, required: false): Enter the contact email address of the event organizer.
