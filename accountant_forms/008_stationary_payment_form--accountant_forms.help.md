# Stationary Payment Form - Help Guide

## Purpose
The Stationary Payment Form is designed to record financial transactions related to stationary purchases. It captures user details, payment date, product information, and payment method for accurate accounting and tracking.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in your name in the "user name" field.
2. Provide your phone number in the "phone" field.
3. Enter your email address in the "email" field (optional).
4. Select the date of the payment in the "payment date" field.
5. Enter the name of the product or item being purchased.
6. Input the price of the product.
7. Specify the quantity of the product purchased.
8. Enter the total amount paid.
9. Optionally, provide the address for the purchase location.
10. Choose your preferred payment method (cash, credit card, or bank transfer) from the dropdown list.
11. Provide any additional note or message regarding the transaction, if needed.

## Field-by-Field Explanation

* **user name** (`user_name`, text, required): Enter your full name to identify yourself as the user.
* **phone** (`user_phone`, text, required): Provide your phone number for contact purposes.
* **email** (`user_email`, email, optional): Enter your email address for communication (if not provided, will not be required for form submission).
* **payment date** (`payment_date`, date, required): Select the date of the payment transaction.
* **product name** (`product_name`, text, optional): Enter the name of the product or item being purchased.
* **price** (`product_price`, number, required): Input the price of the product purchased.
* **quantity** (`stationery_quantity`, number, required): Specify the quantity of the product purchased.
* **total amount** (`total_amount`, number, required): Enter the total amount paid for the product.
* **address** (`user_address`, text, optional): Provide the address for the purchase location, if applicable.
* **payment method** (`payment_method`, select_one, required): Select from "cash", "credit card", or "bank transfer" payment methods.
* **note** (`note`, text, optional): Enter any additional note or message regarding the transaction.
* **message** (`user_message`, text, optional): Provide any additional message or comment regarding the transaction.

Note: This help guide assumes the user will be using a web-based form for submission.
