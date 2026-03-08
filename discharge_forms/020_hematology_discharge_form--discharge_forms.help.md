This form is designed for collecting lab results and other medical information for a patient. It is intended for use by medical professionals, such as hematologists, cardiologists, or other specialized doctors. The form includes multiple lab results, a section for notes, a section for patient information (name, age, medical history, and discharge diagnosis), and a section for specifying the medical team involved in the patient's care.

# Hematology Discharge Form - Help Guide
## Purpose
This form is used to record a patient's lab results and other important medical information upon discharge from a medical facility.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's name, age, and medical history (blood disorder, allergy, asthma, coughing, or other) as relevant.
2. Enter the lab results for each of the 24 lab result fields (1-24).
3. Add any additional medical notes or observations in the "Medical Notes" field.
4. If applicable, specify the medical team involved in the patient's care.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, optional): Enter the patient's name.
* **Patient Age** (`patient_age`, number, optional): Enter the patient's age.
* **Medical History** (`medical_history`, select_one, required): Select one of the following options:
	+ Blood Disorder
	+ Allergy
	+ Asthma
	+ Coughing
	+ Other
* **Discharge Diagnosis** (`discharge_diagnosis`, text, optional): Enter the discharge diagnosis.
* **Medical Team** (`medical_team`, select_multiple, optional): Select up to 4 members from the following options:
	+ Cardiologist
	+ Hematologist
	+ Other
	+ Oncologist
* **Lab Results 1-24** (`lab_result1`-`lab_result24`, number, optional): Enter the lab results for each of the 24 fields.
* **Medical Notes** (`medical_notes`, text, optional): Enter any additional medical notes or observations.
