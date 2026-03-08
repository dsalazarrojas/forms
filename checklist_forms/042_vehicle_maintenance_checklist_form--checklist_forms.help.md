# vehicle_maintenance_checklist_form - Help Guide
## Purpose
The vehicle_maintenance_checklist_form is used to track and record the maintenance status of company vehicles.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill out the "Vehicle Make" field with the make of the vehicle.
2. Enter the "Vehicle Year" in the year the vehicle was manufactured.
3. In the "Maintenance Tasks" field, select all maintenance tasks that apply to the vehicle.
4. In the "Description" field, provide a brief description of the maintenance tasks selected.
5. Enter the "Maintenance Date" in the date the maintenance tasks were completed.
6. If applicable, enter the "Maintenance Time" in the time the maintenance tasks were completed.
7. In the "Assigned Tool" field, enter the tool used to complete the maintenance tasks (optional).
8. In the "Vehicle Maintenance Status" field, select the current maintenance status of the vehicle (if not active or inactive, the form should not be filled out).

## Field-by-Field Explanation
* **Vehicle Make** (`vehicle_make`, `text`, required: false): Enter the make of the vehicle.
* **Vehicle Year** (`vehicle_year`, `number`, required: true): Enter the year the vehicle was manufactured.
* **Maintenance Tasks** (`maintenance_tasks`, `select_multiple`, required: true): Select all maintenance tasks that apply to the vehicle.
* **Description** (`maintenance_tasks_description`, `text`, required: false): Provide a brief description of the maintenance tasks selected.
* **Maintenance Date** (`maintenance_date`, `date`, required: true): Enter the date the maintenance tasks were completed.
* **Maintenance Time** (`maintenance_time`, `time`, required: false): Enter the time the maintenance tasks were completed.
* **Assigned Tool** (`assigned_tool`, `text`, required: false): Enter the tool used to complete the maintenance tasks (if not applicable, leave blank).
* **Vehicle Maintenance Status** (`vehicle_maintenance_status`, `select_one`, required: false): Select the current maintenance status of the vehicle.
