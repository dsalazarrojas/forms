# drug_test_employer_account_set_up_form - Help Guide
## Purpose
The "drug_test_employer_account_set_up_form" is used to set up and configure drug testing accounts for employers. This form captures essential information to create a tailored testing protocol that suits the employer's needs.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the type of test that is required by your company (urine, saliva, or blood).
2.  Choose the testing frequency (monthly, quarterly, biannually, or annually).
3.  Provide the start date when you would like to begin taking this test.
4.  Enter your contact information, including name, phone number, and email.
5.  Enter your employer's contact information, including name, address, phone number, and email.
6.  Optionally, add any notes or comments about your account.
7.  Select the type of account (individual, group, or both).
8.  Enter a password for your account.
9.  Confirm your password.
10.  Accept or reject the terms and conditions of the testing protocol.
11.  Confirm your acceptance of the terms and conditions.

## Field-by-Field Explanation

*   **account_setup**: This field allows you to provide a brief description or title for your account.
    *   Type: `text`
    *   Required: `false`
*   **test_frequency**: Select the frequency at which you would like to take the drug tests.
    *   Type: `number`
    *   Required: `false`
*   **test_type**: Choose the type of test that is required by your company.
    *   Type: `select_one`
    *   Options: `urine`, `saliva`, `blood`
*   **test_frequency_hint**: This field provides a hint about the test frequency options.
    *   Type: `select_multiple`
    *   Options: `monthly`, `quarterly`, `biannually`, `annually`
*   **test_start_date**: Select the date when you would like to begin taking this test.
    *   Type: `date`
    *   Required: `false`
*   **contact_name**: Enter your name for contact purposes.
    *   Type: `text`
    *   Required: `false`
*   **contact_phone**: Enter your phone number for contact purposes.
    *   Type: `text`
    *   Required: `false`
*   **contact_email**: Enter your email address for contact purposes.
    *   Type: `email`
    *   Required: `false`
*   **employer_name**: Enter your company's name.
    *   Type: `text`
    *   Required: `false`
*   **employer_address**: Enter your company's address.
    *   Type: `text`
    *   Required: `false`
*   **employer_phone**: Enter your company's phone number.
    *   Type: `text`
    *   Required: `false`
*   **employer_email**: Enter your company's email address.
    *   Type: `email`
    *   Required: `false`
*   **note**: Provide any additional comments or notes about your account.
    *   Type: `note`
    *   Required: `false`
*   **note_hint**: This field provides a hint about the purpose of this field.
    *   Type: `text`
    *   Required: `false`
*   **account_type**: Select the type of account (individual, group, or both).
    *   Type: `select_one`
    *   Options: `individual`, `group`, `both`
*   **account_number**: Enter a unique account number for your company.
    *   Type: `text`
    *   Required: `false`
*   **password**: Enter a password for your account.
    *   Type: `text`
    *   Required: `false`
*   **confirm_password**: Confirm your password.
    *   Type: `text`
    *   Required: `false`
*   **terms**: Accept or reject the terms and conditions of the testing protocol.
    *   Type: `select_multiple`
    *   Options: `accepted`, `rejected`
*   **agree**: Accept or reject the agreement terms.
    *   Type: `select_multiple`
    *   Options: `accepted`, `rejected`
*   **confirm_agree**: Confirm your acceptance of the agreement terms.
    *   Type: `select_multiple`
    *   Options: `accepted`, `rejected`
*   **confirm_terms**: Confirm your acceptance of the terms and conditions.
    *   Type: `select_multiple`
    *   Options: `accepted`, `rejected`
