<thinking>
The form "Patient Belongings Inventory Form" is intended to track and manage the belongings of patients in a healthcare setting. The form is used to record information about the patient's belongings, including the category and subcategory, item description, date and time received, value, status, and any comments or asset tags associated with the item. This form is likely used in a clinical environment to maintain accurate records and ensure patient property is properly tracked and accounted for.
</thinking>

# Patient Belongings Inventory Form - Help Guide
## Purpose
The Patient Belongings Inventory Form is used to track and manage patient property within a healthcare setting.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the category of the item from the "category" field.
2. If the item has a subcategory, choose the "subcategory" option from the list.
3. Enter a brief description of the item in the "description" field.
4. If the item was received, enter the date and time it was received using the "date_received" and "time_received" fields.
5. Enter the value of the item in the "value" field.
6. Set the status of the item from the "status" options: Active, Lost, Stolen, or Disposed.
7. Provide any additional comments in the "comments" field.
8. Select if the item has asset tags from the "asset_tags" options.

## Field-by-Field Explanation
* **Patient Belongings Form (no label)** (`patient_belongings_inventory_form`, text, required/optional): This is the form title, which is not a field to fill out, but rather the name of the form.
* **category** (`patient_belongings_form_category`, select_one, required/optional): Choose the category of the item (Electronics, Personal Items, Clothing, or Jewelry).
* **subcategory** (`patient_belongings_form_subcategory`, select_one, required/optional): If the category has subcategories, choose the subcategory for more specific classification.
* **item** (`patient_belongings_form_item`, text, required/optional): Enter a brief description of the item.
* **description** (`patient_belongings_form_description`, text, required/optional): Enter a more detailed description of the item.
* **date_received** (`patient_belongings_form_date_received`, date, required/optional): Enter the date the item was received, if applicable.
* **time_received** (`patient_belongings_form_time_received`, time, required/optional): Enter the time the item was received, if applicable.
* **value** (`patient_belongings_form_value`, number, required/optional): Enter the value or monetary worth of the item.
* **status** (`patient_belongings_form_status`, select_one, required/optional): Set the status of the item from the options: Active, Lost, Stolen, or Disposed.
* **comments** (`patient_belongings_form_comments`, text, required/optional): Enter any additional comments or notes about the item.
* **asset_tags** (`patient_belongings_form_asset_tags`, select_one, required/optional): Choose whether the item has asset tags or not.
* **Active**: Set to "Active" if the item is still available.
* **Lost**: Set to "Lost" if the item has been misplaced or lost.
* **Stolen**: Set to "Stolen" if the item has been taken without permission.
* **Disposed**: Set to "Disposed" if the item is no longer needed or useful.
* **No Tags**: Select this option if the item does not have any asset tags.
* **Asset Tags**: Select this option if the item has asset tags.
Note: Fields marked as "required/optional" may be required or optional depending on the context in which they are used. 

## Tips
* Make sure to fill out the form accurately and honestly to ensure accurate records.
* If unsure about any field, ask a healthcare professional for guidance.
* Save a copy of the completed form for future reference.
* Update the form regularly to reflect changes in item status or condition.
