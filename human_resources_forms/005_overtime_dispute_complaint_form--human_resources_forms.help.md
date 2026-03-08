# Overtime Dispute Complaint Form - Help Guide

## Purpose
The Overtime Dispute Complaint Form is used to report any issues or discrepancies that may have occurred during the overtime hours worked. This form will help the HR department to investigate and resolve the dispute efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your employee name and your manager's name in the respective fields.
2. Select your department from the list of options.
3. Enter the start and end times of your shift, if applicable.
4. Provide the total number of hours you worked and the actual hours you worked, if different.
5. Select the date you made the overtime request, if applicable.
6. Provide a detailed description of the issue or dispute you are reporting.
7. Choose how you would like the dispute to be resolved (Pending or Resolved).

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your name as it appears on your ID badge or personnel record.
* **Manager Name** (`manager_name`, text, required): Enter the name of your direct supervisor or manager.
* **Department** (`department`, select_multiple, optional): Select your department from the list of options. If you are in a different department, select "Other" and enter the department in the notes field.
* **Shift Start** (`shift_start`, time, optional): If you worked a shift with a specific start time, enter it here. If not applicable, leave blank.
* **Shift End** (`shift_end`, time, optional): If you worked a shift with a specific end time, enter it here. If not applicable, leave blank.
* **Work Hours** (`work_hours`, number, optional): Enter the total number of hours you were scheduled to work. If not applicable, leave blank.
* **Hours Worked** (`hours_worked`, number, optional): If the actual hours you worked were different from your schedule, enter the actual hours here. If not applicable, leave blank.
* **Overtime Request Date** (`overtime_request_date`, date, optional): If you made an overtime request, enter the date you submitted it. If not applicable, leave blank.
* **Overtime Dispute Description** (`overtime_dispute_description`, text, required): Provide a detailed description of the issue or dispute you are reporting.
* **Dispute Resolution** (`dispute_resolution`, select_one, required): Select how you would like the dispute to be resolved.
