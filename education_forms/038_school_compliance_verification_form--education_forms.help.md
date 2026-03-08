# School Compliance Verification Form - Help Guide
## Purpose
The School Compliance Verification Form is a document used to verify that a student and their parent have agreed to follow school policies, procedures, and regulations.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the student's name in the "Student Name" field.
2. Enter the name of the school the student attends in the "School Name" field.
3. Select the student's grade level from the options provided.
4. Indicate whether the staff member is the staff member responsible for the student in the "Staff Member" field.
5. If the staff member is not the same as the one listed above, enter their name in the "Parent Name" field.
6. Have the parent sign their name in the "Parent Signature" field.
7. Have the student sign their name in the "Student Signature" field.
8. Check the school name entered in step 2 against the one you expect it to be, and select the corresponding option in the "Check School Name" field.
9. Enter the date the form was completed in the "Date Completed" field.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, required: false): Enter the name of the student being verified.
* **School Name** (`school_name`, text, required: false): Enter the name of the school the student attends.
* **Student Grade Level** (`student_grade_level`, text, required: false): Select the student's grade level from the options provided.
* **Staff Member** (`staff_member`, select_one, required: false): Indicate if the staff member completing this form is the same person as listed above.
* **Parent Signature** (`parent_signature`, text, required: false): Have the parent sign their name indicating they have reviewed and agreed to the policies.
* **Parent Name** (`parent_name`, text, required: false): Enter the name of the parent of the student.
* **School Signature** (`school_signature`, text, required: false): Have the school staff sign their name indicating they have reviewed and verified the information.
* **Check School Name** (`school_name_check`, select_multiple, required: false): Check if the school name entered in step 2 matches the one expected, and select the corresponding option.
* **Student Signature** (`student_signature`, text, required: false): Have the student sign their name indicating they have reviewed and agreed to the policies.
* **Date Completed** (`date_completed`, date, required: false): Enter the date this form was completed.
