# Accounts Payable Form - Help Guide
## Purpose
This form is designed to track and record accounts payable information. It captures essential details such as vendor name, invoice number, date, and amount, as well as payment status, approved by, and approval date. The form ensures that all necessary information is accurately documented for smooth financial processing and reporting.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **Vendor name** field with the name of the supplier.
2. Enter the **Invoice number** in the corresponding field.
3. Provide the **Invoice date** if applicable.
4. Enter the **Due date** if the payment is not immediate.
5. Fill in the **Amount** field with the total payable amount.
6. Select the **Currency** of the payable from the available options (USD, EUR, GBP, or Other).
7. If necessary, enter the **Department code** and **Account code** for expense tracking.
8. Select the **Payment status** (Pending, Scheduled, or Paid).
9. Enter the name of the person who **Approved** this payable.
10. Optionally, record the **Approval date** if applicable.
11. Add any additional **Notes** related to the payable.

## Field-by-Field Explanation
* **Vendor name** (`vendor_name`, text, required): Enter the name of the supplier who issued the invoice.
* **Invoice number** (`invoice_number`, text, required): Enter the reference number on the vendor's invoice.
* **Invoice date** (`invoice_date`, date, optional): Record the date on which the vendor's invoice was issued (if known).
* **Due date** (`due_date`, date, optional): If payment is not due immediately, enter the date by which payment is due.
* **Amount** (`amount`, number, required): Enter the total amount payable.
* **Currency** (`currency`, select_one, required): Select the currency in which the payment is made (USD, EUR, GBP, or Other).
* **Department code** (`department_code`, text, optional): Enter the department or cost center responsible for the expense.
* **Account code** (`account_code`, text, optional): Enter the General Ledger (GL) code for the expense.
* **Payment status** (`payment_status`, select_one, required): Choose the status of the payment (Pending, Scheduled, or Paid).
* **Approved by** (`approved_by`, text, required): Enter the name of the person who approved this payable.
* **Approval date** (`approval_date`, date, optional): Record the date on which this payable was approved (if applicable).
* **Notes** (`notes`, text, optional): Add any related remarks or instructions regarding the payable.

## Tips
* Double-check all fields for accuracy before submitting the form.
* Ensure that all required fields are completed.
* If unsure about any field, check with the relevant department or approver.
