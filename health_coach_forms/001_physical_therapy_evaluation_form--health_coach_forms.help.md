# physical_therapy_evaluation_form - Help Guide
## Purpose
The physical therapy evaluation form is used to gather information from patients about their medical history, physical condition, and treatment needs.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's name.
2. Enter the patient's date of birth.
3. Provide the patient's contact number.
4. Describe the patient's medical history.
5. Explain the patient's chief complaint.
6. Choose the patient's physical condition from the options provided.
7. Enter the patient's physical therapy diagnosis.
8. Outline the patient's treatment plan.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth in the format `YYYY-MM-DD`.
* **Contact Number** (`contact_number`, text, required): Enter the patient's contact number, which can be a phone number or email address.
* **Medical History** (`medical_history`, text, required): Describe the patient's medical history, including any previous injuries or illnesses.
* **Chief Complaint** (`chief_complaint`, text, required): Explain the patient's primary concern or issue.
* **Physical Condition** (`physical_condition`, select_one, required): Choose from the options:
	+ Normal
	+ Fair
	+ Poor
* **Physical Therapy Diagnosis** (`physical_therapy_diagnosis`, text, required): Enter a diagnosis or assessment of the patient's physical condition.
* **Treatment Plan** (`treatment_plan`, text, required): Outline the recommended treatment plan for the patient.
* **Triage Information** (Note: not explicitly defined in the YAML, this field was not included in the help guide)
