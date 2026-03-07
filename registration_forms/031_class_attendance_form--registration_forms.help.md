<thinking>
To start, let's confirm that the purpose of this form is to register student attendance for a class or course. The form should only be filled out for classes that have students who need to be counted. We should also note that the form is not intended to handle large-scale or multiple classes at once. We want to limit the number of fields for each type of student to 5. We should also be mindful of the format for entering dates in the "Date of Class" field.
</thinking>

# Class Attendance Form - Help Guide
## Purpose
This form is used to register student attendance for a class or course.

## How To Complete This Form
To complete this form, follow these steps:

*   Fill in the class name and other relevant details such as section and academic year.
*   Enter the start time and date of the class.
*   For up to five students, enter their names and IDs if applicable, and select their attendance status (Present, Absent - Excused, Absent - Unexcused, or Late).
*   Optionally, add any notes or comments from the teacher.

## Field-by-Field Explanation
* **Class or Course Name** (`class_name`, text, required): Enter the full name of the class or course.
* **Section Number** (`class_section`, text, optional): If applicable, enter the section number.
* **Teacher or Instructor Name** (`teacher_name`, text, required): Enter the full name of the teacher or instructor.
* **Date of Class** (`attendance_date`, date, required): Enter the date of the class in MM/DD/YYYY format.
* **Class Time** (`class_time`, time, required): Enter the start time of the class.
* **Academic Year** (`academic_year`, select_one, required): Select the academic year.
* **Semester or Term** (`semester_term`, select_one, required): Select the current semester or term.
* **Student 1 Name** (`student_1_name`, text, required): Enter the full name of the first student.
* **Student 1 ID** (`student_1_id`, text, optional): If applicable, enter the student ID number.
* **Student 1 Attendance Status** (`student_1_status`, select_one, required): Select the attendance status of the first student.
* **Student 2 Name** (`student_2_name`, text, required): Enter the full name of the second student.
* **Student 2 ID** (`student_2_id`, text, optional): If applicable, enter the student ID number.
* **Student 2 Attendance Status** (`student_2_status`, select_one, required): Select the attendance status of the second student.
* **Student 3 Name** (`student_3_name`, text, required): Enter the full name of the third student.
* **Student 3 ID** (`student_3_id`, text, optional): If applicable, enter the student ID number.
* **Student 3 Attendance Status** (`student_3_status`, select_one, required): Select the attendance status of the third student.
* **Student 4 Name** (`student_4_name`, text, required): Enter the full name of the fourth student.
* **Student 4 ID** (`student_4_id`, text, optional): If applicable, enter the student ID number.
* **Student 4 Attendance Status** (`student_4_status`, select_one, required): Select the attendance status of the fourth student.
* **Student 5 Name** (`student_5_name`, text, required): Enter the full name of the fifth student.
* **Student 5 ID** (`student_5_id`, text, optional): If applicable, enter the student ID number.
* **Student 5 Attendance Status** (`student_5_status`, select_one, required): Select the attendance status of the fifth student.
* **Total Students Present** (`total_present`, number, required): Enter the count of present students.
* **Total Students Absent** (`total_absent`, number, required): Enter the count of absent students.
* **Teacher Notes or Comments** (`teacher_notes`, text, optional): Optionally enter any observations or notes from the teacher.
