<thinking>
To determine the form's purpose and relevance, I've reviewed the YAML structure and extracted the following key points:

* The form is related to income-driven repayment, suggesting it may be used for individuals seeking income-driven repayment plans for their student loans.
* The form requires input from the individual, indicating it's likely used for loan application or certification purposes.
* The form asks for personal and financial information, such as income, family size, employment status, and tax documents, suggesting it's used to assess an individual's eligibility for income-driven repayment plans.
* The form has multiple "family size" and "income frequency" fields, implying it's used to calculate income-driven repayment amounts.
* The form requires "income verification" and "tax documents", indicating it's used to validate the individual's income and tax information.
* The form asks for "loan type" and "student loan balance", suggesting it's used for students or borrowers who need to apply for income-driven repayment plans.

Considering these points, the form's purpose appears to be for an individual to provide their financial information to apply for or certify their eligibility for income-driven repayment plans for their student loans. This form will help the loan servicer or administrator to assess and calculate the individual's income-driven repayment amount.

This form is likely used for:

* Borrowers applying for income-driven repayment plans
* Certifying current income and eligibility for income-driven repayment plans
* Loan servicers or administrators to verify borrower's income and eligibility

The form's fields are relevant as they:

* Gather personal and financial information about the borrower
* Allow the individual to specify their loan type and balance
* Help the individual to select their employment and income frequency
* Validate the individual's income and tax information
* Enable the individual to specify their family size and status

There are no duplicate or irrelevant fields in the provided YAML structure.

</thinking>

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
