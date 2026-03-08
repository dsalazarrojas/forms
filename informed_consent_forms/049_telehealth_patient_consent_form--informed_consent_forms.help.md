# Telehealth Patient Consent Form - Help Guide
## Purpose
This form is used to obtain informed consent from patients for telehealth services. It ensures that patients understand their rights, responsibilities, and the terms of the care they will receive.

## How To Complete This Form
To complete this form, follow the steps below:

1.  Review each section carefully and ensure you understand the information required.
2.  Fill in the patient information section with your basic details.
3.  Share your medical history, including any previous illnesses or conditions that may impact your care.
4.  Read and understand the consent statement.
5.  Sign and date the form to confirm your consent.
6.  If necessary, provide additional comments or notes in the patient signature note and provider signature note sections.

## Field-by-Field Explanation

*   **Patient Information** (`patient_info`, `text`, required/optional): Enter your basic patient information, including your name, address, and contact details.
*   **Medical History** (`medical_history`, `text`, required): Share your medical history, including any previous illnesses or conditions that may impact your care.
*   **Consent Statement** (`consent_statement`, `text`, required): Read and understand the consent statement carefully.
*   **Signature Section** (`signature_section`, `select_multiple`, required): Choose the correct option to confirm your consent.
*   **Signature** (`signature_section_input`, `time`, required): Sign and date the form to confirm your consent.
*   **Date** (`signature_date`, `date`, required): Enter the date you signed the form.
*   **Time** (`signature_time`, `time`, required): Enter the time you signed the form.
*   **Patient Signature** (`patient_signature`, `select_one`, required): Choose whether you agree to the Terms and Conditions.
*   **Patient Signature Note** (`patient_signature_note`, `text`, optional): Provide any additional comments or notes as necessary.
*   **Provider Signature** (`provider_signature`, `select_one`, required): Choose whether you agree to the Terms and Conditions.
*   **Provider Signature Note** (`provider_signature_note`, `text`, optional): Provide any additional comments or notes as necessary.
*   **Date (2)** (`date`, `date`, required): Enter the date the provider signed the form.
*   **Time (2)** (`time`, `time`, required): Enter the time the provider signed the form.
*   **I Have Agreed to the Terms and Conditions** (`patient_agreed`, `select_multiple`, required): Choose whether you agree to the Terms and Conditions.
*   **Additional Notes** (`patient_note`, `text`, optional): Provide any additional comments or notes as necessary.
*   **Notes** (`patient_agreed_note`, `text`, optional): Provide any additional comments or notes as necessary.
*   **Provider Notes** (`provider_note`, `text`, optional): Provide any additional comments or notes as necessary.
*   **Provider ID** (`provider_id`, `text`, required): Enter the provider's ID.
*   **Date of Signature** (`patient_signature_date`, `date`, required): Enter the date of your signature.
*   **Time of Signature** (`patient_signature_time`, `time`, required): Enter the time of your signature.
*   **Provider Signature Date** (`provider_signature_date`, `date`, required): Enter the date the provider signed the form.
*   **Provider Signature Time** (`provider_signature_time`, `time`, required): Enter the time the provider signed the form.
*   **Provider Agreed** (`provider_agreed`, `select_multiple`, required): Choose whether you agree to the Terms and Conditions.
*   **Provider Agreed Note** (`provider_agreed_note`, `text`, optional): Provide any additional comments or notes as necessary.
