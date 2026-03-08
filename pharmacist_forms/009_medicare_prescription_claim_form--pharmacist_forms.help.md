# medicare_prescription_claim_form - Help Guide
## Purpose
The Medicare prescription claim form is used to document and submit a claim for reimbursement of medical expenses under the Medicare program. It captures essential information about the patient, their medical history, and the claim details.

## How To Complete This Form
1. Review the form carefully and ensure you have all necessary information and documentation before starting.
2. Complete each section accurately and thoroughly.
3. Ensure that all required fields are filled in before submitting the form.

## Field-by-Field Explanation
* **Patient Information** (`patient_information`, text, required: false):
	+ Enter the patient's name, address, and any relevant identifying information.
* **Medication List** (`medication_list`, text, required: false):
	+ List the medications currently prescribed to the patient.
* **Doctor Prescriptions** (`doctor_prescription`, number, required: true):
	+ Enter the number of prescriptions written for the patient.
* **Patient Signature** (`patient_signature`, select_one, required: true):
	+ Confirm that the patient has reviewed and agreed to the claim details.
* **Doctor Signature** (`doctor_signature`, select_one, required: true):
	+ Confirm that the healthcare provider has reviewed and agreed to the claim details.
* **Date Submitted** (`date_submitted`, date, required: false):
	+ Enter the date the claim was submitted.
* **Claim Amount** (`claim_amount`, number, required: true):
	+ Enter the total amount claimed for the prescription.
* **Medicare Beneficiary** (`medicare_beneficiary`, select_multiple, required: true):
	+ Select all beneficiaries who will be receiving the prescription.
* **Prescription Number** (`prescription_number`, number, required: true):
	+ Enter the unique number assigned to the prescription.
* **Claim Status** (`claim_status`, select_one, required: true):
	+ Select the status of the claim (Approved, Denied, or Pending).
* **Submitted By** (`submitted_by`, select_one, required: false):
	+ Indicate who submitted the claim (Pharmacist, Doctor, or Other).
* **Claim Date** (`claim_date`, date, required: true):
	+ Enter the date the claim was submitted.

This form guide is intended to aid healthcare providers in completing the medicare_prescription_claim_form accurately and efficiently.
