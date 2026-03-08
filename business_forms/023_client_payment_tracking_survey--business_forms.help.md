# Client Payment Tracking Survey - Help Guide

## Purpose
The Client Payment Tracking Survey is designed to record and track client payments for efficient financial management. This form helps ensure accurate and up-to-date payment records, aiding in timely and accurate financial analysis.

## How To Complete This Form
To use this form correctly:

1. Ensure you are authorized to access and use this form for client payments.
2. Fill in the required fields, including the Client Name, Invoice Number, and Total Invoice Amount.
3. Select the correct payment status and method from the available options.
4. Enter any additional payment details, such as the expected balance date and payment issues.
5. Verify the information is accurate and complete before submitting the form.

## Field-by-Field Explanation

* **Client Name** (`client_name`, text, required): Enter the client's name as it appears on their records.
* **Invoice Number** (`invoice_number`, text, required): Enter the unique invoice number associated with this payment.
* **Invoice Date** (`invoice_date`, date, required): Enter the date the invoice was issued.
* **-- Payment Status --** (`section_payment_status`, note, required): Describe the client's current payment status.
* **Total Invoice Amount** (`invoice_amount`, number, required): Enter the total amount invoiced to the client.
* **Current Payment Status** (`payment_status`, select_one, required): Select the current payment status from the available options (Paid in Full, Partial Payment, Outstanding, Overdue, Overdue).
* **Total Amount Paid to Date** (`amount_paid`, number, optional): Enter the total amount paid by the client to date.
* **Remaining Balance** (`remaining_balance`, number, optional): Calculate the remaining balance after payments.
* **-- Payment Method --** (`section_payment_method`, note, optional): Describe the payment method used.
* **Last Payment Method Used** (`last_payment_method`, select_one, optional): Select the last payment method used from the available options (Credit Card, Check, ACH, Wire Transfer, Cash).
* **Transaction ID or Check Number** (`transaction_id`, text, optional): Enter any transaction ID or check number associated with this payment.
* **-- Payment History and Notes --** (`section_history`, note, optional): Enter any payment history and notes relevant to this payment.
* **Expected Date for Remaining Balance Payment** (`expected_balance_date`, date, optional): Enter the expected date for the remaining balance payment.
* **Please describe any payment disputes or issues** (`payment_issues`, text, optional): Enter any payment disputes or issues that have arisen.
* **Person responsible for payments** (`billing_contact_person`, text, optional): Enter the person responsible for payments for this client.
* **Contact Email for Billing** (`billing_email`, email, optional): Enter the contact email for billing for this client.

Note: The optional fields are for providing additional context and information. Ensure you only fill them in when necessary or relevant to the client's payment situation.
