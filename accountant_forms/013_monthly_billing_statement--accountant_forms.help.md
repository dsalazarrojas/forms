# Monthly Billing Statement - Help Guide
## Purpose
This form is used to create a monthly billing statement for a customer's account. It gathers essential information about the account, including billing details and account status.

## How To Complete This Form

1. Fill out the form with the required fields.
2. Enter the customer's ID, invoice date, charge type, charge amount, and due date.
3. Select the charge type, account status, and customer status.
4. Choose whether the account is paid or not.
5. Enter any additional comments or notes if necessary.
6. Enter the account manager's name and phone number.
7. Enter the customer's address.
8. Enter the submitter's name, email, and phone number.
9. Enter the submitter's notes.
10. Select the submitter's status.

## Field-by-Field Explanation

* **Customer ID** (`customer_id`, `text`, required): Enter the unique identifier of the customer's account.
* **Invoice Date** (`invoice_date`, `date`, required): Enter the date of the invoice.
* **Charge Type** (`charge_type`, `select_one`, required): Select the type of charge, such as "Option 1", "Option 2", or "Option 3".
* **Charge Amount** (`charge_amount`, `number`, required): Enter the total amount of the charge.
* **Balance** (`balance`, `number`, required): Enter the current balance of the account.
* **Due Date** (`due_date`, `date`, required): Enter the due date of the invoice.
* **Payment Date** (`payment_date`, `date`, required): Enter the date of payment.
* **Paid** (`paid`, `select_one`, required): Select whether the account is paid or not.
* **Comments** (`comments`, `text`, optional): Enter any additional comments or notes about the account.
* **Account Manager** (`account_manager`, `text`, optional): Enter the name of the account manager.
* **Account Number** (`account_number`, `number`, required): Enter the account number.
* **Contact Number** (`contact_number`, `text`, optional): Enter the contact number of the customer.
* **Address** (`address`, `text`, optional): Enter the customer's address.
* **Account Status** (`account_status`, `select_one`, required): Select the status of the account, such as "Open", "Closed", or "Pending".
* **Account Manager Notes** (`account_manager_notes`, `text`, optional): Enter any additional notes from the account manager.
* **Customer Notes** (`customer_notes`, `text`, optional): Enter any notes from the customer.
* **Customer Status** (`customer_status`, `select_multiple`, required): Select the status of the customer, such as "Active", "Inactive", or "Closed".
* **Notes** (`notes`, `text`, optional): Enter any additional notes.
* **Submitter** (`submitter`, `text`, optional): Enter the submitter's name.
* **Submitter Email** (`submitter_email`, `email`, required): Enter the submitter's email address.
* **Submitter Phone** (`submitter_phone`, `text`, required): Enter the submitter's phone number.
* **Submitter Notes** (`submitter_notes`, `text`, optional): Enter any additional notes from the submitter.
* **Submitter Status** (`submitter_status`, `select_one`, required): Select the status of the submitter, such as "Open", "Closed", or "Pending".
