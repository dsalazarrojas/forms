<thinking>
I'll create a user-facing help guide for the "TSD Inventory Update" form. This form is used to update inventory information, and I'll make sure to cover each field clearly and concisely. I'll use the provided YAML fields to create a comprehensive guide that helps users understand the form's purpose, how to complete it, and what each field means. Before starting the guide, I'll review the form's purpose and fields to ensure I'm on the right track.
</thinking>

# TSD Inventory Update - Help Guide
## Purpose
The "TSD Inventory Update" form is used to update inventory information in the TSD system. This form is intended for internal use and is designed to help users manage inventory levels and track updates.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form carefully to ensure you have all the necessary information.
2. Select the relevant fields that need to be updated.
3. Fill in the required fields (marked as "required" in the form).
4. Review the form for accuracy before submitting it.

## Field-by-Field Explanation
### Inventory Form (page 1)
* **Inventory Form** (`inventory_form`, text, optional): Enter a brief description of the inventory update.
* **Product** (`product_form`, select_one, optional): Select the product being updated.
* **Quantity** (`quantity_form`, number, optional): Enter the updated quantity.
* **Warehouse** (`warehouse_form`, select_multiple, optional): Select the warehouse(s) where the inventory is stored.
* **Assigned Tool** (`assigned_tool`, text, optional): Enter any tools assigned to the inventory update (e.g., for tracking purposes).
* **Assigned to** (`assigned_to`, select_one, optional): Select the person responsible for the inventory update.
* **Assigned by** (`assigned_by`, select_one, optional): Select the person performing the inventory update.
* **Update Date** (`update_date`, date, optional): Enter the date of the update.
* **Notes** (`notes`, note, optional): Enter any additional notes about the update.

### Update Form (page 2)
* **Update** (`update_button`, select_multiple, optional): Select whether to update the inventory.
* **Notes** (`notes`, note, optional): Enter any additional notes about the update.
* **Assigned to** (`assigned_to`, select_one, optional): Select the person responsible for the update.
* **Assigned by** (`assigned_by`, select_one, optional): Select the person performing the update.
* **Yes / No** (`update_button`, select_one, optional): Select whether to update the inventory.

## Tips
* Ensure all required fields are filled before submitting the form.
* Review the form carefully before submitting to avoid errors.
* Use the "Update" option to confirm or reject the update.
* Enter any additional notes to provide context for the update.
