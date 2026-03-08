<thinking>
We will design a user-facing help guide for the "worldpay_us_alumni_donation_form" form. This form is intended to collect donation information from alumni donors, including their contact information, donation amount, and payment method. The form's purpose is to streamline the donation process, ensuring accurate and secure transactions. We will guide users through each field to help them fill out the form correctly and efficiently.</thinking>

# worldpay_us_alumni_donation_form - Help Guide
## Purpose
This form is designed to collect donation information from alumni donors for the Worldpay US Alumni Donations program. Please fill out the form accurately and securely to complete your donation.

## How To Complete This Form
1. Fill out the form carefully, ensuring all required fields are completed.
2. Provide accurate and up-to-date information to ensure seamless processing.

## Field-by-Field Explanation
- **Donor Information** (`donor_info`, `text`, required: false): This field is optional and allows you to provide a brief description about yourself or the donation.
- **Amount Given** (`amount_given`, `number`, required: true): Enter the amount you wish to donate.
- **Gift Frequency** (`gift_frequency`, `select_one`, required: false): Choose how frequently you would like to make this gift, including `One-Time`, `Monthly`, or `Quarterly`.
- **If Other, specify** (`gift_frequency_other`, `text`, required: false): If your gift frequency is not listed, specify it here.
- **Gift Frequency Other Value** (`gift_frequency_other_value`, `text`, required: false): Enter the other gift frequency you specified.
- **Gift Frequency Other Value2** (`gift_frequency_other_value2`, `text`, required: false): Enter the other gift frequency you specified (if different from `gift_frequency_other_value`).
- **Email** (`email`, `email`, required: true): Enter your valid email address.
- **Phone** (`phone`, `text`, required: false): Enter your phone number (optional).
- **Monthly Frequency** (`gift_frequency_monthly_frequency`, `select_one`, required: true): Choose how often you will make this gift on a monthly basis.
- **Donation Date** (`donation_date`, `date`, required: true): Enter the date of your donation.
- **Donation Time** (`donation_time`, `time`, required: true): Enter the time of your donation.
- **Payment Method** (`payment_method`, `select_one`, required: true): Choose how you would like to make your payment, including `Credit Card`, `Bank Transfer`, or `Other (please specify)`.
- **Payment Method Other** (`payment_method_other`, `text`, required: false): If you choose `Other (please specify)`, describe your payment method here.
- **Card Number** (`card_number`, `text`, required: false): Enter your credit card number (optional, only if you choose `Credit Card` as payment method).
- **Security Code** (`security_code`, `text`, required: false): Enter your security code (optional, only if you choose `Credit Card` as payment method).
- **ZIP** (`zip`, `text`, required: true): Enter your ZIP code.
- **Quarterly Frequency** (`gift_frequency_quarterly_frequency`, `select_one`, required: false): Choose how often you will make this gift on a quarterly basis.
- **Amount Given2** (`amount_given2`, `number`, required: true): Enter the amount you wish to donate.
- **Method of Donation** (`donation_method`, `select_one`, required: true): Choose the type of donation, including `One-Time`, `Monthly`, or `Quarterly`.
- **Gift Frequency Monthly Frequency2** (`gift_frequency_monthly_frequency2`, `select_one`, required: false): Choose how often you will make this gift on a monthly basis (if different from `gift_frequency_monthly_frequency`).
- **Gift Frequency Quarterly Frequency2** (`gift_frequency_quarterly_frequency2`, `select_one`, required: false): Choose how often you will make this gift on a quarterly basis (if different from `gift_frequency_quarterly_frequency`).
- **Month of Donations** (`month_of_donation`, `select_multiple`, required: false): Select the month(s) of your donation(s).
- **Gift Frequency Monthly Frequency3** (`gift_frequency_monthly_frequency3`, `select_one`, required: false): Choose how often you will make this gift on a monthly basis (if different from `gift_frequency_monthly_frequency2`).
- **Month of Donation** (`month_of_donation2`, `select_multiple`, required: true): Select the month(s) of your donation.

## Tips
- Please ensure all required fields are filled out accurately and thoroughly.
- If you have any questions or issues while filling out the form, contact our support team.
- We appreciate your donation and thank you for your support.
