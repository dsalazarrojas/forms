# ophthalmology_referral_form - Help Guide
## Purpose
This form is used to collect information for an ophthalmology referral. The purpose of this form is to gather relevant details about a patient's medical history, diagnosis, and other relevant information that can help in making decisions for their care.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's information, including their name, address, phone number, and any other relevant details.
2. Provide a brief medical history for the patient, including any relevant medical conditions or previous treatments.
3. Specify the diagnosis and any relevant details about the patient's condition.
4. Select the type of referral and the destination of the referral.
5. Enter any relevant contact information for the ophthalmologist being referred to, including their phone number and email.
6. Provide any relevant notes or comments for the ophthalmologist.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, `text`, required: false): 
  This field is for entering the patient's information, including their name, address, phone number, and any other relevant details.
* **Medical History** (`medical_history`, `text`, required: false): 
  This field is for providing a brief medical history for the patient, including any relevant medical conditions or previous treatments.
* **Diagnosis** (`diagnosis`, `text`, required: false): 
  This field is for specifying the diagnosis and any relevant details about the patient's condition.
* **Ophthalmologist** (`ophthalmologist`, `text`, required: false): 
  This field is for entering the ophthalmologist's name and contact information.
* **Referral Type** (`referral_type`, `select_one`, required: false):
  This field is for selecting the type of referral (I agree/I do not agree).
* **Referral Destination** (`referral_destination`, `select_multiple`, required: false):
  This field is for selecting the destination of the referral.
* **Patient Phone** (`patient_phone`, `text`, required: false): 
  This field is for entering the patient's phone number.
* **Date of Visit** (`date_of_visit`, `date`, required: false): 
  This field is for entering the date of the patient's visit.
* **Time of Visit** (`time_of_visit`, `time`, required: false): 
  This field is for entering the time of the patient's visit.
* **Doctor Name** (`doctor_name`, `text`, required: false): 
  This field is for entering the doctor's name.
* **Doctor Phone** (`doctor_phone`, `text`, required: false): 
  This field is for entering the doctor's phone number.
* **Doctor Email** (`doctor_email`, `email`, required: false): 
  This field is for entering the doctor's email.
* **Doctor Notes** (`doctor_notes`, `note`, required: false): 
  This field is for providing any relevant notes or comments for the doctor.
* **Patient Notes** (`patient_notes`, `note`, required: false): 
  This field is for providing any relevant notes or comments for the patient.
* **Referral Notes** (`referral_notes`, `note`, required: false): 
  This field is for providing any relevant notes or comments for the referral.
* **Ophthalmologist Notes** (`ophthalmologist_notes`, `note`, required: false): 
  This field is for providing any relevant notes or comments for the ophthalmologist.
* **Patient Address** (`patient_address`, `text`, required: false): 
  This field is for entering the patient's address.
* **Doctor Address** (`doctor_address`, `text`, required: false): 
  This field is for entering the doctor's address.

## Tips

* Please provide as much relevant information as possible to help in making decisions for the patient's care.
* If you are unsure about any of the fields, please ask for clarification before proceeding.
* Remember to review the patient's form carefully before submitting it.
