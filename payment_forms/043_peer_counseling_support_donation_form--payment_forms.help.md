<thinking>
The "peer_counseling_support_donation_form" form is intended to collect information from donors who want to support a peer counseling program. This form likely exists to facilitate donations from individuals who want to contribute to the program's funds, and the form's fields are designed to gather essential details about the donor and their donation preferences. 

The form appears to be a simple donation form with a mix of text fields, selection fields, and a date field. To avoid redundancy, it is recommended to review the existing documentation before proceeding to this form.

This form does not have any complex conditional logic or validation rules specified in the inputSchema, suggesting that it's meant for basic data collection and submission purposes.

Before continuing, please review the form's fields carefully and ensure that this is the correct form for your purpose.

</thinking>

# peer_counseling_support_donation_form - Help Guide

## Purpose
This form is intended to collect information from donors who want to support a peer counseling program.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the required fields (indicated by the * symbol) and any optional fields as needed.
2. Review each field to ensure that the correct information is provided.

## Field-by-Field Explanation

* **Form Info** (`form_info`, `text`, required: false): Enter a brief description of your donation.
* **Donor Info** (`donor_info`, `text`, required: false): Enter your name and any additional information about yourself as the donor.
* **Donation Amount** (`donation_amount`, `number`, required: false): Enter the amount you want to donate.
* **Donation Frequency** (`donation_frequency`, `select_one`, required: false): Select how often you'd like to make this donation:
	+ One-time
	+ Recurring
* **Frequency** (`frequency`, `select_one`, required: false): If you selected **Recurring**, choose how often you'd like to make your donation:
	+ Daily
	+ Weekly
	+ Monthly
* **Donation Date** (`donation_date`, `date`, required: false): Enter the date of your first donation.
* **Donor Email** (`donor_email`, `email`, required: false): Enter your email address.
* **Donor Phone** (`donor_phone`, `text`, required: false): Enter your phone number.
* **Payment Method** (`payment_method`, `select_multiple`, required: false): Select how you'd like to make your payment:
	+ Card
	+ PayPal
	+ Bank
* **Payment Details** (`payment_details`, `note`, required: false): Enter any additional information about your payment method.
* **Form Comments** (`form_comments`, `note`, required: false): Enter any additional comments about your donation.
* **Form Submission** (`form_submit`, `select_one`, required: false): Confirm that you're ready to submit your form:
	+ 'Yes'
	+ 'No'

Please fill out this form accurately and thoroughly to provide the best possible support for the peer counseling program.
