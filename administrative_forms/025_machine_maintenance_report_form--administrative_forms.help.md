> thinking...
This form is intended to collect data on machine maintenance activities. To confirm, the form is used to track and record information related to machine maintenance, such as maintenance activities, schedules, and statuses. I will now create a user-facing help guide based on the provided YAML fields.
# Machine Maintenance Report Form - Help Guide
## Purpose
The Machine Maintenance Report Form is used to document and track machine maintenance activities, schedules, and statuses.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form carefully and ensure you have all the required information before starting.
2. Enter your information into the corresponding fields.
3. For fields marked "optional", you can choose not to fill them in if they are not relevant to your situation.

## Field-by-Field Explanation
* **Maintenance Activity** (`maintenance_activity`, text, optional):
	+ Enter a brief description of the maintenance activity performed on the machine.
* **Machine ID** (`machine_id`, select_one, optional):
	+ Select "Yes" if the machine is currently under maintenance, "No" otherwise.
* **Scheduled Task** (`scheduled_task`, date, optional):
	+ Enter the date when the maintenance was scheduled to take place.
* **Maintenance Start Time** (`maintenance_start_time`, time, optional):
	+ Enter the start time of the maintenance activity.
* **Maintenance End Time** (`maintenance_end_time`, time, optional):
	+ Enter the end time of the maintenance activity.
* **Notes** (`notes`, note, optional):
	+ Enter any additional comments or notes related to the maintenance activity.
* **Next Task** (`next_task`, select_multiple, optional):
	+ Select "Yes" for each task that will be performed next on the machine.
* **Assigned To** (`assigned_to`, select_one, optional):
	+ Select "Yes" if the maintenance task is assigned to a specific person or team.
* **Status** (`status`, select_one, optional):
	+ Select "Active" if the maintenance task is currently active, "Inactive" otherwise.
* **Completed Status** (`completed_status`, select_one, optional):
	+ Select "Active" if the maintenance task is completed, "Inactive" otherwise.

## Tips
- Make sure to fill in all required fields to ensure accurate and complete maintenance records.
- Double-check your entries for accuracy before submitting the form.
- If you are unsure about any field, please ask a supervisor or seek clarification before completing the form. 
This guide has been written in a concise and concrete manner to ensure that users understand the purpose and usage of each field.
