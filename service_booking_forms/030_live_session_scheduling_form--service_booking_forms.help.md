# Live Session Scheduling Form - Help Guide
## Purpose
This form is used to schedule live sessions for coaching, tutoring, or consulting services. 

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of session you want to schedule (Coaching, Tutoring, or Consulting).
2. Choose the start and end times for the session.
3. Specify the duration of the session.
4. Select the date for the session.
5. Choose the coach or team member who will be conducting the session.
6. Optionally, provide additional session notes.
7. Confirm your session booking.

## Field-by-Field Explanation
### Session Details
* **Session Details** (`session_details`, select_one, required): This field is used to select the type of session you want to schedule. You can choose from Coaching, Tutoring, or Consulting services.

### Start Time
* **Start Time** (`start_time`, time, required: false): This field allows you to specify the start time of the session. You can enter the time in 24-hour format (e.g., 14:00 for 2 PM).

### End Time
* **End Time** (`end_time`, time, required: false): This field allows you to specify the end time of the session. You can enter the time in 24-hour format (e.g., 17:00 for 5 PM).

### Duration
* **Duration** (`duration`, number, required: false): This field is used to specify the duration of the session in minutes. You can enter a numerical value to indicate the session duration.

### Date
* **Date** (`date`, date, required: false): This field is used to select the date for the session.

### Coach Details
* **Coach Details** (`coach_details`, select_multiple, required): This field is used to select the coach or team member who will be conducting the session. You can choose from Coach, Team Member, or Both.

### Session Topic
* **Session Topic** (`session_topic`, text, required: false): This field is used to provide additional notes or topic details about the session. You can enter any text to describe the session topic.

### Session Notes
* **Session Notes** (`session_notes`, text, required: false): This field is used to enter any additional notes about the session. You can enter any text to provide context or reminders for the session.

### Session Status
* **Session Status** (`session_status`, select_one, required): This field is used to indicate the status of the session. You can select from Scheduled, Confirmed, or Completed.

### Confirm Booking
* **Confirm Booking** (`confirm_booking`, select_one, required): This field is used to confirm or cancel the session booking. You can select True or False to confirm or cancel the booking.
