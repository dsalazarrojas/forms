<thinking>...</thinking>

# offshore_wind_turbine_condition_monitoring_log - Help Guide

## Purpose
The offshore wind turbine condition monitoring log is a form used to track and record the status of offshore wind turbines. This form is used to monitor the condition of the turbines and ensure timely maintenance and repair. It's an essential tool for wind farm operators to keep track of turbine performance, maintenance schedules, and inspection reports.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the status of the turbine from the options provided. If the turbine is currently offline, select "Offline." If it's being maintained, select "In Maintenance." If it's under repair, select "In Repair." If the turbine is online and functioning normally, select "Online."
2. Provide any comments or notes about the turbine's condition in the comments field.
3. Indicate whether any issues are present with the turbine by selecting "Yes" or "No" from the options.
4. Enter the date when the issue occurred using the date picker.
5. Provide a detailed description of the issue using the issue description field.
6. Specify the resolution status of the issue by selecting "Not Resolved," "Resolved," or "In Progress."
7. Identify who resolved the issue by selecting "None," "John Doe," or "Jane Doe" from the options.
8. Indicate the priority level of the issue by selecting "Low," "Medium," or "High."
9. Select the maintenance status of the turbine by choosing "Not Scheduled," "Scheduled," "In Progress," or "Done."
10. Enter the date of the scheduled maintenance using the date picker.
11. Provide a detailed description of the maintenance work done in the maintenance description field.
12. Enter the date of the inspection using the date picker.
13. Select the name of the inspector who performed the inspection from the options.
14. Provide any notes from the inspection in the inspection notes field.

## Field-by-Field Explanation

* **turbine_status** (`turbine_status`, select_one, required): Select the status of the turbine from the options provided.
* **comments** (`comments`, note, optional): Provide any comments or notes about the turbine's condition.
* **issues** (`issues`, select_multiple, optional): Indicate whether any issues are present with the turbine by selecting "Yes" or "No" from the options.
* **issue_date** (`issue_date`, date, required): Enter the date when the issue occurred using the date picker.
* **issue_description** (`issue_description`, note, optional): Provide a detailed description of the issue.
* **resolution_status** (`resolution_status`, select_one, required): Specify the resolution status of the issue by selecting "Not Resolved," "Resolved," or "In Progress."
* **resolved_by** (`resolved_by`, select_one, required): Identify who resolved the issue by selecting "None," "John Doe," or "Jane Doe" from the options.
* **issue_priority** (`issue_priority`, select_one, required): Indicate the priority level of the issue by selecting "Low," "Medium," "High."
* **maintenance_status** (`maintenance_status`, select_one, required): Select the maintenance status of the turbine by choosing "Not Scheduled," "Scheduled," "In Progress," or "Done."
* **maintenance_date** (`maintenance_date`, date, optional): Enter the date of the scheduled maintenance using the date picker.
* **maintenance_description** (`maintenance_description`, note, optional): Provide a detailed description of the maintenance work done.
* **inspection_date** (`inspection_date`, date, optional): Enter the date of the inspection using the date picker.
* **inspector_name** (`inspector_name`, select_one, required): Select the name of the inspector who performed the inspection from the options.
* **inspection_notes** (`inspection_notes`, note, optional): Provide any notes from the inspection.
* **comments** (`comments`, note, optional): Provide any comments or notes about the turbine's condition.
* **page_2** (`page_2`, text, optional): Enter any additional information or comments about the turbine.
