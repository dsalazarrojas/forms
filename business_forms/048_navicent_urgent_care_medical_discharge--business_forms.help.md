# navicent_urgent_care_medical_discharge - Help Guide
## Purpose
This form is designed to collect information for a medical discharge process in an urgent care setting.

## How To Complete This Form
Please fill out this form with the following information:
- Patient's personal details (page 1)
- Medical details (page 1)

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, optional): Enter the patient's name as it appears on their identification.
* **Date of Admission** (`date_of_admission`, date, optional): Enter the date the patient was admitted to the urgent care facility.
* **Date of Discharge** (`date_of_discharge`, date, optional): Enter the date the patient was discharged from the urgent care facility.
* **Medical Condition** (`medical_condition`, text, optional): Describe the patient's medical condition that led to their admission.
* **Vital Signs** (`vital_signs`, text, optional): Record the patient's vital signs (e.g., blood pressure, temperature, pulse) at the time of discharge.
* **Medications** (`medications`, text, optional): List any medications the patient is taking at the time of discharge.
* **Medical History** (`medical_history`, text, optional): Briefly summarize the patient's medical history relevant to their condition.
* **Discharge Status** (`discharge_status`, select_one, optional): Choose one of the following discharge status:
	+ Discharged
	+ Transfer
	+ Expired
* **Insurance** (`insurance`, text, optional): Provide the patient's insurance information (e.g., provider name, ID number).
