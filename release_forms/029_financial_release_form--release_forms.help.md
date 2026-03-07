<thinking>

This form is designed to collect information for financial releases, which are typically used to authorize or restrict access to financial accounts or assets. The form is meant to be used by financial institutions, such as banks or investment firms, to provide a standardized way of collecting necessary information for releases. This form should only be used for legitimate purposes and not for any malicious or unauthorized activities.

</thinking>

# financial_release_form - Help Guide
## Purpose
This form is used to collect information for financial releases, which are used to authorize or restrict access to financial accounts or assets.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out your First Name and Last Name in the respective fields.
2. Select the Financial Institution that is associated with your account or asset.
3. Enter your Account Number and Financial Entity as relevant.
4. Select the type of financial entity you are authorizing.
5. Enter the Authorization Date and Authorization Time as relevant.
6. Enter the Effective Date and Expiration Date as relevant.
7. Provide the Release Reason if applicable.
8. Select the Release Status of your account or asset.
9. Select who the account or asset is assigned to.
10. Enter the Client ID and Client Name as relevant.

## Field-by-Field Explanation
* **First Name** (`user_first_name`, text, required/optional): Enter your first name as it appears on your official identification.
* **Last Name** (`user_last_name`, text, required/optional): Enter your last name as it appears on your official identification.
* **Financial Institution** (`financial_institution`, select_one, required/optional): Select the financial institution associated with your account or asset.
* **Account Number** (`account_number`, text, required/optional): Enter your account or asset number as it appears on your official documentation.
* **Financial Entity** (`financial_entity`, text, required/optional): Enter the name of the financial entity you are authorizing.
* **Entity Type** (`entity_type`, select_multiple, required/optional): Select the type of financial entity you are authorizing (e.g. Financial Advisor, Investment Firm, Bank, Trustee).
* **Authorization Date** (`authorization_date`, date, required/optional): Enter the date the authorization was given or taken.
* **Authorization Time** (`authorization_time`, time, required/optional): Enter the time the authorization was given or taken.
* **Effective Date** (`effective_date`, date, required/optional): Enter the date the authorization becomes effective.
* **Expiration Date** (`expiration_date`, date, required/optional): Enter the date the authorization expires.
* **Release Reason** (`release_reason`, text, required/optional): Provide a reason for releasing or revoking authorization.
* **Release Status** (`release_status`, select_one, required/optional): Select the status of your account or asset (Active, Inactive, Revoked).
* **Assigned to** (`assigned_to`, select_one, required/optional): Select who is assigned to your account or asset.
* **Client ID** (`client_id`, text, required/optional): Enter your client ID as it appears on your official identification.
* **Client Name** (`client_name`, text, required/optional): Enter your client name as it appears on your official identification.
* **Account Type** (`account_type`, select_one, required/optional): Select the type of account you are authorizing (Checking, Savings, Credit Card, Investment).
