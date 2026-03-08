<thinking>As a form designer and technical writer, I'll first analyze the form's purpose and structure. This form is used to record attendance and other relevant information for mathematics learning sessions. It's likely used in an educational setting, such as a school or university. The form collects data on the session details, student performance, and attendance status. It seems to be a straightforward form for tracking session metrics, attendance, and student information. I will not output any internal reasoning or comments after this block.

# Mathematics Learning Attendance Form - Help Guide
## Purpose
This form is designed to record attendance and track metrics for mathematics learning sessions. It's used to collect data on session details, student performance, and attendance status.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the `Math Session ID` to identify the session being recorded.
2. Enter the `Tutor ID` and `Teacher ID` if applicable.
3. Enter the `Student ID` of the students who attended the session.
4. Select the `Math Session Date` from the calendar.
5. Choose the `Student Grade` level achieved by the student during the session.
6. Select the `Attendance Status` of each student (Present, Absent, or Late).
7. Choose the `Session Type` (Math Class, Test Preparation, or Homework Help).
8. Enter the `Math Session Topic` if applicable.
9. Select the class participants using `Class Participants`.
10. Enter the number of `Total Students`, `Total Absent`, and `Total Late` students.
11. Enter the `Punctuality Score` if applicable.
12. Enter the `Session Minutes` of the session.
13. Enter any additional `Notes` about the session.
14. If applicable, enter the `Math Session Duration` and `Session Start Time`.

## Field-by-Field Explanation
* **Math Session ID** (`math_session_id`, number, required): Enter the unique ID of the mathematics learning session.
* **Tutor ID** (`tutor_id`, number, optional): Enter the ID of the tutor who conducted the session.
* **Teacher ID** (`teacher_id`, number, optional): Enter the ID of the teacher who conducted the session.
* **Student ID** (`student_id`, number, required): Enter the ID of the student who attended the session.
* **Math Session Date** (`math_session_date`, date, required): Select the date of the mathematics learning session from the calendar.
* **Student Grade** (`student_grade`, select_one, required): Choose the grade level achieved by the student during the session.
* **Attendance Status** (`attendance_status`, select_multiple, required): Select the attendance status of each student (Present, Absent, or Late).
* **Session Type** (`session_type`, select_one, optional): Choose the type of session (Math Class, Test Preparation, or Homework Help).
* **Math Session Topic** (`math_session_topic`, text, optional): Enter the topic of the mathematics session.
* **Class Participants** (`class_participants`, select_multiple, required): Select the class participants.
* **Total Students** (`total_students`, number, optional): Enter the total number of students in the class.
* **Total Absent** (`total_absent`, number, required): Enter the number of absent students.
* **Total Late** (`total_late`, number, optional): Enter the number of late students.
* **Punctuality Score** (`punctuality_score`, number, optional): Enter the punctuality score of the session.
* **Session Minutes** (`session_minutes`, number, optional): Enter the session duration in minutes.
* **Notes** (`notes`, text, optional): Enter any additional notes about the session.
* **Math Session Duration** (`math_session_duration`, number, optional): Enter the duration of the mathematics session in minutes.
* **Total Students in Class** (`total_students_in_class`, number, optional): Enter the total number of students in the class.
* **Total Students in Session** (`total_students_in_session`, number, optional): Enter the total number of students in the session.
* **Session Start Time** (`session_start_time`, time, optional): Enter the start time of the session.
