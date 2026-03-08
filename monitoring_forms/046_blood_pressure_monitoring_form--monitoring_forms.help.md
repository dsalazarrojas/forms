# Blood Pressure Monitoring Form - Help Guide
## Purpose
The Blood Pressure Monitoring Form is designed to collect and monitor blood pressure readings from patients. This form is meant to be filled out by healthcare providers or patients themselves to track and categorize blood pressure readings.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the patient's name, date of birth, and other required fields.
2. Record the blood pressure readings, including systolic and diastolic values.
3. Select the correct measurement arm, patient position, and blood pressure category.
4. Choose the correct options for any symptoms present, activity level, stress level, medications taken, and blood pressure category.
5. Finally, indicate if follow-up is needed and add any additional notes.

## Field-by-Field Explanation

* **Patient Name** (`Patient Name`, `text`, required): Enter the full name of the patient.
* **Patient ID** (`Patient ID`, `text`, optional): Enter the patient's medical record number (if available).
* **Date of Birth** (`Date of Birth`, `date`, required): Enter the patient's birth date.
* **Monitoring Date** (`Monitoring Date`, `date`, required): Enter the date of the blood pressure reading.
* **Monitoring Time** (`Monitoring Time`, `time`, required): Enter the time of the blood pressure reading.
* **Systolic Reading** (`Systolic Reading`, `number`, required): Record the top number in mmHg.
* **Diastolic Reading** (`Diastolic Reading`, `number`, required): Record the bottom number in mmHg.
* **Pulse Rate** (`Pulse Rate`, `number`, optional): Record the heart rate in BPM.
* **Measurement Arm** (`Measurement Arm`, `select_one`, required): Choose which arm was used for the measurement.
* **Patient Position** (`Patient Position`, `select_one`, required): Choose the patient's position during the measurement.
* **Cuff Size** (`Cuff Size`, `select_one`, optional): Choose the size of the cuff used.
* **Reading Context** (`Reading Context`, `select_one`, required): Choose when the blood pressure reading was taken.
* **Symptoms Present** (`Symptoms Present`, `select_multiple`, optional): Check any symptoms present.
* **Activity Level** (`Activity Level`, `select_one`, optional): Choose the level of activity before the reading.
* **Stress Level** (`Stress Level`, `number`, optional): Rate stress level 1-10.
* **Medications Taken** (`Medications Taken`, `select_one`, optional): Choose if any blood pressure medications were taken.
* **Medication Time** (`Medication Time`, `time`, optional): Record when medications were taken.
* **Blood Pressure Category** (`Blood Pressure Category`, `select_one`, required): Choose the blood pressure category (Normal, Elevated, Hypertension Stage 1, etc.).
* **Action Taken** (`Action Taken`, `select_one`, optional): Choose the action taken after the reading.
* **Monitored By** (`Monitored By`, `text`, optional): Enter the name of the healthcare provider.
* **Follow-Up Needed** (`Follow-Up Needed`, `select_one`, required): Indicate if follow-up is required.
* **Additional Notes** (`Additional Notes`, `text`, optional): Enter any additional notes or observations.

## Tips

* Make sure to fill out all required fields.
* Choose the correct options for each field based on the patient's information.
* If unsure about any field, refer to the form's purpose and the explanations provided.
* Double-check the blood pressure readings and other fields for accuracy.
* Follow-up is required if the patient's blood pressure category indicates it.
