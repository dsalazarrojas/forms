<thinking>

This form is intended for customers to provide information to custom cabinet door orders. It collects customer details, delivery information, and payment details to facilitate the order process.

The form is designed to be filled out by customers who are interested in ordering custom cabinet doors. It does not have any internal logic for duplicate checks, so it's possible for customers to fill out the form multiple times. However, it's assumed that customers will only fill out the form once.

</thinking>

# Custom Cabinet Door Order Form - Help Guide
## Purpose

This form is used to provide your custom cabinet door order information.

## How To Complete This Form

To complete the form, follow these steps:

1. Fill in the Customer Information section with your name, email, and phone number.
2. Choose the Style and Sizing options that fit your needs.
3. Enter the delivery information in the Delivery Information section.
4. Select the payment method and confirm your order in the Confirm Order section.

## Field-by-Field Explanation

* **Customer Information** (`customer_info`, text, required): Enter your name, email, and phone number in this section.
* **Style and Sizing** (`style_and_sizing`, text, required): Choose the style and size that fits your needs.
* **Delivery Information** (`delivery_info`, text, required): Enter the delivery information, such as date and time.
* **Payment Information** (`payment_info`, text, required): Select the payment method you prefer.
* **Notes** (`notes`, note, optional): Enter any additional notes about your order.
* **Confirm Order** (`confirm_order`, select_one, required): Confirm your order by selecting "Confirm".
* **Email** (`email`, email, optional): Enter your email address.
* **Phone** (`phone`, text, optional): Enter your phone number.
* **Delivery Method** (`delivery_method`, select_one, required): Choose how you want to receive your order, either by Pickup, Delivery, or Shipping.
* **Payment Method** (`payment_method`, select_one, required): Select the payment method you prefer, either Online Payment or Offline Payment.
* **Delivery Date** (`delivery_date`, date, optional): Enter the date you want to receive your order.
* **Delivery Time** (`delivery_time`, time, optional): Enter the time you want to receive your order.
* **Style** (`style`, select_multiple, optional): Choose multiple styles for your order.
* **Sizing** (`sizing`, select_multiple, optional): Choose multiple sizes for your order.
