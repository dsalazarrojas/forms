<thinking>
This form is designed to capture data for single-product orders with a single choice for payment status. The purpose of this form is to provide a simple and straightforward way to collect relevant information for a single product order. This form is intended to be used in scenarios where only one product is being ordered and the payment status is a single choice among "Unpaid", "Paid", or "Void". This form does not require any complex calculations or conditional logic, making it suitable for straightforward order entry tasks.

Before filling out this form, please ensure that you are using the correct context and that the information you are entering is accurate and valid. 

This form is part of the "product_order_forms" category and is specifically designed for "single_product_w_single_choice_orders" scenarios.

</thinking>

# single_product_w_single_choice_orders - Help Guide
## Purpose
This form is for capturing data for single-product orders with a single choice for payment status.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the "Single Product" field with the relevant product details.
2. Enter the quantity of the product being ordered.
3. Enter the unit price of the product.
4. Select the single choice "Single Choice" for the payment status.
5. Optionally, enter the order date, order time, product name, order number, customer name, customer phone, customer email, and customer notes.
6. Optionally, enter the order total.
7. Select the "Payment Status" with the payment status of the order.

## Field-by-Field Explanation

* **Single Product** (`single_product`, text, required): Enter the name of the product being ordered.
* **Quantity** (`quantity`, text, optional): Enter the quantity of the product being ordered.
* **Unit Price** (`unit_price`, text, optional): Enter the unit price of the product.
* **Single Choice** (`single_choice`, select_one, optional): Select one option from the list "A", "B", "C" for the payment status.
* **Order Date** (`order_date`, date, optional): Enter the date of the order (if applicable).
* **Order Time** (`order_time`, time, optional): Enter the time of the order (if applicable).
* **Product Name** (`product_name`, text, optional): Enter the name of the product (if applicable).
* **Order Number** (`order_number`, number, optional): Enter the order number (if applicable).
* **Customer Name** (`customer_name`, text, optional): Enter the customer's name (if applicable).
* **Customer Phone** (`customer_phone`, text, optional): Enter the customer's phone number (if applicable).
* **Customer Email** (`customer_email`, email, optional): Enter the customer's email address (if applicable).
* **Customer Notes** (`customer_notes`, note, optional): Enter any additional notes about the customer (if applicable).
* **Order Total** (`order_total`, number, optional): Enter the total amount of the order (if applicable).
* **Payment Status** (`payment_status`, select_multiple, optional): Select one option from the list "Unpaid", "Paid", "Void" for the payment status.

Note: Fields marked as optional are not required, but may be useful for providing more comprehensive information about the order.
