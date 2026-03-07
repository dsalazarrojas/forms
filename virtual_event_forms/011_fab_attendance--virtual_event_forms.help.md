<thinking>This guide is intended for users who need to report their attendance to the virtual event. It is designed for employees and partners, and it's crucial to complete it accurately to ensure proper tracking and evaluation of the event's success. This form is not meant to be filled out multiple times, as it's meant to be completed only once per user per event.

</thinking>

# fab_attendance - Help Guide
## Purpose
This form is designed to report attendance to a virtual event. It collects information about the event attended, including the date attended, attendance status, and contact information.

## How To Complete This Form
To complete this form accurately, follow these steps:

1.  Select a date when you attended the virtual event.
2.  Choose the event you attended from the options.
3.  Indicate whether you attended the virtual event or not.
4.  If you need to add extra information, use the comments field.
5.  Enter your email address for further contact.
6.  Enter your phone number for quick contact.
7.  Fill in any other information as necessary in the comments field.

## Field-by-Field Explanation

*   **Attendance Date** (`attendance_date`, date, required: false): Enter the date you attended the virtual event. This helps track the attendance dates for the event.
*   **Event** (`event_id`, select_one, required: false): Choose the event you attended from the options provided. This field ensures accurate event tracking.
*   **Event Attended** (`event_attended`, select_one, required: false): Indicate whether you attended the virtual event. This field is used to track attendance status.
*   **Attendance Time** (`attendance_time`, time, required: false): Note the time you attended the virtual event. This information helps with event timing data.
*   **Comments** (`comments`, note, required: false): Enter any additional comments about the event you attended. This field can be used to provide extra context.
*   **Email** (`email`, email, required: false): Enter your email address for further contact. This field helps with follow-up communications.
*   **Phone** (`phone`, text, required: false): Enter your phone number for quick contact. This field allows for quick and direct communication.
