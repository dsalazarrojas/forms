# Ordering Form - Help Guide
## Purpose
This form is used to collect information from customers for ordering purposes.

## How To Complete This Form
To complete this form, follow these steps:

1.  Indicate if you are placing an order by selecting "Yes" or "No" in the "product" field.
2.  Provide your name in the "customer name" field.
3.  Enter your email address in the "customer email" field.
4.  Enter your phone number in the "customer phone" field.
5.  Select the method of payment for your order from the "customer payment method" field.
6.  Enter your order number in the "order number" field.
7.  Select the product you are interested in from the "product" field.
8.  Select the type of product from the "product type" field.
9.  Select any additional product details you wish to include.

## Field-by-Field Explanation

* **product** (`product`, `select_one`, required): Select "Yes" if you are placing an order, "No" otherwise.
* **customer name** (`customer_name`, `text`, required): Enter your name.
* **customer email** (`customer_email`, `email`, required): Enter your email address.
* **customer phone** (`customer_phone`, `text`, required): Enter your phone number.
* **customer payment method** (`customer_payment_method`, `select_multiple`, required): Select the method of payment for your order.
* **order number** (`customer_order_number`, `number`, required): Enter the order number.
* **product** (`customer_product`, `select_one`, required): Select the product you are interested in.
* **product type** (`customer_product_type`, `select_one`, required): Select the type of product.
* **product details** (`customer_product_details`, `select_multiple`, required): Select any additional product details you wish to include.
