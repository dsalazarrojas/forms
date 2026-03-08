# f4t_temp_for_fridge_and_freezer - Help Guide
## Purpose
This form is used to manage and track food and beverage orders, including temperature readings from the fridge and freezer, order and delivery information, and customer details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the temperature of the fridge.
2. Enter the temperature of the freezer.
3. Select the date and time of the order.
4. Select the date and time of the delivery.
5. Enter the customer's name.
6. Enter the customer's contact number.
7. Enter any additional order notes.
8. Enter the customer's email (if applicable).
9. Select the status of the order (e.g., Available, In Progress, Delivered, Cancelled).
10. Enter any notes for the customer.
11. Enter the customer's address.
12. Select the delivery method (e.g., Delivery, Pickup, Shipping).
13. Select the type of order (e.g., Food, Beverage).
14. Enter any order details.
15. Select the payment method (e.g., Cash, Credit Card, Cheque).
16. Enter any customer notes.
17. Enter the name of the assigned user.
18. Enter the date and time the form was created.
19. Enter the date and time the form was last updated.
20. Enter the name of the user who created the form.
21. Enter the name of the user who last updated the form.
22. Enter the name of the tool assigned to the order.
23. Enter any notes for the assigned user.

## Field-by-Field Explanation
* **Fridge Temp** (`fridge_temp`, `number`, `required`): Enter the current temperature of the fridge.
* **Freezer Temp** (`freezer_temp`, `number`, `required`): Enter the current temperature of the freezer.
* **Order Date** (`order_date`, `date`, `required`): Select the date of the order.
* **Order Time** (`order_time`, `time`, `required`): Select the time of the order.
* **Delivery Date** (`delivery_date`, `date`, `required`): Select the date of the delivery.
* **Delivery Time** (`delivery_time`, `time`, `required`): Select the time of the delivery.
* **Customer Name** (`customer_name`, `text`, `required`): Enter the name of the customer.
* **Contact Number** (`contact_number`, `text`, `required`): Enter the contact number of the customer.
* **Order Notes** (`order_notes`, `text`, `required`): Enter any additional notes for the order.
* **Email** (`email`, `email`, `optional`): Enter the email of the customer (if applicable).
* **Order Status** (`order_status`, `select_one`, `required`): Select the status of the order (e.g., Available, In Progress, Delivered, Cancelled).
* **Notes** (`notes`, `note`, `optional`): Enter any additional notes for the customer.
* **Customer Address** (`customer_address`, `text`, `required`): Enter the customer's address.
* **Delivery Method** (`delivery_method`, `select_one`, `required`): Select the method of delivery (e.g., Delivery, Pickup, Shipping).
* **Order Type** (`order_type`, `select_multiple`, `required`): Select the type of order (e.g., Food, Beverage).
* **Order Details** (`order_details`, `note`, `optional`): Enter any additional details about the order.
* **Payment Method** (`payment_method`, `select_one`, `optional`): Select the method of payment (e.g., Cash, Credit Card, Cheque).
* **Customer Notes** (`customer_notes`, `text`, `optional`): Enter any notes for the customer.
* **Assigned User** (`assigned_user`, `text`, `optional`): Enter the name of the assigned user.
* **Created At** (`created_at`, `date`, `required`): Enter the date and time the form was created.
* **Updated At** (`updated_at`, `date`, `optional`): Enter the date and time the form was last updated.
* **Created By** (`created_by`, `text`, `optional`): Enter the name of the user who created the form.
* **Updated By** (`updated_by`, `text`, `optional`): Enter the name of the user who last updated the form.
* **Assigned Tool** (`assigned_tool`, `text`, `optional`): Enter the name of the tool assigned to the order.
* **Assigned User Notes** (`assigned_user_notes`, `text`, `optional`): Enter any notes for the assigned user.
