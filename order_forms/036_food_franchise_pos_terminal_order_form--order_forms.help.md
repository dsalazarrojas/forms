# Food Franchise POS Terminal Order Form - Help Guide
## Purpose
This form is used to process orders for the Food Franchise POS Terminal, capturing essential details to ensure accurate and efficient order processing.

## How To Complete This Form
1. Fill in the terminal ID, which is a unique identifier for the terminal.
2. Enter the store ID, which identifies the location where the order is being processed.
3. Select the order type from the options provided: Online Order, Phone Order, or In-Store Order.
4. Enter the date of the order in the required date format.
5. Enter the time of the order in the required time format.
6. Enter the order number, which is a unique identifier for the order.
7. Enter the customer's name for the order.
8. Enter the customer's phone number for the order.

## Field-by-Field Explanation
* **terminal_id** (Terminal ID, required): Enter the unique identifier for the terminal that processed the order.
* **store_id** (Store ID, required): Identify the location where the order is being processed.
* **order_type** (Order Type, select_one): Select the type of order: Online Order, Phone Order, or In-Store Order.
* **date** (Date, required): Enter the date of the order in the required date format.
* **time** (Time, required): Enter the time of the order in the required time format.
* **order_number** (Order Number, required): Enter the unique identifier for the order.
* **customer_name** (Customer Name, required): Enter the name of the customer.
* **phone_number** (Phone Number, required): Enter the phone number of the customer.
* **online_order_type** (not applicable as it's part of `order_type` field)
* **phone_order_type** (not applicable as it's part of `order_type` field)
* **in_store_order_type** (not applicable as it's part of `order_type` field)
