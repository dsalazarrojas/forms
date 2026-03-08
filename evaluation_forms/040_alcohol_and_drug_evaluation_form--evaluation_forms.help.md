<thinking>...</thinking>

# Alcohol And Drug Evaluation Form - Help Guide

## Purpose
This form is designed to collect essential information about a patient's substance use history, psychosocial factors, and clinical evaluation. The form is used to assess a patient's risk level and make recommendations for the level of care required.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the patient's identifying information, including their patient ID, date of evaluation, and referral source.
2. Provide the patient's substance use history, including their primary substance of use, frequency of use, and age of first significant use.
3. Answer questions about the patient's psychosocial factors, including their history of withdrawal symptoms, number of previous treatment episodes, and co-occurring mental health diagnoses.
4. Evaluate the patient's clinical status, including their severity index score and recommended level of care.
5. Finally, confirm that the evaluation was conducted following HIPAA and clinical standards.

## Field-by-Field Explanation

* **Patient Identification Number** (`patient_id`, text, required): Enter the patient's unique identifier number.
* **Date of Evaluation** (`date_of_evaluation`, date, required): Enter the date on which the evaluation was conducted.
* **Referral Source** (`referral_source`, text, required): Select the source of the referral, e.g. Court, Employer, Self-referral.
* **Primary Substance of Use** (`primary_substance`, text, required): Enter the primary substance being used.
* **Frequency of Use (Primary)** (`frequency_of_use`, select_one, required): Select how often the primary substance is used (e.g. Daily, Several times a week, Weekly, etc.).
* **Secondary Substances Used** (`secondary_substances`, select_multiple, required): Select any secondary substances used (e.g. Alcohol, Cannabis, Opioids, etc.).
* **Age of First Significant Use** (`age_of_first_use`, number, required): Enter the age at which the primary substance was first used.
* **History of Withdrawal Symptoms?** (`withdrawal_history`, select_one, required): Answer yes or no to whether the patient has experienced withdrawal symptoms (e.g. Yes (Severe), Yes (Moderate/Mild), False).
* **Number of Previous Treatment Episodes** (`previous_treatment_count`, number, required): Enter the number of previous treatment episodes.
* **Co-occurring Mental Health Diagnoses** (`mental_health_history`, text, required): Enter any co-occurring mental health diagnoses.
* **Current Living Stability** (`current_living_situation`, select_one, required): Select the patient's current living situation (e.g. Stable Housing, Unstable/Transitional, Homeless, etc.).
* **Substance-related Legal Incidents** (`legal_history_related`, text, required): Enter any substance-related legal incidents (e.g. DUI, possession charges).
* **Severity Index Score (Internal Scale)** (`severity_index_score`, number, required): Enter a score from 0 (Low) to 10 (Critical) indicating the severity of the patient's condition.
* **Recommended Level of Care** (`recommendation_level_care`, select_one, required): Select the recommended level of care for the patient (e.g. Outpatient Counseling, Intensive Outpatient (IOP), Residential/Inpatient, etc.).
* **Evaluator Full Name and Credentials** (`evaluator_signature`, text, required): Enter the full name and credentials of the evaluator.
* **I confirm this evaluation was conducted following HIPAA and clinical standards** (`confidentially_agreement`, select_one, required): Select to confirm that the evaluation was conducted following HIPAA and clinical standards.

Note: Please complete the form with care and attention to detail, as the information collected will be used to inform recommendations for the patient's level of care.
