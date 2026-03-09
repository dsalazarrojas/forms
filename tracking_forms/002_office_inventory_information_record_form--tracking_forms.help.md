# Office Inventory Information Record Form - Help Guide
## Purpose
This form is designed to collect and record information about office inventory items for tracking and maintenance purposes.

## How To Complete This Form
To complete this form, follow these steps:

* Fill in the category of the item.
* Provide a brief description of the item.
* Enter the quantity of the item.
* Enter the cost of the item (if applicable).
* Specify the location where the item is stored or used.
* Enter the asset tag associated with the item (if applicable).
* Enter the serial number associated with the item (if applicable).
* Select the status of the asset (active or inactive).

## Field-by-Field Explanation

* **Office Inventory Information** (`office_inventory_information_form`, text, required: false): This is the main section where you will provide a brief description of the office inventory item.
* **Category** (`category`, select_one, required: false): Choose the category that best describes the type of item.
* **Item Type** (`item_type`, select_one, required: false): Check if the item is yes or no.
* **Quantity** (`quantity`, number, required: false): Enter the number of items you have.
* **Cost** (`cost`, number, required: false): Enter the cost of the item (if applicable).
* **Location** (`location`, text, required: false): Specify where the item is stored or used.
* **Asset Tag** (`asset_tag`, text, required: false): If the item has an asset tag, enter it here.
* **Serial Number** (`serial_number`, text, required: false): If the item has a serial number, enter it here.
* **Asset Status** (`asset_status`, select_multiple, required: false): Select the status of the asset as active or inactive.

Note: All fields are optional, but please ensure that all required fields are filled to maintain accurate records.
