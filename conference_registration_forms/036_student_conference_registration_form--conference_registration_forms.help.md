# Student Conference Registration Form - Help Guide
## Purpose
This form is designed for students to register their participation in a conference. It collects information about the student, their preferences, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select your preferred conference programs (Yes or No).
2. Fill in your student name accurately.
3. Enter your student email address correctly.
4. If required, provide your student phone number.
5. Choose the program you are registering for.
6. Add any additional notes about your registration.
7. Select the conference date and time (if applicable).
8. Choose the type of conference you are attending (Yes or No).
9. Finally, select the tool assigned to you for the conference.

## Field-by-Field Explanation
* **Conference Programs** (`conference_programs`, select_multiple, required: false): Select one or more programs you are interested in attending.
* **Student Name** (`student_name`, text, required: true): Enter your full name as a student.
* **Student Email** (`student_email`, email, required: true): Enter your student email address accurately.
* **Student Phone** (`student_phone`, text, required: false): Enter your student phone number (optional).
* **Program** (`program`, select_one, required: true): Choose the program you are registering for.
* **Student Notes** (`student_notes`, note, required: false): Add any additional notes or comments about your registration.
* **Conference Date** (`conference_date`, date, required: false): Select the conference date (if applicable).
* **Conference Time** (`conference_time`, time, required: false): Choose the conference time (if applicable).
* **Assigned Tool** (`assigned_tool`, text, required: true): Select the tool assigned to you for the conference.
* **Conference Type** (`conference_type`, select_one, required: true): Choose the type of conference you are attending (Yes or No).
