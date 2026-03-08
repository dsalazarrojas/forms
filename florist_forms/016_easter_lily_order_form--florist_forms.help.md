# easter_lily_order_form - Help Guide
## Purpose
The Easter lily order form is used to collect information from customers for Easter lily orders. This form is designed to gather essential details such as delivery date, order details, quantity, customer information, and order notes.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the delivery date for the Easter lily order.
2. Provide the order details, such as the type of arrangement or bouquet.
3. Specify the quantity of Easter lilies required.
4. Enter the customer's name, email, phone number, and address.
5. Add any additional order notes if necessary.
6. Enter the name of the florist responsible for the order.
7. Enter the name of the store where the order will be fulfilled.

## Field-by-Field Explanation

* **Delivery Date (1)** (`delivery_date`, date, required: false): Enter the date when the customer would like to receive the Easter lily order. This is not a required field, but it helps the florist plan the delivery schedule.
* **Order Details (2)** (`order_details`, number, required: false): Describe the type of Easter lily arrangement or bouquet the customer would like to order. This can be a number that corresponds to a pre-defined order type, or a free-text description.
* **Quantity (3)** (`quantity`, number, required: false): Specify the number of Easter lilies the customer would like to order.
* **Customer Name (4)** (`customer_name`, text, required: false): Enter the customer's name for the order.
* **Customer Email (5)** (`customer_email`, email, required: false): Enter the customer's email address for communication purposes.
* **Customer Phone (6)** (`customer_phone`, text, required: false): Enter the customer's phone number for easy communication.
* **Customer Address (7)** (`customer_address`, text, required: false): Enter the customer's address for delivery purposes.
* **Order Notes (8)** (`order_notes`, note, required: false): Add any additional notes or instructions for the florist.
* **Florist Name (9)** (`florist_name`, text, required: false): Enter the name of the florist responsible for the order.
* **Store Name (10)** (`store_name`, text, required: false): Enter the name of the store where the order will be fulfilled.
