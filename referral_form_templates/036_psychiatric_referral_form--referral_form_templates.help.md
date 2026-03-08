# Psychiatric Referral Form - Help Guide
## Purpose
The Psychiatric Referral Form is used to gather information from patients for referrals to mental health professionals. The form is designed to provide an overview of the patient's mental health history, current status, and treatment goals.

## How To Complete This Form
To fill out this form, follow these steps:
1. Enter the patient's information in the "Patient Info" section.
2. Provide a brief description of the patient's mental health history in the "Mental Health History" field.
3. Select one or more goals for the patient's treatment in the "Treatment Goals" field.
4. Enter the patient's diagnosis in the "Diagnosis" field.
5. Outline the patient's treatment plan in the "Treatment Plan" field.
6. Indicate the patient's current status in the "Patient Status" field.
7. Provide any relevant medical information about the patient's medication in the "Medication" field.
8. Enter any additional medical notes about the patient in the "Medical Notes" field.
9. Enter the patient's contact information, including their email address, in the "Contact Info" field.
10. Outline the next steps for the patient's treatment in the "Next Steps" field.

## Field-by-Field Explanation

* **Patient Info** (`patient_info`, text, required: false): Enter the patient's name, age, and any other relevant details.
* **Mental Health History** (`mental_health_history`, text, required: false): Describe the patient's mental health history, including any previous mental health issues, medical conditions, or treatments.
* **Treatment Goals** (`treatment_goals`, select_multiple, required: false): Select one or more goals for the patient's treatment. Possible options are:
	+ Goal 1
	+ Goal 2
	+ Goal 3
* **Diagnosis** (`diagnosis`, number, required: false): Enter the patient's diagnosis code (e.g., 312).
* **Treatment Plan** (`treatment_plan`, text, required: false): Outline the patient's treatment plan, including any specific interventions, medications, or therapies.
* **Patient Status** (`patient_status`, select_one, required: false): Indicate the patient's current status. Possible options are:
	+ Stable
	+ Unstable
	+ Other
* **Medication** (`medication`, text, required: false): Provide any relevant information about the patient's medication, including dosage, frequency, and any side effects.
* **Medical Notes** (`medical_notes`, note, required: false): Enter any additional medical information about the patient, including any concerns or special instructions.
* **Contact Info** (`contact_info`, email, required: false): Enter the patient's email address for contact purposes.
* **Next Steps** (`next_steps`, text, required: false): Outline the next steps for the patient's treatment, including any specific instructions or follow-ups.
