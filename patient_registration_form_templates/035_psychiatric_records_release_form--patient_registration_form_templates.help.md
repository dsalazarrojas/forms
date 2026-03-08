# psychiatric_records_release_form - Help Guide
## Purpose
The Psychiatric Records Release Form is a document that allows patients to authorize the release of their psychiatric records to certain providers. This form is used to request access to a patient's mental health information and treatment history.

## How To Complete This Form
Before starting, make sure you have all the necessary information and approvals required to complete this form. Please note that the form has several required fields, marked as such.

## Field-by-Field Explanation
* **Patient Identifier** (`id: 1`, number, required: false): Enter a unique identifier for the patient (e.g., medical record number).
* **Authorization Date** (`id: 2`, date, required: true): Enter the date on which you are authorizing access to the patient's records.
* **Provider Name** (`id: 3`, text, required: true): Enter the name of the provider you are authorizing to access the patient's records.
* **Patient Name** (`id: 4`, text, required: true): Enter the full name of the patient (first name, last name).
* **Authorized Providers** (`id: 5`, select_multiple, required: true): Check the box if you are authorizing the provider to access the patient's records. Options: Yes, No.
* **Authorization Type** (`id: 6`, select_one, required: true): Select the type of access you are authorizing. Options: Mental Health Records, Full Records, Limited Records.
* **Authorization Expiration Date** (`id: 7`, date, required: true): Enter the date when the authorization will expire.
* **Patient Signature** (`id: 8`, select_one, required: true): Check the box to indicate if the patient's signature is present. Options: Signed, Unsigned.
* **Authorized Signature Date** (`id: 9`, date, required: true): Enter the date when the authorized signature was obtained.
* **Authorized Signature** (`id: 10`, select_one, required: true): Check the box to indicate how the authorized signature was obtained. Options: Date, Other.
* **Date of Birth** (`id: 11`, date, required: false): Enter the patient's date of birth (optional).
* **Patient Dob** (`id: 12`, date, required: false): Enter the patient's date of birth (optional).
* **Gender** (`id: 13`, text, required: false): Enter the patient's gender (optional).
* **Contact Number** (`id: 14`, text, required: false): Enter the patient's contact number (optional).
* **Email** (`id: 15`, email, required: false): Enter the patient's email (optional).
* **Address** (`id: 16`, text, required: false): Enter the patient's address (optional).
