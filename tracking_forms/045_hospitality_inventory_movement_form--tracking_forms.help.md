# Hospitality Inventory Movement Form - Help Guide
## Purpose
This form is used to track movements of hospitality items, such as food and beverages, within the establishment.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the department from which the item is being moved (`department_from` field).
2. Select the department to which the item is being moved (`department_to` field).
3. Provide a brief description of the item being moved (`item_description` field).
4. Enter the quantity of the item being moved (`item_quantity` field).
5. Enter the date of the transaction (`date_of_transaction` field).
6. Select the status of the item after the transaction (e.g., Active or Inactive) (`item_status` field).
7. If the item's status is Inactive, provide a reason for the status change (`item_status_reason` field, optional).
8. Enter any comments or notes regarding the transaction (`item_comment` field, optional).

## Field-by-Field Explanation
* **Department from** (`department_from`, select_one, optional): Select the department from which the item is being moved.
* **Department to** (`department_to`, select_one, optional): Select the department to which the item is being moved.
* **Item Description** (`item_description`, text, optional): Enter a brief description of the item being moved.
* **Item Quantity** (`item_quantity`, number, optional): Enter the quantity of the item being moved.
* **Date of Transaction** (`date_of_transaction`, date, optional): Enter the date of the transaction.
* **Item Status** (`item_status`, select_one, optional): Select the status of the item after the transaction (e.g., Active or Inactive).
* **Item Status Reason** (`item_status_reason`, text, optional): If the item's status is Inactive, provide a reason for the status change.
* **Item Comment** (`item_comment`, text, optional): Enter any comments or notes regarding the transaction.
