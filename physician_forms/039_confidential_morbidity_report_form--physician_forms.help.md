<thinking>
Internal reasoning to determine the form's purpose and identify potential redundancies:

The purpose of this form, "Confidential Morbidity Report Form," appears to be for healthcare providers to report morbidity (the state of being diseased) data to public health departments. This form collects personal and clinical information about patients, including their demographics, medical history, and treatment details.

Upon reviewing the form's fields, I notice that there are no obvious redundancies or fields that can be removed or combined without affecting its purpose or accuracy. Each field is designed to capture specific and unique information.

With this understanding, we will create a user-facing help guide that explains the form's purpose, how to complete it, and a field-by-field explanation.
</thinking>

# Confidential Morbidity Report Form - Help Guide
## Purpose
The purpose of this form is for healthcare providers to report morbidity data to public health departments. It collects demographic and clinical information about patients to facilitate accurate tracking and response to public health concerns.

## How To Complete This Form
1. Fill in the required fields marked with an asterisk (\*).
2. Enter the correct information for each field, and make sure to select relevant options when presented with selection fields.
3. Review the form for completeness before submitting it.
## Field-by-Field Explanation
- **Physician Full Name** (`physician_name`, text, \*): Enter your name as a healthcare provider.
- **Medical License Number** (`physician_license`, text, \*): Enter your medical license number.
- **Medical Specialty** (`specialty`, select_one, \*): Select your area of specialization (e.g., Internal Medicine, Family Medicine, etc.).
- **Facility Name** (`facility_name`, text, \*): Enter the name of the facility where you are reporting from.
- **Facility Address** (`facility_address`, text, \*): Enter the full address of the facility.
- **Facility Phone** (`facility_phone`, text): Enter the contact number of the facility.
- **Report Date** (`report_date`, date, \*): Enter the date you are submitting this report.
- **Patient Initials** (`patient_initials`, text, \*): Enter the patient's initials (first and last only).
- **Patient Date of Birth** (`patient_dob`, date, \*): Enter the patient's date of birth in MM/DD/YYYY format.
- **Patient Gender** (`patient_gender`, select_one, \*): Select the patient's gender (Male, Female, Non-Binary, Other).
- **Patient Address** (`patient_address`, text, \*): Enter the patient's full address.
- **Patient Phone** (`patient_phone`, text): Enter the patient's contact number.
- **Date of Diagnosis** (`diagnosis_date`, date, \*): Enter the date the patient was diagnosed.
- **ICD-10 Diagnosis Code** (`diagnosis_code`, text, \*): Enter the primary diagnosis code.
- **Diagnosis Description** (`diagnosis_description`, text, \*): Provide a detailed description of the diagnosis.
- **Disease Category** (`disease_category`, select_one, \*): Select the category of the disease (Infectious Disease, Chronic Disease, etc.).
- **Is This a Reportable Condition?** (`reportable_condition`, select_one, \*): Select whether this is a reportable condition (Yes Required Report, No Not Reportable, Unsure).
- **Symptom Onset Date** (`onset_date`, date): Enter the date the patient's symptoms began.
- **Was patient admitted?** (`hospitalization_required`, select_one, \*): Select whether the patient was admitted to the hospital.
- **Admission Date** (`admission_date`, date): If admitted, enter the admission date.
- **Discharge Date** (`discharge_date`, date): If discharged, enter the discharge date.
- **Patient Outcome** (`outcome`, select_one, \*): Select the patient's current status (Recovered, Recovering, Condition Stable, etc.).
- **Complications** (`complications`, text): Enter any complications or issues related to the patient's condition.
- **Treatment Provided** (`treatment_provided`, text, \*): Provide a description of the treatment provided to the patient.
- **Medications Prescribed** (`medications_prescribed`, text): List the medications prescribed to the patient.
- **Laboratory Results** (`lab_results`, text): Enter key laboratory findings.
- **Imaging Results** (`imaging_results`, text): Enter imaging results (e.g., X-ray, CT, MRI).
- **Risk Factors** (`risk_factors`, select_multiple): Select any patient risk factors (e.g., Smoking, Alcohol Use, etc.).
- **Are contacts traceable?** (`contact_tracing`, select_one, \*): Select whether contacts can be traced.
- **Is there a public health concern?** (`public_health_concern`, select_one, \*): Select whether there is a broader public health concern.
- **Additional Clinical Notes** (`additional_notes`, text): Enter any additional information or context about the patient.
- **Physician Certification** (`physician_signature`, select_one, \*): Select whether you certify this report.
- **Signature Date** (`signature_date`, date, \*): Enter the date you signed this report.
