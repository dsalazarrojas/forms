# Virtual Class Attendance Form - Help Guide
## Purpose
The Virtual Class Attendance Form is used to record the attendance of students in virtual classes. This form helps teachers track who is present, absent, or late in a class.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the attendance status of each student using the "Attendance Status" field.
2. Enter the date of the class using the "Date" field in the format YYYY-MM-DD.
3. Enter the time of the class using the "Time" field.
4. Enter the class code in the "Class Code" field, which is a 3-digit code for the class.
5. Enter the student's name in the "Student Name" field.
6. Provide any additional comments about the student's attendance status in the "Comments" field.

## Field-by-Field Explanation

* **Virtual Class Attendance** (`virtual_class_attendance_form`, `select_one`, required/optional): Select whether the student was present, absent, or late in the class.
* **Date** (`date`, `date`, required/optional): Enter the date of the class in the format YYYY-MM-DD.
* **Time** (`time`, `time`, required/optional): Enter the time of the class.
* **Class Code** (`class_code`, `text`, required/optional): Enter a 3-digit code for the class, which helps identify the class.
* **Student Name** (`student_name`, `text`, required/optional): Enter the name of the student.
* **Attendance Status** (`attendance_status`, `select_multiple`, required/optional): Select the attendance status of the student, which can be Present, Absent, or Late.
* **Comments** (`comments`, `text`, required/optional): Enter any additional comments about the student's attendance status.
