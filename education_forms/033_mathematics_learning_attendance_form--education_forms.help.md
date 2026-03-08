# Mathematics Learning Attendance Form - Help Guide
## Purpose
The Mathematics Learning Attendance Form is designed to record and track the attendance of students in mathematics sessions, as well as provide a means for instructors to leave comments and updates on session status.

## How To Complete This Form
1. Enter the session ID for the mathematics session you wish to report on.
2. Select the status of the session (Active or Inactive) from the options provided.
3. If necessary, provide a comment for the session.
4. Enter the number of students who attended the session.
5. If applicable, select a follow-up status (Active or Inactive) for the session.
6. Leave any additional comments for the session.
7. If the session has a specific start and end time, enter those dates and times.

## Field-by-Field Explanation
* **Math Session** (`math_session`, text, required): Enter the unique ID for the mathematics session you're reporting on.
* **Teacher ID** (`teacher_id`, number, optional): Enter your unique teacher ID (if applicable).
* **Grade Level** (`grade_id`, number, optional): Enter the relevant grade level or course code (if applicable).
* **Student Count** (`student_count`, number, optional): Enter the number of students who attended the session (if any).
* **Math Session Status** (`math_session_status`, select_one, optional): Select whether the session is currently Active or Inactive.
* **Comments** (`comments`, text, optional): Leave any additional comments or observations about the session.
* **Follow-up Status** (`follow_up_status`, select_one, optional): Select whether further follow-up is necessary (Active or Inactive).
* **Teacher Comments** (`teacher_comments`, text, optional): Leave comments or feedback for the teacher.
* **Session Start Time** (`session_start_time`, time, optional): Enter the start time of the session (if applicable).
* **Session End Time** (`session_end_time`, time, optional): Enter the end time of the session (if applicable).
