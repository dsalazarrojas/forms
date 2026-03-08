# Evaluation Teacher Data Form - Help Guide
## Purpose
The Evaluation Teacher Data Form is designed to collect demographic information and performance ratings for teacher evaluations. This form is intended for teachers or authorized personnel to assess teacher performance.

## How To Complete This Form
1. Start by filling out the demographic information, which includes First Name, Last Name, and Email.
2. Select the Department and Role of the teacher being evaluated.
3. Choose the Assigned Tool used for the evaluation.
4. Provide a Performance Rating for the teacher.
5. Add any additional Comments about the teacher's performance.
6. If the teacher was not submitted by the default system, select 'Yes' or 'No' for the Submitted By field and provide the email address used to submit the evaluation.
7. Finally, enter the date and time the evaluation was submitted.

## Field-by-Field Explanation

* **First Name**: Enter the first name of the teacher being evaluated. (text, required: false)
* **Last Name**: Enter the last name of the teacher being evaluated. (text, required: false)
* **Email**: Enter the email address of the person submitting the evaluation. (email, required: false)
* **Department**: Select the department of the teacher being evaluated. (select_one, options: English, Mathematics, Science)
* **Role**: Choose the role of the teacher being evaluated. (select_multiple, options: Principal, Vice Principal, Teacher)
* **Evaluation Date**: Enter the date of the evaluation. (date, required: false)
* **Evaluation Time**: Enter the time of the evaluation. (time, required: false)
* **Performance Rating**: Rate the teacher's performance on a scale of 0-10. (number, required: false)
* **Comments**: Add any comments or observations about the teacher's performance. (note, required: false)
* **Assigned Tool**: Select the tool assigned to the teacher for evaluation. (select_one, options: chatjimmy, other)
* **Other**: If the Assigned Tool is 'other', provide the name of the tool used for the evaluation. (text, required: false)
* **Submitted By**: Select 'Yes' if the evaluation was submitted by the teacher, or 'No' if it was submitted by someone else. (select_one, options: Yes, No)
* **Submitted By Other**: If Submitted By is 'No', enter the email address of the person who submitted the evaluation. (text, required: false)
* **Submitted Date**: Enter the date the evaluation was submitted. (date, required: false)
* **Submitted Time**: Enter the time the evaluation was submitted. (time, required: false)
* **Submitted By Email**: Enter the email address of the person who submitted the evaluation. (email, required: false)
