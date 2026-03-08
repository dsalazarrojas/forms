# Medical Treatment Claim Form - Help Guide
## Purpose
This form is designed to collect information for a medical treatment claim. Please fill out the form accurately to ensure that your claim is processed correctly.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Ensure that all required fields are completed.
3. Review the form carefully before submission.

## Field-by-Field Explanation

* **Claim Form** (`claim_form`, text, optional): This field is not required but can be used to provide additional comments or information related to the claim.
* **Patient Info** (`patient_info`, text, required): Please provide your name and other essential contact information as the claimant.
* **Medical History** (`medical_history`, note, optional): If you have any medical history that is relevant to your claim, please provide it here.
* **Doctor Info** (`doctor_info`, text, optional): If you are claiming treatment, please provide the name and contact information of your treating doctor.
* **Claim Date** (`claim_date`, date, required): The date you are claiming for medical treatment.
* **Treatment Info** (`treatment_info`, text, required): Describe the treatment you are claiming in detail.
* **Insurance Company** (`insurance_company`, select_one, required): Do you have an insurance company that covers your claim? Yes or No.
* **Claim Number** (`claim_number`, number, required): This is your unique claim number, please provide it accurately.
* **Claim Status** (`claim_status`, select_multiple, optional): If your claim is active or inactive, please choose the correct status.
* **Claimant Signature** (`claimant_signature`, select_multiple, required): Please confirm that the claimant has reviewed and signed this form, Yes or No.
* **Doctor Signature** (`doctor_signature`, select_multiple, optional): If the doctor has provided treatment, please confirm that they have reviewed and signed this form, Yes or No.
* **Claimant Name** (`claimant_name`, text, required): Please provide your name as the claimant.
* **Claimant Address** (`claimant_address`, text, required): Please provide your address as the claimant.
* **Claimant Email** (`claimant_email`, email, required): Please provide your email address as the claimant.
* **Claimant Phone** (`claimant_phone`, text, required): Please provide your phone number as the claimant.
* **Relationship to Claimant** (`claimant_relationship`, select_one, optional): If you are representing the claimant, please indicate your relationship to them.
* **Patient Gender** (`patient_gender`, select_one, required): Please select the gender of the patient.
* **Patient Age** (`patient_age`, number, optional): If you are able to provide the patient's age, please do so.
* **Patient Birthday** (`patient_birthday`, date, optional): If you are able to provide the patient's birthday, please do so.
* **Patient Height** (`patient_height`, text, optional): If you are able to provide the patient's height, please do so.
* **Patient Weight** (`patient_weight`, text, optional): If you are able to provide the patient's weight, please do so.
* **Claimant DOB** (`claimant_dob`, date, required): The date of birth of the claimant.
* **Medical Record Number** (`medical_record_number`, text, required): This is your unique medical record number, please provide it accurately.
* **Medical Provider** (`medical_provider`, text, required): Please provide the name and contact information of your medical provider.

Note: The form fields marked as optional might be required in certain situations or for specific claims. Please ensure to check with the relevant authority for the specific requirements.
