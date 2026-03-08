<thinking>...</thinking>

# Tool Rental Order Form - Help Guide

## Purpose
This form is used to collect information for tool rental orders, including tool type, rental dates, quantity, customer details, and payment information. It is intended for internal use and will help the rental team manage tool orders efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the tool type from the provided options.
2. Enter the start and end dates of the rental period.
3. Specify the quantity of tools needed.
4. Provide customer information, including first name, last name, email, and phone number.
5. Enter the billing and shipping addresses.
6. Specify the total days of the rental period.
7. Enter the daily rate of the tool.
8. Calculate the total cost of the rental.
9. Select the payment method.
10. Specify the order status.
11. Enter the order date and time.
12. Enter the delivery date and time.
13. Enter the delivery address.
14. Add any additional order notes.

## Field-by-Field Explanation

* **Tool Type** (`tool_type`, select_one, required): Select the type of tool being rented.
* **Start Date** (`start_date`, date, required): Enter the start date of the rental period.
* **End Date** (`end_date`, date, required): Enter the end date of the rental period.
* **Quantity** (`quantity`, number, required): Specify the number of tools needed.
* **Customer Info** (`customer_info`, note, required): Enter customer information, including name, email, and phone number.
* **Tool ID** (`tool_id`, select_multiple, required): Select the tool ID (if applicable).
* **Order Notes** (`order_notes`, text, required): Add any additional notes about the order.
* **Contact First Name** (`contact_first_name`, text, required): Enter the first name of the contact person.
* **Contact Last Name** (`contact_last_name`, text, required): Enter the last name of the contact person.
* **Contact Email** (`contact_email`, email, required): Enter the email of the contact person.
* **Contact Phone** (`contact_phone`, text, required): Enter the phone number of the contact person.
* **Billing Address** (`billing_address`, text, required): Enter the billing address of the customer.
* **Shipping Address** (`shipping_address`, text, required): Enter the shipping address of the customer.
* **Total Days** (`total_days`, number, required): Specify the total days of the rental period.
* **Daily Rate** (`daily_rate`, number, required): Enter the daily rate of the tool.
* **Total Cost** (`total_cost`, number, required): Calculate the total cost of the rental.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method.
* **Order Status** (`order_status`, select_one, required): Specify the order status.
* **Order Date** (`order_date`, date, required): Enter the date of the order.
* **Order Time** (`order_time`, time, required): Enter the time of the order.
* **Delivery Date** (`delivery_date`, date, required): Enter the delivery date.
* **Delivery Time** (`delivery_time`, time, required): Enter the delivery time.
* **Delivery Address** (`delivery_address`, text, required): Enter the delivery address.
* **Payment Terms** (`payment_terms`, text, required): Add any payment terms or conditions.

Note: All fields marked as required must be completed before submitting the form.
