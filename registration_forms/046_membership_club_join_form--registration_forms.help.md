# Membership Club Join Form - Help Guide
## Purpose
The Membership Club Join Form is designed for users to join the membership club by providing their basic information and preferences. This form is not intended for existing members or those who have already joined the club.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your first and last name in the "First Name" and "Last Name" fields, respectively.
2. Enter your email address in the "Email" field.
3. If you have a phone number, enter it in the "Phone" field.
4. Select your payment method preference in the "Payment Method" field. You can choose between predefined options.
5. If you are willing to pay a membership fee, select "Yes" in the "Payment Method" field.
6. Fill in the payment amount in the "Payment Amount" field, if you are willing to pay a membership fee.
7. Enter the date you joined the club in the "Date Joined" field.
8. Enter the time you joined the club in the "Time Joined" field.

## Field-by-Field Explanation
* **First Name** (`first_name`, text, required: false): Enter your first name.
* **Last Name** (`last_name`, text, required: false): Enter your last name.
* **Email** (`email`, email, required: false): Enter your email address.
* **Phone** (`phone`, text, required: false): Enter your phone number.
* **Payment Method** (`payment_method`, select_one, required: false): Select between predefined options to indicate your payment method preference.
* **Payment Amount** (`payment_amount`, number, required: false): If you selected "Yes" in the "Payment Method" field, enter the payment amount here.
* **Date Joined** (`date_joined`, date, required: false): Enter the date you joined the club.
* **Time Joined** (`time_joined`, time, required: false): Enter the time you joined the club.
