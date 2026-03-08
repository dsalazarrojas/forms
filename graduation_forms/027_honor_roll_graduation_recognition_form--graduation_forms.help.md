# honor_roll_graduation_recognition_form - Help Guide
## Purpose
The "Honor Roll Graduation Recognition Form" is used to acknowledge and celebrate students' academic achievements by recognizing them on their graduation. This form is meant to provide a formal record of a student's academic accomplishments and can be used to generate a certificate or document for the student to keep as a memento.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the student's name, ID, and grade level.
2. Select the type of recognition award they will receive (High Honor Roll, Distinction Award, or Special Award).
3. Enter the name of the student's school.
4. Choose a date for the recognition.
5. Optionally, add a message to be displayed on the certificate.
6. You can also add a personalized message for the student to be displayed on the certificate.
7. Select the tool that will be used for recognition (if applicable).
8. Finally, save the form to generate a downloadable certificate for the student.

## Field-by-Field Explanation
- **Student Name** (`student_name`, `text`, required): This is the student's full name.
- **Student ID** (`student_id`, `number`, required): This is the student's unique identifier.
- **Grade Level** (`grade_level`, `text`, required): This is the student's current grade level.
- **Award Type** (`award_type`, `select_one`, required): Select one of the three options: High Honor Roll, Distinction Award, or Special Award.
- **Student School Name** (`student_school_name`, `text`, required): This is the name of the student's school.
- **Academic Period** (`academic_period`, `date`, required): Enter the date in the format `MM/DD/YYYY`.
- **Recognition Date and Time** (`date_recognized`, `time`, required): Enter the date and time of the recognition ceremony.
- **Recognition Message** (`recognition_message`, `text`, required): This is a message to be displayed on the certificate.
- **Personalized Message for Student** (`recognition_message_for_student`, `text`, optional): This is an optional message that can be added to the certificate for the student's eyes only.
- **Assigned Tool** (`assigned_tool`, `text`, optional): If applicable, select the tool used for recognition.
- **Output File** (`output_file`, `text`, required): This is the file that will be generated with the student's certificate.
