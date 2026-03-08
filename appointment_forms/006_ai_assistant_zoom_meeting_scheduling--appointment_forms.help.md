<thinking>
The form is for scheduling meetings using AI Assistant Zoom Meeting Scheduling.
It's used to create meeting invites that include calendar invites and meeting details.
The form will not be completed for meetings that are not in the future.
It will also not be completed for meetings that are not within the scheduled duration.
This form will be used for meetings that are intended to start in the future.
</thinking>

# AI Assistant Zoom Meeting Scheduling - Help Guide
## Purpose
This form is for scheduling meetings using AI Assistant Zoom Meeting Scheduling.
## How To Complete This Form
To complete this form, follow the instructions below:

1. Fill in your name as the requester in the **Requester Name** field.
2. Enter the email address that the calendar invite will be sent to in the **Requester Email** field.
3. Choose a preferred date and time for the meeting in the **Preferred Meeting Date** and **Preferred Meeting Time** fields, respectively.
4. Specify the meeting duration in minutes in the **Meeting Duration Minutes** field.
5. Provide a brief summary of the meeting agenda in the **Meeting Agenda Summary** field (optional).
6. Add any other attendees to the meeting by listing their names and emails in the **Other Attendees** field (optional).
7. Select the correct timezone for the meeting in the **Timezone** field.

## Field-by-Field Explanation
* **Requester Name** (`requester_name`, text, **Required**):
	+ Enter the name of the person requesting the meeting.
* **Requester Email** (`requester_email`, email, **Required**):
	+ Enter the email address where the meeting invite will be sent.
* **Preferred Meeting Date** (`preferred_date`, date, **Required**):
	+ Select a date for the meeting.
* **Preferred Meeting Time** (`preferred_time`, time, **Required**):
	+ Select a time for the meeting.
* **Meeting Duration Minutes** (`duration_minutes`, number, **Required**):
	+ Enter the duration of the meeting in minutes.
* **Meeting Agenda Summary** (`agenda_summary`, text, **Optional**):
	+ Briefly describe the purpose or main topics of the meeting.
* **Other Attendees** (`attendees`, text, **Optional**):
	+ List the names and email addresses of any additional attendees.
* **Timezone** (`timezone`, select_one, **Required**):
	+ Choose the timezone for the meeting.

## Tips
* Make sure to select a date and time that are in the future.
* Select a meeting duration that is realistic.
* Use the same timezone for all attendees to avoid confusion.
* Provide a clear and concise agenda summary to help attendees prepare.
