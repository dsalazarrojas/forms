# writ_of_garnishment_request_form - Help Guide
## Purpose
The writ of garnishment request form is used by creditors to request the garnishment of a debtor's account. This process involves a series of steps to ensure the creditor can take the necessary funds from the account to satisfy a debt or court judgment.

## How To Complete This Form
To complete the writ of garnishment request form, please follow these steps:

1. Fill in the required information on each page, paying close attention to the fields that are marked as required.
2. Ensure you have the necessary permissions and authority to request a garnishment on the account specified.
3. Double-check your answers for accuracy before submitting the form.

## Field-by-Field Explanation

- **Case Details** (`case_details`, `text`, required: false): This page is used to identify the case details related to the garnishment request. Please provide a brief description of the case, including the case number if applicable.
- **Garnisher Name** (`garnisher_name`, `text`, required: false): This field is used to identify the name of the person or entity requesting the garnishment.
- **Creditor Name** (`creditor_name`, `text`, required: false): This field is used to identify the name of the creditor seeking the garnishment.
- **Garnishment Date** (`garnishment_date`, `date`, required: false): This field is used to specify the date the garnishment is requested. Please use the standard date format (MM/DD/YYYY).
- **Account Number** (`account_number`, `text`, required: false): This field is used to provide the account number associated with the garnishment request.
- **Account Type** (`account_type`, `select_one`, required: true): This field is used to specify the type of account the garnishment is being requested for. Please select one of the following options:
  - Checking
  - Savings
  - Credit
  - Other
- **Account Owner** (`account_owner`, `text`, required: false): This field is used to identify the account owner's name.
- **Current Balance** (`current_balance`, `number`, required: false): This field is used to specify the current balance of the account at the time of the garnishment request.
