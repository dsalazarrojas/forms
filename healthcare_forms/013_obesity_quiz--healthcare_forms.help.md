<thinking>
# To create this form, we can infer the general purpose and logic behind it. 
The form likely aims to assess a patient's body mass index (BMI) and related health risks. 
It collects information on the patient's weight, height, body mass index, and other relevant metrics. 
These fields are likely intended for healthcare professionals to quickly evaluate a patient's health status and potential risks.
</thinking>

# obesity_quiz - Help Guide
## Purpose
This form is designed to help healthcare professionals assess a patient's body mass index (BMI) and related health risks.

## How To Complete This Form
1. To begin, ensure you have all the required information for the patient and answer the questions honestly.
2. Fill in the patient's weight (in kg) in the `weight` field.
3. Enter the patient's height (in meters) in the `height` field.
4. Calculate the patient's body mass index (BMI) using the formula: BMI = weight (kg) / (height (m) ^ 2).
5. Enter the calculated BMI in the `body_mass_index` field.
6. Measure or estimate the patient's waist circumference (in cm) and enter it in the `waist_circumference` field.
7. Measure or estimate the patient's hip circumference (in cm) and enter it in the `hip_circumference` field.
8. Calculate the patient's waist-to-hip ratio using the formula: waist-to-hip ratio = waist_circumference / hip_circumference.
9. Enter the calculated ratio in the `waist_to_hip_ratio` field.
10. Select the patient's BMI classification (Normal, Overweight, Obese Class 1, Obese Class 2, or Obese Class 3) from the `patient_bmi_classification` field.
11. Enter a brief reason for the patient's BMI classification in the `patient_bmi_classification_reason` field.
12. Indicate the patient's health risks (Low, Medium, High, or Very High) in the `health_risk` field.
13. Record the date of the assessment in the `assessment_date` field.

## Field-by-Field Explanation
* **weight** (`weight`, number, required: false): Enter the patient's weight (in kg).
* **height** (`height`, number, required: false): Enter the patient's height (in meters).
* **body_mass_index** (`body_mass_index`, number, required: false): Enter the calculated body mass index (BMI).
* **waist_circumference** (`waist_circumference`, number, required: false): Enter the patient's waist circumference (in cm).
* **hip_circumference** (`hip_circumference`, number, required: false): Enter the patient's hip circumference (in cm).
* **waist_to_hip_ratio** (`waist_to_hip_ratio`, number, required: false): Enter the calculated waist-to-hip ratio.
* **patient_bmi_classification** (`patient_bmi_classification`, select_one, required: false): Select the patient's BMI classification (Normal, Overweight, Obese Class 1, Obese Class 2, or Obese Class 3).
* **patient_bmi_classification_reason** (`patient_bmi_classification_reason`, text, required: false): Enter a brief reason for the patient's BMI classification.
* **health_risk** (`health_risk`, select_multiple, required: false): Indicate the patient's health risks (Low, Medium, High, or Very High).
* **assessment_date** (`assessment_date`, date, required: false): Record the date of the assessment.
