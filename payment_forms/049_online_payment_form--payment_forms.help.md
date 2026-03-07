<thinking>
The purpose of the "online-payment-form" is to collect information from users for online payments, such as payment methods, amount, and other relevant details. This form is likely used for e-commerce or digital transactions.

To avoid duplication of effort, we should ensure that this form is only used when a payment is actually required, and not for other purposes.

The form has multiple pages, but for the sake of this help guide, we will focus on one page at a time.

</thinking>

# online-payment-form - Help Guide
## Purpose
The "online-payment-form" is used to collect information for online payments, such as payment methods, amount, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the payment method from the "Payment Methods" dropdown list.
2. Enter the total amount of the payment in the "Amount" field.
3. Choose a date and time for the payment in the "Payment Date" and "Payment Time" fields.
4. Add any additional notes about the payment in the "Notes" field (optional).
5. Enter the email address to contact you at (optional).
6. Enter your phone number (optional).
7. Enter your address (optional).
8. Enter your city, state, and ZIP code (optional).
9. Enter the CVV (Card Verification Value) of your credit/debit card (optional).

## Field-by-Field Explanation

* **Payment Methods** (`payment_methods`, select_multiple, required/optional): Select your preferred payment method from the list, such as credit card, debit card, PayPal, Apple Pay, or Google Pay.
* **Amount** (`amount`, number, required/optional): Enter the total amount of the payment in the format `1234.56` or `100`.
* **Payment Date** (`payment_date`, date, required/optional): Choose a date for the payment in the format `MM/DD/YYYY`.
* **Payment Time** (`payment_time`, time, required/optional): Choose a time for the payment in the format `HH:MM AM/PM`.
* **Notes** (`notes`, note, required/optional): Add any additional notes about the payment, such as a description or a reason for the payment.
* **Email** (`email`, email, required/optional): Enter the email address to contact you at.
* **Phone** (`phone`, text, required/optional): Enter your phone number.
* **Address** (`address`, text, required/optional): Enter your address.
* **City State ZIP** (`city_state_zip`, text, required/optional): Enter your city, state, and ZIP code.
* **CVV** (`cvv`, text, required/optional): Enter the CVV (Card Verification Value) of your credit/debit card.
* **Form Control** (`form_control`, text, required/optional): Enter any additional information about the form, such as a reference number or a transaction ID.
