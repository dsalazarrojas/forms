# Smart Inventory Reorder Application Form - Help Guide
## Purpose
This form is designed to help users request reordering of inventory items. It captures essential information from the user, including their details, item information, and preferences for reordering. The form is intended for use by customers or users when they need to reorder items from the inventory.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the **User Info** page with your name and contact information.
2. Proceed to the **Item Info** page and provide the item number and description.
3. On the **Reorder Request** page, select the option to **Reorder** the item.
4. Choose your preferred **Delivery Method** from the options provided.
5. If desired, select a specific **Delivery Date** for the reordered item.
6. Provide any additional **Reorder Reason** information if needed.
7. Enter any **Reorder Notes** for the admin's reference.
8. On the final page, select the option to **Confirm** the reorder request.
9. Finally, select **Confirm** to submit the form for the admin's review and approval.

## Field-by-Field Explanation

* **User Info** (`name`, `text`, required):
    * This field is for your name and contact information. Please fill out your name, email, and any other relevant details.
* **Item Info** (`description`, `text`, required):
    * This field is for the item you want to reorder. Please provide the item number or description.
* **Reorder Request** (`Reorder`, `select_one`, required):
    * Select the option to reorder the item. This will notify the admin team to process the reorder request.
* **Delivery Method** (`Standard`, `Express`, `select_multiple`, required):
    * Choose your preferred delivery method for the reordered item. Select either **Standard** or **Express** for faster delivery.
* **Delivery Date** (`date`, `optional`, not required):
    * If you select a specific delivery date, the admin will schedule the delivery accordingly. If not specified, the delivery date will be determined by the admin.
* **Reorder Reason** (`text`, `optional`, not required):
    * Provide any additional information for the reorder, such as the reason for reordering or special instructions.
* **Reorder Notes** (`note`, `optional`, not required):
    * Enter any notes or comments for the admin's reference.
* **User Confirm** (`Confirm`, `Cancel`, required):
    * Select the option to confirm the reorder request. This will send the request to the admin for review and approval.
* **Admin Confirm** (`Confirm`, `Cancel`, required):
    * Once the admin reviews and approves your reorder request, select the option to confirm. This will finalize the reorder and schedule the delivery.
