# Optometry Consent Form Template - Help Guide
## Purpose
The "Optometry Consent Form Template" is designed to gather essential information from patients before undergoing optometric procedures. This form is used to collect demographic data, medical history, and consent for specific treatments or exams.

## How To Complete This Form
1. Enter the patient's name in the "Patient Name" field.
2. Enter the patient's date of birth in the "Date Of Birth" field.
3. If applicable, provide the patient's contact information in the "Contact Information" field.
4. Describe the patient's medical history in the "Medical History" field.
5. Enter the date of consent in the "Date Of Consent" field.
6. Select the specific medical procedure(s) from the "Medical Procedure" field. Options include "Root Canals" and "Other" (choose "Other" for custom procedures not listed).
7. If selecting "Other," provide a brief description in the "Specify Other" field.
8. List any allergies in the "Allergies" field.
9. List any medications the patient is currently taking in the "Medications" field.
10. If selecting "Other" for the medical procedure, provide a description of the procedure in the "Specify Other" field.

## Field-by-Field Explanation
- **Patient Name** (`patient_name`, text, required): Enter the patient's full name.
- **Date Of Birth** (`patient_dob`, date, required): Enter the patient's date of birth in YYYY-MM-DD format.
- **Contact Information** (`contact_info_prophets`, text, optional): If applicable, provide the patient's contact information.
- **Medical History** (`medical_history`, note, optional): Describe the patient's medical history.
- **Date Of Consent** (`consent_date`, date, required): Enter the date the patient provided consent for the procedure.
- **Medical Procedure** (`medical_procedure`, select_one, optional): Select the type of optometric procedure(s) to be performed, such as "Root Canals" or "Other" for custom procedures.
- **Specify Other** (`medical_procedure_other`, text, optional): If "Other" was selected for the medical procedure, briefly describe the type of procedure.
- **Allergies** (`allergies`, text, optional): List any allergies or sensitivities the patient has.
- **Medications** (`medications`, text, optional): List any medications the patient is currently taking.
- **Specify Other** (`medical_procedure_other_description`, text, optional): If "Other" was selected for the medical procedure, describe the specific details of the procedure.
- **Medical Procedure 2** (`medical_procedure_2`, select_one, optional): Select any additional optometric procedures to be performed, such as "Root Canals" or "Other" for custom procedures.
- **ChartInstance** (`medical_procedure_2`, select_one, optional): Another option for "Medical Procedure 2" to select, not clearly defined in the form schema.

Note: The "ChartInstance" option seems to be a duplicate or unclear in the schema.
