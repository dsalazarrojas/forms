<thinking>
This form is designed to gather information for a cookie order from a customer. The form is used to collect customer details, payment method, and order notes for the cookie order. The form is likely used in a business-to-consumer (B2C) or business-to-business (B2B) context, where a customer is placing an order for cookies. The form is intended to be completed by the customer, and the information collected will be used for order fulfillment and communication with the customer.

The form is composed of several sections, including customer information, payment details, and order notes. The customer information section includes fields for customer name, email, phone number, and shipping address. The payment section includes fields for payment method (bank transfer, credit card, or cash) and payment amount. The order notes section is optional and allows customers to provide additional comments or instructions.

This form is likely to be used in an e-commerce or retail setting, where customers can place orders for cookies online or in-person. The form is designed to be user-friendly and easy to understand, with clear labels and hints to guide the customer through the completion process.

The form's fields are:

*   cookie_type: a select_one type field that allows customers to choose from different types of cookies.
*   name: a text field that collects the customer's name.
*   email: an email field that collects the customer's email address.
*   phone: a text field that collects the customer's phone number.
*   address: a text field that collects the customer's address.
*   shipping_address: a text field that collects the customer's shipping address.
*   payment_method: a select_multiple type field that allows customers to choose from different payment methods.
*   payment_amount: a number field that collects the payment amount.
*   order_note: an optional note field that allows customers to provide additional comments or instructions.
*   confirm_email, confirm_phone, confirm_address, confirm_shipping_address, confirm_payment_method, confirm_payment_amount, confirm_order_note: these are confirmation fields that mirror the main fields and are not required, likely used for verification purposes.

The fields with hints will be filled automatically when the user clicks on the hint text.
</thinking>

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
