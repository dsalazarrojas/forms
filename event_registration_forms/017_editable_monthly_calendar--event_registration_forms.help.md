<thinking>
The form is called "editable_monthly_calendar". It's used for creating or editing events. This form is intended to be used by users to create or modify existing events. It appears to be designed for managing recurring events, allowing users to specify the event type, description, location, and other relevant details. The form seems to be focused on creating events that can be repeated over time, with options for specifying start and end dates, times, and frequencies. However, the form's design appears to be somewhat redundant, with multiple fields having similar labels and purposes. It would be beneficial to simplify the form and remove or re-label fields with overlapping functionality to prevent user confusion.</thinking>

# editable_monthly_calendar - Help Guide
## Purpose
The editable_monthly_calendar form is used to create or edit events that can be repeated over time. This form is intended for managing recurring events.

## How To Complete This Form
To complete the editable_monthly_calendar form, follow these steps:

1. Select the event type from the "Event Type" field. This field allows you to choose the type of event you are creating or editing.
2. Provide a description of the event in the "Description" field.
3. Enter the date of the event in the "Date" field.
4. Specify the time of the event in the "Time" field.
5. Choose whether the event is located at a physical site by selecting "Yes" or "No" from the "Location" field.
6. Indicate whether attendees are required or not by selecting "Yes" or "No" from the "Attendees" field.
7. Specify if the event is an all-day event by entering "Yes" or "No" in the "All Day Event" field.
8. Enter the start date of the event in the "Start Date" field.
9. Enter the end date of the event in the "End Date" field.
10. Specify the end time of the event in the "End Time" field.
11. Enter the start time of the event in the "Start Time" field.
12. Set the repeat frequency of the event by selecting "Yes" or "No" from the "Repeat Frequency" field.
13. Specify whether the event repeats by selecting "Yes" or "No" from the "Repeat" field.
14. Choose how often the event repeats by selecting "Yes" or "No" from the "Repeat Until" field.
15. Enter the repeat time of the event in the "Repeat Time" field.
16. Enter any additional notes about the event in the "Notes" field.
17. Specify whether the event repeats by day of the week by selecting "Yes" or "No" from the "Repeat By" field.

## Field-by-Field Explanation
* **Event Type** (`event_type`, select_multiple, required: false): Choose the type of event you are creating or editing.
* **Description** (`description`, text, required: false): Enter a brief description of the event.
* **Date** (`date`, date, required: false): Enter the date of the event.
* **Time** (`time`, time, required: false): Enter the time of the event.
* **Location** (`location`, select_one, required: false): Choose whether the event is located at a physical site.
* **Attendees** (`attendees`, select_multiple, required: false): Indicate whether attendees are required or not.
* **All Day Event** (`all_day_event`, text, required: false): Specify if the event is an all-day event.
* **Start Date** (`start_date`, date, required: false): Enter the start date of the event.
* **End Date** (`end_date`, date, required: false): Enter the end date of the event.
* **End Time** (`end_time`, time, required: false): Specify the end time of the event.
* **Start Time** (`start_time`, time, required: false): Enter the start time of the event.
* **Repeat** (`repeat`, select_multiple, required: false): Set the repeat frequency of the event.
* **Repeat Until** (`repeat_until`, select_multiple, required: false): Choose how often the event repeats.
* **Repeat Time** (`repeat_time`, time, required: false): Enter the repeat time of the event.
* **Repeat Frequency** (`repeat_frequency`, select_one, required: false): Set the repeat frequency of the event.
* **Notes** (`notes`, note, required: false): Enter any additional notes about the event.
* **Repeat By** (`repeat_by`, select_multiple, required: false): Specify whether the event repeats by day of the week.
* **Start Date** (`start_date`, date, required: false): Enter the start date of the event.
