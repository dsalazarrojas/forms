# medico_legal_assessment_questionnaire - Help Guide
## Purpose
This form is designed for healthcare professionals to gather and document medico-legal details about patient assessments.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in all required fields to ensure the information is saved and recorded correctly.
* Enter the medico legal details in the first text field.
* Capture the consent status in the select_one field, indicating whether consent has been obtained, is not obtained, or is unknown.
* Provide the assessment date in the date field.
* Specify the assessment time in the time field.
* Enter the patient's name in the text field.
* Enter the patient's phone number in the text field.
* Enter the clinic name in the text field.
* Enter the assessor's name in the text field.
* Provide the assessment reason in the text field.
* Select the assessment outcome from the available options.
* Enter any comments regarding the assessment outcome in the text field.

## Field-by-Field Explanation

### Medico legal details
* **Medico legal details** (`medico_legal_details`, `text`, required/optional): Enter the medico-legal details about the assessment.

### Consent capture
* **Consent capture** (`consent_capture`, `text`, required/optional): Record the consent status, whether it's obtained, not obtained, or unknown.

### Assessment date
* **Assessment date** (`assessment_date`, `date`, required/optional): Enter the date of the assessment.

### Assessment time
* **Assessment time** (`assessment_time`, `time`, required/optional): Enter the time of the assessment.

### Patient name
* **Patient name** (`patient_name`, `text`, required/optional): Enter the patient's name.

### Patient phone
* **Patient phone** (`patient_phone`, `text`, required/optional): Enter the patient's phone number.

### Clinic name
* **Clinic name** (`clinic_name`, `text`, required/optional): Enter the clinic name.

### Assessor name
* **Assessor name** (`assessor_name`, `text`, required/optional): Enter the assessor's name.

### Assessment reason
* **Assessment reason** (`assessment_reason`, `text`, required/optional): Provide the reason for the assessment.

### Assessment status
* **Consent status** (`consent_status`, `select_one`, required/optional): Select the consent status, which can be not obtained, obtained, or unknown.

### Assessment outcome
* **Assessment outcome** (`assessment_outcome`, `select_multiple`, required/optional): Select the assessment outcome, which can be negative, positive, neutral, or unknown.

### Assessment outcome comments
* **Assessment outcome comments** (`assessment_outcome_comments`, `text`, required/optional): Enter any comments regarding the assessment outcome.

## Tips
* Ensure that you fill in all required fields correctly to avoid errors.
* Be thorough when filling in the medico-legal details and assessment reason fields.
* If the consent status is unknown, please provide a reason for this in the consent status field.
* If you are unsure about any field, please contact your healthcare professional or refer to the relevant guidelines.
