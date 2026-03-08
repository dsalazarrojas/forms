# Bank Account Registration Form - Help Guide

## Purpose
The Bank Account Registration Form is designed to collect information for opening a new bank account. It is a secure and confidential process to ensure that users can easily provide the necessary information and open their new account. 

## How To Complete This Form
To complete this form, follow these steps:

1. Select your account type (Checking, Savings, Money Market, or Retirement) on the first page.
2. Enter your first name, last name, date of birth, email address, and phone number.
3. Provide your street address, city, state, and ZIP code.
4. Select your occupation and employment status.
5. Optionally, select an annual income range and initial deposit amount.
6. Specify the primary purpose for this account.
7. Choose your primary form of identification (Driver License, Passport, State ID, or Military ID).
8. Enter your identification document number.
9. Review and agree to the terms and conditions.

## Field-by-Field Explanation

* **Account Type** (`account_type`, select_one, required): Select the type of bank account you want to open, such as Checking, Savings, Money Market, or Retirement.
* **First Name** (`first_name`, text, required): Enter your first name.
* **Last Name** (`last_name`, text, required): Enter your last name.
* **Date of Birth** (`date_of_birth`, date, required): Enter your date of birth in MM/DD/YYYY format.
* **Email Address** (`email_address`, email, required): Enter a valid email address for account communication.
* **Phone Number** (`phone_number`, text, required): Enter your contact phone number.
* **Social Security Number** (`ssn`, text, required): Enter the last 4 digits of your Social Security Number for verification.
* **Street Address** (`street_address`, text, required): Enter your residential street address.
* **City** (`city`, text, required): Enter the city of your residence.
* **State** (`state`, text, required): Enter the state of your residence.
* **ZIP Code** (`zip_code`, text, required): Enter your postal code.
* **Country** (`country`, text, required): Enter the country of your residence.
* **Occupation** (`occupation`, text, optional): Optionally, select your current occupation.
* **Employment Status** (`employment_status`, select_one, required): Select your employment status, such as Employed, Self-Employed, Retired, Student, or Unemployed.
* **Annual Income Range** (`annual_income`, select_one, optional): Optionally, select an approximate annual income range.
* **Initial Deposit Amount** (`initial_deposit`, number, optional): Optionally, enter the amount you plan to deposit initially.
* **Account Purpose** (`account_purpose`, text, optional): Specify the primary purpose for this account.
* **Type of Identification** (`identification_type`, select_one, required): Select your primary form of identification, such as Driver License, Passport, State ID, or Military ID.
* **Identification Number** (`identification_number`, text, required): Enter your identification document number.
* **Terms and Conditions** (`terms_and_conditions`, select_one, required): Review and agree to the terms and conditions of the account.

Please note that users must complete all required fields to submit the form.
