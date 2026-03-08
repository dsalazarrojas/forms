<thinking>Before diving into the detailed help guide, let's clarify the purpose and relevance of this form. The educational_guardianship_form is designed to collect information about the relationship between a student and their guardian(s), which is essential for educational purposes. This form should be filled out by students who have a guardian(s) and need to provide details about their guardianship relationship. This information will help the educational institution in understanding the student's support system and ensure they are aware of any special needs or requirements.

The form appears to be comprehensive, covering various aspects of the guardian-student relationship, including contact information, medical authorization, and agreement details. However, some fields might be redundant or unnecessary, and it's essential to review and refine the form to ensure it's practical and efficient.

Assuming the form is relevant and up-to-date, let's proceed with the help guide.</thinking>

# educational_guardianship_form - Help Guide
## Purpose
The educational_guardianship_form is designed to collect information about the relationship between a student and their guardian(s), which is essential for educational purposes.

## How To Complete This Form
1. Fill out the form with accurate and complete information about your guardian(s).
2. Ensure all required fields are filled out correctly.
3. Review the form for any additional information that might be necessary or required.

## Field-by-Field Explanation
* **Guardian Relationship** (`Guardian Relationship`, text, Optional): Describe your relationship with your guardian(s).
* **Student Name** (`student_name`, text, Optional): Enter your name.
* **Student ID Number** (`student_id_number`, number, Optional): Enter your student ID number.
* **Guardian's Name** (`guardians_name`, text, Optional): Enter your guardian's name.
* **Guardian Relationship Type** (`guardian_relationship_type`, select_one, Optional): Select the type of guardian relationship (Mother, Father, Guardian in loco parentis, or Other).
* **Guardian's Address** (`guardians_address`, text, Optional): Enter your guardian's address.
* **Guardian's Phone** (`guardians_phone`, text, Optional): Enter your guardian's phone number.
* **Guardian's Email** (`guardians_email`, email, Optional): Enter your guardian's email address.
* **Relationship Start Date** (`guardian_relationship_start_date`, date, Optional): Enter the start date of your guardian relationship.
* **Relationship End Date** (`guardian_relationship_end_date`, date, Optional): Enter the end date of your guardian relationship.
* **Reason for Guardianship** (`reason_for_guardianship`, text, Optional): Provide a brief explanation for your guardianship.
* **Legal Document Number** (`legal_document_number`, text, Optional): Enter the legal document number (if applicable).
* **Legal Document Date** (`legal_document_date`, date, Optional): Enter the date of the legal document (if applicable).
* **Guardianship Agreement Signed** (`guardianship_agreement_signed`, note, Optional): This field is not used in the current form configuration; you can disregard it.
* **Educational Authorization** (`educational_authorization`, select_multiple, Optional): Select whether you have educational authorization (True or False).
* **Emergency Contact Name** (`emergency_contact_name`, text, Optional): Enter the name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, Optional): Enter the phone number of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, Optional): Select your emergency contact relationship (Parent, Guardian, or Other).
* **Emergency Contact Relationship Other** (`emergency_contact_relationship_other`, text, Optional): Enter additional information about your emergency contact relationship (if Other was selected).
* **Medical Authorization** (`medical_authorization`, select_multiple, Optional): Select whether you have medical authorization (True or False).
* **Medical Conditions** (`medical_conditions`, text, Optional): Enter any relevant medical conditions.
* **Medical Procedures** (`medical_procedures`, text, Optional): Enter any relevant medical procedures.
* **Medical Authorization Notes** (`medical_authorization_notes`, text, Optional): Enter any additional information about your medical authorization.
* **Submit** (`submit`, text, Optional): Review and submit the form.

Note: Some fields might not be displayed in the final form due to the `required` and `hint` settings in the YAML configuration. Ensure to review the form carefully and fill out all necessary fields.
