# PayPal Business Payment Form On The Pop Up - Help Guide
## Purpose
The PayPal Business Payment Form On The Pop Up is a form designed to collect payment information from customers for business transactions.

## How To Complete This Form
To complete this form, follow these steps:

1. Select a payment method: Choose between "Card" or "PayPal".
2. Enter your name and confirm the name if you have two names to enter.
3. Enter your email address to facilitate communication and verification.
4. Enter your phone number for further contact.
5. Enter the amount of the transaction, in the currency selected earlier.
6. Choose the payment date and time for the transaction.
7. Leave any additional notes about the transaction in the Notes section.
8. If you have a second payment method, repeat steps 1-7.

## Field-by-Field Explanation
* **Payment Method (`payment_method`, select_one, required: false):** Select the payment method you want to use for this transaction. This can be either "Card" or "PayPal".
* **Name (`name`, text, required: false):** Enter your name to confirm your identity.
* **Name 2 (`name_2`, text, required: false):** Enter an optional second name, if applicable.
* **Email (`email`, email, required: false):** Enter your email address for further communication and verification.
* **Phone (`phone`, text, required: false):** Enter your phone number for further contact and verification.
* **Amount (`amount`, number, required: false):** Enter the amount of the transaction in the selected currency.
* **Currency (`currency`, select_one, required: false):** Choose the currency for the transaction from the available options (USD, EUR, JPY).
* **Payment Date (`payment_date`, date, required: false):** Select the date for the payment to be made.
* **Payment Time (`payment_time`, time, required: false):** Choose the time for the payment to be made.
* **Notes (`notes`, note, required: false):** Enter any additional notes about the transaction.
* **Payment Method 2 (`payment_method_2`, select_one, required: false):** Select a second payment method, if applicable.
* **Name 2 (`name_2`, text, required: false):** Enter an optional second name, if applicable.
* **Email 2 (`email_2`, email, required: false):** Enter an optional second email address, if applicable.
* **Phone 2 (`phone_2`, text, required: false):** Enter an optional second phone number, if applicable.
