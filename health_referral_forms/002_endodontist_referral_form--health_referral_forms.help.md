# Endodontist Referral Form - Help Guide
## Purpose
The Endodontist Referral Form is used by referring dentists to send patient information to an endodontist for further treatment and evaluation. This form helps ensure that the endodontist has all necessary information to provide optimal care to the patient.

## How To Complete This Form
To complete this form, follow these steps:

* Fill out the required fields with accurate and up-to-date information.
* Ensure that the fields are correctly filled out for the patient and referring dentist information.
* Review the form for completeness and accuracy before submission.

## Field-by-Field Explanation

* **Patient Information (1)** (`patient_info`, text, required: false): This field is not required but provides a space for any additional information that may be relevant to the patient's treatment.
* **Patient Name (2)** (`patient_name`, text, required: false): Enter the patient's name as it is listed in their medical records.
* **Date (3)** (`date`, date, required: false): Enter the date of the patient's last appointment or consultation.
* **Referred From (4)** (`referrer`, text, required: false): Enter the name of the dentist who is referring the patient to the endodontist.
* **Dentist Name (5)** (`dentist_name`, text, required: false): Enter the name of the endodontist who will be providing treatment.
* **Phone (6)** (`phone`, text, required: false): Enter the patient's contact phone number.
* **Email (7)** (`email`, email, required: false): Enter the patient's email address.
* **Dentist Email (8)** (`dentist_email`, email, required: false): Enter the endodontist's email address.
* **Address (9)** (`address`, text, required: false): Enter the patient's home address.
* **City (10)** (`city`, text, required: false): Enter the city where the patient resides.
* **State (11)** (`state`, select_one, required: true): Select the state where the patient resides.
* **Zip Code (12)** (`zip`, text, required: false): Enter the patient's zip code.
* **Dentist Phone (13)** (`dentist_phone`, text, required: false): Enter the endodontist's phone number.
* **Reason for Referral (14)** (`reason_for_referral`, text, required: false): Enter a brief explanation for the referral, including the patient's condition or treatment needs.

Note: The fields with `required: true` are mandatory and must be completed to submit the form.
