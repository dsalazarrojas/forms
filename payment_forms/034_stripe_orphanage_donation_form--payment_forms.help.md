<thinking>...</thinking>

# Stripe Orphanage Donation Form - Help Guide
## Purpose
The Stripe Orphanage Donation Form is a tool for making donations to support a specific cause. The form collects various information from the donor to facilitate the donation process.

## How To Complete This Form

To complete the form, follow these steps:

1. Enter a title for your donation.
2. Specify the amount you wish to donate in the desired currency.
3. Choose how you would like to make the donation (one-time or recurring).
4. Select a payment method (card, PayPal, or bank transfer).
5. Enter your email address.
6. Provide your phone number.
7. Enter your address.
8. (Optional) Add any additional notes about your donation.
9. Confirm that you are making a donation.

## Field-by-Field Explanation

* **Stripe Orphanage Donation Form** (`form_title`, text, required/optional): Enter a title for your donation that will be displayed to the recipient.
* **Amount** (`amount`, number, required/optional): Enter the amount you wish to donate in the selected currency.
* **Currency** (`currency`, select_one, required/optional): Choose the currency for your donation (USD, EUR, or GBP).
* **Frequency** (`frequency`, select_multiple, required/optional): Select whether you would like to make a one-time or recurring donation.
* **Payment Method** (`payment_method`, select_multiple, required/optional): Choose a payment method for your donation (card, PayPal, or bank transfer).
* **Email** (`email`, email, required/optional): Enter a valid email address where you can be reached.
* **Phone** (`phone`, text, required/optional): Enter your phone number.
* **Address** (`address`, text, required/optional): Enter your address.
* **Notes** (`notes`, note, required/optional): Add any additional comments or notes about your donation.
* **Confirm donation** (`confirm_donation`, select_one, required/optional): Confirm that you are making a donation.
