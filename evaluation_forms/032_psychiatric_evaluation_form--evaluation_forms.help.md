# psychiatric_evaluation_form - Help Guide
## Purpose
The psychiatric evaluation form is a structured tool for clinical evaluation and treatment planning. It collects essential information about a patient's mental health state, diagnosis, treatment plan, and medication history. This form helps medical professionals, such as psychologists or psychiatrists, to comprehensively assess and care for patients.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form's sections and questions carefully.
2. Answer each question based on the patient's medical history and current mental state.
3. Fill in all required fields (indicated by the "required: true" label).
4. Use the "options" provided for select fields, such as diagnosis and medication history.
5. Double-check your answers for accuracy and completeness.

## Field-by-Field Explanation
### Introduction (Required: False)
* **introduction** (`text`, Required: False): Briefly introduce the patient and the purpose of the evaluation.

### Assessment (Required: True)
* **assessment** (`text`, Required: True): Describe the patient's current mental state, including symptoms, concerns, and relevant medical history.

### Diagnosis (Required: True)
* **diagnosis** (`select_multiple`, Required: True): Select all applicable diagnoses from the provided list.

### Treatment Plan (Required: False)
* **treatment plan** (`text`, Required: False): Describe the recommended treatment plan for the patient, including any medications or interventions.

### Medication (Required: True)
* **medication** (`select_one`, Required: True): Indicate whether the patient is currently taking any medication, and if so, provide more details.

### Patient Info (Required: True)
* **patient info** (`note`, Required: True): Record any relevant patient information, such as medical allergies or previous medical conditions.

### Evaluation Date (Required: False)
* **evaluation date** (`date`, Required: False): Record the date of the evaluation.

### Evaluation Time (Required: False)
* **evaluation time** (`time`, Required: False): Record the time of the evaluation.

## Tips
* Please answer all required fields accurately and thoroughly.
* Use clear and concise language when filling in the form.
* Review and revise your answers as needed to ensure accuracy and completeness.
* Save and store the form securely to maintain patient confidentiality.
