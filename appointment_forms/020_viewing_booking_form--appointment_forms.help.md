# Viewing Booking Form - Help Guide

## Purpose
This form is designed to collect information for viewing appointments or meetings in a business or professional setting.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter your first and last name in the "First Name" and "Last Name" fields.
2. Enter your email address in the "Email" field.
3. Enter your phone number in the "Phone" field.
4. Select the "Start Date" and "End Date" for the appointment.
5. Choose the "Start Time" and "End Time" for the appointment.
6. Enter the "Venue" for the meeting.
7. Choose the "Room" where the meeting will take place.
8. Enter a brief "Description" of the meeting, if necessary.
9. Set the "Viewing Time" and "Viewing Duration" for the appointment.
10. Select the "Viewing Date" for the appointment.
11. Set the "Booking Status" to "Available", "In Progress", or "Completed".
12. Enter the name of the person assigned to handle the appointment in the "Assigned To" field.
13. Decide whether to send a "Reminder" for the appointment.
14. Set the "Follow Up" and "Follow Up Time" if necessary.
15. Finally, select the "Form ID" to complete the form.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Start Date** (`start_date`, date, required): Select the start date of the appointment.
* **Start Time** (`start_time`, time, required): Select the start time of the appointment.
* **End Date** (`end_date`, date, required): Select the end date of the appointment.
* **End Time** (`end_time`, time, required): Select the end time of the appointment.
* **Venue** (`venue`, text, required): Enter the venue for the meeting.
* **Room** (`room`, select_one, required): Choose the room where the meeting will take place.
* **Description** (`description`, text, optional): Enter a brief description of the meeting.
* **Viewing Time** (`viewing_time`, number, required): Set the viewing time for the appointment.
* **Viewing Duration** (`viewing_duration`, number, required): Set the duration of the viewing appointment.
* **Viewing Date** (`viewing_date`, date, required): Select the date of the viewing appointment.
* **Booking Status** (`booking_status`, select_one, required): Set the booking status to "Available", "In Progress", or "Completed".
* **Assigned To** (`assigned_to`, text, required): Enter the name of the person assigned to handle the appointment.
* **Comments** (`comments`, text, optional): Enter any additional comments for the appointment.
* **Follow Up** (`follow_up`, text, optional): Enter any follow-up information for the appointment.
* **Follow Up Time** (`follow_up_time`, time, optional): Set the follow-up time for the appointment.
* **Reminder** (`reminder`, select_multiple, required): Decide whether to send a reminder for the appointment.
* **Form ID** (`form_id`, text, required): Select the form ID to complete the form.
* **Created At** (`created_at`, date, optional): Display the date the appointment was created.
* **Updated At** (`updated_at`, date, optional): Display the date the appointment was last updated.
* **Deleted At** (`deleted_at`, date, optional): Display the date the appointment was deleted.
* **Comments** (`comments`, text, optional): This field is not used for this form. The field named "Comments" is used in a different section for additional comments.
