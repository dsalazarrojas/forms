# Student Attendance Record Form - Help Guide

## Purpose
The Student Attendance Record Form is designed to track student attendance, helping instructors monitor and report on student attendance accurately. It's essential to fill out this form with accurate information to ensure that students' records are up-to-date and accurate.

## How To Complete This Form
To complete this form, follow these steps:

1. Make sure you are using this form for its intended purpose only.
2. Fill out the required fields (student_id, attendance_date, student_name, class_id, section_id, and subject_id) with accurate and up-to-date information.
3. Choose the correct attendance status from the attendance_status field.
4. Provide any additional comments or explanations for the student's attendance status, if necessary.
5. Review the form for accuracy before submitting.

## Field-by-Field Explanation

* **Student ID** (`student_id`, `number`, required): Enter the unique identifier assigned to the student.
* **Attendance Date** (`attendance_date`, `date`, required): Enter the date of the attendance record.
* **Attendance Status** (`attendance_status`, `select_one`, required): Choose from the following options:
	+ IDLE: Indicates that the student is present and on task.
	+ ABSENT: Indicates that the student is not present in the class.
	+ LATE: Indicates that the student is present but late.
	+ EXCUSED: Indicates that the student is absent with a valid reason (e.g., illness, family emergency).
	+ UNEXCUSED: Indicates that the student is absent without a valid reason.
* **Reason for Absence** (`reason_for_absence`, `text`, optional): Provide a brief explanation for the student's absence, if applicable.
* **Additional Comments** (`additional_comments`, `text`, optional): Enter any additional comments or notes about the student's attendance.
* **Student Name** (`student_name`, `text`, required): Enter the student's full name.
* **Class ID** (`class_id`, `number`, required): Enter the identifier for the class.
* **Section ID** (`section_id`, `number`, required): Enter the identifier for the class section.
* **Subject ID** (`subject_id`, `number`, required): Enter the identifier for the subject.
* **Attendance Status Note** (`attendance_status_note`, `text`, optional): Enter any additional notes or comments about the student's attendance status.

## Tips
- Make sure to fill out the form accurately and thoroughly.
- Review the form for any errors before submitting.
- Use this form only for its intended purpose and avoid duplicate or redundant data entry.
- Keep the form up-to-date with the latest information.
