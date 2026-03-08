# student_medical_information_form - Help Guide
## Purpose
The student_medical_information_form is a document used to collect medical information from students. The form is designed to gather essential details to ensure student well-being and safety.

## How To Complete This Form
1. Fill out the form with accurate and honest information.
2. Ensure all required fields are completed.
3. Review the form carefully before submitting.

## Field-by-Field Explanation

* **Student Name** (`student_name`, text, required): Enter your full name as it appears on your official documents.
* **Student Number** (`student_number`, number, required): Enter your student identification number.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in the format mm/dd/yyyy.
* **Medical Conditions** (`medical_conditions`, select_multiple, required): Select all conditions that apply to you, such as allergies, physical limitations, etc.
* **Allergies** (`allergies`, select_multiple, required): Select all allergies or sensitivities you have.
* **Medications** (`medications`, select_multiple, required): Select all medications you are currently taking.
* **Medical Observations** (`medical_observations`, note, optional): Provide any relevant medical observations or comments.
* **Medical Assessments** (`medical_assessments`, select_one, required): Indicate if you have any medical assessments or diagnoses.
* **Health Insurance Provider** (`health_insurance_provider`, text, required): Enter the name of your health insurance provider.
* **Emergency Contact** (`emergency_contact`, select_multiple, required): Select all emergency contact relationships, such as parent or guardian.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of your emergency contact.
* **Emergency Contact Email** (`emergency_contact_email`, email, required): Enter the email address of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required): Describe your relationship with your emergency contact.
* **Emergency Contact Address** (`emergency_contact_address`, text, required): Enter the address of your emergency contact.
* **Student Signature** (`student_signature`, text, required): Sign and date the form with your signature.
* **Parent Signature** (`parent_signature`, text, required): Sign and date the form with your parent or guardian's signature.
* **Health Insurance** (`health_insurance`, select_one, optional): Indicate if you have health insurance.
* **Medical History 2** (`medical_history2`, note, optional): Provide any relevant medical history or comments.
* **Emergency Contact Phone 2** (no field label, text, optional): (no field label provided in the original YAML, so skipping this field)
* **Physical Ability** (`physical_ability`, select_one, required): Indicate your physical ability.
* **Mental Ability** (`mental_ability`, select_one, required): Indicate your mental ability.
* **Behavioral Conduct** (`behavioral_conduct`, select_one, optional): Indicate your behavioral conduct.
* **Special Needs** (`special_needs`, select_multiple, optional): Select all special needs or services you require.
* **Medical History 3** (`medical_history3`, note, optional): Provide any additional medical history or comments.
* **Date** (`student_signature_date`, date, required): Date and sign the form with your student signature.

Please note that some fields have been removed or rephrased for clarity and conciseness, while maintaining the original intent.
