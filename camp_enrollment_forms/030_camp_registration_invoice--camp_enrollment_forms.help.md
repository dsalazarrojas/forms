<thinking>
The Camp Registration Invoice form is a crucial document used to track and record financial transactions and billing information for camps. This form is designed to ensure accurate and organized financial management. To avoid any potential issues with duplicate invoicing, please make sure that the invoice number is unique and not previously used. This form is meant for internal use within the organization, so please do not share it with external parties without proper authorization.
</thinking>

# Camp Registration Invoice - Help Guide
## Purpose
The Camp Registration Invoice form is a document used to record and track financial transactions and billing information for camps. It ensures accurate and organized financial management within the organization.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the unique invoice number in the "Invoice Number" field.
2. Provide the registrant's name in the "Registrant Name" field.
3. Enter the billing address in the "Billing Address" field.
4. Describe the items included in the charges in the "Items Description" field.
5. Enter the subtotal amount before taxes and fees in the "Subtotal Amount" field.
6. (Optional) Enter any tax amount applied in the "Taxes" field.
7. Calculate the final amount due by adding the subtotal and taxes, and enter it in the "Total Due" field.
8. Select the due date for payment in the "Due Date" field.
9. Choose the current payment status from the options provided in the "Payment Status" field.
10. Add any additional billing instructions or notes in the "Invoice Notes" field.

## Field-by-Field Explanation

* **Invoice Number** (`invoice_number`, text, required): A unique identifier for the invoice.
* **Registrant Name** (`registrant_name`, text, required): The name of the registrant being invoiced.
* **Billing Address** (`billing_address`, text, required): The address for invoicing purposes.
* **Items Description** (`items_description`, text, required): A description of the charges included in the invoice.
* **Subtotal Amount** (`subtotal`, number, required): The amount before taxes and fees.
* **Taxes** (`taxes`, number, optional): The tax amount applied.
* **Total Due** (`total_due`, number, required): The final amount due after adding taxes and fees.
* **Due Date** (`due_date`, date, required): The date by which payment is due.
* **Payment Status** (`payment_status`, select_one, required): The current status of the payment (Unpaid, Paid, Partially Paid).
* **Invoice Notes** (`notes`, text, optional): Additional billing instructions or notes.
