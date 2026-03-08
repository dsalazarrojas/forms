# Exam Monitoring Attendance Form - Help Guide
## Purpose
This form is designed to monitor student attendance during exam sessions.

## How To Complete This Form

To complete this form, follow these steps:

1. **Enter the student's identifier**: This is a required field where you will enter the student's unique identifier.
2. **Choose the session date**: Select the date of the exam session.
3. **Enter the start and end times**: Enter the start and end times of the exam session.
4. **Check if students were supervised**: Choose 'Yes' or 'No' to indicate whether students were supervised during the session.
5. **Enter the number of students present**: Enter the total number of students who attended the session.
6. **Record student attendance**: Choose 'Yes' or 'No' to indicate whether students attended the session.
7. **Add supervision notes**: Enter any notes about the session, such as any incidents or issues that occurred.
8. **Add proctor comments**: Enter any comments from the proctor about the session.

## Field-by-Field Explanation

* **Student Identifier** (`student_identifier`, text, required): Enter the student's unique identifier, such as their student ID number.
* **Session Date** (`session_date`, date, required): Select the date of the exam session.
* **Start Time** (`start_time`, time, optional): Enter the start time of the exam session, if applicable.
* **End Time** (`end_time`, time, optional): Enter the end time of the exam session, if applicable.
* **Session Supervisors** (`session_supervisors`, select_multiple, optional): Choose 'Yes' or 'No' to indicate whether students were supervised during the session.
* **Student Count** (`student_count`, number, optional): Enter the total number of students who attended the session.
* **Student Attendance** (`student_attendance`, select_one, optional): Choose 'Yes' or 'No' to indicate whether students attended the session.
* **Supervision Notes** (`supervision_notes`, text, optional): Enter any notes about the session, such as any incidents or issues that occurred.
* **Proctor Comments** (`proctor_comments`, text, optional): Enter any comments from the proctor about the session.
