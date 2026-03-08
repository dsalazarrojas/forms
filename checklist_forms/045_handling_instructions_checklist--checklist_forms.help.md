<thinking>...</thinking>

# Handling Instructions Checklist - Help Guide

## Purpose
The purpose of this form is to collect information and instructions related to item handling, including item status, confirmations, and special instructions. This form is used to ensure that items are handled correctly and efficiently in the warehouse.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the item handling steps and special instructions.
2. Confirm the status of the item, including whether it is Active or Inactive.
3. Select the warehouse where the item is located.
4. Enter the item's weight, width, and height.
5. Enter the date and time for any confirmations.
6. Confirm or deny any special instructions.

## Field-by-Field Explanation

* **Item Handling Steps (item_handling_steps)** (`item_handling_steps`, `text`, required: false): This field is a text field where you can enter any special steps or instructions related to handling the item.
* **Special Instructions (special_instructions)** (`special_instructions`, `text`, required: false): This field is a text field where you can enter any special instructions or notes related to the item.
* **Confirmations (confirmations)** (`confirmations`, `text`, required: false): This field is a text field where you can enter any confirmations or comments related to the item.
* **Warehouse (warehouse_id)** (`Warehouse`, `select_one`, required: false): This field is a dropdown menu where you can select the warehouse where the item is located. The options are "Yes" or "No".
* **Lab (lab_id)** (`Lab`, `select_one`, required: false): This field is a dropdown menu where you can select whether the item is related to the lab or not. The options are "Yes" or "No".
* **Manufacturer (manufacturer_id)** (`Manufacturer`, `select_one`, required: false): This field is a dropdown menu where you can select whether the item is manufactured or not. The options are "Yes" or "No".
* **Logistics (logistics_id)** (`Logistics`, `select_one`, required: false): This field is a dropdown menu where you can select whether the item is related to logistics or not. The options are "Yes" or "No".
* **Item (item_id)** (`item_id`, `text`, required: false): This field is a text field where you can enter the item's ID or reference number.
* **Date (date)** (`date`, `date`, required: false): This field is a date field where you can enter the date related to the item.
* **Time (time)** (`time`, `time`, required: false): This field is a time field where you can enter the time related to the item.
* **Status (item_status_id)** (`Status`, `select_multiple`, required: false): This field is a dropdown menu where you can select the status of the item. The options are "Active" or "Inactive".
* **Warehouse (warehouse_id)** (`Warehouse`, `select_one`, required: false): This field is a dropdown menu where you can select the warehouse where the item is located. The options are "Yes" or "No".
* **Weight (item_weight)** (`Weight`, `number`, required: false): This field is a numeric field where you can enter the item's weight.
* **Width (item_width)** (`Width`, `number`, required: false): This field is a numeric field where you can enter the item's width.
* **Height (item_height)** (`Height`, `number`, required: false): This field is a numeric field where you can enter the item's height.

## Tips
* Make sure to review the item handling steps and special instructions carefully before submitting the form.
* Double-check the item's status and warehouse location to ensure accurate information.
* Enter the correct weight, width, and height of the item.
* Confirm or deny special instructions as needed.
* Enter dates and times accurately.
* Select the correct status and warehouse location from the dropdown menus.
