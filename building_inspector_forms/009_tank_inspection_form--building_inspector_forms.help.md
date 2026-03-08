<thinking>...</thinking>

# Tank Inspection Form - Help Guide

## Purpose
The Tank Inspection Form is used to collect information about a tank's condition, inspection results, and other relevant details. This form is designed to help inspectors efficiently gather data while conducting tank inspections. By filling out this form, inspectors can provide a comprehensive picture of the tank's status, including its cleanliness, condition, and other critical factors.

## How To Complete This Form
To complete the tank inspection form, follow these steps:

1. Provide general information about the tank, including its location.
2. Enter details about the tank, such as its size, material, and type.
3. Report the results of the inspection, including whether the tank is clean or not.
4. Record the tank's condition and any notable issues.
5. Enter the tank's level and other relevant data.
6. Select the tank's material and type.
7. Choose the inspection date and time.
8. Assign the inspection to a specific inspector.
9. Enter any comments or notes about the inspection.
10. Record the tank's location, capacity, usage, and operation status.
11. Specify the tank inspection frequency.
12. Enter the date of the last inspection.
13. Record the name of the last inspector.
14. Select the result of the last inspection.
15. Enter any comments about the last inspection.
16. Record any notes about the last inspection.

## Field-by-Field Explanation

* **Tank Location (14)** (`tank_location`, `text`, required/optional): Enter the location of the tank, such as its room number or building number.
* **Tank Size (7)** (`tank_size`, `number`, required/optional): Enter the size of the tank.
* **Tank Type (8)** (`tank_type`, `select_one`, required/optional): Select the type of tank, such as Steel or Aluminum.
* **Tank Material (6)** (`tank_material`, `text`, required/optional): Enter the material of the tank.
* **Tank Condition (4)** (`tank_condition`, `text`, required/optional): Record the condition of the tank, including any notable issues.
* **Tank Level (5)** (`tank_level`, `number`, required/optional): Enter the level of the tank.
* **Tank Operation Status (17)** (`tank_operation_status`, `text`, required/optional): Record the tank's operation status, such as "In use" or "Not in use".
* **Tank Usage (16)** (`tank_usage`, `text`, required/optional): Enter the usage of the tank.
* **Tank Inspection Frequency (18)** (`tank_inspection_frequency`, `text`, required/optional): Specify the tank inspection frequency, such as "Daily", "Weekly", or "Monthly".
* **Tank Inspection Last Date (19)** (`tank_inspection_last_date`, `date`, required/optional): Enter the date of the last inspection.
* **Tank Inspection Last Inspector (20)** (`tank_inspection_last_inspector`, `text`, required/optional): Record the name of the last inspector.
* **Tank Inspection Last Result (21)** (`tank_inspection_last_result`, `select_one`, required/optional): Select the result of the last inspection, such as "Pass" or "Fail".
* **Tank Inspection Last Comments (22)** (`tank_inspection_last_comments`, `text`, required/optional): Enter any comments about the last inspection.
* **Tank Inspection Last Notes (23)** (`tank_inspection_last_notes`, `note`, required/optional): Record any notes about the last inspection.
* **Tank Inspection Form Fields (1-13)** (`general_info`, `tank_details`, `inspection_results`, `tank_condition`, `tank_level`, `tank_material`, `tank_size`, `tank_type`, `inspection_date`, `assigned_inspector`, `comments`, `notes`, `tank_location`, `tank_capacity`, `tank_usage`, `tank_operation_status`, `tank_inspection_frequency`, `tank_inspection_last_date`, `tank_inspection_last_inspector`, `tank_inspection_last_result`, `tank_inspection_last_comments`, `tank_inspection_last_notes`, ): The remaining fields are general information and inspection details about the tank.
