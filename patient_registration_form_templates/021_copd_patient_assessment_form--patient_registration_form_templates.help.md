# COPD Patient Assessment Form - Help Guide
## Purpose
The COPD Patient Assessment Form is designed to gather essential information about patients with Chronic Obstructive Pulmonary Disease (COPD). This form helps healthcare professionals assess the patient's health status, symptoms, medical history, and treatment plans. Completing this form provides a comprehensive overview of the patient's condition and aids in developing an effective care plan.

## How To Complete This Form
1. Fill in the patient's demographic information (fields 1-6).
2. Answer the questions related to the patient's COPD diagnosis, symptoms, and medical history (fields 7-17).
3. Complete the fields related to the patient's treatment plans and follow-up (fields 18-21).
4. Add any additional comments or observations (fields 28 and 29).

## Field-by-Field Explanation
* **1. Patient Name** (`patient_name`, text, required): Enter the patient's full legal name.
* **2. Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in MM-DD-YYYY format.
* **3. Gender** (`gender`, select_one, required): Select the patient's gender.
* **4. Contact Phone** (`contact_phone`, text, required): Enter the patient's best contact number.
* **5. Email Address** (`email_address`, email, optional): Enter the patient's email address for appointment reminders.
* **6. Emergency Contact Name** (`emergency_contact`, text, required): Enter the emergency contact's full name.
* **7. Emergency Contact Phone** (`emergency_contact_phone`, text, required): Enter the emergency contact's phone number.
* **8. Assessment Date** (`assessment_date`, date, required): Enter the current date.
* **9. COPD Diagnosis Date** (`copd_diagnosis_date`, date, optional): Enter the date of the patient's COPD diagnosis.
* **10. COPD Stage** (`copd_stage`, select_one, optional): Select the stage of the patient's COPD (if known).
* **11. Current Symptoms** (`current_symptoms`, select_multiple, required): Select all the symptoms the patient is currently experiencing (e.g. Shortness of breath, Chronic cough, etc.).
* **12. Symptom Severity** (`symptom_severity`, select_one, required): Select the overall severity of the patient's symptoms.
* **13. Smoking History** (`smoking_history`, select_one, required): Select the patient's smoking status.
* **14. Pack Years** (`pack_years`, number, optional): Enter the number of pack-years the patient has smoked (if applicable).
* **15. Current Respiratory Medications** (`current_medications`, text, required): List all the patient's current respiratory medications.
* **16. Oxygen Therapy** (`oxygen_therapy`, select_one, required): Select whether the patient uses supplemental oxygen.
* **17. Hospitalizations Past Year** (`hospitalizations_past_year`, number, required): Enter the number of hospitalizations the patient had for respiratory issues in the past year.
* **18. Exacerbations Past Year** (`exacerbations_past_year`, number, required): Enter the number of exacerbations the patient experienced in the past year.
* **19. Pulmonary Rehabilitation** (`pulmonary_rehab`, select_one, required): Select whether the patient has completed or is currently enrolled in pulmonary rehabilitation.
* **20. Activity Limitation** (`activity_limitation`, select_one, required): Select the level of activity limitation caused by COPD.
* **21. mMRC Dyspnea Scale** (`mMRC_dyspnea_scale`, select_one, required): Select the breathlessness grade according to the mMRC scale.
* **22. Comorbidities** (`comorbidities`, select_multiple, required): Select any other health conditions the patient has.
* **23. Inhaler Technique** (`inhaler_technique`, select_one, optional): Select the patient's inhaler technique (assessed by a clinician).
* **24. Vaccination Status** (`vaccination_status`, select_multiple, required): Select the patient's vaccination status for flu, pneumonia, and COVID-19 vaccines.
* **25. COPD Action Plan** (`action_plan`, select_one, required): Select whether the patient has a written action plan for COPD management.
* **26. Quality of Life Impact** (`quality_of_life_impact`, text, optional): Enter how COPD affects the patient's daily life.
* **27. Patient Goals** (`patient_goals`, text, optional): Enter the patient's goals and expectations.
* **28. Clinician Notes** (`clinician_notes`, text, optional): Add any observations or comments from the clinician.
* **29. Follow-up Needed** (`follow_up_needed`, select_one, required): Select when the patient needs follow-up (e.g. within 1 week).
* **30. Patient Signature** (`patient_signature`, text, required): Sign the form with the patient's full name.
* **31. Clinician Signature** (`clinician_signature`, text, required): Sign the form with your full name.
