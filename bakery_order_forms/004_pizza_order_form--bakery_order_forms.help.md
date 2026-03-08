# Pizza Order Form - Help Guide
## Purpose
The Pizza Order Form is designed to collect order information from customers for a pizza order. 

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the order details in the "Pizza Order" field. 
2. Add your name and phone number if applicable. 
3. Provide a brief description of your order in the "Order Details" field. 
4. Choose your preferred delivery time. 
5. Enter the total cost of your order. 
6. Select your preferred payment method (Stripe, PayPal, or Cash) 
7. Confirm if you would like to pay online or through a payment gateway. 
8. Verify your phone number for confirmation. 
9. Enter any additional order notes. 
10. Provide your delivery address if you are choosing delivery.

## Field-by-Field Explanation

* **Pizza Order (id: 1)** (`text`, required/optional): Enter the type and quantity of pizza you would like to order. 
* **Name (id: 2)** (`text`, optional): Enter your name for order reference. 
* **Phone Number (id: 3)** (`text`, optional): Enter your phone number for confirmation purposes. 
* **Order Details (id: 4)** (`note`, optional): Provide a brief description of your order. 
* **Delivery Time (id: 5)** (`time`, optional): Choose your preferred delivery time. 
* **Order Total (id: 6)** (`number`, optional): Enter the total cost of your order. 
* **Payment Method (id: 7)** (`select_one`, required/optional): Select your preferred payment method (Stripe, PayPal, or Cash). 
* **Payment Gateways (id: 8)** (`select_multiple`, optional): Select any applicable payment gateways you would like to use. 
* **Confirm Order (id: 9)** (`select_one`, required/optional): Confirm if you would like to pay online or through a payment gateway. 
* **Email (id: 10)** (`email`, optional): Enter your email for order reference. 
* **Confirm Phone (id: 11)** (`select_one`, optional): Verify your phone number. 
* **Order Notes (id: 12)** (`text`, optional): Enter any additional order notes. 
* **Delivery Address (id: 13)** (`text`, optional): Enter your delivery address if you are choosing delivery. 

## Tips

* Ensure that the "Pizza Order" field is filled out completely before proceeding. 
* Double-check your order details and delivery address for accuracy. 
* Select your preferred payment method and confirm your order before proceeding. 

Note: This document assumes that the form fields are self-explanatory, and the explanations are based on the provided YAML fields. However, if there are any discrepancies or unclear fields, this guide attempts to explain the field's intended purpose.
