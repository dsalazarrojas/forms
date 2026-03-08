# Personal Diabetes Health Questionnaire - Help Guide
## Purpose
This form is designed to collect detailed information about your diabetes health status, habits, and experiences.

## How To Complete This Form
- Please answer the questions honestly and accurately as they apply to your current situation.
- Make sure to list all your current medications in the "Medications" field.
- For "Blood Glucose Levels," enter your average blood glucose levels for a typical day.
- In "Meal Plan," describe your daily meal routine, including any dietary restrictions or special considerations.
- Select the frequency with which you exercise in "Exercise Frequency" and any relevant details.
- In "Health Care Team," provide the names and contact information of your healthcare providers.
- For "Medical Tests," select any medical tests you have undergone or plan to undergo.
- In "Health Outcomes," describe any notable health effects or outcomes related to your diabetes.
- "Diabetes Management" is a field for any notes or comments about managing your diabetes.
- "Complications" is a field for listing any known complications related to your diabetes.

## Field-by-Field Explanation

* **Personal Diabetes History** (`personal_diabetes_history`, `text`, required): Describe your diabetes diagnosis, diagnosis date, and any relevant medical history.
* **Medications** (`medication_list`, `select_multiple`, required): List all your current medications for diabetes, including dosages and frequency.
* **Blood Glucose Levels** (`blood_glucose_levels`, `number`, required): Enter your average blood glucose levels for a typical day.
* **Meal Plan** (`meal_nutrition_plan`, `text`, required): Describe your daily meal routine, including any dietary restrictions or special considerations.
* **Exercise Frequency** (`exercise_frequency`, `select_one`, optional): Select the frequency with which you exercise, and provide any relevant details.
* **Health Care Team** (`health_care_team`, `text`, required): Provide the names and contact information of your healthcare providers.
* **Medical Tests** (`medical_tests`, `select_multiple`, optional): Select any medical tests you have undergone or plan to undergo related to diabetes.
* **Health Outcomes** (`health_outcomes`, `text`, required): Describe any notable health effects or outcomes related to your diabetes.
* **Diabetes Management** (`diabetes_management`, `text`, required): Provide any notes or comments about managing your diabetes.
* **Complications** (`complications`, `select_one`, optional): Select any known complications related to your diabetes.
