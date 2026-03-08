<thinking>
The form "media_coverage_slot_booking_form" is used to book media slots for events, allowing users to schedule media coverage for specific time periods. This form is typically used by event organizers or coordinators to request media coverage from various sources (reporters). The form captures essential information about the event, such as the event title, date, and time, as well as details about the media slot, including the slot start and end times, duration, and media type.

To prevent duplicate bookings, the system will prevent booking multiple media slots for the same time period. This form is designed to streamline the process of requesting media coverage for events.

To complete this form, please follow the instructions below:</thinking>

# media_coverage_slot_booking_form - Help Guide
## Purpose
The media_coverage_slot_booking_form is used to book media slots for events and schedule media coverage.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the Event Title in the "Event Title" field. This is the title of the event you are seeking media coverage for.
2. Select the Event Date using the "Event Date" field. This is the date on which the event will take place.
3. Enter the Event Time using the "Event Time" field. This is the time when the event will happen.
4. Enter the Media Slot Name in the "Media Slot Name" field. This is the name of the media slot you are booking.
5. Select the Slot Start Time using the "Slot Start Time" field. This is the start time of the media slot.
6. Select the Slot End Time using the "Slot End Time" field. This is the end time of the media slot.
7. Enter the Slot Duration using the "Slot Duration" field. This is the length of time you are booking for the media slot.
8. Enter the Coverage Name in the "Coverage Name" field. This is the name of the person or organization requesting media coverage.
9. Select the Media Type using the "Media Type" field. This is the type of media coverage you are booking (e.g., Option 1, Option 2, etc.).
10. Select the Media Format using the "Media Format" field. This is the format of the media coverage (e.g., Option 1, Option 2, etc.).
11. Enter the Reporter Name in the "Reporter Name" field. This is the name of the reporter covering the event.
12. Enter the Reporter Contact in the "Reporter Contact" field. This is the contact information for the reporter.
13. Select the Booking Date using the "Booking Date" field. This is the date on which you are booking the media slot.
14. Select the Booking Time using the "Booking Time" field. This is the time when you are booking the media slot.
15. Enter the Booking Duration using the "Booking Duration" field. This is the length of time you are booking the media slot for.
16. Select the Booking Status using the "Booking Status" field. This is the status of the booking (e.g., Option 1, Option 2, etc.).

## Field-by-Field Explanation

* **Event Title** (`event_title`, text, required): Enter a brief title for the event.
* **Event Date** (`event_date`, date, required): Select the date of the event.
* **Event Time** (`event_time`, time, required): Enter the time of the event.
* **Media Slot Name** (`media_slot_name`, text, required): Enter the name of the media slot being booked.
* **Slot Start Time** (`slot_start_time`, time, required): Select the start time of the media slot.
* **Slot End Time** (`slot_end_time`, time, required): Select the end time of the media slot.
* **Slot Duration** (`slot_duration`, number, required): Enter the length of time the media slot is being booked for.
* **Coverage Name** (`coverage_name`, text, required): Enter the name of the person or organization requesting media coverage.
* **Media Type** (`media_type`, select_one, required): Select the type of media coverage being booked (e.g., Option 1, Option 2, etc.).
* **Media Format** (`media_format`, select_one, required): Select the format of the media coverage (e.g., Option 1, Option 2, etc.).
* **Reporter Name** (`reporter_name`, text, required): Enter the name of the reporter covering the event.
* **Reporter Contact** (`reporter_contact`, text, required): Enter the contact information for the reporter.
* **Booking Date** (`booking_date`, date, required): Select the date on which you are booking the media slot.
* **Booking Time** (`booking_time`, time, required): Select the time when you are booking the media slot.
* **Booking Duration** (`booking_duration`, number, required): Enter the length of time you are booking the media slot for.
* **Booking Status** (`booking_status`, select_multiple, required): Select the status of the booking (e.g., Option 1, Option 2, etc.).
