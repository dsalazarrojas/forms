# Personal Independence Assessment - Help Guide
## Purpose
The Personal Independence Assessment form is used to evaluate a patient's level of independence in various areas of their life, such as daily activities, social interactions, and physical and cognitive functions. This assessment is typically used in a healthcare setting to gain a better understanding of a patient's abilities and limitations.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's name in the **Patient Name** field.
2. Describe the patient's medical condition in the **Medical Condition** field.
3. Rate the patient's physical function using the number scale provided in the **Physical Function** field.
4. Rate the patient's cognitive function using the number scale provided in the **Cognitive Function** field.
5. Choose how often the patient performs daily activities independently, partially independently, or is unable to perform them at all in the **Daily Activities** field.
6. Indicate how frequently the patient interacts with others in the **Social Interaction** field.
7. Enter the date the assessment was conducted in the **Assessment Date** field.
8. Enter the time the assessment was conducted in the **Assessment Time** field.
9. Add any additional notes about the assessment in the **Note** field.
10. Enter the patient's email address in the **Email** field (if applicable).
11. Enter the patient's phone number in the **Phone** field (if applicable).

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required: false): Enter the patient's name as it appears on their medical record.
* **Medical Condition** (`medical_condition`, text, required: false): Describe the patient's current medical condition.
* **Physical Function** (`physical_function`, number, required: false): Rate the patient's physical function using the number scale provided.
* **Cognitive Function** (`cognitive_function`, number, required: false): Rate the patient's cognitive function using the number scale provided.
* **Daily Activities** (`daily_activities`, select_one, required: false): Choose how often the patient performs daily activities independently, partially independently, or is unable to perform them at all.
* **Social Interaction** (`social_interaction`, select_multiple, required: false): Indicate how frequently the patient interacts with others.
* **Assessment Date** (`assessment_date`, date, required: false): Enter the date the assessment was conducted.
* **Assessment Time** (`assessment_time`, time, required: false): Enter the time the assessment was conducted.
* **Note** (`note`, note, required: false): Add any additional notes about the assessment.
* **Email** (`email`, email, required: false): Enter the patient's email address (if applicable).
* **Phone** (`phone`, text, required: false): Enter the patient's phone number (if applicable).
