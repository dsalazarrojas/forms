# Clothing Order Form Template WorldPay UK - Help Guide
## Purpose
This form is used to collect information from customers for an online clothing order. It is designed to ensure that your order is processed accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1.  Enter your full name as you would like it to appear on your order and delivery documents.
2.  Enter your email address where you would like to receive order confirmation and updates.
3.  Enter your phone number where we can contact you for further information.
4.  Enter your delivery address for shipping purposes.
5.  Select the city where you would like your order delivered.
6.  Enter your postcode for delivery purposes.
7.  Choose the clothing items you would like to purchase by selecting one or multiple options.
8.  Select the size of the shirt you would like to purchase.
9.  Select your preferred color for the shirt.
10. Enter the quantity of shirts you would like to purchase.
11. If you have any other clothing items in your order, select their size.
12. If you have any other clothing items in your order, select their quantity.
13. Enter the total order value by selecting the subtotal.
14. Choose how you would like your order delivered.
15. Accept the terms and conditions.
15. If you have any special requests or instructions for your order, enter them here.

## Field-by-Field Explanation
* **Customer Full Name** (`customer_name`, `text`, required): Enter your full name as you would like it to appear on your order and delivery documents.
* **Email Address** (`customer_email`, `email`, required): Enter your email address where you would like to receive order confirmation and updates.
* **Phone Number** (`customer_phone`, `text`, required): Enter your phone number where we can contact you for further information.
* **Delivery Address** (`delivery_address`, `text`, required): Enter your delivery address for shipping purposes.
* **City** (`city`, `text`, required): Select the city where you would like your order delivered.
* **Postcode** (`postcode`, `text`, required): Enter your postcode for delivery purposes.
* **Select Items** (`item_selection`, `select_multiple`, required): Choose the clothing items you would like to purchase by selecting one or multiple options.
* **Shirt Size** (`shirt_size`, `select_one`, optional): Select the size of the shirt you would like to purchase.
* **Shirt Color Preference** (`shirt_color`, `select_one`, optional): Select your preferred color for the shirt.
* **Quantity of Shirts** (`quantity_shirts`, `number`, optional): Enter the quantity of shirts you would like to purchase.
* **Pants Size** (`pants_size`, `text`, optional): If you have any other clothing items in your order, select their size.
* **Quantity of Pants** (`quantity_pants`, `number`, optional): If you have any other clothing items in your order, select their quantity.
* **Order Subtotal** (`subtotal`, `number`, required): Enter the total order value by selecting the subtotal.
* **Delivery Method** (`delivery_method`, `select_one`, required): Choose how you would like your order delivered.
* **Accept Terms and Conditions** (`payment_confirmation`, `select_one`, required): Accept the terms and conditions.
* **Special Requests or Instructions** (`special_requests`, `text`, optional): If you have any special delivery or product requests, enter them here.
