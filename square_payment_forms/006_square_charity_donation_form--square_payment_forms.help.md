# Square Charity Donation Form - Help Guide
## Purpose
The Square Charity Donation Form is a tool for donors to contribute to a charity or cause. It collects information and details of the donation, which are likely used by the charity for internal purposes such as tracking and accounting.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "Donator Name" field.
2. Provide your email address in the "Email" field.
3. Optionally, include a message for the charity to know why you're donating.
4. Enter the amount you wish to donate in the "Donation Amount" field. This should be a numerical value.
5. Select the currency for your donation from the "Donation Currency" options.
6. Optionally, enter the amount of any associated fees for your donation.
7. Select the currency for your fees from the "Donation Fee Currency" options.
8. Choose the payment method you'll use for the donation from the "Payment Method" options.

## Field-by-Field Explanation
* **Donator Name** (`donator_name`, text, required): Enter your name as the person making the donation.
* **Email** (`email`, email, required): Provide a valid email address where the charity can contact you.
* **Message** (`message`, text, optional): Write a brief message to the charity to let them know why you're donating.
* **Donation Amount** (`donation_amount`, number, optional): Enter the amount you wish to donate.
* **Donation Currency** (`donation_currency`, select_one, optional): Select the currency of your donation from the available options (e.g. USD or EUR).
* **Donation Fee** (`donation_fees`, number, optional): Enter the amount of any associated fees for your donation.
* **Donation Fee Currency** (`donation_fees_currency`, select_one, optional): Select the currency of the fees from the available options.
* **Payment Method** (`payment_method`, select_multiple, optional): Choose the payment method you will use for your donation from the available options (e.g. Credit card or Paypal).
