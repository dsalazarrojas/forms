# medical_consent_and_indemnity_form - Help Guide
## Purpose
The medical consent and indemnity form is used to obtain legal consent from patients before undergoing medical procedures and to record the date and time the consent was signed. This form helps protect both the patient and the healthcare provider by ensuring that the patient is aware of the risks and benefits of the procedure and provides a clear understanding of their rights and responsibilities.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the medical consent statement and understand the information it contains.
2. Enter the patient's name.
3. Select the date of the visit, using the date format specified.
4. Describe the procedure in detail.
5. Indicate whether you have signed the form by selecting "Yes" or "No".
6. Indicate whether the patient has signed the form by selecting "Yes" or "No".
7. Enter the date the form was signed.
8. Enter the time the form was signed.

## Field-by-Field Explanation

* **Medical Consent Statement (Consent Statement)** (`consent_statement`, text, optional): This is a text field where you can enter a statement about the procedure and the risks and benefits associated with it. Please review and understand the information before signing the form.
* **Patient Name (Patient Name)** (`patient_name`, text, optional): Enter the name of the patient.
* **Date of Visit (Date of Visit)** (`date_of_visit`, date, optional): Select the date of the visit, in the format specified.
* **Procedure Description (Procedure Description)** (`procedure_description`, text, optional): Describe the procedure in detail.
* **Signed (Consent Signed)** (`consent_signed`, select_one, optional): Indicate whether you have signed the form by selecting "Yes" or "No".
* **Patient Signature (Patient Signature)** (`patient_signature`, select_one, optional): Indicate whether the patient has signed the form by selecting "Yes" or "No".
* **Physician Signature (Physician Signature)** (`physician_signature`, select_one, optional): Indicate whether you have signed the form as the physician by selecting "Yes" or "No".
* **Date Signed (Date Signed)** (`date_signed`, date, optional): Enter the date the form was signed.
* **Time Signed (Time Signed)** (`time_signed`, time, optional): Enter the time the form was signed.
