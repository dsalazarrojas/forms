# Data Collection Authorization Form - Help Guide
## Purpose
This form is used to collect personal and business information from individuals or businesses for regulatory or administrative purposes.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your First Name, Last Name, and Date of Birth accurately.
2. Enter your Contact Number and Email Address.
3. Select the type of consent you are giving.
4. (Optional) If you are filling the form on behalf of a business, enter the Business Name, Business Address, Business Phone Number, Business Email Address, Business Registration Number, Business License Number, Business Tax Number, Business Industry Type, Business Industry Description, Business Address Line 2 (if applicable), Business City, Business Province, Business Postal Code, and Business Country.
5. Add the Business Website (if applicable).
6. Enter the Assigned Tool.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required): Enter your first name as it appears on your official documents.
* **Last Name** (`last_name`, `text`, required): Enter your last name as it appears on your official documents.
* **Date of Birth** (`date_of_birth`, `date`, required): Enter your date of birth in the format MM/DD/YYYY.
* **Contact Number** (`contact_number`, `text`, required): Enter your contact number where you can be reached.
* **Email Address** (`email_address`, `email`, required): Enter your email address where you can be reached.
* **Consent Type** (`consent_type`, `select_one`, required): Select the type of consent you are giving.
* **Authorization Date** (`authorization_date`, `date`, optional): If you are filling the form on behalf of a business, enter the date you were authorized to act on behalf of the business.
* **Client Signature** (`client_signature`, `note`, required): Sign your name to confirm that the information provided is accurate.
* **Business Name** (`business_name`, `text`, required): Enter the name of the business or organization.
* **Business Address** (`business_address`, `text`, required): Enter the address of the business or organization.
* **Business Phone Number** (`business_phone_number`, `text`, required): Enter the contact phone number of the business or organization.
* **Business Email Address** (`business_email_address`, `email`, required): Enter the email address of the business or organization.
* **Business Registration Number** (`business_registration_number`, `text`, required): Enter the business registration number or ID.
* **Business License Number** (`business_license_number`, `text`, required): Enter the business license number or ID.
* **Business Tax Number** (`business_tax_number`, `text`, required): Enter the business tax number or ID.
* **Business Industry Type** (`business_industry_type`, `text`, required): Enter the type of industry your business belongs to.
* **Business Industry Description** (`business_industry_description`, `text`, required): Enter a brief description of your business's industry.
* **Business Address Line 2** (`business_address_line_2`, `text`, optional): Enter any additional address line for the business or organization.
* **Business City** (`business_city`, `text`, required): Enter the city where the business or organization is located.
* **Business Province** (`business_province`, `text`, required): Enter the province where the business or organization is located.
* **Business Postal Code** (`business_postal_code`, `text`, required): Enter the postal code or zip code where the business or organization is located.
* **Business Country** (`business_country`, `text`, required): Enter the country where the business or organization is located.
* **Business Website** (`business_website`, `text`, optional): Enter the website of the business or organization.
* **Assigned Tool** (`assigned_tool`, `text`, required): Enter the tool assigned to you or your business.

Note: This guide is based on the provided YAML schema and assumes that the form is used for regulatory or administrative purposes. Please review and update the guide if the form's purpose or requirements change.
