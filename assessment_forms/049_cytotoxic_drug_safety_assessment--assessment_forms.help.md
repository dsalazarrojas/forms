# cytotoxic_drug_safety_assessment - Help Guide
## Purpose
The cytotoxic_drug_safety_assessment form is designed to assess the safety risks of drugs that can cause cytotoxicity. It collects information from assessors about potential incidents related to these drugs and determines the necessary safety measures to be taken if such incidents occur.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your details as the assessor in the "Assessor Details" field.
2. Indicate whether the drug is cytotoxic by selecting "Yes" or "No" in the "Cytotoxic Drug Type" field.
3. Select any safety measures that should be taken if the drug is cytotoxic in the "Safety Measures" field.
4. If an incident has occurred, enter the date of the incident in the "Date of Incident" field.
5. Provide any additional details about the incident in the "Incident Details" field (optional).
6. Click "Submit" to complete the form.

## Field-by-Field Explanation

* **Assessor Details** (`assessor_details`, text, required): Enter your name, job title, and contact information as the assessor who is completing this form.
* **Cytotoxic Drug Type** (`cytotoxic_drug_type`, select_one, required): Indicate whether the drug is cytotoxic by selecting "Yes" or "No."
* **Safety Measures** (`safety_measures`, select_multiple, required): Select any relevant safety measures that should be taken if the drug is cytotoxic.
* **Incident** (`incident`, text, optional): If an incident has occurred, provide a brief description of what happened.
* **Date of Incident** (`date_of_incident`, date, required): Enter the date when the incident occurred.
* **Incident Details** (`incident_details`, text, optional): If relevant, provide additional details about the incident.
* **Submit** (`submit`, time, required): Click "Submit" to complete the form.
