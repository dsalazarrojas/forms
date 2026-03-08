# Surgical Consent Form - Help Guide
## Purpose
The Surgical Consent Form is a document that helps the medical team gather essential information about the patient, including their identification, medical history, and acknowledgment of the procedure. This form is designed to be used for patients who are scheduled for a surgical procedure.

## How To Complete This Form
To complete this form, please follow these steps:

*   Enter your patient information in the "Patient Information" section.
*   Provide your patient ID number in the "Patient ID" section.
*   Enter the emergency contact's name and contact information in the "Emergency Contact" section.
*   Describe your relationship with the emergency contact in the "Relationship" section.
*   List any relevant medical history, allergies, and previous surgeries in the "Medical History" section.
*   Describe any current medical conditions, including symptoms and diagnosis, in the "Current Medical Conditions" section.
*   Answer the questions in the "Acknowledgment" section truthfully, indicating whether you understand the procedure and the risks involved.
*   Sign the "Digital Signature" section to confirm that you have read and understood the information provided.

## Field-by-Field Explanation
### Patient Information
*   **Patient Name** (`patient_information`, text, required): Enter your legal name as it appears on your identification documents.
### Patient ID
*   **Patient ID** (`patient_id`, number, optional): Enter your patient ID number, if applicable.
### Emergency Contact
*   **Name** (`emergency_contact_name`, text, optional): Enter the name of your emergency contact person.
*   **Phone** (`emergency_contact_phone`, text, optional): Enter the phone number of your emergency contact person.
*   **Address** (`emergency_contact_address`, text, optional): Enter the address of your emergency contact person.
*   **Relationship** (`emergency_contact_relationship`, text, optional): Describe your relationship with the emergency contact person.
### Medical History
*   **Medical History** (`medical_history`, text, optional): List any previous medical conditions, surgeries, or allergies that may be relevant to your upcoming surgery.
*   **Allergies** (`medical_history_allergies`, text, optional): List any allergies you may have.
*   **Surgeries** (`medical_history_surgeries`, text, optional): List any previous surgeries you have had.
*   **Family History** (`medical_history_family_history`, text, optional): Describe your family medical history.
*   **Medications** (`medical_history_medications`, text, optional): List any medications you are currently taking.
### Current Medical Conditions
*   **Name** (`current_medical_conditions_name`, text, optional): Describe your current medical conditions.
*   **Symptoms** (`current_medical_conditions_symptoms`, text, optional): Describe your current symptoms.
*   **Diagnosis** (`current_medical_conditions_diagnosis`, text, optional): Provide a description of your current medical conditions diagnosis.
### Acknowledgment
*   **Do you understand the procedure?** (`acknowledgment_do_you_understand`, select_one, optional): Answer "True" if you understand the procedure and its risks, "False" otherwise.
*   **Waiver** (`waiver`, text, optional): This field is for your acknowledgment of the risks involved in the procedure.
*   **Do you waive your right to sue?** (`waiver_do_you_waive`, select_one, optional): Answer "True" if you understand and waive your right to sue, "False" otherwise.
### Digital Signature
*   **Digital Signature** (`digital_signature`, text, optional): This is where you sign to confirm that you have read and understood the information provided.

Note: The "optional" fields are not required for the form to be completed, but it's recommended to fill them out for the medical team's reference.
