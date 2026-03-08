<thinking>
  This form is for customers to provide their order details, including customer information, order selection, order date and time, phone number, email, and any additional note. This form is intended to capture all necessary information from the customer in a structured and organized manner, facilitating easier processing and follow-up actions. To avoid duplication, please ensure that each customer has a unique order number, and if there's any update needed for a customer's order, use the provided update field.

</thinking>

# Retail Customer Order Form - Help Guide
## Purpose
The Retail Customer Order Form is designed to gather essential information from customers for their orders. This form allows customers to provide their name, phone number, email, and any additional note.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the relevant order for the customer (Order 1, Order 2, or Order 3).
2. Enter the date of the order.
3. Enter the time of the order.
4. Enter the customer's phone number and email.
5. If necessary, add a personal note for the customer.

## Field-by-Field Explanation
* **customer info** (`retail_customer_info`, text, optional): Enter the customer's name and any additional information you'd like to add for their order.
* **orders** (`customer_orders`, select multiple, optional): Select the relevant order for the customer (Order 1, Order 2, or Order 3).
* **order date** (`order_date`, date, optional): Enter the date of the order.
* **order time** (`order_time`, time, optional): Enter the time of the order.
* **phone** (`customer_phone`, text, optional): Enter the customer's phone number.
* **email** (`customer_email`, email, optional): Enter the customer's email address.
* **note** (`customer_note`, note, optional): Add any additional note for the customer's order.
