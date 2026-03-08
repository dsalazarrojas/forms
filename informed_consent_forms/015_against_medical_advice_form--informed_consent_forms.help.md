<thinking>...</thinking>

# Against Medical Advice Form - Help Guide
## Purpose
The Against Medical Advice Form is a crucial document used in medical settings to record a patient's decision to refuse or leave medical treatment against the advice of a healthcare professional. This form ensures that the patient has been informed of the risks and alternatives to refusing treatment, and that they understand the potential consequences of their decision.

## How To Complete This Form

1. Start by entering your full name and date of birth as prompted.
2. Provide your address and phone number for contact purposes.
3. Identify your emergency contact's name and phone number.
4. Enter the name of your treating physician and the medical facility you are currently being treated at.
5. Specify the date when the medical advice was given to you.
6. Describe the recommended treatment or procedure.
7. Select whether you have been informed of the risks of refusing treatment (Yes/No).
8. Confirm if you understand the alternative treatments available (Yes/No).
9. Explain the reason for refusing the recommended treatment.
10. Acknowledge your understanding of the potential consequences of refusing treatment (Yes/No).
11. Confirm your decision to leave the facility against medical advice (Yes/No).
12. Acknowledge that you are releasing the facility from liability (I Acknowledge and Consent/I Do Not Consent).
13. Sign your name to confirm your decision.
14. A witness may optionally sign to witness your decision.

## Field-by-Field Explanation

* **Patient Full Name** (`patient_full_name`, `text`, required): Enter your full legal name.
* **Date of Birth** (`patient_date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YY.
* **Address** (`patient_address`, `text`, required): Enter your current address.
* **Phone Number** (`patient_phone`, `text`, required): Enter your phone number for contact purposes.
* **Emergency Contact Name and Phone** (`patient_emergency_contact`, `text`, required): Enter the name and phone number of your emergency contact.
* **-- Medical Advice Details --** (`medical_advice_header`, `note`, required): A note section to summarize the medical advice given.
* **Treating Physician Name** (`treating_physician_name`, `text`, required): Enter the name of your treating physician.
* **Medical Facility Name** (`medical_facility_name`, `text`, required): Enter the name of the medical facility.
* **Date of Medical Advice** (`medical_advice_date`, `date`, required): Enter the date when the medical advice was given.
* **Recommended Treatment** (`recommended_treatment`, `text`, required): Describe the treatment or procedure that was recommended.
* **Risks Explained** (`risks_explained`, `select_one`, required): Confirm if you were informed of the risks of refusing treatment (Yes/No).
* **Understood Alternatives** (`understood_alternatives`, `select_one`, required): Confirm if you understand the alternative treatments available (Yes/No).
* **Reason for Refusal** (`reason_for_refusal`, `text`, required): Explain why you are choosing to refuse the recommended treatment.
* **Awareness of Consequences** (`awareness_of_consequences`, `select_one`, required): Confirm if you understand the potential consequences of refusing treatment (Yes/No).
* **Decision to Leave** (`decision_to_leave`, `select_one`, required): Confirm your decision to leave the facility against medical advice (Yes/No).
* **Consent Acknowledgment** (`consent_acknowledgment`, `select_one`, required): Acknowledge that you are releasing the facility from liability (I Acknowledge and Consent/I Do Not Consent).
* **Patient Signature** (`patient_signature`, `text`, required): Sign your name to confirm your decision.
* **Witness Signature** (`witness_signature`, `text`, optional): Signature of a witness to this decision (optional).
* **Physician Signature** (`physician_signature`, `text`, optional): Signature of the attending physician (optional).
