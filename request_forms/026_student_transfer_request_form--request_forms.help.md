# Student Transfer Request Form - Help Guide
## Purpose
The Student Transfer Request Form is used to submit a request to transfer a student to a different class. It is a mandatory form that requires student number, teacher name, student name, reason for transfer, new class, current class, comments (optional), and the name of the person submitting the request. Please make sure to fill out this form accurately and completely to ensure your request is processed correctly.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the student's ID number in the "student_number" field.
2. Enter the teacher's name in the "teacher_name" field.
3. Enter the student's name in the "student_name" field.
4. Provide the reason for the transfer in the "reason_for_transfer" field.
5. Select the new class for the student to transfer to from the "new_class" select box.
6. Select the current class the student is currently in from the "current_class" select box (optional).
7. Provide any additional comments for the transfer request in the "comments" field (optional).
8. Select the person submitting the request (e.g., John, Jane, or Jim) from the "submitted_by" select box.

## Field-by-Field Explanation
- **student_number** (`student_number`, number, required): Enter the student's ID number.
  *Example:* 123456
- **teacher_name** (`teacher_name`, text, required): Enter the teacher's name.
  *Example:* John Smith
- **student_name** (`student_name`, text, required): Enter the student's name.
  *Example:* John Doe
- **reason_for_transfer** (`reason_for_transfer`, text, required): Provide the reason for the transfer.
  *Example:* Student needs to move to a higher-level class for better education.
- **new_class** (`new_class`, select_one, required): Select the new class to transfer the student to.
  *Example:* Class A
- **current_class** (`current_class`, select_one, optional): Select the current class the student is in.
  *Example:* Class B
- **comments** (`comments`, text, optional): Provide any additional comments for the transfer request.
  *Example:* Student has been having trouble in their current class and needs a change of pace.
- **submitted_by** (`submitted_by`, select_multiple, optional): Select the person submitting the request.
  *Example:* John
