# Patient Progress Report - Help Guide
## Purpose
This form is designed to help physicians report on the progress of their patients, gathering key information about their medical status, treatment plans, and next steps.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the patient's file and update the form with the current information.
2. Answer each section of the form based on the patient's current status and circumstances.

## Field-by-Field Explanation
* **Patient Info** (`patient_info`, text, optional): Enter the patient's name, date of birth, and any other relevant identifying information.
* **Current Conditions** (`current_conditions`, select_multiple, optional): Check all conditions that apply to the patient's current status (e.g., 'Yes' for each condition).
* **Medications** (`medications`, text, optional): List any medications the patient is currently taking.
* **Medical History** (`medical_history`, select_one, optional): Check 'Yes' if the patient has a significant medical history (e.g., previous conditions, surgeries, etc.).
* **Social History** (`social_history`, text, optional): Describe the patient's social history, including family, work, and personal relationships.
* **Family History** (`family_history`, text, optional): Provide information about the patient's family medical history (e.g., genetic conditions, medical conditions in immediate family members, etc.).
* **Allergies** (`allergies`, select_multiple, optional): Check all allergies that apply to the patient (e.g., medications, foods, etc.).
* **Medical Notes** (`medical_notes`, note, optional): Add any additional notes or comments about the patient's condition.
* **Lab Results** (`lab_results`, select_multiple, optional): Check all lab results that are relevant to the patient's current status (e.g., test results, imaging studies, etc.).
* **Treatment Plan** (`treatment_plan`, text, optional): Outline the patient's treatment plan and next steps.
* **Next Steps** (`next_steps`, text, optional): Describe the next actions or appointments scheduled for the patient.
* **Review Date** (`review_date`, date, optional): Enter the date of the last review.
* **Review Time** (`review_time`, time, optional): Enter the time of the last review.
* **Physician Signature** (`physician_signature`, select_one, optional): Check 'Yes' if the form has been reviewed and signed by a physician.
