# Online Restaurant Order Pad - Help Guide

## Purpose
This form is designed to process customer orders online, allowing restaurant staff to efficiently manage orders from start to finish.

## How To Complete This Form
To fill out this form accurately, please follow these steps:

1. Ensure all required fields are filled out. Required fields are marked as such.
2. Fill out the form with the customer's information, such as their email, name, phone number, etc.
3. Select the type of order the customer is placing (e.g., Burger, Pizza, Salad).
4. Select all the order items the customer wants.
5. Enter the order time.
6. Enter the order date.
7. Add any additional notes about the order.
8. Enter the waiter's name.
9. Enter the total amount of the order.

## Field-by-Field Explanation
* **Customer Order**: 
    * (customer_order, text, false): Enter a brief description of the customer's order.
* **E-mail**: 
    * (customer_email, email, false): Enter the customer's email address.
* **Customer Name**: 
    * (customer_name, text, false): Enter the customer's name.
* **Phone**: 
    * (customer_phone, text, false): Enter the customer's phone number.
* **Order Type**: 
    * (order_type, select_one, false): Select the type of order the customer is placing (e.g., Burger, Pizza, Salad).
* **Order Item**: 
    * (order_item, select_multiple, false): Select all order items the customer wants.
* **Order Time**: 
    * (order_time, time, false): Enter the time of the order (e.g., 12:00 PM, 3:00 PM).
* **Order Date**: 
    * (order_date, date, false): Enter the date of the order (e.g., 2024-02-20).
* **Order Note**: 
    * (order_note, note, false): Add any additional notes about the order.
* **Waiter Name**: 
    * (waiter_name, text, false): Enter the name of the waiter handling the order.
* **Total Amount**: 
    * (total_amount, number, false): Enter the total amount of the order.

## Tips
- Double-check all fields for accuracy before submission.
- Review the form carefully to avoid any errors.
- If you are unsure about any field, consult with a colleague or a supervisor.
- This form is designed to help you process orders efficiently, but it's crucial to follow the restaurant's order processing protocols for accurate results.
