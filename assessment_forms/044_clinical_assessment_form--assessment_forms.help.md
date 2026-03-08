<thinking> 
This form is used to gather information from patients and healthcare providers during clinical assessments. The form is divided into several sections to collect relevant data in a structured way. To ensure that this form is completed accurately, please review the following steps and guidelines carefully. 

Please note that this form is designed to be completed by healthcare professionals, and the data collected will be used for medical decision-making.

</thinking>
 
# Clinical Assessment Form - Help Guide

## Purpose
This form is designed to assist healthcare professionals in gathering comprehensive clinical data from patients, which will help in assessing and treating their condition.

## How To Complete This Form
1. Start by completing the patient information section, which includes the patient's name, Medical Record Number (MRN), date of birth, and assessment date.
2. In the chief complaint section, describe the reason for the visit and the patient's chief complaint.
3. Provide the duration and severity of symptoms, as well as any triggering or exacerbating factors.
4. Describe the patient's associated symptoms and the progression of their illness.
5. In the vital signs section, enter the patient's current temperature, blood pressure, heart rate, and respiratory rate.
6. In the physical examination section, provide a general description of the patient's appearance and any notable examination findings.
7. In the assessment and impression section, provide a detailed description of your assessment and impression of the patient's condition.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): This field is used to record the patient's name accurately.
* **Medical Record Number** (`mrn`, `text`, required): This field is used to record the patient's unique Medical Record Number.
* **Date of Birth** (`date_of_birth`, `date`, required): This field is used to record the patient's date of birth.
* **Assessment Date** (`assessment_date`, `date`, required): This field is used to record the date of the assessment.
* **Healthcare Provider Name** (`provider_name`, `text`, required): This field is used to record the name of the healthcare provider conducting the assessment.
* **Chief Complaint** (`chief_complaint`, `text`, required): This field is used to record the patient's reason for the visit and chief complaint.
* **Duration of Symptoms** (`duration`, `text`, optional): This field is used to record the duration of the patient's symptoms.
* **Symptom Severity** (`severity`, `select_one`, required): This field is used to record the severity of the patient's symptoms (Mild, Moderate, Severe, or Severe and life-threatening).
* **Chief Complaint Section** (`chief_complaint_section`, `note`, optional): This field is used to record any additional information related to the chief complaint.
* **How Symptoms Have Progressed** (`symptom_progression`, `text`, required): This field is used to record how the patient's symptoms have progressed over time.
* **Triggering or Exacerbating Factors** (`triggering_factors`, `text`, optional): This field is used to record any factors that trigger or exacerbate the patient's symptoms.
* **Relieving Factors** (`relieving_factors`, `text`, optional): This field is used to record any factors that relieve the patient's symptoms.
* **Associated Symptoms** (`associated_symptoms`, `text`, optional): This field is used to record any associated symptoms the patient is experiencing.
* **Vital Signs Section** (`vital_section`, `note`, optional): This field is used to record the patient's vital signs, such as temperature, blood pressure, heart rate, and respiratory rate.
* **Temperature (Fahrenheit)** (`temperature`, `number`, optional): This field is used to record the patient's current temperature in Fahrenheit.
* **Blood Pressure** (`blood_pressure`, `text`, optional): This field is used to record the patient's blood pressure in the format systolic/diastolic.
* **Heart Rate (bpm)** (`heart_rate`, `number`, optional): This field is used to record the patient's current heart rate in beats per minute.
* **Respiratory Rate (breaths/min)** (`respiratory_rate`, `number`, optional): This field is used to record the patient's respiratory rate in breaths per minute.
* **Physical Examination Section** (`physical_section`, `note`, optional): This field is used to record the patient's physical examination results.
* **General Appearance** (`general_appearance`, `text`, optional): This field is used to record a general description of the patient's appearance.
* **Examination Findings** (`examination_findings`, `text`, required): This field is used to record any notable examination findings.
* **Abnormal Findings** (`abnormal_findings`, `text`, optional): This field is used to record any abnormal findings.
* **Assessment and Impression** (`assessment_impression`, `text`, required): This field is used to record the healthcare provider's assessment and impression of the patient's condition.
