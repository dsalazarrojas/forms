# recurring_credit_card_authorization_form - Help Guide
## Purpose
The Recurring Credit Card Authorization form is used to authorize recurring payments from a customer's credit card. This form is required to collect sensitive information from customers, including their card holder information, payment details, and credit card authorization.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the Card Holder Information form with the customer's details.
2. Enter the customer's Payment Info, including the payment gateway to use for recurring payments.
3. Provide the Stripe API information to connect to the payment gateway.
4. Enter the customer's customer information.
5. Enter the card expiry date and CVV (Card Security Code).
6. Enter the card holder's address.
7. Enter the card expiry year.
8. Enter the card number.
9. Finally, authorize the recurring credit card payment by entering the authorization details.

## Field-by-Field Explanation
### Card Holder Information
* Card Holder Information (`Card Holder Information`, `text`, required): This field is used to collect the customer's name and other identifying information.
### Payment Info
* Payment Info (`Payment Info`, `text`, required): Enter the payment method to be used for recurring payments.
### Stripe Api Info
* Stripe Api Info (`Stripe Api Info`, `text`, required): Enter the Stripe API key to connect to the payment gateway.
### Payment Gateway
* Payment Gateway (`Payment Gateway`, `text`, required): Select the payment gateway to use for recurring payments.
### Customer Info
* Customer Info (`Customer Info`, `text`, required): Enter the customer's information for billing purposes.
### Expiry Date Cvv
* Expiry Date Cvv (`Expiry Date Cvv`, `text`, required): Enter the credit card's expiry date and CVV (Card Security Code).
### Card Holder Address
* Card Holder Address (`Card Holder Address`, `text`, required): Enter the card holder's address for billing and delivery purposes.
### Expiry Year
* Expiry Year (`Expiry Year`, `text`, required): Enter the card's expiry year for recurring payments.
### Card Number
* Card Number (`Card Number`, `text`, required): Enter the card number for recurring payments.
### Recurring Credit Card Authorization
* Recurring Credit Card Authorization (`Recurring Credit Card Authorization`, `text`, required): Enter the authorization details for recurring payments.

**Tips**
* Make sure to fill in all required fields.
* Review the form carefully before submission.
* Ensure the card holder's information is correct.
* Test the form before submission to ensure everything is in order.
