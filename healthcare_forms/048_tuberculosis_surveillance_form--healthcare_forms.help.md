<thinking>

This form is used to track and monitor tuberculosis (TB) cases. It is designed to collect essential information on each case, including case ID, patient details, case type, symptoms, treatment status, treatment date, case closed date, follow-up frequency, and follow-up frequency. This guide is intended for healthcare professionals who need to fill out this form as part of their routine duties.

## tuberculosis_surveillance_form - Help Guide
## Purpose
The "tuberculosis_surveillance_form" is a crucial tool for healthcare professionals to monitor and track tuberculosis cases. It helps to standardize and systematize the process of collecting and managing information about patients affected by TB.

## How To Complete This Form

1. **Case Id (1)**: Enter the unique ID assigned to the case.
2. **Patient Name (2)**: Provide the name of the patient affected by TB.
3. **Case Type (3)**: Select 'Yes' if the case is related to TB, and 'No' otherwise.
4. **Symptoms (4)**: List the symptoms displayed by the patient.
5. **Treatment Status (5)**: Select 'Active' if the patient is under treatment, and 'Inactive' otherwise.
6. **Treatment Date (6)**: Enter the date when the patient started receiving treatment.
7. **Case Closed Date (7)**: Enter the date when the patient's case was closed.
8. **Follow-up Frequency (8)**: Select all frequencies at which you will be following up with the patient.
9. **Follow-up Frequency (9)**: If you follow-up with the patient, select 'Yes' here.

## Field-by-Field Explanation
* **Case Id (1)** (`case_id`, number, required: false): This is the unique identifier for the case.
* **Patient Name (2)** (`patient_name`, text, required: false): This is the name of the patient affected by TB.
* **Case Type (3)** (`case_type`, select_one, required: false): This field determines if the case is related to TB or not.
* **Symptoms (4)** (`symptoms`, text, required: false): List all the symptoms displayed by the patient.
* **Treatment Status (5)** (`treatment_status`, select_one, required: false): This field indicates if the patient is under active treatment or not.
* **Treatment Date (6)** (`treatment_date`, date, required: false): Enter the date when the patient started receiving treatment.
* **Case Closed Date (7)** (`case_closed_date`, date, required: false): Enter the date when the patient's case was closed.
* **Follow-up Frequency (8)** (`follow_up_frequency`, select_multiple, required: false): Select all frequencies at which you will follow up with the patient.
* **Follow-up Frequency (9)** (`follow_up_frequency_frequency`, select_one, required: false): If you follow-up with the patient, select 'Yes' here.
