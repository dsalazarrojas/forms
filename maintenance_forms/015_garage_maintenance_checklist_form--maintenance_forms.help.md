# garage_maintenance_checklist_form - Help Guide
## Purpose
This form is used to track and record garage maintenance tasks for vehicles, including the frequency, type, status, and notes about each maintenance task.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the maintenance frequency of the task (e.g. Daily, Weekly, Monthly, etc.).
2. Choose the type of maintenance task being performed (e.g. Oil Change, Tire Rotation, etc.).
3. Enter the location where the maintenance task is performed.
4. Select the status of the maintenance task (e.g. Completed, Incomplete, Not Started).
5. Add any additional comments or notes about the maintenance task.
6. Enter the date of the last maintenance task.
7. Enter the time of the last maintenance task.
8. If required, enter the vehicle maintenance frequency ID.

## Field-by-Field Explanation

* **Maintenance Frequency** (`vehicle_maintenance_frequency`, select_one):
	+ Select the frequency of the maintenance task, such as Daily, Weekly, Monthly, etc.
* **Type of Maintenance** (`vehicle_maintenance_type`, select_multiple):
	+ Choose the type of maintenance task being performed, such as Oil Change, Tire Rotation, etc.
* **Maintenance Location** (`vehicle_maintenance_location`, text):
	+ Enter the location where the maintenance task is performed.
* **Status** (`vehicle_maintenance_status`, select_one):
	+ Select the status of the maintenance task, such as Completed, Incomplete, Not Started.
* **Notes** (`vehicle_maintenance_notes`, note):
	+ Add any additional comments or notes about the maintenance task.
* **Maintenance Date** (`maintenance_date`, date):
	+ Enter the date of the last maintenance task.
* **Maintenance Time** (`maintenance_time`, time):
	+ Enter the time of the last maintenance task.
* **Vehicle Maintenance Frequency ID** (`vehicle_maintenance_frequency_id`, number):
	+ If required, enter the vehicle maintenance frequency ID.

## Tips
* Make sure to select the correct maintenance frequency and type for each task to avoid duplicates.
* Use the Notes field to add any additional comments or details about the maintenance task.
* This form is designed to be used in conjunction with other maintenance schedules or systems to provide a comprehensive maintenance record.
* If you need to schedule regular, routine maintenance tasks such as oil changes or tire rotations, you may want to consider using a separate schedule or system.
