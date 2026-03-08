# group_booking_deposit_payment_form - Help Guide
## Purpose
The group_booking_deposit_payment_form is a payment form used for group booking deposits. 

## How To Complete This Form
To complete this form, please follow these steps:

1. Enter your name and details in the "group_booking_deposit_payment_form" field.
2. Enter the deposit amount you would like to pay in the "deposit_amount" field.
3. Select your preferred payment method from the "payment_method" field. You can choose from the available options, which are Stripe, PayPal, and Authorizenet.
4. Enter your email address in the "email" field. This will be used for communication and payment confirmation.
5. Enter your phone number in the "phone" field.
6. If you have any additional comments or notes, you can enter them in the "note" field.

## Field-by-Field Explanation
* **group_booking_deposit_payment_form** (`user_input`, text, required): Enter your name and details for the group booking deposit payment.
* **deposit_amount** (`deposit_amount`, number, required): Enter the deposit amount you would like to pay.
* **payment_method** (`payment_method`, text, optional): Select your preferred payment method. If left blank, the default method will be used.
* **payment_method_options** (`payment_method_options`, select_one, required): Select the payment method you would like to use. The available options are Stripe, PayPal, and Authorizenet.
* **email** (`email`, email, required): Enter your email address for payment confirmation and communication.
* **phone** (`phone`, text, required): Enter your phone number for contact and payment confirmation.
* **note** (`note`, note, optional): Enter any additional comments or notes about the payment.
