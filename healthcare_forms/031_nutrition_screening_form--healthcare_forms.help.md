To create a user-facing help guide for the "nutrition_screening_form" form, I will analyze the provided YAML fields and provide a clear and concise guide on how to complete the form and explain each field.

</thinking>

# nutrition_screening_form - Help Guide
## Purpose
The "nutrition_screening_form" is a tool used to gather information about an individual's medical history, nutrition risks, and other relevant details. This form is designed to collect data for healthcare providers to assess and address potential nutrition-related health risks.

## How To Complete This Form
To complete this form, follow these steps:

1. Read the form carefully and ensure you understand the purpose and the fields required for each section.
2. Fill out the form completely and accurately, paying attention to the required fields.
3. Answer each field based on your personal experience and knowledge.
4. Review your answers before submitting the form.

## Field-by-Field Explanation
### Introduction
* **Introduction** (`introduction`, `note`, not required): This is a brief overview of the purpose and use of the form. Please read it carefully before filling out the form.

### Demographics
* **Demographics** (`demographics`, `note`, not required): This section is not required, but it can be used to collect additional demographic information about the individual.

### Medical History
* **Medical History** (`medical_history`, `note`, not required): This section is not required, but it can be used to collect additional medical history information about the individual.

### Medical Problems
* **Medical Problems** (`medical_problems`, `select_one`, required): Select "Yes" or "No" to indicate if the individual has any medical problems.

### Allergies
* **Allergies** (`allergies`, `select_multiple`, not required): If the individual has any allergies, select all that apply.

### Medications
* **Medications** (`medications`, `text`, not required): List any medications the individual is currently taking.

### Lab Results
* **Lab Results** (`lab_results`, `select_multiple`, not required): If the individual has had any lab results, select all that apply.

### Nutrition Risks
* **Nutrition Risks** (`nutrition_risks`, `select_one`, required): Select "high risk", "low risk", or "no risk" to indicate the individual's nutrition risk level.

### Weight
* **Weight** (`weight`, `number`, required): Enter the individual's weight (in pounds or kilograms).

### Height
* **Height** (`height`, `number`, required): Enter the individual's height (in inches or centimeters).

### Date of Birth
* **Date of Birth** (`date_of_birth`, `date`, required): Enter the individual's date of birth.

### Date Screened
* **Date Screened** (`date_screened`, `date`, required): Enter the date the form was completed.

### Time Screened
* **Time Screened** (`time_screened`, `time`, required): Enter the time the form was completed.

### Screen Type
* **Screen Type** (`screen_type`, `select_one`, required): Select "in person", "phone", "online", or "other" to indicate how the form was completed.

### Healthcare Provider
* **Healthcare Provider** (`healthcare_provider`, `select_one`, required): Select "doctor", "nurse", or "other" to indicate the healthcare provider who completed the form.

### Contact Person
* **Contact Person** (`contact_person`, `text`, required): Enter the contact person's name.

### Contact Number
* **Contact Number** (`contact_number`, `text`, required): Enter the contact person's phone number.

### Next Contact Date
* **Next Contact Date** (`next_contact_date`, `date`, required): Enter the date of the next scheduled contact.

### Last Contact Date
* **Last Contact Date** (`last_contact_date`, `date`, not required): Enter the date of the last contact.

### Follow-up Date
* **Follow-up Date** (`follow_up_date`, `date`, required): Enter the date of the next scheduled follow-up.

### Nutrition Risk Factor
* **Nutrition Risk Factor** (`nutrition_risk_factor`, `text`, required): Describe any nutrition risks or factors.

### Nutrition Intervention
* **Nutrition Intervention** (`nutrition_intervention`, `text`, required): Describe any nutrition interventions or recommendations.

### Nutrition Referrals
* **Nutrition Referrals** (`nutrition_referrals`, `select_multiple`, not required): If the individual needs any nutrition referrals, select all that apply.

### Nutrition Goals
* **Nutrition Goals** (`nutrition_goals`, `select_multiple`, required): Select "Yes" or "No" to indicate if the individual has any nutrition goals.

### Nutrition Recommendations
* **Nutrition Recommendations** (`nutrition_recommendations`, `text`, required): Describe any nutrition recommendations or suggestions.

Note: This help guide is based on the provided YAML fields and explanations. Please review and adjust according to your specific form requirements and needs.
