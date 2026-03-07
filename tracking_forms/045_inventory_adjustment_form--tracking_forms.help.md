thinking
  - this form is intended to track inventory adjustments made to specific items.
  - the form is used for tracking adjustments in real-time and will be used by various team members with different access rights.
  - this document will be used to explain the purpose and completion procedures of the form to end users.
</thinking>
 
# Inventory Adjustment Form - Help Guide
## Purpose
The Inventory Adjustment Form is used to track inventory adjustments made to specific items. This form is used by team members to record adjustments in real-time, ensuring accurate and up-to-date inventory records.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter the Item ID to associate the adjustment with the specific item being adjusted.
2. Enter the User ID of the team member making the adjustment.
3. Select the Adjustment Date and time of the adjustment from the calendar picker or manually enter the date and time in the correct format (YYYY-MM-DD for date and HH:MM:SS for time).
4. Choose the Adjustment Type from the list of available options (Add, Remove, or Edit).
5. Enter the new quantity of the item after the adjustment.
6. Enter the new value of the item after the adjustment.
7. Optionally, provide an Adjustment Note to explain the reason for the adjustment.

## Field-by-Field Explanation
* **Item ID** (`item_id`, number, required): Enter the ID of the item being adjusted.
* **User ID** (`user_id`, number, required): Enter the ID of the team member making the adjustment.
* **Adjustment Date** (`adjustment_date`, date, required): Enter the date and time of the adjustment in the format YYYY-MM-DD.
* **Adjustment Time** (`adjustment_time`, time, required): Enter the time of the adjustment in the format HH:MM:SS.
* **Adjustment Type** (`adjustment_type`, select_multiple, required): Choose the type of adjustment made to the item (Add, Remove, or Edit).
* **Quantity** (`quantity`, number, optional): Enter the new quantity of the item after the adjustment.
* **Previous Value** (`previous_value`, number, optional): Enter the previous value of the item before the adjustment.
* **New Value** (`new_value`, number, optional): Enter the new value of the item after the adjustment.
* **Adjustment Note** (`adjustment_note`, note, optional): Optionally provide a note explaining the reason for the adjustment.
