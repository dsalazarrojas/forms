<thinking>

To determine the purpose of this form, let's analyze the YAML structure. The form is titled "rugby_league_participation_agreement" and has multiple pages with a variety of fields. Based on the field names and labels, it appears to be a form for registering a participant in a rugby league, likely for safety and administrative purposes. This form likely requires personal details, emergency contact information, medical information, and consents for participation. It's likely used by clubs, organizations, or teams to ensure the participant's safety and liability.

The fields include personal details such as first and last names, date of birth, contact information (email and phone), medical conditions, and allergies. There's also a field for emergency contact information, including name, relationship, address, and phone number. The form also asks for consent to participate and includes fields for signatures.

To confirm, let's check for any potential duplication or non-relevance. The fields seem to cover different aspects of participant registration, such as emergency contacts and medical information, which are not typically found in standard participant registration forms. This form appears to be a comprehensive and specific document for the context of rugby leagues.

</thinking>

# rugby_league_participation_agreement - Help Guide
## Purpose
This form is for registering a participant in a rugby league. It collects personal details, emergency contact information, medical information, and consents for participation.

## How To Complete This Form
1. Fill in the personal details section: first name, last name, date of birth, contact email, and contact phone number.
2. Provide emergency contact information: emergency contact first name, emergency contact last name, relationship, address, and emergency contact phone number.
3. Answer medical questions: medical conditions, allergies, and medications.
4. Sign and date the form.
5. Ensure all required fields are filled.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required): Enter the participant's first name.
* **Last Name** (`last_name`, text, required): Enter the participant's last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the participant's date of birth in the format MM/DD/YYYY.
* **Contact Email** (`contact_email`, email, required): Enter the participant's contact email address.
* **Contact Phone** (`contact_phone`, text, required): Enter the participant's phone number.
* **Medical Condition** (`medical_condition`, text, optional): If the participant has any medical conditions, enter them here.
* **Medical Allergies** (`medical_allergies`, text, optional): If the participant has any medical allergies, enter them here.
* **Medical Medications** (`medical_medication`, text, optional): If the participant takes any medical medications, enter them here.
* **Emergency Contact First Name** (`emergency_contact_first_name`, text, optional): Enter the emergency contact's first name.
* **Emergency Contact Last Name** (`emergency_contact_last_name`, text, optional): Enter the emergency contact's last name.
* **Relationship to Participant** (`emergency_contact_relationship`, text, optional): Describe the relationship between the participant and the emergency contact.
* **Emergency Contact Address** (`emergency_contact_address`, text, optional): Enter the emergency contact's address.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, optional): Enter the emergency contact's phone number.
* **Relationship to Participant** (`emergency_contact_relationship`, text, optional): This field appears to be a duplicate of the previous "Relationship to Participant" field; please ignore this.
* **Signature Date** (`signature_date`, date, required): Date and sign the form to confirm participation.
* **Signature First Name** (`signature_first_name`, text, required): Enter your first name to sign the form.
* **Signature Last Name** (`signature_last_name`, text, required): Enter your last name to sign the form.
* **Signature Title** (`signature_title`, text, required): Enter your title to sign the form.
* **Emergency Contact Signature Date** (`emergency_signature_date`, date, required): Date and sign the form to confirm emergency contact.
* **Emergency Signature First Name** (`emergency_signature_first_name`, text, required): Enter the emergency contact's first name to sign the form.
* **Emergency Signature Last Name** (`emergency_signature_last_name`, text, required): Enter the emergency contact's last name to sign the form.
* **Emergency Signature Title** (`emergency_signature_title`, text, required): Enter the emergency contact's title to sign the form.
* **Player Date of Birth** (`player_dob`, date, required): Enter the participant's date of birth in the format MM/DD/YYYY.
* **Day of Birth** (`player_dob_day`, text, required): Enter the day of the participant's birth.
* **Consent to Participation** (`consent_to_participation`, select_one, required): Confirm consent to participate by selecting "True" or "False".
