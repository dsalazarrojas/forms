<thinking>...</thinking>

# iv_therapy_injections_consent_form - Help Guide

## Purpose
The "iv_therapy_injections_consent_form" is a form used for obtaining informed consent from patients prior to intravenous (IV) therapy injections. This form collects relevant patient information, consent status, and other details related to the injection administration. The form is designed to ensure that the patient's rights and safety are respected while also ensuring the healthcare provider's liability is protected.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's name in the "Patient Name" field (page 1).
2. Enter the contact information (phone and email) of the patient's contact person (page 1).
3. Select the patient's date of birth (DOB) in the "Patient DOB" field (page 1).
4. Confirm that the patient has consented to the injection by selecting "True" in the "Consent To Injection" field (page 1).
5. Provide any relevant medical history for the patient in the "Medical History" field (page 1).
6. List any allergies the patient has in the "Allergies" field (page 1).
7. Sign and date the form by providing your signature in the "Signature" field (page 1).
8. Enter the date the form was signed in the "Date Signed" field (page 1).
9. Enter the patient's ID number in the "Patient ID" field (page 1).
10. Provide the name of the healthcare provider in the "Healthcare Provider" field (page 1).
11. Enter the name and address of the facility where the injection will be administered in the "Facility Name", "Facility Address", "Facility City", "Facility State", and "Facility Zip" fields (page 2).
12. Identify the injection site by selecting "Arm", "Hand", or "Foot" in the "Injection Site" field (page 2).
13. If the injection site is not listed, provide the location in the "Injection Site Other" field (page 2).
14. Enter the date the injection was administered in the "Date Injections Administered" field (page 2).
15. Sign and date the consent form by providing your signature in the "Consent Signature" field (page 2).
16. Enter the date the consent was signed in the "Consent Signature Date" field (page 2).

## Field-by-Field Explanation
### Page 1
* **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
* **Contact Phone** (`contact_phone`, text, required): Enter the patient's contact phone number.
* **Contact Email** (`contact_email`, email, required): Enter the patient's email address.
* **Patient DOB** (`patient_dob`, date, required): Select the patient's date of birth.
* **Consent To Injection** (`consent_to_injection`, select_one, required): Confirm that the patient has consented to the injection by selecting "True".
* **Medical History** (`medical_history`, note, optional): Provide any relevant medical history for the patient.
* **Allergies** (`allergies`, select_multiple, optional): List any allergies the patient has.
* **Signature** (`signature`, text, required): Sign your healthcare provider's signature.
* **Date Signed** (`date_signed`, date, required): Enter the date the form was signed.
* **Patient ID** (`patient_id`, text, optional): Enter the patient's ID number.
* **Healthcare Provider** (`healthcare_provider`, text, optional): Provide your healthcare provider's name.
* **Facility Name** (`facility_name`, text, optional): Enter the name of the facility where the injection will be administered.
* **Facility Address** (`facility_address`, text, optional): Enter the address of the facility where the injection will be administered.
* **Facility City** (`facility_city`, text, optional): Enter the city of the facility where the injection will be administered.
* **Facility State** (`facility_state`, text, optional): Enter the state of the facility where the injection will be administered.
* **Facility Zip** (`facility_zip`, text, optional): Enter the zip code of the facility where the injection will be administered.

### Page 2
* **Injection Site** (`injection_site`, select_one, required): Select the injection site from the options provided.
* **Injection Site Other** (`injection_site_other`, text, optional): If the injection site is not listed, provide the location in this field.
* **Injection Site Other Details** (`injection_site_other_details`, text, optional): Provide additional details about the injection site.
* **Date Injections Administered** (`date_injection_administered`, date, required): Enter the date the injection was administered.
* **Consent Signature** (`consent_signature`, text, required): Sign your consent signature.
* **Consent Signature Date** (`consent_signature_date`, date, required): Enter the date the consent was signed.
