# po_request_form - Help Guide
## Purpose
The "po_request_form" is a form used to collect information about Purchase Orders (POs) for new orders. It ensures that all necessary details are gathered to facilitate the processing and management of these orders.

## How To Complete This Form
1. Select a date for the order from the calendar picker.
2. Enter the name of the supplier.
3. Choose the type of order (Yes or No).
4. Select the status of the order (Active or Inactive).
5. Add any relevant notes about the order.

## Field-by-Field Explanation
- **Order Date** (`order_date`, date): Enter the date when the order is due.
- **Supplier Name** (`supplier_name`, text): Enter the name of the supplier providing the goods or services.
- **Order Type** (`order_type`, select_one): Choose the type of order you are requesting (Yes or No).
	+ Select "Yes" for orders you are requesting.
	+ Select "No" for orders you are not requesting.
- **Status** (`status`, select_multiple): Choose the status of the order (Active or Inactive).
	+ Select "Active" for active orders.
	+ Select "Inactive" for inactive orders.
- **Notes** (`notes`, note): Add any additional information about the order.
