<thinking>
To create a user-facing help guide for the "Student Re Enrollment Form", I need to ensure that the guide clearly explains the purpose of the form, how to complete it, and what each field means to avoid confusion and duplication of efforts. 
</thinking>

# Student Re Enrollment Form - Help Guide
## Purpose
The "Student Re Enrollment Form" is a document used to collect information about a student's re-enrollment details, which will be used for administrative purposes in schools and educational institutions.

## How To Complete This Form
To fill out this form, follow these steps:
- Ensure you have all the necessary information and data prior to starting the form.
- Select the relevant options for "Student Grade Level" and "Student Program" fields as per the student's details.
- Enter the student's details accurately and honestly.
- Select the student's status accurately based on their current status.
- Fill out any other required or optional fields as per your discretion.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter the student's name as it appears on their official documents, typically their first and last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the student's date of birth in the correct format (DD/MM/YY or MM/DD/YY).
* **Student Email** (`student_email`, email, required): Enter the student's official email address.
* **Parent Contact Number** (`parent_contact_number`, text, required): Enter the student's parent or guardian's contact number for communication purposes.
* **School Name** (`school_name`, text, required): Enter the student's school name.
* **Student Grade Level** (`student_grade_level`, select_one, required): Select the student's grade level from the options provided (High School, Elementary School, Middle School, College, University).
* **If other, please specify** (`student_grade_level_other`, text, required): This field should be filled if the student's grade level is not listed among the provided options. Specify the grade level accurately.
* **Student Program** (`student_program`, select_multiple, required): Select all the programs that the student is enrolled in. Please select the relevant programs from the options provided.
* **Start Date** (`student_start_date`, date, required): Enter the date when the student started their program.
* **End Date** (`student_end_date`, date, required): Enter the date when the student completed their program.
* **Student Status** (`student_status`, select_one, required): Select the student's current status from the options provided (Active, Inactive, Pending, Withdrawn).
* **Parent Name** (`parent_name`, text, required): Enter the student's parent or guardian's name.

## Tips
- Ensure that all fields are filled accurately to avoid delays or discrepancies.
- Use the provided help guide as a reference if you need clarification on any field.
- If you need assistance or have any questions, contact your school or institution's administration for support.
