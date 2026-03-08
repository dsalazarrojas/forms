# Client Tax Questionnaire - Help Guide
## Purpose
The Client Tax Questionnaire is designed to gather relevant information from clients to help prepare their taxes. The form is split into several sections to guide you through the process.

## How To Complete This Form
1. **Personal Information**: Enter your name and last four digits of your Social Security Number (SSN). This information will help us confirm your identity and verify your tax status.
2. **Income Information**: Answer the questions about your income, including W2 or salary income, self-employment income, rental income, investment income, and other income sources.
3. **Deductions**: Indicate if you had business expenses, paid medical expenses, charitable contributions, mortgage interest, property taxes, student loan interest, education expenses, and home office expenses.
4. **Tax Credits**: If you have qualifying children, indicate so that we can consider the child tax credit. Also, let us know if you paid for dependent care.

## Field-by-Field Explanation

* **Full Name** (`client_name`, text, required): Please enter your full name as it appears on your government-issued identification.
* **Last Four Digits of SSN** (`ssn_last_four`, text, required): Enter the last four digits of your Social Security Number for verification purposes.
* **Tax Year for This Return** (`tax_year`, number, required): Indicate the tax year you are filing for (e.g., 2022).
* **Filing Status** (`filing_status`, select_one, required): Choose your filing status: Single, Married filing jointly, Married filing separately, Head of household, or Qualifying widow(er).
* **Number of Dependents** (`dependents_count`, number, required): Enter the number of dependents you have.
* **W2 or Salary Income** (`w2_income`, number, required): Report your W2 or salary income.
* **Self-Employment Income** (`self_employment_income`, number, required): Enter your self-employment income (Gross income from business).
* **Rental Income** (`rental_income`, number, required): Report your rental income.
* **Investment Income (Interest, Dividends)** (`investment_income`, number, required): Enter your investment income.
* **Capital Gains or Losses** (`capital_gains`, number, required): Report any capital gains or losses.
* **Other Income Sources** (`other_income`, text, required): Report any other income sources not listed above.
* **Did You Have Business Expenses?** (`has_business_expenses`, select_one, required): Choose 'True' if you had business expenses.
* **Did You Pay Significant Medical Expenses?** (`medical_expenses`, select_one, required): Choose 'True' if you paid significant medical expenses.
* **Did You Make Charitable Contributions?** (`charitable_contributions`, select_one, required): Choose 'True' if you made charitable contributions.
* **Paid Mortgage Interest?** (`mortgage_interest`, select_one, required): Choose 'True' if you paid mortgage interest.
* **Paid Property Taxes?** (`property_taxes`, select_one, required): Choose 'True' if you paid property taxes.
* **Paid Student Loan Interest?** (`student_loan_interest`, select_one, required): Choose 'True' if you paid student loan interest.
* **Paid Education Expenses?** (`education_expenses`, select_one, required): Choose 'True' if you paid education expenses.
* **Do You Have a Home Office?** (`home_office`, select_one, required): Choose 'True' if you have a home office.
* **Business Vehicle Mileage** (`vehicle_mileage`, number, required): Enter the estimated miles driven for business.
* **Do You Have Qualifying Children?** (`child_tax_credit`, select_one, required): Choose 'True' if you have qualifying children.
* **Did You Pay for Dependent Care?** (`dependent_care`, select_one, required): Choose 'True' if you paid for dependent care.
* **Any Other Tax Situations or Questions?** (`additional_questions`, text, required): If you have any other tax situations or questions, please describe them here.
