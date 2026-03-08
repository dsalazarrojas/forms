<thinking>
We will create a comprehensive user-facing help guide for the "Financial Services Intake Form" that explains its purpose, how to complete it, and each field's meaning. This guide will be based on the provided YAML fields and will be written in Markdown format.
</thinking>

# Financial Services Intake Form - Help Guide
## Purpose
The Financial Services Intake Form is designed to gather essential information about a client's financial situation, including their contact information, financial status, assets, income, expenses, employment status, income source, financial institutions, type of assets, and other relevant details. This form helps our financial services team understand the client's needs and provide accurate assistance.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and contact information in the "Client Information" section.
2. Select your current financial status (Active, Passive, or Unknown) in the "Financial Status" section.
3. Enter your total assets in the "Assets" section.
4. Choose your income range and select all applicable income sources in the "Income" section.
5. Select your employment status (Employed, Unemployed, Self-Employed, Retired, or Disabled) in the "Employment Status" section.
6. Choose your income source (Salary, Investments, Rental Income, or Other) in the "Income Source" section.
7. Select all financial institutions you have relationships with in the "Financial Institutions" section.
8. Choose the types of assets you have (Cash, Stocks, Real Estate, or Other) in the "Type of Assets" section.
9. Select whether you have other financial institutions (Yes or No) in the "Financial Institutions 2" section.
10. Indicate your primary, secondary, or other sources of employment income in the "Employment Income" section.
11. Select all your investment income sources (Investments, Real Estate, or Other) in the "Investment Income" section.
12. Enter your income from other sources in the "Income from Other" section.
13. Enter your total assets (again) in the "Assets 2" section.

## Field-by-Field Explanation

* **Client Information** (`client_info`, `text`, required/optional): Enter your name and contact information in this section.
* **Contact Information** (`contact_info`, `text`, required/optional): Enter your contact information, including address, phone number, and email.
* **Financial Status** (`financial_status`, `select_one`, required/optional): Select your current financial status: Active, Passive, or Unknown.
* **Assets** (`assets`, `number`, required/optional): Enter your total assets.
* **Income** (`income`, `select_multiple`, required/optional): Choose your income range and select all applicable income sources.
* **Employment Status** (`employment_status`, `select_one`, required/optional): Select your employment status (Employed, Unemployed, Self-Employed, Retired, or Disabled).
* **Income Source** (`income_source`, `select_one`, required/optional): Choose your income source (Salary, Investments, Rental Income, or Other).
* **Financial Institutions** (`financial_institutions`, `select_multiple`, required/optional): Select all financial institutions you have relationships with.
* **Type of Assets** (`assets_type`, `select_multiple`, required/optional): Choose the types of assets you have (Cash, Stocks, Real Estate, or Other).
* **Financial Institutions 2** (`financial_institutions_2`, `select_multiple`, required/optional): Select whether you have other financial institutions (Yes or No).
* **Employment Income** (`employment_income`, `select_multiple`, required/optional): Indicate your primary, secondary, or other sources of employment income.
* **Investment Income** (`investment_incomes`, `select_multiple`, required/optional): Select all your investment income sources (Investments, Real Estate, or Other).
* **Income from Other** (`income_from_other`, `number`, required/optional): Enter your income from other sources.
* **Assets 2** (`assets_2`, `number`, required/optional): Enter your total assets (again).

Note: Some fields are not marked as required, but it is still recommended to complete them as accurately as possible for our team to provide the best assistance.
