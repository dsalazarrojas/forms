# Item Entry And Exit Form - Help Guide
## Purpose
The "Item Entry And Exit Form" is used to collect and update item information, including details such as item description, price, category, and status. This form helps in maintaining accurate and up-to-date records.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the necessary fields with accurate and relevant information.
2. Make sure to complete all required fields (if applicable).
3. Review and submit the form for review and approval.

## Field-by-Field Explanation

* **Item entry** (`item_entry_page`, text, required:false): Enter the item name or description.
* **Item exit** (`item_exit_page`, text, required:false): Enter the item name or description for items being removed or modified.
* **Item description** (`item_description`, text, required:false): Describe the item in detail.
* **Item price** (`item_price`, number, required:false): Enter the price of the item.
* **Item category** (`item_category`, select_one, required:false): Select a category for the item from the options provided. 
  Example: Category 1, Category 2, Category 3.
* **Item submitted by** (`item_submitted_by`, select_multiple, required:false): Select multiple users or departments that submitted the item.
  Example: Person A, Person B, Person C.
* **Item date** (`item_date`, date, required:false): Enter the date in YYYY-MM-DD format. 
  Example: 2023-02-15.
* **Item time** (`item_time`, time, required:false): Enter the time in HH:MM AM/PM format. 
  Example: 12:45 PM.
* **Item email** (`item_email`, email, required:false): Enter the email address associated with the item.
* **Item phone** (`item_phone`, text, required:false): Enter the phone number associated with the item.
* **Item address** (`item_address`, text, required:false): Enter the address associated with the item.
* **Item notes** (`item_notes`, text, required:false): Enter any additional notes about the item.
* **Item status** (`item_status`, select_one, required:false): Select the status of the item from the options provided. 
  Example: active, inactive, pending.
