# Teledermatology Patient Registration Form - Help Guide
## Purpose
The Teledermatology Patient Registration Form is designed to collect basic patient and medical practitioner information for the teledermatology service. This form is only for new patient registrations.

## How To Complete This Form
1. Fill in the required information about yourself as a patient, including your name, contact number, date of birth, and medical practitioner's information such as ID, specialty, and address.
2. Select your gender from the options provided.
3. Answer questions about your medical history and certifications.
4. Add any additional notes if necessary.
5. Verify and complete the medical practitioner's signature and other required fields.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Please fill in your full name, including any titles or prefix (e.g., Mr., Mrs., Dr., etc.).
* **Contact Number** (`patient_phone`, text, required): Enter your contact number, including country code.
* **Email** (`email`, email, optional): Enter your email address.
* **Date of Birth** (`date_of_birth`, date, required): Select your date of birth in the format MM/DD/YYYY.
* **Medical Practitioner ID** (`medical_practitioner_id`, number, optional): If a medical practitioner has already provided their ID, you can enter it here.
* **Medical Practitioner Name** (`medical_practitioner_name`, text, required): Enter the name of the medical practitioner who referred you to this teledermatology service.
* **Medical Practitioner Specialty** (`medical_practitioner_specialty`, select_one, required): Select the medical specialty of the practitioner who referred you (e.g., Dermatology, Other).
* **Address** (`patient_address`, text, optional): Enter your address.
* **Medical Practitioner Address** (`medical_practitioner_address`, text, optional): Enter the address of the medical practitioner who referred you.
* **Medical Practitioner Phone** (`medical_practitioner_phone`, text, optional): Enter the phone number of the medical practitioner who referred you.
* **Medical Practitioner License Number** (`medical_practitioner_license_number`, text, optional): If available, enter the license number of the medical practitioner who referred you.
* **Medical History** (`patient_medical_history`, text, optional): Provide any previous medical history.
* **Medical History Details** (`patient_medical_history_details`, text, optional): Provide more details about your medical history.
* **Medical Practitioner Report** (`medical_practitioner_report`, note, required): Write any notes or comments from your medical practitioner.
* **Signature** (`patient_signature`, note, required): Sign this form to confirm that you have filled it out accurately.
* **Medical Certificate** (`medical_certificate`, select_one, required): Select whether you have a medical certificate or not.
* **Medical Certificate Number** (`medical_certificate_number`, text, optional): If you have a medical certificate, enter its number.
* **Medical Practitioner License Number** (`medical_practitioner_licence_number`, text, optional): Enter the license number of the medical practitioner who referred you.
* **Medical Certifications** (`patient_medical_certification`, select_multiple, optional): Select any relevant medical certifications.
* **Medical Practitioner Notes** (`medical_practitioner_notes`, note, optional): Add any notes or comments from your medical practitioner.
* **Patient Notes** (`patient_medical_practitioner_notes`, note, optional): Add any additional notes or comments.
* **Medical Practitioner Additional Notes** (`medical_practitioner_additional_notes`, text, optional): Add any additional information from the medical practitioner.
* **Patient Additional Notes** (`patient_additional_notes`, text, optional): Add any additional information about yourself.

Note: All fields marked as optional are not required but may be necessary in certain circumstances.
