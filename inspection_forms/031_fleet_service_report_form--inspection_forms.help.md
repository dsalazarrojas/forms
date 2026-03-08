# Fleet Service Report Form - Help Guide
## Purpose
The Fleet Service Report Form is designed to gather information about a vehicle's service needs, maintenance history, and current status. This form helps fleet managers and service personnel to:

* Track service needs and due dates
* Record maintenance descriptions and comments
* Monitor vehicle mileage and inspection dates
* Identify service levels (High, Low)

## How To Complete This Form

To complete this form, follow these steps:

1. Select the correct service level for the vehicle (High, Low, or No)
2. Enter the fleet number of the vehicle (if applicable)
3. Provide a brief description of the maintenance needed or performed (in the Maintenance Description field)
4. Record the date of the last inspection (if applicable)
5. Enter the next inspection due date (if applicable)
6. Specify the location of the last inspection (if applicable)
7. Enter the mileage reading (if applicable)
8. Add any additional comments or notes about the vehicle's service status

## Field-by-Field Explanation

* **Service Needed** (`service_needed`, `select_one`, required: false): Select "Yes" if the vehicle requires service, otherwise select "No".
* **Fleet Number** (`fleet_number`, `number`, required: false): Enter the fleet number of the vehicle, if applicable.
* **Vehicle Number** (`vehicle_number`, `number`, required: false): Enter the vehicle number, if applicable.
* **Maintenance Description** (`maintenance_description`, `text`, required: false): Provide a brief description of the maintenance needed or performed.
* **Mileage** (`mileage`, `number`, required: false): Record the current mileage reading of the vehicle.
* **Date Of Last Inspection** (`date_of_last_inspection`, `date`, required: false): Enter the date of the last inspection (if applicable).
* **Next Inspection Due Date** (`next_inspection_due_date`, `date`, required: false): Enter the next inspection due date (if applicable).
* **Location Of Last Inspection** (`location_of_last_inspection`, `text`, required: false): Specify the location of the last inspection (if applicable).
* **Service Level** (`service_level`, `select_multiple`, required: false): Select one or more service levels (High, Low) to indicate the vehicle's service status.
* **Comments** (`comments`, `note`, required: false): Add any additional comments or notes about the vehicle's service status.

Note: All fields are optional unless marked as "required" in the form schema.
