<thinking>
To ensure that the "psychiatry_progress_note" form is filled out correctly and efficiently, please review the following guide.

The purpose of this form is to collect information about a patient's psychiatric session, including details about the session itself, the patient's chief complaint or reason for visit, and their medical and mental status. This form is intended to be used by healthcare providers to document the progress and treatment of patients with psychiatric conditions.

Before filling out this form, please note that it is designed to be completed by healthcare providers, not patients. If you are a patient, you should not fill out this form.

Also, please ensure that you are not duplicating information that is already available in the patient's medical record. If you have access to the patient's existing medical record, please use that information to populate this form as much as possible.

After reviewing the form, you are ready to start filling it out.
</thinking>

# psychiatry_progress_note - Help Guide
## Purpose
The "psychiatry_progress_note" form is used to document the progress and treatment of patients with psychiatric conditions. It collects information about the patient's session details, chief complaint, diagnosis, medications, allergies, medical history, vital signs, mental status, and follow-up appointments.

## How To Complete This Form
To complete this form, please follow these steps:

1. Start by filling out the **Session Details** section.
	* In the **Session Date** field, enter the date of the psychiatric session.
	* In the **Session Time** field, enter the time of the psychiatric session.
	* In the **Session Location** field, enter the location where the session took place.
2. In the **Chief Complaint** section, describe the patient's chief complaint or reason for visit.
3. In the **Diagnosis** section, enter the patient's current psychiatric diagnosis.
4. In the **Medications** section, select all the medications the patient is currently taking.
5. In the **Allergies** section, list any allergies the patient has.
6. In the **Medical History** section, enter the patient's medical history.
7. In the **Vital Signs** section, enter the patient's vital signs (e.g., blood pressure, pulse).
8. In the **Mental Status** section, describe the patient's mental status (e.g., mood, behavior).
9. In the **Follow-Up** section, schedule follow-up appointments as needed.
	* Select the follow-up frequency (e.g., daily, weekly, bi-weekly, monthly).
	* Enter the date and time of the follow-up appointment.
10. Finally, sign the form by entering your name and date in the **Signed By** section.

## Field-by-Field Explanation
* **Session Details** (`session_details`, text, optional): Enter the date, time, and location of the psychiatric session.
* **Chief Complaint** (`chief_complaint`, text, optional): Describe the patient's chief complaint or reason for visit.
* **Diagnosis** (`diagnosis`, text, optional): Enter the patient's current psychiatric diagnosis.
* **Medications** (`medications`, select_multiple, optional): Select all the medications the patient is currently taking.
* **Allergies** (`allergies`, text, optional): List any allergies the patient has.
* **Medical History** (`medical_history`, text, optional): Enter the patient's medical history.
* **Vital Signs** (`vital_signs`, text, optional): Enter the patient's vital signs (e.g., blood pressure, pulse).
* **Mental Status** (`mental_status`, text, optional): Describe the patient's mental status (e.g., mood, behavior).
* **Follow-Up** (`follow_up`, date, optional): Schedule follow-up appointments as needed.
* **Follow-Up Frequency** (`follow_up_frequency`, select_one, optional): Select how often you want to see this patient (e.g., daily, weekly, bi-weekly, monthly).
* **Signed By** (`signed_by`, text, optional): Enter your name and date.
* **Signed By Date** (`signed_by_date`, date, optional): Enter the date you signed the form.
* **Signed By Provider** (`signed_by_provider`, text, optional): Enter your name.
* **Follow-Up Time** (`follow_up_time`, time, optional): Enter the time of the follow-up appointment.
