# medicare_claim_form_template - Help Guide
## Purpose
This form is used to submit medical claims to Medicare.

## How To Complete This Form
To complete this form, follow these steps:

* Ensure that you are submitting this form in a legitimate and authorized capacity.
* Fill in the required fields, which are marked as such.
* For fields with multiple options, choose the option that best fits your situation.
* If you are unsure about a field, please contact us for clarification.

## Field-by-Field Explanation

* **Provider Info** (`provider_info`, text, required: false): This field is where you should enter the provider's information, including their name and contact details.
* **Billing Info** (`billing_info`, text, required: false): This field is where you should enter the billing information for the claim, including the claim amount and claim status.
* **Medical Claim** (`medical_claim`, text, required: false): This field is where you should enter a brief description of the medical service provided to the patient.
* **Claim Date** (`claim_date`, date, required: false): This field is where you should enter the date when the claim was submitted.
* **Submit Date** (`submit_date`, date, required: false): This field is where you should enter the date when the form was submitted.
* **Claim Amount** (`claim_amount`, number, required: false): This field is where you should enter the total amount claimed.
* **Claim Status** (`claim_status`, select_one, required: false):
	+ Choose one of the following options:
		- active
		- inactive
* **Claim Reason** (`claim_reason`, text, required: false): This field is for any additional comments or reasons why the claim was submitted.
* **Provider Name** (`provider_name`, text, required: false): This field is where you should enter the name of the healthcare provider who submitted the claim.
* **Provider License** (`provider_license`, text, required: false): This field is where you should enter the provider's license number.
* **Patient Name** (`patient_name`, text, required: false): This field is where you should enter the name of the patient who received the medical service.
* **Patient Address** (`patient_address`, text, required: false): This field is where you should enter the patient's address.
* **Patient DOB** (`patient_dob`, date, required: false): This field is where you should enter the patient's date of birth.
* **Claim Notes** (`claim_notes`, note, required: false): This field is for any additional comments or notes about the claim.
* **Submitter Name** (`submitter_name`, text, required: false): This field is where you should enter the name of the person submitting the claim.
* **Submitter License** (`submitter_license`, text, required: false): This field is where you should enter the submitter's license number.
* **Submitter Address** (`submitter_address`, text, required: false): This field is where you should enter the submitter's address.
* **Claim Type** (`claim_type`, select_one, required: false):
	+ Choose one of the following options:
		- claim
		- adjustment
		- appeal
		- correction
* **Submitter Email** (`submitter_email`, email, required: false): This field is where you should enter the submitter's email address.
* **Submitter Phone** (`submitter_phone`, text, required: false): This field is where you should enter the submitter's phone number.
* **Claim Provider Fee** (`claim_provider_fee`, number, required: false): This field is where you should enter the fee charged by the healthcare provider for the submitted claim.

## Tips

* Please ensure that you are submitting this form in a legitimate and authorized capacity.
* If you are unsure about any field, please contact us for clarification.
* Please fill in all required fields accurately and completely.
