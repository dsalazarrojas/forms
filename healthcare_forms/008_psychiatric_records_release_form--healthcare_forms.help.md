# Psychiatric Records Release Form - Help Guide
## Purpose
The Psychiatric Records Release Form is used to obtain authorization from patients or their representatives for accessing their sensitive medical records. This form ensures that confidentiality is maintained while allowing authorized access to necessary information.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide your patient's name in the "Patient Name" field.
2. Identify the "Healthcare Professional" responsible for the patient's care.
3. Enter the date when the authorization was given in the "Authorization Date" field.
4. Select the "Authorized Party" from the available options (Healthcare Professional, Authorized Individual, or Authorized Organization).
5. Enter the reason for the request in the "Reason for Request" field (optional).
6. Choose the type of records you want to be released, selecting "Confidential", "Non-Confidential", or "All" options from "Release Type".
7. Select the type of records you want to access, choosing "Mental Health Record", "Physical Health Record", or "Medical History" from "Record Type".
8. If necessary, enter the range of records you want to access.
9. Enter the date when the authorization expires in the "Authorization Expiration Date" field.
10. Identify the individual authorized to access the records in the "Authorized Person" field.
11. Sign your name as the authorized individual in the "Patient Signature" field.
12. Date and sign the form with the current date in the "Date Signed" field.

## Field-by-Field Explanation
- **Patient Name** (`patient_name`, text, required): Enter the patient's full name as it appears on their medical records.
- **Healthcare Professional** (`healthcare_professional`, text, optional): Identify the healthcare professional responsible for the patient's care.
- **Authorization Date** (`authorization_date`, date, optional): Enter the date when the authorization was given.
- **Authorized Party** (`authorized_party`, select_one, optional): Select from Healthcare Professional, Authorized Individual, or Authorized Organization.
- **Reason for Request** (`reason_for_request`, text, optional): Enter a brief reason for requesting access to the records.
- **Release Type** (`release_type`, select_one, optional): Choose Confidential, Non-Confidential, or All records.
- **Record Type** (`record_type`, select_one, optional): Select from Mental Health Record, Physical Health Record, or Medical History.
- **Record Range** (`record_range`, number, optional): If necessary, enter the range of records you want to access.
- **Authorization Expiration Date** (`authorization_expiration_date`, date, optional): Enter the date when the authorization expires.
- **Authorized Person** (`authorized_person`, text, optional): Identify the individual authorized to access the records.
- **Patient Signature** (`patient_signature`, text, optional): Sign your name as the patient.
- **Date Signed** (`date_signed`, date, optional): Date and sign the form with the current date.
