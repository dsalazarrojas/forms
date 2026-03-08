# PayPal Donation Form - Help Guide
## Purpose
The PayPal Donation Form is designed to collect donations from users. It gathers essential information to process donations efficiently and transparently.

## How To Complete This Form
1. Click on the form to start filling it out.
2. Fill in the Donor Information field.
3. Enter your Donor Name.
4. Provide your Donor Email.
5. Enter the Donation Amount, which is the amount you're willing to donate. Please use the currency dropdown below for currency selection.
6. Select the currency for the donation from the dropdown options.
7. If you want to specify the exact amount in a specific currency, you can enter it in the Donation Amount (USD) field.
8. Choose the type of donation: General Donation or Recurring Donation.
9. If you'd like to add any notes or comments, you can do so in the Note field.
10. Click the submit button to complete the form.

## Field-by-Field Explanation

* **Donor Information** (`donor_info`, `text`, required: false): This field is for providing your general information. Please fill in any relevant details you'd like us to have.
* **Donor Name** (`name`, `text`, required: false): This is your name or the name of the organization/charity making the donation.
* **Donor Email** (`email`, `email`, required: false): Enter your email address so we can get in touch with you regarding the donation.
* **Donation Amount** (`donation_amount`, `number`, required: false): The amount you're willing to donate. This is a numerical value.
* **Donation Currency** (`donation_amount_currency`, `select_one`, required: false): Choose the currency for the donation.
* **Donation Amount (USD)** (`donation_amount_currency_option`, `text`, required: false): If you've selected USD, you can specify the exact amount in this field. Please leave this field blank if you're using the other currency options.
* **Donation Type** (`donation_type`, `select_multiple`, required: false): Choose the type of donation: General Donation or Recurring Donation.
* **Note (Optional)** (`note`, `note`, required: false): Enter any notes or comments you'd like to add regarding your donation.
