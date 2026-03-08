# Retail Shelf Mirror Display Order Form - Help Guide
## Purpose

The Retail Shelf Mirror Display Order Form is designed to help customers place orders for products displayed on retail shelves. This form collects essential information about the customer and the order details.

## How To Complete This Form

1. Enter the customer's name and contact information, including their name, contact person, phone number, and email.
2. Enter the product's details, including the product id, name, and quantity.
3. Enter the order notes, which should include any special instructions or details for the order.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, text, required: false): Enter the customer's full name.
* **Contact Person** (`contact_person`, text, required: false): Enter the name of the contact person associated with the customer.
* **Contact Phone** (`contact_phone`, text, required: false): Enter the customer's contact phone number.
* **Customer Email** (`customer_email`, email, required: false): Enter the customer's email address.
* **Product Id** (`product_id`, number, required: false): Enter the product id associated with the order. Note: This field may require additional context or business rules for correct formatting.
* **Product Name** (`product_name`, text, required: false): Enter the name of the product being ordered.
* **Quantity** (`quantity`, number, required: false): Enter the quantity of the product being ordered.
* **Unit Price** (`unit_price`, number, required: false): Enter the unit price of the product.
* **Discount** (`discount`, number, required: false): Enter the discount applicable to the order. Note: This field may require additional context or business rules for correct formatting.
* **Order Notes** (`order_notes`, note, required: false): Enter any special instructions or details for the order.
