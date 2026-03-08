# School Emergency Contact Information Form - Help Guide
## Purpose
The purpose of this form is to gather essential contact information from parents or guardians of students in case of an emergency. This form is meant to be filled out by parents or guardians to provide the school with important contact details in case their child needs to be contacted during an emergency.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the form with the required information.
2. Make sure to fill out all the required fields, marked with an asterisk (\*).
3. If you need to add more than one relationship, you can select multiple options for the "Contact Relationship" field.
4. Enter any additional relationship details in the "Relationship Other" field if the pre-defined relationships do not fit.
5. Make sure to enter a valid email address in the "Email" field if you provide this information.

## Field-by-Field Explanation
* **Student Name** (`student_name`, text, optional): Enter the name of the student.
* **Contact Name** (`contact_name`, text, optional): Enter the name of the contact person (parent or guardian).
* **Relationship** (`relationship`, select_one, required): Select the relationship between the student and the contact person (e.g., Mother, Father, Guardian).
* **Contact Relationship** (`contact_relationship`, select_multiple, optional): If the contact person has multiple relationships with the student, select all that apply.
* **Relationship Other** (`relationship_other`, text, optional): If the relationship selected is "Other", enter a brief description of the relationship.
* **Address** (`address`, text, optional): Enter the street address of the contact person.
* **Phone** (`phone`, text, optional): Enter the phone number of the contact person.
* **Email** (`email`, email, optional): Enter the email address of the contact person.
* **Additional Phone** (`phone_2`, text, optional): Enter any additional phone numbers of the contact person.
