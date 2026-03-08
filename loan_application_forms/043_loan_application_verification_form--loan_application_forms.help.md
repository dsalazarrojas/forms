# loan_application_verification_form - Help Guide
## Purpose
This form is used by financial institutions or organizations to collect information about loan applicants, ensuring the accuracy of the loan application data.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields with accurate information about the applicant, their employment, and income details.
2. Select the correct employment status and employment start date.
3. Enter the applicant's job title and annual income.
4. Choose the correct loan type and loan amount.
5. Specify the collateral type and its value.

## Field-by-Field Explanation
* **Applicant Name** (`applicant_name`, text, required): Enter the full name of the applicant.
* **Applicant Address** (`applicant_address`, text, required): Enter the address where the applicant resides.
* **Date of Birth** (`date_of_birth`, date, required): Enter the applicant's date of birth in the MM/DD/YYYY format.
* **Social Security Number** (`social_security_number`, text, required): Enter the applicant's Social Security Number for identification purposes.
* **Job Title** (`job_title`, text, required): Enter the applicant's job title.
* **Employment Status** (`employment_status`, select_one, required): Select the applicant's current employment status (Employed, Self-Employed, or Retired).
* **Employer Name** (`employer_name`, text, required): Enter the name of the applicant's current or previous employer.
* **Employment Start Date** (`employment_start_date`, date, required): Enter the date the applicant started working at their current or previous employer.
* **Annual Income** (`annual_income`, number, required): Enter the applicant's annual income.
* **Monthly Income** (`monthly_income`, number, required): Enter the applicant's monthly income.
* **Bank Name** (`bank_name`, text, required): Enter the name of the bank or financial institution associated with the loan.
* **Account Number** (`account_number`, text, required): Enter the account number associated with the loan.
* **Loan Type** (`loan_type`, select_one, required): Select the type of loan being applied for (Personal Loan, Mortgage Loan, or Auto Loan).
* **Loan Amount** (`loan_amount`, number, required): Enter the amount of the loan being applied for.
* **Loan Term** (`loan_term`, number, required): Enter the term of the loan (number of years or months).
* **Collateral Type** (`collateral_type`, select_one, required): Select the type of collateral (Vehicle, Real Estate, or Equipment).
* **Collateral Value** (`collateral_value`, number, required): Enter the value of the collateral.

## Tips
* Ensure that all required fields are completed accurately and truthfully.
* Double-check the information entered for errors before submitting the form.
* If you're unsure about any field, consult with the financial institution or organization handling the loan application.
