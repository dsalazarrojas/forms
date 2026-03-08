# Medication Dosage Information Request Form - Help Guide
## Purpose
The Medication Dosage Information Request Form is designed to collect information about a patient's medication regimen. This form is used to request or provide information about a patient's medication dosage, including how often the medication is taken, the unit of the medication, and any specific instructions.

## How To Complete This Form
1. Enter your name and date of birth to identify the patient.
2. Select the name of the medication being taken.
3. Indicate how often the medication is taken (e.g., Once a day, Twice a day, etc.).
4. Specify the unit of the medication (e.g., mg, mL, etc.).
5. Enter any specific instructions for the medication dosage.
6. Select the pharmacy where the medication is being dispensed (e.g., Pharmacy A, Pharmacy B, etc.).
7. Select the doctor who prescribed the medication (e.g., Dr. Smith, Dr. Jones, etc.).
8. Enter the date the form was submitted.
9. Enter your name and contact information to identify yourself as the submitter.
10. Enter any additional comments or notes about the patient's medication regimen.

## Field-by-Field Explanation
* **First name** (`first_name`, `text`, required: false): Enter the patient's first name.
* **Last name** (`last_name`, `text`, required: false): Enter the patient's last name.
* **Date of birth** (`date_of_birth`, `text`, required: false): Enter the patient's date of birth.
* **Medication name** (`medication_name`, `text`, required: false): Enter the name of the medication being taken.
* **How often** (`medication_dosage_frequency`, `select_multiple`, required: false): Select how often the medication is taken (e.g., Once a day, Twice a day, etc.).
* **Unit** (`medication_dosage_unit`, `text`, required: false): Specify the unit of the medication (e.g., mg, mL, etc.).
* **Dosage instructions** (`medication_dosage_instructions`, `text`, required: false): Enter any specific instructions for the medication dosage.
* **Which pharmacy** (`pharmacy`, `select_one`, required: false): Select the pharmacy where the medication is being dispensed (e.g., Pharmacy A, Pharmacy B, etc.).
* **Which doctor** (`doctor`, `select_one`, required: false): Select the doctor who prescribed the medication (e.g., Dr. Smith, Dr. Jones, etc.).
* **Date submitted** (`date_submitted`, `date`, required: false): Enter the date the form was submitted.
* **Submitted by** (`submitted_by`, `text`, required: false): Enter your name and contact information to identify yourself as the submitter.
* **Comments** (`comments`, `text`, required: false): Enter any additional comments or notes about the patient's medication regimen.
* **Email** (`email`, `email`, required: false): Enter your email address.
* **Phone** (`phone`, `text`, required: false): Enter your phone number.
* **Address** (`address`, `text`, required: false): Enter your address.
* **Fax** (`fax`, `text`, required: false): Enter your fax number.
* **Notes** (`notes`, `note`, required: false): Enter any additional notes about the patient's medication regimen.
