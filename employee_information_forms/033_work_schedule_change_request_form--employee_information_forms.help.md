<thinking>Before proceeding to create the user-facing help guide, I need to confirm that the form purpose is to collect information for an employee's schedule change request, likely for HR or payroll purposes. This form seems to be a straightforward data collection tool used to update employee schedules. It's essential to note that the form is likely intended for internal use only, as there are no explicit external-facing fields. To confirm, the form's internal purpose is to gather details about employee schedule changes, which might include employee ID, name, shift number, start and end times, date, and possibly reason for change. Additionally, the form appears to require manager approval and a potential manager note for further clarification or rejection. I'll make sure to keep this in mind as I create the user-facing help guide to ensure it accurately conveys the form's purpose and usage.</thinking>

# Work Schedule Change Request Form - Help Guide
## Purpose
This form is used to submit a schedule change request for an employee's work schedule. Please fill out the form to provide necessary information for processing your request.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Employee ID, which can be found on your HR record or ID badge.
2. Enter your name as it appears on your official personnel file.
3. If applicable, select the Shift Number you wish to change.
4. Enter your new start time for the shift.
5. Enter your new end time for the shift.
6. Select the Date for the schedule change.
7. Briefly describe the Reason for the schedule change.
8. Choose the Manager Approval status:
	* Approved: Schedule change is approved.
	* Denied: Schedule change is denied.
	* Pending: Schedule change is pending further review.
9. If applicable, include a Manager Note for further clarification or explanation.

## Field-by-Field Explanation
* **Employee ID** (`employee_id`, `number`, required): Enter your unique employee ID as found on your HR record or ID badge.
* **Employee Name** (`employee_name`, `text`, required): Enter your name as it appears on your official personnel file.
* **Shift Number** (`shift_number`, `number`, optional): If applicable, select the Shift Number you wish to change.
* **Start Time** (`start_time`, `time`, required): Enter the new start time for the shift.
* **End Time** (`end_time`, `time`, required): Enter the new end time for the shift.
* **Date** (`date`, `date`, required): Select the Date for the schedule change.
* **Reason** (`reason`, `text`, optional): Briefly describe the Reason for the schedule change.
* **Manager Approval** (`manager_approval`, `select_one`, required): Choose the Manager Approval status:
	+ Approved: Schedule change is approved.
	+ Denied: Schedule change is denied.
	+ Pending: Schedule change is pending further review.
* **Manager Note** (`manager_note`, `note`, optional): If applicable, include a Manager Note for further clarification or explanation.
