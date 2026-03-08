# icssc_rsf_student - Help Guide
## Purpose
This form is designed to gather demographic information for students, including name, contact, and educational status details.

## How To Complete This Form
To complete this form, follow these general steps:
1. Fill in your first name under the "first_name" field.
2. Enter your last name under the "last_name" field.
3. Provide your email address under the "email" field.
4. Enter your student ID under the "student_id" field.
5. Enter your birthdate in the "birthdate" field.
6. Choose your status as a student under "student_status".
7. Select your affiliation with specific programs under "program" and "student_program".

## Field-by-Field Explanation
* **first_name** (`first_name`, text, required: false): Enter your first name as per your identity documents.
* **last_name** (`last_name`, text, required: false): Enter your last name as per your identity documents.
* **email** (`email`, email, required: false): Enter your active and verified email address where you can be contacted.
* **student_id** (`student_id`, number, required: false): Enter your student ID as provided by your educational institution.
* **birthdate** (`birthdate`, date, required: false): Enter your date of birth in the standard YYYY-MM-DD format.
* **student_program** (`student_program`, select_one, required: false): Choose 'Yes' if you are affiliated with our programs. If not, choose 'No'.
* **program** (`program`, select_multiple, required: false): If you are affiliated with our programs, select all applicable programs. If not, choose 'No'.
* **date_of_birth** (`date_of_birth`, date, required: false): Enter your date of birth in the standard YYYY-MM-DD format. This field seems to be a duplicate of 'birthdate', so ensure you fill in the correct information.
* **student_status** (`student_status`, select_one, required: false): Choose your student status as 'Active' or 'Inactive'.
* **phone** (`phone`, text, required: false): Not required but if you want to provide a contact number, enter it here.
