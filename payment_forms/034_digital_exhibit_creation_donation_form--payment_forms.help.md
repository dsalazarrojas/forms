# digital_exhibit_creation_donation_form - Help Guide
## Purpose
This form is designed to collect donations from users for digital exhibit creation projects.

## How To Complete This Form
To complete this form, follow these steps:
1. Review the form fields and ensure you understand what each field is for.
2. Select the donation amount from the dropdown options or enter a custom amount.
3. Choose the donation frequency (e.g., monthly or one time).
4. If you have a specific date for the donation (e.g., a specific project deadline), enter it in the interval field.
5. Enter your email address if you want to receive updates about the project.
6. Select the payment method (e.g., PayPal or Stripe).
7. Enter any additional payment details in the text area.
8. Enter your name.
9. Enter your email address.
10. Enter your phone number (optional).

## Field-by-Field Explanation
* **Donations** (`donation_amount`, `number`, required: false): Enter the amount you wish to donate to the project.
* **Frequency** (`donation_frequency`, `select_one`, required: false): Choose whether you want to make a one-time or monthly donation.
* **Interval** (`donation_interval`, `date`, required: false): If you're donating for a specific project, enter the date you want to make the donation by.
* **Email** (`email`, `email`, required: false): If you want to receive updates about the project, enter your email address.
* **Payment** (`payment_method`, `select_multiple`, required: false): Select the payment method you prefer, such as PayPal or Stripe.
* **Payment Details** (`payment_details`, `note`, required: false): Enter any additional details about your payment.
* **Your Name** (`supporter_name`, `text`, required: false): Enter your name so we can acknowledge your support.
* **Email** (`supporter_email`, `email`, required: false): Enter your email address so we can contact you about your donation.
* **Phone** (`supporter_phone`, `text`, required: false): Enter your phone number (optional) so we can contact you about your donation.
