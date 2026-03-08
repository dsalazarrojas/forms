# Library Student Entry Check In Form - Help Guide
## Purpose
The Library Student Entry Check In Form is a tool used to track student visits to the library, ensuring accurate and efficient record keeping.

## How To Complete This Form
1. Fill out the form with the required and optional fields as applicable.
2. Enter the student's library visit date in the format MM/DD/YY.
3. Enter the student's name.
4. Select the student's grade level from the provided options.
5. List the subjects visited by the student.
6. Enter the student's time of arrival and departure, in 24-hour format (HH:MM).
7. Enter the student's student ID number.

## Field-by-Field Explanation
* **Student Library Visit Date** (`student_library_visit_date`, date, required): Enter the date of the student's visit to the library.
* **Student Name** (`library_student_name`, text, required): Enter the student's name.
* **Grade Level** (`library_student_grade`, select_one, required): Select the grade level of the student, e.g., 2-12.
* **Subjects Visited** (`library_student_subjects_visited`, select_multiple, required): List the subjects visited by the student during their visit.
* **Time In** (`library_student_time_in`, time, optional): Enter the time the student arrived at the library.
* **Time Out** (`library_student_time_out`, time, optional): Enter the time the student departed from the library.
* **Student ID** (`library_student_student_id`, text, optional): Enter the student's ID number.
* **Grade Level** (`library_student_grade_level`, number, optional): Enter the student's grade level.

## Tips
- Be accurate when entering dates and times.
- If a student has not visited any subjects, select "None" or leave the field blank.
- If a student has not checked in before, use a new form.
- This form is for students visiting the library, not for staff or other library patrons.
