<thinking>
A sales order form is used to capture information about a customer's order, including their identification, order details, and customer preferences. This form will help you process automation tasks for the sales order.
 
We will check that this form is not used for non-sales orders and not used in non-sales automation tasks.
 
We will also ensure that all required fields are filled out before proceeding to the next step.
 
Please note that this form is used to generate sales orders and automate sales processes, it is not for non-sales related tasks.
 
Also, we will make sure that the customer email and phone number are accurate and up-to-date to ensure that the customer can be reached for communication.
 
</thinking>

# process_automation_relay_board_order_form - Help Guide
## Purpose
The purpose of this form is to capture information for sales orders and automate sales processes.

## How To Complete This Form
To complete this form, please follow the steps below:

1. Enter the customer's board ID (board_id) in the first field.
2. Enter the customer's name (customer_name) in the second field.
3. Enter the date of the order (order_date) in the third field.
4. Select the board model from the available options (board_model) in the fourth field.
5. Select one or more preferred colors for the board (board_color) in the fifth field.
6. Enter the customer's email (customer_email) in the sixth field.
7. Enter the customer's phone number (customer_phone) in the seventh field.
8. Enter any additional notes about the customer (customer_notes) in the eighth field.

## Field-by-Field Explanation
* **board_id** (`board_id`, text, required): Enter the customer's board ID.
* **customer_name** (`customer_name`, text, required): Enter the customer's name.
* **order_date** (`order_date`, date, required): Enter the date of the order.
* **board_model** (`board_model`, select_one, not required): Select the board model from the available options.
* **board_color** (`board_color`, select_multiple, required): Select one or more preferred colors for the board.
* **customer_email** (`customer_email`, email, required): Enter the customer's email.
* **customer_phone** (`customer_phone`, text, required): Enter the customer's phone number.
* **customer_address** (`customer_address`, text, not required): Enter the customer's address.
* **customer_notes** (`customer_notes`, note, not required): Enter any additional notes about the customer.
