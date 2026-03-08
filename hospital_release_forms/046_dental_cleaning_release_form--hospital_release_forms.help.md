# dental_cleaning_release_form - Help Guide
## Purpose
This form is used to collect information from patients regarding their dental cleaning appointments, including medical history, allergies, medications, and emergency contact information, as well as obtaining consent for treatment.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your patient's name, contact information, and date of birth.
2. Answer "Yes" or "No" to the consent question, indicating your understanding and agreement to the terms of treatment.
3. List any medical conditions, allergies, and medications that may be relevant to your dental cleaning appointment.
4. Provide any additional medical history or conditions that may be relevant to your appointment.
5. Enter the name and contact information of an emergency contact person.
6. Sign and date the form to confirm that you have read and understood the information provided.

## Field-by-Field Explanation
* **Patient Information** (`patient_info`, text, required/optional): Enter your patient's name, contact information, and date of birth.
* **Consent** (`consent`, select_one, required/optional): Indicate your understanding and agreement to the terms of treatment by answering "Yes" or "No".
* **Medical Conditions** (`medical_conditions`, text, required/optional): List any medical conditions that may be relevant to your dental cleaning appointment.
* **Allergies** (`allergies`, text, required/optional): List any allergies or sensitivities that may be relevant to your appointment.
* **Medications** (`medications`, text, required/optional): List any medications you are currently taking.
* **Medical History** (`medical_history`, text, required/optional): Provide any additional medical history or conditions that may be relevant to your appointment.
* **Other Medical Conditions** (`medical_conditions_other`, text, required/optional): List any other medical conditions that may not be listed in the previous fields.
* **Other Medical History** (`medical_history_other`, text, required/optional): Provide any additional medical history or conditions that may not be listed in the previous fields.
* **Emergency Contact** (`emergency_contact`, text, required/optional): Enter the name and contact information of an emergency contact person.
* **Signature Date** (`signature_date`, date, required/optional): Sign and date the form to confirm that you have read and understood the information provided.
* **Signed By** (`signed_by`, text, required/optional): Enter your name to confirm that you have signed the form.
* **Signature** (`signature`, text, required/optional): Sign your name to confirm that you have read and understood the information provided.
