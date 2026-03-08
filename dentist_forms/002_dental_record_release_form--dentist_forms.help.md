# dental_record_release_form - Help Guide
## Purpose
This form is designed to facilitate the transfer of a patient's dental record from one dentist to another.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the patient's details, including their name, address, and contact information.
2. Enter the date of birth and date of last visit to ensure that the record is up-to-date.
3. Choose the reason for the visit to specify the circumstances of the transfer.
4. Enter the new dentist's details, including their name, phone number, and email address.
5. Provide a medical history of the patient.
6. Sign and date the form to authenticate the transfer.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
* **Patient Contact Info** (`patient_contact_info`, text, required): Enter the patient's contact information for communication purposes.
* **Patient Address** (`patient_address`, text, required): Enter the patient's address for record transfer purposes.
* **New Dentist Name** (`new_dentist_name`, text, required): Enter the new dentist's name who will be handling the patient's records.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth to ensure accuracy.
* **Date of Last Visit** (`date_of_last_visit`, date, required): Enter the date of the patient's last visit to ensure the record is up-to-date.
* **Reason for Visit** (`reason_for_visit`, select_multiple, required): Choose the reason for the patient's visit to specify the circumstances of the transfer.
* **New Dentist Phone** (`new_dentist_phone`, text, required): Enter the new dentist's phone number for communication purposes.
* **New Dentist Email** (`new_dentist_email`, email, required): Enter the new dentist's email address for communication purposes.
* **Patient Medical History** (`patient_medical_history`, note, required): Provide a note of the patient's medical history to ensure continuity of care.
* **New Dentist Address** (`new_dentist_address`, text, required): Enter the new dentist's address to ensure accurate transfer of records.
* **New Dentist License Number** (`new_dentist_license_number`, text, required): Enter the new dentist's license number for verification purposes.
* **New Dentist Fax** (`new_dentist_fax`, text, required): Enter the new dentist's fax number for communication purposes.
* **Patient Signature** (`patient_signature`, text, required): Sign and date the form to authenticate the transfer.
* **Witness Signature** (`witness_signature`, text, optional): If applicable, have a witness sign the form to provide an additional layer of security.
* **Date Signed** (`date_signed`, date, required): Enter the date signed for authentication purposes.
* **Time Signed** (`time_signed`, time, required): Enter the time signed for authentication purposes.
* **Date Received** (`date_received`, date, required): Enter the date received for record transfer purposes.
* **Time Received** (`time_received`, time, required): Enter the time received for record transfer purposes.
* **Date Transferred** (`date_transferred`, date, required): Enter the date the records were transferred to the new dentist.
* **Date Last Seen** (`date_last_seen`, date, required): Enter the date the patient was last seen by the dentist.
* **Reason for Transfer** (`reason_for_transfer`, text, required): Provide a valid reason for the patient's transfer.
* **Dentist Signature** (`dentist_signature`, text, required): Sign and date the form to authenticate the transfer.
