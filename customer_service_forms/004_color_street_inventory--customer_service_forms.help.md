<thinking>
This form is designed to collect information about the Color Street inventory, allowing users to provide data on the style name, inventory count date, details, category, set name, quantity on hand, samples available, storage location, restock trigger level, estimated retail value, packaging condition, and general inventory notes. The form aims to gather accurate and up-to-date information for inventory management and restocking purposes. Please ensure that the form is completed accurately and thoroughly, as the data will be used for making informed decisions about restocking and inventory management. Before creating this guide, I've reviewed the form's schema and identified the following key fields:
</thinking>

# Color Street Inventory - Help Guide
## Purpose

This form is used to collect and manage inventory data for Color Street products. It helps users keep track of style names, inventory count dates, details, categories, quantities, and other relevant information to ensure accurate inventory management and restocking.

## How To Complete This Form

1.  Enter the stylist name and inventory count date in the respective fields.
2.  Select the correct category from the provided options.
3.  Enter the name of the Color Street set in the designated field.
4.  Enter the total number of full sets available.
5.  Optionally, provide the number of sample packs available.
6.  Specify the storage location of the inventory.
7.  Enter the minimum quantity required to trigger restocking.
8.  Provide an estimated retail value for the inventory.
9.  Indicate if the packaging is in good condition or not.
10.  Add any general notes about the inventory in the designated field.

## Field-by-Field Explanation

*   **Stylist Name** (`stylist_name`, `text`, required): Enter the name of the stylist or person responsible for updating the inventory.
*   **Inventory Count Date** (`inventory_date`, `date`, required): Date the inventory count was completed.
*   **-- Inventory Details --** (`section_inventory_details`, `note`, required): Provide a brief description of the inventory details.
*   **Nail Set Category** (`set_category`, `select_one`, required): Select the category that best describes the set (e.g., Solids, Glitters, etc.).
*   **Name of Color Street Set** (`set_name`, `text`, required): Enter the name of the Color Street set in question.
*   **Quantity on Hand** (`quantity_on_hand`, `number`, required): Enter the total number of full sets available.
*   **Samples Available (Twosies)** (`samples_available`, `number`, optional): Enter the number of sample packs available.
*   **Storage Location** (`storage_location`, `text`, optional): Enter the location where the inventory is stored (e.g., Bin A, Display Case, etc.).
*   **Restock Trigger Level** (`restock_trigger`, `number`, optional): Enter the minimum quantity before restocking is triggered.
*   **Estimated Total Retail Value** (`retail_value`, `number`, optional): Provide an estimate of the total retail value of the inventory.
*   **Is the packaging in good condition?** (`condition_check`, `select_one`, required): Indicate if the packaging is in good condition or not.
*   **General Inventory Notes** (`inventory_notes`, `text`, optional): Enter any additional notes about the inventory.
