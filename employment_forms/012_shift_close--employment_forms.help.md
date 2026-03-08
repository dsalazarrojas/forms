<thinking>...</thinking>

# Shift Close - Help Guide
## Purpose
The Shift Close form is a critical documentation tool used to capture the details of each shift, including employee information, sales data, inventory management, and other relevant details. This form ensures that all necessary information is accurately recorded and stored for future reference.

## How To Complete This Form

### Step 1: Fill in the required fields
Complete all the required fields in the form, which are marked with an asterisk (\*). These fields include:
* Employee Name
* Shift Start Time
* Shift End Time
* Shift Duration
* Sales Amount
* Total Items Sold
* Total Refunds
* Inventory In
* Inventory Out
* Sales Tax
* Sales Total
* Shift Number
* Total Discounts
* Total Refund Amount
* Total Surcharges
* Shift ID
* Shift Type
* Manager Name
* Shift Number

### Step 2: Fill in the optional fields
Fill in the optional fields, which are:
* Shift Notes
* Manager Signature
* Employee Signature
* Date
* Notes

### Step 3: Select the correct options
For the select_one and select_multiple fields, choose the correct options from the dropdown menu. For example:
* Shift Type: Select "Shift" or "Close"
* Employee Name: Select John or Doe
* Inventory In: Select Item 1, Item 2, or Item 3
* Shift Number: Select the correct shift number

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, `text`, *required*): Enter the name of the employee working the shift.
* **Shift Start Time** (`shift_start_time`, `time`, *required*): Enter the start time of the shift.
* **Shift End Time** (`shift_end_time`, `time`, *required*): Enter the end time of the shift.
* **Shift Duration** (`shift_duration`, `number`, *required*): Enter the duration of the shift in minutes.
* **Sales Amount** (`sales_amount`, `number`, *required*): Enter the total sales amount for the shift.
* **Total Items Sold** (`total_items_sold`, `number`, *required*): Enter the total number of items sold during the shift.
* **Total Refunds** (`total_refunds`, `number`, *required*): Enter the total refund amount for the shift.
* **Inventory In** (`inventory_in`, `select_multiple`, *required*): Select the items that were received as inventory during the shift.
* **Inventory Out** (`inventory_out`, `select_multiple`, *required*): Select the items that were sold out during the shift.
* **Sales Tax** (`sales_tax`, `number`, *required*): Enter the sales tax amount for the shift.
* **Sales Total** (`sales_total`, `number`, *required*): Enter the total sales amount including tax for the shift.
* **Shift Number** (`shift_number`, `text`, *required*): Enter the shift number.
* **Total Discounts** (`total_discounts`, `number`, *required*): Enter the total discount amount for the shift.
* **Total Refund Amount** (`total_refund_amount`, `number`, *required*): Enter the total refund amount for the shift.
* **Total Surcharges** (`total_surcharges`, `number`, *required*): Enter the total surcharge amount for the shift.
* **Shift ID** (`shift_id`, `text`, *required*): Enter the shift ID.
* **Shift Type** (`shift_type`, `select_one`, *required*): Select "Shift" or "Close".
* **Manager Name** (`manager_name`, `text`, *required*): Enter the manager's name.
* **Shift Notes** (`shift_notes`, `note`, *optional*): Enter any additional notes about the shift.
* **Manager Signature** (`manager_signature`, `text`, *optional*): Enter the manager's signature.
* **Employee Signature** (`employee_signature`, `text`, *optional*): Enter the employee's signature.
* **Date** (`date`, `date`, *optional*): Enter the date of the shift.
* **Notes** (`notes`, `note`, *optional*): Enter any additional notes about the shift.

### Tips
* Make sure to fill in all required fields before submitting the form.
* Double-check the calculations for accuracy.
* Use the select_one and select_multiple fields to select the correct options.
* If you need to add or remove items from the inventory, use the shift notes field to record the details.
