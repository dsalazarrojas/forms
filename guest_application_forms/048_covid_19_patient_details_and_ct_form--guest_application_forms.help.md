# COVID 19 Patient Details And CT Form - Help Guide
## Purpose
This form is designed for healthcare professionals to collect critical information about patients suspected of having COVID-19. It includes patient demographics, clinical information, and CT scan results to aid in diagnosis and treatment.

## How To Complete This Form

1. Start by filling out the patient demographics section, which includes:
	* **Patient Full Name**: Enter the patient's full name.
	* **Medical Record Number**: Enter the patient's medical record number, if available.
	* **Date of Birth**: Enter the patient's date of birth.
	* **Age**: Enter the patient's age.
	* **Gender**: Select the patient's gender (Male, Female, or Other).
	* **Phone Number**: Enter the patient's phone number.
	* **Email Address**: Enter the patient's email address (optional).

2. Move on to the clinical information section, which includes:
	* **Hospital Admission Date**: Enter the date the patient was admitted to the hospital.
	* **Symptoms Onset**: Enter the date the patient's symptoms first appeared.
	* **Presenting Symptoms**: Select all the symptoms the patient is experiencing (Fever, Cough, Dyspnea, Fatigue, Myalgia, Sore Throat, or Other).
	* **Comorbidities**: Select all the comorbidities the patient has (Diabetes, Hypertension, Heart Disease, Asthma, COPD, Immunosuppression, Cancer, or Other).
	* **Oxygen Requirement**: Select the patient's oxygen requirement (Room Air, Supplemental Oxygen, High Flow, or Mechanical Ventilation).
	* **Current Oxygen Saturation**: Enter the patient's current oxygen saturation level.
	* **Additional Clinical Notes**: Enter any additional clinical notes or observations.

3. The CT scan results section includes:
	* **CT Scan Performed**: Select if the CT scan was performed.
	* **CT Scan Date**: Enter the date the CT scan was performed.
	* **Type of CT Scan**: Select the type of CT scan performed (Chest High Resolution, Abdomen, Head, Pulmonary Angiography, or Other).
	* **CT Findings**: Select all the findings from the CT scan (Ground Glass Opacities, Consolidation, Pneumothorax, Pulmonary Embolism, Normal, or Other).
	* **CT Severity Assessment**: Select the CT scan's severity assessment (Minimal, Mild, Moderate, Severe, or Critical).

4. Finally, the laboratory results section includes:
	* **COVID-19 Test Result**: Select the result of the COVID-19 test (Positive, Negative, or Pending).
	* **COVID-19 Test Date**: Enter the date the COVID-19 test was performed.

## Field-by-Field Explanation

* **Patient Full Name**: (`patient_name`, `text`, required)
	+ Enter the patient's full name.
* **Medical Record Number**: (`medical_record_number`, `text`, required)
	+ Enter the patient's medical record number, if available.
* **Date of Birth**: (`date_of_birth`, `date`, required)
	+ Enter the patient's date of birth.
* **Age**: (`age`, `number`, required)
	+ Enter the patient's age.
* **Gender**: (`gender`, `select_one`, required)
	+ Select the patient's gender (Male, Female, or Other).
* **Phone Number**: (`contact_phone`, `text`, required)
	+ Enter the patient's phone number.
* **Email Address**: (`contact_email`, `email`, optional)
	+ Enter the patient's email address (if available).
* **Hospital Admission Date**: (`admission_date`, `date`, required)
	+ Enter the date the patient was admitted to the hospital.
* **Symptoms Onset**: (`symptoms_onset`, `date`, required)
	+ Enter the date the patient's symptoms first appeared.
* **Presenting Symptoms**: (`presenting_symptoms`, `select_multiple`, required)
	+ Select all the symptoms the patient is experiencing (Fever, Cough, Dyspnea, Fatigue, Myalgia, Sore Throat, or Other).
* **Comorbidities**: (`comorbidities`, `select_multiple`, optional)
	+ Select all the comorbidities the patient has (Diabetes, Hypertension, Heart Disease, Asthma, COPD, Immunosuppression, Cancer, or Other).
* **Oxygen Requirement**: (`oxygen_requirement`, `select_one`, required)
	+ Select the patient's oxygen requirement (Room Air, Supplemental Oxygen, High Flow, or Mechanical Ventilation).
* **Current Oxygen Saturation**: (`oxygen_saturation`, `number`, required)
	+ Enter the patient's current oxygen saturation level.
* **Additional Clinical Notes**: (`additional_notes`, `text`, optional)
	+ Enter any additional clinical notes or observations.
* **CT Scan Performed**: (`ct_performed`, `select_one`, required)
	+ Select if the CT scan was performed.
* **CT Scan Date**: (`ct_date`, `date`, optional)
	+ Enter the date the CT scan was performed.
* **Type of CT Scan**: (`ct_type`, `select_one`, optional)
	+ Select the type of CT scan performed (Chest High Resolution, Abdomen, Head, Pulmonary Angiography, or Other).
* **CT Findings**: (`ct_findings`, `select_multiple`, optional)
	+ Select all the findings from the CT scan (Ground Glass Opacities, Consolidation, Pneumothorax, Pulmonary Embolism, Normal, or Other).
* **CT Severity Assessment**: (`ct_severity`, `select_one`, optional)
	+ Select the CT scan's severity assessment (Minimal, Mild, Moderate, Severe, or Critical).
* **COVID-19 Test Result**: (`covid_test_result`, `select_one`, required)
	+ Select the result of the COVID-19 test (Positive, Negative, or Pending).
* **COVID-19 Test Date**: (`test_date`, `date`, required)
	+ Enter the date the COVID-19 test was performed.

## Tips

* Make sure to enter accurate and up-to-date information to ensure accurate diagnosis and treatment.
* If unsure about any field, refer to the patient's medical record or consult with a healthcare professional.
* Double-check the CT scan results and laboratory test results for any discrepancies or concerns.
