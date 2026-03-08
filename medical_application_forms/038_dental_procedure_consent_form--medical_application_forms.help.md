# dental procedure consent form - Help Guide

## Purpose
The dental procedure consent form is a document that ensures the patient understands and agrees to a dental procedure.

## How To Complete This Form

1. Please fill in all the required fields carefully.
2. Select the relevant procedure details from the list provided.
3. Confirm that you understand and agree to the procedure.
4. Enter your contact information so that we can schedule follow-up appointments.
5. Confirm your consent by signing and dating the form.

## Field-by-Field Explanation

* **Patient Information (Page 1)** (`patient_information`, number, required):
  This is the first page of the form, and it is where you should enter your personal details.

* **Procedure Details (Page 2)** (`procedure_details`, select_one, required):
  Please select the type of dental procedure you are undergoing from the list provided (Dental Implant, Dental Bridge, Root Canal, Crown and Bridge, or Extractions).

* **Procedure Risks (Page 3)** (`procedure_risks`, text, optional):
  This is an optional field where you can enter any risks or complications associated with the procedure.

* **Patient Consent (Page 4)** (`patient_consent`, select_multiple, required):
  Please confirm that you understand and agree to the procedure by selecting "Patient agrees to the procedure".

* **Patient Contact Info (Page 5)** (`patient_contact_info`, email, required):
  Enter your contact information so that we can schedule follow-up appointments.

* **Dentist Information (Page 6)** (`dentist_information`, text, optional):
  This field is optional and can be left blank.

* **Treatment Risks (Page 7)** (`treatment_risks`, note, optional):
  This is an optional field where you can enter any risks or complications associated with the treatment.

* **Follow-up Schedule (Page 8)** (`follow_up_schedule`, date, required):
  Enter the follow-up schedule date for your next appointment.

* **Procedure Status (Page 9)** (`procedure_status`, select_one, required):
  Confirm the status of your procedure by selecting either "Pending", "Complete", or "Cancelled".

* **Notes (Page 10)** (`notes`, text, optional):
  This field is optional and can be used to add any additional notes.

* **Follow-up Notes (Page 11)** (`follow_up_notes`, text, optional):
  This field is optional and can be used to add any follow-up notes.

* **Signature (Page 12)** (`signature`, note, optional):
  This field is optional and can be used to sign the form.

* **Signature Date (Page 13)** (`signature_date`, time, optional):
  This field is optional and can be used to date the form.

* **Assigned User (Page 14)** (`assigned_user`, select_multiple, optional):
  This field is optional and can be used to assign other users to the form.

* **Assigned Tool (Page 15)** (`assigned_tool`, select_multiple, optional):
  This field is optional and can be used to assign other tools to the form.

* **Patient Name (Page 16)** (`patient_name`, text, required):
  Enter your name.

* **Doctor Name (Page 17)** (`doctor_name`, text, optional):
  This field is optional and can be left blank.

* **Facility Name (Page 18)** (`facility_name`, text, optional):
  This field is optional and can be left blank.

* **Procedure Date (Page 19)** (`procedure_date`, date, required):
  Enter the date of the procedure.

* **Follow-up Date (Page 20)** (`follow_up_date`, date, optional):
  This field is optional and can be left blank.

* **Patient Age (Page 21)** (`patient_age`, number, optional):
  This field is optional and can be left blank.

* **Procedure Time (Page 22)** (`procedure_time`, number, optional):
  This field is optional and can be left blank.

* **Patient Sex (Page 23)** (`patient_sex`, select_one, optional):
  Please select your sex from the list provided.

* **Patient Ethnicity (Page 24)** (`patient_ethnicity`, select_one, optional):
  Please select your ethnicity from the list provided.

* **Follow-up Time (Page 25)** (`follow_up_time`, number, optional):
  This field is optional and can be left blank.
