# Student Data Base Form - Help Guide

## Purpose
The Student Data Base Form is used to collect and store student information for educational purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your student name in the "Student Name" field.
2. Enter your student email address in the "Student Email" field.
3. Provide your student phone number in the "Student Phone" field.
4. Enter your date of birth in the "Date of Birth" field in the format MM/DD/YYYY.
5. Select your grade level in the "Grade" field.
6. Choose the program you are currently enrolled in from the "Selected Program" dropdown menu. If your program is not listed, you can select "Other" and provide the name of your program in the "Other Program (if not listed above)" field.
7. If you select "Other" in the "Selected Program" field, please provide the name of your program in the "Other Program" field.
8. Choose your student status as active, inactive, or unknown from the "Student Status" dropdown menu.

## Field-by-Field Explanation

* **Student Name** (student_name, text, required): Enter your full name, e.g., John Doe.
* **Student Email** (student_email, email, required): Enter your valid email address, e.g., [johndoe@example.com](mailto:johndoe@example.com).
* **Student Phone** (student_phone, text, optional): Enter your phone number in the format (XXX) XXX XXXX, e.g., (123) 456 7890.
* **Date of Birth** (student_date_of_birth, date, optional): Enter your date of birth in the format MM/DD/YYYY, e.g., 01/01/1999.
* **Grade** (student_grade, number, optional): Select your current grade level from 1 to 12.
* **Selected Program** (selected_program, select_one, optional): Choose the program you are currently enrolled in. If unsure, select "Other" and provide the program name in the next field.
* **Other Program (if not listed above)** (selected_program_other, text, optional): Enter the name of your program if you selected "Other" in the previous field.
* **Other Program** (selected_program_other_program, text, optional): Enter the name of your program.
* **Student Status** (student_status, select_one, optional): Choose your current student status as active, inactive, or unknown.

## Tips

* Make sure to fill in your student name and email address accurately, as these are required fields.
* If you are unsure of your grade level, you can choose "Unknown" in the "Grade" field.
* If you selected "Other" in the "Selected Program" field, make sure to provide the name of your program in the "Other Program (if not listed above)" field.
* If you are unsure of your student status, you can choose "Unknown" in the "Student Status" field.
