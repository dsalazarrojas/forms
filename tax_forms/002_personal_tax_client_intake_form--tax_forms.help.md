# Personal Tax Client Intake Form - Help Guide
## Purpose
This form is designed to collect personal information from tax clients, including their individual information, tax year, tax return type, tax status, dependents, income, deductions, tax advisor, and address. It will be used to provide personalized tax recommendations.

## How To Complete This Form

1. Please answer all questions truthfully and accurately to the best of your ability.
2. Ensure that all fields are completed before submitting the form.
3. If a question is not applicable to your situation, please select "N/A" or provide a brief explanation.
4. If you are unsure about any question, please ask your tax advisor for clarification.

## Field-by-Field Explanation

* **Individual Information** (`individual_info`, text, required: false): Please provide your name, address, and any other relevant personal details.
* **Tax Year** (`tax_year`, number, required: false): Select the tax year for which you are seeking tax services. This can be a year in the past or the current year.
* **Tax Return** (`tax_return`, select_one, options: 1040, 1040A, 1040EZ, 1040NR, 1040-PW, '1065', required: false): Choose the type of tax return you are seeking services for. These options include various forms for different tax situations.
* **Tax Status** (`tax_status`, select_one, options: Single, Married, Head of Household, required: false): Select your current tax status to help us understand your situation.
* **Dependents** (`dependents`, number, required: false): If you have dependents, please enter their number. This will help us understand your family situation.
* **Income** (`income`, number, required: false): Enter your annual income to the best of your ability. This will help us provide accurate tax recommendations.
* **Deductions** (`deductions`, number, required: false): Enter any deductions you are eligible for. This will help us understand your tax situation.
* **Tax Advisor** (`tax_advisor`, select_multiple, options: John, Jane, Joe, required: false): Select the tax advisor you are currently working with or would like to work with.
* **Address** (`address`, text, required: false): Enter your current address to ensure accurate communication and service delivery.

## Tips

* If you have any questions or concerns, please ask your tax advisor for clarification.
* If you need help with any field, please refer to your tax advisor or contact us directly.
* Please ensure that all fields are completed accurately and thoroughly to get the most out of the information collected.
