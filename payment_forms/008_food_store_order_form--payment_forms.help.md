# Food Store Order Form - Help Guide
## Purpose
The Food Store Order Form is used to record and report on customer orders placed at the store. It collects information about the customer, their order details, and payment method.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the customer's name.
2. Enter the order details.
3. Enter the customer's phone number (if applicable).
4. Enter the total cost of the order.
5. Select the payment method used (Credit Card, PayPal, or Cash).
6. Select the payment gateway used (Stripe, Square, or Authorize).
7. Enter the date of the order.
8. Enter the time of the order.
9. Enter a brief note about the order status.
10. Enter the customer's email address.
11. (Optional) Add any additional notes about the customer.
12. Enter the store ID.

## Field-by-Field Explanation
* **Customer Name** (`customer_name`, `text`, required): Enter the customer's name.
* **Order** (`order_details`, `text`, required): Enter a detailed description of the order.
* **Customer Phone** (`customer_phone`, `text`, optional): Enter the customer's phone number (if applicable).
* **Total Cost** (`total_cost`, `number`, required): Enter the total cost of the order.
* **Payment** (`payment_method`, `select_multiple`, required): Select one or more payment methods used (Credit Card, PayPal, or Cash).
* **Payment Gateway** (`payment_gateway`, `select_one`, required): Select the payment gateway used (Stripe, Square, or Authorize).
* **Date** (`date`, `date`, required): Enter the date of the order.
* **Time** (`time`, `time`, required): Enter the time of the order.
* **Order Status** (`order_status`, `note`, required): Enter a brief note about the order status.
* **Customer Email** (`customer_email`, `email`, required): Enter the customer's email address.
* **Customer Notes** (`customer_notes`, `text`, optional): Add any additional notes about the customer (if applicable).
* **Store ID** (`store_id`, `number`, required): Enter the store ID.

**Tips**

* Make sure to enter accurate and complete information to ensure proper order recording.
* Some fields may have specific validation rules or dependencies that will be checked at form submission.
* If you're unsure about any field, refer to the store's policies and procedures for clarification. 
* If you need to add or modify fields, consult with the store's management or IT department first.
