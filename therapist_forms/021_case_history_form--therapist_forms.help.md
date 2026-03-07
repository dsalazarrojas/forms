<thinking>
This form is used to collect comprehensive patient history, including demographic information, chief complaint, medical history, and mental status examination. The purpose of the form is to gather accurate and detailed information about the patient's medical and psychological condition, which will be used to guide treatment planning and decision-making. This information will be reviewed and evaluated by the treating clinician to ensure that the patient receives appropriate care and treatment. Please note that some fields are marked as "required" and are essential for accurate diagnosis and treatment planning. Please ensure that all required fields are filled in accurately and completely. If any fields are marked as "optional", please fill them out if you have relevant information. Please do not duplicate information in any of the fields, as this can lead to confusion and inaccuracy.
</thinking>

# Case History Form - Help Guide
## Purpose
The Case History Form is a comprehensive document used to gather information about a patient's medical and mental health history. This form is used to guide treatment planning and decision-making by the clinician.

## How To Complete This Form
1. Start by filling out the demographic information, including the patient's name, ID number, date of birth, and age.
2. Next, fill out the medical and mental health history sections, including the chief complaint, history of present illness, and previous mental health diagnoses.
3. Be sure to accurately report any allergies, past medical diagnoses, and previous hospitalizations.
4. Complete the substance use and lifestyle sections, including tobacco use, alcohol use, and recreational drug use.
5. Describe the patient's living situation and support system.
6. Evaluate the patient's mental status examination, including their appearance, behavior, speech, mood, and emotional state.
7. Complete the preliminary diagnosis and treatment plan sections.
8. Finally, sign and date the form with your name and title as the treating clinician.

## Field-by-Field Explanation
* **Patient Full Name** (`patient_name`, text, required): Enter the patient's full legal name.
* **Patient ID Number** (`patient_id`, text, required): Enter the patient's medical record number.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth.
* **Current Age** (`age`, number, required): Enter the patient's current age.
* **Gender** (`gender`, select_one, required): Select the patient's gender identity.
* **Interview Date** (`interview_date`, date, required): Enter the date of the history intake.
* **Marital Status** (`marital_status`, select_one, required): Select the patient's current marital status.
* **Highest Education Level** (`education_level`, select_one, required): Select the patient's highest level of education completed.
* **Current Occupation** (`occupation`, text, optional): Enter the patient's current occupation.
* **Employment Status** (`employment_status`, select_one, required): Select the patient's employment status.
* **Chief Complaint** (`chief_complaint`, text, required): Describe the patient's primary reason for visit.
* **History of Present Illness** (`present_illness`, text, required): Describe the patient's current medical condition in detail.
* **When Did Symptoms Begin** (`symptom_onset`, select_one, required): Select the onset timing of the patient's symptoms.
* **Current Symptom Severity** (`symptom_severity`, select_one, required): Select the impact level of the patient's symptoms.
* **Past Psychiatric History** (`past_psychiatric`, note, optional): Enter the patient's past mental health care history.
* **Have You Had Therapy Before** (`previous_therapy`, select_one, required): Select whether the patient has had therapy before.
* **Previous Mental Health Diagnoses** (`previous_diagnoses`, select_multiple, optional): Select any previous mental health diagnoses.
* **Previous Psychiatric Hospitalizations** (`previous_hospitalizations`, select_one, required): Select the number of previous psychiatric hospitalizations.
* **Current Psychiatric Medications** (`current_medications`, text, optional): List the patient's current psychiatric medications.
* **Past Medical History** (`past_medical`, note, optional): Enter the patient's past medical history.
* **Current Medical Conditions** (`medical_conditions`, select_multiple, required): Select any current medical conditions the patient has.
* **Current Medical Medications** (`current_medications_medical`, text, optional): List the patient's current medical medications.
* **Allergies** (`allergies`, text, required): Enter any medication or other allergies the patient has.
* **Family Psychiatric History** (`family_history`, select_multiple, required): Select any mental health history in the patient's family.
* **Social History** (`social_history`, note, optional): Enter the patient's lifestyle factors.
* **Tobacco Use** (`tobacco_use`, select_one, required): Select the patient's smoking status.
* **Alcohol Use** (`alcohol_use`, select_one, required): Select the patient's drinking patterns.
* **Recreational Drug Use** (`drug_use`, select_one, required): Select the patient's recreational drug use.
* **Support System** (`support_system`, select_one, required): Select the patient's level of social support.
* **Living Situation** (`living_situation`, select_one, required): Select the patient's current housing situation.
* **Risk Assessment** (`risk_assessment`, note, optional): Enter the patient's risk assessment.
* **Current Suicidal Thoughts** (`suicidal_ideation`, select_one, required): Select whether the patient has passive or active suicidal thoughts.
* **Current Homicidal Thoughts** (`homicidal_ideation`, select_one, required): Select whether the patient has homicidal thoughts.
* **History of Self-Harm** (`self_harm`, select_one, required): Select whether the patient has a history of self-harm.
* **History of Trauma** (`trauma_history`, select_one, required): Select the patient's traumatic experiences.
* **Mental Status Examination** (`mental_status`, note, optional): Enter the patient's mental status examination.
* **Appearance** (`appearance`, text, required): Describe the patient's appearance.
* **Behavior** (`behavior`, text, required): Describe the patient's behavior.
* **Speech** (`speech`, select_one, required): Select the patient's speech characteristics.
* **Mood** (`mood`, text, required): Describe the patient's reported mood.
* **Emotional State** (`affect`, select_one, required): Select the patient's emotional state.
* **Thought Process** (`thought_process`, select_one, required): Select the patient's thinking patterns.
* **Insight** (`insight`, select_one, required): Select the patient's level of self-awareness.
* **Judgment** (`judgment`, select_one, required): Select the patient's decision-making ability.
* **Preliminary Diagnosis** (`diagnosis`, text, optional): Enter the preliminary diagnosis.
* **Initial Treatment Plan** (`treatment_plan`, text, required): Enter the recommended treatment plan.
* **Therapist Name** (`therapist_name`, text, required): Enter the clinician's name.
* **Therapist Signature Date** (`therapist_signature_date`, date, required): Enter the date of completion.
