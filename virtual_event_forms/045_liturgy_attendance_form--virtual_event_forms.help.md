# liturgy_attendance_form - Help Guide
## Purpose
The liturgy_attendance_form is a form used to track attendance records for virtual events or meetings. It captures information about dates, times, topics, attendees, comments, email addresses, phone numbers, and assignment status.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant options for each field based on the event you are tracking.
2. Fill in the required fields, which are labeled as "required".
3. Leave optional fields blank or select as many or as few options as applicable for your needs.

## Field-by-Field Explanation
### 1. **Sunday Service Attendance**
* (`sunday_service_attendance`, `text`, required: false) - Enter the attendance records for the Sunday service.
* This field is used to record the number of people present at the Sunday service.

* **Weekly Meeting Attendance**
* (`weekly_meeting_attendance`, `text`, required: false) - Enter the attendance records for the weekly meeting.
* This field is used to record the number of people present at the weekly meeting.

* **Meeting Date**
* (`meeting_date`, `date`, required: false) - Enter the date of the meeting.
* This field is used to record the date of the meeting.

* **Meeting Time**
* (`meeting_time`, `time`, required: false) - Enter the time of the meeting.
* This field is used to record the time of the meeting.

* **Meeting Topic**
* (`meeting_topic`, `select_one`, required: false) - Select the topic of the meeting.
* This field is used to choose the topic of discussion from the provided options.

* **Attendees**
* (`attendees`, `select_multiple`, required: false) - Select the attendees of the meeting.
* This field is used to choose multiple attendees from the provided options.

* **Comments**
* (`comments`, `note`, required: false) - Enter any comments or remarks about the meeting.
* This field is used to add any additional notes or comments about the meeting.

* **Email Address**
* (`email_address`, `email`, required: false) - Enter the email address associated with the meeting.
* This field is used to add an email address for the meeting.

* **Phone Number**
* (`phone_number`, `text`, required: false) - Enter the phone number associated with the meeting.
* This field is used to add a phone number for the meeting.

* **Assigned To**
* (`assigned_to`, `select_multiple`, required: false) - Select the person or group assigned to the meeting.
* This field is used to choose the person or group assigned to the meeting.

## Tips
* Ensure that you fill in all required fields for accurate tracking and reporting.
* Use the available options for select_one and select_multiple fields to make selection easier and faster.
* If unsure about a specific field, refer to the event organizer or administrator for further clarification.
* Save your work regularly to avoid data loss due to incomplete or interrupted sessions.
