# Medical Alert Form - Help Guide
## Purpose
This form is for recording medical alerts for patients in various healthcare settings.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's name, date of birth, address, phone number, and other relevant details in the "patient_name", "patient_dob", "patient_address", and "patient_phone" fields.
2. If the patient has a treating physician, enter their name and medical license number in the "physician_name" and "physician_license" fields.
3. Describe the patient's medical condition, medical history, and any assistance they may need in the "medical_condition", "medical_history", and "medical_assistance_needed" fields.
4. Select the level of medical emergency from the options in the "medical_emergency" field.
5. Provide any relevant contact information for follow-up or emergency contact in the "medical_contact" field.

## Field-by-Field Explanation
- **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
- **Patient Date of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in the correct date format (MM/DD/YYYY).
- **Patient Address** (`patient_address`, text, required): Enter the patient's home or mailing address.
- **Patient Phone** (`patient_phone`, text, required): Enter the patient's phone number.
- **Physician Name** (`physician_name`, text, optional): Enter the name of the patient's treating physician (if applicable).
- **Physician License** (`physician_license`, text, optional): Enter the physician's medical license number (if applicable).
- **Medical Condition** (`medical_condition`, text, optional): Describe the patient's current medical condition or diagnosis.
- **Medical History** (`medical_history`, text, optional): Describe the patient's medical history or previous conditions.
- **Medical Assistance Needed** (`medical_assistance_needed`, text, optional): Specify any assistance the patient may need, such as medication or treatment.
- **Medical Emergency** (`medical_emergency`, select_one, required): Select the level of medical emergency:
  * Critical: The patient is at high risk of serious harm or death.
  * Urgent: The patient requires immediate attention but is not at high risk of serious harm or death.
  * Non-urgent: The patient's medical condition is stable, and no immediate attention is required.
- **Medical Contact** (`medical_contact`, text, optional): Provide any relevant contact information for follow-up or emergency contact.
