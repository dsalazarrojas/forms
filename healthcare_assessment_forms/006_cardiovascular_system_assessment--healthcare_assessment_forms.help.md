<thinking>...</thinking>

# Cardiovascular System Assessment - Help Guide

## Purpose
The Cardiovascular System Assessment form is used to evaluate a patient's cardiovascular system, including their chief complaint, medical history, vital signs, cardiac examination findings, and previous cardiac procedures. This form helps healthcare providers assess the patient's cardiovascular health and identify any potential risks or concerns.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the patient's full name and medical record number.
2. Select the date of the patient's birth.
3. Enter the date of the assessment.
4. Provide the patient's chief complaint, which is the primary reason for the cardiovascular assessment.
5. Describe when the symptoms began.
6. Select all current cardiovascular symptoms the patient is experiencing.
7. Indicate the overall impact of the symptoms on the patient's daily activities.
8. Enter the patient's current systolic and diastolic blood pressure, heart rate, and respiratory rate.
9. Enter the patient's oxygen saturation level.
10. Select all cardiac examination findings from the list provided.
11. Choose all vascular examination findings from the list provided.
12. Select the most recent electrocardiogram (ECG) results.
13. If available, enter any recent echocardiogram results.
14. Select all cardiac risk factors that apply to the patient.
15. List all current cardiac medications the patient is taking.
16. Select all previous cardiac procedures the patient has undergone.
17. Choose the patient's functional status based on the New York Heart Association classification.
18. Enter the name and credentials of the healthcare professional conducting the assessment.
19. Select the follow-up recommended for the patient, based on their current condition.
20. Add any additional clinical notes or findings related to the patient's cardiovascular health.

## Field-by-Field Explanation
- **Patient Full Name** (`patient_full_name`, text, required): Enter the patient's full name, as it appears on their medical record.
- **Medical Record Number** (`medical_record_number`, text, required): Enter the patient's medical record number, if available.
- **Date of Birth** (`date_of_birth`, date, required): Select the patient's date of birth.
- **Assessment Date** (`assessment_date`, date, required): Enter the date the assessment was performed.
- **Chief Complaint** (`chief_complaint`, text, required): Describe the primary reason the patient is undergoing a cardiovascular assessment.
- **Symptom Onset** (`symptom_onset`, text, required): Describe when the patient's symptoms began.
- **Current Cardiovascular Symptoms** (`current_cardiovascular_symptoms`, select_multiple, required): Select all symptoms the patient is currently experiencing from the list provided.
- **Symptom Severity** (`symptom_severity`, select_one, required): Indicate the overall impact of the symptoms on the patient's daily activities.
- **Systolic Blood Pressure** (`vital_signs_systolic_bp`, number, required): Enter the patient's current systolic blood pressure in mmHg.
- **Diastolic Blood Pressure** (`vital_signs_diastolic_bp`, number, required): Enter the patient's current diastolic blood pressure in mmHg.
- **Heart Rate** (`vital_signs_heart_rate`, number, required): Enter the patient's current heart rate in beats per minute.
- **Respiratory Rate** (`vital_signs_respiratory_rate`, number, required): Enter the patient's current respiratory rate in breaths per minute.
- **Oxygen Saturation** (`vital_signs_oxygen_saturation`, number, required): Enter the patient's current oxygen saturation level in percentage on room air.
- **Cardiac Examination Findings** (`cardiac_exam_findings`, select_multiple, required): Select all cardiac examination findings from the list provided.
- **Vascular Examination Findings** (`vascular_exam_findings`, select_multiple, required): Select all vascular examination findings from the list provided.
- **ECG Results** (`ecg_results`, select_one, required): Select the most recent ECG results from the list provided.
- **Echocardiogram Results** (`echocardiogram_results`, text, optional): If available, enter any recent echocardiogram results.
- **Cardiac Risk Factors** (`cardiac_risk_factors`, select_multiple, required): Select all cardiac risk factors that apply to the patient from the list provided.
- **Current Cardiac Medications** (`current_cardiac_medications`, text, required): List all current cardiac medications the patient is taking.
- **Previous Cardiac Procedures** (`previous_cardiac_procedures`, select_multiple, required): Select all previous cardiac procedures the patient has undergone from the list provided.
- **Functional Status** (`functional_status`, select_one, required): Choose the patient's functional status based on the New York Heart Association classification.
- **Assessment Provider Name** (`assessment_provider`, text, required): Enter the name of the healthcare professional conducting the assessment.
- **Provider Credentials** (`provider_credentials`, text, required): Enter the provider's credentials, e.g., MD, DO, NP, PA.
- **Follow-up Recommended** (`follow_up_recommended`, select_one, required): Select the follow-up recommended for the patient, based on their current condition.
- **Additional Clinical Notes** (`additional_notes`, text, optional): Add any other relevant findings or comments about the patient's cardiovascular health.
