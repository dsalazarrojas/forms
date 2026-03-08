# Skate School Consent Form - Help Guide
## Purpose
This form is used to collect information and obtain consent from parents/guardians for a student's participation in a skate school program. The form is required to be completed by a parent or guardian to confirm their agreement to their child's participation.

## How To Complete This Form

1. **Form Name**: Enter the name of the form you are submitting for the student.
2. **Date of Birth**: Enter the student's date of birth.
3. **Date of Participation**: Enter the date the student will participate in the program.
4. **Parent Name**: Enter your name as the parent or guardian.
5. **Parent Phone**: Enter your phone number.
6. **Emergency Contact Person**: Enter the name of the person you would like to be contacted in case of an emergency.
7. **Emergency Contact Phone**: Enter the phone number of the emergency contact.
8. **Emergency Contact Relationship**: Select the relationship of the emergency contact (e.g., Mother, Father, Guardian, Other).
9. **Student ID Number**: Enter the student's ID number.
10. **Student Name**: Enter the student's name.
11. **Parent Signature**: Sign to confirm your agreement.
12. **Student Signature**: Sign the student's signature to confirm their agreement.
13. **School Name**: Enter the name of the school the student will be participating in.
14. **Program**: Select the program the student will be participating in.
15. **Program Length**: Enter the length of the program (e.g., number of weeks or days).
16. **Program Start Date**: Enter the start date of the program.
17. **Program End Date**: Enter the end date of the program.
18. **Program Days**: Select the days the student will be participating in the program.
19. **Parent Permission**: Select "True" if you grant permission for your child to participate.
20. **Student Permission**: Select "True" if the student grants permission to participate.
21. **Student Permission Note**: Enter any additional information regarding the student's permission.
22. **Emergency Contact Permission**: Select "True" if you grant permission for another person to contact you in case of an emergency.
23. **Emergency Contact Permission Note**: Enter any additional information regarding the emergency contact.
24. **School Permission**: Select "True" if you grant permission for your child to participate in the school.
25. **School Permission Note**: Enter any additional information regarding the school's permission.

## Field-by-Field Explanation

* **Form Name** (`form_name`, text, required: false): Enter the name of the form you are submitting for the student.
* **Date of Birth** (`date_of_birth`, date, required: false): Enter the student's date of birth.
* **Date of Participation** (`date_of_participation`, date, required: true): Enter the date the student will participate in the program.
* **Parent Name** (`parent_name`, text, required: false): Enter your name as the parent or guardian.
* **Parent Phone** (`parent_phone`, text, required: false): Enter your phone number.
* **Emergency Contact Person** (`emergency_contact_person`, text, required: false): Enter the name of the person you would like to be contacted in case of an emergency.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required: false): Enter the phone number of the emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, required: false): Select the relationship of the emergency contact (e.g., Mother, Father, Guardian, Other).
* **Student ID Number** (`student_id_number`, text, required: false): Enter the student's ID number.
* **Student Name** (`student_name`, text, required: true): Enter the student's name.
* **Parent Signature** (`parent_signature`, note, required: false): Sign to confirm your agreement.
* **Student Signature** (`student_signature`, note, required: true): Sign the student's signature to confirm their agreement.
* **School Name** (`school_name`, text, required: true): Enter the name of the school the student will be participating in.
* **Program** (`program`, select_one, required: true): Select the program the student will be participating in.
* **Program Length** (`program_length`, number, required: true): Enter the length of the program (e.g., number of weeks or days).
* **Program Start Date** (`program_start_date`, date, required: true): Enter the start date of the program.
* **Program End Date** (`program_end_date`, date, required: true): Enter the end date of the program.
* **Program Days** (`program_days`, select_multiple, required: false): Select the days the student will be participating in the program.
* **Parent Permission** (`parent_permission`, select_multiple, required: false): Select "True" if you grant permission for your child to participate.
* **Student Permission** (`student_permission`, select_multiple, required: false): Select "True" if the student grants permission to participate.
* **Student Permission Note** (`student_permission_note`, text, required: false): Enter any additional information regarding the student's permission.
* **Emergency Contact Permission** (`emergency_contact_permission`, select_multiple, required: false): Select "True" if you grant permission for another person to contact you in case of an emergency.
* **Emergency Contact Permission Note** (`emergency_contact_permission_note`, text, required: false): Enter any additional information regarding the emergency contact.
* **School Permission** (`school_permission`, select_multiple, required: false): Select "True" if you grant permission for your child to participate in the school.
* **School Permission Note** (`school_permission_note`, text, required: false): Enter any additional information regarding the school's permission.
