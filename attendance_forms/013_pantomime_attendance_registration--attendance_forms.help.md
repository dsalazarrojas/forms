<thinking>...</thinking>

# Pantomime Attendance Registration - Help Guide

## Purpose
This form is designed for attendees to register their attendance for specific pantomime events. It captures essential details including user information, event details, and seating preferences, enabling efficient event management and attendance tracking.

## How To Complete This Form
1. Fill in all required fields.
2. Select "Yes" for seat reservation and select the corresponding seats from the drop-down list.
3. Ensure that the event name, date, time, and location are accurate.
4. Optionally, add any additional comments or notes.
5. Review your form before submitting.

## Field-by-Field Explanation
* **User Details** (`user_details`, `text`, required): Enter your personal details.
* **Name** (`name`, `text`, required): Provide your name as it should be displayed for event records.
* **Email** (`email`, `email`, required): Enter your email address for event communication.
* **Attendance Date** (`attendance_date`, `date`, required): Specify the date you are planning to attend the event.
* **Seat Reservation** (`seat_reservation`, `select_one`, optional): Check "Yes" if you would like to reserve a seat. If you choose "Yes", please select the corresponding seat number(s) below.
	+ Note: This field is optional. If not selected, you will not be assigned a seat.
* **Seats** (`seats`, `select_multiple`, optional): Select all relevant seats you would like to reserve, or "No" if you do not need any seats.
	+ Note: This field is only visible if "Seat Reservation" is checked.
* **Event Details** (`event_details`, `text`, required): Enter the name of the event.
* **Event Name** (`event_name`, `text`, required): Enter the name of the event.
* **Event Date** (`event_date`, `date`, required): Specify the date of the event.
* **Event Time** (`event_time`, `time`, required): Specify the time of the event.
* **Theater** (`theater_name`, `text`, required): Enter the name of the theater where the event is being held.
* **Location** (`event_location`, `text`, required): Enter the location of the event.
* **Notes** (`notes`, `note`, optional): Add any additional comments or notes about your attendance.
* **Comments** (`comments`, `text`, optional): Add any additional comments about the event.
* **Assigned Tool** (`assigned_tool`, `text`, optional): Enter the tool assigned to you for the event.
* **Event Status** (`event_status`, `text`, optional): Enter the status of the event.
* **Form ID** (`form_id`, `text`, optional): Enter the form ID (this is not visible to attendees and is for internal use).
