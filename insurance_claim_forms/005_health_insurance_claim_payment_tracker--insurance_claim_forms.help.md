<thinking>
We need to ensure that the form is used for tracking health insurance claims payments accurately and effectively. This form should not be used for other purposes, such as creating new claims or updating existing ones. The user should only use this form to track the status and payment details of existing claims.
The form is designed to be flexible and adaptable to accommodate various claim types, statuses, and payment methods. We will not duplicate or overwrite existing data, and any changes made to the form will be reflected in the main database.
</thinking>

# Health Insurance Claim Payment Tracker - Help Guide
## Purpose

This form is used to track the status and payment details of health insurance claims. It helps users to monitor and update the claim submission, payment, and follow-up activities for each claim.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the type of claim you want to track (Insurance Claim, Reimbursement Request, Claim Dispute, Reimbursement Follow-up, or Other).
2. Enter the claim date.
3. Enter the patient's name, policy number, and email (if applicable).
4. Specify the claim amount.
5. Choose the claim status (Pending, Approved, Denied, Paid, or Pending Payment).
6. Enter the payment date and amount (if applicable).
7. Select the payment method (Check, EFT, or Wire Transfer).
8. Upload any relevant documents (Claim Form, Insurance Card, Receipt, or Other).
9. Provide any additional notes about the claim.

## Field-by-Field Explanation

* **Claim Submission** (`Claim Submission`, `select_multiple`, required: false): Select the type of claim you want to track.
* **Claim Date** (`claim_date`, `date`, required: false): Enter the date the claim was submitted.
* **Patient Name** (`patient_name`, `text`, required: false): Enter the patient's name.
* **Policy Number** (`policy_number`, `text`, required: false): Enter the policy number associated with the claim.
* **Patient Email** (`patient_email`, `email`, required: false): Enter the patient's email (if applicable).
* **Claim Amount** (`claim_amount`, `number`, required: false): Enter the amount of the claim.
* **Claim Status** (`claim_status`, `select_one`, required: false): Select the current status of the claim (Pending, Approved, Denied, Paid, or Pending Payment).
* **Payment Date** (`payment_date`, `date`, required: false): Enter the date of the payment (if applicable).
* **Payment Amount** (`payment_amount`, `number`, required: false): Enter the payment amount (if applicable).
* **Payment Method** (`payment_method`, `select_one`, required: false): Select the payment method used (Check, EFT, or Wire Transfer).
* **Upload Document** (`upload_document`, `text`, required: false): Upload any relevant documents supporting the claim.
* **Document Title** (`document_title`, `text`, required: false): Enter a title for the uploaded document.
* **Document Type** (`document_type`, `select_one`, required: false): Select the type of document uploaded (Claim Form, Insurance Card, Receipt, or Other).
* **Notes** (`notes`, `text`, required: false): Provide any additional notes about the claim.
* **Follow-up Date** (`follow_up_date`, `date`, required: false): Enter the date of the follow-up activity.
* **Follow-up Status** (`follow_up_status`, `select_one`, required: false): Select the status of the follow-up activity (Scheduled, In Progress, or Completed).
* **Follow-up Details** (`follow_up_details`, `text`, required: false): Enter any details about the follow-up activity.
* **Submitted By** (`submitted_by`, `text`, required: false): Enter the name of the person who submitted the claim.
* **Submitted Date** (`submitted_date`, `date`, required: false): Enter the date the claim was submitted.
* **Claim ID** (`claim_id`, `text`, required: false): Enter the unique identifier for the claim.
* **Claim Status Change Reason** (`claim_status_change_reason`, `text`, required: false): Enter the reason for any status changes.
* **Claim Status History** (`claim_status_history`, `text`, required: false): Enter any previous claim status changes.
* **Payment Status Change Reason** (`payment_status_change_reason`, `text`, required: false): Enter the reason for any payment status changes.
* **Payment Status History** (`payment_status_history`, `text`, required: false): Enter any previous payment status changes.
