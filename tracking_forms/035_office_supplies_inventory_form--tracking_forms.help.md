<thinking>...</thinking>

## office_supplies_inventory_form - Help Guide

## Purpose
This form is used to track office supplies inventory, allowing users to record and update information about the items available in stock. It helps ensure that accurate and up-to-date records are maintained for ordering, inventory management, and other purposes.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the "Item Number" field with the unique identifier of the office supply item.
2. Enter the "Item Name" of the office supply item.
3. Select the "Category" of the office supply item (e.g., Paper, Pens, Staplers, etc.).
4. Enter the current "Number of Items On Hand" in stock.
5. If ordering is required, enter the "Quantity to be Ordered" in the box provided.
6. Record the "Unit Price" of the office supply item.
7. Enter the name of the "Approver Name" who approved the current inventory information.
8. Enter the name of the "Checker Name" who last checked the item's inventory.
9. Record the date and time when the item was "Checked By" last.
10. Record the date and time when the item was "Approved By" last.

## Field-by-Field Explanation

* **Office Supplies Inventory Form**: This is the title of the form.
* **Office Supplies Inventory Form Title**: Enter a brief description of the office supply inventory.
* **Item Number** (`item_number`, `number`, required/optional: false): Enter a unique identifier for the office supply item.
* **Item Name** (`item_name`, `text`, required/optional: false): Enter the name of the office supply item.
* **Category** (`category`, `text`, required/optional: false): Select the category of the office supply item (e.g., Paper, Pens, Staplers, etc.).
* **Number of Items On Hand** (`item_count`, `number`, required/optional: false): Enter the current quantity of the office supply item in stock.
* **Quantity to be Ordered** (`order_quantity`, `number`, required/optional: false): Enter the quantity to be ordered if applicable.
* **Unit Price** (`unit_price`, `number`, required/optional: false): Enter the unit price of the office supply item.
* **Approver Name** (`approver_name`, `text`, required/optional: false): Enter the name of the approver who approved the current inventory information.
* **Checker Name** (`checker_name`, `text`, required/optional: false): Enter the name of the checker who last checked the item's inventory.
* **Checked By** (`checked_by`, `time`, required/optional: false): Record the date and time when the item was last checked.
* **Approved By** (`approved_by`, `time`, required/optional: false): Record the date and time when the item was last approved.
