# Inventory Level Monitoring Form - Help Guide

## Purpose
This form is used to monitor and track inventory levels, allowing users to gather data on item numbers, quantities, and prices to make informed decisions about reordering and maintaining stock levels.

## How To Complete This Form

1. To complete this form, select the relevant information for each field as required.
2. Start by filling out the item number field, which is used to identify the specific item being monitored.
3. Enter the current level of the item, which indicates how much of the item is currently available in stock.
4. Select the reorder level, which is the quantity at which the item should be reordered.
5. If applicable, enter the unit price of the item.
6. Choose the reorder level (High, Low) and select the date when the last order was made and the date when the last reorder was made.
7. Enter the quantity ordered and the quantity received for the last reorder.
8. Finally, enter the current quantity in stock.

## Field-by-Field Explanation

* **item_number** (`inventory_level_1`, number, required): Enter the unique identifier of the item being monitored.
* **level** (`inventory_level_2`, number): Enter the current quantity of the item in stock.
* **quantity** (`inventory_level_3`, select_one): Select 'Yes' or 'No' to indicate whether the item is currently in quantity.
* **unit_price** (`inventory_level_4`, number, optional): Enter the unit price of the item.
* **reorder_level** (`inventory_level_5`, select_multiple): Select 'High' or 'Low' to indicate the reorder level of the item.
* **last_ordered_date** (`inventory_level_6`, date, optional): Enter the date when the last order was made.
* **last_reorder_date** (`inventory_level_7`, date, optional): Enter the date when the last reorder was made.
* **quantity_ordered** (`inventory_level_8`, number, optional): Enter the quantity ordered for the last reorder.
* **quantity_received** (`inventory_level_9`, number, optional): Enter the quantity received for the last reorder.
* **quantity_in_stock** (`inventory_level_10`, number, optional): Enter the current quantity in stock.
