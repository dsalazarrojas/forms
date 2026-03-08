<thinking>
The form is designed to collect information about a student's details and status for administrative purposes. It is intended for internal use within an educational institution or organization. This form may be used by staff or administrators to update or create new student records.
</thinking>

# summit_student_application_form - Help Guide
## Purpose
The summit_student_application_form is used to collect student information and status for administrative purposes within an educational institution or organization.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter student name in the `student_name` field.
2. Enter student's email address in the `student_email` field.
3. Provide the date of birth of the student in the `date_of_birth` field.
4. Enter the student's phone number in the `student_phone` field.
5. Enter the name of the student's school in the `student_school_name` field.
6. Select the student's grade level in the `student_grade` field.
7. Enter the name of the course the student is enrolled in, in the `student_course` field.
8. Select the student's degree type from the options provided in the `student_degree` field.
9. Enter the start date of the student's program in the `student_start_date` field.
10. Enter the end date of the student's program in the `student_end_date` field.
11. Select the student's status from the options provided in the `student_status` field.
12. Add any additional notes about the student in the `student_notes` field.

## Field-by-Field Explanation
* **Enter student name**: (`student_name`, text, required: false) Enter the name of the student.
* **Student Email**: (`student_email`, email, required: false) Enter the student's email address.
* **Date of birth**: (`date_of_birth`, date, required: false) Provide the date of birth of the student.
* **Student Phone**: (`student_phone`, text, required: false) Enter the student's phone number.
* **School Name**: (`student_school_name`, text, required: false) Enter the name of the student's school.
* **Student Grade**: (`student_grade`, number, required: false) Select the student's grade level.
* **Student Course**: (`student_course`, text, required: false) Enter the name of the course the student is enrolled in.
* **Degree**: (`student_degree`, select_one, required: false) Select the type of degree the student is pursuing.
* **Start Date**: (`student_start_date`, date, required: false) Enter the start date of the student's program.
* **End Date**: (`student_end_date`, date, required: false) Enter the end date of the student's program.
* **Status**: (`student_status`, select_multiple, required: false) Select the student's status from the provided options.
* **Notes**: (`student_notes`, text, required: false) Add any additional notes about the student.
