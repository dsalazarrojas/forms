# Student Academic Achievement Evaluation Form - Help Guide
## Purpose
The Student Academic Achievement Evaluation Form is used to evaluate a student's academic performance and gather feedback from teachers and parents.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the student's name in the "Student Name" field.
2. Enter the student's ID, if applicable.
3. Select the student's grade level from the dropdown menu.
4. Enter the student's attendance record in the "Student Attendance" field.
5. Record the student's progress, if applicable.
6. Select the parent's response to the evaluation in the "Parent Response" field.
7. Enter the evaluation date, if applicable.
8. Enter the time of evaluation, if applicable.
9. Enter the student's email address, if applicable.
10. Enter the student's phone number, if applicable.
11. Enter the name of the school where the evaluation was conducted.
12. Enter the name of the teacher who conducted the evaluation.
13. Select the student's academic level from the dropdown menu.
14. Select the student's behavior, if applicable.
15. Enter any comments or suggestions from the teacher in the "Teacher Comment" field, if applicable.
16. Enter any suggestions from the teacher in the "Teacher Suggestion" field, if applicable.
17. If applicable, select whether the student signed the evaluation form.
18. Review and submit the form for review.

## Field-by-Field Explanation
- **Student Name** (`student_name`, text, required): Enter the student's name as it appears on their records.
- **Student ID** (`student_id`, number, required): Enter the student's ID number, if applicable.
- **Parent Name** (`parent_name`, text, required): Enter the parent's name as it appears on their records.
- **Grade Level** (`grade_level`, select_one, required): Select the student's grade level (9th, 10th, 11th, or 12th).
- **Student Attendance** (`student_attendance`, number, required): Record the student's attendance record.
- **Student Progress** (`student_progress`, number, required): Record the student's progress, if applicable.
- **Parent Response** (`parent_response`, select_multiple, required): Select the parent's response (Strongly Disagree, Somewhat Disagree, Neutral, Somewhat Agree, or Strongly Agree).
- **Evaluation Date** (`evaluation_date`, date, required): Enter the date of the evaluation.
- **Time** (`time`, time, required): Enter the time of evaluation.
- **Email** (`email`, email, required): Enter the student's email address, if applicable.
- **Phone Number** (`phone_number`, text, required): Enter the student's phone number, if applicable.
- **School Name** (`school_name`, text, required): Enter the name of the school where the evaluation was conducted.
- **Teacher Name** (`teacher_name`, text, required): Enter the name of the teacher who conducted the evaluation.
- **Student Academic Level** (`student_academic_level`, select_one, required): Select the student's academic level (Below Grade Level, On Grade Level, or Above Grade Level).
- **Student Behavior** (`student_behavior`, select_multiple, required): Select the student's behavior (Positive, Negative, or Neutral).
- **Teacher Comment** (`teacher_comment`, text, required): Enter any comments or suggestions from the teacher.
- **Teacher Suggestion** (`teacher_suggestion`, text, required): Enter any suggestions from the teacher.
- **Student Signature** (`student_signature`, select_multiple, required): Select whether the student signed the evaluation form (Not Applicable, Present, or Signature Required).
