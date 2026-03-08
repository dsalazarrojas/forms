## <thinking>... A form to collect information on a patient's nutritional status, medical history, and lifestyle goals, to be used by healthcare professionals to identify potential risks and provide personalized recommendations for nutrition screening.
This form is used to gather information on patient's nutritional status, medical history, and lifestyle goals. The purpose of this form is to help healthcare professionals identify potential risks and provide personalized recommendations for nutrition screening.
...<thinking>

# nutrition_screening_form - Help Guide
## Purpose
This form is used to collect information on a patient's nutritional status, medical history, and lifestyle goals, to be used by healthcare professionals to identify potential risks and provide personalized recommendations for nutrition screening.

## How To Complete This Form
To complete this form, please answer each section according to the instructions provided. The form is divided into several sections, each covering different aspects of the patient's health information. Please fill out the form carefully, and do not leave any required fields blank.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required): This section requires you to enter your name, age, and other identifying information.
* **Medical History** (`medical_history`, select_one, optional): Select one of the following medical conditions:
	+ Diabetes
	+ Hypertension
	+ Other
* **Medical History Other** (`medical_history_other`, text, optional): If you select "Other" as your medical condition, please describe your medical history.
* **Medications** (`medications`, text, optional): List all your current medications.
* **Allergies** (`allergies`, select_multiple, optional): Select all the allergies you have:
	+ Dairy
	+ Gluten
	+ Other
* **Medical Risk Factors** (`medical_risk_factors`, select_one, optional): Select one of the following medical risk factors:
	+ Obesity
	+ Smoking
	+ Other
* **Nutrition Goals** (`nutrition_goals`, select_multiple, optional): Select all the nutrition goals you have:
	+ None
	+ Weight Loss
	+ Muscle Gain
	+ Other
* **Nutrition Status** (`nutrition_status`, select_one, required): Select one of the following nutrition statuses:
	+ Poor
	+ Fair
	+ Good
	+ Excellent
* **Height** (`height`, number, required): Enter your height in centimeters.
* **Weight** (`weight`, number, required): Enter your weight in kilograms.
* **BMI** (`body_mass_index`, number, required): Enter your body mass index (BMI).
* **BMI Category** (`body_mass_index_category`, select_one, required): Select one of the following BMI categories:
	+ Underweight
	+ Normal
	+ Overweight
	+ Obese
* **Body Fat Percentage** (`body_fat_percentage`, number, required): Enter your body fat percentage.
* **Waist Circumference** (`waist_circumference`, number, required): Enter your waist circumference in centimeters.
* **Blood Pressure** (`blood_pressure`, number, required): Enter your blood pressure in millimeters of mercury (mmHg).
* **Blood Sugar** (`blood_sugar`, number, required): Enter your blood sugar level in milligrams per deciliter (mg/dL).
* **Blood Cholesterol** (`blood_cholesterol`, number, required): Enter your blood cholesterol level in milligrams per deciliter (mg/dL).
* **Total Chol** (`total_chol`, number, required): Enter your total cholesterol level.
* **HDL Chol** (`hdl_chol`, number, required): Enter your HDL cholesterol level.
* **Triglycerides** (`triglycerides`, number, required): Enter your triglycerides level.
* **Glucose** (`glucose`, number, required): Enter your glucose level in milligrams per deciliter (mg/dL).
* **Insulin Resistance** (`insulin_resistance`, select_one, optional): Select one of the following insulin resistance levels:
	+ None
	+ Moderate
	+ Severe
	+ Other
* **Cardiovascular Risk Factors** (`cardiovascular_risk_factors`, select_multiple, optional): Select all the following cardiovascular risk factors:
	+ None
	+ High Blood Pressure
	+ Family History of Heart Disease
	+ Other
* **Lifestyle Goals** (`lifestyle_goals`, select_multiple, optional): Select all the following lifestyle goals:
	+ None
	+ Regular Exercise
	+ Balanced Diet
	+ Other

## Tips
* Make sure to answer each question carefully and truthfully to ensure accurate results.
* If you are unsure about any question, please consult with a healthcare professional.
* Please note that this form is for informational purposes only and should not be used for diagnosis or treatment.
