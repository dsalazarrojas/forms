# Medicine Assessment Form - Help Guide
## Purpose
The Medicine Assessment Form is a tool designed to gather information about a patient's medical history, current medications, and potential side effects. It is meant to be completed by healthcare professionals or medical students to assess a patient's medical condition.

## How To Complete This Form
- Start by filling out the "Patient Information" page, which includes fields for the patient's name, address, phone number, and other basic contact information.
- Proceed to the "Medical History" page, where you will document the patient's past medical conditions and allergies.
- On the "Medication Schedules" page, select all the patient's current medications, including the dosage, frequency, start and end dates, and any instructions provided.
- Move on to the "Current Medications" page, where you will list the patient's current medications in detail.
- Finally, on the "Medication Side Effects" page, document any side effects the patient has experienced due to their medications.

## Field-by-Field Explanation
* **Patient Information** (`patient_information`, text, required: false): This page is for entering the patient's basic contact information, such as name, address, and phone number.
* **Medical History** (`medical_history`, text, required: false): Document the patient's past medical conditions and allergies.
* **Medication Schedules** (`medication_schedules`, select_multiple, required: false): List the patient's current medications, including dosage, frequency, start and end dates, and any instructions provided.
  * Select all medications that apply.
* **Current Medications** (`current_medications`, text, required: false): List the patient's current medications in detail.
* **Medication Side Effects** (`medication_side_effects`, text, required: false): Document any side effects the patient has experienced due to their medications.
