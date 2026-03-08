<thinking>
This form is for processing orders and customer information for merchant accounts. The form collects various details about the order, including customer name, email, address, and phone number, as well as order details such as date, total, and status. The form also asks for merchant-specific information like email and notes. To ensure that this form serves its purpose effectively, please review each field to understand its intended use case.

The form has the following pages:

1. Customer information page with fields for customer name, email, address, and phone number.
2. Order details page with fields for order date, total, status, and notes.
3. Delivery information page with fields for delivery date, time, and status.
4. Additional fields for merchant information and order comments.

When filling out this form, please ensure that you fill in the required fields accurately to avoid any errors.
</thinking>

# email_order_form - Help Guide
## Purpose
This form is designed to process orders and customer information for merchant accounts. It allows you to collect and store details about customer orders, including contact information, order specifics, and delivery instructions.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the customer information page with the customer's name, email address, phone number, and address.
2. Proceed to the order details page and fill in the order date, total, status, and notes.
3. Move to the delivery information page and enter the delivery date, time, and status.
4. If necessary, fill in additional fields for merchant information and order comments.

## Field-by-Field Explanation

* **customer_name** (text, required: false): Enter the customer's name.
* **order_details** (note, required: false): Add any additional comments or notes about the order.
* **email** (email, required: false): Enter the customer's email address.
* **order_status** (select_one, required: false): Choose the order status (Active or Inactive).
* **order_total** (number, required: false): Enter the total amount of the order.
* **customer_address** (text, required: false): Enter the customer's address.
* **customer_phone** (text, required: false): Enter the customer's phone number.
* **order_date** (date, required: false): Enter the date of the order.
* **customer_note** (note, required: false): Add any additional comments or notes about the customer.
* **order_items** (text, required: false): Enter any additional items ordered.
* **delivery_date** (date, required: false): Enter the delivery date.
* **delivery_time** (time, required: false): Enter the delivery time.
* **delivery_status** (select_one, required: false): Choose the delivery status (Active or Inactive).
* **customer_email** (email, required: false): Enter the customer's email address.
* **order_comments** (text, required: false): Add any additional comments about the order.
* **merchant_email** (email, required: false): Enter the merchant's email address.
* **merchant_notes** (text, required: false): Add any additional notes about the merchant.
* **payment_method** (select_multiple, required: false): Choose the payment method (Yes or No).
* **order_items_2** (text, required: false): Enter any additional items ordered.
* **delivery_instructions** (text, required: false): Enter any delivery instructions.
