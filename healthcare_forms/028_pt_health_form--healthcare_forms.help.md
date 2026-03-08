# PT Health Form - Help Guide
## Purpose
This guide is designed to help users understand the purpose and functionality of the PT Health Form.

## How To Complete This Form
To complete this form, follow the instructions below:

1. Enter the patient's name in the "Patient Name" field.
2. Enter the patient's email address in the "Email" field (if applicable).
3. Enter the patient's phone number in the "Phone" field.
4. Describe the patient's medical history in the "Medical History" field.
5. Select any relevant medical conditions that apply to the patient from the "Medical Condition" field (multiple selections allowed).
6. Enter the medical procedure that the patient is undergoing in the "Medical Procedure" field.
7. Enter any relevant medical devices the patient is using in the "Medical Device" field (if applicable).
8. Enter the patient's height in the "Height" field.
9. Enter the patient's weight in the "Weight" field (if applicable).
10. List any allergies the patient has in the "Allergies" field (multiple selections allowed).
11. List any medications the patient is currently taking in the "Medications" field (multiple selections allowed).
12. Enter the contact information of the emergency contact person in the "Emergency Contact" field.
13. Enter the emergency contact's phone number in the "Emergency Phone" field.
14. Describe the relationship between the patient and the emergency contact in the "Emergency Relationship" field.
15. Enter the patient's date of birth in the "Date of Birth" field.
16. Enter the patient's address in the "Address" field.
17. Enter the emergency contact's address in the "Emergency Contact Address" field.
18. Select the patient's blood type from the "Blood Type" field (if applicable).
19. Enter any relevant medical records or notes in the "Medical Record" field.
20. Enter the name of the doctor attending to the patient in the "Doctor Name" field.
21. Enter any additional medical notes or information about the patient in the "Medical Notes" field (if applicable).
22. If necessary, enter any other medical conditions or procedures in the "Other Medical Condition" and "Other Medical Condition Description" fields.
23. If necessary, enter any other medical devices the patient is using in the "Other Medical Device" field.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Email** (`email`, email, optional): Enter the patient's email address (if applicable).
* **Phone** (`phone`, text, required): Enter the patient's phone number.
* **Medical History** (`medical_history`, text, required): Describe the patient's medical history.
* **Medical Condition** (`medical_condition`, select_multiple, required): Select any relevant medical conditions that apply to the patient.
* **Medical Procedure** (`medical_procedure`, text, required): Enter the medical procedure the patient is undergoing.
* **Medical Device** (`medical_device`, text, optional): Enter any relevant medical devices the patient is using (if applicable).
* **Height** (`height`, text, required): Enter the patient's height.
* **Weight** (`weight`, number, optional): Enter the patient's weight (if applicable).
* **Allergies** (`allergies`, select_multiple, required): List any allergies the patient has.
* **Medications** (`medications`, select_multiple, optional): List any medications the patient is currently taking (if applicable).
* **Emergency Contact** (`emergency_contact`, text, required): Enter the contact information of the emergency contact person.
* **Emergency Phone** (`emergency_phone`, text, required): Enter the emergency contact's phone number.
* **Emergency Relationship** (`emergency_relationship`, text, required): Describe the relationship between the patient and the emergency contact.
* **Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth.
* **Address** (`patient_address`, text, required): Enter the patient's address.
* **Emergency Contact Address** (`emergency_address`, text, required): Enter the emergency contact's address.
* **Blood Type** (`blood_type`, select_one, optional): Select the patient's blood type (if applicable).
* **Medical Record** (`medical_record`, text, required): Enter any relevant medical records or notes.
* **Doctor Name** (`doctor_name`, text, required): Enter the name of the doctor attending to the patient.
* **Medical Notes** (`medical_notes`, text, optional): Enter any additional medical notes or information about the patient (if applicable).
* **Other Medical Condition** (`medical_condition_other`, text, optional): If necessary, enter any other medical conditions the patient has.
* **Other Medical Condition Description** (`medical_condition_other_description`, text, optional): If necessary, describe the other medical condition.
* **Other Medical Procedure** (`medical_procedure_other`, text, optional): If necessary, enter any other medical procedures the patient is undergoing.
* **Other Medical Device** (`medical_device_other`, text, optional): If necessary, enter any other medical devices the patient is using.
