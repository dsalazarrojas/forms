<thinking>
To ensure the form is filled out correctly and consistently, we first need to check that this form is being used for its intended purpose and that the data is not being duplicated. This form is meant to record information about restaurant inventory, including location, item, date, quantity, unit price, total value, notes, restaurant details, and check type. It's essential to complete all required fields and ensure that the restaurant details (e.g., name, address, phone, email, hours) are accurate and up-to-date.
</thinking>

# Restaurant Inventory Information Record Form - Help Guide
## Purpose
This form is designed to record and track restaurant inventory information, including location, items, dates, quantities, and financial details.

## How To Complete This Form
1.  Ensure you are on the correct page, "restaurant_information_record", as indicated by the label.
2.  Review each field carefully to ensure you understand the information required.
3.  Select the "inventory_location" option that best matches your current location (e.g., Warehouse, Kitchen, Receiving Dock).
4.  Enter the "inventory_item" or select it from the dropdown options.
5.  Enter the "date" (MM/DD/YYYY format) of the inventory record.
6.  Enter the "quantity" of the inventory item.
7.  Enter the "unit_price" and "total_value" of the inventory item.
8.  Add any relevant "notes" regarding the inventory item or record.
9.  Select the "inventory_check" type that best describes this record (Stock Take, Inventory Count, Inventory Check, Cycle Count).
10.  If necessary, provide "notes" regarding the restaurant's hours.
11.  Complete all "restaurant_details" fields (name, address, phone, email, hours) with accurate and up-to-date information.

## Field-by-Field Explanation

* **Restaurant Information Record**:
	+ Type: text
	+ Required: false
	+ Description: Enter a brief description or title for this inventory record.
* **Inventory Location**:
	+ Type: select_multiple
	+ Required: true
	+ Options: Warehouse, Kitchen, Receiving Dock
	+ Description: Select the current location of the inventory item.
* **Inventory Item**:
	+ Type: text
	+ Required: false
	+ Description: Enter the name or description of the inventory item.
* **Date**:
	+ Type: date
	+ Required: false
	+ Description: Enter the date (MM/DD/YYYY) of the inventory record.
* **Quantity**:
	+ Type: number
	+ Required: false
	+ Description: Enter the quantity of the inventory item.
* **Unit Price**:
	+ Type: number
	+ Required: false
	+ Description: Enter the unit price of the inventory item.
* **Total Value**:
	+ Type: number
	+ Required: false
	+ Description: Enter the total value of the inventory item.
* **Notes**:
	+ Type: note
	+ Required: false
	+ Description: Add any additional notes or comments regarding the inventory item or record.
* **Restaurant Name**:
	+ Type: text
	+ Required: false
	+ Description: Enter the name of the restaurant.
* **Restaurant Address**:
	+ Type: text
	+ Required: false
	+ Description: Enter the address of the restaurant.
* **Restaurant Phone**:
	+ Type: text
	+ Required: false
	+ Description: Enter the phone number of the restaurant.
* **Restaurant Email**:
	+ Type: email
	+ Required: false
	+ Description: Enter the email address of the restaurant.
* **Restaurant Hours**:
	+ Type: text
	+ Required: false
	+ Description: Enter the hours of operation for the restaurant.
* **Restaurant Hours Note**:
	+ Type: note
	+ Required: false
	+ Description: Add any additional notes or comments regarding the restaurant's hours.
* **Inventory Check**:
	+ Type: select_one
	+ Required: true
	+ Options: Stock Take, Inventory Count, Inventory Check, Cycle Count
	+ Description: Select the type of inventory check being performed.
