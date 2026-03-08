# Accounts Payable Check Request Form - Help Guide
## Purpose
The Accounts Payable Check Request Form is a tool used by staff members to request payments to vendors and suppliers. This form is used to ensure accuracy and transparency in the payment process.
## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your name and department to identify yourself as the person submitting the request.
2. Enter the date you submitted the request.
3. Provide the name of the vendor or supplier to be paid.
4. Enter the vendor's complete address.
5. Enter the vendor's tax identification number.
6. Enter the reference number of the invoice to be paid.
7. Enter the date when the invoice was issued.
8. Enter the dollar amount to be paid to the vendor.
9. Choose the classification of the expense (e.g. Office Supplies, Utilities, etc.).
10. Provide a brief description of the purpose of the payment.
11. Enter the name of the manager who approved this payment.
12. If necessary, enter any special instructions for preparing or mailing the check.
13. If applicable, list any supporting documents attached to this request.

## Field-by-Field Explanation

* **Requestor Name** (`requestor_name`, text, required): Enter your full name to identify yourself as the person submitting the request.
* **Requestor Department** (`requestor_department`, text, required): Enter your department name to identify yourself as the person submitting the request.
* **Request Date** (`request_date`, date, required): Enter the date when you submitted the request.
* **Vendor Name** (`vendor_name`, text, required): Enter the name of the vendor or supplier to be paid.
* **Vendor Address** (`vendor_address`, text, required): Enter the complete address of the vendor or supplier.
* **Vendor Tax ID** (`vendor_tax_id`, text, required): Enter the tax identification number of the vendor or supplier.
* **Invoice Number** (`invoice_number`, text, required): Enter the reference number of the invoice to be paid.
* **Invoice Date** (`invoice_date`, date, required): Enter the date when the invoice was issued.
* **Amount Requested** (`amount_requested`, number, required): Enter the dollar amount to be paid to the vendor.
* **Expense Category** (`expense_category`, select_one, required): Choose the classification of the expense (e.g. Office Supplies, Utilities, etc.).
* **Reason for Payment** (`payment_reason`, text, required): Provide a brief description of what the payment is for.
* **Approval Manager** (`approval_manager`, text, required): Enter the name of the manager who approved this payment.
* **Special Instructions** (`special_instructions`, text, optional): If necessary, enter any special instructions for preparing or mailing the check.
* **Supporting Documents** (`supporting_documents`, text, optional): If applicable, list any supporting documents attached to this request.

Note: All fields marked with `required` are mandatory and must be filled out.
