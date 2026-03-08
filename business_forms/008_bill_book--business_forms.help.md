# Bill Book - Help Guide

## Purpose
The Bill Book is a digital form used to record and track customer invoices for a business. It provides a standardized platform for collecting and organizing essential information related to customer transactions.

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter the invoice number in the designated field.
2. Select the payment method and status.
3. Input the customer's name, address, and phone number (if available).
4. Add each item's description, quantity, and unit price to the itemized billing section.
5. The system will automatically calculate the subtotal, tax amount, and total amount based on the entered data.
6. Provide internal notes or reminders for future reference.

## Field-by-Field Explanation
* **-- Invoice Header --** (`invoice_info_header`, note, required: false): This section serves as a header for the invoice information.
* **Invoice Number** (`invoice_number`, text, required: true): Enter the unique number assigned to this invoice.
* **Date** (`bill_date`, date, required: true): Select the date when the invoice was issued.
* **-- Customer Details --** (`customer_details_header`, note, required: false): This section separates the customer details from the rest of the form.
* **Customer Name** (`customer_name`, text, required: true): Enter the full name of the customer.
* **Customer Address** (`customer_address`, text, required: false): Enter the customer's address (optional).
* **Phone Number** (`customer_phone`, text, required: false): Enter the customer's phone number (optional).
* **-- Item Details --** (`itemized_billing_header`, note, required: false): This section is for adding and managing individual items on the invoice.
* **Item Description** (`item_description`, text, required: true): Enter a brief description of the item purchased or service provided.
* **Quantity** (`quantity`, number, required: true): Enter the quantity of items purchased.
* **Unit Price** (`unit_price`, number, required: true): Enter the price per unit of the item.
* **Subtotal** (`subtotal`, number, required: false): This field is automatically calculated based on the entered item data.
* **Tax Amount** (`tax_amount`, number, required: false): This field is automatically calculated based on the entered data.
* **Grand Total** (`total_amount`, number, required: true): This field is automatically calculated based on the entered data.
* **-- Payment Status --** (`payment_status_header`, note, required: false): This section separates the payment status from the rest of the form.
* **Payment Method** (`payment_method`, select_one, required: true): Choose from available options: Cash, Credit Card, Bank Transfer, or Digital Wallet.
* **Payment Status** (`payment_status`, select_one, required: true): Choose from available options: Paid, Partially Paid, Unpaid, or Refunded.
* **Internal Notes or Reminders** (`notes`, text, required: false): Add any internal notes or reminders for future reference.
