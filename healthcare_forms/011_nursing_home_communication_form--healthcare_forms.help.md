# Nursing Home Communication Form - Help Guide
## Purpose
The Nursing Home Communication Form is used to gather essential information about a resident's health care needs, ensuring that healthcare providers can provide the best possible care and support for them.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the resident's information in the "Resident Information" field.
2. Describe the resident's plan of care in the "Plan Of Care" field.
3. Provide any additional information relevant to the resident's care in the "Additional Info" field.
4. Confirm if the healthcare provider has a relationship with the resident in the "Healthcare Provider" field.
5. Indicate if the healthcare provider has relevant contact information in the "Contact Info" field.
6. Select all applicable specializations of the healthcare provider in the "Specialization" field.
7. Confirm if the healthcare provider has additional information in the "Other Info" field.

## Field-by-Field Explanation
* **Resident Information (Resident Information)** (`resident_information`, text, required: false): This field is where you will enter basic information about the resident, such as their name, date of birth, or medical ID number.
* **Plan Of Care (resident_plan_of_care, text, required: false): Describe the specific care requirements and needs of the resident, including any medical conditions, treatments, or interventions required.
* **Additional Info (resident_plan_of_care_additional_info, text, required: false): If there is any additional information that is not included in the "Plan Of Care" field, provide it here.**
* **Healthcare Provider (healthcare_provider, text, required: false): Confirm if this form is being completed by a healthcare provider. This field is intended to help identify and track who provided care to the resident.**
* **Contact Info (healthcare_provider_contact_info, select_one, options: ['Yes', 'No'], required: false): Indicate if you, as the healthcare provider, have contact information that can be used in case of an emergency or follow-up care.**
* **Specialization (healthcare_provider_specialization, select_multiple, options: ['Yes', 'No'], required: false): Select all relevant specializations that apply to the healthcare provider, such as primary care, specialist, or other.**
* **Other Info (configurable_list, text, required: false): If there is any other information that is not covered in the above fields, enter it here.**
* **Item 1 (configurable_list_item, note, required: false): This is a note-taking field for you to record any other relevant information related to the resident's care.**
 
## Tips
- Double-check all fields for accuracy to ensure the best possible care for the resident.
- Use clear and concise language in all fields to avoid confusion.
- If a field is not applicable, leave it blank instead of typing "N/A" to maintain the form's structure and clarity. 
- Review and update the form as necessary to reflect changes in the resident's care needs.
