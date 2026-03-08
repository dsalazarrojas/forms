# Tax Exemption Form - Help Guide

## Purpose
The Tax Exemption Form is used to document tax-exempt information for organizations. This form helps ensure that all required tax-exempt details are captured accurately and efficiently.

## How To Complete This Form
To complete the Tax Exemption Form, follow these steps:

1. Enter the name of your organization in the **Organization Name** field.
2. Choose the appropriate tax exemption status from the **Tax Exemption Type** dropdown menu.
3. Select the effective date when the tax exemption began.
4. If applicable, select the expiration date when the tax exemption will end.
5. Fill out contact information for the organization, including first name, last name, email, and phone number.
6. Enter any relevant notes or comments about the tax exemption.
7. Indicate if an account manager is associated with this tax exemption ('Yes' or 'No').
8. If an account manager is associated, enter their first name and last name.

## Field-by-Field Explanation

* **Organization Name** (`organization_name`, text, required): Enter the name of your organization as it should be displayed on tax exemption documents.
* **Tax Exemption Type** (`tax_exemption_type`, select_one, required): Choose the correct tax exemption status for your organization, which will be one of the following:
	+ Exempt: Your organization is completely tax-exempt.
	+ Partially Exempt: Your organization is partially tax-exempt, with certain types of income subject to taxation.
	+ Not Exempt: Your organization is not tax-exempt.
* **Effective Date** (`effective_date`, date, required): Enter the date when your tax exemption began.
* **Expiration Date** (`expiration_date`, date, optional): If your tax exemption will end, enter the date when it expires.
* **Contact First Name** (`contact_first_name`, text, optional): Enter the first name of the contact person associated with your organization.
* **Contact Last Name** (`contact_last_name`, text, optional): Enter the last name of the contact person associated with your organization.
* **Email** (`email`, email, optional): Enter the email address of the contact person associated with your organization.
* **Phone** (`phone`, text, optional): Enter the phone number of the contact person associated with your organization.
* **Fax** (`fax`, text, optional): Enter the fax number of the contact person associated with your organization.
* **Notes** (`notes`, note, optional): Add any relevant notes or comments about the tax exemption.
* **Account Manager** (`account_manager`, select_multiple, optional): Indicate if an account manager is associated with this tax exemption.
	+ 'Yes': An account manager is associated with this tax exemption.
	+ 'No': No account manager is associated with this tax exemption.
* **Account Manager First Name** (`account_manager_first_name`, text, optional): If an account manager is associated, enter their first name.
* **Account Manager Last Name** (`account_manager_last_name`, text, optional): If an account manager is associated, enter their last name.
