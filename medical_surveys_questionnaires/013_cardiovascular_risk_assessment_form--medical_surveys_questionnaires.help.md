# Cardiovascular Risk Assessment Form - Help Guide
## Purpose
This form is designed to assess the risk of cardiovascular disease in patients. It is used to collect information about a patient's medical background, physical measurements, and laboratory results to calculate the 10-year risk of cardiovascular disease.

## How To Complete This Form
To complete this form, follow the steps below:

* Ensure you have all the necessary information about the patient's medical background, including their full name, date of birth, family history of coronary artery disease, history of diabetes mellitus, and other relevant medical information.
* Measure the patient's height and weight in centimeters and kilograms, respectively.
* Enter the patient's blood pressure reading in millimeters of mercury (mmHg).
* Enter the patient's total cholesterol levels and HDL cholesterol levels measured during a recent blood panel in milligrams per deciliter (mg/dL).
* Select the patient's risk category based on the calculated 10-year risk score and clinical assessment.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_name_full`, text, **required**): Enter the patient's full name, including their first name, middle initial, and last name.
* **Date of Birth** (`patient_date_of_birth`, date, **required**): Enter the patient's date of birth in the format MM/DD/YYYY.
* **Height (cm)** (`patient_height_cm`, number, **required**): Enter the patient's height in centimeters.
* **Weight (kg)** (`patient_weight_kg`, number, **required**): Enter the patient's weight in kilograms.
* **Body Mass Index (BMI)** (`physical_bmi_value`, number, **optional**): This is a calculated value and will be automatically calculated based on the patient's height and weight.
* **Family History of Coronary Artery Disease (CAD)** (`family_history_cad_diagnosis`, select_one, **required**): Select 'True' if the patient has a family history of CAD, and 'False' otherwise.
* **History of Diabetes Mellitus** (`diabetes_diagnosis_history`, select_one, **required**): Select the type of diabetes mellitus the patient has, if applicable. If not applicable, select 'None'.
* **Total Cholesterol (mg/dL)** (`cholesterol_total_mg_dl`, number, **required**): Enter the patient's total cholesterol levels measured during a recent blood panel.
* **HDL Cholesterol (mg/dL)** (`cholesterol_hdl_mg_dl`, number, **required**): Enter the patient's HDL cholesterol levels measured during a recent blood panel.
* **Systolic Blood Pressure (mmHg)** (`blood_pressure_systolic_value`, number, **required**): Enter the patient's systolic blood pressure reading in millimeters of mercury (mmHg).
* **10-Year ASCVD Risk Score (%)** (`asc_vd_risk_score_calculated`, number, **optional**): This is a calculated value and will be automatically calculated based on the patient's risk factors.
* **Assigned Cardiovascular Risk Category** (`cardiovascular_risk_category_assigned`, select_one, **required**): Select the patient's risk category based on the calculated risk score and clinical assessment.

## Tips
* Ensure all fields are filled in accurately to ensure an accurate risk assessment.
* If a field is not applicable to the patient, select 'None' or 'False' as required.
* Consult with the patient's medical provider if you are unsure about any of the risk factors or laboratory results.
