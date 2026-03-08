<thinking>
This form is intended to capture attendance information from employees, allowing administrators to track their attendance patterns, shifts, locations, and other relevant details. To ensure accuracy and consistency, please make sure to complete this form only once per shift for each employee, and avoid duplicate entries.
</thinking>

# Employee Check In Attendance Form - Help Guide
## Purpose
The purpose of this form is to collect attendance information from employees. It helps administrators to track and monitor employee shifts, locations, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether the employee is on shift or not.
2. Enter the date of the shift.
3. Choose the location of the shift (if applicable).
4. If applicable, enter the start and end times of the shift.
5. Enter the employee's name and employee code.
6. Add any additional notes about the shift (if necessary).
7. Confirm who submitted the form.

## Field-by-Field Explanation

* **Employee Shift** (`employee_shift`, `select_multiple`, required): Select whether the employee is on shift or not. This is a required field and must be answered as "Yes" or "No".
* **Date** (`shift_date`, `date`, required): Enter the date of the shift. This field must be a valid date in the format MM/DD/YY.
* **Location** (`location`, `select_one`, required): Choose the location of the shift from the available options. If this field is not relevant, select "No".
* **Shift Start Time** (`shift_start_time`, `time`, optional): If applicable, enter the start time of the shift. This field accepts time in 12-hour format (HH:MM AM/PM).
* **Shift End Time** (`shift_end_time`, `time`, optional): If applicable, enter the end time of the shift. This field accepts time in 12-hour format (HH:MM AM/PM).
* **Employee Name** (`employee_name`, `text`, required): Enter the name of the employee on shift.
* **Employee Code** (`employee_code`, `text`, required): Enter the employee code or ID associated with the employee on shift.
* **Notes** (`notes`, `note`, optional): Add any additional notes or comments about the shift (if necessary).
* **Submitted By** (`submitted_by`, `select_one`, required): Confirm who submitted the form. This field is required and must be answered as "Yes" or "No".
* **Submitted On** (`submitted_on`, `date`, required): Date and time when the form was submitted. This field must be in the format MM/DD/YY and must be accurate.
