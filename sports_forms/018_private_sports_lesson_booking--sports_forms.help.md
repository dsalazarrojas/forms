<thinking>
The purpose of this form is to help users book a private sports lesson with a coach, providing essential details such as participants, lesson details, start and end dates and times, and the coach's name. This form is crucial for users to schedule and manage their sports lessons effectively. 
To prevent duplicate bookings, users are not allowed to book the same time slot for the same lesson with different participants, and the system checks for non-availability of coaches before confirming a booking.
</thinking>

# private_sports_lesson_booking - Help Guide
## Purpose
This form is designed to help users book private sports lessons with a coach, providing a platform for users to schedule and manage their lessons efficiently.

## How To Complete This Form
To complete this form, follow the instructions below:

1.  Select all the participants attending the lesson from the options provided in the "Participants" field.
2.  Enter the details of the lesson in the "Lesson Details" field.
3.  Choose the start and end dates and times for the lesson in the "Start Date", "Start Time", "End Date", and "End Time" fields.
4.  Enter the name of the coach in the "Coach Name" field.

## Field-by-Field Explanation

*   **Lesson Booking Form** (`lesson_booking_form`, text, required/optional): Enter a brief description of the lesson.
*   **Participants** (`participants`, select_multiple, required): Select all participants attending the lesson.
*   **Lesson Details** (`lesson_details`, text, required): Enter any additional details about the lesson, such as the type of sport, level of difficulty, or special requirements.
*   **Start Date** (`start_date`, date, required): Choose the start date of the lesson in the format `YYYY-MM-DD`.
*   **Start Time** (`start_time`, time, required): Choose the start time of the lesson in the format `HH:MM AM/PM`.
*   **End Date** (`end_date`, date, required): Choose the end date of the lesson in the format `YYYY-MM-DD`.
*   **End Time** (`end_time`, time, required): Choose the end time of the lesson in the format `HH:MM AM/PM`.
*   **Coach Name** (`coach_name`, text, required): Enter the name of the coach providing the lesson.

## Tips
- Ensure that all required fields are filled before submitting the form.
- Verify that the start and end dates and times are correctly entered to avoid scheduling conflicts.
- If you need to make any changes to the booking, please contact the system administrator or the coach directly.
