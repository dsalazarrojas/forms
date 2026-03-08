# Consultation Form 2 - Help Guide
## Purpose
This form is used to collect patient information and medical history for a consultation.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the patient's personal details, including their name and date of birth.
2. Enter the patient's presenting complaint, which is the primary reason for the consultation.
3. Provide a brief medical history summary, including any key medical conditions or allergies.
4. List any current medications and dosages.
5. Identify any allergies the patient has.
6. Confirm consent for treatment.
7. Add any clinician notes, which can include findings and plans for the patient's care.

## Field-by-Field Explanation

### Patient name
**Patient name** (`patient_name`, `text`, required): Enter the patient's full legal name.

### Date of birth
**Date of birth** (`date_of_birth`, `date`, required): Enter the patient's date of birth in the format MM/DD/YYYY.

### Presenting complaint
**Presenting complaint** (`presenting_complaint`, `text`, required): Enter the primary reason for the consultation.

### Medical history summary
**Medical history summary** (`medical_history_summary`, `text`, required): Provide a brief summary of the patient's key medical history.

### Current medications
**Current medications** (`current_medications`, `text`, optional): List the patient's current medications and dosages.

### Allergies
**Allergies** (`allergies`, `text`, optional): List the patient's known allergies, including drug allergies.

### Consent for treatment
**Consent for treatment** (`consent_for_treatment`, `select_one`, required): Confirm consent for assessment and treatment. Select 'True' to indicate consent.

### Clinician notes
**Clinician notes** (`clinician_notes`, `text`, optional): Enter any notes from the clinician, including findings and plans for the patient's care.

### Tips
- Please ensure the patient's information is accurate and up-to-date.
- Review and update the form as needed.
- Store the form securely and in accordance with HIPAA regulations.
