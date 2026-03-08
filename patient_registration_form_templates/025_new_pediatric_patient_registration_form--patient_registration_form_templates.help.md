<thinking>This is a form for creating a new pediatric patient record. The form is used to collect patient information including name, contact details, medical history, and appointment information. The form is designed for healthcare professionals to register new patients in their practice. To ensure accurate patient data, please ensure all fields are completed truthfully and thoroughly.</thinking>

# new-pediatric-patient-registration-form - Help Guide
## Purpose
This form is used to create a new pediatric patient record. It helps healthcare professionals to register patients, including collecting personal contact information, medical history, and appointment details.

## How To Complete This Form
1. Please ensure all required fields are completed.
2. For fields requiring a date, enter the date in the format `YYYY-MM-DD`.
3. For fields requiring an email, enter the email address in the format `username@example.com`.
4. For fields requiring a phone number, enter the number in the format `XXX-XXX-XXXX`.

## Field-by-Field Explanation
- **First name** (`first_name`, `text`, required: false): Enter the patient's first name.
  - **Last name** (`last_name`, `text`, required: false): Enter the patient's last name.
  - **Date of birth** (`date_of_birth`, `date`, required: false): Enter the patient's date of birth in the format `YYYY-MM-DD`.
  - **Email** (`email`, `email`, required: false): Enter the patient's email address in the format `username@example.com`.
  - **Phone** (`phone`, `text`, required: false): Enter the patient's phone number in the format `XXX-XXX-XXXX`.
  - **Address** (`address`, `text`, required: false): Enter the patient's address.
  - **Medical condition** (`medical_condition`, `text`, required: false): Enter any relevant medical conditions the patient may have.
  - **Doctor name** (`doctor_name`, `text`, required: false): Enter the name of the doctor who will be treating the patient.
  - **Medical specialty** (`medical_specialty`, `text`, required: false): Enter the medical specialty of the doctor who will be treating the patient.
  - **Patient id** (`patient_id`, `number`, required: false): Enter a patient id number.
  - **Medical record number** (`medical_record_number`, `text`, required: false): Enter the medical record number.
  - **Patient type** (`patient_type`, `select_one`, required: false): Select the type of patient, e.g., Newborn, Child, Adult.
  - **Doctor phone** (`doctor_phone`, `text`, required: false): Enter the doctor's phone number.
  - **Doctor email** (`doctor_email`, `email`, required: false): Enter the doctor's email address in the format `username@example.com`.
  - **Medical history** (`medical_history`, `text`, required: false): Enter any relevant medical history the patient may have.
  - **Allergies** (`allergies`, `text`, required: false): Enter any allergies the patient may have.
  - **Doctor Name 2** (`doctor_name_2`, `text`, required: false): Enter the name of a second doctor involved in the patient's care.
  - **Patient family history** (`patient_family_history`, `text`, required: false): Enter any relevant family medical history the patient may have.
  - **Doctor specialty 2** (`doctor_specialty_2`, `text`, required: false): Enter the medical specialty of the second doctor involved in the patient's care.
  - **Medical Record Number 2** (`medical_record_number_2`, `text`, required: false): Enter the medical record number 2.
  - **Patient status** (`patient_status`, `select_one`, required: false): Select the patient's status, e.g., Active, Inactive, Discharged.
  - **Doctor Phone 2** (`doctor_phone_2`, `text`, required: false): Enter the second doctor's phone number.
  - **Doctor Email 2** (`doctor_email_2`, `email`, required: false): Enter the second doctor's email address in the format `username@example.com`.
  - **Medical record notes** (`medical_record_notes`, `text`, required: false): Enter any medical notes regarding the patient's record.
  - **Doctor comment** (`doctor_comment`, `text`, required: false): Enter any comments from the doctor regarding the patient's treatment.
