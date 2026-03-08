# Income Driven Repayment Form - Help Guide
## Purpose
This form is used for borrowers to apply for or certify their eligibility for income-driven repayment plans for their student loans. It provides the necessary information required to calculate the individual's income-driven repayment amount and validate their income and tax information.

## How To Complete This Form

To complete this form, please follow the steps below:

1. Provide your personal and financial information, including your income, family size, employment status, and tax documents.
2. Select your loan type and balance to ensure accurate calculations.
3. Specify your income frequency and expected income frequency (if applicable).
4. Verify your income and tax information by selecting the relevant options.
5. Provide any additional income proof or documentation required.

## Field-by-Field Explanation

* **Income** (`income`, `number`, required): Enter your current monthly income.
* **Family size** (`family_size`, `number`, required): Enter the number of family members you have.
* **Income monthly** (`income_monthly`, `number`, optional): Enter your expected monthly income (if different from your current income).
* **Expected family size** (`expected_family_size`, `number`, optional): Enter the expected family size (if different from your current family size).
* **Expected income monthly** (`expected_income_monthly`, `number`, optional): Enter your expected monthly income (if different from your current income).
* **Gross income** (`gross_income`, `number`, optional): Enter your gross income (if you have it).
* **Adjusted gross income** (`adjusted_gross_income`, `number`, optional): Enter your adjusted gross income (if different from your gross income).
* **Family members** (`family_members`, `select_one`, required): Select your family status:
	+ Single
	+ Married
	+ Other
* **Income status** (`income_status`, `select_one`, required): Select your income status:
	+ Stable
	+ Increasing
	+ Decreasing
* **Tax status** (`tax_status`, `select_one`, required): Select your tax status:
	+ Single
	+ Married
	+ Joint
* **Dependents** (`dependents`, `number`, optional): Enter the number of dependents (if any).
* **Student type** (`student_type`, `select_one`, required): Select your student type:
	+ Graduate
	+ Undergraduate
	+ Doctoral
	+ Other
* **Student status** (`student_status`, `select_one`, required): Select your student status:
	+ In-school
	+ Out-school
	+ In-deferment
* **Income verification** (`income_verification`, `select_multiple`, required): Select the income verification methods you have:
	+ W-2
	+ 1099
	+ Self-employment
* **Tax documents** (`tax_documents`, `select_multiple`, required): Select the tax documents you have:
	+ W-2
	+ 1040
* **Income proof** (`income_proof`, `text`, required): Provide any additional income proof or documentation required.
* **Employment status** (`employment_status`, `select_one`, required): Select your employment status:
	+ Working
	+ Unemployed
	+ Retired
* **Employment type** (`employment_type`, `select_multiple`, optional): Select your employment type:
	+ Employee
	+ Self-employed
	+ Unemployed
* **Income frequency** (`income_frequency`, `select_one`, required): Select your income frequency:
	+ Monthly
	+ Annually
	+ Quarterly
* **Expected employment status** (`expected_employment_status`, `select_multiple`, optional): Select your expected employment status:
	+ Working
	+ Unemployed
	+ Retired
* **Student loan balance** (`student_loan_balance`, `number`, optional): Enter your student loan balance (if any).
* **Monthly payment** (`monthly_payment`, `number`, optional): Enter your monthly payment (if any).
* **Loan type** (`loan_type`, `select_one`, required): Select your loan type:
	+ Federal Loan
	+ Private Loan
	+ Both
* **Income frequency 2** (`income_frequency_2`, `select_one`, optional): Select your income frequency (if different from your current income frequency).
* **Expected income frequency** (`expected_income_frequency`, `select_one`, optional): Select your expected income frequency (if different from your current income frequency).

## Tips

* Ensure you complete all required fields accurately and truthfully.
* Provide any additional income proof or documentation required.
* Review and confirm your answers before submitting the form.
* If you have any doubts or questions, please contact your loan servicer or administrator for assistance.
