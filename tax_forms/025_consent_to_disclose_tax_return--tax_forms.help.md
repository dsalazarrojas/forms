# Consent To Disclose Tax Return - Help Guide
## Purpose
The "Consent To Disclose Tax Return" form is used to obtain the taxpayer's consent to disclose their tax return information to a third party for a specific purpose.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the taxpayer's information, including their name, identification number, and address.
2.  Specify the third party's name and address.
3.  Indicate the purpose for which the tax return information will be disclosed.
4.  Choose the type of information to be disclosed.
5.  Acknowledge the taxpayer's rights under IRC Section 7216.
6.  Sign the form electronically with the taxpayer's full name.

## Field-by-Field Explanation

*   **Taxpayer Full Name**: This field is used to collect the full name of the taxpayer.
    (`taxpayer_name`, text, required)
*   **Taxpayer Identification Number (SSN or EIN)**: This field is used to collect the taxpayer's social security number or EIN.
    (`taxpayer_id_number`, text, required)
*   **Tax Year(s) Authorized for Disclosure**: Specify the tax year(s) for which the tax return information will be disclosed. 
    (`tax_year_authorized`, text, required)
*   **Name of Third Party to receive the information**: This field is used to collect the name of the person or organization to whom the tax return information will be disclosed.
    (`receiving_party_name`, text, required)
*   **Address of Third Party**: This field is used to collect the address of the person or organization to whom the tax return information will be disclosed.
    (`receiving_party_address`, text, required)
*   **Specific Purpose for Disclosure**: This field is used to specify the reason for which the tax return information will be disclosed.
    (`purpose_of_disclosure`, text, required)
*   **Limit of information to be disclosed**: Choose the type of information that you want to disclose to the third party. You have three options: Entire Tax Return, Specific Schedules/Forms Only, or Only Adjusted Gross Income.
    (`information_limit_choice`, select_one, required)
*   **I acknowledge my rights under IRC Section 7216**: This field is used to acknowledge your rights under IRC Section 7216.
    (`internal_revenue_code_notice`, select_one, required)
*   **Taxpayer Electronic Signature (Type Full Name)**: This field is used to sign the form electronically with your full name.
    (`taxpayer_signature`, text, required)
*   **Date of Signature**: This field is used to enter the date of your electronic signature.
    (`signature_date`, date, required)
*   **Joint Filer Signature (if applicable)**: If the taxpayer is a joint filer, enter your spouse's signature here. If not applicable, leave blank.
    (`joint_filer_signature`, text, required)

# Tips

*   Make sure to fill in all required fields carefully and accurately.
*   Review the form carefully before submission to avoid any errors or discrepancies.
*   Sign the form electronically with your full name to confirm your consent.
*   If you are a joint filer, include your spouse's signature on the form.
