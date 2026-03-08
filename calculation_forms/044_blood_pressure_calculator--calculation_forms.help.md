<thinking>
This form is designed to calculate and assess blood pressure readings. It is essential to fill this form to ensure accurate calculations and proper health assessments. Please note that this form is only intended for personal health tracking and not for professional medical use. If you are a healthcare professional, please use a medical professional's discretion for actual diagnosis and treatment. This form is a simple tool for individuals to get an estimate of their blood pressure category.
</thinking>

# Blood Pressure Calculator - Help Guide
## Purpose

The Blood Pressure Calculator is a form designed to help individuals track and assess their blood pressure readings. It collects personal information and provides a calculated result for blood pressure category.

## How To Complete This Form

1. Enter your name in the "Your Name" field.
2. Provide your birth date in the "Date of Birth" field in the format mm/dd/yyyy.
3. Select your gender.
4. Enter the date and time of the blood pressure measurement in the "Measurement Date" and "Measurement Time" fields.
5. Enter the systolic (top number) and diastolic (bottom number) blood pressure readings in the "Systolic Pressure" and "Diastolic Pressure" fields.
6. Select the arm from which the reading was taken.
7. Select the body position during measurement.
8. Choose whether you were active before the measurement.
9. Indicate whether you consumed caffeine before the measurement.
10. Select your blood pressure category based on the calculated result.
11. (Optional) If you are taking blood pressure medication, list the medications you are currently taking.
12. (Optional) If you are experiencing any symptoms, select all that apply.
13. Indicate whether your doctor should be notified based on the calculated result.
14. (Optional) If a follow-up is recommended, select the preferred follow-up schedule.
15. Provide any additional comments or information.

## Field-by-Field Explanation

* **Your Name** (`patient_name`, text, required): Enter your full name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your birth date in the format mm/dd/yyyy.
* **Gender** (`gender`, select_one, optional): Select your gender (Male, Female, Other, Prefer Not to Say).
* **Measurement Date** (`measurement_date`, date, required): Enter the date of the measurement in the format mm/dd/yyyy.
* **Measurement Time** (`measurement_time`, time, optional): Enter the time of the measurement in 12-hour format (HH:MM AM/PM).
* **Systolic Pressure** (`systolic_pressure`, number, required): Enter the systolic blood pressure in mmHg.
* **Diastolic Pressure** (`diastolic_pressure`, number, required): Enter the diastolic blood pressure in mmHg.
* **Heart Rate** (`heart_rate`, number, optional): Enter your heart rate in BPM.
* **Which Arm** (`which_arm`, select_one, required): Select the arm from which the reading was taken (Right Arm, Left Arm, Both Arms).
* **Body Position** (`body_position`, select_one, required): Select the body position during measurement (Sitting, Standing, Lying Down).
* **Activity Before Measurement** (`activity_before`, select_one, optional): Choose your activity before measurement (Resting, Walking, Exercise, Eating, Stressed).
* **Caffeine Intake** (`caffeine_intake`, select_one, optional): Indicate whether you consumed caffeine within 30 minutes or 2 hours before measurement (Yes Within 30 Minutes, Yes Within 2 Hours, False).
* **Blood Pressure Category** (`bp_category`, select_one, required): Select your blood pressure category based on the calculated result (Normal, Elevated, High Stage 1, High Stage 2, Hypertensive Crisis).
* **Pulse Pressure** (`pulse_pressure`, number, optional): Calculate as the difference between systolic and diastolic pressures.
* **Mean Arterial Pressure** (`map_calculation`, number, optional): The calculated mean arterial pressure.
* **Current Symptoms** (`symptoms`, select_multiple, optional): Select all symptoms you are currently experiencing (None, Headache, Dizziness, Chest Pain, Shortness of Breath, Blurred Vision, Nausea).
* **Blood Pressure Medications** (`medications`, select_one, optional): Indicate whether you are taking blood pressure medication (True, False).
* **Medication List** (`medication_list`, text, optional): List the blood pressure medications you are currently taking.
* **Medical Conditions** (`medical_conditions`, text, optional): List any related medical conditions.
* **Notify Doctor** (`doctor_notification`, select_one, optional): Indicate whether your doctor should be notified (Yes Please Notify, No I Will Contact, Not Needed).
* **Follow-Up Recommended** (`follow_up_recommended`, select_one, optional): Select the follow-up schedule recommended based on the calculated result (Routine Follow-Up, Soon Within Week, Urgent Same Day).
* **Additional Notes** (`notes`, text, optional): Provide any additional comments or information.
