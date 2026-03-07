<thinking>
This form is for adding movements to the inventory system. It is used to track changes in the quantity of items in stock. Before filling out this form, ensure that you have the necessary information and permissions to add a new movement to the system. Additionally, please be aware that the form is for adding new movements, not for editing or viewing existing ones. 
</thinking>

# Movement Addition Form - Help Guide
## Purpose
The purpose of this form is to add new movements to the inventory system, allowing you to track changes in the quantity of items in stock.

## How To Complete This Form
To complete this form, follow these steps:

1. Choose the category of the movement using the "Category" field.
2. Select the type of movement using the "Movement Type" field.
3. Enter the stock code of the item being moved using the "Stock Code" field.
4. Provide a brief description of the item using the "Item Description" field.
5. Enter the quantity of the item being moved using the "Quantity" field.
6. Enter the unit cost of the item using the "Unit Cost" field.
7. Enter the total amount of the item being moved using the "Total Amount" field.
8. Select the date of the movement using the "Date" field.
9. If necessary, specify the time of the movement using the "Time" field.

## Field-by-Field Explanation

* **Category** (`form_category`, select_one, required: false): Select the category of the movement from the available options.
* **Movement Type** (`movement_type`, select_one, required: true): Choose the type of movement, such as "In" or "Out".
* **Stock Code** (`stock_item_code`, text, required: false): Enter the stock code of the item being moved.
* **Item Description** (`item_description`, text, required: false): Provide a brief description of the item being moved.
* **Quantity** (`quantity`, number, required: false): Enter the quantity of the item being moved.
* **Unit Cost** (`unit_cost`, number, required: false): Enter the unit cost of the item being moved.
* **Total Amount** (`total_amount`, number, required: false): Enter the total amount of the item being moved.
* **Date** (`movement_date`, date, required: false): Select the date of the movement from the calendar.
* **Time** (`time`, time, required: false): If necessary, specify the time of the movement.
