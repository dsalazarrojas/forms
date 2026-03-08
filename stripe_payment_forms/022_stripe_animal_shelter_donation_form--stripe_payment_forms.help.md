# stripe_animal_shelter_donation_form - Help Guide
## Purpose
This form is used to collect donations for an animal shelter through Stripe. It allows users to specify the amount, frequency, and tier of their donation, making it convenient for them to support the shelter.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the required fields with your information.
2. Select the amount of your donation from the options provided.
3. Choose the tier of your donation (Small, Medium, Large).
4. Choose the frequency of your donation (One-Time, Monthly, Annually).
5. You can also specify any additional details or notes in the "Notes" field.

## Field-by-Field Explanation
* **User Information (user_info)**: Enter your name and other contact information, which will be used to contact you for any further instructions or details.
* **Donation Details (donation_details)**: Provide a brief description of your donation, which will help the shelter understand your intentions.
* **Payment Information (payment_info)**: This field is not explicitly documented but is required, implying it's for entering card details or other payment methods.
* **Payment Amount (stripe_payment)**: Select the amount you would like to donate from the options provided.
* **Tier (stripe_payment_tier)**: Choose the tier of your donation, which determines the impact of your donation.
* **Frequency (stripe_payment_frequency)**: Select how often you would like to make this donation (One-Time, Monthly, Annually).
* **Other (stripe_payment_frequency_other)**: If you have a specific request or preference for your donation that doesn't fit into the provided options, enter it here.
* **Email (stripe_payment_email)**: Enter your email address, which will be used for any further contact.
* **Phone (stripe_payment_phone)**: Enter your phone number, which will be used for any further contact.
* **Notes (stripe_payment_notes)**: Add any additional comments or details about your donation.
