# Hospice Care Discharge Form - Help Guide
## Purpose
The Hospice Care Discharge Form is used to document the discharge process of a patient from a hospice care setting. This form ensures that all necessary information is collected and communicated effectively to facilitate a smooth transition of care.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter the patient's information in the "Patient Information" page (page 1).
2.  Provide the medical condition that necessitates discharge in the "Medical Condition" field.
3.  List any medications currently being taken by the patient in the "Medications" field.
4.  Enter the date of discharge in the "Discharge Date" field.
5.  Specify the reason for discharge in the "Discharge Reason" field.
6.  Outline the next steps for the patient's care in the "Next Steps" field.
7.  Select the members of the care team involved in the patient's care.
8.  Enter the location where the patient will be discharged to in the "Discharge Location" field.
9.  Provide the name and contact information of the care coordinator.

## Field-by-Field Explanation

* **Patient Information (page 1)** (patient_info, text, required: false)
    + Enter the patient's name, date of birth, and any other relevant identifying information.
* **Medical Condition (page 1)** (medical_condition, text, required: true)
    + Provide a clear and concise description of the patient's medical condition that requires discharge.
* **Medications (page 1)** (medications_list, select_multiple, required: false)
    + Select all medications currently being taken by the patient.
* **Discharge Date (page 1)** (discharge_date, date, required: true)
    + Enter the date the patient will be discharged from the hospice care setting.
* **Discharge Reason (page 1)** (discharge_reason, text, required: true)
    + Specify the reason for the patient's discharge, e.g., "Discharged due to improved condition," "Discharged due to transfer to another care facility," etc.
* **Next Steps (page 1)** (next_steps, text, required: false)
    + Outline the next steps for the patient's care, including follow-up appointments, medication management, etc.
* **Care Team (page 1)** (care_team, select_multiple, required: false)
    + Select all members of the care team involved in the patient's care.
* **Discharge Location (page 1)** (discharge_location, text, required: true)
    + Enter the location where the patient will be discharged to, e.g., home, another care facility, etc.
* **Care Coordinator (page 1)** (care_coordinator, text, required: false)
    + Provide the name and contact information of the care coordinator responsible for the patient's care.
