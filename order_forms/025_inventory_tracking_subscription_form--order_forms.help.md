# inventory_tracking_subscription_form - Help Guide
## Purpose
The inventory tracking subscription form is used to track inventory tracking data for stock items, vendors, and inventory levels.
## How To Complete This Form
1. Fill in the required fields as accurately and completely as possible.
2. Enter the stock item's details, including its description and vendor information (name and email).
3. Choose the stock levels (Low, High) and statuses (Active/Inactive) for the stock item.
4. Select the stock status (High, Low) and reorder level for the stock item.
5. Enter the next ordered date and last ordered date for the stock item.
## Field-by-Field Explanation
* **Stock Item** (`stock_item`, `text`, required): Enter the name of the stock item.
* **Description** (`stock_item_description`, `text`, required): Enter a brief description of the stock item.
* **Vendor ID** (`vendor_id`, `text`, required): Enter the vendor's ID number.
* **Vendor** (`vendor_name`, `text`, required): Enter the name of the vendor.
* **Email** (`vendor_email`, `email`, required): Enter the vendor's email address.
* **Phone** (`vendor_phone`, `text`, required): Enter the vendor's phone number.
* **Stock Level** (`stock_level`, `number`, required): Set the stock level for the stock item (Low, High).
* **Active/Inactive** (`stock_status_active`, `select_one`, required): Set the status of the stock item (Active, Inactive).
* **Status (Active/Inactive)** (`stock_status_inactive`, `select_multiple`, required): Select the status of the stock item (Active, Inactive).
* **Last Ordered** (`last_ordered`, `date`, required): Enter the last ordered date for the stock item.
* **Next Ordered** (`next_ordered`, `date`, required): Enter the next ordered date for the stock item.
* **Reorder Level** (`reorder_level`, `number`, required): Set the reorder level for the stock item.
* **Stock Status** (`stock_status`, `select_one`, required): Set the stock status (High, Low).
* **Stock Status2** (`stock_status2`, `select_one`, required): Set the second stock status (High, Low).
* **Stock Level Active** (`stock_level_active`, `select_multiple`, required): Select the stock level active (Active, Inactive).
* **Stock Level Low** (`stock_level_low`, `select_multiple`, required): Select the stock level low (Low, High).
* **Stock Item Low** (`stock_item_low`, `select_one`, required): Select the stock item low (Low, High).
* **Stock Item Active** (`stock_item_active`, `select_one`, required): Select the stock item active (High, Low).
## Tips
* Make sure to fill out all required fields accurately and completely.
* Double-check the stock levels and statuses before submitting the form.
* If you're unsure about any field, consult with your team or manager for guidance.
