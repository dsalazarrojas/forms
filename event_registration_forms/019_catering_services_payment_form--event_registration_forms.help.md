# Catering Services Payment Form - Help Guide

## Purpose
The Catering Services Payment Form is designed to collect payment information from customers for catering services. This form is used to process payments for events and ensures that the customer's payment details are accurately recorded.

## How To Complete This Form
1. Fill in the required fields:
	* Payer Name
	* Email Address
	* Phone Number
	* Event Name
	* Event Date
	* Catering Company Name
	* Invoice Number
	* Service Cost
	* Subtotal
	* Tax Amount
	* Total Amount Due
	* Payment Method
	* Payment Terms
	* Authorization
2. Select the relevant payment method and terms from the provided options.
3. If paying by card, provide the card holder's name.
4. If applicable, provide any additional charges or discount amounts.

## Field-by-Field Explanation

* **Payer Name** (`payer_name`, text, required): Enter the name of the person paying for the catering services.
* **Email Address** (`payer_email`, email, required): Enter the email address of the person paying for the catering services.
* **Phone Number** (`payer_phone`, text, required): Enter the phone number of the person paying for the catering services.
* **Event Name** (`event_name`, text, required): Enter the name of the event for which catering services are being paid.
* **Event Date** (`event_date`, date, required): Enter the date of the event for which catering services are being paid.
* **Catering Company Name** (`catering_company`, text, required): Enter the name of the catering company providing the services.
* **Invoice Number** (`invoice_number`, text, required): Enter the reference number for this payment.
* **Service Cost** (`service_cost`, number, required): Enter the cost of the catering services provided.
* **Subtotal** (`subtotal`, number, required): Enter the subtotal amount due before taxes and other charges.
* **Tax Amount** (`tax_amount`, number, required): Enter the tax amount due.
* **Total Amount Due** (`total_due`, number, required): Enter the total amount due for the catering services.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method used to make the payment (e.g. Credit Card, Debit Card, Bank Transfer, etc.).
* **Card Holder Name** (`card_holder_name`, text, optional): If paying by card, enter the name of the card holder.
* **Payment Terms** (`payment_terms`, select_one, required): Select the payment terms applied to this payment (e.g. Full Payment Due Now, 50% Deposit, 50% Due at Event, etc.).
* **Deposit Amount Paid** (`deposit_amount_paid`, number, optional): If applicable, enter the deposit amount paid.
* **Remaining Balance Due** (`remaining_balance`, number, optional): Enter the remaining balance due after any deposits.
* **Special Payment Instructions or Notes** (`payment_notes`, text, optional): Enter any special payment instructions or notes.
* **I authorize payment for the amount specified** (`authorization`, select_one, required): Confirm that you authorize payment for the specified amount.

## Tips
* Ensure that all required fields are completed accurately and thoroughly.
* Select the correct payment method and terms for your payment.
* If paying by card, ensure that you have the necessary information to complete the card holder's name field.
