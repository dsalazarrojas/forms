# Mathematics Learning Attendance Form - Help Guide
## Purpose
The Mathematics Learning Attendance Form is used to track student attendance and participation in mathematics learning sessions. This form helps instructors or teachers to record the attendance of students, including their participation in sessions and reasons for absence.

## How To Complete This Form
To complete the form, follow these steps:

1. Select the correct answer for each field based on the session details.
2. Enter the math_session_id of the session being attended.
3. Choose the attendance status of the teacher ("Yes" or "No") for the teacher's presence during the session.
4. Enter the grade achieved by the students in the session ("Yes" or "No").
5. Enter the date of the math session being attended.
6. Enter the time of the math session being attended.
7. Choose the student participation status ("Yes" or "No") for each student.
8. Select the absent students ("Yes" or "No") for each student.
9. Choose the class attended by the students ("Yes" or "No") for each session.

## Field-by-Field Explanation
* **math_session_id** (number, required): Enter the unique identifier for the math session being attended.
* **teacher** (select_one, required): Choose "Yes" if the teacher was present, "No" otherwise.
* **grade** (select_one, required): Choose "Yes" if the students achieved a certain grade, "No" otherwise.
* **math_session_date** (date, required): Enter the date of the math session being attended.
* **math_session_time** (time, required): Enter the time of the math session being attended.
* **student_participation** (select_multiple, optional): Choose "Yes" for each student who participated in the session.
* **absent_students** (select_multiple, optional): Choose "Yes" for each student who was absent from the session.
* **class** (select_one, required): Choose "Yes" if the class attended by the students is relevant to the session.

## Tips
- Ensure that all fields are filled accurately and honestly to maintain the integrity of the attendance records.
- Use the correct math_session_id to avoid duplicate entries.
