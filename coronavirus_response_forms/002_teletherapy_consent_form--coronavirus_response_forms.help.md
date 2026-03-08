<thinking>...</thinking>

# teletherapy_consent_form - Help Guide
## Purpose
This form is designed to collect information from patients for remote therapy sessions, obtaining their consent and contact details for emergency situations. It also includes a section for the patient to sign and date their consent, as well as a space for the therapist to sign and provide their contact information.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient information fields, including their contact details.
2. Select your consent option regarding the terms and conditions.
3. Sign and date your consent.
4. Enter your therapist's contact information, including their name, email, and phone number.

## Field-by-Field Explanation

* **Patient Information** (`patient_information`, text, required): Enter your name, address, phone number, and any other relevant contact details.
* **Contact Information** (`contact_information`, text, required): Enter your emergency contact's name, phone number, and address.
* **Emergency Contact** (`emergency_contact`, text, required): Enter your emergency contact's name and relationship to you (e.g., family member, friend, etc.).
* **Medical History** (`medical_history`, text, optional): If you have any relevant medical history or health conditions, please provide a brief description.
* **Consent** (`consent`, select_multiple, optional): Select "I have read, understand, and agree to the terms and conditions" to consent to remote therapy.
* **Signature** (`signature`, note, required): Sign your name to confirm your consent.
* **Signature Date** (`signature_date`, date, optional): Date your signature (optional but recommended).
* **Therapist's Signature** (`therapist_signature`, text, required): Sign your name as the therapist.
* **Therapist's Name** (`therapist_name`, text, required): Enter your name as the therapist.
* **Therapist's Email** (`therapist_email`, email, required): Enter your email address as the therapist.
* **Therapist's Phone** (`therapist_phone`, text, optional): Enter your phone number as the therapist.
* **Telehealth Platform** (`telehealth_platform`, text, optional): If you are using a specific telehealth platform, enter its name and version.
