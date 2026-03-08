<thinking>
We should check if the form is relevant for the current user and if it's not a duplicate form to be filled out. If it's both, we will output the help guide below. 
</thinking>
# pain-psych-patient-questionnaire - Help Guide
## Purpose
This form is designed to collect information about a patient's pain and psychological symptoms. It is intended for patients who are experiencing chronic or acute pain and are interested in discussing their symptoms with a healthcare professional. Completing this form will help healthcare providers understand the patient's experiences and develop a treatment plan tailored to their needs.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your patient ID (if applicable).
2. Indicate how long you have been experiencing pain (in days or weeks).
3. Select the locations where you feel pain (head, neck, back, abdomen, pelvis, lower back, or upper back).
4. Select additional pain locations if necessary.
5. Enter your name for reference purposes.
6. Enter your Date of Birth for reference purposes.
7. Provide your medical history (e.g., previous illnesses, surgeries, or allergies).
8. List any medications you are currently taking.
9. Describe your treatment plan, if any.
10. List any psychological symptoms you are currently experiencing (e.g., anxiety, depression, stress).
11. Select additional psychological symptoms if necessary.
12. Describe any pain symptoms you are experiencing (e.g., headache, fatigue, nausea).
13. Select one additional pain symptom if necessary.
14. List any medical symptoms you are experiencing (e.g., nausea, dizziness, cough).
15. Select additional medical symptoms if necessary.
16. Indicate how often you experience pain (e.g., daily, weekly, monthly).
17. Indicate the intensity of your pain (on a scale of 1-10).
18. Indicate how long you have been experiencing pain (in days or weeks).
19. Select one additional pain symptom if necessary.
20. List any additional medical symptoms.

## Field-by-Field Explanation

* **Patient ID** (`patient_id`, `number`, optional): Enter your patient ID for reference purposes.
* **Pain Duration** (`pain_duration`, `number`, optional): Indicate how long you have been experiencing pain in days or weeks.
* **Pain Locations** (`pain_locations`, `select_multiple`, optional): Select the locations where you feel pain, such as head, neck, back, abdomen, pelvis, lower back, or upper back.
* **Pain Locations 2** (`pain_locations_2`, `select_multiple`, optional): Select additional pain locations if necessary.
* **Patient Name** (`patient_name`, `text`, optional): Enter your name for reference purposes.
* **Patient DOB** (`patient_dob`, `date`, optional): Enter your Date of Birth for reference purposes.
* **Medical History** (`medical_history`, `text`, optional): Provide your medical history, including previous illnesses, surgeries, or allergies.
* **Medication** (`medication`, `text`, optional): List any medications you are currently taking.
* **Treatment Plan** (`treatment_plan`, `text`, optional): Describe your treatment plan, if any.
* **Psychological Symptoms** (`psychological_symptoms`, `select_multiple`, optional): List any psychological symptoms you are experiencing, such as anxiety, depression, stress, anger, frustration, fear, phobias, sleeplessness, or suicidal thoughts.
* **Psychological Symptoms 2** (`psychological_symptoms_2`, `select_multiple`, optional): Select additional psychological symptoms if necessary.
* **Pain Symptoms** (`pain_symptoms`, `text`, optional): Describe any pain symptoms you are experiencing, such as headache, fatigue, nausea.
* **Pain Symptoms 2** (`pain_symptoms_2`, `select_one`, optional): Select one additional pain symptom if necessary.
* **Medical Symptoms** (`medical_symptoms`, `text`, optional): List any medical symptoms you are experiencing, such as nausea, dizziness, cough.
* **Medical Symptoms 2** (`medical_symptoms_2`, `select_multiple`, optional): Select additional medical symptoms if necessary.
* **Pain Frequency** (`pain_frequency`, `number`, optional): Indicate how often you experience pain (e.g., daily, weekly, monthly).
* **Pain Intensity** (`pain_intensity`, `number`, optional): Indicate the intensity of your pain on a scale of 1-10.
* **Pain Duration 2** (`pain_duration_2`, `number`, optional): Indicate how long you have been experiencing pain in days or weeks.
* **Pain Symptoms 2 2** (`pain_symptoms_2_2`, `select_one`, optional): Select one additional pain symptom if necessary.
* **Medical Symptoms 2** (`medical_symptoms_2`, `select_multiple`, optional): Select additional medical symptoms if necessary.
* **Medical Symptoms 3** (`medical_symptoms_3`, `text`, optional): List any additional medical symptoms.
* **Medical Symptoms 3 2** (`medical_symptoms_3_2`, `select_multiple`, optional): Select additional medical symptoms if necessary.
