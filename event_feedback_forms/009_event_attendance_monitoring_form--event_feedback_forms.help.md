# event-attendance-monitoring-form - Help Guide
## Purpose
This form is used for tracking event attendance.

## How To Complete This Form
1. Fill out as much or as little information as you need about the event.
2. Answer the "attendees" field with one of the options provided.
3. For fields related to timing, select the correct times according to the time zone of the event location.

## Field-by-Field Explanation

* **Attendees** (`attendees`, `select_multiple`, required: false): Select the number of attendees for this event.
* **Event-date** (`event_date`, `date`, required: false): Enter the date of the event in any format, but be aware that we might not be able to parse it correctly if it's not in standard date formats.
* **Event-start-time** (`event_start_time`, `time`, required: false): Enter the start time of the event, in any format. Be aware that if you provide a time in a non-standard format, we might not be able to parse it correctly.
* **Event-end-time** (`event_end_time`, `time`, required: false): Enter the end time of the event, in any format. Be aware that if you provide a time in a non-standard format, we might not be able to parse it correctly.
* **Event-start-time-utc** (`event_start_time_utc`, `time`, required: false): Enter the start time of the event in UTC time, if you're providing times in this format.
* **Event-end-time-utc** (`event_end_time_utc`, `time`, required: false): Enter the end time of the event in UTC time, if you're providing times in this format.
* **Event-location** (`event_location`, `text`, required: false): Enter the location of the event, if known.
* **Event-notes** (`event_notes`, `note`, required: false): Enter any additional notes about the event.
* **Event-organizer** (`event_organizer`, `text`, required: false): Enter the name of the event organizer, if known.
* **Event-organizers-email** (`event_organizers_email`, `email`, required: false): Enter the email of the event organizer, if known.
* **Event-organizer-phone** (`event_organizer_phone`, `text`, required: false): Enter the phone number of the event organizer, if known.
* **Event-organizer-name** (`event_organizer_name`, `text`, required: false): Enter the name of the event organizer, if known.
* **Attendees-count** (`attendees_count`, `number`, required: false): Enter the number of attendees for this event.
* **Event-started** (`event_started`, `text`, required: false): Indicate if the event has started.
* **Event-ended** (`event_ended`, `text`, required: false): Indicate if the event has ended.
