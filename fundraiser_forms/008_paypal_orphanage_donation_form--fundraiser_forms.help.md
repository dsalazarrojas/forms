# paypal_orphanage_donation_form - Help Guide
## Purpose
The "PayPal Orphanage Donation Form" is used to collect donations to support orphanages. To process your donation correctly, please fill out the form accurately and completely.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter your full name as it appears on your identification or passport in the "Full Name" field.
2. Enter a valid email address in the "Email" field that we can use to communicate with you about your donation.
3. Enter the amount you wish to donate in the "Donation Amount" field.
4. Choose your preferred frequency of donation in the "Frequency" field.
5. Select your preferred payment method from the options provided in the "Payment Method" field.
6. Provide any additional comments or information in the "Notes" field if you wish.
7. Confirm your intention to donate by selecting one of the options in the "Confirmation" field.

## Field-by-Field Explanation
- **Full Name** (`name`, `text`, required: false): Enter your full name as it appears on your identification or passport.
- **Email** (`email`, `email`, required: true): Enter a valid email address that we can use to communicate with you about your donation.
- **Donation Amount** (`donation_amount`, `number`, required: true): Enter the amount you wish to donate.
- **Frequency** (`frequency`, `select_multiple`, required: false): Choose your preferred frequency of donation from "Option 1", "Option 2", or "Option 3".
  * Option 1: Daily
  * Option 2: Weekly
  * Option 3: Monthly
- **Payment Method** (`payment_method`, `select_one`, required: true): Select one of the available options for processing your donation.
  * Option 1: PayPal
  * Option 2: Credit/Debit Card
  * Option 3: Bank Transfer
- **Notes** (`notes`, `note`, required: false): Provide any additional comments or information about your donation.
- **Confirmation** (`confirmation`, `select_one`, required: true): Confirm your intention to donate by selecting one of the options.
  * Option 1: Yes
  * Option 2: No
  * Option 3: Maybe
