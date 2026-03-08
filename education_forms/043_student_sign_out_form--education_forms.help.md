# Student Sign Out Form - Help Guide
## Purpose
The Student Sign Out Form is a data collection form used to document the details of a student's departure from school. The form is used to provide accurate and consistent information about student absences, ensuring that students are accounted for and teachers are informed about their whereabouts.

## How To Complete This Form
To complete this form, follow these steps:
1. Ensure you have the necessary permissions and are not duplicating entries for the same student on the same day.
2. Enter the student's ID number in the `student_id` field.
3. Select the time the student arrived at the school in the `time_in` field.
4. Select the time the student left the school in the `time_out` field.
5. Choose the sign out status from the options provided in the `sign_out_status` field.
6. Enter any relevant comments or information about the sign out in the `comments` field.
7. If you're the teacher responsible for the student, select your name in the `teacher` field and enter your email address and phone number in the corresponding fields.
8. Finally, select the option to submit the form in the `submit` field.

## Field-by-Field Explanation
* **sign_out_form** (`1`, text, optional): This is the main text field for entering information about the student's sign out.
* **time_in** (`2`, date, optional): Enter the time the student arrived at school.
* **time_out** (`3`, time, optional): Enter the time the student left the school.
* **student_id** (`4`, number, optional): Enter the student's ID number for identification.
* **sign_out_status** (`5`, select_multiple, optional): Choose the reason for the student's sign out.
  * Option 1: Medical reason
  * Option 2: Other reason
  * Option 3: Unknown/Unspecified reason
* **comments** (`6`, note, optional): Enter any additional comments or information about the sign out.
* **submit** (`7`, select_one, optional): Select the option to submit the form.
  * Option 1: Submit and complete
  * Option 2: Cancel and exit
* **email** (`8`, email, optional): Enter your email address if you're the teacher responsible for the student.
* **phone** (`9`, text, optional): Enter your phone number if you're the teacher responsible for the student.
* **teacher** (`10`, text, optional): Select your name if you're the teacher responsible for the student.
* **teacher_email** (`11`, email, optional): Enter your email address if you're the teacher responsible for the student.
* **teacher_phone** (`12`, text, optional): Enter your phone number if you're the teacher responsible for the student.
