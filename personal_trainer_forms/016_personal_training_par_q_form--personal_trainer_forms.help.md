<thinking>
We're creating a user-facing help guide for a form called "personal_training_par_q_form". This form is used to collect personal and health-related information from users, which will be used to create a training plan tailored to their needs. To ensure that this guide is clear and concise, we'll break it down into sections that cover the form's purpose, how to complete it, and a field-by-field explanation of each section. We'll also include any relevant tips or additional information that users should be aware of while filling out the form.
</thinking>

# personal_training_par_q_form - Help Guide
## Purpose
The personal_training_par_q_form is a form designed to collect your medical history, contact information, and other relevant details to create a customized training plan tailored to your needs and goals. This form will help our team get a better understanding of your medical conditions, medical history, and contact information to provide you with the best possible guidance and support.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Review each section of the form carefully and answer all questions thoroughly.
2. If you have any medical conditions or medications that are not listed, please include them in the "medications_other" and "medical_conditions_other" fields.
3. If you have any allergies, please include them in the "allergies" field.
4. If you have any family medical history, please include it in the "family_history" field.
5. For "height" and "weight" fields, please select the correct measurement from the dropdown list.
6. For "contact_info" field, please select all relevant contact information (phone, email, or both).
7. For "emergency_contact" fields, please provide the name, phone, and email of your emergency contact.
8. For "contact_info", "emergency_contact", "emergency_contact_phone", and "emergency_contact_email" fields, please fill in the corresponding information.
9. Finally, please review your answers carefully before submitting the form.

## Field-by-Field Explanation

- **medical_history** (`medical_history`, `note`, required: false): This is a text field where you can provide any relevant medical history or information that is not listed in the other sections.

- **height** (`height`, `text`, required: false): Please select your height from the dropdown list.

- **weight** (`weight`, `number`, required: false): Please select your weight from the dropdown list.

- **height_measurement** (`height_measurement`, `select_one`, required: true): Select your height measurement from the dropdown list. This field is required to ensure accurate height information.

- **weight_measurement** (`weight_measurement`, `select_one`, required: true): Select your weight measurement from the dropdown list. This field is required to ensure accurate weight information.

- **blood_pressure** (`blood_pressure`, `number`, required: false): If you have any blood pressure information, please provide it in this field.

- **medications** (`medications`, `text`, required: false): List any medications you are currently taking.

- **allergies** (`allergies`, `text`, required: false): List any allergies you have.

- **medical_conditions** (`medical_conditions`, `text`, required: false): List any medical conditions you have.

- **surgeries** (`surgeries`, `text`, required: false): List any surgeries you have undergone.

- **medications_allergens** (`medications_allergens`, `text`, required: false): List any medications that you are allergic to.

- **medical_history_other** (`medical_history_other`, `text`, required: false): Provide any other relevant medical history information not listed in the other sections.

- **family_history** (`family_history`, `text`, required: false): Provide any relevant family medical history information.

- **height_other** (`height_other`, `text`, required: false): Provide any other relevant height information not listed in the other sections.

- **weight_other** (`weight_other`, `text`, required: false): Provide any other relevant weight information not listed in the other sections.

- **blood_pressure_other** (`blood_pressure_other`, `text`, required: false): Provide any other relevant blood pressure information not listed in the other sections.

- **medical_conditions_other** (`medical_conditions_other`, `text`, required: false): Provide any other relevant medical conditions not listed in the other sections.

- **surgeries_other** (`surgeries_other`, `text`, required: false): Provide any other relevant surgery information not listed in the other sections.

- **medications_other** (`medications_other`, `text`, required: false): Provide any other relevant medications not listed in the other sections.

- **contact_info** (`contact_info`, `select_multiple`, required: true): Select all relevant contact information (phone, email, or both).

- **emergency_contact** (`emergency_contact`, `text`, required: false): Provide the name of your emergency contact.

- **emergency_contact_phone** (`emergency_contact_phone`, `text`, required: false): Provide the phone number of your emergency contact.

- **emergency_contact_email** (`emergency_contact_email`, `text`, required: false): Provide the email of your emergency contact.

- **emergency_contact_relationship** (`emergency_contact_relationship`, `text`, required: false): Provide any relevant relationship information with your emergency contact.

- **emergency_contact_other** (`emergency_contact_other`, `text`, required: false): Provide any other relevant emergency contact information not listed in the other sections.
