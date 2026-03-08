# team_practice_gear_reorder_form - Help Guide
## Purpose
This form is for team members to reorder practice equipment that they need for their practice sessions. 

## How To Complete This Form
To complete this form, follow these steps:
1. Review the options for the equipment you need in the "practice_equipment_needs" field.
2. Select the correct options that apply to you.
3. Enter your name in the "player_name" field.
4. Enter your phone number in the "player_phone" field (optional).
5. Specify your delivery preference in the "delivery_preference" field (optional).
6. Enter the address where you'd like to receive your reordered equipment (optional).
7. Enter the item you'd like to reorder in the "reorder_item" field.
8. Specify the quantity of the item you'd like to reorder.
9. If you know the ID of the item you'd like to reorder, enter it in the "reorder_item_id" field (optional).
10. Review your form for any errors before submitting.

## Field-by-Field Explanation

* **practice_equipment_needs** (`select_one`, required: false): Choose the equipment you need for your practice sessions. Please select the options that apply to you.
* **player_name** (`text`, required: false): Enter your name.
* **player_phone** (`text`, required: false): Enter your phone number.
* **delivery_preference** (`select_one`, required: false): Choose your delivery preference.
* **delivery_address** (`text`, required: false): Enter the delivery address where you'd like to receive your reordered equipment.
* **reorder_item** (`text`, required: false): Enter the name of the equipment you'd like to reorder.
* **quantity** (`number`, required: false): Specify the quantity of the equipment you'd like to reorder.
* **reorder_item_id** (`text`, required: false): If you know the ID of the equipment, enter it here.
