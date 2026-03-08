# medicare_consent_release_form - Help Guide
## Purpose
The Medicare Consent and Release Form is designed to document the transfer of a patient's medical records between healthcare providers. This form ensures that the patient's consent is obtained and documented for the transfer of their records.

## How To Complete This Form
To complete this form, please follow these steps:

1.  Enter the patient's information, including their name, date of birth, and other relevant details.
2.  Enter the practitioner's information, including their name and credentials.
3.  Indicate whether the patient consents to the release of their medical records.
4.  Choose the date and time of the transfer.
5.  Provide a reason for the transfer, if applicable.
6.  Sign and date the form as the patient and the practitioner.

## Field-by-Field Explanation

* **Patient Information** (`patient_information`, `text`, optional): Enter the patient's name, date of birth, and other relevant details.
* **Practitioner Information** (`practitioner_info`, `text`, optional): Enter the practitioner's name and credentials.
* **Consent Details** (`consent_details`, `select_multiple`, optional): Select whether the patient consents to the release of their medical records. Options are 'Yes' and 'No'.
* **Date of Transfer** (`date_of_transfer`, `date`, optional): Enter the date of the transfer.
* **Date of Transfer 2** (`date_of_transfer_2`, `date`, optional): Enter the date of the transfer (this field is a duplicate of the previous field, please disregard).
* **Time of Transfer** (`time_of_transfer`, `time`, optional): Enter the time of the transfer.
* **Reason for Transfer** (`reason_for_transfer`, `text`, optional): Enter a reason for the transfer, if applicable.
* **Consent to Release** (`consent_to_release`, `select_one`, optional): Select the type of practitioner who will be releasing the patient's medical records. Options are Physician, Nurse Practitioner, Physician Assistant, and Nurse.
* **Patient Signature** (`patient_signature`, `text`, optional): Sign and date the form as the patient.
* **Practitioner Signature** (`practitioner_signature`, `text`, optional): Sign and date the form as the practitioner.
* **Date** (`date`, `date`, optional): Enter the date of signing (this field is a duplicate of the `date` field in the `Patient Information` section, please disregard).
