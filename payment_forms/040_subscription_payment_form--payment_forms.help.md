# Subscription Payment Form - Help Guide
## Purpose
This form is used to collect information about a customer's subscription payment details. It is intended for new or existing customers who want to set up a recurring payment subscription.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the payment method you want to use (e.g. credit card, debit card, PayPal, or bank transfer).
2. Enter your billing address (if applicable).
3. Provide your customer name.
4. Enter your customer email address.
5. Enter your customer phone number (if applicable).
6. Enter the payment amount.
7. Select the billing frequency (e.g. monthly, quarterly, or annually).
8. Choose the payment frequency (e.g. weekly, monthly, quarterly, or annually).
9. Set the start date for your subscription.
10. Set the end date for your subscription (if applicable).

## Field-by-Field Explanation
* **Payment Method** (`Payment Method`, `select_one`, required: false): Select the payment method you want to use to pay for your subscription. Options include credit card, debit card, PayPal, and bank transfer.
* **Billing Address** (`Billing Address`, `note`, required: false): This field is for entering your billing address, if you are using a payment method that requires it (e.g. credit card or bank transfer).
* **Customer Name** (`Customer Name`, `text`, required: false): Enter your name as the subscriber.
* **Customer Email** (`Customer Email`, `email`, required: false): Enter your email address to be used for subscription-related communications.
* **Customer Phone** (`Customer Phone`, `text`, required: false): Enter your phone number (if applicable).
* **Payment Amount** (`Payment Amount`, `number`, required: false): Enter the amount you want to pay for your subscription.
* **Billing Frequency** (`Billing Frequency`, `select_one`, required: false): Select how often you want to be billed (e.g. monthly, quarterly, or annually).
* **Payment Frequency** (`Payment Frequency`, `select_multiple`, required: false): Select how often you want to make payments (e.g. weekly, monthly, quarterly, or annually).
* **Start Date** (`Start Date`, `date`, required: false): Set the start date for your subscription.
* **End Date** (`End Date`, `date`, required: false): Set the end date for your subscription (if applicable).
