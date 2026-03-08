# Cake Jar Order Form - Help Guide
## Purpose
The Cake Jar Order Form is designed to collect information from customers to place orders for cake jars. It is used to confirm the order recipient's identity, contact information, flavor preferences, order quantity, delivery method, and pickup date.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your **Buyer name** in the Buyer name field.
2. Enter your **Contact email** in the Contact email field.
3. Select your preferred **Jar flavor** from the options provided.
4. Enter the quantity of **Quantity of jars** you want to order.
5. Choose whether to **Pickup or delivery** your order.
6. Enter your **Delivery address** if you choose delivery.
7. Select your **Preferred pickup date** for either pickup or delivery.
8. Provide any **Special instructions** if you have any allergy notes or packaging requests.

## Field-by-Field Explanation
* **Buyer name** (`name`, `text`, required): Enter the name of the person to receive the order.
* **Contact email** (`email`, `email`, required): Enter the email address to receive order updates and receipts.
* **Jar flavor** (`select_one`, `required`, options: Chocolate, Vanilla, Caramel, Seasonal): Select the flavor of the cake jar you want to order.
* **Quantity of jars** (`number`, `required`): Enter the number of cake jars you want to order.
* **Pickup or delivery** (`select_one`, `required`, options: Pickup, Delivery): Choose whether to pickup or delivery your order.
* **Delivery address** (`text`, `required` if delivery selected): Enter the delivery address if you have selected delivery.
* **Preferred pickup date** (`date`, `required`): Enter the date for pickup or delivery.
* **Special instructions** (`text`, `optional`): Enter any allergy notes or packaging requests.
