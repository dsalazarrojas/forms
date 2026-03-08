<thinking>
This form is intended for healthcare professionals to assess patients with benign tumors. The purpose of this form is to gather information about the patient's medical history, symptoms, and physical examination findings to guide clinical decision-making. This form should not be used for self-reporting or diagnosis by untrained individuals. Ensure that this form is used in conjunction with professional medical expertise.

Please note that this form is designed to gather information for a specific type of assessment. If you are not a healthcare professional or if you are not assessing a patient with a benign tumor, do not use this form.

Before starting, ensure that the patient's information is accurate and up-to-date.

</thinking>

# Benign Tumors Health Assessment - Help Guide
## Purpose
The Benign Tumors Health Assessment form is used to gather information about patients with benign tumors. It is a clinical tool designed to guide healthcare professionals in assessing and managing patients with this condition.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's demographic information (Section 1: Patient Information).
2. Review the patient's medical history (Section 2: Medical History).
3. Assess the patient's current symptoms (Section 3: Current Symptoms).
4. Conduct a physical examination (Section 4: Physical Examination).
5. Review imaging and testing results (Section 5: Imaging and Testing).
6. Provide clinical assessment and recommendations (Section 6: Clinical Assessment).
7. Confirm the diagnosis and create a follow-up plan (Section 7: Follow-up Plan).

## Field-by-Field Explanation
### Section 1: Patient Information
* **Patient Name** (`patient_name`, text, required): Enter the patient's name.
* **Date of Birth** (`date_of_birth`, date, required): Enter the patient's date of birth.
* **Medical Record Number** (`medical_record_number`, text, optional): Enter the patient's medical record number.
* **Clinician Name** (`clinician_name`, text, required): Enter your name or the name of the healthcare professional performing the assessment.

### Section 2: Medical History
* **Family History of Tumors** (`family_history`, select_one, required): Confirm if the patient has a family history of tumors. Options: True, False, Unknown.
* **Details of Family History** (`family_history_details`, text, optional): Provide more information about the patient's family history of tumors.
* **Previous Benign Tumor Diagnoses** (`previous_diagnosis`, select_one, required): Confirm if the patient has a previous benign tumor diagnosis. Options: True, False.

### Section 3: Current Symptoms
* **Are You Currently Experiencing Symptoms** (`symptoms_present`, select_one, required): Confirm if the patient is currently experiencing symptoms. Options: True, False.
* **Description of Symptoms** (`symptom_description`, text, optional): Describe the patient's current symptoms.
* **Duration of Symptoms** (`symptom_duration`, select_one, optional): Select the duration of the patient's symptoms. Options: Less than 1 week, 1-4 weeks, 1-3 months, 3-6 months, 6-12 months, More than 1 year.
* **Pain Level** (`pain_level`, select_one, optional): Rate the patient's pain level. Options: No Pain, Mild (1-3), Moderate (4-6), Severe (7-8), Very Severe (9-10).

### Section 4: Physical Examination
* **Location of Tumor** (`tumor_location`, text, required): Describe the location of the tumor.
* **Estimated Tumor Size** (`tumor_size`, text, required): Estimate the size of the tumor in centimeters.
* **Tumor Consistency** (`tumor_consistency`, select_one, optional): Describe the consistency of the tumor. Options: Soft, Firm, Hard.
* **Tumor Mobility** (`mobility`, select_one, optional): Confirm if the tumor is mobile or fixed. Options: Mobile, Fixed, Partially Fixed.

### Section 5: Imaging and Testing
* **Has Imaging Been Performed** (`imaging_performed`, select_one, required): Confirm if imaging has been performed. Options: True, False, Pending.
* **Type of Imaging** (`imaging_type`, text, optional): Describe the type of imaging performed.
* **Imaging Findings** (`imaging_findings`, text, optional): Describe the imaging findings.
* **Has a Biopsy Been Performed** (`biopsy_performed`, select_one, optional): Confirm if a biopsy has been performed. Options: True, False, Pending.

### Section 6: Clinical Assessment
* **Confirmed as Benign** (`benign_confirmation`, select_one, required): Confirm the diagnosis as benign. Options: True, Likely Benign, Uncertain, Likely Malignant, Confirmed Malignant.
* **Treatment Recommendation** (`treatment_recommendation`, select_one, required): Select the treatment recommendation. Options: Watch and Wait, Surgical Removal, Medical Management, Other.
* **Follow-up Plan** (`followup_plan`, text, required): Create a follow-up plan for the patient.
