# Client History And Health Intake Form - Help Guide
## Purpose
The Client History And Health Intake Form is used to collect essential information about the client, including contact details, medical history, and health-related information. This form helps medical professionals assess the client's condition and provide personalized care.

## How To Complete This Form
1. Complete each field accurately and thoroughly, as this information will be used for medical purposes only.
2. Please ensure that all required fields are filled out, as indicated by the "Required" label.
3. If you are unsure about any field, please contact the medical staff for guidance.
4. Once completed, review the form carefully to ensure accuracy and completeness.

## Field-by-Field Explanation
* **First Name** (`patient_first_name`, text, required): Enter your legal first name.
* **Last Name** (`patient_last_name`, text, required): Enter your legal last name.
* **Email Address** (`patient_email`, email, required): Enter your primary contact email.
* **Phone Number** (`patient_phone`, text, required): Enter your best contact number.
* **Street Address** (`patient_address`, text, required): Enter your complete mailing address.
* **City** (`patient_city`, text, required): Enter your city of residence.
* **State** (`patient_state`, text, required): Enter your state of residence.
* **ZIP Code** (`patient_zip`, text, required): Enter your ZIP code.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Gender** (`gender`, select_one, required): Select your gender (Male, Female, Non-Binary, Prefer Not to Say, Other).
* **Marital Status** (`marital_status`, select_one, optional): Select your current marital status (Single, Married, Divorced, Widowed, Separated, Domestic Partnership).
* **Occupation** (`occupation`, text, optional): Enter your current occupation.
* **Employer Name** (`employer_name`, text, optional): Enter your company name.
* **Insurance Provider** (`insurance_provider`, text, optional): Enter your insurance company name.
* **Insurance Policy Number** (`insurance_policy_number`, text, optional): Enter your policy ID.
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the full name of your emergency contact.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the contact number of your emergency contact.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, text, required): Describe your relationship with your emergency contact.
* **Reason for Visit** (`reason_for_visit`, text, required): Describe why you are visiting today.
* **Current Symptoms** (`current_symptoms`, text, required): Describe your current symptoms.
* **Medical History** (`medical_history`, text, required): Describe your past illnesses and conditions.
* **Surgical History** (`surgical_history`, text, optional): Describe any past surgeries with dates.
* **Current Medications** (`current_medications`, text, required): List your current medications and dosages.
* **Medication Allergies** (`medication_allergies`, text, optional): List any medication allergies.
* **Food Allergies** (`food_allergies`, text, optional): List any food allergies.
* **Other Allergies** (`other_allergies`, text, optional): List any other allergies (e.g., environmental, latex).
* **Family Medical History** (`family_medical_history`, text, required): Describe your family medical history (parents, siblings, grandparents).
* **Social History** (`social_history`, text, optional): Describe any relevant social history (smoking, alcohol, drugs).
* **Review of Systems** (`review_of_systems`, text, optional): Describe any issues with body systems.
* **I Consent to Medical Treatment** (`consent_to_treatment`, select_one, required): Select whether you consent to medical treatment (I Consent, I Do Not Consent).
* **I Acknowledge Receipt of HIPAA Notice** (`hipaa_acknowledgment`, select_one, required): Select whether you acknowledge receipt of HIPAA notice (I Acknowledge, I Do Not Acknowledge).
* **I Confirm All Information Is Accurate** (`information_accuracy`, select_one, required): Select whether you confirm the accuracy of the information provided (I Confirm, I Do Not Confirm).
* **Intake Date** (`intake_date`, date, required): The date of this intake form.
* **Electronic Signature** (`electronic_signature`, text, required): Sign your name electronically by typing it in the provided field.

## Tips
* Please ensure that all fields are filled out accurately and thoroughly.
* If you are unsure about any field, please contact the medical staff for guidance.
* Review the form carefully before submitting to ensure accuracy and completeness.
