# office_supplies_inventory_form - Help Guide
## Purpose
This form is used to track office supplies inventory. It helps to prevent stockouts and ensures that the office always has the necessary supplies.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Item Number of the item you are tracking.
2. Enter the name of the item.
3. Choose the category of the item (e.g. Office Supplies, Stationery, etc.).
4. Enter the current quantity of the item on hand.
5. Enter the quantity of the item to be ordered.
6. Enter the unit price of the item.
7. Select the person who last checked the item.
8. Select the person who approved the order.
9. If applicable, select the category of the item being added (e.g. Office Supplies, Stationery, etc.).
10. Enter the name of the item being added.

## Field-by-Field Explanation
* **Item Number** (`item_number`, `number`, required: false): Enter the Item Number of the item you are tracking.
* **Item Name** (`item_name`, `text`, required: false): Enter the name of the item.
* **Item Category** (`item_category`, `text`, required: false): Choose the category of the item (e.g. Office Supplies, Stationery, etc.).
* **Number of Items on Hand** (`number_of_items_on_hand`, `number`, required: false): Enter the quantity of the item on hand.
* **Quantity to Order** (`quantity_to_order`, `number`, required: false): Enter the quantity of the item to be ordered.
* **Unit Price** (`unit_price`, `number`, required: false): Enter the unit price of the item.
* **Checked By** (`checked_by`, `text`, required: false): Select the person who last checked the item.
* **Approver** (`approver`, `text`, required: false): Select the person who approved the order.
* **Item Added** (`item_added`, `select_multiple`, required: false): If applicable, select the category of the item being added (e.g. Office Supplies, Stationery, etc.).
* **Item Name 2** (`item_name_2`, `text`, required: false): Enter the name of the item being added.
