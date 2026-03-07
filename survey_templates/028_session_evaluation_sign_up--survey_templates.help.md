<thinking>
We have a form called "Session Evaluation Sign Up" that is used to collect evaluation data for sessions or events. This form is designed to be completed by attendees who have participated in a session or event. The form is used to capture relevant information such as attendee name, session name, event name, evaluation date, evaluation time, session duration, rating, feedback, and comments.

To prevent users from submitting duplicate evaluations, we have implemented a logic to check for non-duplication of evaluations for the same session. This ensures that each attendee can only submit one evaluation per session.

The form is designed to be completed in a few steps, and each step is explained below.

</thinking>

# Session Evaluation Sign Up - Help Guide
## Purpose
This form is used to collect evaluation data for sessions or events. It is designed to be completed by attendees who have participated in a session or event.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your attendee name in the "Attendee Name" field.
2. Fill in the session name in the "Session Name" field.
3. Fill in the event name in the "Event Name" field.
4. Select the evaluation date in the "Evaluation Date" field. Make sure to choose a date for when you attended the session.
5. Select the evaluation time in the "Evaluation Time" field. Make sure to choose a time for when you attended the session.
6. Fill in the session duration in the "Session Duration" field.
7. Select a rating for the session in the "Rating" field. This is a measure of how good or bad you thought the session was.
8. Fill in any feedback for the session in the "Feedback" field.
9. Fill in any comments for the session in the "Comments" field.
10. Click the "Submit" button to submit your evaluation.

## Field-by-Field Explanation

* **Attendee Name** (`attendee_name`, text, required): Please fill in your name as the attendee of the session.
* **Session Name** (`session_name`, text, required): Please fill in the name of the session you attended.
* **Event Name** (`event_name`, text, required): Please fill in the name of the event where the session took place.
* **Evaluation Date** (`evaluation_date`, date, required): Please select the date when you attended the session.
* **Evaluation Time** (`evaluation_time`, time, required): Please select the time when you attended the session.
* **Session Duration** (`session_duration`, number, required): Please fill in how long the session lasted.
* **Rating** (`rating`, select_one, optional): Please select a rating for the session, 1 being the lowest and 5 being the highest.
* **Feedback** (`feedback`, text, optional): Please add any feedback you have for the session.
* **Comments** (`comments`, text, optional): Please add any comments you have for the session.
* **Submit** (`submit`, text, required): Please click this button to submit your evaluation.

Please note that all fields are required unless otherwise specified as optional.
