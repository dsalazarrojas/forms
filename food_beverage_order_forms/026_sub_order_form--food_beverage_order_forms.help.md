<thinking>

To create a help guide for this form, I will need to understand the purpose of the form and how the user can complete it. Based on the provided YAML, it appears that this form is used for sub-orders, likely in a food or beverage ordering context. 

The form appears to collect information related to sub-orders, including order details, customer information, payment method, order status, and order items. This form is likely used by a business that sells subs and other food items, and the sub-order form is used to place and manage orders.

Here is the help guide for the form:

# sub_order_form - Help Guide

## Purpose
This form is used to place sub-orders for our business. You can use this form to provide us with the necessary information to complete your order.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your name in the "Name" field.
2. Enter your email address in the "Email" field. This will be used to contact you with order updates.
3. Enter your phone number in the "Phone" field.
4. Select your payment method from the "Payment Method" field. You can choose from Stripe, PayPal, or Cash.
5. Select your payment gateway from the "Payment Gateway" field. You can choose from Stripe, PayPal, or Cash.
6. Enter the total cost of your order in the "Order Total" field. This is optional but will help us process your order accurately.
7. Enter any additional notes about your order in the "Order Notes" field.
8. Select a date for your order in the "Date" field.
9. Select a time for your order in the "Time" field.
10. Enter any comments about your order in the "Order Comments" field.
11. Select the status of your order from the "Order Status" field. You can choose from Pending, Processing, or Completed.
12. Select a date for your order in the "Order Date" field.
13. Select a time for your order in the "Order Time" field.
14. Enter a message to the customer in the "Customer Message" field.
15. Enter the number of sub-orders you are placing in the "Sub Count" field. This is optional but will help us process your order accurately.
16. Select the size of your sub-order from the "Sub Size" field. You can choose from Small, Medium, or Large.
17. Select the type of sub-order from the "Sub Type" field. You can choose from Veggie, Meat, Turkey, Tuna, Chicken, or Fish.
18. Select the type of bread from the "Bread" field. You can choose from Whole Wheat, White, Rye, or Gluten Free.
19. Select any condiments you would like on your sub-order from the "Condiment" field. You can choose from Mayonnaise, Mustard, Ketchup, Relish, or Ranch.
20. Enter any special instructions for your order in the "Special Instructions" field.

## Field-by-Field Explanation
* **Order Details** (`1`, `text`, required/optional): Enter a brief description of your order.
* **Name** (`2`, `text`, required/optional): Enter your name.
* **Email** (`3`, `email`, required/optional): Enter your email address.
* **Phone** (`4`, `text`, required/optional): Enter your phone number.
* **Payment Method** (`5`, `select_one`, required/true): Select your payment method from the dropdown list.
* **Payment Gateway** (`6`, `select_one`, required/true): Select your payment gateway from the dropdown list.
* **Order Total** (`7`, `number`, required/optional): Enter the total cost of your order.
* **Order Notes** (`8`, `note`, required/optional): Enter any additional notes about your order.
* **Date** (`9`, `date`, required/optional): Select a date for your order.
* **Time** (`10`, `time`, required/optional): Select a time for your order.
* **Order Comments** (`11`, `text`, required/optional): Enter any comments about your order.
* **Order Status** (`12`, `select_one`, required/true): Select the status of your order from the dropdown list.
* **Order Date** (`13`, `date`, required/optional): Select a date for your order.
* **Order Time** (`14`, `time`, required/optional): Select a time for your order.
* **Customer Message** (`15`, `text`, required/optional): Enter a message to the customer.
* **Order Number** (`16`, `number`, required/optional): Enter the number of sub-orders you are placing.
* **Total Sub Total** (`17`, `number`, required/optional): Enter the total cost of your sub-orders.
* **Order Items** (`18`, `select_multiple`, required/true): Select the items to be included in your sub-order from the dropdown list.
* **Customer Message** (`19`, `text`, required/optional): Enter a message to the customer.
* **Sub Count** (`20`, `number`, required/optional): Enter the number of sub-orders you are placing.
* **Sub Size** (`21`, `select_one`, required/true): Select the size of your sub-order from the dropdown list.
* **Sub Type** (`22`, `select_multiple`, required/true): Select the type of sub-order from the dropdown list.
* **Bread** (`23`, `select_multiple`, required/true): Select the type of bread from the dropdown list.
* **Condiment** (`24`, `select_multiple`, required/true): Select any condiments you would like on your sub-order from the dropdown list.
* **Special Instructions** (`25`, `text`, required/optional): Enter any special instructions for your order.

## Tips
* Make sure to complete all required fields.
* Double-check your order details before submitting.
* Enter accurate and complete information in all fields.
* If you have any questions or concerns, contact us directly.

Please note that this help guide is based on the provided YAML fields, and the explanations are concrete and practical. If there are any discrepancies or inconsistencies, please let me know.
