# Prior Authorization Form - Help Guide
## Purpose
The Prior Authorization Form is used by healthcare providers to request pre-authorization for medical procedures or medications for their patients. This form helps the healthcare team to review and evaluate the request and make informed decisions about patient care.

## How To Complete This Form
To complete this form, follow these steps:

1.  **Page 1 - Patient Information**: Enter the patient's basic details such as name, address, contact number, and date of birth.
2.  **Medication Information**: Enter the medication information, including the medication name, dosage, and start date.
3.  **Coverage Status**: Select the relevant status from the options: Pre-authorization, No coverage, or Coverage pending.
4.  **Procedure Information**: Enter the procedure information, including the procedure name, date, and location.

## Field-by-Field Explanation

*   **Patient Information** (`patient_info`, `text`, required: false):
    Enter the patient's full name, address, contact number, and date of birth in the format "MM/DD/YYYY".
*   **Medication Information** (`medication_info`, `text`, required: false):
    Enter the name of the medication, dosage, and start date. This field helps the healthcare team to understand the patient's medication regimen.
*   **Coverage Status** (`coverage_status`, `select_one`, required: false):
    Select the relevant status from the options:
    -   Pre-authorization: The patient has coverage for the medication/procedure.
    -   No coverage: The patient does not have coverage for the medication/procedure.
    -   Coverage pending: The patient's coverage status is pending.
*   **Procedure Information** (`procedure_info`, `text`, required: false):
    Enter the name of the procedure, date, and location. This field helps the healthcare team to understand the patient's treatment plan.

## Tips

- Make sure to fill out all fields accurately to ensure proper processing of the request.
- If a field is marked as optional, provide the information when possible to ensure thorough review of the request.
- If you have any questions or concerns about the form, contact your healthcare team for assistance.
