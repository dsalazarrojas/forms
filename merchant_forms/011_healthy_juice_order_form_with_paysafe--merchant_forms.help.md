# Healthy Juice Order Form with Paysafe - Help Guide
## Purpose
The Healthy Juice Order Form with Paysafe is designed for merchants to create orders for healthy juices with the option to pay using Paysafe or other payment methods.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your order information in the "Juice Order" field.
2. Select your preferred payment method from the "Payment Method" field.
3. Confirm your payment information by checking the "Confirm Payment" field.
4. Enter your payment status in the "Payment Status" field.
5. Optionally, add any additional notes in the "Notes" field.

## Field-by-Field Explanation

* **Order Form** (`order_form`, text, required): Enter your healthy juice order details in this field.
* **Payment Info** (`payment_info`, select_multiple, required): Select the payment methods you'd like to use (Visa, Mastercard, Amex).
* **Name** (`name`, text, required): Enter your name as you'd like to be known by.
* **Email** (`email`, email, required): Enter your email address.
* **Phone** (`phone`, text, required): Enter your phone number.
* **Order Info** (`order_info`, note, optional): Add any additional comments or instructions about your order.
* **Juice Order** (`juice_order`, text, required): Enter the details of your healthy juice order.
* **Total Order** (`total_order`, number, required): Enter the total cost of your order.
* **Payment Method** (`payment_method`, select_one, required): Choose how you'd like to pay for your order (Paysafe, Credit/Debit, Apple Pay).
* **Notes** (`notes`, text, optional): Add any additional notes or comments about your order.
* **Confirm Payment** (`confirm_payment`, select_one, required): Confirm that the payment information is accurate.
* **Payment Status** (`payment_status`, select_one, required): Select the status of your payment (Paid, Unpaid).
* **Payment Method ID** (`payment_method_id`, text, optional): Enter the ID for your selected payment method.
* **Confirm Payment (yes/no)** (`confirm_payment`, select_one, required): Confirm that you've reviewed and agree with the payment details.
* **Payment Status (paid/unpaid)** (`payment_status`, select_one, required): Select the status of your payment (Paid, Unpaid).
