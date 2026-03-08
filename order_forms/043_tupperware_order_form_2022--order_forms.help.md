# Tupperware Order Form 2022 - Help Guide
## Purpose
The "Tupperware Order Form 2022" is used to collect customer information and order details for Tupperware products. This form is essential for ensuring accurate and efficient processing of orders, and it's only meant to be filled out once for each order.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields with the customer's details and order information.
2. Select the payment method and amount.
3. Review your entries to ensure accuracy before submitting the form.

## Field-by-Field Explanation

* **Name** (`customer_name`, `text`, required): Enter the customer's name as it appears on their identification or government-issued ID.
* **Email** (`customer_email`, `email`, required): Enter the customer's email address.
* **Phone** (`customer_phone`, `text`, required): Enter the customer's phone number.
* **Order Date** (`order_date`, `date`, required): Enter the date when the order is to be placed.
* **Order Time** (`order_time`, `time`, required): Enter the time when the order is to be placed.
* **Order Products** (`order_products`, `select_multiple`, required): Select all applicable Tupperware products being ordered.
* **Payment Method** (`payment_method`, `select_one`, required): Select one of the available payment methods.
* **Payment Amount** (`payment_amount`, `number`, required): Enter the total payment amount for the order.
