<thinking>Internal reasoning block for this form: This form is meant to collect information from existing donors who want to renew their membership. It's designed to gather details such as the donor's name, membership level, payment method, and payment schedule. The form also requests additional information like phone number, address, and payment card details for potential future reference. The form is divided into different sections for easy understanding, and each field has a clear label to help donors fill it out accurately. The form does not store or display any sensitive information and is meant for internal use only.</thinking>

# Donor Membership Renewal Form - Help Guide
## Purpose
This form is for existing donors to renew their membership. Please fill out the form with your updated information to ensure continued access to our services.

## How To Complete This Form
1. Fill out the form completely and accurately.
2. Review the fields below for further guidance.

## Field-by-Field Explanation
- **First Name** (`first_name`, `text`, `false`): Please enter your first name.
- **Last Name** (`last_name`, `text`, `false`): Please enter your last name.
- **Email** (`email`, `email`, `false`): Enter your email address for future communications.
- **Member ID** (`member_id`, `text`, `false`): If you have a member ID, please enter it here.
- **Membership Level** (`membership_level`, `select_one`, `true`): Choose your desired membership level (Basic, Premium, or Premium Plus).
- **Renewal Date** (`renewal_date`, `date`, `false`): If you are renewing your membership, please enter the date of your last renewal.
- **Expiration Date** (`expiration_date`, `date`, `false`): Enter the date you would like your membership to expire.
- **Donation Frequency** (`donation_frequency`, `select_one`, `true`): Choose how often you would like to make your donations (Monthly, Quarterly, or Annually).
- **Amount** (`amount`, `number`, `false`): Enter the amount you would like to donate.
- **Payment Method** (`payment_method`, `select_one`, `true`): Choose how you would like to make your payment (Credit Card, Bank Draft, or Cash).
- **Payment Schedule** (`payment_schedule`, `select_one`, `true`): Choose how you would like to schedule your payment (One-Time or Recurring).
- **Phone** (`phone`, `text`, `false`): Enter your phone number for future communications.
- **Street Address** (`street_address`, `text`, `false`): Enter your street address.
- **City** (`city`, `text`, `false`): Enter your city.
- **State** (`state`, `text`, `false`): Enter your state or province.
- **Zip** (`zip`, `text`, `false`): Enter your postal code.
- **Country** (`country`, `select_one`, `false`): Choose your country (Yes or No).
- **Card Number** (`card_number`, `text`, `false`): If you are paying by credit card, enter your card number.
- **Card Expiration** (`card_exp`, `date`, `false`): If you are paying by credit card, enter the expiration date of your card.
- **Card Cvv** (`card_cvv`, `text`, `false`): If you are paying by credit card, enter your card security code.
- **Card Zip** (`card_zip`, `text`, `false`): If you are paying by credit card, enter your card postal code.
- **Card Type** (`card_type`, `select_one`, `false`): If you are paying by credit card, choose the type of card (Yes or No).
- **Member Since** (`member_since`, `date`, `false`): Enter the date you first became a member.
- **More Notes** (`notes`, `text`, `false`): If you have any additional comments, please enter them here.
