<thinking>
This form is designed for patients to input information related to their COVID-19 vaccination status and medical history. The form aims to gather data to help healthcare providers administer the booster shot safely and effectively. This form is intended for patients who have already received their primary COVID-19 vaccination series and are now seeking a booster shot. The form will help the healthcare provider assess the patient's eligibility for the booster shot, their current health status, and any potential risks or allergies.

Please note that this form is a crucial document that requires accurate and honest input from the patient. Completing this form is a prerequisite for receiving the booster shot.

Before we dive into the form details, please ensure that you are eligible to receive the booster shot. This form is not a substitute for medical advice, and your healthcare provider will review your answers to ensure that the booster shot is safe for you.

Please take your time to complete this form carefully and accurately. Your healthcare provider will use the information you provide to administer the booster shot safely and effectively.
</thinking>

# COVID 19 Booster Shot Form - Help Guide
## Purpose
This form is designed for patients to input information related to their COVID-19 vaccination status and medical history to help healthcare providers administer the booster shot safely and effectively.

## How To Complete This Form
1. Please provide your name, date of birth, and medical record number (if available).
2. Enter the date you are scheduled for the booster shot.
3. Select the type of COVID-19 vaccine you initially received.
4. If you have received a previous booster shot, provide the date and type of vaccine.
5. Choose the type of booster shot you prefer (if applicable).
6. Describe any side effects you experienced after the primary vaccination series.
7. Report any known allergies to vaccine components.
8. Mention any current health conditions or chronic/acute conditions you are experiencing.
9. List any current medications you are taking.
10. Answer yes or no questions regarding recent illness, past COVID-19 infection, and eligibility for the booster shot.
11. If you have had COVID-19, provide the date of diagnosis.
12. Indicate whether you are feeling well enough for the booster shot.
13. Mention any questions or concerns you have about the booster shot.
14. Confirm that you have read and understand the booster shot information.
15. Finally, select whether you consent to receive the COVID-19 booster shot.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter your full legal name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth.
* **Medical Record Number** (`medical_record_number`, text, optional): If available, enter your medical record number.
* **Booster Shot Appointment Date** (`appointment_date`, date, required): Enter the date you are scheduled for the booster shot.
* **Primary COVID-19 Vaccine Received** (`primary_vaccine`, select_one, required): Select the type of COVID-19 vaccine you initially received.
* **Date of Primary Vaccine Series** (`primary_vaccine_date`, date, optional): Enter the date you completed the initial series.
* **Have you received a COVID-19 Booster Shot Before?** (`booster_previously_received`, select_one, required): Select whether you have received a previous booster shot.
* **Date of Previous Booster Shot** (`previous_booster_date`, date, optional): If you have received a previous booster shot, enter the date.
* **Booster Shot Type Requested** (`booster_type_requested`, select_one, optional): Select the type of booster shot you prefer.
* **Side Effects from Primary Vaccine** (`side_effects_primary`, text, optional): Describe any side effects you experienced after the primary shots.
* **Vaccine Ingredient Allergies** (`allergies`, text, optional): Report any known allergies to vaccine components.
* **Current Health Conditions** (`current_health_conditions`, text, optional): Mention any current health conditions or chronic/acute conditions you are experiencing.
* **Current Medications** (`current_medications`, text, optional): List any current medications you are taking.
* **Recent Illness in Past 2 Weeks** (`recent_illness`, select_one, required): Select whether you have had a recent cold, flu, or other symptoms.
* **Have you had COVID-19 Since Primary Vaccination?** (`recent_covid_infection`, select_one, required): Select whether you have had COVID-19 since primary vaccination.
* **Date of COVID-19 Diagnosis** (`covid_diagnosis_date`, date, optional): If you had COVID-19, enter the date of diagnosis.
* **Are you feeling well enough for booster shot today?** (`ready_for_booster`, select_one, required): Select whether you are feeling well enough for the booster shot.
* **Questions or Concerns About Booster Shot** (`questions_concerns`, text, optional): Mention any questions or concerns you have about the booster shot.
* **I have read and understand the booster shot information** (`informed_consent`, select_one, required): Confirm that you have read and understand the booster shot information.
* **I consent to receive the COVID-19 booster shot** (`consent_agreement`, select_one, required): Select whether you consent to receive the COVID-19 booster shot.
* **Form Completion Date** (`form_completion_date`, date, required): This field is automatically populated with the date and time you completed the form.

Please note that some fields are marked as required. Please ensure that you complete all required fields accurately and honestly to ensure a safe and effective booster shot administration.
