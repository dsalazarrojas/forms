<thinking>
This form is designed to capture information for patient referrals, which are used to refer patients to specialists or other healthcare professionals for further treatment or consultation. The purpose of this form is to gather relevant details about the patient, including their name, medical record number, and contact information, as well as the doctor's information, including their name, specialty, contact details, and practice address. This form is meant to be completed by a doctor or healthcare professional and will help in facilitating smooth referrals and communication between healthcare providers.
</thinking>

# patient_referral_form - Help Guide
## Purpose
The patient referral form is designed to collect information about patients and doctors for referral purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's name, medical record number, and date of birth (DOB).
2. Select the doctor's specialty and name.
3. Enter the doctor's contact information, including phone number, email, and office address.
4. Specify the patient's contact information, including phone number and email.
5. Choose the referral status and doctor's specialty type.
6. Enter any additional notes or comments from the doctor.
7. Confirm the patient's address.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): Enter the patient's full name.
* **Medical Record Number** (`medical_record_number`, `text`, required): Enter the patient's medical record number.
* **Doctor's Name** (`doctor_s_name`, `text`, required): Enter the doctor's name.
* **Patient DOB** (`patient_dob`, `date`, required): Enter the patient's date of birth.
* **Referral Date** (`referral_date`, `date`, required): Enter the date of referral.
* **Doctor's Specialty** (`doctor_s_specialty`, `select_one`, required): Select the doctor's specialty (e.g., Cardiology, Dermatology, etc.).
* **Patient Condition** (`patient_condition`, `text`, optional): Enter any relevant medical conditions or notes about the patient.
* **Doctor's Phone** (`doctor_s_phone`, `text`, required): Enter the doctor's phone number.
* **Doctor's Email** (`doctor_s_email`, `email`, required): Enter the doctor's email address.
* **Hospital Name** (`hospital_name`, `text`, optional): Enter the hospital's name (not required but recommended).
* **Physician's Notes** (`physician_notes`, `text`, required): Enter any notes or comments from the doctor.
* **Patient Address** (`patient_address`, `text`, optional): Enter the patient's address (not required but recommended).
* **Doctor's Address** (`doctor_s_address`, `text`, optional): Enter the doctor's address (not required but recommended).
* **Doctor's Phone Type** (`doctor_s_phone_type`, `select_one`, required): Select the type of phone number (e.g., office, mobile, fax).
* **Patient Phone** (`patient_phone`, `text`, required): Enter the patient's phone number.
* **Patient Email** (`patient_email`, `email`, required): Enter the patient's email address.
* **Referral Status** (`referral_status`, `select_one`, required): Select the referral status (e.g., Active, Completed).
* **Doctor's Specialty Type** (`doctor_specialty_type`, `select_one`, required): Select the doctor's specialty type (e.g., Cardiology, Dermatology, etc.).
* **Doctor's Phone Number** (`doctor_phone_number`, `text`, required): Enter the doctor's phone number.
* **Patient DOB Range** (`patient_dob_range`, `date`, required): Enter the patient's date of birth range.
* **Doctor's Phone Number Type** (`doctor_phone_number_type`, `select_one`, required): Select the type of phone number (e.g., office, mobile, fax).
* **Patient Medical Condition** (`patient_medical_condition`, `text`, optional): Enter any relevant medical conditions or notes about the patient.
* **Doctor's Address Type** (`doctor_address_type`, `select_one`, required): Select the type of doctor's address (e.g., home, office).
* **Doctor's License Number** (`doctor_license_number`, `text`, required): Enter the doctor's license number.
* **Referral Status** (`referral_status`, `select_one`, required): Select the referral status (e.g., Active, Completed).
