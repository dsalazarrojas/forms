<thinking>

To create a user-facing help guide for the "Blood Pressure Calculator" form, we need to understand the form's purpose, how to complete it, and what each field means. The form appears to be designed for healthcare professionals to assess a patient's blood pressure reading and gather relevant information for further diagnosis or treatment.

The form has multiple pages, but the main page is the "calculator_intro" page with a note that explains the form's purpose: to calculate and understand a blood pressure reading. The subsequent pages gather various patient information, including name, date of birth, date and time of reading, systolic and diastolic pressure, and pulse rate. The form also includes fields for other relevant factors such as where and how the reading was taken, any recent activity, caffeine intake, stress level, medications taken, symptoms, and additional notes. Each field has a specific label, hint, and type to guide the user on what information is expected.

The form seems to be designed for healthcare professionals to quickly and efficiently gather necessary information for patient assessments. However, it may also be useful for patients to self-report their blood pressure readings and symptoms.

The form's fields are well-structured and logical, making it easy to understand and use. Each field is labeled clearly, and the options for select_one fields are limited to relevant and straightforward choices.

</thinking>

# Blood Pressure Calculator - Help Guide
## Purpose
The Blood Pressure Calculator is a form designed to help healthcare professionals quickly and accurately assess a patient's blood pressure reading and gather relevant information for further diagnosis or treatment. This form is intended for healthcare professionals, but may also be used by patients to self-report their blood pressure readings and symptoms.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name and date of birth for personal records.
2. Select the date and time of the blood pressure reading.
3. Record the systolic (top number) and diastolic (bottom number) pressure reading in mmHg.
4. Enter the pulse rate in beats per minute.
5. Choose where the blood pressure reading was taken (e.g., Home, Clinic, Hospital, Pharmacy, or Other).
6. Specify which arm was used for the reading (Left arm or Right arm).
7. Describe the patient's position during the reading (e.g., Sitting, Lying down, Standing).
8. Choose the level of recent activity before the reading (e.g., At rest, Light activity, Vigorous activity, Just woke up).
9. Indicate if caffeine was consumed in the last 30 minutes (Yes or No).
10. Assess the stress level during the reading (None, Mild, Moderate, High).
11. Specify if medications were taken on the day of the reading (Yes or No).
12. Describe any symptoms experienced with this reading (e.g., Dizziness, Chest pain, Shortness of breath).
13. Provide additional notes on the reading.

## Field-by-Field Explanation

* **Full Name** (`patient_name`, text, optional): Enter your name for personal records.
* **Date of Birth** (`date_of_birth`, date, optional): Enter your date of birth.
* **Date of Reading** (`measurement_date`, date, required): Select the date of the blood pressure reading.
* **Time of Reading** (`measurement_time`, time, required): Select the time of the blood pressure reading.
* **Systolic Pressure (top number)** (`systolic_reading`, number, required): Enter the systolic pressure reading in mmHg.
* **Diastolic Pressure (bottom number)** (`diastolic_reading`, number, required): Enter the diastolic pressure reading in mmHg.
* **Pulse Rate (beats per minute)** (`pulse_rate`, number, optional): Enter the pulse rate.
* **Where was BP measured?** (`measurement_location`, select_one, required): Choose where the blood pressure reading was taken (e.g., Home, Clinic, Hospital, Pharmacy, Other).
* **Which arm was used?** (`measurement_arm`, select_one, required): Specify which arm was used for the reading (Left arm or Right arm).
* **Patient Position During Reading** (`patient_position`, select_one, required): Describe the patient's position during the reading (e.g., Sitting, Lying down, Standing).
* **Recent Activity Before Reading** (`recent_activity`, select_one, optional): Choose the level of recent activity before the reading (e.g., At rest, Light activity, Vigorous activity, Just woke up).
* **Caffeine consumed in last 30 minutes?** (`caffeine_intake`, select_one, optional): Indicate if caffeine was consumed in the last 30 minutes (Yes or No).
* **Stress Level During Reading** (`stress_level`, select_one, optional): Assess the stress level during the reading (None, Mild, Moderate, High).
* **Medications taken today?** (`medication_taken`, select_one, optional): Specify if medications were taken on the day of the reading (Yes or No).
* **Any symptoms with this reading?** (`symptoms`, text, optional): Describe any symptoms experienced with this reading (e.g., Dizziness, Chest pain, Shortness of breath).
* **Additional Notes** (`reading_notes`, text, optional): Provide additional notes on the reading.
* **Submission Date** (`submission_date`, date, required): Select the date of submission.
