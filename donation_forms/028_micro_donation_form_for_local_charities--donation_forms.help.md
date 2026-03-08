# Micro Donation Form For Local Charities - Help Guide
## Purpose
This form is designed to collect donation information from users to support local charities.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **UserName** in the first field.
2. Provide your **user_email** in the second field. This is a required field.
3. Choose how you'd like to **donate** - select **One-time** or **Recurring**.
4. Select your preferred **PaymentGateway**, either **Stripe** or **PayPal**.
5. If you'd like to support a **CharityName**, **CharityAddress**, and **CharityPhoneNumber**, you can enter this information. Note that these fields are not required.
6. In the **UserMessage** field, if you have any comments or questions, feel free to add them.
7. If you agree to the **TermsOfService**, select the corresponding option. This is not a required field.

## Field-by-Field Explanation

* **UserName** (ID 1, text, required/optional): Enter your name as you'd like to be known.
* **user_email** (ID 2, email, required): Enter your email address.
* **DonationAmount** (ID 3, number, required): Enter the amount you'd like to donate.
* **DonationFrequency** (ID 4, select_one, required): Choose how often you'd like to donate (One-time or Recurring).
* **PaymentGateway** (ID 5, select_one, required): Select your preferred payment method (Stripe or PayPal).
* **CharityName** (ID 6, text, optional): Enter the name of the charity you'd like to support.
* **CharityAddress** (ID 7, text, optional): Enter the address of the charity.
* **CharityPhoneNumber** (ID 8, text, optional): Enter the phone number of the charity.
* **UserMessage** (ID 9, note, optional): Leave any comments or questions you may have.
* **TermsOfService** (ID 10, select_multiple, optional): Accept the terms of service by selecting "Yes".
