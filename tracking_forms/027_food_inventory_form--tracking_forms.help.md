<thinking>...</thinking>

To create a help guide for this form, I will follow the given structure and instructions.

# Food Inventory Form - Help Guide
## Purpose
The Food Inventory Form is used to track the inventory of food items in warehouses. It collects information about each item, including its category, name, quantity, unit, warehouse, and other relevant details. This form helps in maintaining accurate and up-to-date records of food inventory, which is crucial for efficient warehouse management.

## How To Complete This Form
- First, select the correct category of the item from the "item-category" field.
- Enter the name of the item in the "item-name" field.
- Enter the quantity of the item in the "item-quantity" field.
- Select the unit of measurement for the item in the "item-unit" field.
- If applicable, enter the warehouse location for the item in the "item-warehouse" field.
- Enter any additional notes about the item in the "item-notes" field.
- Enter the date the item was issued in the "item-date-issued" field.
- Enter the date the item was received in the "item-date-received" field.
- Enter the date the item expires (if applicable) in the "item-date-expired" field.
- Enter the quantity of the item last checked in the "item-last-quantity-checked" field.
- Enter the date the item was last checked in the "item-last-checked-date" field.
- Enter the person who last checked the item in the "item-last-checked-by" field.
- Enter any notes from the last check in the "item-last-checked-notes" field.
- Enter the quantity of the item received in the "item-quantity-received" field.
- Enter the quantity of the item expired in the "item-quantity-expired" field.
- Enter the quantity of the item unused in the "item-quantity-unused" field.
- Enter the quantity of the item reserved in the "item-quantity-reserved" field.
- Enter the quantity of the item ordered in the "item-quantity-ordered" field.
- Finally, select the warehouse locations where the item is stored in the "item-warehouse" fields (1-5).

## Field-by-Field Explanation

* **item-category** (`item-category`, select_one, required): Select the category of the food item. This helps in grouping similar items together for easier tracking.
* **item-name** (`item-name`, text, required): Enter the name of the food item.
* **item-quantity** (`item-quantity`, number, required): Enter the current quantity of the food item.
* **item-unit** (`item-unit`, text, required): Select the unit of measurement for the item (e.g., kilograms, liters, etc.).
* **item-warehouse** (`item-warehouse`, text, required): Enter the location of the item in the warehouse.
* **item-notes** (`item-notes`, note, optional): Add any additional notes about the item.
* **item-date-issued** (`item-date-issued`, date, required): Enter the date the item was issued.
* **item-date-received** (`item-date-received`, date, required): Enter the date the item was received.
* **item-date-expired** (`item-date-expired`, date, optional): Enter the date the item expires (if applicable).
* **item-last-quantity-checked** (`item-last-quantity-checked`, number, required): Enter the quantity of the item last checked.
* **item-last-checked-date** (`item-last-checked-date`, date, optional): Enter the date the item was last checked.
* **item-last-checked-by** (`item-last-checked-by`, text, optional): Enter the person who last checked the item.
* **item-last-checked-notes** (`item-last-checked-notes`, note, optional): Enter any notes from the last check.
* **item-quantity-received** (`item-quantity-received`, number, required): Enter the quantity of the item received.
* **item-quantity-expired** (`item-quantity-expired`, number, required): Enter the quantity of the item expired.
* **item-quantity-unused** (`item-quantity-unused`, number, required): Enter the quantity of the item unused.
* **item-quantity-reserved** (`item-quantity-reserved`, number, required): Enter the quantity of the item reserved.
* **item-quantity-ordered** (`item-quantity-ordered`, number, required): Enter the quantity of the item ordered.
* **item-warehouse-1**, **item-warehouse-2**, **item-warehouse-3**, **item-warehouse-4**, **item-warehouse-5** (`item-warehouse-1`, `item-warehouse-2`, `item-warehouse-3`, `item-warehouse-4`, `item-warehouse-5`, text, optional): Select the warehouse locations where the item is stored (1-5).

Note: Fields marked with an asterisk (*) are required to complete.
