<thinking>
To determine the purpose of the "Educational Program Registration Form", I'll need to analyze the input schema provided. The form appears to be a registration form for students in an educational program, collecting information about the student, their guardian, and other relevant details.

The form is intended to collect the following information:

* Student personal details (name, email, ID, date of birth)
* Guardian personal details (name, phone, email, date of birth)
* Relationship between the student and guardian
* Student's educational program type and grade level
* Student's language proficiency
* Additional notes for the student and guardian

To prevent duplicate registrations, the form may be used to store student data in a database for future reference. To prevent irrelevant registrations, the form may be used to identify students who are not eligible for the program.

This guide will help users understand how to complete the form correctly and effectively.
</thinking>

# Educational Program Registration Form - Help Guide
## Purpose

The Educational Program Registration Form is used to register students for educational programs. This form collects information about the student, their guardian, and other relevant details. Completing this form will help us process your application for the program.

## How To Complete This Form

To complete this form, please follow these steps:

1. Fill in your student name, email, and ID.
2. Provide your date of birth.
3. Check if you have a guardian and fill in their details if necessary.
4. Specify your relationship with your guardian.
5. Choose your educational program type and grade level.
6. Select your language proficiency.
7. Add any additional notes about yourself or your guardian if necessary.
8. Click the "Submit" button to complete your registration.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter your full name as it appears on your official documents.
* **Email** (`email`, email, required): Enter your valid email address.
* **Student ID** (`student_id`, number, required): Enter your student ID number.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth in the format MM/DD/YYYY.
* **Educational Institution** (`educational_institution`, select_one, optional): Check if you are affiliated with a specific educational institution.
* **Academic Program** (`academic_program`, select_multiple, optional): Choose the academic program you are interested in.
* **Student Grade** (`student_grade`, select_one, optional): Select your current grade level.
* **Student Phone** (`student_phone`, text, optional): Enter your phone number.
* **Student Parent Phone** (`student_parent_phone`, text, optional): Enter your guardian's phone number.
* **Student Parent Email** (`student_parent_email`, email, optional): Enter your guardian's email address.
* **Student Parent Date of Birth** (`student_parent_date_of_birth`, date, optional): Enter your guardian's date of birth.
* **Guardian Name** (`guardian_name`, text, optional): Enter your guardian's name.
* **Guardian Phone** (`guardian_phone`, text, optional): Enter your guardian's phone number.
* **Guardian Email** (`guardian_email`, email, optional): Enter your guardian's email address.
* **Guardian ID** (`guardian_id`, number, optional): Enter your guardian's ID number.
* **Relationship** (`relationship`, select_one, optional): Specify your relationship with your guardian.
* **Student Address** (`student_address`, text, optional): Enter your student address.
* **Guardian Address** (`guardian_address`, text, optional): Enter your guardian's address.
* **Educational Program Type** (`educational_program_type`, select_multiple, optional): Choose the type of educational program you are interested in.
* **Student Language** (`student_language`, select_one, optional): Select your language proficiency.
* **Other (if student language not listed)** (`student_language_other`, text, optional): Enter your language if it's not listed.
* **Other (if student language not listed) Description** (`student_language_other_description`, text, optional): Describe your language if it's not listed.
* **Student Notes** (`student_notes`, note, optional): Add any additional notes about yourself.
* **Guardian Notes** (`guardian_notes`, note, optional): Add any additional notes about your guardian.
* **Submit** (`submit_button`, text, optional): Click this button to complete your registration.

## Tips

* Make sure to fill in all required fields.
* Double-check your information before submitting the form.
* If you have any questions or need help, contact us for assistance.
