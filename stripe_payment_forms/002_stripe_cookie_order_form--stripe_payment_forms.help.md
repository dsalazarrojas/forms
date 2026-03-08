# stripe_cookie_order_form - Help Guide
## Purpose
This form is used to handle cookie orders and gather necessary information 
for internal purposes only.

## How To Complete This Form
To complete this form, please follow these steps:
1. Fill out the `Name` field with your name as it appears on your identification.
2. Enter your `Email` in the format of `username@example.com`.
3. Select the type of cookie you wish to order from the `Cookie Type` dropdown menu.
4. If you have any special instructions, please type them in the `Special Instructions` field.
5. Enter the quantity of cookies you'd like to order in the `Quantity` field. 

## Field-by-Field Explanation
* **Cookie Order Form** (`cookie_order_form`, `text`, required: false): This is the main 
  title of the form.
* **Name** (`name`, `text`, required: false): Please fill out your name as it 
  appears on your identification.
* **Email** (`email`, `email`, required: false): Enter your email address in the 
  format `username@example.com`.
* **Cookie Type** (`cookie_type`, `select_one`, required: false): Select the type 
  of cookie you wish to order from the available options.
* **Quantity** (`quantity`, `number`, required: false): Enter the number of cookies 
  you'd like to order.
* **Special Instructions** (`special_instructions`, `note`, required: false): If you 
  have any special requests or comments, please type them here.
