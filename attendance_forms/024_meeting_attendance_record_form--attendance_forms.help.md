# Meeting Attendance Record Form - Help Guide
## Purpose
The Meeting Attendance Record Form is designed to capture attendance information for meetings. This form helps in accurately recording the details of meetings, including the date, start and end times, location, description, goals, and outcomes.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the meeting date in the format `YYYY-MM-DD` in the `Meeting Date` field.
2. Select the `Meeting Start Time` and `Meeting End Time` using the 24-hour clock format `HH:MM:SS`.
3. Enter the meeting location in the `Meeting Location` field.
4. Provide a brief description of the meeting in the `Meeting Description` field.
5. Choose up to 3 goals for the meeting from the available options in the `Meeting Goals` field.
6. Enter the meeting outcome in the `Meeting Outcome` field.
7. Optionally, select the attendee's `First Name`, `Last Name`, `Job Title`, and `Department` from the available options in the `Meeting Fields` field.
8. Click submit to save your input.

## Field-by-Field Explanation
* **Meeting Date** (`meeting_date`, `date`, required): Enter the date of the meeting in the format `YYYY-MM-DD`.
* **Meeting Start Time** (`meeting_start_time`, `time`, required): Select the start time of the meeting using the 24-hour clock format `HH:MM:SS`.
* **Meeting End Time** (`meeting_end_time`, `time`, required): Select the end time of the meeting using the 24-hour clock format `HH:MM:SS`.
* **Meeting Location** (`meeting_location`, `text`, required): Enter the location of the meeting.
* **Meeting Description** (`meeting_description`, `text`, required): Provide a brief description of the meeting.
* **Meeting Goals** (`meeting_goals`, `select_one`, required): Choose up to 3 goals for the meeting from the available options.
* **Meeting Outcome** (`meeting_outcome`, `text`, required): Enter the outcome of the meeting.
* **Meeting Fields (Optional)** (`meeting_attendance_form_fields`, `select_multiple`, optional): Optionally, select up to 4 fields: `First Name`, `Last Name`, `Job Title`, and `Department` for the attendee.
* **Meeting Fields (Optional) options**: 
  * `First Name`: The attendee's first name.
  * `Last Name`: The attendee's last name.
  * `Job Title`: The attendee's job title.
  * `Department`: The attendee's department.
