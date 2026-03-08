# Dementia Referral Form - Help Guide
## Purpose
The Dementia Referral Form is a tool used to gather essential information about patients suspected to have dementia or other cognitive impairments. This form helps healthcare providers identify the level of cognitive impact, medical history, medication usage, medical conditions, cognitive function, mental status, and other relevant factors to aid in the referral process.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill out the form for each patient as needed.
2.  Enter the patient's information in the "Patient Information" section.
3.  Describe the patient's chief complaint in the "Chief Complaint" section.
4.  Select the level of cognitive impact on the "Cognitive Impact" section.
5.  Check the patient's medical history, including hypertension, diabetes, and heart disease, in the "Medical History" section.
6.  Indicate whether the patient is using medications related to their medical conditions in the "Medication Usage" section.
7.  Select any relevant medical conditions, such as hypertension, diabetes, or heart disease, in the "Medical Conditions" section.
8.  Rate the patient's cognitive function using the scale provided in the "Cognitive Function" section.
9.  Evaluate the patient's mental status, including their level of alertness and whether they are hallucinating, in the "Mental Status" section.
10. Select the type of information about the patient's family that is relevant to their care in the "Family Information" section.
11. Enter any additional notes from the patient's doctor in the "Doctor's Notes" section.

## Field-by-Field Explanation

* **Patient Information (1)** (`patient_info`, text, required: false): Enter the patient's first and last name, age, and date of birth.
* **Chief Complaint (2)** (`chief_complaint`, text, required: false): Describe the patient's main complaint or reason for referral.
* **Cognitive Impact (3)** (`cognitive_impact`, select_one, required: false): Select the level of cognitive impact on the patient:
	+ Mild: The patient exhibits some cognitive decline but still able to perform daily activities.
	+ Moderate: The patient exhibits noticeable cognitive decline but still able to perform daily activities with difficulty.
	+ Severe: The patient is significantly impaired and unable to perform daily activities.
* **Medical History (4)** (`medical_history`, select_multiple, required: false): Check the patient's medical history:
	+ High: The patient has a history of high blood pressure.
	+ Normal: The patient has a normal medical history.
	+ Unknown: The patient's medical history is unknown.
* **Medication Usage (5)** (`medication_usage`, select_multiple, required: false): Indicate whether the patient is using medications related to their medical conditions:
	+ True: The patient is using medications related to their medical conditions.
	+ False: The patient is not using medications related to their medical conditions.
	+ Unknown: The patient's medication usage is unknown.
* **Medical Conditions (6)** (`medical_conditions`, select_multiple, required: false): Select any relevant medical conditions:
	+ Hypertension: The patient has high blood pressure.
	+ Diabetes: The patient has diabetes.
	+ Heart Disease: The patient has heart disease.
	+ Other: Select "Other" if the patient has other medical conditions.
* **Cognitive Function (7)** (`cognitive_function`, number, required: false): Rate the patient's cognitive function on a scale from 1 to 100.
* **Mental Status (8)** (`mental_status`, select_one, required: false): Evaluate the patient's mental status:
	+ Alert: The patient is alert and aware of their surroundings.
	+ Confused: The patient is confused and disoriented.
	+ Hallucinating: The patient is hallucinating.
	+ Unknown: The patient's mental status is unknown.
* **Family Information (9)** (`family_info`, select_multiple, required: false): Select the type of information about the patient's family that is relevant to their care:
	+ Caregiver: The patient has a caregiver.
	+ Family Member: The patient has a family member who can provide support.
	+ Other: Select "Other" if the patient's family information is not listed.
* **Doctor's Notes (10)** (`doctor_notes`, select_multiple, required: false): Enter any additional notes from the patient's doctor:
	+ Referral: The doctor recommends referral for further evaluation.
	+ Evaluation: The doctor recommends evaluation for further diagnosis.
	+ Other: Select "Other" if the doctor has other notes.
