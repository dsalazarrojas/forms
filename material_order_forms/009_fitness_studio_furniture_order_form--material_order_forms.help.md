# Fitness Studio Furniture Order Form - Help Guide
## Purpose
The Fitness Studio Furniture Order Form is used to order fitness-related furniture for a studio. This form helps the studio's staff to accurately assign and fulfill customer orders for specific items such as tables, chairs, and desks.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your First Name, Last Name, and Address to provide contact information.
2. Enter your Email and Phone number to ensure we can contact you to confirm your order.
3. Select the products you would like to order (Table, Chair, Desk) by checking the corresponding boxes.
4. Enter the quantity of each product you would like to order.
5. Provide any additional Order Notes if you need to specify any special requests or instructions.
6. Choose the staff member you would like your order to be assigned to from the list provided.
7. Set a Date for your order (optional, but recommended).

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Please enter your first name as you would like it to be used on your order.
* **Last Name** (`last_name`, `text`, required): Please enter your last name as you would like it to be used on your order.
* **Address** (`address`, `text`, required): Enter your studio's address where the order will be delivered.
* **Email** (`email`, `email`, required): Enter your email address so we can contact you to confirm your order.
* **Phone** (`phone`, `text`, required): Enter your phone number so we can contact you to confirm your order.
* **Product List** (`product_list`, `select_multiple`, required): Select the products you would like to order by checking the boxes next to each option (Table, Chair, Desk).
* **Quantity Table** (`quantity_table`, `number`, required): Enter the quantity of tables you would like to order.
* **Quantity Chair** (`quantity_chair`, `number`, required): Enter the quantity of chairs you would like to order.
* **Quantity Desk** (`quantity_desk`, `number`, required): Enter the quantity of desks you would like to order.
* **Order Notes** (`order_notes`, `note`, optional): Add any additional notes or instructions for your order if needed.
* **Assigned To** (`assigned_to`, `select_one`, required): Select the staff member you would like your order to be assigned to from the provided options (chatjimmy, Other).
* **Date** (`date`, `date`, optional): Set a Date for your order (optional, but recommended).
