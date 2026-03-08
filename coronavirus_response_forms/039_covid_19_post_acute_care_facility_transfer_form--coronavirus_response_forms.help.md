# COVID 19 Post Acute Care Facility Transfer Form - Help Guide
## Purpose
This form is used to transfer patients from one facility to another during the COVID-19 pandemic, ensuring a smooth transition of care.

## How To Complete This Form
To complete this form, follow the steps below:

1.  **Section 1: Patient Information**
    *   Enter the patient's **Patient Name** in the provided field.
    *   Enter the patient's **Medical Record Number** in the provided field.
    *   Enter the patient's **Date of Birth** in the provided format (MM/DD/YYYY).
    *   You may optionally enter the patient's **Age** if known.
    *   Enter the patient's **Contact Phone Number** if available.
2.  **Section 2: Transfer Details**
    *   Enter the **Sending Facility Name** where the patient is currently being treated.
    *   Enter the **Receiving Facility Name** where the patient will be transferred to.
    *   Enter the **Transfer Date** in the provided format (MM/DD/YYYY).
    *   Select the **Reason for Transfer** from the provided options.
3.  **Section 3: COVID-19 Status**
    *   Select the patient's current **COVID-19 Diagnosis Status** from the provided options.
    *   If applicable, enter the **Last COVID-19 Test Date** and select the **Last Test Result** from the provided options.
4.  **Section 4: Isolation Precautions**
    *   Select whether **Isolation Precautions** are required for the patient.
5.  **Section 5: Medical Summary**
    *   Enter any current **Medications** the patient is taking.
    *   List any **Allergies** the patient has.
    *   Describe any **Recent Medical Procedures or Treatments** the patient has had.
    *   Enter a **Hospital Discharge Summary** if applicable.
6.  **Section 6: Receiving Facility Instructions**
    *   Enter any **Special Care Instructions** for the receiving facility.
    *   List any **Follow-up Appointments** scheduled for the patient.
7.  **Section 7: Authorization and Sign-off**
    *   Enter the name of the **Attending Physician** authorizing the transfer.
    *   Enter the **Transfer Completion Date** in the provided format (MM/DD/YYYY).

## Field-by-Field Explanation
*   **Patient Name** (`patient_name`, text, **required**): Enter the patient's full name.
*   **Medical Record Number** (`medical_record_number`, text, **required**): Enter the patient's medical record number.
*   **Date of Birth** (`date_of_birth`, date, **required**): Enter the patient's date of birth in the format MM/DD/YYYY.
*   **Age** (`patient_age`, number, **optional**): Enter the patient's age if known.
*   **Contact Phone Number** (`contact_phone`, text, **optional**): Enter the patient's contact phone number.
*   **Sending Facility Name** (`sending_facility`, text, **required**): Enter the name of the facility where the patient is currently being treated.
*   **Receiving Facility Name** (`receiving_facility`, text, **required**): Enter the name of the facility where the patient will be transferred to.
*   **Transfer Date** (`transfer_date`, date, **required**): Enter the date of the transfer in the format MM/DD/YYYY.
*   **Reason for Transfer** (`transfer_reason`, select_one, **required**): Select the reason for the patient's transfer from the provided options.
*   **COVID-19 Diagnosis Status** (`covid_diagnosis`, select_one, **required**): Select the patient's current COVID-19 diagnosis status from the provided options.
*   **Last COVID-19 Test Date** (`test_date`, date, **optional**): Enter the date of the last COVID-19 test in the format MM/DD/YYYY.
*   **Last Test Result** (`test_result`, select_one, **optional**): Select the result of the last COVID-19 test from the provided options.
*   **Isolation Precautions Required** (`isolation_required`, select_one, **required**): Select whether isolation precautions are required for the patient.
*   **Current Medications** (`current_medications`, text, **optional**): Enter any current medications the patient is taking.
*   **Allergies** (`allergies`, text, **optional**): List any allergies the patient has.
*   **Recent Medical Procedures or Treatments** (`recent_procedures`, text, **optional**): Describe any recent medical procedures or treatments the patient has had.
*   **Hospital Discharge Summary** (`discharge_summary`, text, **optional**): Enter a hospital discharge summary if applicable.
*   **Special Care Instructions** (`special_care`, text, **optional**): Enter any special care instructions for the receiving facility.
*   **Follow-up Appointments** (`follow_up`, text, **optional**): List any follow-up appointments scheduled for the patient.
*   **Attending Physician Name** (`attending_physician`, text, **required**): Enter the name of the attending physician authorizing the transfer.
*   **Transfer Completion Date** (`transfer_date_completed`, date, **required**): Enter the date the transfer was completed in the format MM/DD/YYYY.
