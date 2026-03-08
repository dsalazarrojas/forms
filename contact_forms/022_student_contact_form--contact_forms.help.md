# Student Contact Form - Help Guide
## Purpose
The Student Contact Form is a tool used to gather essential contact information about students and their contacts. This form is used to create a record for each student that can be referenced later for communication and correspondence.

## How To Complete This Form
To fill out the Student Contact Form, follow these steps:
1. Fill in the student's name, parent's name, contact number, email, and address as required by the form.
2. Indicate the student's relationship with the contact by selecting "Yes" or "No" for student_relationship and parent_relationship.
3. Provide an emergency contact name and number if applicable.
4. Select "Yes" or "No" for emergency_contact_relationship.
5. Choose any relevant guardian permissions.
6. Add any additional notes for the student's record.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, required): Enter the student's name.
* **Parent Name** (`parent_name`, text, required): Enter the parent's name.
* **Contact Number** (`contact_number`, text, optional): Enter the contact number for the parent or contact person.
* **Email** (`email`, email, optional): Enter the email address for the contact person.
* **Address** (`address`, text, optional): Enter the contact's address.
* **Student Relationship** (`student_relationship`, select_one, optional): Select "Yes" if the person is a student, "No" otherwise.
* **Parent Relationship** (`parent_relationship`, select_one, optional): Select "Yes" if the person is a parent, "No" otherwise.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): Enter the emergency contact's name.
* **Emergency Contact Number** (`emergency_contact_number`, text, optional): Enter the emergency contact's number.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, optional): Select "Yes" if the person is an emergency contact, "No" otherwise.
* **Guardian Permission** (`guardian_permission`, select_multiple, optional): Choose any relevant guardian permissions.
* **Notes** (`notes`, note, optional): Add any additional notes for the student's record.

## Tips
When filling out the form, ensure that all required fields are completed accurately to create a complete record for each student. Be careful with the "Emergency Contact Relationship" and "Student Relationship" fields, as they are crucial for determining the level of responsibility and contact required.
