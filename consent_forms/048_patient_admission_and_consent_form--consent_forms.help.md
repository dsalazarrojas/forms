<thinking>
To ensure that the form is completed accurately and without duplication, we need to confirm that the end user understands the purpose and process of the "Patient Admission And Consent Form". This form is intended to gather essential information about the patient's admission, including contact details, medical history, emergency contact, allergy information, medication list, consent, and signature. The form should not be completed if the patient has already been admitted or if the form has been previously filled out for the same patient.
</thinking>

# Patient Admission And Consent Form - Help Guide
## Purpose
The "Patient Admission And Consent Form" is a critical document that ensures the patient's needs are met and their safety is assured during the hospital stay. It requires the patient to provide personal and medical information, and their consent to treatment.

## How To Complete This Form
To complete this form accurately and efficiently, follow these steps:

1. Enter your personal details in the "Patient Info" section, including your name, address, and contact numbers.
2. Provide your contact information in the "Contact Info" section, including the name and number of the person to contact in case of an emergency.
3. In the "Medical History" section, describe any pre-existing medical conditions, allergies, or previous surgeries.
4. List any medications you are currently taking in the "Medication List" section.
5. Answer "Yes" or "No" to the "Consent" question, confirming your agreement to treatment.
6. Sign your name in the "Patient Signature" section to confirm you have read and understand the form.
7. Record the date and time of admission in the "Date Admitted" and "Time Admitted" fields.

## Field-by-Field Explanation
* **Patient Info** (`patient_info`, text, required: false): Enter your full name, address, and contact numbers to ensure we can reach you.
* **Contact Info** (`contact_info`, text, required: false): Provide the name and number of the person to contact in case of an emergency.
* **Medical History** (`medical_history`, text, required: false): Describe any pre-existing medical conditions, allergies, or previous surgeries.
* **Emergency Contact** (`emergency_contact`, text, required: false): Enter the name and number of the person to contact in case of an emergency.
* **Allergy Info** (`allergy_info`, text, required: false): List any allergies or sensitivities you have.
* **Medication List** (`medication_list`, text, required: false): List any medications you are currently taking.
* **Consent** (`consent`, select_one, required: false): Answer "Yes" if you agree to treatment, "No" otherwise.
* **Patient Signature** (`patient_signature`, text, required: false): Sign your name to confirm you have read and understand the form.
* **Date Admitted** (`date_admitted`, date, required: false): Record the date you are admitted.
* **Time Admitted** (`time_admitted`, time, required: false): Record the time you are admitted.
* **Consent** (`consent`, select_one, required: false): Answer "Yes" or "No" to the question of whether you consent to treatment. 

Note: Please ensure you have answered "Yes" to the consent question before signing the form. 

## Tips
* Please ensure you have answered "Yes" to the consent question before signing the form.
* If you are unsure about any information, please consult with the hospital staff before completing the form.
* The form should only be completed once for each admission.
