<thinking>
The purpose of this form is to collect billing information and payment details from clients for fleet services. This form is likely used for internal billing purposes within a business or organization, and it appears to be a straightforward form for capturing essential payment and vehicle-related data.
</thinking>

# Fleet Services Billing Form - Help Guide
## Purpose
The Fleet Services Billing Form is designed to collect billing information and payment details from clients for fleet services. This includes capturing payment methods, amounts, due dates, and status of payments.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the billing details page.
	* Enter your billing details in the "billing details" field.
2. Enter client information.
	* Enter the client's name in the "client_name" field.
3. Provide vehicle details.
	* Enter the necessary vehicle details in the "vehicle_details" field.
4. Select a payment method.
	* Choose a payment method from the dropdown list in the "payment_method" field.
5. Enter payment information.
	* Enter the payment amount in the "payment_amount" field.
	* Select a due date for payment in the "payment_due_date" field.
6. Confirm payment status.
	* Select the payment status from the dropdown list in the "payment_status" field.
7. Add any payment notes (optional).
	* Enter any additional payment notes in the "payment_notes" field.
8. Enter the client's email address (optional).
	* Enter the client's email address in the "client_email" field.

## Field-by-Field Explanation

* **billing_details** (`billing_details`, text, required: false): Enter your billing details here. This field is not required but can be useful for internal tracking purposes.
* **client_name** (`client_name`, text, required: false): Enter the client's name.
* **vehicle_details** (`vehicle_details`, text, required: false): Enter any relevant vehicle details, such as make, model, and year.
* **payment_method** (`payment_method`, select_one, required: false): Choose a payment method from the dropdown list:
	+ Cash
	+ Credit Card
	+ PayPal
	+ Bank Transfer
* **payment_amount** (`payment_amount`, number, required: false): Enter the payment amount.
* **payment_due_date** (`payment_due_date`, date, required: false): Select a due date for payment.
* **payment_status** (`payment_status`, select_one, required: false): Select the payment status:
	+ Paid
	+ Partially Paid
	+ Unpaid
* **payment_notes** (`payment_notes`, note, required: false): Enter any additional payment notes or comments.
* **client_email** (`client_email`, email, required: false): Enter the client's email address.

## Tips
- Make sure to fill out all required fields.
- Double-check your entries for accuracy.
- Use the available payment methods to ensure smooth transaction processing.
