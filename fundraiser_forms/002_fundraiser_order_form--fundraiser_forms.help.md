<thinking>
To create a user-facing help guide for this form, we need to understand the form's purpose and how it should be completed. 

The form appears to be a fundraiser order form, likely used to collect information from customers who want to make a donation or purchase a product. The form has several fields for personal information (first name, last name, email, phone), product selection (product, quantity, price), payment information (payment method, square or paypal), and additional details (date, time, note, donation amount).

We can assume that the form is meant to be completed by individuals or organizations who want to support a cause or make a purchase. The form's design suggests that it is a flexible form that can accommodate different types of donations or purchases.

We will now create a help guide that explains the purpose and completion of the form.

</thinking>

# Fundraiser Order Form - Help Guide

## Purpose

The Fundraiser Order Form is designed to collect information from individuals or organizations who want to make a donation or purchase a product. Please fill out this form to place your order and support our cause.

## How To Complete This Form

1. **First Name**: Enter your first name as it appears on your identification.
2. **Last Name**: Enter your last name as it appears on your identification.
3. **Email**: Enter your valid email address to ensure we can contact you about your order.
4. **Phone**: Enter your phone number to allow us to contact you if needed.
5. **Product**: Select the product you want to purchase or donate to. Options include T-Shirt, Hat, and Mug.
6. **Quantity**: Enter the number of products you want to purchase or the amount you want to donate.
7. **Price**: Enter the price of the product you selected.
8. **Total**: Enter the total price of your order.
9. **Payment**: Choose how you want to pay for your order. Options include Card or Bank Transfer.
10. **Donation**: Enter the amount you want to donate.
11. **Date**: Enter the date you want to purchase or donate.
12. **Time**: Enter the time you want to make your payment.
13. **Note**: Add any additional notes or comments about your order.
14. **Square/PayPal**: Select your preferred payment method.
15. **Payment Terms**: Choose whether you want to make a one-time payment or a recurring payment.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required: false): Enter your first name.
* **Last Name** (`last_name`, `text`, required: false): Enter your last name.
* **Email** (`email`, `email`, required: false): Enter a valid email address.
* **Phone** (`phone`, `text`, required: false): Enter your phone number.
* **Product** (`product`, `select_one`, required: false): Select the product you want to purchase or donate to.
* **Quantity** (`quantity`, `number`, required: false): Enter the number of products you want to purchase or the amount you want to donate.
* **Price** (`price`, `number`, required: false): Enter the price of the product you selected.
* **Total** (`total`, `text`, required: false): Enter the total price of your order.
* **Payment** (`payment`, `select_one`, required: false): Choose how you want to pay for your order.
* **Donation** (`donation`, `number`, required: false): Enter the amount you want to donate.
* **Date** (`date`, `date`, required: false): Enter the date you want to purchase or donate.
* **Time** (`time`, `time`, required: false): Enter the time you want to make your payment.
* **Note** (`note`, `note`, required: false): Add any additional notes or comments about your order.
* **Square** (`square`, `select_multiple`, required: false): Select your preferred payment method.
* **Payment Terms** (`payment_terms`, `select_multiple`, required: false): Choose whether you want to make a one-time payment or a recurring payment.
