# tobacco_order_form - Help Guide
## Purpose
The tobacco_order_form is used to collect order details for tobacco products.
## How To Complete This Form

To complete the tobacco_order_form, follow these steps:

1. Fill in the **Order Details** field with any relevant information about the order.
2. Choose your **Product Selection** from the options provided.
3. Select your preferred **Payment Method** from the options provided.
4. Enter your **Shipping Address** if applicable.
5. Provide the name of the **Contact Person** handling the order.
6. Add any additional **Order Notes** if necessary.
7. Enter the **Total Amount** of the order.
8. Choose the current **Order Status** from the options provided.
9. Select the current **Payment Status** from the options provided.

## Field-by-Field Explanation

* **Order Details** (`order_details`, text, required: false): Enter any relevant details about the order.
* **Product Selection** (`product_selection`, select_multiple, required: false): Choose the product(s) being ordered. Options: 'Yes', 'No'.
* **Payment Method** (`payment_method`, select_one, required: false): Choose the payment method. Options: 'card', 'echeck', 'paypal'.
* **Shipping Address** (`shipping_address`, text, required: false): Enter the shipping address if applicable.
* **Contact Person** (`contact_person`, text, required: false): Provide the name of the contact person handling the order.
* **Order Notes** (`order_notes`, text, required: false): Add any additional notes about the order.
* **Total Amount** (`total_amount`, number, required: false): Enter the total amount of the order.
* **Order Status** (`order_status`, select_one, required: false): Choose the current status of the order. Options: 'New', 'Pending', 'Confirmed'.
* **Payment Status** (`payment_status`, select_one, required: false): Choose the current status of the payment. Options: 'Paid', 'Not Paid', 'Partially Paid'.
