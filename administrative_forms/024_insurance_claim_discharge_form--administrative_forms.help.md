<thinking>...</thinking>

# Insurance Claim Discharge Form - Help Guide
## Purpose
The Insurance Claim Discharge Form is used to document the discharge of an insurance claim. This form is essential for providing a formal record of the claim's status and the reason for its discharge. It is typically used by insurance providers to ensure accurate and transparent documentation of the claim's lifecycle.

## How To Complete This Form
To complete this form, follow these steps:
- Fill in the required fields with the relevant information.
- Provide a clear and concise explanation of the reason for the claim's discharge.
- Have all required signatures collected for verification and approval.

## Field-by-Field Explanation
* **Claim Id** (claim_id, number, required: false): Enter the unique identifier for the claim.
* **Provider Name** (provider_name, text, required: true): Enter the name of the provider who will be discharging the claim.
* **Date Claim Submitted** (date_claim_submitted, date, required: true): Enter the date the claim was submitted.
* **Claim Status** (claim_status, select_one, required: true): Select the current status of the claim (Active, Inactive, or Pending).
* **Reason For Disposition** (reason_for_disposition, text, required: false): Provide a clear explanation of the reason for the claim's discharge.
* **Adjuster Name** (adjuster_name, text, required: false): Enter the name of the adjuster who was involved in the claim.
* **Adjuster Note** (adjuster_note, note, required: false): Add any additional notes from the adjuster regarding the claim's discharge.
* **Claimant Note** (claimant_note, note, required: false): Add any additional notes from the claimant regarding the claim's discharge.
* **Date Claim Discharged** (date_claim_discharged, date, required: true): Enter the date the claim was discharged.
* **Claim Discharge Note** (claim_discharge_note, note, required: true): Provide a clear and concise explanation of the reason for the claim's discharge.
* **Provider Signature** (provider_signature, text, required: true): Sign and date the form with the provider's signature.
* **Claimant Signature** (claimant_signature, text, required: true): Sign and date the form with the claimant's signature.
* **Adjuster Signature** (adjuster_signature, text, required: true): Sign and date the form with the adjuster's signature.
* **Insurance Company** (insurance_company, select_one, required: true): Select the name of the insurance company.
* **Adjuster Name Other** (adjuster_name_other, text, required: false): Enter any other adjuster names involved in the claim (optional).
