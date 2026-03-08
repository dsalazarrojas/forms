<thinking>...</thinking>

This form is used for retailers to record the transfer of items between two stores within the same company. The purpose of this form is to provide a standardized way of tracking inventory movements between stores, ensuring accurate inventory levels and reducing errors. This form is typically used for transfers between stores that are located in the same region or within the same company network.

## retail_transfer_delivery_form - Help Guide

## Purpose
The retail transfer delivery form is used to record the transfer of items between two stores within the same company. This form helps to ensure accurate inventory levels and reduce errors.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the **origin store** where the item is currently located.
2. Enter the **destination store** where the item will be transferred.
3. Select a **transfer date** when the item will be moved.
4. Choose a **transfer time** when the item will be moved.
5. Select the **transfer type**:
	* In Stock Transfer: When the item is being moved from one part of the store to another.
	* Transfer from another warehouse: When the item is being moved from another store within the company.
	* Transfer from another location: When the item is being moved from a different location within the company.
6. Add any additional **transfer details** if necessary.
7. Enter the **total items** being transferred.
8. Enter the **item value** of the transferred items.

## Field-by-Field Explanation
* **Origin Store** (`origin_store`, `text`, required: false): Enter the store where the item is currently located.
* **Destination Store** (`destination_store`, `text`, required: false): Enter the store where the item will be transferred.
* **Transfer Date** (`transfer_date`, `date`, required: false): Select the date when the item will be moved.
* **Transfer Time** (`transfer_time`, `time`, required: false): Select the time when the item will be moved.
* **Transfer Type** (`transfer_type`, `select_one`, required: false): Choose the reason for the transfer:
	+ In Stock Transfer
	+ Transfer from another warehouse
	+ Transfer from another location
* **Transfer Details** (`transfer_details`, `note`, required: false): Add any additional information about the transfer.
* **Total Items** (`total_items`, `number`, required: false): Enter the total number of items being transferred.
* **Item Value** (`item_value`, `number`, required: false): Enter the value of each item being transferred.

## Tips
* Make sure to fill out all required fields before submitting the form.
* Double-check your entries for accuracy to ensure correct inventory levels.
* Use the **Transfer Type** field to provide relevant details about the transfer for accounting and inventory purposes.
