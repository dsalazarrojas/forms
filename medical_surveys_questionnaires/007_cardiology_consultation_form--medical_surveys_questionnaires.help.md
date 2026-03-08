# Cardiology Consultation Form - Help Guide
## Purpose
This form is designed to collect patient information for cardiology consultations. It is intended for patients who are seeking medical attention for their heart-related conditions. Please fill out this form carefully, as the information collected will be reviewed by a medical professional to determine the best course of action for your care.

## How To Complete This Form
1. Start by filling out the patient's personal details, including their full name and date of birth.
2. List the name of the referring physician, if applicable.
3. Rate your current chest pain level (1-10) and select your shortness of breath status.
4. Provide your medical and family history, including any history of high blood pressure and family history of heart disease.
5. List your current medications and any past surgeries or procedures.
6. Leave any additional notes for the physician, if necessary.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_full_name`, `text`, Required): Please enter the patient's full name as it appears on their identification.
* **Date of Birth** (`patient_date_of_birth`, `date`, Required): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Referring Physician** (`referring_physician_name`, `text`, Optional): If you were referred by a physician, please list their name here.
* **Reason for Consultation** (`consultation_reason_header`, `note`, Optional): This is a header for the next section, please do not fill out this field.
* **Chest Pain Severity** (`chest_pain_severity_rating`, `number`, Required): Rate your current pain level on a scale of 1-10, with 1 being the least severe and 10 being the most severe.
* **Shortness of Breath** (`shortness_of_breath_status`, `select_one`, Required): Select one of the options to indicate your current shortness of breath status.
	+ Never
	+ Only with exertion
	+ At rest
	+ During sleep
* **Medical History** (`medical_history_header`, `note`, Optional): This is a header for the next section, please do not fill out this field.
* **High Blood Pressure History** (`high_blood_pressure_history`, `select_one`, Required): Select one of the options to indicate your history of high blood pressure.
	+ True
	+ False
	+ Not Sure
* **Family History of Heart Disease** (`family_heart_disease_history`, `select_one`, Required): Select one of the options to indicate your family history of heart disease.
	+ True
	+ False
* **Smoking History** (`smoking_history_status`, `select_one`, Required): Select one of the options to indicate your current smoking status.
	+ Current Smoker
	+ Former Smoker
	+ Never Smoked
* **Current Medications** (`medications_list`, `text`, Optional): List all your current prescriptions and supplements.
* **Surgical History** (`surgical_history_list`, `text`, Optional): List any past surgeries or procedures.
* **Physical Examination Notes** (`physician_exam_notes`, `text`, Optional): For physician use only, please provide any additional information about your physical examination.
* **Preliminary Diagnosis** (`clinical_diagnosis_initial`, `text`, Optional): For physician use only, please provide any preliminary diagnosis or findings.

## Tips
- Please be honest and accurate when filling out this form.
- If you are unsure about any of the questions, please ask your physician or healthcare provider for guidance.
- If you have any additional information that you feel is relevant to your care, please include it in the notes section.
