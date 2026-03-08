# Bank Account Registration Form - Help Guide
## Purpose
This form is used to register a new bank account and capture relevant personal data.

## How To Complete This Form
1. Fill out the form with the required information.
2. Review your information carefully to ensure accuracy and completeness.
3. Click submit to proceed with the account opening process.

## Field-by-Field Explanation

* **Applicant Full Name** (`applicant_full_name`, text, required): Enter your full name as it appears on your ID.
* **Date of Birth** (`applicant_date_of_birth`, date, required): Enter your date of birth in the format MM/DD/YYYY.
* **Email Address** (`applicant_email`, email, required): Enter your primary email address.
* **Phone Number** (`applicant_phone`, text, required): Enter your mobile phone number.
* **Residential Address** (`applicant_address`, text, required): Enter your street address, city, state, and ZIP code.
* **Address Type** (`address_type`, select_one, required): Select how you own or rent your address.
* **Years at Address** (`years_at_address`, number, required): Enter how long you have lived at your current address.
* **Social Security Number** (`social_security_number`, text, required): Enter your Social Security Number or Individual Taxpayer Identification Number (ITIN).
* **Government ID Type** (`government_id_type`, select_one, required): Select the type of identification you will provide (e.g. drivers license, passport, state ID, etc.).
* **Government ID Number** (`government_id_number`, text, required): Enter the ID number that corresponds to your government ID type.
* **Account Type** (`account_type`, select_one, required): Select the type of account you wish to open (e.g. checking, savings, etc.).
* **Currency Type** (`currency_type`, select_one, required): Select the currency type for your account (e.g. USD, EUR, etc.).
* **Initial Deposit Amount** (`initial_deposit`, number, required): Enter the initial deposit amount for your account.
* **Employment Status** (`employment_status`, select_one, required): Select your current employment status (e.g. employed full-time, student, etc.).
* **Employer Name** (`employer_name`, text, optional): Enter your employer's name if employed.
* **Occupation** (`occupation`, text, required): Enter your job title or profession.
* **Annual Income** (`annual_income`, select_one, required): Select your gross annual income.
* **Source of Funds** (`source_of_funds`, select_one, required): Select where your funds will come from (e.g. salary, business income, etc.).
* **Debit Card Request** (`debit_card_request`, select_one, required): Select if you want a debit card with your account.
* **Online Banking Enrollment** (`online_banking_enrollment`, select_one, required): Select if you want to enroll in online banking.
* **Mobile Banking Enrollment** (`mobile_banking_enrollment`, select_one, required): Select if you want to download the mobile banking app.
* **Statement Preference** (`statement_preference`, select_one, required): Select how you prefer to receive statements.
* **Overdraft Protection** (`overdraft_protection`, select_one, required): Select if you want overdraft protection for your account.
* **Additional Services** (`additional_services`, select_multiple, optional): Select any additional services you want for your account.
* **Terms and Conditions** (`terms_acceptance`, select_one, required): Select if you agree to the account terms and conditions.
* **Signature Date** (`signature_date`, date, required): Enter the date you are signing the application.
