<thinking>
The purpose of the student medical information form is to collect vital information about a student's health and medical history. This form will help medical professionals and school administrators understand a student's medical needs, conditions, and emergencies, ensuring they receive proper care and attention when needed. This form should only be filled out by the student or a parent/guardian, and is not intended for use by medical facilities or other third parties.
</thinking>
# student_medical_information_form - Help Guide
## Purpose
The student medical information form is a crucial document that helps medical professionals and school administrators understand a student's health and medical history.
## How To Complete This Form
To complete this form, follow these steps:

1. Enter the student's first name in the **First name** field.
2. Enter the student's last name in the **Last name** field.
3. Select the student's date of birth using the **Date of Birth** field.
4. If applicable, select any medical conditions the student may have from the list of options in the **Medical Conditions** field. You can select multiple conditions.
5. If the student has any allergies, select them from the list of options in the **Allergies** field.
6. Enter any medications the student is currently taking in the **Medication** field.
7. Enter the name of the medical facility where the student receives regular care in the **Medical Facility** field.
8. Provide the name and contact information of the person to be contacted in case of an emergency in the **Emergency contact person** field.
9. Specify the relationship between the contact person and the student (e.g., parent, guardian, family member).
10. Enter the contact person's phone number in the **Phone** field.
11. Enter the contact person's email address in the **Email** field.

## Field-by-Field Explanation

* **First name** (`first_name`, text, required/optional): Enter the student's first name.
* **Last name** (`last_name`, text, required/true): Enter the student's last name. This is a required field.
* **Date of Birth** (`date_of_birth`, date, required/true): Select the student's date of birth.
* **Medical Conditions** (`medical_conditions`, select_multiple, required/optional): Select any medical conditions the student may have. You can choose multiple conditions.
* **Allergies** (`allergies`, select_one, required/optional): If the student has any allergies, select them from the list.
* **Medication** (`medication`, text, required/optional): Enter any medications the student is currently taking.
* **Medical Facility** (`medical_facility`, text, required/optional): Enter the name of the medical facility where the student receives regular care.
* **Emergency contact person** (`emergency_contact`, text, required/optional): Provide the name and contact information of the person to be contacted in case of an emergency.
* **Relationship** (`relationship`, text, required/optional): Specify the relationship between the contact person and the student.
* **Phone** (`phone`, text, required/optional): Enter the contact person's phone number.
* **Email** (`email`, email, required/optional): Enter the contact person's email address.
