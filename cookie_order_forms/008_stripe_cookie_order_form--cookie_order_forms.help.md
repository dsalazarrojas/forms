# stripe_cookie_order_form - Help Guide
## Purpose
This form is used to process cookie orders through Stripe, capturing customer information, order details, and payment methods.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer information fields, including name, phone number, and email.
2. Select the relevant options for cookie order and cookie type.
3. Choose a payment method (Stripe or credit card).
4. Enter the order details, including order total and order status.
5. Fill in any additional fields, such as customer address and customer ID.
6. Click the "submit" button to finalize the order.

## Field-by-Field Explanation
* **customer_info** (text): Enter the customer's name and other relevant information.
* **cookie_order** (text): Enter the details of the cookie order.
* **payment_method** (select_one, options: credit card, Stripe): Choose a payment method for the order.
* **payment_details** (text): Enter the payment details, such as the amount due.
* **order_totals** (text): Enter the total cost of the order.
* **customer_address** (text): Enter the customer's address.
* **customer_phone** (text): Enter the customer's phone number.
* **submit** (note): This is not a field to fill in, but rather a button to click to finalize the order.
* **stripe_publishable_public_key** (text): Enter the Stripe publishable public key.
* **stripe_secret_key** (text): Enter the Stripe secret key.
* **stripe_public_key** (text): Enter the Stripe public key.
* **stripe_webhook_secret_key** (text): Enter the Stripe webhook secret key.
* **stripe_webhook_public_key** (text): Enter the Stripe webhook public key.
* **cookie_id** (select_multiple, options: Yes, No): Choose whether the cookie is available for order.
* **cookies** (select_multiple, options: Yes, No): Choose whether the customer is ordering cookies.
* **order_id** (text): Enter the order ID.
* **order_status** (select_one, options: processing, fulfilled, cancelled): Choose the status of the order.
* **payment_method_id** (text): Enter the payment method ID.
* **payment_method_label** (text): Enter the payment method label.
* **payment_method_description** (text): Enter the payment method description.
* **cookie_type** (select_one, options: Yes, No): Choose the type of cookie.
* **cookie_name** (text): Enter the name of the cookie.
* **cookie_price** (text): Enter the price of the cookie.
* **cookie_description** (text): Enter a description of the cookie.
* **customer_email** (email): Enter the customer's email address.
* **customer_name** (text): Enter the customer's name.
* **customer_phone** (text): Enter the customer's phone number.
* **order_note** (text): Enter any notes about the order.
* **order_total** (text): Enter the total cost of the order.
* **order_submitted** (select_one, options: completed, pending, cancelled): Choose the status of the order submission.
* **payment_status** (select_one, options: paid, pending, cancelled): Choose the status of the payment.
* **order_status_label** (text): Enter the status label of the order.
* **customer_id** (text): Enter the customer ID.
* **order_date** (date): Enter the date of the order.
