# Psychiatric Discharge Form - Help Guide

## Purpose
The Psychiatric Discharge Form is a document used to document a patient's treatment outcome and follow-up plans after they have been discharged from a psychiatric care facility.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the patient's medical history and treatment plan to ensure that all relevant information is documented.
2. Complete the patient identification section with the patient's name, date of birth, and contact information.
3. Document the patient's diagnosis and treatment outcome, selecting the appropriate option from the provided list.
4. Specify any medication treatment the patient is currently taking, selecting all relevant options.
5. Record any follow-up information, including the date and time of the next appointment and the name of the next provider.
6. Provide discharge comments, if necessary, to communicate any important information to the patient or their family.
7. Sign the discharge signature section, indicating that you are the provider who is discharging the patient.
8. Confirm the follow-up instructions and contact information for the patient.

## Field-by-Field Explanation

* **Patient Identification** (`patient_identification`, text, required: false)
    * Enter the patient's name, date of birth, and contact information to ensure that we have a clear understanding of who the patient is and how to reach them.
* **Diagnosis** (`diagnosis`, text, required: false)
    * Document the patient's diagnosis to ensure that we have a clear understanding of their condition.
* **Treatment Outcome** (`treatment_outcome`, select_one, required: false)
    * Select the option that best describes the patient's treatment outcome, such as Improved, Partially Improved, Stable, or Worse.
* **Medication Treatment** (`medication_treatment`, select_multiple, required: true)
    * Select all relevant medication options that the patient is currently taking, such as Antipsychotic Medication, Antidepressant Medication, or Mood Stabilizer.
* **Follow-up Information** (`follow_up_info`, text, required: false)
    * Record any important follow-up information, such as the date and time of the next appointment and the name of the next provider.
* **Next Appointment** (`next_appointment`, date, required: false)
    * Record the date and time of the next appointment to ensure that the patient knows when to follow up.
* **Next Provider** (`next_provider`, text, required: false)
    * Record the name of the next provider that the patient will be seeing for follow-up care.
* **Discharge Comments** (`discharge_comments`, note, required: false)
    * Provide any important comments or information to communicate to the patient or their family.
* **Discharge Signature** (`discharge_signature`, select_one, required: true)
    * Sign the discharge signature section, indicating that you are the provider who is discharging the patient.
* **Follow-up Instructions** (`follow_up_instructions`, select_multiple, required: true)
    * Confirm the follow-up instructions and contact information for the patient, such as phone, email, or in-person contact.
* **Follow-up Contact Info** (`follow_up_contact_info`, select_one, required: true)
    * Select the contact method for follow-up, such as phone, email, or in-person contact.
* **Discharge Date** (`discharge_date`, date, required: false)
    * Record the date of discharge to ensure that we have a clear understanding of when the patient was discharged.
 
## Tips

* Make sure to review the patient's medical history and treatment plan before completing this form.
* Ensure that all relevant information is documented to ensure accurate and effective care after discharge.
* Sign the discharge signature section to confirm that you are the provider who is discharging the patient.
* Verify the follow-up instructions and contact information with the patient before discharge.
