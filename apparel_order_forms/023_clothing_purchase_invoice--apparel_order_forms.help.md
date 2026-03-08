<thinking>
The purpose of this form is to create a Clothing Purchase Invoice. This form is used to document a customer's order for clothing items, including details such as customer information, billing and shipping addresses, items purchased, and order totals. It's essential to ensure that each required field is filled out accurately to avoid incomplete orders. Please make sure you have all the necessary details before completing this form.
</thinking>

# Clothing Purchase Invoice - Help Guide
## Purpose
## How To Complete This Form
### Step 1: Enter Customer Information
### Step 2: Enter Billing Address
### Step 3: Enter Shipping Address
### Step 4: Enter Item Details
### Step 5: Calculate Order Totals

## Field-by-Field Explanation
* **Invoice Number** (`invoice_number`, `text`, required): A unique identifier for this invoice.
* **Invoice Date** (`invoice_date`, `date`, required): The date this invoice was generated.
* **Customer Information** (`section_customer`, `note`, required): This section is used to provide details about the customer. Please fill out the required fields below.
  * **Customer Name** (`customer_name`, `text`, required): Full name of the customer.
  * **Email Address** (`customer_email`, `email`, required): Customer email address.
* **Billing Address** (`billing_address`, `text`, required): The full address for billing purposes.
* **City, State, Zip Code** (`billing_city_state`, `text`, required): Details of the billing location.
* **Country** (`billing_country`, `text`, required): Country of the billing address.
* **Shipping Address** (`shipping_address`, `text`, required): The delivery location details.
* **City, State, Zip Code** (`shipping_city_state`, `text`, required): Details of the shipping location.
* **Country** (`shipping_country`, `text`, required): Shipping destination country.
* **Item Description** (`item_description`, `text`, required): Name and details of the clothing item.
* **Size** (`item_size`, `text`, required): Size of the item.
* **Colour** (`item_colour`, `text`, required): Colour of the item.
* **Quantity** (`item_quantity`, `number`, required): Number of items purchased.
* **Unit Price** (`unit_price`, `number`, required): Price per item.
* **Line Amount** (`line_amount`, `number`, required): Quantity times unit price.
* **Subtotal** (`subtotal`, `number`, required): Total before tax and shipping.
* **Tax Amount** (`tax_amount`, `number`, required): Sales tax or VAT.
* **Shipping Cost** (`shipping_cost`, `number`, required): Delivery charge.
* **Tips**
  * Ensure all required fields are filled out accurately to avoid incomplete orders.
  * Review the form for any errors or issues before submission.
