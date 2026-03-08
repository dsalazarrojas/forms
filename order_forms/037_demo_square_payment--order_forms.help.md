<thinking>
This form is part of a larger system that automates payment processing with Square, a financial services company that provides a robust payment platform. This guide will walk you through completing the Demo Square Payment form, which captures essential customer and order information for payment processing.

The form is designed to be used in a variety of scenarios, such as when a customer places an order online, in-store, or via phone. It is used by customer-facing staff, such as sales associates, customer support, or cashiers, to efficiently process payments and update order status.

This form is likely to be part of a larger order management system, and its purpose is to provide a structured and accurate way to capture customer data and order details.

The form is not intended to be used for duplicate data entry, as most fields are marked as optional or have validation mechanisms to prevent duplicate entries.

</thinking>

# Demo Square Payment - Help Guide
## Purpose
The Demo Square Payment form is used for processing customer payments, capturing order details, and updating order status. Its primary function is to streamline payment processing and ensure accurate record-keeping for orders.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter the customer's name, which is a required field for identifying the customer.
2. Enter the number of items in the order.
3. Select the order date or date of the payment.
4. Enter the customer's email address, which is useful for communication and order follow-up.
5. Choose the order status, which is used to track the order's current state.
6. Enter the order ID, which is a unique identifier for the order.
7. Enter the shipping address, which is a required field for delivering the order.
8. Enter the customer's phone number, which is optional for contact and follow-up.
9. Enter any relevant order notes, which are used for customer communication.
10. Enter shipping notes, which are also optional and used for internal purposes.
11. Select the payment method, which is a critical field for processing the payment.
12. Enter the customer's address, which is optional but useful for shipping and communication.
13. Enter the time of order creation, which is used for auditing and tracking.
14. Enter the time of order update, which is also used for auditing and tracking.

## Field-by-Field Explanation

* **Customer Name** (`customer_name`, `text`, required): Enter the customer's name in this field.
* **Item Count** (`item_count`, `number`, optional): Enter the number of items in the order.
* **Order Date** (`order_date`, `date`, optional): Select the date of the order or payment.
* **Customer Email** (`customer_email`, `email`, optional): Enter the customer's email address for communication and order follow-up.
* **Order Status** (`order_status`, `select_multiple`, optional): Choose the current status of the order (e.g., Pending, Shipped, Cancelled).
* **Order ID** (`order_id`, `number`, optional): Enter the unique identifier for the order.
* **Shipping Address** (`shipping_address`, `note`, optional): Enter the shipping address for delivering the order.
* **Customer Phone** (`customer_phone`, `text`, optional): Enter the customer's phone number for contact and follow-up.
* **Order Note** (`order_note`, `note`, optional): Enter any relevant notes for the customer.
* **Shipping Note** (`shipping_note`, `note`, optional): Enter shipping notes for internal use.
* **Payment Method** (`payment_method`, `select_one`, optional): Select the payment method (e.g., Credit Card, Bank Transfer, PayPal).
* **Customer Address** (`customer_address`, `text`, optional): Enter the customer's address for shipping and communication.
* **Order Created Time** (`order_created_at`, `time`, optional): Enter the time of order creation for auditing and tracking.
* **Order Updated Time** (`order_updated_at`, `time`, optional): Enter the time of order update for auditing and tracking.
