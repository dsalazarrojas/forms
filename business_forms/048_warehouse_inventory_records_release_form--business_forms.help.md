# warehouse-inventory-records-release-form - Help Guide
## Purpose
This form is used to document the release of items from stock in the warehouse. It is designed to provide a clear and concise record of the release date, item number, current item status, the person releasing the item, and any relevant notes related to the release.

## How To Complete This Form
1. Click on the "Submit" button to begin.
2. Select a "Release Date" for the item being released by clicking on the date field or typing in the date in a format that is commonly used (mm/dd/yyyy).
3. Enter a "Item Number" of the item being released by typing in its corresponding identifier.
4. Select the current "Item Status" of the item being released using the dropdown menu.
   - "Available": Item is available for release.
   - "Reserved": Item is temporarily reserved for use.
   - "Released": Item has been released and is no longer in stock.
5. Enter the "Release Person" responsible for releasing the item.
6. Enter any "Release Notes" related to the release of the item.

## Field-by-Field Explanation

* **Release Date** (`release_date`, `date`, required/optional): Enter the date of release or the date when the item was released from stock.
* **Item Number** (`item_number`, `text`, required/optional): Enter the identifier number of the item being released.
* **Item Status** (`item_status`, `select_one`, required/optional): Select the status of the item after release.
* **Release Person** (`release_person`, `text`, required/optional): Enter the name of the person responsible for releasing the item.
* **Release Notes** (`release_notes`, `text`, required/optional): Enter any relevant notes or comments related to the release of the item.

## Tips
* Be sure to fill out all required fields for accurate tracking and reporting.
* Review your entries before submitting to ensure accuracy.
