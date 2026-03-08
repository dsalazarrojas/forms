# Imprest Management Form - Help Guide
## Purpose
The Imprest Management Form is used to manage imprest accounts, including tracking their status, balance, and other relevant information. This form is intended for accounting and financial management purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the imprest form page option that best describes the current state of the account.
2. Enter the account ID number for the account you are managing.
3. Enter the account name for easier identification.
4. Select the date when the imprest was last updated.
5. Provide a brief description of the account's status or any relevant information.
6. Enter the account balance, if applicable.
7. Select the accountant responsible for managing the account.
8. Select the current status of the account (Active, Inactive, or Frozen).
9. If the account is inactive, provide a reason for inactivity.
10. Select the account type (Current or Savings).
11. Enter the account balance, if applicable.
12. Select the last update date for the account.
13. Review and confirm the accuracy of the information entered.

## Field-by-Field Explanation

* **Imprest Form Page** (`imprest_form_page`, select_multiple, required): Select one or more options that best describe the current state of the account (Yes or No).
* **Account ID** (`account_id`, number, required): Enter the account number for the account you are managing.
* **Account Name** (`account_name`, text, optional): Enter a descriptive name for the account to aid in identification.
* **Date** (`date`, date, optional): Enter the date when the imprest was last updated.
* **Description** (`description`, text, optional): Provide a brief description of the account's status or any relevant information.
* **Amount** (`amount`, number, optional): Enter the account balance, if applicable.
* **Accountant** (`accountant`, select_one, optional): Select the accountant responsible for managing the account (Accountant 1 or Accountant 2).
* **Status** (`status`, select_one, optional): Select the current status of the account (Active, Inactive, or Frozen).
* **Reason for Inactivity** (`reason_for_inactivity`, text, optional): If the account is inactive, enter a reason for inactivity.
* **Account Status** (`account_status`, select_one, optional): Select the account type (Open, Closed, or Frozen).
* **Account Type** (`account_type`, select_one, optional): Select the account type (Current or Savings).
* **Account Balance** (`account_balance`, number, optional): Enter the account balance, if applicable.
* **Last Update** (`last_update`, date, optional): Select the last update date for the account.

Note: The fields marked as "optional" are not required to be filled out, but providing accurate information is recommended for accurate imprest management.
