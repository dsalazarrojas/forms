# Warehouse Check Out Form - Help Guide
## Purpose
This form is used to track items that have been checked out from the warehouse inventory.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Item Name field with the name of the item being checked out.
2. Enter the quantity of the item being checked out.
3. Identify the location of the item being checked out.
4. Choose the status of the item, either "Available" or "Checked Out".
5. If applicable, fill in the Date Checked Out field with the date the item was removed from the inventory.
6. Enter your contact information, including your email and phone number, to be contacted if needed.
7. Add any additional notes about the checked out item, such as its condition or expected return date.

## Field-by-Field Explanation

* **Item Name** (`item_name`, text, required): Enter the name of the item being checked out, as seen on the inventory label or database entry.
* **Item Quantity** (`item_quantity`, number, required): Enter the number of items being checked out.
* **Item Location** (`item_location`, text, required): Identify the location where the item is being removed from or taken to.
* **Item Status** (`item_status`, select_one, required): Choose "Available" for items still on the shelf or "Checked Out" for items that have been removed.
* **Date Checked Out** (`date_checked_out`, date, optional): If the item is being removed from the inventory for an extended period, fill in the date the item was removed.
* **Checked By** (`checked_by`, text, optional): Enter your name or alias for the person checking out the item.
* **Notes** (`notes`, note, optional): Add any additional comments or notes about the item being checked out, such as its condition or expected return date.
* **Email** (`email`, email, optional): Enter your email address for contact purposes.
* **Phone** (`phone`, text, optional): Enter your phone number for contact purposes.

## Tips

* Please ensure that you have permission to remove the item from the inventory before completing this form.
* Double-check the item's location and status before checking out the item.
* Make sure to return the item to the correct location after use.
