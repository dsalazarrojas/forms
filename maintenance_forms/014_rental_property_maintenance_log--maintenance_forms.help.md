# rental_property_maintenance_log - Help Guide
## Purpose
This form is used to record and track maintenance activities for rental properties. It is an essential tool for property managers, maintenance staff, or facility managers to keep a record of maintenance work orders, track progress, and ensure timely completion of tasks.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the "maintenance_type" field to indicate the type of maintenance activity (e.g., Rental Property Inspection, General Maintenance, Lease Violation, or Other).
2. Enter a brief "description" of the maintenance activity.
3. Set the "date" of when the maintenance activity took place.
4. Specify the "start_time" and "end_time" of the maintenance activity (if applicable).
5. Identify the "assigned_to" personnel or team member responsible for the maintenance task.
6. Choose the "priority" level of the maintenance activity (High, Medium, or Low).
7. Select the "status" of the maintenance activity (Open, Resolved, On-going, or Closed).
8. If the maintenance activity has already been completed, enter the "completed_date".
## Field-by-Field Explanation
### General 
* **General** (`general`, `text`, required: false): This field is a free-form text area where you can enter a brief note about the maintenance activity.
### Description 
* **Description** (`description`, `text`, required: false): Enter a detailed description of the maintenance activity.
### Date 
* **Date** (`date`, `date`, required: false): Enter the date when the maintenance activity took place.
### Start Time 
* **Start Time** (`start_time`, `time`, required: false): Specify the start time of the maintenance activity (if applicable).
### End Time 
* **End Time** (`end_time`, `time`, required: false): Enter the end time of the maintenance activity (if applicable).
### Assigned To 
* **Assigned To** (`assigned_to`, `text`, required: false): Identify the personnel or team member responsible for the maintenance task.
### Maintenance Type 
* **Maintenance Type** (`maintenance_type`, `select_one`, required: false): Select one of the following options:
	+ Rental Property Inspection
	+ General Maintenance
	+ Lease Violation
	+ Other
### Maintenance Description 
* **Maintenance Description** (`maintenance_description`, `note`, required: false): Enter a detailed description of the maintenance activity.
### Priority 
* **Priority** (`priority`, `select_one`, required: false): Choose the priority level of the maintenance activity:
	+ High
	+ Medium
	+ Low
### Status 
* **Status** (`status`, `select_one`, required: false): Select one of the following options:
	+ Open
	+ Resolved
	+ On-going
	+ Closed
### Completed Date 
* **Completed Date** (`completed_date`, `date`, required: false): Enter the date when the maintenance activity was completed (if applicable).

## Tips
* Use this form to keep accurate and up-to-date records of maintenance activities for rental properties.
* Ensure that all relevant fields are filled in to ensure accurate tracking and reporting of maintenance tasks.
* If a maintenance activity is not completed, mark the "status" field as "On-going" to indicate ongoing work.
