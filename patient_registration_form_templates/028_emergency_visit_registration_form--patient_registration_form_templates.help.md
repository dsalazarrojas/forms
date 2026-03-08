# Emergency Visit Registration Form - Help Guide

## Purpose
The Emergency Visit Registration Form is designed to gather information about a patient's emergency visit. This form is meant to be used during emergency visits to ensure that all necessary information is captured efficiently and accurately.

## How To Complete This Form

- Before starting the form, please ensure you have obtained the necessary consent from the patient or their authorized contact person.
- Complete all fields that are marked as required.
- For non-required fields, please provide as much information as possible to ensure that the patient receives the best possible care.
- If you are unsure about any field, please ask a medical professional or the patient's contact person for clarification.

## Field-by-Field Explanation

- **Patient Identifier** (`patient_identifier`, text, required/optional): This field is used to identify the patient. Please enter the patient's ID number or name as provided by the patient or their contact person.
- **Emergency Contact** (`emergency_contact`, select_one, required/optional): This field asks if there is an emergency contact available for the patient. Please select 'Yes' if an emergency contact is available, and 'No' otherwise.
- **Patient Condition** (`patient_condition`, text, required/optional): This field is used to describe the patient's current medical condition. Please provide a brief description of the patient's condition, e.g., 'chest pain' or 'injury'.
- **Emergency Visit Date** (`emergency_visit_date`, date, required/optional): This field is used to record the date of the emergency visit. Please enter the date in the format 'MM/DD/YYYY'.
- **Emergency Visit Time** (`emergency_visit_time`, time, required/optional): This field is used to record the time of the emergency visit. Please enter the time in the format 'HH:MM AM/PM'.
- **Contact Name** (`contact_name`, text, required/optional): This field asks for the name of the emergency contact person. Please enter the name of the contact person as provided by the patient or their representative.
- **Contact Phone** (`contact_phone`, text, required/optional): This field asks for the phone number of the emergency contact person. Please enter the phone number of the contact person as provided by the patient or their representative.
- **Contact Email** (`contact_email`, email, required/optional): This field asks for the email address of the emergency contact person. Please enter the email address of the contact person as provided by the patient or their representative.
- **Contact Relationship** (`contact_relationship`, select_one, required/optional): This field asks about the relationship between the patient and the contact person. Please select 'Yes' if the contact person is a family member, 'No' otherwise.
- **Patient Medical History** (`patient_medical_history`, text, required/optional): This field is used to record the patient's medical history. Please provide a brief description of the patient's medical history, e.g., 'previous surgeries' or 'allergies'.
- **Patient Medical Condition** (`patient_medical_condition`, text, required/optional): This field is used to describe the patient's current medical condition. Please provide a brief description of the patient's condition, e.g., 'heart condition' or 'injury'.
- **Allergies** (`allergies`, select_multiple, required/optional): This field asks about any allergies the patient may have. Please select 'Yes' if the patient has any allergies, 'No' otherwise.
- **Medical Facility** (`medical_facility`, text, required/optional): This field is used to record the medical facility where the patient is visiting. Please enter the name of the facility as provided by the patient or their representative.
