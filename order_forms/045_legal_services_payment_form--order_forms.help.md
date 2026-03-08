# Legal Services Payment Form - Help Guide
## Purpose
The Legal Services Payment Form is used to collect payment information and details about the services rendered to a client. This form is essential for maintaining accurate financial records and tracking client payments.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the necessary details about the order, including the description and any additional information required.
2. Select the legal services provided to the client from the dropdown options.
3. Enter any additional services rendered, if applicable.
4. Provide payment details, including the payment method, amount, and date.
5. Enter any notes or comments related to the payment.
6. Enter the client's email and phone number for future communication.
7. Confirm the payment status and order status.

## Field-by-Field Explanation
* **Order Details** (`id: 1`, `name: order_details`): Enter a brief description of the order.
	+ Type: `text`
	+ Required: `false`
* **Legal Services** (`id: 2`, `name: legal_services`): Select the legal services provided to the client.
	+ Type: `select_one`
	+ Options: `Legal Services A, Legal Services B, Legal Services C`
	+ Required: `false`
* **Services Rendered** (`id: 3`, `name: services_rendered`): Enter any additional services rendered to the client.
	+ Type: `text`
	+ Required: `false`
* **Payment Details** (`id: 4`, `name: payment_details`): Enter the payment details, including the amount and date.
	+ Type: `text`
	+ Required: `false`
* **Client Info** (`id: 5`, `name: client_info`): Enter the client's information, including their email and phone number.
	+ Type: `text`
	+ Required: `false`
* **Minimalist** (`id: 6`, `name: minimalist`): Not applicable. This field is likely a redundant field and can be ignored.
	+ Type: `number`
	+ Required: `false`
* **Payment Method** (`id: 7`, `name: payment_method`): Select the payment method used (e.g., Card Payment, Bank Transfer, Other).
	+ Type: `select_one`
	+ Options: `Card Payment, Bank Transfer, Other`
	+ Required: `false`
* **Amount** (`id: 8`, `name: amount`): Enter the payment amount.
	+ Type: `number`
	+ Required: `false`
* **Date** (`id: 9`, `name: date`): Enter the payment date.
	+ Type: `date`
	+ Required: `false`
* **Time** (`id: 10`, `name: time`): Enter the payment time.
	+ Type: `time`
	+ Required: `false`
* **Total** (`id: 11`, `name: total`): Not applicable. This field is likely a redundant field and can be ignored.
	+ Type: `number`
	+ Required: `false`
* **Notes** (`id: 12`, `name: notes`): Enter any additional notes or comments related to the payment.
	+ Type: `text`
	+ Required: `false`
* **Email** (`id: 13`, `name: email`): Enter the client's email address.
	+ Type: `email`
	+ Required: `false`
* **Phone** (`id: 14`, `name: phone`): Enter the client's phone number.
	+ Type: `text`
	+ Required: `false`
* **Payment Confirmation** (`id: 15`, `name: payment_confirmation`): Confirm the payment status (e.g., Paid, Unpaid, Partially Paid).
	+ Type: `select_one`
	+ Options: `Paid, Unpaid, Partially Paid`
	+ Required: `false`
* **Payment Status** (`id: 16`, `name: payment_status`): Confirm the payment status (e.g., Paid, Unpaid, Partially Paid).
	+ Type: `select_one`
	+ Options: `Paid, Unpaid, Partially Paid`
	+ Required: `false`
* **Order Status** (`id: 17`, `name: order_status`): Confirm the order status (e.g., Paid, Unpaid, Partially Paid, Canceled, Pending).
	+ Type: `select_one`
	+ Options: `Paid, Unpaid, Partially Paid, Canceled, Pending`
	+ Required: `false`

## Tips

* Double-check the payment details before submitting the form.
* Ensure the client's information is accurate and up-to-date.
* Review the payment confirmation and status carefully before confirming payment.
