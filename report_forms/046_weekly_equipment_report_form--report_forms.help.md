# Weekly Equipment Report Form - Help Guide
## Purpose
The Weekly Equipment Report Form is a tool used to collect information about the status of equipment within the organization. This report helps to track and monitor equipment availability, maintenance, and other relevant updates. It can be used by various teams and personnel to identify potential issues, schedule maintenance, and optimize resource allocation.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the ID of the equipment being reported on.
2. Provide the name of the equipment being reported on.
3. Specify the location of the equipment.
4. Choose the current status of the equipment (e.g., Equipment Available, Equipment Under Maintenance, or Equipment Offline).
5. Add any additional comments about the equipment status.
6. Enter the name of the person submitting the report.
7. Select a date for the report.
8. Enter the name of the person or department assigned to handle the equipment issue.
9. Submit the form to generate the report.

## Field-by-Field Explanation

* **equipment_id** (`equipment_id`, number, required): This is the unique identifier assigned to the equipment.
* **equipment_name** (`equipment_name`, text, required): Enter the name of the equipment being reported on.
* **location** (`location`, text, required): Specify the location where the equipment is currently situated.
* **status** (`status`, select_one, required): Select one of the available options (Equipment Available, Equipment Under Maintenance, or Equipment Offline) to indicate the current status of the equipment.
* **comments** (`comments`, text, optional): Add any additional comments or information about the equipment status.
* **submitted_by** (`submitted_by`, text, required): Enter the name of the person submitting the report.
* **submitted_on** (`submitted_on`, date, required): Select a date for the report submission.
* **assigned_to** (`assigned_to`, text, optional): Enter the name of the person or department assigned to handle the equipment issue.
