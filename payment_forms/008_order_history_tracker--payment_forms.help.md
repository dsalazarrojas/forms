<thinking>

This form is used to track order history for customers, allowing users to record whether a customer has placed an order, view order details, status, and total, as well as record payment information and payment method. This form is not a payment processing form, but rather a form for storing customer order data. The form does not store payment details, only records of whether payment has been processed. It is intended to be used in a scenario where a customer's order history is relevant, such as when a customer service representative needs to look up a customer's order history.

</thinking>

# Order History Tracker - Help Guide
## Purpose
The Order History Tracker form is used to record and store customer order history, including details such as order status, total, and payment information.

## How To Complete This Form
To complete this form, please follow these steps:

1. Select all relevant customer orders from the "Customer Orders" dropdown.
2. Enter any additional order details, status, and total information in the "Order Details", "Order Status", and "Order Total" fields.
3. Record payment information in the "Payment Info" field.
4. Select the payment method used for the order from the "Payment Method" dropdown.
5. Enter the date of purchase for the order.

## Field-by-Field Explanation

* **Customer Orders** (`customer_orders`, select multiple, required): Select all relevant customer orders using this field.
* **Order Details** (`order_details`, text, optional): Enter any additional information regarding the order.
* **Order Status** (`order_status`, text, optional): Enter the current status of the order.
* **Order Total** (`order_total`, number, optional): Enter the total cost of the order.
* **Payment Info** (`payment_info`, text, optional): Record any payment information related to the order.
* **Payment Method** (`payment_method`, select one, optional): Select the method of payment used for the order.
* **Date of Purchase** (`date_of_purchase`, date, optional): Enter the date the order was purchased.

## Tips
* Make sure to select all relevant customer orders to ensure accurate tracking.
* Use the "Payment Method" dropdown to accurately record the payment method used.
* Enter the date of purchase for accurate tracking of order history.
