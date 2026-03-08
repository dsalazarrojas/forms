<thinking>
This form is intended for collecting income tax data from users to process and verify their tax-related information. The fields are designed to gather essential details about a user's income, employment status, marital status, and other relevant tax-related information. This form is likely to be used by tax authorities or accountants to review and process user-submitted data.

To ensure that users provide accurate and relevant information, we should avoid duplicating or misrepresenting fields. This can be achieved by:

*   Ensuring each field has a clear and distinct label and description.
*   Using select_one or select_multiple types where applicable to limit user options and prevent confusion.
*   Avoiding overlapping or redundant fields.
*   Using hints and descriptions where necessary to provide additional guidance.

The following is the user-facing help guide for the Income Tax Data Form:

# Income Tax Data Form - Help Guide
## Purpose
This form is designed to collect income tax data from users for processing and verification purposes.

## How To Complete This Form
1.  Start by ensuring you have all the necessary information about your income and tax status ready.
2.  Fill in the required fields, which are marked as "required" in the form.
3.  Review each field carefully and ensure you are providing accurate and relevant information.
4.  If you are unsure about any field, consult the field-by-field explanation below.

## Field-by-Field Explanation
*   **taxable_income** (Number): Enter your taxable income.
    This field is used to capture your taxable income. Please provide the total amount of income subject to income tax.
*   **other_income** (Number): Enter any other income not captured under the taxable income field.
    This field is for income that is not subject to income tax, such as tax-free allowances or tax-exempt income.
*   **employment_status** (Select Multiple): Select your current employment status.
    This field helps to understand your employment status for tax purposes, which may affect your tax liabilities or deductions.
    Options:
    *   Employed
    *   Self-Employed
    *   Unemployed
*   **income_source** (Select One): Identify the source of your income.
    This field helps us understand where your income is coming from. Please select one of the options:
    *   Business
    *   Investments
    *   Other
*   **marital_status** (Select One): Indicate your marital status.
    This field helps us understand your marital status for tax purposes. Please select one of the options:
    *   Married
    *   Single
    *   Other
*   **tax_year** (Date): Enter the tax year for which you are providing this information.
    This field is used to capture the tax year relevant to the income you are reporting. Please enter the year in YYYY format (e.g., 2022).
*   **filing_status** (Select Multiple): Select your filing status for tax purposes.
    This field helps us understand your filing status, which affects your tax liabilities or deductions. Please select one of the options:
    *   Single
    *   Joint
*   **income_verification** (Select One): Indicate whether you have income that requires verification.
    This field is used to confirm whether you have income that needs to be verified. Please select "True" if you have income that requires verification.
*   **employment_type** (Select One): Identify your employment type.
    This field helps us understand your employment type for tax purposes. Please select one of the options:
    *   W-2
    *   W-4
    *   Self-Employed
*   **other_income_source** (Text): Enter any other income source not captured under the income_source field.
    This field is for income that is not captured under the income source field. Please enter a brief description of the income source.
*   **income_verification_method** (Select One): Indicate the method used for income verification (Form 1040 or Form 1040A).
    This field is used to capture the method used for income verification. Please select one of the options:
    *   Form 1040
    *   Form 1040A
*   **other_income_verification_method** (Select One): Indicate the method used for other income verification (Form 1040A or Form 1040).
    This field is used to capture the method used for other income verification. Please select one of the options:
    *   Form 1040A
    *   Form 1040

Note: This guide can be further customized based on the actual business logic and requirements of the application.
