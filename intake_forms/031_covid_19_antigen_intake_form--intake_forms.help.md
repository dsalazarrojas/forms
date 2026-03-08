# Covid 19 Antigen Intake Form - Help Guide
## Purpose
This form is used to gather information from patients or their representatives about their experiences with Covid-19 antigens, including vaccine information, medical conditions, and follow-up visit details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the appropriate category for your submission (e.g., "Patient Information", "Contact Information", etc.).
2. Fill in the required fields (marked as "required" in the form).
3. Provide as much detail as possible for each field.

## Field-by-Field Explanation

* **Patient Information (Patient Info)** (`patient_info`, `text`, required: false): 
  Enter the patient's name, date of birth, and any other relevant details.
* **Contact Information (Contact Info)** (`contact_info`, `text`, required: false):
  Enter your contact information, including your name, phone number, and email address.
* **Vaccine Information (Vaccine Info)** (`vaccine_info`, `text`, required: false):
  Enter any details about the vaccine, including date of administration, dosage, and any side effects.
* **Medical Information (Medical Info)** (`medical_info`, `text`, required: false):
  Enter any relevant medical history or conditions that may affect the patient's response to the antigen.
* **Contact Phone (Contact Phone)** (`contact_phone`, `text`, required: false):
  Enter your phone number where you can be reached for follow-up.
* **Contact Email (Contact Email)** (`contact_email`, `email`, required: false):
  Enter your email address where you can be reached for follow-up.
* **Relationship (Relationship)** (`contact_relationship`, `select_one`, required: false):
  Select your relationship to the patient (e.g., "Patient", "Family Member", or "Other").
* **Other Relationship (Other Relationship)** (`contact_relationship_other`, `text`, required: false):
  If "Other" is selected, please provide more details about your relationship to the patient.
* **Medical Condition (Medical Condition)** (`medical_condition`, `select_multiple`, required: false):
  Select any relevant medical conditions that may affect the patient's response to the antigen (e.g., "Diabetes", "Hypertension", etc.).
* **Other Medical Condition (Other Medical Condition)** (`medical_condition_other`, `text`, required: false):
  If a condition is not listed, please provide more details about the patient's medical condition.
* **Medical Notes (Medical Notes)** (`medical_notes`, `note`, required: false):
  Enter any additional medical notes or details.
* **Vaccine Dose (Vaccine Dose)** (`vaccine_dose`, `number`, required: false):
  Enter the number of vaccine doses administered to the patient.
* **Vaccine Dose Administered (Vaccine Dose Administered)** (`vaccine_dose_administered`, `number`, required: false):
  Enter the number of vaccine doses administered to the patient.
* **Vaccine Side Effects (Vaccine Side Effects)** (`vaccine_side_effects`, `select_multiple`, required: false):
  Select any side effects experienced by the patient after vaccination (e.g., "Fever", "Fatigue", etc.).
* **Other Side Effects (Other Side Effects)** (`vaccine_side_effects_other`, `text`, required: false):
  If a side effect is not listed, please provide more details about the patient's side effects.
* **Appointment Scheduled (Appointment Scheduled)** (`appointment_scheduled`, `date`, required: false):
  Enter the date and time of the next scheduled appointment.
* **Appointment Time (Appointment Time)** (`appointment_time`, `time`, required: false):
  Enter the time of the next scheduled appointment.
* **Appointment Date (Appointment Date)** (`appointment_date`, `date`, required: false):
  Enter the date of the next scheduled appointment.
* **Follow-up Visit (Follow-up Visit)** (`follow_up_visit`, `select_multiple`, required: false):
  Select whether a follow-up visit is scheduled ("Yes", "No", or "Pending").
* **Follow-up Visit Scheduled (Follow-up Visit Scheduled)** (`follow_up_visit_scheduled`, `date`, required: false):
  Enter the date of the next follow-up visit.
* **Follow-up Visit Time (Follow-up Visit Time)** (`follow_up_visit_time`, `time`, required: false):
  Enter the time of the next follow-up visit.
* **Next Follow-up Visit (Next Follow-up Visit)** (`next_follow_up_visit`, `date`, required: false):
  Enter the date of the next follow-up visit.
* **Next Follow-up Visit Time (Next Follow-up Visit Time)** (`next_follow_up_visit_time`, `time`, required: false):
  Enter the time of the next follow-up visit.
* **Notes (Notes)** (`notes`, `text`, required: false):
  Enter any additional notes or details.

Tips:

* Please ensure that all required fields are filled out completely before submitting the form.
* If a field has options, select the relevant option or enter a brief description.
* If a field has multiple options, select all relevant options.
* If a field has a "Other" option, provide a brief description of the patient's relationship, medical condition, or side effects.
* If you are unsure about any field, please reach out to the healthcare provider for guidance.
