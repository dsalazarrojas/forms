# Employee Check In Attendance Form - Help Guide
## Purpose
The Employee Check In Attendance Form is designed to track employee attendance, ensuring accurate and up-to-date records. This form is used to record check-in and check-out times, locations, and shifts, facilitating smooth attendance tracking and management.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the correct shift from the "Employee Check In Shift" dropdown menu.
2. Choose the relevant locations from the "Employee Check In Location" field, as multiple locations can be selected.
3. Enter the date of your check-in on the "Employee Check In Date" field.
4. Select the time of your check-in on the "Employee Check In Time" field.
5. Choose the location where you'll be checking out on the "Employee Check Out Location" field.
6. Select the time of your check-out on the "Employee Check Out Time" field.
7. Assign the form to a specific individual from the "Assigned To" dropdown menu.

## Field-by-Field Explanation
* **Employee Check In Shift** (`shift_1`, `select_one`, required: false): Select the shift you're currently working on. Please ensure you've chosen the correct shift according to your schedule.
* **Employee Check In Location** (`employee_check_in_location`, `select_multiple`, required: false): Choose the locations you'll be visiting or working at during your shift. Select all relevant locations from the dropdown menu.
* **Employee Check In Date** (`employee_check_in_date`, `date`, required: false): Enter the date you're checking in. This should match your scheduled check-in date.
* **Employee Check In Time** (`employee_check_in_time`, `time`, required: false): Select the time you're checking in. This should match your scheduled check-in time.
* **Employee Check Out Location** (`employee_check_out_location`, `select_multiple`, required: false): Choose the locations you'll be visiting or working at during your shift after checking out. Select all relevant locations from the dropdown menu.
* **Employee Check Out Time** (`employee_check_out_time`, `time`, required: false): Select the time you're checking out. This should match your scheduled check-out time.
* **Assigned To** (`assigned_to`, `select_one`, required: false): Assign this form to a specific individual, usually your team leader or supervisor. This helps with tracking and monitoring attendance.
* **Notes** (`notes`, `note`, required: false): Add any additional comments or notes about your attendance. This is an optional field for providing extra context.
