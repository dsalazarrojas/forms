# excused_absence_form - Help Guide
## Purpose
The excused_absence_form is used to document a student's absence from school, ensuring accurate record-keeping and facilitating efficient processing.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the student's ID number in the `student_id` field.
2. Enter the reason for the absence in the `reason_for_absence` field.
3. Choose the start and end dates of the absence using the calendar input fields for `start_date` and `end_date`.
4. Sign as the teacher in the `teacher_signature` field.
5. Sign as the parent or guardian in the `parent_signature` field.
6. Optionally, provide comments in the `comments` field.
7. Choose who submitted the form from the options in the `submitted_by` field.
8. If applicable, select the date the form was submitted using the `submitted_at` field.

## Field-by-Field Explanation
* **Student ID (student_id)** (`Number`, `Number`, `Required`): Enter the student's ID number for identification purposes.
* **Reason for Absence (reason_for_absence)** (`Text`, `Optional`, `Optional`): Enter a brief explanation of why the student is absent.
* **Start Date (start_date)** (`Date`, `Required`, `Required`): Select the date from which the student is absent.
* **End Date (end_date)** (`Date`, `Required`, `Required`): Select the date until which the student is absent.
* **Teacher Signature (teacher_signature)** (`Text`, `Required`, `Required`): Provide your signature as the teacher.
* **Parent Signature (parent_signature)** (`Text`, `Required`, `Required`): Provide your signature as the parent or guardian.
* **Comments (comments)** (`Text`, `Optional`, `Optional`): Provide any additional comments regarding the absence.
* **Submitted By (submitted_by)** (`Select One`, `Optional`, `Optional`): Choose who submitted the form from the provided options.
* **Submitted At (submitted_at)** (`Date`, `Optional`, `Optional`): If applicable, select the date the form was submitted.
