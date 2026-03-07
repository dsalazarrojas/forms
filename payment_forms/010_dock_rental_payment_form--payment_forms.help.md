<thinking>
This is a payment form for dock rental payments, used to collect information from customers to process payments for dock rentals.
The form is designed to be completed by customers and is not intended for internal use.
There are no other forms with this exact name, and it is a unique form designed to handle specific payment details for dock rentals.
The form is used to collect payment details, customer information, rental details, and other relevant information.
</thinking>

# Dock Rental Payment Form - Help Guide
## Purpose
The Dock Rental Payment Form is used to collect payment information from customers to process payments for dock rentals. This form is a crucial part of the payment process, ensuring that all necessary details are collected accurately and efficiently.

## How To Complete This Form
1. Fill out the form accurately and completely, following the instructions for each field.
2. Review each field carefully to ensure that you're providing the correct information.
3. If you have any questions or concerns, contact our support team for assistance.

## Field-by-Field Explanation

* **Payment Type** (`payment_type`, select_one, required false): Select the payment type from the options provided.
	+ This field allows you to choose between three payment types: Credit Card, Bank Transfer, or Other.
* **Payment Method** (`payment_method`, select_one, required false): Select the payment method from the options provided.
	+ This field allows you to choose between three payment methods: Stripe, PayPal, or Other.
* **Card Number** (`card_number`, text, required false): Enter the credit or debit card number.
	+ This field is used to collect the card number for credit or debit card payments.
* **Exp. Date** (`exp_date`, text, required false): Enter the expiration date of the card.
	+ This field is used to collect the expiration date of the credit or debit card.
* **CVV** (`cvv`, text, required false): Enter the CVV (Credit/Debit Card Verification Value) of the card.
	+ This field is used to collect the CVV of the card for verification purposes.
* **Notes** (`notes`, note, required false): Enter any additional comments or notes about the payment.
	+ This field is used to collect any additional comments or notes about the payment.
* **Customer Info** (`customer_info`, text, required false): Enter any additional information about the customer.
	+ This field is used to collect any additional information about the customer.
* **Rental Date** (`rental_date`, date, required false): Enter the start date of the rental period.
	+ This field is used to collect the start date of the rental period.
* **Rental Time** (`rental_time`, time, required false): Enter the start time of the rental period.
	+ This field is used to collect the start time of the rental period.
* **Rental Duration** (`rental_duration`, number, required false): Enter the duration of the rental period in hours or days.
	+ This field is used to collect the duration of the rental period.
* **Rental Cost** (`rental_cost`, number, required false): Enter the rental cost of the dock.
	+ This field is used to collect the rental cost of the dock.
* **Submit** (`submit`, text, required false): Click this button to submit the form.
	+ This field is used to submit the form for processing.

## Tips
* Make sure to fill out all required fields accurately and completely.
* If you're unsure about any field, contact our support team for assistance.
* Review the form carefully before submitting to ensure that all information is correct.
