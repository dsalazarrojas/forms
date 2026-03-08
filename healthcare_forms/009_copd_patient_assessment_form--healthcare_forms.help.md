<thinking>...</thinking>

This help guide is for users who are filling out the COPD Patient Assessment Form. This form is used to gather information about patients with Chronic Obstructive Pulmonary Disease (COPD) for healthcare providers to assess and manage patient care. The form is designed to collect relevant demographic information and clinical data to help healthcare providers make informed decisions about patient treatment and care.

## Purpose
The COPD Patient Assessment Form is used to collect essential information about patients with COPD to aid healthcare providers in assessing their condition and creating a treatment plan.

## How To Complete This Form

1. Enter the patient's name in the "Patient Name" field.
2. Enter the patient's date of birth in the "Date of Birth" field in the format mm/dd/yyyy.
3. Enter the patient's ID number in the "Patient ID" field.
4. Enter the date of the current assessment in the "Assessment Date" field in the format mm/dd/yyyy.
5. Enter the name of the healthcare provider conducting the assessment in the "Physician or Healthcare Provider Name" field.
6. Enter the date of the patient's COPD diagnosis in the "COPD Diagnosis Date" field in the format mm/dd/yyyy if applicable.
7. Select the stage of the patient's COPD condition from the provided options in the "COPD Stage" field.
8. Choose whether the patient is a current, former, or never smoker from the "Current Smoking Status" field.
9. If applicable, enter the number of pack-years of smoking in the "Pack-Years of Smoking" field.
10. Select all applicable symptoms from the "Current COPD Symptoms" field. 
   This field is a select-multiple dropdown with available options: Chronic cough, Shortness of breath, Chest tightness, Wheezing, Excess sputum, Fatigue.
11. Select how often the patient experiences symptoms from the "Symptom Frequency" field.
12. Choose the patient's exercise tolerance level from the provided options in the "Exercise Tolerance Level" field.
13. If applicable, enter the patient's FEV1 percentage predicted in the "FEV1 Percentage Predicted" field.
14. Enter the patient's current medications in the "Current COPD Medications" field.
15. Rate the patient's medication adherence from the "Medication Adherence" field.
16. Enter the number of COPD exacerbations in the past year in the "COPD Exacerbations in Past Year" field.
17. Enter the number of hospitalizations in the past year in the "Hospitalizations in Past Year" field.
18. If applicable, select all comorbid conditions from the "Comorbid Conditions" field. This field is a select-multiple dropdown with available options: Hypertension, Diabetes, Heart disease, Anxiety, Depression, Osteoporosis.
19. Choose whether the patient screens positive for depression from the "Patient screens positive for Depression" field.
20. Select the patient's influenza and pneumonia vaccination status from the provided options in the "Influenza and Pneumonia Vaccination Status" field.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's name in this field.
* **Date of Birth** (`patient_date_of_birth`, date, required): Enter the patient's date of birth in the format mm/dd/yyyy.
* **Patient ID** (`patient_id`, text, required): Enter the patient's ID number.
* **Assessment Date** (`assessment_date`, date, required): Enter the date of the current assessment in the format mm/dd/yyyy.
* **Physician or Healthcare Provider Name** (`physician_name`, text, required): Enter the name of the healthcare provider conducting the assessment.
* **COPD Diagnosis Date** (`copd_diagnosis_date`, date, optional): Enter the date of the patient's COPD diagnosis in the format mm/dd/yyyy if applicable.
* **COPD Stage** (`copd_stage`, select_one, required): Select the stage of the patient's COPD condition from the provided options: Gold 1 (Mild), Gold 2 (Moderate), Gold 3 (Severe), Gold 4 (Very Severe).
* **Current Smoking Status** (`smoking_status`, select_one, required): Choose whether the patient is a current, former, or never smoker.
* **Pack-Years of Smoking** (`pack_years`, number, optional): If applicable, enter the number of pack-years of smoking.
* **Current COPD Symptoms** (`current_symptoms`, select_multiple, required): Select all applicable symptoms from the provided options: Chronic cough, Shortness of breath, Chest tightness, Wheezing, Excess sputum, Fatigue.
* **Symptom Frequency** (`symptom_frequency`, select_one, required): Select how often the patient experiences symptoms.
* **Exercise Tolerance Level** (`exercise_tolerance`, select_one, required): Choose the patient's exercise tolerance level from the provided options: No limitations, Slight limitation with strenuous activity, Limitation with moderate activity, Severe limitation, Unable to walk.
* **FEV1 Percentage Predicted** (`fev1_percentage`, number, optional): If applicable, enter the patient's FEV1 percentage predicted.
* **Current COPD Medications** (`current_medications`, text, optional): Enter the patient's current medications.
* **Medication Adherence** (`medication_adherence`, select_one, required): Rate the patient's medication adherence from the provided options: Excellent, Good, Fair, Poor.
* **COPD Exacerbations in Past Year** (`exacerbations_past_year`, number, required): Enter the number of COPD exacerbations in the past year.
* **Hospitalizations in Past Year** (`hospitalizations_past_year`, number, required): Enter the number of hospitalizations in the past year.
* **Comorbid Conditions** (`comorbidities`, select_multiple, optional): If applicable, select all comorbid conditions from the provided options: Hypertension, Diabetes, Heart disease, Anxiety, Depression, Osteoporosis.
* **Patient Screens Positive for Depression** (`mental_health_screening`, select_one, optional): Choose whether the patient screens positive for depression.
* **Influenza and Pneumonia Vaccination Status** (`vaccination_status`, select_one, required): Select the patient's influenza and pneumonia vaccination status from the provided options: Up to date, Needs influenza vaccine, Needs pneumonia vaccine, Needs both vaccines, Contraindicated.
