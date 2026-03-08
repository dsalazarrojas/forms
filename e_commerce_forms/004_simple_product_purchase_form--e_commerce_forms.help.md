# simple_product_purchase_form - Help Guide

## Purpose
This form is used to collect user information for a simple product purchase transaction.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the **Product Name** field with the name of the product you wish to purchase.
2. Enter the **Price** of the product in the designated field.
3. Indicate the **Quantity** of the product you want to purchase.
4. Select the **Payment Method** you would like to use for the purchase.
5. Enter your **Email** address if you'd like to receive updates on your order.
6. Enter your **Phone** number for any follow-up contact.
7. Add any **Note** about your order if necessary.
8. Enter your **Shipping Address** where you'd like the product to be delivered.
9. Enter your **Zip** code for accurate shipping.
10. Click **Submit** to complete the order.

## Field-by-Field Explanation
* **Product Name** (`product_name`, text, required): Enter the name of the product you wish to purchase.
* **Price** (`price`, number, required): Enter the price of the product in the designated field.
* **Quantity** (`quantity`, number, required): Enter the quantity of the product you want to purchase.
* **Payment Method** (`payment_method`, select_one, required): Choose how you'd like to pay for the product (currently 'Yes' or 'No').
* **Email** (`email`, email, optional): Enter your email address if you'd like to receive updates on your order.
* **Phone** (`phone`, text, optional): Enter your phone number for follow-up contact.
* **Note** (`note`, note, optional): Add any notes about your order if necessary.
* **Shipping Address** (`shipping_address`, text, required): Enter your shipping address where you'd like the product to be delivered.
* **Zip** (`zip`, number, required): Enter your zip code for accurate shipping.
* **Submit** (`submit`, text, required): Click this button to complete and submit your order.
