# Stripe Nonprofit Donation Form - Help Guide
## Purpose
The Stripe Nonprofit Donation Form is designed for non-profit organizations to collect donations from users. This form allows users to choose their donation amount and frequency, providing flexibility for one-time and recurring donations.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose whether this is a one-time or first time donation (Donation Frequency field).
2. Fill in your chosen donation amount (Donation Amount field, if applicable).
3. Select your recurring donation frequency, if applicable (Recurring Donation Frequency field).
4. Fill in your recurring donation amount (Frequency Recurring Donation Amount field, if applicable).

## Field-by-Field Explanation
* **Donation Amount** (`donation_amount`, number, optional): Enter the amount you wish to donate.
* **Donation Frequency** (`donation_frequency`, select_multiple, required): Choose whether this is a one-time or first time donation, or select "Recurring" for ongoing contributions. If recurring, select "First Time" or a frequency type ("Monthly", "Quarterly", "Annually") for the recurring donations.
* **First Time Donation Amount** (`first_time_donation_amount`, number, optional): Enter the amount you wish to donate if you selected "First Time" in the Donation Frequency field. This field is only visible if "First Time" is chosen.
* **Recurring Donation Frequency** (`recurring_donation_frequency`, select_multiple, required): Select the frequency of your recurring donations, such as "Monthly", "Quarterly", or "Annually".
* **Frequency Recurring Donation Amount** (`frequency_recurring_donation_amount`, number, optional): Enter the amount you wish to donate each time if you selected a frequency type other than "First Time" in the Recurring Donation Frequency field. This field is only visible if you selected "Monthly", "Quarterly", or "Annually".

## Tips

* Make sure to review and update your donation settings as needed to ensure you are receiving the correct amount of notifications and payments.
* If you have any questions or issues with your donation, please contact [support email address].
