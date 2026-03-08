# Confidential Patient Information Form - Help Guide
## Purpose
The Confidential Patient Information Form is a collection of personal and medical information about the patient. This form is used to gather essential data that helps the medical staff to provide proper care and treatment to the patient.

## How To Complete This Form
1. Fill out the form carefully and accurately.
2. Use the provided hints for guidance on each field.
3. Review each field to ensure that you have provided all the necessary information.
4. Sign the form to confirm that the information provided is accurate and complete.

## Field-by-Field Explanation

* **Patient First Name** (`patient_first_name`, text, required): Enter the patient's first name as it is written on their identification documents.
* **Patient Last Name** (`patient_last_name`, text, required): Enter the patient's last name as it is written on their identification documents.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in MM/DD/YYYY format.
* **Gender** (`gender`, select_one, required): Select the patient's gender.
* **Social Security Number** (`ssn`, text, required): Enter the patient's Social Security Number as it appears on their identification documents (optional, but recommended).
* **Street Address** (`address`, text, required): Enter the patient's full street address.
* **City** (`city`, text, required): Enter the patient's city of residence.
* **State** (`state`, text, required): Enter the patient's state of residence.
* **ZIP Code** (`zip_code`, text, required): Enter the patient's zip code.
* **Home Phone** (`home_phone`, text, optional): Enter the patient's home phone number (if applicable).
* **Mobile Phone** (`mobile_phone`, text, required): Enter the patient's mobile phone number.
* **Email Address** (`email`, email, required): Enter the patient's email address.
* **Preferred Contact Method** (`preferred_contact`, select_one, required): Select how the patient would like to be contacted (e.g. phone call, text message, email, mail).
* **Emergency Contact Name** (`emergency_contact_name`, text, required): Enter the name of the emergency contact person.
* **Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the phone number of the emergency contact person.
* **Emergency Contact Relationship** (`emergency_contact_relationship`, select_one, required): Select the relationship between the patient and the emergency contact person (e.g. spouse, parent, child).
* **Primary Language** (`primary_language`, select_one, required): Select the patient's primary language (e.g. English, Spanish, Chinese).
* **Interpreter Needed** (`interpreter_needed`, select_one, required): Select whether an interpreter is needed (e.g. yes, no).
* **Insurance Provider** (`insurance_provider`, text, required): Enter the name of the patient's insurance provider.
* **Insurance ID Number** (`insurance_id`, text, required): Enter the patient's insurance ID number.
* **Insurance Group Number** (`insurance_group`, text, optional): Enter the patient's insurance group number (if applicable).
* **Policy Holder Name** (`policy_holder`, text, optional): Enter the name of the policy holder (if different from the patient).
* **Primary Care Physician** (`primary_care_physician`, text, optional): Enter the name of the patient's primary care physician.
* **PCP Phone** (`pcp_phone`, text, optional): Enter the phone number of the primary care physician.
* **Reason for Visit** (`reason_for_visit`, text, required): Enter the patient's reason for visit.
* **Current Medications** (`current_medications`, text, required): List all current medications the patient is taking.
* **Medication Allergies** (`medication_allergies`, text, required): List any medication allergies the patient has.
* **Current Medical Conditions** (`medical_conditions`, text, optional): List any current medical conditions the patient has.
* **Previous Surgeries** (`previous_surgeries`, text, optional): List any previous surgeries the patient has had.
* **Family Medical History** (`family_medical_history`, text, optional): List any relevant family medical history.
* **HIPAA Privacy Practices Acknowledgment** (`hipaa_acknowledgment`, select_one, required): Select whether you have received notice of HIPAA privacy practices.
* **Consent to Treatment** (`consent_to_treat`, select_one, required): Select whether you consent to treatment.
* **Information Release Authorization** (`information_release`, select_one, required): Select who should have access to the patient's information.
* **Release Details** (`release_details`, text, optional): Specify who has been authorized to release the patient's information.
* **Patient Signature** (`patient_signature`, select_one, required): Select to certify that the information provided is accurate and complete.
* **Guardian Name** (`guardian_name`, text, optional): Enter the name of the guardian (if applicable).
* **Guardian Relationship** (`guardian_relationship`, text, optional): Enter the relationship between the guardian and the patient.
* **Date of Signature** (`signature_date`, date, required): Enter the date of signature in MM/DD/YYYY format.

## Tips
* Make sure to fill out the form carefully and accurately.
* Use the provided hints for guidance on each field.
* Review each field to ensure that you have provided all the necessary information.
* Sign the form to confirm that the information provided is accurate and complete.
