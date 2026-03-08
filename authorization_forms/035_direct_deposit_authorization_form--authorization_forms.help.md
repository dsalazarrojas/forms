<thinking>
To create a user-facing help guide for this form, I will follow these steps:

1.  I will review the input schema to understand the form's structure and requirements.
2.  I will identify the purpose of the form and its intended use case.
3.  I will explain each field's purpose and requirements in a concise and concrete manner.
4.  I will highlight any additional tips or recommendations for users.

After reviewing the input schema, the form appears to be a Direct Deposit Authorization Form for setting up direct deposit arrangements between a company and a bank. The form requires various pieces of information for both the company and the bank, including address, account details, and contact information.

Here is the help guide for the form:

# Direct Deposit Authorization Form - Help Guide

## Purpose
The Direct Deposit Authorization Form is used to establish direct deposit arrangements between your company and a bank. This form collects necessary information to set up and manage direct deposit payments.

## How To Complete This Form

1.  Complete the form by filling in all the required fields. Most fields are optional, but it's recommended to fill in as much information as possible for accurate processing.
2.  Make sure to enter your company's address, account details, and contact information accurately.
3.  Select 'Yes' or 'No' for the Direct Deposit Frequency field to indicate your preference.
4.  Enter your Bank Account Number, Bank Name, and Routing Number accurately.
5.  If you select 'Other' for the Account Type, provide a description for it in the Account Type Other Description field.
6.  Ensure that the Account Holder Signature and Submitter Signature fields are signed by the respective account holders.
7.  Review the form for any mistakes before submitting it.

## Field-by-Field Explanation

*   **Company Name** (`company_name`, `text`, required): Your company name as it appears on your bank records.
*   **Address** (`address`, `text`, optional): Your company's address for communication and billing purposes.
*   **City** (`city`, `text`, optional): The city where your company is located.
*   **State** (`state`, `text`, optional): The state where your company is located.
*   **Zip** (`zip`, `text`, optional): Your company's zip code.
*   **Bank Account Number** (`bank_account_number`, `text`, optional): Your bank account number.
*   **Account Holder Name** (`account_holder_name`, `text`, optional): The name of the account holder.
*   **Account Type** (`account_type`, `select_one`, optional): Select 'Yes' to enable direct deposit or 'No' to disable it.
*   **Bank Name** (`bank_name`, `text`, optional): The name of your bank.
*   **Routing Number** (`routing_number`, `text`, optional): The routing number of your bank.
*   **Account Type Other** (`account_type_other`, `text`, optional): Select 'Other' for other account types and provide a description.
*   **Account Type Other Description** (`account_type_other_description`, `text`, optional): A description for 'Other' account types.
*   **Bank Branch** (`bank_branch`, `text`, optional): The branch name of your bank.
*   **Account Holder Signature** (`account_holder_signature`, `note`, optional): Sign this field to confirm your account details.
*   **Company Name Signature** (`company_name_signature`, `note`, optional): Sign this field by the company representative.
*   **Date** (`date`, `date`, optional): The date of this authorization form.
*   **Direct Deposit Frequency** (`direct_deposit_frequency`, `select_one`, optional): Select 'Yes' to enable direct deposit or 'No' to disable it.
*   **Payee ID** (`payee_id`, `text`, optional): Your unique ID for payee identification.
*   **Bank Address** (`bank_address`, `text`, optional): The bank's address for communication and billing purposes.
*   **Account Holder Title** (`account_holder_title`, `text`, optional): The title of the account holder.
*   **Bank Phone** (`bank_phone`, `text`, optional): The bank's phone number.
*   **Email** (`email`, `email`, optional): The email address of your bank.
*   **Payor ID** (`payor_id`, `text`, optional): The unique ID for payor identification.
*   **Bank Fax** (`bank_fax`, `text`, optional): The bank's fax number.
*   **Submitter Signature** (`submitter_signature`, `note`, optional): Sign this field to confirm submission of this form.
