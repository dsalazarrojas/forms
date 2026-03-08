# Tax Filing Checklist Form - Help Guide
## Purpose
The Tax Filing Checklist Form is a comprehensive form used to collect essential information for tax filing purposes. It helps gather accurate data to support tax calculations and ensure timely tax filings.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your Social Security Number in the Social Security Number field.
2.  Input your Tax Year in the Tax Year field.
3.  Select your employment status from the Employment Verification field.
4.  Choose your tax filing status from the Tax Filing Status field.
5.  Verify your income sources from the Income Verification field.
6.  (Optional) Enter any tax deductions you claim in the Tax Deduction field.
7.  (Optional) Enter any tax payments made in the Tax Payment field.
8.  Select the date for the Tax Filing Deadline.

## Field-by-Field Explanation
- **Social Security Number** (`social_security_number`, `text`, required): Enter your Social Security Number to ensure accurate tax calculations.
- **Tax Year** (`tax_year`, `text`, required): Enter the tax year you are filing for. This is necessary for tax calculations and deadline management.
- **Employment Verification** (`employment_verification`, `select_one`, required): Select your employment status to determine tax deductions and credits.
  - **Employed**: You are employed and have a W-2 form.
  - **Self-Employed**: You are self-employed and have a 1099 form.
  - **Retired**: You are retired and do not have an employment-based income.
- **Tax Filing Status** (`tax_filing_status`, `select_multiple`, required): Select your tax filing status to determine tax rates and credits.
  - **Single**: You are single and file taxes as a single person.
  - **Married**: You are married and file taxes jointly.
  - **Head of Household**: You are the head of a household and file taxes as such.
- **Income Verification** (`income_verification`, `select_multiple`, required): Verify your income sources to ensure accurate tax calculations.
  - **W-2**: You have W-2 income from employment.
  - **1099**: You have 1099 income from self-employment or other sources.
  - **Other**: You have other income not covered by W-2 or 1099 forms.
- **Tax Deduction** (`tax_deduction`, `number`, optional): Enter any tax deductions you claim. This is not a required field but can help in tax calculations.
- **Tax Payment** (`tax_payment`, `number`, optional): Enter any tax payments made. This is not a required field but can help in tax calculations.
- **Tax Filing Deadline** (`tax_filing_deadline`, `date`, required): Select the date by which you need to file your taxes by.

**Tips**

* Ensure you fill in all required fields to ensure accurate tax calculations.
* Double-check your input for errors before submitting the form.
* If you have any questions, please contact [your support email/phone number].
