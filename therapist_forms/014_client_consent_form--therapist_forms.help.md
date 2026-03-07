<thinking>
The Client Consent Form is designed to collect essential information from clients, including their personal details, medical history, and consent to treatment. This form ensures that clients understand and agree to the terms of their therapy services, including confidentiality policies, session recording, and payment responsibilities.
</thinking>

# Client Consent Form - Help Guide
## Purpose
The Client Consent Form is a crucial document that requires clients to provide their consent and understanding of the therapy services they will receive. This form is used to ensure that clients are aware of their rights and responsibilities during the treatment process.

## How To Complete This Form
- Please fill in your personal details, including your first and last name, email address, phone number, street address, city, state, and ZIP Code.
- Select the type of therapy services you will receive (Individual, Couples, Family, Group, Child, or Adolescent Therapy).
- Describe what you hope to achieve through therapy (Primary Therapy Goals).
- Indicate whether you have had therapy before (Have You Had Therapy Before?).
- List any current medications or relevant medical conditions that may affect your treatment.
- Provide information about your mental health history, including previous diagnoses or treatments.
- Indicate your understanding of confidentiality policies, limits of confidentiality, and consent to session recording.
- Provide the name and contact information of an emergency contact person.
- Confirm that you understand the cancellation policy and your payment responsibilities.
- Sign the form with the current date and an electronic signature.

## Field-by-Field Explanation
* **First Name** (`client_first_name`, text, required): Your legal first name.
* **Last Name** (`client_last_name`, text, required): Your legal last name.
* **Email Address** (`client_email`, email, required): Your primary contact email address.
* **Phone Number** (`client_phone`, text, required): Your best contact number.
* **Street Address** (`client_address`, text, required): Your complete mailing address.
* **City** (`client_city`, text, required): Your city of residence.
* **State** (`client_state`, text, required): Your state of residence.
* **ZIP Code** (`client_zip`, text, required): Your ZIP code.
* **Date of Birth** (`date_of_birth`, date, required): Your date of birth (MM/DD/YYYY).
* **Therapist Name** (`therapist_name`, text, required): Your assigned therapist's name.
* **Type of Therapy** (`therapy_type`, select_one, required): Services you will receive (Individual, Couples, Family, Group, Child, or Adolescent Therapy).
* **Primary Therapy Goals** (`therapy_goals`, text, required): What you hope to achieve through therapy.
* **Have You Had Therapy Before?** (`previous_therapy`, select_one, required): Indicate previous experience with therapy.
* **Current Medications** (`current_medications`, text, optional): List all medications you are currently taking.
* **Relevant Medical Conditions** (`medical_conditions`, text, optional): Any conditions affecting your treatment.
* **Mental Health History** (`mental_health_history`, text, optional): Previous diagnoses or treatments.
* **I Consent to Receive Therapy Services** (`consent_to_treatment`, select_one, required): Consent to receive therapy services.
* **I Understand Confidentiality Policies** (`confidentiality_understanding`, select_one, required): Understand the privacy rights explained.
* **I Understand Limits of Confidentiality** (`confidentiality_limits`, select_one, required): Understand mandatory reporting situations.
* **Consent to Session Recording** (`session_recording`, select_one, optional): Consent to session recording for supervision purposes only.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Full name of the emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Best contact number of the emergency contact person.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required): How the emergency contact person is related to you.
* **I Understand the Cancellation Policy** (`cancellation_policy`, select_one, required): Confirm understanding of the 24-hour cancellation policy.
* **I Understand My Payment Responsibilities** (`payment_responsibility`, select_one, required): Confirm understanding of financial obligations.
* **Consent Date** (`consent_date`, date, required): Date of signing the consent form.
* **Electronic Signature** (`electronic_signature`, text, required): Type your full name.
* **Witness Signature** (`witness_signature`, text, optional): If applicable, sign as a witness.
