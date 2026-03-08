# Catering Invoice - Help Guide
## Purpose
This form is designed to collect information for a catering invoice, which is a formal document that outlines the details of a catering service provided to a client. The form is used to record the essential information about the invoice, including the invoice number, date, client information, event details, and payment instructions.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the invoice number, which is a unique identifier for the invoice.
2. Enter the date of the invoice, which is the date when the invoice was generated.
3. Enter the payment due date, which is the date by which payment is expected.
4. Enter the client's name and billing address.
5. Enter the client's email address for billing purposes.
6. Enter the event name and date of service.
7. Enter a description of the services and products provided to the client.
8. Calculate the subtotal amount before tax and fees.
9. (Optional) Enter any applicable sales tax amount.
10. (Optional) Enter any service charge or gratuity amount.
11. Calculate the total amount due.
12. Select the preferred payment channel for the client.
13. Enter the authorized billing manager's signature.

## Field-by-Field Explanation

* **Invoice Number** (`invoice_number`, `text`, required): Enter a unique identifier for the invoice, e.g., INV-2026-001.
* **Date of Invoice** (`invoice_date`, `date`, required): Enter the date when the invoice was generated.
* **Payment Due Date** (`payment_due_date`, `date`, required): Enter the date by which payment is expected.
* **Client or Company Name** (`client_name`, `text`, required): Enter the client's name or company name.
* **Billing Address** (`billing_address`, `text`, required): Enter the client's billing address.
* **Billing Email Address** (`client_email_billing`, `email`, required): Enter the client's email address for billing purposes.
* **Event Name** (`event_name_ref`, `text`, required): Enter the name of the event.
* **Date of Service** (`event_date_service`, `date`, required): Enter the date when the service was provided.
* **Description of Services and Products** (`items_description_summary`, `text`, required): List the items and quantities provided to the client.
* **Subtotal Amount** (`subtotal_amount`, `number`, required): Calculate the subtotal amount before tax and fees.
* **Sales Tax** (`sales_tax_amount`, `number`, optional): Enter any applicable sales tax amount.
* **Service Charge or Gratuity** (`service_charge_gratuity`, `number`, optional): Enter any service charge or gratuity amount.
* **Total Amount Due** (`total_amount_due`, `number`, required): Calculate the total amount due after considering tax and fees.
* **Preferred Payment Channel** (`preferred_payment_channel`, `select_one`, required): Select the preferred payment channel for the client, e.g., Bank Transfer (wire), Online Portal (Credit Card), Company Check by Mail, or Cash upon service.
* **Authorized Billing Manager** (`billing_manager_signature`, `text`, required): Enter the authorized billing manager's signature.
