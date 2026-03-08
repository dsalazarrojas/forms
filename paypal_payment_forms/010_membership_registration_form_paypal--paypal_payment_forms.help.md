# Membership Registration Form PayPal - Help Guide

## Purpose
This form is used to register a member's information for membership purposes. It gathers details about the member, their occupation, payment method and payment amount. The form is split into multiple sections for easier completion.

## How To Complete This Form
- Start by filling in your first name, last name, and email address accurately.
- Select your address, phone number, and occupational affiliations as required.
- Choose between "professional associate" or "student associate" from the dropdown menu.
- Fill in any special skills you may have.
- Select your preferred payment method (PayPal or bank transfer).
- Specify the payment amount accurately, considering the currency (USD or EUR).
- For members who choose bank transfer, select the payment method as "bank transfer" and enter the payment amount in the next field.
- Finally, select the membership level (free or premium), duration and membership status (active or inactive) for the member being registered.

## Field-by-Field Explanation
- **First Name** (`first_name`, text, required): Enter your first name.
- **Last Name** (`last_name`, text, required): Enter your last name.
- **Email** (`email`, email, required): Enter a valid email address.
- **Address** (`address`, text, required): Enter your address.
- **Phone Number** (`phone_number`, text, required): Enter your phone number.
- **Occupational Affiliations** (`occupational_affiliations`, text, required): Enter your occupational affiliations.
- **Special Skills** (`special_skills`, text, required): Describe any special skills you may have.
- **Associate Type** (`professional_associate`, select_one, required): Select between "professional associate" or "student associate".
- **Special Skills** (`special_skills`, text, required): Describe any special skills you may have.
- **Payment Method** (`payment_method`, select_one, required): Select between "PayPal" or "bank transfer".
- **Payment Amount** (`payment_amount`, number, required): Enter the payment amount accurately, considering the selected currency.
- **Payment Currency** (`payment_currency`, select_one, required): Select the currency as "USD" or "EUR".
- **Payment Method 2** (`payment_method_2`, select_one, required): Select between "bank transfer" or "Other".
- **Payment Amount 2** (`payment_amount_2`, number, required): Enter the payment amount accurately.
- **Payment Currency 2** (`payment_currency_2`, select_one, required): Select the currency as "USD" or "EUR".
- **Membership Level** (`membership_level`, select_one, required): Select between "free" or "premium" membership level.
- **Membership Duration** (`membership_duration`, time, required): Select the membership duration in the format "dd/mm/yy".
- **Membership Status** (`membership_status`, select_one, required): Select between "active" or "inactive" membership status.
- **Membership Status 2** (`membership_status_2`, select_one, required): Select between "active" or "inactive" membership status.
- **Membership Status 3** (`membership_status_3`, select_one, required): Select between "active" or "inactive" membership status.
- **Membership Status 4** (`membership_status_4`, select_one, required): Select between "active" or "inactive" membership status.
- **Submit** (`submit`, text, required): Click this button to submit the form and complete the registration.
