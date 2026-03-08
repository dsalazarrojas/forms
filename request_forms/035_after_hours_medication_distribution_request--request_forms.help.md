# After Hours Medication Distribution Request - Help Guide
## Purpose
This form is used to request medication distribution after hours, when the regular shift is not available. It is designed to ensure that medication is dispensed correctly and safely, even when staff who normally handle the medication are not present.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill out the requester information section, including your name, role, and contact information.
2.  Enter the patient's information, including their full name, ID number, room number, and nurse station.
3.  Specify the medication to be dispensed, including the name, strength, dosage, route of administration, and quantity required.
4.  Indicate the urgency level of the request and provide a reason for the urgency.
5.  Confirm that the prescribing physician's order has been verified.
6.  Confirm that potential drug interactions have been checked.
7.  Verify that the patient's allergies are known and documented.
8.  Specify any special handling requirements for the medication.
9.  Sign and date the form to confirm that you have reviewed and understand the medication request.

## Field-by-Field Explanation

*   **Requester Information** (`Requester Name`, `text`, `required`: `true`)
    Enter your full name as the person requesting the medication.
*   **Requester Role** (`Requester Role`, `select_one`, `required`: `true`)
    Select your role or position in the healthcare facility.
*   **License or ID Number** (`Requester License Number`, `text`, `required`: `true`)
    Enter your professional license or employee ID number.
*   **Contact Information** (`Contact`, `text`, `required`: `true`)
    Enter your phone extension or pager number for contact information.
*   **Patient Information** (`Patient Name`, `text`, `required`: `true`)
    Enter the patient's full name.
*   **Patient ID** (`Patient ID`, `text`, `required`: `true`)
    Enter the patient's hospital or medical record number.
*   **Patient Room Number** (`Patient Room Number`, `text`, `required`: `true`)
    Enter the patient's room or ward number.
*   **Patient Nurse Station** (`Patient Nurse Station`, `text`, `required`: `true`)
    Enter the nurse station responsible for the patient.
*   **Medication Name** (`Medication Name`, `text`, `required`: `true`)
    Enter the name of the medication being requested.
*   **Medication Strength** (`Medication Strength`, `text`, `required`: `true`)
    Enter the strength or concentration of the medication.
*   **Dosage Required** (`Dosage Required`, `text`, `required`: `true`)
    Enter the amount of medication to be dispensed.
*   **Route of Administration** (`Route of Administration`, `select_one`, `required`: `true`)
    Select how the medication should be administered.
*   **Quantity Requested** (`Quantity Requested`, `number`, `required`: `true`)
    Enter the number of doses or units required.
*   **Administration Schedule** (`Administration Schedule`, `text`, `required`: `true`)
    Enter when and how often the medication should be given.
*   **Urgency Level** (`Urgency Level`, `select_one`, `required`: `true`)
    Select the urgency level of the request.
*   **Reason for Urgency** (`Reason for Urgency`, `text`, `required`: `true`)
    Enter why this medication is needed urgently.
*   **Prescribing Physician** (`Prescribing Physician`, `text`, `required`: `true`)
    Enter the name of the physician who prescribed the medication.
*   **Order Date and Time** (`Order Date and Time`, `text`, `required`: `true`)
    Enter when the medication order was written.
*   **Drug Interactions Checked** (`Drug Interactions Checked`, `select_one`, `required`: `true`)
    Confirm that potential drug interactions have been checked.
*   **Patient Allergies Known** (`Patient Allergies Known`, `select_one`, `required`: `true`)
    Confirm that the patient's allergies are known and documented.
*   **Allergy Details** (`Allergy Details`, `text`, `required`: `false`)
    If allergies are known, enter the details.
*   **Special Handling Requirements** (`Special Handling Requirements`, `select_one`, `required`: `true`)
    Confirm if the medication requires special handling.
*   **Special Handling Details** (`Special Handling Details`, `text`, `required`: `false`)
    If special handling is required, enter the details.
*   **Requester Signature** (`Requester Signature`, `text`, `required`: `true`)
    Sign and date the form to confirm that you have reviewed and understood the medication request.
*   **Request Timestamp** (`Request Timestamp`, `text`, `required`: `true`)
    Enter the date and time of request submission.
*   **Pharmacist Verification** (`Pharmacist Verification`, `text`, `required`: `false`)
    To be filled by a pharmacist upon dispensing.
