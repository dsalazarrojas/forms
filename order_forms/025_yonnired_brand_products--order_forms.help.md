<thinking>...</thinking>

This form "yonnired_brand_products" is designed for customers to provide information about their orders. The purpose of this form is to collect customer details, shipping information, order notes, and payment status. The form is likely used for internal processing and management of customer orders.

# yonnired_brand_products - Help Guide
## Purpose
This form is used for customers to provide information about their orders, including customer details, shipping information, and order status.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the customer information section (page 1) with your details.
2. Enter your shipping information on page 2.
3. Provide the total price of your order.
4. Add any additional order notes (if necessary).
5. Enter your CashApp ID and token on page 5.
6. Select the status of your payment (page 6).
7. Choose the status of your order (page 7).
8. Select the payment method used for your order (page 7).

## Field-by-Field Explanation
* **Customer Info** (`Customer Info`, text, optional): Enter your name, email, and any other relevant customer information.
* **Shipping Info** (`shipping_info`, text, optional): Enter your shipping address and any other shipping details.
* **Total Price** (`total_price`, number, optional): Enter the total price of your order.
* **Order Notes** (`order_notes`, note, optional): Add any additional notes about your order.
* **CashApp ID** (`cash_app_id`, number, optional): Enter your CashApp ID.
* **CashApp Token** (`cash_app_token`, select_one, optional): Select your CashApp token from the provided options.
* **Payment Status** (`payment_status`, select_one, optional): Select the status of your payment (e.g. Paid, Unpaid).
* **Order Status** (`order_status`, select_multiple, optional): Select the status of your order (e.g. Awaiting Payment, Completed, Canceled).
* **Payment Method** (`payment_method`, select_one, optional): Select the method used for your payment (e.g. CashApp, Other).
