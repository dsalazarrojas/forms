# In School Suspension Reflection Form - Help Guide

## Purpose
The "In School Suspension Reflection Form" is a document used to record and reflect on incidents involving a student's behavior that have led to an in-school suspension. This form helps teachers gather necessary information from both the student and their parents to understand the situation and develop an effective plan for the student's behavior.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the student's name in the "student_name" field.
2. If applicable, select the date of suspension in the "date_suspended" field.
3. Provide a brief description of the reason for the suspension in the "reason_suspend" field.
4. Enter any comments from the teacher in the "teacher_comments" field.
5. If desired, enter any additional comments from the student in the "student_comments" field.
6. Indicate whether you, as a parent, give your consent to the suspension in the "parent_consent" field by selecting either "Yes" or "No".
7. Enter your name in the "parent_name" field.
8. If applicable, indicate the total number of days the student was suspended in the "suspension_days" field.

## Field-by-Field Explanation
* **student_name** (`student_name`, text, required): Enter the student's name to identify the individual who was suspended.
* **date_suspended** (`date_suspended`, date, required: false): If applicable, enter the date of the incident that led to the suspension.
* **reason_suspend** (`reason_suspend`, text, required): Provide a brief description of the reason for the suspension.
* **teacher_comments** (`teacher_comments`, text, required): Enter any comments from the teacher regarding the incident.
* **student_comments** (`student_comments`, text, required: false): If desired, enter any additional comments from the student to provide context.
* **parent_consent** (`parent_consent`, select_one, required: false): Indicate whether you, as a parent, give your consent to the suspension by selecting either "Yes" or "No".
* **parent_name** (`parent_name`, text, required): Enter your name to confirm your identity as the parent.
* **suspension_days** (`suspension_days`, number, required: false): If applicable, enter the total number of days the student was suspended.
