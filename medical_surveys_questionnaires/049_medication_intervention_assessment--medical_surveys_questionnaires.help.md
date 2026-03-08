# Medication Intervention Assessment - Help Guide
## Purpose
This form is used to document medication interventions, including changes to medications, medical specialties, and other relevant information.

## How To Complete This Form
1. Start by selecting "Medication Intervention" from the page 1 of the form.
2. Enter the patient's name in the "Patient Name" field.
3. In the "Medication Changes" field, describe any changes to the patient's medications, e.g., new medications, dosage changes, or discontinued medications.
4. Select the patient's medical specialty from the "Medical Specialty" dropdown list.
5. Enter the name of the medication in question.
6. If relevant, enter the medication dose in the "Medication Dose" field.
7. Explain the reason for the medication change in the "Reason for Change" field.
8. Finally, schedule a follow-up appointment in the "Follow-up Date" field, and select the time in the "Follow-up Time" field.

## Field-by-Field Explanation
* **Medication Intervention** (`medication_intervention`, text, required: false):
  This field is where you will describe the type of medication intervention that needs to be documented.
* **Patient Name** (`patient_name`, text, required: false):
  Enter the patient's name as it appears on their record.
* **Medication Changes** (`medication_changes`, note, required: false):
  Describe any changes to the patient's medication regimen, including new medications, dosage changes, or discontinued medications.
* **Medical Specialty** (`medical_specialty`, select_one, required: true):
  Select the patient's relevant medical specialty from the provided options.
* **Medication Name** (`medication_name`, text, required: false):
  Enter the name of the medication that was changed or added.
* **Medication Dose** (`medication_dose`, number, required: false):
  Enter the dose of the medication if it was changed or adjusted.
* **Reason for Change** (`reason_for_change`, text, required: false):
  Explain the reason for the medication change, e.g., side effects, medical condition, etc.
* **Follow-up Date** (`follow_up_date`, date, required: false):
  Schedule a follow-up appointment to review the patient's progress.
* **Follow-up Time** (`follow_up_time`, time, required: false):
  Select the follow-up time for the appointment.
