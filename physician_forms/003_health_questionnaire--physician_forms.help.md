# health_questionnaire - Help Guide

## Purpose
This form is designed to gather essential information from patients about their general health, medical history, and any ongoing medical conditions or treatments. It helps healthcare providers understand the patient's situation accurately, enabling them to provide appropriate care and treatment.

## How To Complete This Form
1. Begin by reviewing each page carefully to ensure you understand the questions and fields presented.
2. Answer each question accurately and honestly, providing as much detail as possible.
3. For fields with multiple options, select only the options that apply to your situation.
4. If you have any concerns or questions, don't hesitate to ask your healthcare provider for guidance.

## Field-by-Field Explanation

* **General Health** (`general_health`, text, required: false): This field is intended to collect general information about your overall health and wellbeing. Please provide a brief description of your current health status.
* **Medical History** (`medical_history`, text, required: false): This field is meant to record any significant medical events or conditions affecting your health. Describe your medical history in as much detail as possible.
* **Medication** (`medication`, select_multiple, required: false): Indicate if you are currently taking any medication. Select "Yes" if you are taking medication, "No" otherwise.
* **Allergies** (`allergies`, select_one, required: false): If you have any allergies, select the correct option from the list. Please note that this is not a comprehensive list, so if you have an allergy not listed here, be sure to mention it to your healthcare provider.
* **Medical Conditions** (`medical_conditions`, select_one, required: false): If you have any of the listed medical conditions, select the correct option. Again, if you have a condition not listed here, please inform your healthcare provider.
* **Vital Signs** (`vital_signs`, date, required: false): Record your current vital signs, such as temperature, blood pressure, and other relevant measurements.
* **Medical History Details** (`medical_history_details`, text, required: false): Provide more detailed information about your medical history, if needed.
* **Medical History Date** (`medical_history_date`, time, required: false): If applicable, record the date of the medical event or condition.
* **Patient Notes** (`patient_notes`, text, required: false): This field is intended for you to add any additional comments or questions you have regarding your health or treatment.
