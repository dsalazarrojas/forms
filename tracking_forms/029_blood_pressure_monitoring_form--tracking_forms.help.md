# Blood Pressure Monitoring Form - Help Guide
## Purpose
The Blood Pressure Monitoring Form is a tool for healthcare professionals to collect and track patient blood pressure data. It helps monitor and assess patient health, aiding in the management of hypertension.

## How To Complete This Form

1. Fill in the patient's name.
2. Enter the patient's ID or Medical Record Number.
3. Enter your name and title (e.g., "Dr." or "MD").
4. Record the start and end dates of the blood pressure monitoring period.
5. Record the date and time of each blood pressure reading.
6. Enter the systolic and diastolic blood pressure readings in mmHg.
7. Select the heart rate in bpm.
8. Choose the blood pressure category (Normal, Elevated, etc.).
9. Specify the device used to measure blood pressure.
10. Choose the location where the blood pressure was measured (e.g., home, clinic, etc.).
11. Select the body position during measurement (e.g., seated, lying down).
12. Select the arm used for the measurement.
13. List any current medications.
14. Evaluate patient compliance with treatment (Excellent, Good, Fair, Poor).
15. Add any clinical notes.
16. Record the date this form was submitted.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, `text`, required): Enter the patient's full name.
* **Patient ID/Medical Record Number** (`patient_id`, `text`, optional): Enter the patient's ID or medical record number if available.
* **Physician Name** (`physician_name`, `text`, required): Enter your name and title (e.g., "Dr." or "MD").
* **Monitoring Start Date** (`monitoring_start_date`, `date`, required): Record the start date of the blood pressure monitoring period.
* **Monitoring End Date** (`monitoring_end_date`, `date`, optional): Record the end date of the blood pressure monitoring period if applicable.
* **Reading Date** (`reading_date`, `date`, required): Record the date of each blood pressure reading.
* **Reading Time** (`reading_time`, `time`, required): Record the time of each blood pressure reading.
* **Systolic Pressure (mmHg)** (`systolic_pressure`, `number`, required): Enter the systolic pressure reading in mmHg.
* **Diastolic Pressure (mmHg)** (`diastolic_pressure`, `number`, required): Enter the diastolic pressure reading in mmHg.
* **Heart Rate (bpm)** (`heart_rate`, `number`, optional): Select the heart rate in bpm if relevant.
* **BP Category** (`blood_pressure_category`, `select_one`, optional): Choose the blood pressure category (Normal, Elevated, etc.).
* **Measurement Device Used** (`measurement_device`, `text`, optional): Specify the device used to measure blood pressure.
* **Measurement Location** (`measurement_location`, `select_one`, required): Choose the location where the blood pressure was measured (e.g., home, clinic, etc.).
* **Body Position** (`body_position`, `select_one`, required): Select the body position during measurement (e.g., seated, lying down).
* **Arm Used** (`arm_used`, `select_one`, required): Select the arm used for the measurement.
* **Current Medications** (`medications_current`, `text`, optional): List any current blood pressure medications.
* **Patient Compliance with Treatment** (`patient_compliance`, `select_one`, optional): Evaluate patient compliance with treatment (Excellent, Good, Fair, Poor).
* **Clinical Notes** (`clinical_notes`, `text`, optional): Add any clinical notes.
* **Form Submission Date** (`form_submission_date`, `date`, required): Record the date this form was submitted.
