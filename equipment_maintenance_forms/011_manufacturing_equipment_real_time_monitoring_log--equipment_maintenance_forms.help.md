# Manufacturing Equipment Real-Time Monitoring Log - Help Guide
## Purpose
This form is used to log the real-time monitoring of manufacturing equipment. It provides a record of the equipment's status, performance, and any issues found during monitoring. This information helps equipment owners and operators take necessary actions to maintain optimal performance and prevent potential problems.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the manufacturing equipment ID to identify the specific equipment being monitored.
2. Check the equipment status to indicate whether it is currently active or inactive.
3. Record the current shift and start and end times for the monitoring period.
4. Report the machine's performance level as High or Low.
5. Indicate whether the equipment is in a good condition or not.
6. Enter any relevant performance data for the equipment.
7. Note any issues found during monitoring.
8. Describe any issues found during monitoring.
9. Indicate whether maintenance is needed for the equipment.
10. Enter any comments or notes about the monitoring process.
11. Enter your contact information, including email and phone number, in case of any follow-up questions or actions.

## Field-by-Field Explanation
* **Manufacturing Equipment ID** (`manufacturing_equipment_id`, select_one, required): Enter the ID of the equipment being monitored.
* **Equipment Status** (`equipment_status`, select_multiple, required): Select one or more of the options to indicate the current status of the equipment.
	+ Active: The equipment is currently in use or operational.
	+ Inactive: The equipment is not currently in use or operational.
* **Shift** (`shift`, date, required): Enter the current shift or monitoring period for the equipment.
* **Start Time** (`start_time`, time, required): Enter the start time for the monitoring period.
* **End Time** (`end_time`, time, required): Enter the end time for the monitoring period.
* **Machine Performance Level** (`machine_performance_level`, select_one, required): Select one of the options to report the equipment's performance level.
	+ High: The equipment is performing well.
	+ Low: The equipment is underperforming.
* **Equipment Condition** (`equipment_condition`, select_one, required): Select one of the options to indicate whether the equipment is in good condition or not.
	+ Yes: The equipment is in good condition.
	+ No: The equipment is not in good condition.
* **Performance Data** (`performance_data`, text, optional): Enter any relevant performance data for the equipment.
* **Issues Found** (`issues_found`, text, optional): Note any issues found during monitoring.
* **Issue Description** (`issue_description`, text, optional): Describe any issues found during monitoring.
* **Maintenance Needed** (`maintenance_needed`, select_one, required): Select one of the options to indicate whether maintenance is needed for the equipment.
	+ Yes: Maintenance is needed.
	+ No: Maintenance is not needed.
* **Comments** (`comments`, text, optional): Enter any comments or notes about the monitoring process.
* **Email** (`email`, email, optional): Enter your email address in case of any follow-up questions or actions.
* **Phone** (`phone`, text, optional): Enter your phone number in case of any follow-up questions or actions.
* **Assigned To** (`assigned_to`, select_one, optional): Select one of the options to indicate whether you are assigned to follow up on this monitoring log.
	+ Yes: You are assigned to follow up.
	+ No: You are not assigned to follow up.
