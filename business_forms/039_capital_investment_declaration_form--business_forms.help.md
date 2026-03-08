<thinking>
This help guide is meant to assist users in understanding the purpose of the Capital Investment Declaration Form and how to complete it accurately. The form is designed to collect information about an individual's or business's investments for financial assessment and compliance purposes. This guide will walk users through each page and field of the form, explaining what each field means and how to fill it out correctly.

Before starting, please ensure that you have all the required information and that the form is relevant to your current situation. If you are unsure about any field, please refer to this guide for clarification.

</thinking>

# Capital Investment Declaration Form - Help Guide
## Purpose
The Capital Investment Declaration Form is designed to collect information about your investments for financial assessment and compliance purposes. It is essential to provide accurate and complete information to ensure that your declaration is processed correctly.

## How To Complete This Form

### Page 1: Introduction
This page provides a brief overview of the form and its purpose. Please read it carefully before proceeding.

### Page 2: Declarant Information
- **First Name** (`first_name`, `text`, required): Enter your first name as it is written on your identification documents.
- **Last Name** (`last_name`, `text`, required): Enter your last name as it is written on your identification documents.
- **Tax ID or SSN** (`tax_id`, `text`, required): Enter your tax identification number or social security number as it is written on your identification documents.
- **Email Address** (`email_address`, `email`, required): Enter your email address where you can be contacted for any further inquiries.
- **Phone Number** (`phone_number`, `text`, required): Enter your contact phone number where you can be reached for any further inquiries.

### Page 3: Investment Details
- **Entity Type** (`entity_type`, `select_one`, required): Select the type of entity you are declaring for (Individual, Partnership, Corporation, LLC, Trust, or Other).
- **Declaration Date** (`declaration_date`, `date`, required): Enter the date of the declaration.
- **Tax Year** (`tax_year`, `text`, required): Enter the year for which the declaration is being made.
- **Business Address** (`business_address`, `text`, required): Enter your business address if applicable.

### Page 4: Investment Summary
- **Total Capital Investments** (`total_investments`, `number`, required): Enter the total dollar amount invested.
- **Number of Individual Investments** (`number_of_investments`, `number`, required): Enter the count of investments made.
- **Investment Period Start** (`investment_start_date`, `date`, required): Enter the start date of the investment period.
- **Investment Period End** (`investment_end_date`, `date`, required): Enter the end date of the investment period.

### Page 5: Source of Funds
- **Source of Investment Funds** (`funds_source`, `select_multiple`, required): Select all applicable sources of funds (Personal savings, Business income, Loan, Inheritance, Gift, Refinancing, Other).
- **Any Foreign Investments?** (`foreign_investment`, `select_one`, required): Select 'Yes' if you have foreign investments, and 'No' otherwise.
- **Foreign Investment Details** (`foreign_details`, `text`, required if 'Yes' is selected): If you selected 'Yes' for foreign investments, provide details about them.
- **Total Investment Returns** (`total_returns`, `number`, required if 'Yes' is selected): Enter the total returns from foreign investments.
- **Type of Returns** (`return_type`, `select_multiple`, required if 'Yes' is selected): Select all applicable types of returns (Dividends, Interest, Capital gains, Rental income, Other, No returns).
- **Financial Impact** (`impact_on_business`, `text`, required if 'Yes' is selected): Describe the financial impact on your business operations if 'Yes' is selected.

### Page 6: Risk Assessment
- **Risk Assessment** (`risk_assessment`, `select_one`, required if 'Yes' is selected): Select the risk level of your investments (Low risk, Moderate risk, High risk, Very high risk).

### Final Page: Confirmation
- **I Certify that all information is accurate and complete** (`confirmation`, `select_one`, required): Confirm that all information provided is accurate and complete.

Remember to review all pages carefully before submitting the form. If you are unsure about any field, please refer back to this guide for clarification.
