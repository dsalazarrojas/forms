<thinking>
We need to ensure that the clinical study records release form is used correctly and consistently across our organization. This form is used to authorize the release of a patient's medical records for clinical research purposes. Before starting, we need to check that we are not duplicating an existing authorization or using this form for a different purpose. Please read the instructions carefully to ensure you understand the form's purpose and how to complete it.

To complete this form, start by filling out your patient's demographic information, including their full name, date of birth, current address, phone number, and email address. This will ensure that we have accurate contact information for our patients. 

Next, select the types of records you would like to release, such as medical history, laboratory results, or imaging reports. 

After that, specify the date range of records you would like to release. 

You will also need to indicate the purpose of the records release, such as for clinical research or data analysis. 

Please specify the person or organization receiving the records and their contact information.

You will also have the option to request a preferred format for the records release, such as electronic or paper copies.

Finally, ensure that you have properly authorized the release of sensitive information, if any, and indicate whether you understand that you can revoke the authorization if needed.

Please review all the fields in this form carefully to ensure you understand what information you are authorizing to be released and to whom.
</thinking>

# Clinical Study Records Release Form - Help Guide
## Purpose
The Clinical Study Records Release Form is used to authorize the release of a patient's medical records for clinical research purposes.

## How To Complete This Form
1. Fill out your patient's demographic information: 
    * **Patient Full Name** (`patient_name`, text, required): Enter your patient's full name to ensure we have accurate contact information.
    * **Patient ID or MRN** (`patient_id`, text, optional): Enter your patient's ID or Medical Record Number, if applicable.
2. Select the types of records you would like to release: 
    * **Types of Records to Be Released** (`records_requested`, select_multiple, required): Select all that apply: Medical History, Laboratory Results, Imaging Reports, Pathology Reports, Operative Reports, Discharge Summaries, Medication Records, Allergy Records, Vital Signs, Consultation Reports, Emergency Department Records, Other.
3. Specify the date range of records you would like to release: 
    * **Date Range From** (`date_range_from`, date, required): Enter the start date of the records you would like to release.
    * **Date Range To** (`date_range_to`, date, required): Enter the end date of the records you would like to release.
4. Indicate the purpose of the records release: 
    * **Purpose of Records Release** (`purpose_of_release`, select_one, required): Select the purpose of the records release, such as Clinical Research Study, Data Analysis, Quality Improvement, Regulatory Review, Other Research Purpose.
5. Specify the person or organization receiving the records: 
    * **Recipient Name or Organization** (`recipient_name`, text, required): Enter the name of the person or organization receiving the records.
    * **Recipient Address** (`recipient_address`, text, required): Enter the address of the person or organization receiving the records.
    * **Recipient Contact Information** (`recipient_contact`, text, required): Enter the contact information of the person or organization receiving the records.
6. Select the preferred format for the records release: 
    * **Preferred Format for Records** (`format_preference`, select_one, optional): Select Electronic PDF, Electronic HL7, Paper Copies, CD or USB Drive, No Preference.
7. Authorize the release of sensitive information: 
    * **Sensitive Information Authorization** (`sensitive_information`, select_one, required): Select whether to include all relevant information, exclude sensitive information, or include only specified types of sensitive information.
    * **Specify Which Sensitive Information** (`sensitive_specifications`, text, optional): If you selected to include only specified types of sensitive information, enter the types you would like to include.
8. Specify the authorization expiration date: 
    * **Authorization Expiration Date** (`expiration_date`, date, required): Enter the date when this authorization will expire.
9. Confirm your understanding of the authorization: 
    * **I Understand I Can Revoke This Authorization** (`revocation_understanding`, select_one, required): Select Yes I Understand to confirm you understand you can revoke this authorization.
    * **I Understand Treatment Is Not Conditioned on Signing** (`treatment_not_conditioned`, select_one, required): Select Yes I Understand to confirm you understand that treatment is not conditioned on signing this form.
    * **I Understand Information May Be Subject to Redisclosure** (`redisclosure_notice`, select_one, required): Select Yes I Understand to confirm you understand that information may be subject to redisclosure.
10. Request a copy of the authorization: 
    * **Would You Like a Copy of This Authorization** (`copy_requested`, select_one, required): Select True to request a copy of this authorization.
11. Get patient and staff signatures: 
    * **Patient Signature** (`patient_signature`, text, required): Enter your patient's signature, typed in full name.
    * **Date of Signature** (`signature_date`, date, required): Enter the date of your signature.
    * **Witness Name** (`witness_name`, text, optional): Enter the name of a witness, if applicable.
    * **Witness Signature** (`witness_signature`, text, optional): Enter the signature of a witness, if applicable.
12. Confirm HIPAA notice: 
    * **HIPAA Notice of Privacy Practices Provided** (`hipaa_notice_provided`, select_one, required): Select True to confirm you have provided the HIPAA notice of privacy practices, or Not Applicable if not applicable.

## Tips
* Review all fields carefully to ensure you understand what information you are authorizing to be released and to whom.
* If you are unsure about any field, please ask your supervisor or contact our office for assistance.
