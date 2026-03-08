# Property Tax Billing Form - Help Guide

## Purpose
The Property Tax Billing Form is a tool used to record and track property tax payments. It helps administrators and accountants keep track of payments from various municipalities, tax years, and payment methods.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant municipality from the list of available options.
2. Enter the tax year for which the payment is being made.
3. Input the total tax amount due.
4. Choose the payment method used to make the payment (e.g. check, online).
5. Select the date and time the payment was received.
6. (Optional) Input any additional notes regarding the payment.
7. Review and submit the form.

## Field-by-Field Explanation
* **municipality** (`municipality`, `select_one`, required): Select the municipality where the tax payment is being made. This field is required.
* **tax_year** (`tax_year`, `text`, optional): Enter the tax year for which the payment is being made.
* **tax_amount** (`tax_amount`, `number`, optional): Input the total tax amount due. This field is optional.
* **payment_method** (`payment_method`, `select_multiple`, required): Choose one or more methods used to make the payment (e.g. check, online). This field is required.
* **date_received** (`date_received`, `date`, optional): Select the date the payment was received. This field is optional.
* **time_received** (`time_received`, `time`, optional): Select the time the payment was received. This field is optional.
* **payment_status** (`payment_status`, `select_one`, optional): Select the current payment status (e.g. Paid, Unpaid). This field is optional.
* **notes** (`notes`, `note`, optional): Input any additional notes regarding the payment. This field is optional.
