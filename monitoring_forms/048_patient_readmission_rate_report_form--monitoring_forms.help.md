# Patient Readmission Rate Report Form - Help Guide
## Purpose
The Patient Readmission Rate Report Form is a tool used to track patient readmission rates for the purpose of monitoring and quality improvement. This form captures information on patient identifiers, date of admission and discharge, department, reason for discharge, hospital stay duration, and readmission status within specific timeframes.
## How To Complete This Form
1. Ensure that you have all necessary information on hand before completing this form.
2. Start by entering the patient's **Patient Identifier** on page 1.
3. On page 2, select the **Department** where the patient was admitted.
4. Enter the **Date Admitted** and **Discharge Date** of the patient's stay.
5. Select the reason for the patient's **Discharge**.
6. Enter the number of **Hospital Days** for the patient's stay.
7. Answer **Yes** or **No** to indicate if the patient was readmitted within 30, 90, 180 days or 1 year after discharge.
8. Finally, provide any additional **Notes** about the patient's readmission.

## Field-by-Field Explanation
* **Patient Identifier** (`patient_identifier`, text, optional): Enter a unique identifier for the patient, such as a hospital number or patient ID number.
* **Date Admitted** (`date_admitted`, date, required): Enter the date the patient was admitted to the hospital.
* **Department** (`department`, select_multiple, optional): Select the department where the patient was admitted, such as Cardiology, Neurology, etc.
* **Discharge Date** (`discharge_date`, date, required): Enter the date the patient was discharged from the hospital.
* **Reason** (`reason`, text, optional): Enter the reason for the patient's discharge, such as medical condition improvement or transfer to another facility.
* **Hospital Days** (`hospital_days`, number, required): Enter the duration of the patient's hospital stay.
* **Readmitted within 30 days** (`within_30_days`, select_one, required): Answer **Yes** if the patient was readmitted within 30 days after discharge, **No** otherwise.
* **Readmitted within 90 days** (`within_90_days`, select_one, optional): Answer **Yes** if the patient was readmitted within 90 days after discharge, **No** otherwise.
* **Readmitted within 180 days** (`within_180_days`, select_one, optional): Answer **Yes** if the patient was readmitted within 180 days after discharge, **No** otherwise.
* **Readmitted within 1 year** (`within_one_year`, select_one, optional): Answer **Yes** if the patient was readmitted within 1 year after discharge, **No** otherwise.
* **Readmitted within 6 months** (`within_six_months`, select_one, optional): Answer **Yes** if the patient was readmitted within 6 months after discharge, **No** otherwise.
* **Notes** (`notes`, text, optional): Provide any additional information about the patient's readmission. 

## Tips
* Ensure that all required fields are completed accurately before submitting the form.
* Verify the patient's information with the relevant department or hospital team before submitting the form.
* Review the patient's medical history for any potential risk factors that may affect readmission rates.
