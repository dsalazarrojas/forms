# CSR Charity Donation Form - Help Guide

## Purpose
This form is for donors to make a charitable contribution to support the charity's efforts.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your contact information, including your name, email address, and phone number (if you wish to be contacted).
2. Choose the frequency of your donation (one-time, monthly, quarterly, or annually).
3. Specify how you would like to receive your receipt (via email or mail).
4. Select the payment method you would like to use (credit card, PayPal, bank transfer, or check by mail).
5. If you wish to remain anonymous, choose to keep your name from being published in our annual report.
6. If you wish to receive our newsletter, choose to subscribe.

## Field-by-Field Explanation

* **Full Name** (`donor_name`, text, required): Please enter your full name as it appears on your identification documents.
* **Email Address** (`donor_email`, email, required): Enter your email address to receive a confirmation of your donation and your receipt.
* **Phone Number** (`donor_phone`, text, optional): If you wish to be contacted for any reason, please enter your phone number.
* **Mailing Address** (`donor_address`, text, required): Enter your mailing address to receive your receipt via mail.
* **Donation Amount** (`donation_amount`, number, required): Enter the amount you wish to donate in USD.
* **Donation Frequency** (`donation_frequency`, select_one, required): Choose how often you would like to make your donation (one-time, monthly, quarterly, or annually).
* **Where Should We Apply Your Donation** (`designation`, select_one, required): Choose how you would like to apply your donation (General Fund, Education Programs, Community Outreach, Emergency Relief, or Specific Project).
* **Is this a Tribute Gift?** (`tribute_gift`, select_one, optional): If this is a gift in honor or memory of someone, choose "In Honor of" or "In Memory of".
* **Tribute Name** (`tribute_name`, text, optional): If you've chosen to make a tribute gift, enter the name of the person being honored or remembered.
* **Does Your Employer Match Donations?** (`employer_matching`, select_one, optional): If your employer matches donations, choose "True".
* **Payment Method** (`payment_method_header`, note, required): Choose the payment method you would like to use (credit card, PayPal, bank transfer, or check by mail).
* **Payment Type** (`payment_type`, select_one, required): Choose the type of payment you would like to use (credit card, PayPal, bank transfer, or check by mail).
* **I Wish to Remain Anonymous** (`anonymous_donation`, select_one, optional): If you wish to remain anonymous, choose "True".
* **Subscribe to Our Newsletter** (`subscribe_newsletter`, select_one, optional): If you wish to receive our newsletter, choose "True".
* **Additional Comments** (`donor_comments`, text, optional): Enter any additional comments or messages you would like to communicate to us.
