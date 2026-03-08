# cookie_order_form - Help Guide

## Purpose
The cookie order form is designed to collect information for a cookie order from a customer.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the type of cookie you want to order.
2.  Enter your name in the required field.
3.  Enter your email in the required field.
4.  Enter your phone number in the required field.
5.  Enter your address in the required field.
6.  Enter your shipping address in the required field.
7.  Select the payment method you prefer.
8.  Enter the payment amount.
9.  Optionally, you can enter additional comments or instructions in the order note field.
10. Review and confirm your information for accuracy.

## Field-by-Field Explanation

*   **cookie_type** (`cookie_type`, select_one, required): Select the type of cookie you want to order.
*   **name** (`name`, text, required): Enter your name.
*   **email** (`email`, email, required): Enter your email address.
*   **phone** (`phone`, text, required): Enter your phone number.
*   **address** (`address`, text, required): Enter your address.
*   **shipping_address** (`shipping_address`, text, required): Enter your shipping address.
*   **payment_method** (`payment_method`, select_multiple, required): Select the payment method you prefer.
*   **payment_amount** (`payment_amount`, number, required): Enter the payment amount.
*   **order_note** (`order_note`, note, optional): Enter additional comments or instructions.
*   **confirm_email** (`confirm_email`, email, required): Confirm your email address.
*   **confirm_phone** (`confirm_phone`, text, required): Confirm your phone number.
*   **confirm_address** (`confirm_address`, text, required): Confirm your address.
*   **confirm_shipping_address** (`confirm_shipping_address`, text, required): Confirm your shipping address.
*   **confirm_payment_method** (`confirm_payment_method`, select_multiple, required): Confirm your payment method.
*   **confirm_payment_amount** (`confirm_payment_amount`, number, required): Confirm the payment amount.
*   **confirm_order_note** (`confirm_order_note`, note, optional): Confirm any additional comments or instructions.
