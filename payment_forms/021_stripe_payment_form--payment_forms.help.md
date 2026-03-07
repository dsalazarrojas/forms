<thinking>
This form is for processing payments through the Stripe payment gateway.
Stripe is a popular online payment system that allows you to accept payments on your website or application. The goal of this form is to gather information about the payment method, amount, and other relevant details.
To ensure this form is relevant and not duplicated, we need to check for existing payments or payment failures. This form will not be completed if there's any existing payment data or payment failures.
</thinking>

# stripe_payment_form - Help Guide
## Purpose
The Stripe payment form is designed to collect information for payments processed through the Stripe gateway. This form is intended for customers or users who wish to make a payment.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the payment method (e.g., credit card, PayPal, etc.) by selecting 'Yes' or 'No' from the payment method options.
2. Enter the amount of the payment (if applicable).
3. Optionally, provide a description of the payment (if applicable).
4. Enter your email address (if applicable).
5. Enter your phone number (if applicable).

## Field-by-Field Explanation
* **Payment Method** (`payment_method`, select_multiple, required false):
	+ This field asks whether a payment method (e.g., credit card, PayPal, etc.) will be used for this payment.
* **Amount** (`amount`, number, required false):
	+ This field is for entering the amount of the payment. If the payment method selected is credit card, this field is mandatory.
* **Description** (`description`, note, required false):
	+ This field is for providing a description of the payment, if necessary.
* **Email** (`email`, email, required false):
	+ This field is for entering your email address (if applicable).
* **Phone** (`phone`, text, required false):
	+ This field is for entering your phone number (if applicable).

## Tips
* Make sure to select the correct payment method and enter the required information for the payment amount.
* If you have any issues with the payment, please contact our support team.

Please note that some fields are not required, and the form will not be completed if there's any existing payment data or payment failures.
