# Bank Enrollment Form - Help Guide
## Purpose
This form is used to guide users through the process of enrolling in a bank account.

## How To Complete This Form
To complete this form, simply select the correct fields and enter the relevant information. If a field is not required, you can skip it if you do not have the information or prefer not to provide it.

## Field-by-Field Explanation

* **Applicant Full Name** (`applicant_full_name`, `text`, required): Enter the customer's full name.
* **Email Address** (`applicant_email`, `email`, required): Enter the customer's primary contact email.
* **Phone Number** (`applicant_phone`, `text`, required): Enter the customer's phone number.
* **Mailing Address** (`applicant_address`, `text`, required): Enter the customer's mailing address.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter the customer's date of birth in the correct format (MM/DD/YYYY).
* **Social Security Number** (`social_security_number`, `text`, required): Enter the customer's SSN or ITIN.
* **Enrollment Type** (`enrollment_type`, `select_one`, required): Select the type of banking program the customer is enrolling in (Personal Banking, Business Banking, etc.).
* **Account Preference** (`account_preference`, `select_one`, required): Select the customer's preferred type of account (Checking, Savings, etc.).
* **Employment Status** (`employment_status`, `select_one`, required): Select the customer's current employment status (Employed, Self-Employed, etc.).
* **Employer Name** (`employer_name`, `text`, not required): Enter the customer's employer's name if applicable.
* **Monthly Income** (`monthly_income`, `number`, not required): Enter the customer's gross monthly income.
* **Initial Deposit Amount** (`initial_deposit_amount`, `number`, required): Enter the amount the customer plans to deposit into their new account.
* **Funding Source** (`funding_source`, `select_one`, required): Select where the funds will come from (Transfer from Another Bank, etc.).
* **Debit Card Preference** (`debit_card_preference`, `select_one`, required): Select the type of debit card the customer prefers (Standard Debit Card, etc.).
* **Online Banking** (`online_banking`, `select_one`, required): Select whether the customer wants to enroll in online banking.
* **Paperless Statements** (`paperless_statements`, `select_one`, required): Select whether the customer wants to receive electronic statements.
* **Overdraft Protection** (`overdraft_protection`, `select_one`, required): Select whether the customer wants to enable overdraft protection.
* **Additional Cardholders** (`additional_cardholders`, `select_one`, required): Select whether others will have access to the account.
* **How Did You Hear About Us** (`referral_source`, `select_one`, not required): Select how the customer heard about the bank.
* **Special Requests** (`special_requests`, `text`, not required): Enter any special requests or accommodations the customer needs.
* **Terms Acceptance** (`terms_acceptance`, `select_one`, required): Select whether the customer agrees to the terms.
* **Signature Date** (`signature_date`, `date`, required): Enter the date of enrollment.
