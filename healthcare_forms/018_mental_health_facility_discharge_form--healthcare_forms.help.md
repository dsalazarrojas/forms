# Mental Health Facility Discharge Form - Help Guide
## Purpose

The Mental Health Facility Discharge Form is used to collect information about a patient's discharge from a mental health facility. This includes details about the patient's status, discharge date, time, reason, and post-discharge care instructions. The form is essential for maintaining accurate records and ensuring continuity of care for the patient.

## How To Complete This Form

1. Ensure you are authorized to access and complete this form.
2. Enter the patient's information, including name and any relevant details.
3. Select the discharge date and time.
4. Choose the reason for discharge.
5. Indicate if post-discharge care is required.
6. Select the follow-up appointment status (if applicable).
7. Enter follow-up appointment details (if applicable).
8. Select the discharge status.
9. If "Other" is selected as the discharge status, provide a brief explanation.
10. Enter follow-up instructions (if applicable).
11. Enter follow-up date and time (if applicable).
12. Enter follow-up location (if applicable).
13. Enter the discharge diagnosis.

## Field-by-Field Explanation

* **Patient Information** (`patient_information`, text, required: false): This field is for entering the patient's basic details.
* **Patient Name** (`patient_name`, text, required: false): Enter the patient's full name.
* **Discharge Date** (`discharge_date`, date, required: false): Enter the date of discharge.
* **Discharge Time** (`discharge_time`, time, required: false): Enter the time of discharge.
* **Reason for Discharge** (`reason_for_discharge`, text, required: false): Enter the reason for the patient's discharge.
* **Post-Discharge Care** (`post_discharge_care`, select_multiple, required: false): Select whether post-discharge care is required.
* **Followup Appointment** (`followup_appointment`, select_one, required: false): Select whether a follow-up appointment is required.
* **Followup Doctor** (`followup_doctor`, text, required: false): Enter the name of the doctor for the follow-up appointment.
* **Followup Phone** (`followup_phone`, text, required: false): Enter the phone number for the follow-up appointment.
* **Followup Email** (`followup_email`, email, required: false): Enter the email address for the follow-up appointment.
* **Followup Address** (`followup_address`, text, required: false): Enter the address for the follow-up appointment.
* **Discharge Status** (`discharge_status`, select_one, required: true): Select the discharge status (e.g., Discharged, Transferred, Dead, Other).
* **Discharge Status Other** (`discharge_status_other`, text, required: false): If "Other" is selected as the discharge status, enter a brief explanation.
* **Followup Instructions** (`followup_instructions`, text, required: false): Enter any follow-up instructions for the patient.
* **Followup Date** (`followup_date`, date, required: false): Enter the date of the follow-up appointment.
* **Followup Time** (`followup_time`, time, required: false): Enter the time of the follow-up appointment.
* **Followup Location** (`followup_location`, text, required: false): Enter the location of the follow-up appointment.
* **Discharge Diagnosis** (`discharge_diagnosis`, text, required: false): Enter the discharge diagnosis.
