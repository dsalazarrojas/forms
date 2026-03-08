# COVID 19 Testing Hospital Discharge Form - Help Guide

## Purpose
This form is for hospital administrators to document the discharge status of a patient diagnosed with COVID-19 or with a suspected exposure to the virus.

## How To Complete This Form

1.  Fill out the form completely and accurately based on the patient's information.
2.  Ensure that you have access to accurate and up-to-date information before completing the form.

## Field-by-Field Explanation

*   **Patient Full Name (1)** (`patient_name`, Text, Required): Fill in the patient's full name as shown in hospital records.
*   **Hospital Medical Record Number (2)** (`patient_id`, Text, Required): Enter the patient's unique medical record number.
*   **Date of Birth (3)** (`date_of_birth`, Date, Required): Enter the patient's date of birth.
*   **Hospital Admission Date (4)** (`admission_date`, Date, Required): Enter the date the patient was admitted.
*   **Discharge Date (5)** (`discharge_date`, Date, Required): Enter the date the patient is being released.
*   **COVID-19 Test Status (6)** (`covid_status`, Select One, Required): Select the current test result as follows:
    *   Positive: The patient has tested positive for COVID-19.
    *   Negative: The patient has tested negative for COVID-19.
    *   Inconclusive: The test results are pending or inconclusive.
*   **Most Recent COVID-19 Test Date (7)** (`covid_test_date`, Date, Required): Enter the date of the most recent test.
*   **Recommended Quarantine Period (8)** (`quarantine_period`, Select One, Required): Select the recommended quarantine period as follows:
    *   5 days: The patient should be quarantined for 5 days.
    *   10 days: The patient should be quarantined for 10 days.
    *   14 days: The patient should be quarantined for 14 days.
    *   No quarantine required: The patient does not require quarantine.
*   **Isolation Clearance Criteria Met (9)** (`isolation_clearance`, Select One, Required): Check if the isolation clearance criteria have been met.
*   **Vaccination Status at Discharge (10)** (`vaccination_status`, Select One, Optional): Select the patient's vaccination status as follows:
    *   Unvaccinated: The patient has not received the vaccine.
    *   Partially Vaccinated: The patient has received some but not all the required vaccine doses.
    *   Fully Vaccinated: The patient has received all required vaccine doses.
    *   Boosted: The patient has received a booster shot.
*   **Discharge Destination (11)** (`discharge_location`, Select One, Required): Select the patient's destination upon discharge as follows:
    *   Home: The patient is going home.
    *   Skilled Nursing Facility: The patient is going to a skilled nursing facility.
    *   Rehabilitation Center: The patient is going to a rehabilitation center.
    *   Long-term Care Facility: The patient is going to a long-term care facility.
    *   Other: Specify the destination.
*   **Contact Precautions Needed (12)** (`contact_precautions`, Select One, Required): Check if contact precautions are needed during recovery at home.
*   **Patient Symptoms at Discharge (13)** (`symptoms_at_discharge`, Select Multiple, Optional): Select all the symptoms the patient is currently experiencing. You can select multiple options.
    *   Fever
    *   Cough
    *   Shortness of breath
    *   Fatigue
    *   Loss of taste or smell
    *   None: The patient is not experiencing any symptoms.
*   **Discharge Instructions Provided (14)** (`discharge_instructions`, Select One, Required): Check if discharge instructions have been provided to the patient.
*   **Follow-up Appointment Date (15)** (`follow_up_date`, Date, Optional): Enter the date of the patient's follow-up appointment.
*   **Medications Prescribed (16)** (`medications_prescribed`, Text, Optional): Enter any medications that have been prescribed to the patient upon discharge.
*   **Attending Physician Name (17)** (`attending_physician`, Text, Required): Enter the name of the attending physician who treated the patient.
*   **Hospital Name (18)** (`hospital_name`, Text, Required): Enter the name of the discharging hospital.
*   **Patient Contact Phone (19)** (`patient_contact_phone`, Text, Required): Enter the patient's contact phone number for follow-up calls.
*   **Patient Contact Email (20)** (`patient_contact_email`, Text, Optional): Enter the patient's email address for follow-up communication.
