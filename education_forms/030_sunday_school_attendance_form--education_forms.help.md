# sunday_school_attendance_form - Help Guide
## Purpose
This form is used to track Sunday school attendance and gather relevant information about students.

## How To Complete This Form
1. Ensure you have all necessary information and permissions before completing this form.
2. Fill out the form with the required fields:
	* Student Name
	* Date
	* Time
	* Attendance (select 'Yes' or 'No')
	* Student Count
	* Teacher (select 'Yes' or 'No')
	* Class (select 'Yes' or 'No')
	* Room (select 'Yes' or 'No')
	* Building (select 'Yes' or 'No')
	* Floor (optional)
	* Section (optional)
	* Room Number (optional)
	* Notes 2 (optional)

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, required): Enter the name of the student.
* **Date** (`date`, date, required): Select the date of the attendance.
* **Time** (`time`, time, required): Select the time of the attendance.
* **Attendance** (`attendance`, select_multiple, required): Select 'Yes' if the student attended, 'No' otherwise.
* **Student Count** (`student_count`, number, required): Enter the number of students in attendance.
* **Teacher** (`teacher`, select_one, required): Select 'Yes' if you are the teacher, 'No' otherwise.
* **Class** (`class`, select_one, required): Select 'Yes' if the class is present, 'No' otherwise.
* **Room** (`room`, select_one, required): Select 'Yes' if the room is present, 'No' otherwise.
* **Building** (`building`, select_one, required): Select 'Yes' if the building is present, 'No' otherwise.
* **Floor** (`floor`, number, optional): Enter the floor number of the room (if applicable).
* **Section** (`section`, select_one, optional): Select 'Yes' if the section is present, 'No' otherwise.
* **Room Number** (`room_number`, text, optional): Enter the room number (if applicable).
* **Notes 2** (`notes_2`, note, optional): Add any additional notes about the attendance.
* **Student ID** (`student_id`, number, required): Enter the student's identification number.
* **Class ID** (`class_id`, number, required): Enter the class identification number.
* **Teacher ID** (`teacher_id`, number, required): Enter the teacher's identification number.
* **Section ID** (`section_id`, number, required): Enter the section identification number.
* **Status** (`status`, select_one, optional): Select 'Active' or 'Inactive' (if applicable).
* **Student Status** (`student_status`, select_one, optional): Select 'Active' or 'Inactive' (if applicable).
* **Student Status Reason** (`student_status_reason`, text, optional): Add a reason for the student status (if applicable).

Note: This form appears to have some optional fields that may be used for additional context or details, such as floor, section, room number, status, student status, and student status reason.
