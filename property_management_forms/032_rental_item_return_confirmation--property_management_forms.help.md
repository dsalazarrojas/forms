<thinking>
This form is designed to capture information related to the return of rental items, including general information, return date, item condition, and other relevant details. It is intended to be used by staff or customers to confirm the return of rental items. The form should only be completed if the item is being returned. If the item is being picked up or otherwise retrieved, a different form should be used.
</thinking>

# Rental Item Return Confirmation - Help Guide
## Purpose
The Rental Item Return Confirmation form is used to verify the return of rental items, ensure their condition, and update their status.

## How To Complete This Form
To complete this form, follow these steps:
1. Review the general information about the return, including the return date and item description.
2. Confirm the item's condition using the "Item Condition" field.
3. Enter the date the item was returned, if applicable.
4. Confirm whether the item has been returned or not.
5. Enter any item-specific details, such as the item description and any damage descriptions.
6. Enter the reason for the return, if applicable.
7. Choose who returned the item (staff or customer).
8. Enter the return status and date, if applicable.
9. Update the item's status and quantity, if applicable.
10. Enter the price of the returned item, if applicable.
11. Add any notes or comments, if necessary.

## Field-by-Field Explanation
* **General Information** (`id: 1`, `text`, required: false): Enter any general information about the return, such as the return date and item description.
* **Return Date** (`id: 2`, `date`, required: false): Enter the date the item was returned.
* **Returned Date** (`id: 3`, `date`, required: false): Confirm the date the item was returned.
* **Returned Date Confirmation** (`id: 4`, `select_multiple`, required: false): Confirm whether the item has been returned (Yes or No).
* **Item Description** (`id: 5`, `text`, required: false): Enter a brief description of the item being returned.
* **Item Condition** (`id: 6`, `select_one`, required: false): Choose the condition of the item being returned (Excellent, Good, Fair, or Poor).
* **Item Damage Description** (`id: 7`, `text`, required: false): Enter any details about item damage, if applicable.
* **Return Reason** (`id: 8`, `text`, required: false): Enter the reason for the return, if applicable.
* **Returned By** (`id: 9`, `select_one`, required: false): Choose who returned the item (Staff or Customer).
* **Returned By ID** (`id: 10`, `text`, required: false): Enter the ID of the person who returned the item.
* **Signature** (`id: 11`, `note`, required: false): Add any comments or notes about the return.
* **Notes** (`id: 12`, `note`, required: false): Add any additional notes or comments about the return.
* **Return Status** (`id: 13`, `select_one`, required: false): Choose the status of the return (Pending, Completed, or Cancelled).
* **Return Status Date** (`id: 14`, `date`, required: false): Enter the date of the return status change.
* **Signature Date** (`id: 15`, `date`, required: false): Add the date of the signature.
* **Item Status** (`id: 16`, `select_one`, required: false): Choose the status of the item (Active or Inactive).
* **Item Quantity** (`id: 17`, `number`, required: false): Enter the quantity of the item being returned.
* **Item Price** (`id: 18`, `number`, required: false): Enter the price of the item being returned.
