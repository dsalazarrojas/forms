<thinking>
I am designing a help guide for a Catering Deposit Form. This form is used for clients to securely deposit their payment for events. To ensure that I provide accurate and relevant instructions, I will be focusing on the following aspects of the form:

* Clarify the form's purpose
* Ensure that each field's label is clear and concise
* Verify that each field's type and options are correctly reflected in the guide

The form is intended to collect client information and payment details for catering services. To complete this form, the user will provide their client information and payment method details.

</thinking>

# Catering Deposit Form - Help Guide
## Purpose
The Catering Deposit Form is used to securely deposit payments for events. The form is designed to collect essential information from clients and process payment details.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your Client Name (Individual or Entity) in the "Client Name (Individual or Entity)" field.
2. Enter the Event Name/Reference in the "Event Name/Reference" field.
3. Select the Confirmed Event Date from the calendar.
4. Enter the Total Estimated Quote Amount in the "Total Estimated Quote Amount" field.
5. Enter the Deposit Amount Due, which is typically 50% of the total quote amount.
6. Select the payment method from the options provided in the "Select Payment Method" field.
7. Enter the Billing Street Address in the "Billing Street Address" field.
8. Enter the City, State, and Zip in the "City, State, and Zip" field.
9. Enter the Email Address for Receipts in the "Email Address for Receipt" field.
10. Confirm that you understand the deposit terms, including that the deposit is non-refundable if cancelled within 30 days of the event.
11. Confirm that the date is not locked until the deposit is processed.
12. Enter your name as the Authorized Signature.
13. Select the date of submission.
14. Leave the Link to Internal Invoice field blank, as it is only for staff use.

## Field-by-Field Explanation
### Client Name (Individual or Entity)
* **Client Name (Individual or Entity)** (`client_name_legal`, text, required): Enter the name of the client or individual.

### Event Name/Reference
* **Event Name/Reference** (`event_title_ref`, text, required): Enter the name or reference number of the event.

### Confirmed Event Date
* **Confirmed Event Date** (`event_date_confirmed`, date, required): Select the date on which the event is confirmed.

### Total Estimated Quote Amount
* **Total Estimated Quote Amount** (`total_quote_amount`, number, required): Enter the total estimated quote amount for the event.

### Deposit Amount Due
* **Deposit Amount Due** (`deposit_amount_due`, number, required): Enter the amount due as 50% of the total quote amount.

### Select Payment Method
* **Select Payment Method** (`payment_method_selection`, select_one, required): Select a payment method from the options provided (Credit/Debit Card, ACH/Bank Transfer, Corporate Check, or Cashier's Check).

### Billing Information
* This section contains billing details for the client's payment.

### Billing Street Address
* **Billing Street Address** (`billing_street_address`, text, required): Enter the billing street address.

### City, State, and Zip
* **City, State, and Zip** (`billing_city_state_zip`, text, required): Enter the city, state, and zip code.

### Email Address for Receipt
* **Email Address for Receipt** (`billing_email`, email, required): Enter the email address for receipts.

### Deposit Terms
* This section outlines the terms of the deposit.

### I understand that this deposit is non-refundable if cancelled within 30 days of the event
* **I understand that this deposit is non-refundable if cancelled within 30 days of the event** (`refund_policy_ack`, select_one, required): Confirm that you understand the deposit terms.

### I understand that the date is not locked until the deposit is processed
* **I understand that the date is not locked until the deposit is processed** (`date_lock_ack`, select_one, required): Confirm that you understand the date terms.

### Authorized Signature (Type Name)
* **Authorized Signature (Type Name)** (`payment_authorized_by`, text, required): Enter your name as the authorized signature.

### Date
* **Date** (`submission_date_payment`, date, required): Select the date of submission.

### Link to Internal Invoice (Staff Only)
* **Link to Internal Invoice (Staff Only)** (`internal_invoice_link`, text, required): Leave this field blank, as it is for staff use.
