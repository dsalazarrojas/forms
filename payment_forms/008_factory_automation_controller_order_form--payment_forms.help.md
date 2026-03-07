<thinking>
This form is designed to gather necessary information for the processing of Factory Automation Controller orders. To use this form, a user would likely be a sales or customer service representative who interacts with customers on a daily basis. The form should not be duplicated, as it is a critical component of our sales and order processing workflow.
</thinking>

# Factory Automation Controller Order Form - Help Guide
## Purpose
The Factory Automation Controller Order Form is used to collect information for the processing of factory automation controller orders.

## How To Complete This Form
To complete this form, follow the steps below:
1. Select the "order_form" page to begin.
2. Enter the "part_number" of the factory automation controller being ordered.
3. Choose the model of the controller from the "factory_automation_controller_model" dropdown menu.
4. Enter the total cost of the order in the "total" field.
5. Provide a brief description of the order in the "order_description" field.
6. Enter the customer's email address in the "customer_email" field.
7. Enter the customer's phone number in the "customer_phone" field.
8. Select the current order status from the "order_status" dropdown menu.
## Field-by-Field Explanation
* **order_form** (`order_form`, `number`, required: false): This is the form title, not a field to fill, but simply the form name.
* **part_number** (`part_number`, `text`, required: false): Enter the part number of the factory automation controller being ordered.
* **factory_automation_controller_model** (`factory_automation_controller_model`, `select_one`, required: false): Select the model of the factory automation controller from the dropdown menu.
* **total** (`total`, `number`, required: true): Enter the total cost of the order.
* **order_description** (`order_description`, `text`, required: false): Provide a brief description of the order.
* **customer_email** (`customer_email`, `email`, required: true): Enter the customer's email address.
* **customer_phone** (`customer_phone`, `text`, required: true): Enter the customer's phone number.
* **order_status** (`order_status`, `select_multiple`, required: false): Select the current order status from the dropdown menu.
## Tips
* Make sure to enter all required fields (part number, total, customer email, customer phone).
* Double-check the customer's email address to ensure it is accurate.
* Be as detailed as possible when providing the order description to ensure accurate order processing.
