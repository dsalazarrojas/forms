# Long Term Care Planning Registration - Help Guide
## Purpose
The Long Term Care Planning Registration form is used to collect information for the Long Term Care Planning process, which helps determine the appropriate level of care required for a patient.

## How To Complete This Form
To complete this form, simply follow these steps:

1. Enter the patient's information on page 1.
2. Select the care coordinator for the patient on page 2.
3. Enter the consultation date and follow-up date on pages 3 and 4.
4. Choose the care level for the patient on page 5.
5. Optionally, enter a phone number and email address on pages 6 and 7.
6. Add any additional notes about the patient on page 8.
7. Enter the name and title of the person submitting the form on page 9.
8. Finally, enter the submission date on page 10.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, text, required: false): Enter the patient's information, including their name, date of birth, and any other relevant details.
* **Care Coordinator** (`care_coordinator`, select_one, required: false): Select the care coordinator responsible for the patient's care. This will help ensure that the patient receives the right level of care.
* **Consultation Date** (`consultation_date`, date, required: false): Enter the date of the consultation with the patient.
* **Follow-up Date** (`follow_up_date`, date, required: false): Enter the date for the follow-up appointment with the patient.
* **Care Level** (`care_level`, select_one, required: false): Choose the level of care required for the patient, based on their needs and condition.
* **Phone Number** (`phone_number`, text, required: false): Enter the patient's phone number, so they can be reached for follow-up and care coordination.
* **Email** (`email`, email, required: false): Enter the patient's email address, so they can receive important updates and care instructions.
* **Notes** (`notes`, note, required: false): Add any additional notes about the patient's care and condition.
* **Submitted By** (`submitted_by`, text, required: false): Enter the name and title of the person submitting the form, for tracking and accountability.
* **Submission Date** (`submission_date`, date, required: false): Enter the date and time the form was submitted, for record-keeping and tracking.
