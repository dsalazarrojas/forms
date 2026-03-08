# Dance Class Waiver Form - Help Guide
## Purpose
This form is designed to gather essential information from participants prior to their attendance in the dance class. It asks for their personal details, medical history, and emergency contact information.

## How To Complete This Form
To fill out this form, please follow these steps:

1. Fill in your participant name in the "Participant Name" field.
2. If applicable, provide the name of a parent or guardian in the "Parent or Guardian Name" field.
3. Enter your date of birth in the "Date of Birth" field in MM/DD/YY format (e.g., 12/25/1999).
4. Answer the question "Have You Ever Had Any Injuries or Illnesses" with one of the available options (Yes, No, or Other).
5. If you have any medical conditions, select all that apply from the list.
6. Answer the question "Do You Consent to Participate" with one of the available options (Yes, No).
7. Provide the name of an emergency contact person in the "Emergency Contact Name" field.
8. Enter the contact phone number in the "Emergency Contact Phone" field.
9. Enter the contact email in the "Emergency Contact Email" field.
10. If you have any medical conditions, please select all that apply from the list.

## Field-by-Field Explanation
* **Participant Name** (`participant_name`, text, required): Please fill in your name as it should appear on your ID or any official documents.
* **Parent or Guardian Name** (`parent_name`, text, optional): If you are under 18, please provide your parent or guardian's name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YY format.
* **Have You Ever Had Any Injuries or Illnesses** (`waiver_status`, select_one, optional): Select 'Yes' if you have had any injuries or illnesses, 'No' if you have not, or 'Other' if the answer is not listed.
* **Waiver Text** (`waiver_text`, note, optional): This is a field for any additional information you may want to provide regarding your injuries or illnesses.
* **Do You Consent to Participate** (`consent`, select_one, required): Select 'Yes' if you consent to participate and 'No' if you do not.
* **Emergency Contact Name** (`emergency_contact_name`, text, optional): Please provide the name of a person who can be contacted in case of an emergency.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): Enter the contact phone number of the person listed above.
* **Emergency Contact Email** (`emergency_contact_email`, email, optional): Enter the contact email of the person listed above.
* **Do You Have Any Medical Conditions** (`medical_condition`, select_multiple, optional): Select all that apply from the list of medical conditions.
