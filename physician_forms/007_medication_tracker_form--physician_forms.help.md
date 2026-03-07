<thinking>
We need to ensure that this form's purpose is well understood by the end users. Upon analyzing the provided YAML form schema, it appears that the "medication_tracker_form" is designed to collect information about a patient's medication regimen. The form likely aims to gather details about the medication name, dosing instructions, frequency, and start and end dates of treatment, as well as contact information for both the doser and the patient. This form seems to be used for administrative or clinical purposes, possibly for healthcare professionals to track and manage patient medication schedules.

Let's assume that this form is part of a larger healthcare system or application, and the collected data will be used for patient care coordination or for medical staff to monitor and adjust medication schedules.

To confirm this understanding, let's review the fields:
- "Medication Name" suggests the type of medication being administered.
- "Dosing Instructions" likely indicates any specific rules or guidelines for taking the medication, such as taking it with food or not.
- "Doser Name" and "Doser Contact" imply that there is a person responsible for administering the medication.
- "Doser Phone" and "Doser Email" suggest that the doser's contact information is also tracked.
- "Patient Contact" and "Patient Phone" and "Patient Email" further support this, indicating that the patient's contact information is being collected.
- "Dosing Frequency" and "Dosing Interval" might be used to set reminders or schedule dosing appointments.
- "Dosing Start Date" and "Dosing End Date" could be used to track the duration of treatment.

Given this understanding, the "medication_tracker_form" seems to be a tool for healthcare professionals to collect and manage patient medication schedules.

</thinking>

# medication_tracker_form - Help Guide
## Purpose
The medication_tracker_form is designed to collect and track information about a patient's medication regimen. It is used to gather details about the medication name, dosing instructions, frequency, and start and end dates of treatment, as well as contact information for both the doser and the patient.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the "Medication Name" field with the name of the medication being administered.
2. Enter any specific "Dosing Instructions" in this field, such as taking the medication with food.
3. Enter the "Doser Name" to identify the person responsible for administering the medication.
4. Enter the "Doser Contact" information, including the "Doser Phone" and "Doser Email" fields, to ensure that the healthcare staff can contact the doser if needed.
5. Enter the "Dosing Frequency" to schedule how often the medication should be taken.
6. Enter the "Dosing Interval" to schedule how frequently the medication is taken between doses.
7. Select a "Dosing Start Date" to indicate when treatment began.
8. Select a "Dosing End Date" to indicate when treatment is expected to end.
9. If necessary, enter notes in the "Notes" field to provide any additional information.
10. Enter the "Patient Contact" information, including the "Patient Phone" and "Patient Email" fields, to ensure that the healthcare staff can contact the patient if needed.

## Field-by-Field Explanation

* **Medication Name** (`medication_name`, `text`, required: false): Enter the name of the medication being administered.
* **Dosing Instructions** (`dosing_instructions`, `text`, required: false): Enter any specific rules or guidelines for taking the medication, such as taking it with food or not.
* **Doser Name** (`doser_name`, `text`, required: false): Enter the name of the person responsible for administering the medication.
* **Doser Contact** (`doser_contact`, `text`, required: false): Enter the contact information for the person responsible for administering the medication.
* **Dosing Frequency** (`dosing_frequency`, `number`, required: false): Enter the schedule for how often the medication should be taken.
* **Dosing Interval** (`dosing_interval`, `number`, required: false): Enter the frequency at which the medication is taken between doses.
* **Dosing Start Date** (`dosing_start_date`, `date`, required: false): Select a date to indicate when treatment began.
* **Dosing End Date** (`dosing_end_date`, `date`, required: false): Select a date to indicate when treatment is expected to end.
* **Dosage** (`dosage`, `text`, required: false): Enter any additional dosage information.
* **Notes** (`notes`, `text`, required: false): Enter any additional notes or comments.
* **Doser Phone** (`doser_phone`, `text`, required: false): Enter the contact phone number for the person responsible for administering the medication.
* **Doser Email** (`doser_email`, `email`, required: false): Enter the contact email for the person responsible for administering the medication.
* **Patient Contact** (`patient_contact`, `text`, required: false): Enter any additional patient contact information.
* **Patient Phone** (`patient_phone`, `text`, required: false): Enter the patient's phone number.
* **Patient Email** (`patient_email`, `email`, required: false): Enter the patient's email.

## Tips

- Make sure to enter accurate and up-to-date information about the medication schedule.
- Double-check that the doser and patient contact information is correct.
- Ensure that the dosing frequency and interval are consistent with the medication schedule.
- Review the notes field for any additional information that may be relevant to the medication administration.
- Use this form to track and update patient medication schedules as needed.
