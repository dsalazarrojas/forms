# emergency_medicine_case_documentation_consent_form - Help Guide

## Purpose
This form is designed to document and manage emergency medical cases, obtain patient consent for treatments or procedures, and ensure transparency in medical care delivery.

## How To Complete This Form
To complete this form, follow these steps:

1. **Enter Patient Details**: Fill in the patient's personal information, such as their name, in the `patient_details` field.
2. **Enter Patient Contact Information**: Provide the patient's contact information, including their address, phone number, or email, in the `patient_contact` field.
3. **Identify Authorized User**: Specify the authorized person or entity that will be handling the patient's care in the `authorized_user` field.
4. **Enter Authorized User Details**: Provide additional information about the authorized user, such as their name and title, in the `authorized_user_details` field.
5. **List Authorized User Contact**: Enter the contact information for the authorized user in the `authorized_user_contact` field.
6. **Select Consent Type**: Choose the type of consent that is required for the emergency medical case, from the options provided in the `consent` field, such as Emergency Department, Clinic, Clinical, Educational, or Quality Improvement.
7. **Date of Consent**: Enter the date when the consent was obtained in the `consent_date` field.
8. **Time of Consent**: Enter the time when the consent was obtained in the `consent_time` field.
9. **Authorized User Signature**: If required, provide the authorized user's signature in the `authorized_user_signature` field.
10. **Patient Signature**: If required, provide the patient's signature in the `patient_signature` field.

## Field-by-Field Explanation
* **patient_details** (`patient_details`, Text, Optional)
  * This field is meant for entering the patient's personal information.
* **patient_contact** (`patient_contact`, Text, Optional)
  * This field is for providing the patient's contact information.
* **authorized_user** (`authorized_user`, Text, Optional)
  * This field is for specifying the authorized person or entity handling the patient's care.
* **authorized_user_details** (`authorized_user_details`, Text, Optional)
  * This field is for providing additional information about the authorized user.
* **authorized_user_contact** (`authorized_user_contact`, Text, Optional)
  * This field is for entering the authorized user's contact information.
* **consent** (`consent`, Select Multiple, Required)
  * This field requires selecting the type of consent for the emergency medical case.
* **consent_date** (`consent_date`, Date, Optional)
  * This field is meant for entering the date when consent was obtained.
* **consent_time** (`consent_time`, Time, Optional)
  * This field is for entering the time when consent was obtained.
* **authorized_user_signature** (`authorized_user_signature`, Note, Optional)
  * This field is for authorized user's signature, if required.
* **patient_signature** (`patient_signature`, Note, Optional)
  * This field is for patient's signature, if required.
