# Construction Work Order Form - Help Guide
## Purpose
The Construction Work Order Form is used to capture the essential details for a construction work order, including client billing information, service descriptions, hours worked, and payment terms. This form helps to ensure that all relevant information is collected accurately and consistently.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the client's billing name in the "Client name" field.
2. Provide a unique invoice number in the "Invoice number" field.
3. Describe the services provided in the "Service description" field.
4. Enter the total hours worked for the billed services in the "Hours worked" field.
5. Enter the total amount payable for this work order in the "Total amount due" field.
6. Choose the payment terms (e.g., Net 30, Net 14) in the "Payment terms" field.
7. Select the preferred payment method from the "Payment method" dropdown menu.

## Field-by-Field Explanation
* **Client name** (`client_name`, text, required): Enter the name of the client who is being billed for the work order.
* **Invoice number** (`invoice_number`, text, required): Enter a unique identifier for this invoice.
* **Service description** (`service_description`, text, required): Provide a brief description of the services provided for this work order.
* **Hours worked** (`hours_worked`, number, optional): Enter the total hours worked for the billed services. If not applicable, leave blank.
* **Rate per hour** (`rate_per_hour`, number, optional): Enter the hourly rate for the services provided. If not applicable, leave blank.
* **Total amount due** (`total_amount_due`, number, required): Enter the total amount payable for this work order.
* **Payment terms** (`payment_terms`, text, optional): Choose the payment terms for this work order (e.g., Net 30, Net 14). If not applicable, leave blank.
* **Payment method** (`payment_method`, select_one, optional): Select the preferred payment method for this work order (Bank transfer, Check, or Credit card).
