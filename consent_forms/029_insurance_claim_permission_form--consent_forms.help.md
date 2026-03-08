# Insurance Claim Permission Form - Help Guide

## Purpose
The Insurance Claim Permission Form is used to gather information for an insurance claim. This form is used to track the status of a claim, including the claimant's identity, claim details, and reviewer's permissions.

## How To Complete This Form
To complete this form, please follow the steps outlined in the instructions.

## Field-by-Field Explanation

* **Claim ID** (`claim_id`, number, required): Enter your unique claim ID.
* **Claim Type** (`claim_type`, select_one, required): Select the type of claim you are submitting (auto or manual).
* **Permission Date** (`permission_date`, date, required): Enter the date you are granting permission for your claim.
* **Claim Amount** (`claim_amount`, number, optional): If applicable, enter the amount of the claim.
* **Insurance ID** (`insurance_id`, number, required): Enter the ID of the insurance company you are working with.
* **Claim Status** (`claim_status`, select_one, required): Select the current status of your claim (pending, approved, or denied).
* **Claim Notes** (`claim_notes`, note, optional): Enter any additional notes about your claim.
* **User Permission** (`user_permission`, number, required): Select the user's permission status for your claim.
* **Form Completion** (`form_completion`, number, optional): Enter the form completion status (completed or incomplete).
* **Claim Reviewed By** (`claim_reviewed_by`, number, optional): Enter the ID of the user who reviewed your claim.
* **Claim Reviewed Date** (`claim_reviewed_date`, date, optional): Enter the date the claim was reviewed.
* **Claim Reviewer** (`claim_reviewer`, number, optional): Enter the ID of the user who reviewed the claim.
* **Reviewing User Permission** (`claim_reviewing_user_permission`, number, optional): Enter the permission status of the user who reviewed the claim.
* **Form Completion Status** (`form_completion_status`, select_one, required): Select the form completion status (completed or pending).
* **Submitter Permission** (`submitter_permission`, number, required): Select the user's permission status who submitted the claim.
* **Submitter** (`submitter`, number, required): Enter the ID of the user who submitted the claim.
* **Submitter Status** (`submitter_status`, select_one, required): Select the status of the user who submitted the claim (approved, pending, or denied).
* **User ID** (`user_id`, number, optional): Enter the ID of the user associated with the claim.
* **Submitter's Permission Note** (`submitter_permission_note`, note, optional): Enter any additional notes about the submitter's permission.
* **Reviewer's Permission Note** (`reviewer_permission_note`, note, optional): Enter any additional notes about the reviewer's permission.
* **Claim Reviewer** (`claim_reviewer`, number, required): Enter the ID of the user who reviewed the claim.
* **User** (`user`, number, optional): Enter the ID of the user associated with the claim.

## Tips
Please review the form carefully before submitting it to ensure accuracy and completeness.
