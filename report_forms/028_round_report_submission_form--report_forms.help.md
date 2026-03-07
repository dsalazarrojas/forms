<thinking>
To be honest, the form purpose and design seems to be focused on collecting data for reporting on employee work hours, shifts, and other work-related information. However, without more context, it's hard to pinpoint the exact business logic and requirements behind this form. I'll do my best to interpret the provided YAML and create a helpful guide for the end-users.
</thinking>

# Round Report Submission Form - Help Guide
## Purpose
The Round Report Submission Form is designed for collecting employee work-related information, including shifts, hours, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a title for the report in the **Form Title** field.
2. Select the **Date Shift** and **Time Shift** fields to specify the shift dates and times.
3. Enter the **Manager Name**, **Employee Names**, and **Employee IDs** as required.
4. Specify the **Department** the employee works in.
5. Enter **Shift Notes** to add any additional comments or details.
6. Enter the **Shift Start Time** and **Shift End Time**.
7. Enter the **Total Hours Worked**, **Break Start Time**, **Break End Time**, and **Break Duration**.
8. Specify whether the employee has had **Time Off** or not.
9. Enter any additional **Notes**.
10. Enter the employee's **Email** and **Phone Number**.
11. Enter the manager's **Email** and **Phone Number**.
12. Verify the information and click the **Submit** button.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, required): Enter a title for the report.
* **Date Shift** (`date_shift`, date, required): Select the date of the shift.
* **Time Shift** (`time_shift`, time, required): Select the time of the shift.
* **Manager Name** (`manager_name`, text, required): Enter the name of the manager.
* **Employee Names** (`employee_names`, text, required): Enter the names of all employees involved.
* **Employee IDs** (`employee_ids`, text, required): Enter the IDs of all employees involved.
* **Department** (`department`, text, required): Enter the department the employee works in.
* **Shift Notes** (`shift_notes`, note, required): Enter any additional comments or details about the shift.
* **Shift Start Time** (`shift_start_time`, time, required): Enter the start time of the shift.
* **Shift End Time** (`shift_end_time`, time, required): Enter the end time of the shift.
* **Total Hours Worked** (`total_hours_worked`, number, required): Enter the total hours worked during the shift.
* **Break Start Time** (`break_start_time`, time, required): Enter the start time of the break.
* **Break End Time** (`break_end_time`, time, required): Enter the end time of the break.
* **Break Duration** (`break_duration`, time, required): Enter the duration of the break.
* **Overtime Hours** (`overtime_hours`, number, required): Enter any overtime hours worked.
* **Shift Duty Hours** (`shift_duty_hours`, number, required): Enter any shift duty hours.
* **Time Off** (`time_off`, select_one, required): Specify whether the employee had time off or not.
* **Notes** (`notes`, note, required): Enter any additional comments or details.
* **Email** (`email`, email, required): Enter the employee's email address.
* **Phone** (`phone`, text, required): Enter the employee's phone number.
* **Manager Phone** (`manager_phone`, text, required): Enter the manager's phone number.
* **Manager Email** (`manager_email`, email, required): Enter the manager's email address.
* **Submit** (`submit`, text, required): Click the submit button to save the report.

Note: This guide is based on the provided YAML and assumes that the form is for reporting purposes only. If there are any discrepancies or clarifications needed, please let me know.
