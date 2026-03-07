<thinking>
We will create a user-facing help guide for the "New Student Form" that outlines its purpose, how to complete it, and what each field means, based on the provided YAML specification.
</thinking>

# New Student Form - Help Guide
## Purpose
The "New Student Form" is a data collection tool used to gather information about new students. This form is designed to provide a structured and convenient way to capture essential details about students, such as their personal and contact information, and preferences for course selection. The form is intended for students who are new to the institution and need to be enrolled in various courses.

## How To Complete This Form
To complete the form successfully, follow these steps:

1. Enter the student's first name in the "First Name" field.
2. Enter the student's last name in the "Last Name" field.
3. Provide the student's email address in the "Email" field, making sure it conforms to the standard email format (e.g., "example@example.com").
4. If applicable, enter the student's ID number in the "Student ID" field.
5. Choose one or more courses for the student to enroll in by selecting the relevant options in the "Select a Course" field. Multiple selections can be made by holding the Ctrl key (or Command key on Mac) and clicking on each desired course.
6. Enter the date of the student's registration in the "Registration Date" field, using the standard date format (e.g., "MM/DD/YYYY").

## Field-by-Field Explanation

* **First Name** (`first_name`, text, required: false): Enter the student's first name.
* **Last Name** (`last_name`, text, required: false): Enter the student's last name.
* **Email** (`email`, email, required: false): Enter the student's email address.
* **Student ID** (`student_id`, number, required: false): If you have the student's ID number, enter it here. This field is not required.
* **Select a Course** (`course_selection`, select_multiple, required: false): Choose one or more courses for the student to enroll in. Select "Yes" next to each course that applies.
* **Registration Date** (`registration_date`, date, required: false): Enter the date of the student's registration in the standard date format (MM/DD/YYYY).

## Tips
- Make sure to enter all required information accurately and completely to avoid any enrollment issues.
- If you are unsure about any of the fields, refer to the relevant institutional policies or contact the student support team for assistance.
- Multiple enrollments can be completed in one submission, but please be cautious not to submit duplicate or outdated information.
