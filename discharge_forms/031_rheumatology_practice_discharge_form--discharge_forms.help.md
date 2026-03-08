<thinking>... (Internal reasoning block: This form is used to collect information for discharging patients from a rheumatology practice. It ensures that all necessary details are captured for a smooth transition of care. The form is divided into sections, each covering a specific aspect of the patient's care. It is essential to fill out the form accurately and thoroughly to avoid any potential issues during or after discharge... </thinking>

# rheumatology_practice_discharge_form - Help Guide

## Purpose
The Rheumatology Practice Discharge Form is used to collect essential information for discharging patients from a rheumatology practice. This form ensures that all necessary details are captured for a smooth transition of care.

## How To Complete This Form
- To complete this form, follow the instructions below.
- Start by providing patient information, including the patient's details and any relevant medical history.
- Next, enter the date and time of discharge.
- Select the patient's disposition, which indicates the outcome of their treatment or care.
- Enter the date and time of the next appointment.
- Provide any next steps or instructions for the patient's care.
- List any medications the patient is currently taking.
- Write any follow-up instructions for the patient.
- Enter contact information for follow-up purposes.
- Include any medical history or relevant notes about the patient's care.

## Field-by-Field Explanation

* **Patient Information** (`patient_info`, `text`, required: false): Enter the patient's name, age, contact information, and any other relevant details.
* **Discharge Date** (`discharge_date`, `date`, required: false): Enter the date of discharge.
* **Discharge Time** (`discharge_time`, `time`, required: false): Enter the time of discharge.
* **Patient Disposition** (`patient_disposition`, `select_one`, required: true): Select the outcome of the treatment or care, which can be:
	+ Option 1
	+ Option 2
	+ Option 3
	+ Option 4
	+ Option 5
* **Next Appointment Date** (`next_appointment_date`, `date`, required: false): Enter the date of the next appointment.
* **Next Appointment Time** (`next_appointment_time`, `time`, required: false): Enter the time of the next appointment.
* **Next Steps** (`next_steps`, `text`, required: false): Provide any instructions or next steps for the patient's care.
* **Medication List** (`medication_list`, `text`, required: false): List any medications the patient is currently taking.
* **Follow-Up Instructions** (`follow_up_instructions`, `text`, required: false): Write any follow-up instructions for the patient.
* **Follow-Up Contact** (`follow_up_contact`, `text`, required: false): Enter contact information for follow-up purposes.
* **Medical History** (`medical_history`, `note`, required: false): Include any relevant medical history or notes about the patient's care.
* **Discharge Summary** (`discharge_summary`, `note`, required: false): Write a summary of the patient's discharge details.
