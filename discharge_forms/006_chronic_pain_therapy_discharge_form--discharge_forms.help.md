# Chronic Pain Therapy Discharge Form - Help Guide
## Purpose
This form is used to collect information about a patient's discharge from chronic pain therapy, including their personal details, treatment summary, treatment outcomes, medications, and discharge instructions. This form helps healthcare providers track and document a patient's progress and ensure a smooth transition to post-treatment care.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in the patient's personal details, including name, medical record number, date of birth, discharge date, and admission date.
2. Select the primary pain diagnosis and treatment modalities received during therapy.
3. Report the patient's pain level at admission and discharge, as well as their functional improvement, mobility status, and tolerance for activities of daily living.
4. List any prescribed medications at discharge and any medication changes made during treatment.
5. Provide discharge instructions, including a home exercise program, activity restrictions, lifestyle recommendations, and follow-up appointment details.
6. Identify any safety precautions and emergency instructions.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Medical Record Number** (`medical_record_number`, text, required): Enter the patient's medical record number.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth.
* **Discharge Date** (`discharge_date`, date, required): Enter the date of discharge.
* **Admission Date** (`admission_date`, date, required): Enter the date of admission.
* **Primary Pain Diagnosis** (`primary_diagnosis`, text, required): Select the primary pain diagnosis.
* **Treatment Modalities Received** (`treatment_modalities`, select_multiple, required): Select all applicable treatment modalities, such as physical therapy, occupational therapy, psychological counseling, medication management, injection therapy, exercise program, relaxation training, and pain education.
* **Pain Level at Admission** (`pain_level_at_admission`, number, required): Report the patient's pain level at admission on a scale of 0-10.
* **Pain Level at Discharge** (`pain_level_at_discharge`, number, required): Report the patient's pain level at discharge on a scale of 0-10.
* **Functional Improvement** (`functional_improvement`, select_one, required): Report the patient's functional improvement during therapy, with options for significant improvement, moderate improvement, minimal improvement, no change, or decline.
* **Mobility Status** (`mobility_status`, select_one, required): Report the patient's mobility status at discharge, with options for independent, requires minimal assistance, requires moderate assistance, requires maximum assistance, or bedbound.
* **Tolerance for Activities of Daily Living** (`activities_tolerance`, select_one, required): Report the patient's tolerance for activities of daily living, with options for fully independent, mostly independent with modifications, requires assistance, or requires significant assistance.
* **List Prescribed Medications** (`prescribed_medications`, text, required): List the patient's prescribed medications at discharge, including name, dosage, frequency, and instructions.
* **Medication Changes** (`medication_changes`, text, required): Report any medication changes made during treatment.
* **Home Exercise Program** (`home_exercise_program`, select_one, required): Report whether the patient was given a home exercise program, with options for yes or no.
* **Activity Restrictions or Limitations** (`activity_restrictions`, text, required): Report any activity restrictions or limitations.
* **Lifestyle Recommendations** (`lifestyle_recommendations`, text, required): Report any lifestyle recommendations, such as diet, sleep, activity, stress management, etc.
* **Follow-up Appointments Scheduled** (`follow_up_appointments`, select_one, required): Report whether follow-up appointments are scheduled, with options for yes or no.
* **Follow-up Appointment Details** (`follow_up_details`, text, required): Report follow-up appointment details, including provider, specialty, recommended date/timeframe.
* **Precautions** (`precautions`, text, required): Report any precautions or safety instructions.
* **Emergency Instructions** (`emergency_instructions`, text, required): Report emergency contact instructions, including when and how to seek emergency care.
* **List of Discharge Instructions** (`activity_restrictions`, text, required): List any additional discharge instructions, including any activity restrictions or limitations, and any lifestyle recommendations.
* **Follow-up Instructions** (`lifestyle_recommendations`, text, required): Report any follow-up instructions, including any additional lifestyle recommendations.
