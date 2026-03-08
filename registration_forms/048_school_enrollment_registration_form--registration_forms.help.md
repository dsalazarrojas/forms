# School Enrollment Registration Form - Help Guide
## Purpose
The School Enrollment Registration Form is designed to gather essential information from parents or guardians to enroll their child in the school. This form is meant for new students only, and it will be reviewed and processed by the school administration to ensure accurate and complete enrollment.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling in the required fields, indicated by an asterisk (\*). If you're unsure about a field, you can check the field-by-field explanation section below.
2. Enter your child's name in the "student_name" field.
3. Select your child's grade level from the "grade_level" field.
4. Enter your child's date of birth (in the format MM/DD/YYYY) in the "student_dob" field.
5. Provide the name of the person responsible for your child's care in the "guardian_name" field.
6. Select the relationship of the person you are providing as the guardian in the "guardian_relation" field.
7. Enter the contact phone number of the person providing information in the "guardian_phone" field.
8. Enter the address where your child will be staying during the school year in the "address" field.
9. Enter the contact information of the person providing information in the "guardian_contact" field.
10. Enter your child's email address in the "student_email" field.

## Field-by-Field Explanation
* **new_student** (`new_student`, text, required: false): This field is a unique identifier for the new student. Please enter a brief description of your child, such as their nickname or a brief introduction.
* **student_name** (`student_name`, text, required: false): Enter your child's full name in this field.
* **grade_level** (`grade_level`, select_one, required: false): Select your child's grade level from the options provided: 9th, 10th, 11th, or 12th.
* **student_dob** (`student_dob`, date, required: false): Enter your child's date of birth in the MM/DD/YYYY format.
* **guardian_name** (`guardian_name`, text, required: false): Enter the name of the person responsible for your child's care.
* **guardian_relation** (`guardian_relation`, select_one, required: false): Select the relationship of the person providing information: father, mother, or guardian.
* **guardian_phone** (`guardian_phone`, text, required: false): Enter the contact phone number of the person providing information.
* **address** (`address`, text, required: false): Enter the address where your child will be staying during the school year.
* **guardian_contact** (`guardian_contact`, text, required: false): Enter the contact information of the person providing information.
* **student_email** (`student_email`, email, required: false): Enter your child's email address.
