# warehouse_inventory_checklist_form - Help Guide
## Purpose
The warehouse inventory checklist form is a tool used to track and manage warehouse inventory. It is designed to ensure that all items are checked and recorded accurately, and that all necessary information is captured.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by selecting the item(s) you want to check on the `item_to_check` field.
2. Enter the current location of the item in the `current_location` field.
3. Enter the current quantity of the item in stock in the `quantity_in_stock` field.
4. Enter the reorder point for the item in the `reorder_point` field.
5. Enter the date of the last inspection performed on the item in the `last_inspection_date` field.
6. Enter the date of the next scheduled inspection for the item in the `next_inspection_date` field.
7. Enter the current quantity of the item in stock in the `current_quantity` field.
8. Enter the quantity that needs to be reordered for the item in the `reorder_quantity` field.
9. Select the person(s) responsible for checking the item(s) from the `assigned` field.
10. Provide any additional notes about the item in the `notes` field.

## Field-by-Field Explanation

* **item_to_check**: Enter the item(s) you want to check on this form.
	+ Type: Text
	+ Required: No
* **current_location**: Enter the current location of the item.
	+ Type: Text
	+ Required: No
* **quantity_in_stock**: Enter the current quantity of the item in stock.
	+ Type: Number
	+ Required: No
* **reorder_point**: Enter the reorder point for the item.
	+ Type: Number
	+ Required: No
* **last_inspection_date**: Enter the date of the last inspection performed on the item.
	+ Type: Date
	+ Required: No
* **next_inspection_date**: Enter the date of the next scheduled inspection for the item.
	+ Type: Date
	+ Required: No
* **current_quantity**: Enter the current quantity of the item in stock.
	+ Type: Number
	+ Required: No
* **reorder_quantity**: Enter the quantity that needs to be reordered for the item.
	+ Type: Number
	+ Required: No
* **reorder_point**: Enter the point at which the item should be reordered.
	+ Type: Text
	+ Required: No
* **notes**: Enter any additional notes about the item.
	+ Type: Text
	+ Required: No
* **assigned**: Select the person(s) responsible for checking the item(s).
	+ Type: Select Multiple
	+ Required: Yes
