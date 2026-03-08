<thinking>
We will create a user-facing help guide that explains the purpose and usage of the "Ear Infection Risk Assessment Form" in a clear and concise manner. The form is designed to help users assess the risk of an ear infection in a patient, with options to input symptoms, follow-up actions, and risk levels.

The form is not intended to be a comprehensive medical evaluation, but rather a simple tool to help identify potential risks and provide a starting point for further evaluation.

We will break down each section of the form into clear and concise language, explaining each field's purpose and any relevant instructions.

</thinking>

# Ear Infection Risk Assessment Form - Help Guide
## Purpose
The Ear Infection Risk Assessment Form is a simple tool used to evaluate the risk of an ear infection in a patient. This form helps healthcare professionals identify potential symptoms and risk factors associated with ear infections, and provides a starting point for further evaluation and assessment.

## How To Complete This Form
To complete this form, follow these steps:

1. Answer the questions on each page, and enter your responses in the text fields.
2. Use the select multiple and select one options for symptom selection and follow-up actions.
3. If any symptoms or follow-up actions are present, select "Yes" from the select multiple or select one options.
4. If no symptoms or follow-up actions are present, select "No" from the select multiple or select one options.
5. Enter any additional notes or comments about the patient's condition in the "Notes" field.

## Field-by-Field Explanation

* **Risk Assessment** (`risk_assessment`, text, required: false): Enter a brief description of the patient's ear infection risk.
* **Symptoms** (`symptoms`, select_multiple, required: false): Select all symptoms that are present, such as:
	+ Fever or chills
	+ Ear pain or discomfort
	+ Itching or tingling sensation in the ear
	+ Discharge or fluid in the ear
	+ Other (please specify in notes)
* **Follow-up Actions** (`follow_ups`, select_one, required: false): Select any follow-up actions that are required, such as:
	+ Schedule a follow-up appointment
	+ Prescribe antibiotics
	+ Refer to an ear, nose, and throat specialist
* **Risk Level** (`risk_level`, select_one, required: false): Select the risk level, either:
	+ High
	+ Low
* **Notes** (`notes`, note, required: false): Enter any additional comments or notes about the patient's condition, such as relevant medical history or test results.

## Tips

* Be thorough in your assessment to accurately identify potential symptoms and risk factors.
* If unsure about any symptoms or risk factors, consult with a healthcare professional.
* Use the "Notes" field to document any relevant medical history or test results to aid in further evaluation.
* Review the patient's condition regularly to monitor for any changes or developments.
