<thinking>...</thinking>

# ประก - Help Guide
## Purpose
This form is designed to capture order information for a customer order system. It gathers details such as customer contact information, order date and time, items, quantities, and total prices. This form is used for creating, editing, or updating orders within the system.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the customer's first and last name in the corresponding fields.
2. Enter the customer's phone number in the phone field.
3. Enter the customer's email address in the email field.
4. Select a date and time for the order from the calendar picker (if available).
5. Select the items to be ordered from the list of options in the order items field.
6. Enter the quantity for each selected item.
7. Calculate the total price by entering the price for each item.
8. Enter any additional notes for the order in the order notes field.
9. Choose the assigned user and group from the corresponding drop-down menus.
10. Select any assigned goals and tags as required.
11. Choose the status of the order from the drop-down menu.

## Field-by-Field Explanation
* **First Name** (`first_name`, `text`, required/optional): Enter the customer's first name.
* **Last Name** (`last_name`, `text`, required/optional): Enter the customer's last name.
* **Phone** (`phone`, `text`, required/optional): Enter the customer's phone number.
* **E-mail** (`email`, `email`, required/optional): Enter the customer's email address.
* **Date** (`date`, `date`, required/optional): Select a date for the order from the calendar picker.
* **Time** (`time`, `time`, required/optional): Select a time for the order from the calendar picker.
* **Address** (`address`, `text`, required/optional): Enter the customer's address.
* **Order Date** (`order_date`, `date`, required/optional): Select the order date from the calendar picker.
* **Total Cost** (`total_cost`, `number`, required/optional): Calculate the total price of the order.
* **Order Items** (`order_items`, `select_multiple`, required/optional): Select the items to be ordered from the list of options.
* **Quantity** (`quantity`, `number`, required/optional): Enter the quantity for each selected item.
* **Price** (`price`, `number`, required/optional): Enter the price for each item.
* **Total Price** (`total_price`, `number`, required/optional): Calculate the total price of the order.
* **Order Notes** (`order_notes`, `note`, required/optional): Enter any additional notes for the order.
* **Customer Info** (`customer_info`, `select_multiple`, required/optional): Choose the customer's information from the list of options.
* **Assigned User** (`assigned_user`, `select_one`, required/optional): Choose the assigned user from the list of options.
* **Assigned User ID** (`assigned_user_id`, `select_one`, required/optional): Choose whether to assign the user or not.
* **Minimalist** (`minimalist`, `text`, required/optional): Enter any additional information as needed.
* **Category** (`category`, `select_multiple`, required/optional): Choose the category for the order from the list of options.
* **Tags** (`tags`, `select_multiple`, required/optional): Choose the tags for the order from the list of options.
* **Assigned Group** (`assigned_group`, `select_one`, required/optional): Choose the assigned group from the list of options.
* **Assigned Goals** (`assigned_goals`, `select_multiple`, required/optional): Choose the assigned goals for the order from the list of options.
* **Notes** (`notes`, `note`, required/optional): Enter any additional notes for the order.
* **Status** (`status`, `select_one`, required/optional): Choose the status of the order from the list of options.
