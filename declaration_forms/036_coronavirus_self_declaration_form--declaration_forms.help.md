<thinking>
This form is designed to collect information about an individual's health status, specifically regarding coronavirus symptoms and travel history. It's essential to understand that this form is not a medical diagnosis tool, and the information collected is for internal use only. Please ensure that you're completing this form truthfully, as it may be used for contact tracing or other public health purposes. Before starting, check if you have already filled this form. If you have, please do not resubmit. This form has been created based on general guidelines and may not be applicable to specific medical or travel situations.
</thinking>

# coronavirus_self_declaration_form - Help Guide
## Purpose
The purpose of this form is to collect information about your health status regarding coronavirus symptoms and recent travel history. This form is for your health and safety, and the information you provide will be used for contact tracing and other public health purposes.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the options that apply to your symptoms and recent travel history.
2. Enter any additional symptoms you are experiencing in the text field.
3. Indicate your contact tracing status and HIPAA compliance.
4. Review your responses carefully before submitting the form.

## Field-by-Field Explanation

* **Do you have a fever or a cough?** (`symptom_question`, `select_one`, required):
	+ Select one of the options: Fever, Cough, or None.
	+ Please choose the option that best describes your current condition.
* **Recent travel history** (`recent_travel`, `select_multiple`, required):
	+ Select all the options that apply to your recent travel history:
		- Within last 14 days
		- Less than 14 days ago
		- No recent travel
* **Symptoms** (`symptoms`, `text`, required):
	+ Enter any additional symptoms you are experiencing in the text field.
	+ Please provide as much detail as possible.
* **Contact tracing** (`contact_tracing`, `select_one`, required):
	+ Select 'True' if you are comfortable with contact tracing.
	+ Select 'False' if you are not.
* **HIPAA compliance** (`hipaa_consent`, `select_one`, required):
	+ Select 'True' if you are aware of and comply with HIPAA regulations.
	+ Select 'False' if you are not.
