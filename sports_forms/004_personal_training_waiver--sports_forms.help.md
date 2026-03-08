# Personal Training Waiver - Help Guide
## Purpose
This form is a waiver that clients must sign before starting personal training sessions. It collects information about the client's personal details, emergency contacts, and medical conditions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your personal details, including your name, contact number, and email.
2. Enter your date of birth.
3. Provide your emergency contact's name, contact number, and relationship to you.
4. Select any medical conditions that you have.
5. Select any medical procedures you have undergone.
6. Check the box indicating that you have agreed to the waiver terms and conditions.
7. Sign your name in the "Client Signature" field.

## Field-by-Field Explanation

* **Personal Training Waiver** (`personal_training_waiver`, text, optional): Enter a brief description of your personal training experience and goals.
* **Client Name** (`client_name`, text, optional): Your full name as per your government-issued ID or passport.
* **Contact Number** (`contact_number`, text, optional): Your contact number for emergency purposes.
* **Contact Email** (`contact_email`, email, optional): Your email address for emergency contact.
* **Date of Birth** (`date_of_birth`, date, optional): Your date of birth in MM/DD/YYYY format.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): The full name of your emergency contact.
* **Emergency Contact Number** (`emergency_contact_number`, text, optional): The contact number of your emergency contact.
* **Relationship** (`emergency_contact_relationship`, select_one, optional): Select how you are related to your emergency contact (e.g., Parent, Spouse, Brother, Sister, Child, Other).
*   **Emergency Contact Relationship Other** (`emergency_contact_relationship_other`, text, optional): If you select "Other", please specify the relationship in this field.
* **Medical Conditions** (`emergency_medical_conditions`, select_multiple, optional): Select any medical conditions you have (e.g., High Blood Pressure, Diabetes, Other).
* **Medical Procedures** (`emergency_medical_procedures`, select_multiple, optional): Select any medical procedures you have undergone (e.g., Knee Surgery, Other).
* **I have agreed to the waiver terms and conditions** (`personal_trainer_agreed`, text, optional): Check this box to confirm that you have read and agreed to the waiver terms and conditions.
* **Client Signature** (`client_signature`, text, optional): Sign your name in this field to confirm your agreement to the waiver.
