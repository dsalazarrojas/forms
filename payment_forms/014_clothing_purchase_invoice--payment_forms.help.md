# Clothing Purchase Invoice - Help Guide
## Purpose
This form is used to create a payment invoice for a clothing purchase transaction. It captures the necessary information to generate a comprehensive invoice that includes company and customer details, items purchased, and invoice totals.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the company details section and fill in the required fields: Company - Store Name, Company Address, and Company Phone Number.
2. Select the customer details section and fill in the required fields: Customer Name, Customer Email, and Customer Address.
3. Select the items purchased section and fill in the required fields: Item Description, Quantity, Unit Price, and Line Total.
4. Select the invoice totals section and fill in the required fields: Subtotal, Tax Amount, Shipping Cost, and Total Amount Due.

## Field-by-Field Explanation

* **Invoice Number** (`invoice_number`): A unique identifier for this transaction. It is essential to ensure that each invoice has a unique number.
* **Invoice Date** (`invoice_date`): The date of the invoice, which is typically the date of the transaction.
* **Company - Store Name** (`company_name`): The name of the company or store that is selling the clothing item.
* **Company Address** (`company_address`): The full address of the company or store.
* **Company Phone Number** (`company_phone`): The phone number of the company or store (optional).
* **Customer Name** (`customer_name`): The name of the customer who purchased the clothing item.
* **Customer Email** (`customer_email`): The email address of the customer.
* **Customer Address** (`customer_address`): The billing and delivery address of the customer.
* **Item Description** (`item_description`): A brief description of the clothing item purchased.
* **Size** (`item_size`): The size of the clothing item (optional).
* **Color** (`item_color`): The color of the clothing item (optional).
* **Quantity** (`quantity_ordered`): The number of items purchased.
* **Unit Price - USD** (`unit_price`): The price of each clothing item in USD.
* **Line Total - USD** (`line_total`): The total cost of the items purchased, calculated as Quantity x Unit Price.
* **Subtotal - USD** (`subtotal`): The subtotal of the invoice before taxes and shipping.
* **Tax Rate - Percentage** (`tax_rate`): The tax rate applied to the subtotal (optional).
* **Tax Amount - USD** (`tax_amount`): The tax amount calculated based on the subtotal and tax rate.
* **Shipping Cost - USD** (`shipping_cost`): The cost of shipping the clothing item (optional).
* **Discount Applied - USD** (`discount_amount`): The discount amount applied to the invoice (optional).
* **Total Amount Due - USD** (`total_amount`): The final total amount due for payment.
