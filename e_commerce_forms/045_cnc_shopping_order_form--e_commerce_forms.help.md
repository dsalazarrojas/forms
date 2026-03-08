# CnC Shopping Order Form - Help Guide

## Purpose

This form is designed to be a shopping order form for customers to provide their information and preferences for a specific order. This includes their name, email, phone number, order date, billing address, city, state, zip code, and product information such as category, description, quantity, unit price, and order total. It also includes the option to choose between shipping and payment methods.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in your customer information: enter your full name, email address, and phone number.
2. Enter your order date.
3. Provide your billing address, city, state, and zip code.
4. Choose your preferred shipping method and payment method.
5. Select the category and quantity of the product you are ordering.
6. Enter the product description and unit price.
7. Enter the final order total.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required): Enter your full name as it appears on your ID or government documents.
* **Email Address** (`customer_email`, `email`, required): Enter your email address where you can be contacted for order updates.
* **Phone Number** (`customer_phone`, `text`, required): Enter your phone number for order notifications or to contact you.
* **Order Date** (`order_date`, `date`, required): Enter the date you would like to receive your order.
* **Billing Address** (`billing_address`, `text`, required): Enter your full address where you would like to receive your order, including street address and apartment or suite number.
* **City** (`billing_city`, `text`, required): Enter the city where your billing address is located.
* **State or Province** (`billing_state`, `text`, required): Enter the state or province where your billing address is located.
* **ZIP or Postal Code** (`billing_zip`, `text`, required): Enter the ZIP or postal code of your billing address.
* **Shipping Address Same as Billing** (`shipping_same`, `select_one`, required): Check if your shipping address is the same as your billing address.
* **Shipping Address** (`shipping_address`, `text`, optional): If your shipping address is different from your billing address, enter the full address here.
* **Product Category** (`item_category`, `select_one`, required): Choose the type of item you are ordering, such as Electronics, Clothing, etc.
* **Product Description** (`product_description`, `text`, required): Describe the product you are ordering.
* **Quantity** (`quantity`, `number`, required): Enter the number of units you would like to order.
* **Unit Price** (`unit_price`, `number`, required): Enter the price per unit of the product.
* **Order Total** (`order_total`, `number`, required): The final amount due for your order.
* **Pickup or Delivery Method** (`pickup_method`, `select_one`, required): Choose how you would like to receive your order, such as Click and Collect, Home Delivery, etc.
* **Payment Method** (`payment_method`, `select_one`, required): Choose how you would like to pay for your order, such as Credit Card, Debit Card, etc.

## Tips

* Make sure to double-check your information for accuracy before submitting your order.
* If you are unsure about any of the fields, refer to the hints provided for each field.
* If you have any questions or concerns, contact our customer service team.
