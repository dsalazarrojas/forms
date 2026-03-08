# Powder Release Product Order Form - Help Guide

## Purpose
This form is used to capture information for powder release product orders. The form collects product details and customer information to process orders.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the product name in the "Product Name" field.
2. Enter the product SKU (Stock Keeping Unit) in the "Product Sku" field.
3. Enter the product price in the "Product Price" field.
4. Enter the customer's name in the "Customer Name" field.
5. Enter the customer's email address in the "Customer Email" field.
6. Enter the customer's phone number in the "Customer Phone" field.
7. Enter any order notes or special instructions in the "Order Notes" field.
8. Select the payment method from the "Payment Method" dropdown menu.
9. Enter the total amount due for the order in the "Total Amount" field.

## Field-by-Field Explanation
* **Product Name** (`product_name`, text, required: false): Enter the name of the product you wish to order.
* **Product Sku** (`product_sku`, text, required: false): Enter the Stock Keeping Unit (SKU) of the product.
* **Product Price** (`product_price`, number, required: false): Enter the price of the product.
* **Customer Name** (`customer_name`, text, required: false): Enter the name of the customer placing the order.
* **Customer Email** (`customer_email`, email, required: false): Enter the email address of the customer.
* **Customer Phone** (`customer_phone`, text, required: false): Enter the phone number of the customer.
* **Order Notes** (`order_notes`, note, required: false): Enter any notes or special instructions for the order.
* **Payment Method** (`payment_method`, select_one, required: false): Select the payment method for the order, such as Stripe, PayPal, or Bank Transfer.
* **Total Amount** (`total_amount`, number, required: false): Enter the total amount due for the order.

## Tips
- Make sure to fill out all required fields, if any.
- Select the correct payment method for your order.
- Enter accurate and complete information for the customer details.
- Use the "Order Notes" field to provide any special instructions or notes for the order.
