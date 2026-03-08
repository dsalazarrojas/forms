<thinking> 
  This form is used for patients to provide their consent for a skin cooling gel patch procedure. 
  The form requires demographic information, medical history, and other relevant medical details. 
  This guide is intended for users who need to complete this form, and the explanations are based on the form's structure and field labels. 
  Please note that some fields might have unclear or ambiguous labels; in those cases, I've done my best to provide a clear explanation without inventing unsupported business logic.</thinking>

# Skin Cooling Gel Patch Consent Form - Help Guide
## Purpose
This form is used to gather patient information and consent for a skin cooling gel patch procedure. It is essential to carefully read and complete this form to ensure that the provided information is accurate and up-to-date.

## How To Complete This Form
To complete this form, please follow the instructions below:

1. Select the correct option for "Form Info" to indicate the type of procedure you are undergoing.
2. Enter your patient ID number in the "Patient ID" field.
3. Provide the date of service in the "Date of Service" field.
4. Enter your provider's name in the "Provider Name" field.
5. Sign the form with your signature in the "Signature" field.
6. Confirm that you have read and understood the information provided by selecting the correct option in the "Consent" field.
7. If applicable, provide contact information (name, phone number, and email) in the "Contact Info", "Contact Name", "Contact Phone", and "Contact Email" fields.
8. Enter your medical condition, date of birth, medical history, allergies, medical notes, and medical procedure details if required.
9. Indicate the status of your medical condition in the "Medical Condition Status" field.
10. Report the skin temperature in the "Skin Temperature" field (if applicable).
11. Specify the treatment for your medical condition in the "Medical Condition Treatment" field (if applicable).
12. Sign the form with your signature in the "Patient Signature" field.
13. Sign the form with your provider's signature in the "Provider Signature" field.

## Field-by-Field Explanation

* **Form Info** (`form_info`, `select_one`, required): Select the type of procedure you are undergoing.
* **Patient ID** (`patient_id`, `text`, required): Enter your patient ID number.
* **Date of Service** (`date_of_service`, `date`, required): Provide the date of the procedure.
* **Provider Name** (`provider_name`, `text`, required): Enter your provider's name.
* **Signature** (`signature`, `note`, required): Sign the form with your signature.
* **Consent** (`consent`, `select_one`, required): Confirm that you have read and understood the information provided.
* **Notes** (`notes`, `text`, optional): Provide any additional medical notes if required.
* **Contact Info** (`contact_info`, `text`, optional): Enter contact information (if applicable).
* **Contact Name** (`contact_name`, `text`, optional): Enter contact name (if applicable).
* **Contact Phone** (`contact_phone`, `text`, optional): Enter contact phone number (if applicable).
* **Contact Email** (`contact_email`, `text`, optional): Enter contact email (if applicable).
* **Patient Name** (`patient_name`, `text`, required): Enter your name.
* **Date of Birth** (`date_of_birth`, `date`, optional): Provide your date of birth.
* **Medical Condition** (`medical_condition`, `text`, optional): Enter your medical condition.
* **Medical History** (`medical_history`, `text`, optional): Enter your medical history.
* **Medical Allergies** (`medical_allergies`, `text`, optional): Enter your medical allergies.
* **Medical Notes** (`medical_notes`, `text`, optional): Enter medical notes.
* **Medical Procedure** (`medical_procedure`, `text`, optional): Enter medical procedure details.
* **Medical Procedure Result** (`medical_procedure_result`, `select_one`, required): Indicate the result of your medical procedure.
* **Medical Condition Status** (`medical_condition_status`, `select_one`, optional): Report the status of your medical condition.
* **Skin Temperature** (`skin_temperature`, `number`, optional): Report the skin temperature (if applicable).
* **Medical Condition Treatment** (`medical_condition_treatment`, `select_multiple`, optional): Specify the treatment for your medical condition.
* **Patient Signature** (`patient_signature`, `text`, required): Sign the form with your signature.
* **Provider Signature** (`provider_signature`, `text`, required): Sign the form with your provider's signature.
