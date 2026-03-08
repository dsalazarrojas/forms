# Doctor Referral Form - Help Guide
## Purpose
The Doctor Referral Form is used to collect information about patients and doctors for medical referrals between healthcare professionals.

## How To Complete This Form
1. Fill in the patient's information, including their name, email, phone number, address, and date of birth.
2. Enter the doctor's details, such as their name, email, phone numbers, address, specialty, and license type.
3. Select the patient's country of origin.
4. Provide any additional referral information.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required: false): Enter the patient's full name.
* **Patient Email** (`patient_email`, `email`, required: false): Enter the patient's email address.
* **Patient Phone** (`patient_phone`, `text`, required: false): Enter the patient's phone number.
* **Patient Address** (`patient_address`, `text`, required: false): Enter the patient's address.
* **Patient City** (`patient_city`, `text`, required: false): Enter the patient's city.
* **Patient State** (`patient_state`, `text`, required: false): Enter the patient's state or province.
* **Patient Zip** (`patient_zip`, `number`, required: false): Enter the patient's zip code or postal code.
* **Patient Country** (`patient_country`, `select_one`, required: false): Select the patient's country of origin.
* **Date of Birth** (`patient_date_of_birth`, `date`, required: false): Enter the patient's date of birth.
* **Doctor Name** (`doctor_name`, `text`, required: false): Enter the doctor's full name.
* **Doctor Email** (`doctor_email`, `email`, required: false): Enter the doctor's email address.
* **Doctor Phone 1** (`doctor_phone`, `text`, required: false): Enter the doctor's phone number 1.
* **Doctor Phone 2** (`doctor_phone2`, `text`, required: false): Enter the doctor's phone number 2.
* **Doctor Phone 3** (`doctor_phone3`, `text`, required: false): Enter the doctor's phone number 3.
* **Doctor Phone 4** (`doctor_phone4`, `text`, required: false): Enter the doctor's phone number 4.
* **Doctor Phone 5** (`doctor_phone5`, `text`, required: false): Enter the doctor’s phone number 5.
* **Doctor Address** (`doctor_address`, `text`, required: false): Enter the doctor's address.
* **Doctor License** (`doctor_license`, `select_one`, required: false): Select the doctor's license type.
* **Doctor Specialty** (`doctor_specialty`, `select_multiple`, required: false): Select the doctor's specialty or specialties.
* **Doctor Phone 6** (`doctor_phone6`, `text`, required: false): Enter the doctor’s phone number 6.
* **Doctor Phone 7** (`doctor_phone7`, `text`, required: false): Enter the doctor’s phone number 7.
* **Doctor Phone 8** (`doctor_phone8`, `text`, required: false): Enter the doctor’s phone number 8.
* **Doctor Phone 9** (`doctor_phone9`, `text`, required: false): Enter the doctor’s phone number 9.
* **Patient Referral** (`patient_referral`, `text`, required: false): Enter any additional referral information.
* **Submitted By** (`submitted_by`, `text`, required: false): Enter the name of the person submitting the referral.
