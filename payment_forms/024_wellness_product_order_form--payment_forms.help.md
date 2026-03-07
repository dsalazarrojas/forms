<thinking>
We will create a user-facing help guide for the "wellness_product_order_form" form. This form is designed to collect information from customers for a wellness product order. It appears to be a straightforward order form with fields for product selection, customer details, payment information, and order status.
We will follow the provided YAML fields to create a concrete and concise guide.
</thinking>

# Wellness Product Order Form - Help Guide
## Purpose
The wellness_product_order_form is a form used to collect information for a wellness product order. It helps us understand your needs and preferences to provide you with the best possible services.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the product you would like to order from the list of options.
2. Enter your name and any additional information in the space provided.
3. Provide your email address so we can contact you with order updates.
4. Enter your phone number for further communication.
5. Add any additional order notes if necessary.
6. Choose your preferred payment method.
7. Enter the total cost of the order.
8. Select the status of your payment.
9. Choose the date and time of the payment.
10. Enter any payment method details if required.
11. Provide your billing address for billing purposes.
12. Enter your shipping address for order delivery purposes.
13. Finally, select the order status you would like to be reflected in your account.

## Field-by-Field Explanation

* **Product** (`product`, `select_one`, required: false): Select the wellness product you would like to order from the provided options.
* **Name** (`name`, `text`, required: false): Enter your name to help us better understand your needs.
* **Email** (`email`, `email`, required: false): Provide your email address so we can contact you with order updates.
* **Phone** (`phone`, `text`, required: false): Enter your phone number for further communication.
* **Order Notes** (`order_notes`, `note`, required: false): Add any additional information about your order if necessary.
* **Payment Method** (`payment_method`, `select_one`, required: false): Choose your preferred payment method from the list of options.
* **Total Cost** (`total_cost`, `number`, required: false): Enter the total cost of the order.
* **Payment Status** (`payment_status`, `select_one`, required: false): Select the status of your payment.
* **Payment Date** (`payment_date`, `date`, required: false): Choose the date of the payment.
* **Payment Time** (`payment_time`, `time`, required: false): Select the time of the payment.
* **Payment Method Details** (`payment_method_details`, `text`, required: false): Enter any additional details about your payment method if required.
* **Billing Address** (`billing_address`, `text`, required: false): Provide your billing address for billing purposes.
* **Shipping Address** (`shipping_address`, `text`, required: false): Enter your shipping address for order delivery purposes.
* **Order Status** (`order_status`, `select_one`, required: false): Select the status of your order that you would like to be reflected in your account.
