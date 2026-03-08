<thinking>...</thinking>

# scholarship_program_enrollment_form - Help Guide
## Purpose
The scholarship program enrollment form is designed to provide students with a platform to enroll themselves in a program that suits their needs. This form is typically used by students to register for a program, and the collected information will be used to manage and track the status of their enrollment.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Program Name** in the provided field. If you are unsure of the name of the program you are enrolling in, please refer to the program's documentation or contact the contact person.
2. Fill in your **Student Name** and **Student Email** fields with accurate and up-to-date information.
3. Enter your **Student Phone** number, if applicable.
4. Fill in your **Address**, which should include your street address, state, and any other relevant details.
5. Choose a start date and end date for the program using the **Program Start** and **Program End** fields.
6. Enter the **Scholarship Amount**, which should be the total amount of scholarship you are eligible for.
7. Select your **Program Status**, which should reflect your current enrollment status.
8. Enter your **Student Age**, which is a numerical representation of your age.
9. Provide a description of the program you are enrolling in using the **Program Description** field.
10. Enter the **Contact Person** name and any other relevant contact information.

## Field-by-Field Explanation

* **Program Name** (`program_name`, text, optional): A field to enter the name of the program you are enrolling in.
* **Student Name** (`student_name`, text, required): Enter your full name as it appears on your official documents.
* **Student Email** (`student_email`, email, optional): A field to enter your email address for communication purposes.
* **Student Phone** (`student_phone`, text, optional): A field to enter your phone number for communication purposes.
* **Address** (`address`, text, optional): Enter your full address, including your street address, state, and any other relevant details.
* **Program Start** (`program_start`, date, optional): Choose the date when the program starts.
* **Program End** (`program_end`, date, optional): Choose the date when the program ends.
* **Scholarship Amount** (`scholarship_amount`, number, optional): Enter the total amount of scholarship you are eligible for.
* **Program Status** (`program_status`, select_one, optional): Choose from the following options:
	+ Active: You are currently enrolled in the program.
	+ Pending: Your enrollment is pending, and you are waiting for approval.
	+ Inactive: Your enrollment is inactive, and you are not currently participating in the program.
* **Student Age** (`student_age`, number, optional): Enter your age.
* **Program Description** (`program_description`, text, optional): A field to enter any additional information about the program.
* **Contact Person** (`contact_person`, text, optional): A field to enter the name of the person who handles the program's contact information.
