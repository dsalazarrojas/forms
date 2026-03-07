<thinking>
This form is designed to collect information for lab supply orders from customers. The purpose of this form is to streamline the ordering process, making it easier for customers to place orders and for lab staff to manage and track those orders. This form should only be used for ordering lab supplies, and not for other purposes. Please ensure that the customer's order number from the invoice is entered in the correct field to avoid any discrepancies.
</thinking>

# Lab Supply Order Form - Help Guide
## Purpose
The Lab Supply Order Form is used to collect information from customers for lab supply orders.

## How To Complete This Form
1. Fill in the customer's name and email address in the respective fields.
2. Enter the order number from the invoice in the "order_number" field.
3. Enter the total number of items being ordered in the "total_items" field.
4. Select the items to be ordered from the list in the "item_list" field.
5. Enter the quantity of each item being ordered in the "item_quantity" field.
6. Enter the unit price of each item in the "item_unit_price" field.
7. Calculate the total order value by multiplying the quantity and unit price for each item.
8. Select the payment method and enter any additional payment details in the "payment_method" and "payment_details" fields.
9. Enter the order status in the "order_status" field.
10. Enter any additional customer message in the "customer_message" field.

## Field-by-Field Explanation
* **customer_name** (`text`, `customer_name`, required/optional): Enter the customer's name.
* **email** (`email`, `email`, required/optional): Enter the customer's email address.
* **order_number** (`number`, `order_number`, required/optional): Enter the order number from the invoice.
* **total_items** (`number`, `total_items`, required/optional): Enter the total number of items being ordered.
* **item_list** (`select_multiple`, `item_list`, required/optional): Select the items to be ordered from the list.
* **item_quantity** (`number`, `item_quantity`, required/optional): Enter the quantity of each item being ordered.
* **item_unit_price** (`number`, `item_unit_price`, required/optional): Enter the unit price of each item.
* **order_total** (`number`, `order_total`, required/optional): Calculate the total order value.
* **customer_message** (`text`, `customer_message`, required/optional): Enter any additional customer message.
* **payment_method** (`select_one`, `payment_method`, required/optional): Select the payment method.
* **payment_details** (`text`, `payment_details`, required/optional): Enter any additional payment details.
* **order_status** (`select_one`, `order_status`, required/optional): Enter the order status.
