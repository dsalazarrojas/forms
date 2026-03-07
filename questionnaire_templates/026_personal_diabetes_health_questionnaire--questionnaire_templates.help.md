<thinking>...</thinking>

# Personal Diabetes Health Questionnaire - Help Guide
## Purpose
This form is designed to collect information about a patient's personal experience with diabetes, including their blood glucose levels, medication usage, medical conditions, and management strategies for hypoglycemia and hyperglycemia. The data collected will be used to help healthcare professionals understand the patient's current status and provide informed care.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer each question carefully and honestly. This will help ensure that the information gathered will accurately reflect your current situation.
2. For numerical values, use the format specified for each field.
3. For select fields, choose one or more options that best match your situation.
4. Enter any additional comments or notes in the relevant fields, if needed.
5. Review your answers carefully before submitting the form.

## Field-by-Field Explanation
### Diabetes History
* **Diabetes History** (`diabetes_history`, `text`, required/optional): Please describe your history of diabetes, including the date of diagnosis, type of diabetes, and any notable events or milestones.

* **Blood Glucose Levels** (`blood_glucose_levels`, `number`, required/optional): Enter your average blood glucose levels, measured in mg/dL. If you're unsure, use your most recent reading.

* **Medication Usage** (`medication_usage`, `select_one`, required/optional): Select one of the following options to indicate the type of diabetes medication you are currently using:
	+ Insulin
	+ Pills
	+ Injectable Medication
	+ Oral Medication
	+ Unknown

* **Medical Conditions** (`medical_conditions`, `text`, required/optional): List any other medical conditions you have that may be relevant to your diabetes care, such as heart disease, kidney disease, or liver disease.

* **Complications** (`complications`, `select_multiple`, required/optional): Select any complications you've experienced related to your diabetes, such as:
	+ Hypoglycemia
	+ Hyperglycemia
	+ Unknown

* **Hypoglycemia Management** (`hypoglycemia_management`, `text`, required/optional): Describe your strategies for managing hypoglycemia, such as carrying emergency snacks or using a glucometer.

* **Hyperglycemia Management** (`hyperglycemia_management`, `text`, required/optional): Describe your strategies for managing hyperglycemia, such as adjusting your medication or diet.

* **Insulin Adjustments** (`insulin_adjustments`, `time`, required/optional): Enter the time of your next insulin adjustment, if applicable.
