<thinking>
We need to ensure that this online training questionnaire is completed only once for each user, and not duplicated, by checking for duplicate user input in the database. We also need to ensure that users have a chance to provide accurate and comprehensive information about their medical history, current medical conditions, medications, allergies, and other relevant details. This form is a critical tool for healthcare professionals to gather necessary information from patients to better understand their health status and provide optimal care.</thinking>

# online_training_questionnaire - Help Guide
## Purpose
This form is used to gather information from users about their general information, physical activity, sleep habits, medical conditions, medications, allergies, and emergency contact information. This information is crucial for healthcare professionals to understand the user's health status and provide personalized care.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your general information, including your name and any other relevant details.
2. Answer questions about your physical activity level, including any exercises or sports you regularly engage in.
3. Share your sleep habits, including your average sleep duration and any sleep disorders you may have.
4. Select any medical conditions you currently have or have had in the past, such as high blood pressure or diabetes.
5. List any medications you are currently taking, including their purpose and dosage.
6. Identify any allergies you have, such as peanut or shellfish allergies.
7. Provide a brief medical notes section to share any relevant medical history or concerns.
8. If you have an emergency contact, select their name and relationship to you.
9. Finally, provide any additional medical history information in the medical history section.

## Field-by-Field Explanation

### General Information
* **General Information** (`1`, `text`, required: false): This is the first section of the form where you will provide your general information, including your name and any other relevant details.

### Physical Activity
* **Physical activity** (`2`, `number`, required: false): Answer a question about your physical activity level. Please enter a number to indicate your level of physical activity, with higher numbers indicating more physical activity.

### Sleep Habits
* **Sleep Habits** (`3`, `number`, required: false): Answer a question about your sleep habits, including your average sleep duration and any sleep disorders you may have.

### Medical Conditions
* **Medical Conditions** (`4`, `select_one`, required: false): Select any medical conditions you currently have or have had in the past, such as high blood pressure or diabetes.

### Medications
* **Medications** (`5`, `select_multiple`, required: false): List any medications you are currently taking, including their purpose and dosage.

### Allergies
* **Allergies** (`6`, `select_multiple`, required: false): Identify any allergies you have, such as peanut or shellfish allergies.

### Medical Notes
* **Medical Notes** (`7`, `note`, required: false): Provide a brief medical notes section to share any relevant medical history or concerns.

### Emergency Contact
* **Emergency Contact** (`8`, `select_one`, required: false): If you have an emergency contact, select their name and relationship to you.

### Emergency Contact Relationship
* **Emergency Contact Relationship** (`9`, `select_one`, required: false): If you selected an emergency contact, select their relationship to you.

### Medical History
* **Medical History** (`10`, `note`, required: false): Provide any additional medical history information in this section.

Please note that all fields are optional, but it's essential to provide as much information as possible for healthcare professionals to understand your health status accurately. If you have any questions or concerns, please don't hesitate to reach out to your healthcare provider.
