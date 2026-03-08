# Stripe Church Donation Form - Help Guide
## Purpose
The Stripe Church Donation Form is a simple form designed to collect information from individuals making a donation to the church. It is intended to gather basic contact details, donation amount and purpose, and payment preferences.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your First Name.
2. Enter your Last Name.
3. Enter your Email address.
4. Enter your Phone number.
5. Enter the amount you wish to donate.
6. Select the purpose of your donation.
7. Select the frequency of your donation (e.g., 1 week, 2 weeks, Monthly, etc.).
8. Choose the payment method you prefer (e.g., Stripe or Check).
9. Provide any additional comments about your donation, if desired.
10. Click "Submit" to complete the form.

## Field-by-Field Explanation
- **First Name** (`name: first_name`, `type: text`, `required: false`): Enter your first name for our records.
- **Last Name** (`name: last_name`, `type: text`, `required: false`): Enter your last name for our records.
- **Email** (`name: email`, `type: email`, `required: false`): Enter your email address so we can contact you about your donation.
- **Phone** (`name: phone`, `type: text`, `required: false`): Enter your phone number so we can reach you about your donation.
- **Donation Amount** (`name: donation_amount`, `type: number`, `required: false`): Enter the amount you wish to donate. This can be any amount, big or small.
- **Purpose of Donation** (`name: purpose_of_donation`, `type: text`, `required: false`): Select the reason for your donation (e.g., to support a specific cause, to honor someone, etc.).
- **Frequency of Donation** (`name: frequency_of_donation`, `type: text`, `required: false`): Select how often you would like to make this donation (e.g., one-time, monthly, etc.).
- **Frequency of Donation** (`name: frequency_of_donation_frequency`, `type: select_one`, `required: false`): Select the specific frequency of your donation (e.g., 1 month, 2 months, 1 year, etc.).
- **Gift Frequency Options** (`name: gift_frequency_options`, `type: select_multiple`, `required: true`): Choose all the frequencies of donation you are interested in making (e.g., 1 week, 2 weeks, Monthly, etc.).
- **Payment Method** (`name: payment_method`, `type: select_one`, `required: true`): Select how you would like to make your donation (e.g., Stripe or Check).
- **Comment** (`name: comment`, `type: text`, `required: false`): Provide any additional comments or notes about your donation.
- **Submit** (`name: submit`, `type: text`, `required: false`): Click "Submit" to complete your donation form.
