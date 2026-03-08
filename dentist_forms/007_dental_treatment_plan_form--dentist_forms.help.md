# Dental Treatment Plan Form - Help Guide
## Purpose
The Dental Treatment Plan Form is designed to gather information about a patient's dental treatment needs. This information will be used to create a personalized treatment plan tailored to the patient's specific needs.

## How To Complete This Form
1. Please fill out the form completely and accurately.
2. If any information is unknown or not applicable, use the available fields to provide the most accurate information possible.
3. Review the form for errors before submitting it.

## Field-by-Field Explanation

* **Patient Name** (`patient_name`, text, required: false): Please enter the patient's full name.
* **Date of Birth** (`date_of_birth`, date, required: false): Please enter the patient's date of birth in the correct format (MM/DD/YYYY).
* **Medical History** (`medical_history`, note, required: false): Please provide a brief description of the patient's medical history, including any relevant health conditions or medications.
* **Dentist** (`dentist`, select_one, required: false): Please select whether the patient has a current dentist or not.
* **Insurance Provider** (`insurance_provider`, select_one, required: false): Please select whether the patient has an insurance provider or not.
* **Treatment Plan** (`treatment_plan`, text, required: false): Please describe the patient's treatment plan, including any recommended procedures or medications.
* **Medication** (`medication`, text, required: false): Please list any medications the patient is currently taking.
* **Follow Up Appointments** (`follow_up_appointments`, number, required: false): Please enter the number of follow-up appointments scheduled.
* **Patient Insurance Details** (`patient_insurance_details`, note, required: false): Please provide any additional insurance information relevant to the patient's treatment.
* **Billing Address** (`billing_address`, text, required: false): Please enter the patient's billing address.
