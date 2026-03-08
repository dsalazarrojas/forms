<thinking>
This form is intended to create a new movement record in the inventory management system. A movement is a record of an item being transferred from one location to another. This form should only be completed for legitimate business purposes and not for testing or demonstration purposes. Ensure that you have the necessary permissions and approvals before submitting this form.
The form is designed to capture information about the item, such as its ID, status, and transfer date. The "item_status" field is a multi-select field that allows you to choose multiple statuses for the item. The "movement_type" field is a select-one field that determines the type of movement (e.g. inventory in, inventory out, transfer in, etc.). The "user" field is a select-one field that determines who is responsible for the movement. The "email" and "phone" fields are optional fields for additional contact information.
</thinking>

# Movement Addition Form - Help Guide
## Purpose
The Movement Addition Form is used to create a new movement record in the inventory management system.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields: movement_type, user, and item_id.
2. Enter the item's date and description (if required).
3. Select the item's status (if required).
4. Choose the movement type (if required).
5. Select the user responsible for the movement.
6. If necessary, enter the item's movement date.
7. Enter the item's movement note (if required).
8. Enter the item's email and phone number (if required).

## Field-by-Field Explanation
* **inventory_item** (text): Enter the item's name or description.
* **date** (date): Enter the date of the movement.
* **description** (text): Enter a brief description of the movement.
* **item_status** (select multiple): Select the status of the item (e.g. Item Received, Item In Transit, Item Sold).
* **movement_type** (select one): Choose the type of movement (e.g. Inventory In, Inventory Out, Transfer In).
* **movement_id** (number): Enter the unique ID of the movement.
* **movement_date** (date): Enter the date of the movement.
* **movement_note** (text): Enter any additional notes about the movement.
* **user** (select one): Choose the user responsible for the movement.
* **email** (email): Enter the email address of the user responsible for the movement.
* **phone** (text): Enter the phone number of the user responsible for the movement.
* **item_id** (number): Enter the ID of the item being moved.
* **item_id** (number): Enter the ID of the item being moved (this field is not required, but it should match the item_id field above).
