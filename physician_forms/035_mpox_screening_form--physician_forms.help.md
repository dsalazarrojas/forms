<thinking>
This form is designed to screen and monitor potential cases of mpox, also known as the monkeypox virus. The Mpox Screening Form will help collect information about the individual's exposure and symptoms to aid in the assessment and response efforts. This form is not intended for medical diagnosis or treatment, but rather as a tool for healthcare professionals to gather data and inform their decision-making process.
</thinking>

# Mpox Screening Form - Help Guide
## Purpose
The Mpox Screening Form is a tool designed to collect data on potential cases of mpox to support public health initiatives and inform healthcare responses.

## How To Complete This Form
To complete the Mpox Screening Form, follow these steps:

1. Identify the symptoms you are experiencing. Please provide a description of your symptoms in the text field provided.
2. Assess your risk factors by selecting either "Yes" or "No" in the risk factors section.
3. Provide a medical response to your current health status.
4. If you are experiencing any symptoms, please provide a brief explanation of how you plan to prevent transmission.
5. Indicate whether you follow health protocols or not.
6. If you have had any recent exposure, please enter the date and time of the last exposure.
7. If you first noticed any symptoms, please enter the date and the time when you first noticed them.
8. Please provide your contact information for follow-up purposes.
9. Indicate if you have consulted with medical professionals for guidance.

## Field-by-Field Explanation

* **Identify Symptoms**:
  (1) (`identify_symptoms`, `text`, required: false): Please provide a brief description of your symptoms in this field.
* **Assess Risk Factors**:
  (2) (`assess_risk_factors`, `select_one`, required: false): Select "Yes" if you have any risk factors that may increase your chance of getting mpox, or "No" if you do not.
* **Medical Response**:
  (3) (`medical_response`, `text`, required: true): Please provide a brief description of your current medical response, such as whether you are experiencing any symptoms or are seeking medical attention.
* **Prevent Transmission**:
  (4) (`prevent_transmission`, `text`, required: false): Please explain how you plan to prevent transmission of the virus if you are experiencing symptoms.
* **Health Protocols**:
  (5) (`health_protocols`, `select_multiple`, required: false): If you are following any health protocols, please select the relevant options.
* **Date Last Exposure**:
  (6) (`date_last_exposure`, `date`, required: true): If you have had any recent exposure, please enter the date of the last exposure.
* **Time Last Exposure**:
  (7) (`time_last_exposure`, `time`, required: true): If you have had any recent exposure, please enter the time of the last exposure.
* **Date First Symptom**:
  (8) (`date_first_symptom`, `date`, required: true): If you first noticed any symptoms, please enter the date and time of the first symptom.
* **Contact Info**:
  (9) (`contact_info`, `text`, required: true): Please provide your contact information for follow-up purposes.
* **Medical Professionals**:
  (10) (`medical_professionals`, `select_multiple`, required: false): If you have consulted with medical professionals, please select "Yes".
