# Students And Faculty Attendance Record Form - Help Guide
## Purpose
The Students And Faculty Attendance Record Form is used to track student and faculty attendance. This form helps administrators and other authorized users record and maintain accurate attendance data for students and faculty members. The form is typically used in educational settings where attendance is a crucial aspect of student and faculty monitoring.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the student's name in the "Student Name" field (id: 1).
2. Provide the student's ID (id: 2) if applicable.
3. Enter the attendance date (id: 3) in the format of MM/DD/YYYY.
4. Select the attendance status (id: 4) from the dropdown menu (Present, Absent, or Late).
5. If applicable, enter the faculty name (id: 5) who is responsible for the student's attendance.
6. Enter the faculty ID (id: 6) if applicable.
7. Repeat steps 3 and 4 for the faculty member's attendance (id: 7 and 8).
8. Add any relevant notes (id: 9) for the student or faculty member's attendance.
9. Enter the email address (id: 10) of the student or faculty member if applicable.
10. Enter the phone number (id: 11) of the student or faculty member if applicable.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, optional): Enter the full name of the student, e.g., John Doe.
* **Student ID** (`student_id`, number, optional): If applicable, enter the student's ID number.
* **Attendance Date** (`attendance_date`, date, optional): Enter the date of attendance in the format MM/DD/YYYY.
* **Attendance Status** (`attendance_status`, select_one, optional): Select Present, Absent, or Late to indicate the student's or faculty member's attendance status.
* **Faculty Name** (`faculty_name`, text, optional): If applicable, enter the name of the faculty member responsible for the student's attendance.
* **Faculty ID** (`faculty_id`, number, optional): If applicable, enter the faculty member's ID number.
* **Attendance Date** (`attendance_date`, date, optional): Repeat the same attendance date for the faculty member.
* **Attendance Status** (`attendance_status`, select_one, optional): Repeat the same attendance status for the faculty member.
* **Notes** (`notes`, note, optional): Provide any additional notes or comments regarding the student or faculty member's attendance.
* **Email Address** (`email_address`, email, optional): If applicable, enter the email address of the student or faculty member.
* **Phone Number** (`phone_number`, text, optional): If applicable, enter the phone number of the student or faculty member.
