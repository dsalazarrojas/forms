<thinking>
The form "transaction_issues_report" is designed to gather information about issues related to transactions, which is important for identifying and resolving problems promptly. Before proceeding, make sure this form is relevant to your situation and hasn't been completed recently to avoid duplication of efforts. The purpose of this form is to collect details about a specific transaction issue, which can include information on the transaction type, date, amount, description, customer name, issue description, and category of the issue.
</thinking>

# transaction_issues_report - Help Guide
## Purpose
This form is used to report transaction issues that need attention from our team. Please fill out this form with the necessary details to help us understand and resolve the problem efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of transaction that is related to the issue (Credit/Debit, Deposit, or Other).
2. Enter the date of the transaction that is causing the issue.
3. Enter the amount of the transaction (in the currency specified by your organization).
4. You can choose to enter the transaction amount in cents instead of the dollar amount.
5. Provide a brief description of the issue or problem with the transaction.
6. Enter the customer's name associated with the transaction.
7. Describe the issue or problem you are experiencing with the transaction.
8. Select the category of the issue (e.g., Category 1, Category 2, Category 3).

## Field-by-Field Explanation
* **Transaction Type** (`Transaction Type`, `select_one`, required/optional): Choose the type of transaction that is causing the issue, such as Credit/Debit or Deposit.
* **Date of Transaction** (`date_of_transaction`, `date`, required/optional): Enter the date of the transaction that is causing the issue.
* **Transaction Amount** (`transaction_amount`, `number`, required/optional): Enter the amount of the transaction, which should match the format specified by your organization.
* **Transaction Amount in Cents** (`transaction_amount_in_cents`, `number`, required/optional): Enter the transaction amount in cents for more precise calculations.
* **Transaction Description** (`transaction_description`, `text`, required/optional): Briefly describe the issue or problem with the transaction, providing as much detail as possible.
* **Customer Name** (`customer_name`, `text`, required/optional): Enter the name of the customer associated with the transaction that is causing the issue.
* **Issue Description** (`issue_description`, `text`, required/optional): Describe the problem or issue you are experiencing with the transaction in more detail.
* **Issue Category** (`issue_category`, `select_multiple`, required/optional): Choose the category of the issue to help us better understand and resolve it.
