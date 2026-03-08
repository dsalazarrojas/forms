<thinking>...</thinking>

# Septic Inspection Form - Help Guide
## Purpose
The Septic Inspection Form is designed to collect information about the condition and status of a septic system at a specific property. This form is typically used by inspectors to document their findings and provide recommendations for future maintenance and inspections.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name and address in the "Inspector Name" field.
2. Enter the property address where the septic system is located.
3. Select the correct size of the septic system from the "System Size" dropdown menu.
4. Choose the pumping frequency from the "Pumping Frequency" dropdown menu.
5. Select the last time the septic system was serviced from the "Last Service" dropdown menu.
6. Enter the date of the current inspection in the "Inspection Date" field.
7. Choose the time of the current inspection from the "Inspection Time" field.
8. Enter any notes or comments about the septic system in the "Inspector Notes" field.
9. Assess the overall condition of the septic system by selecting from the "System Condition" multi-select menu.
10. Check the status of the septic system by selecting from the "System Status" dropdown menu.
11. Select whether the septic system has a pumping device or not.
12. Indicate whether inspections are required for the septic system.
13. Select the capacity of the septic system from the "System Capacity" dropdown menu.

## Field-by-Field Explanation

* **Inspector Name** (`inspector_name`): Enter the name of the person performing the septic inspection.
* **Property Address** (`property_address`): Enter the address of the property where the septic system is located.
* **System Size** (`system_size`): Select the size of the septic system:
	+ Small
	+ Medium
	+ Large
	+ Extra Large
* **Pumping Frequency** (`pumping_frequency`): Choose how often the septic system is pumped:
	+ 1-6 months
	+ 1-12 months
	+ 1-18 months
	+ 6 months
	+ 1-2 years
* **Last Service** (`last_service`): Select the last time the septic system was serviced:
	+ 6 months
	+ 1-2 years
	+ 2 years
	+ 5 years
	+ More
* **Inspection Date** (`inspection_date`): Enter the date of the current inspection.
* **Inspection Time** (`inspection_time`): Choose the time of the current inspection:
* **Inspector Notes** (`inspector_notes`): Enter any notes or comments about the septic system.
* **System Condition** (`system_condition`): Assess the overall condition of the septic system:
	+ Good
	+ Fair
	+ Poor
* **System Status** (`system_status`): Check the status of the septic system:
	+ Inactive
	+ Active
	+ In Progress
* **Pumping Device** (`pumping_device`): Select whether the septic system has a pumping device:
	+ True
	+ False
* **Inspections Required** (`inspections_required`): Indicate whether inspections are required for the septic system:
	+ True
	+ False
* **System Capacity** (`system_capacity`): Select the capacity of the septic system:
	+ Small
	+ Medium
	+ Large
	+ Extra Large

Note: All fields with a `type` of `select_one` are dropdown menus, while fields with a `type` of `select_multiple` are multi-select menus. Note that most fields are optional, but the `Inspector Name` field is required.
