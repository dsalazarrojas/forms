# Health Insurance Claim Payment Tracker - Help Guide
## Purpose
The Health Insurance Claim Payment Tracker is a form used to record payments made on behalf of patients. It helps healthcare providers track the status of payments received and related information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **Patient Name** in the "Patient Name" field.
2. Enter the **Claim Number** in the "Claim Number" field. This is a required field to ensure accurate tracking.
3. Enter the **Payment Date** in the "Payment Date" field. This field is optional but recommended for historical context.
4. Enter the **Payment Amount** in the "Payment Amount" field. This field is also required for accurate tracking.
5. Choose the **Payment Status** by selecting from the available options (Pending, Paid, Denied). This field is required to reflect the current payment status.
6. Enter any **Document Update** information in the "Document Update" field (if required). This field is optional.
7. Select the relevant **Follow-ups** by choosing from the available options (Follow up 1, Follow up 2, Follow up 3). This field is optional.

## Field-by-Field Explanation
* **Patient Name** (`patient_name`, text, required/optional): Enter the patient's name accurately and as per your records.
* **Claim Number** (`claim_number`, text, required): Enter the claim number associated with the payment.
* **Payment Date** (`payment_date`, date, optional): Enter the date the payment was received, for historical context.
* **Payment Amount** (`payment_amount`, number, required): Enter the total amount paid for the claim.
* **Payment Status** (`payment_status`, select_one, required): Select the current status of the payment (Pending, Paid, Denied).
* **Document Update** (`document_update`, note, optional): Enter any relevant document updates or notes.
* **Follow-ups** (`follow_ups`, select_multiple, optional): Select any follow-up actions needed for the payment.

## Tips
* Ensure all required fields are completed before submitting the form.
* Use the "Payment Status" field to reflect the most up-to-date information.
* If unsure about any field, please refer to your healthcare provider guidelines or seek clarification from your supervisor.
