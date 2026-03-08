# Retail Cashier Leave Of Absence Form - Help Guide
## Purpose
The Retail Cashier Leave Of Absence Form is a tool used to document leave of absence requests from retail employees. It helps to gather all necessary information regarding the employee's leave period, including start and end dates, type of leave, and other relevant details.

## How To Complete This Form
1. Start by filling out the employee's information, including their ID, name, email, and phone number.
2. Enter the start and end dates of the leave.
3. Select the type of leave from the available options (Regular Leave, Vacation, Sick Leave, or Other).
4. Provide a brief reason for the leave.
5. Fill out the return date if applicable.
6. If required, enter the manager's name, phone number, and email address.
7. Enter the store ID, name, and location.
8. Add any additional notes if needed.

## Field-by-Field Explanation

* **Employee Info** (`employee_id`, `text`, required: false): Enter the employee's ID number.
* **Leave Dates** (`leave_dates`, `date`, required: false): Enter the start and end dates of the leave.
* **Start Date** (`start_date`, `date`, required: false): Enter the start date of the leave.
* **End Date** (`end_date`, `date`, required: false): Enter the end date of the leave.
* **Leave Type** (`leave_type`, `select_multiple`, required: false): Select the type of leave from Regular Leave, Vacation, Sick Leave, or Other.
* **Leave Reason** (`leave_reason`, `note`, required: false): Enter a brief reason for the leave.
* **Return Date** (`return_date`, `date`, required: false): Enter the expected return date if applicable.
* **Employee ID** (`employee_id`, `number`, required: false): Enter the employee's ID number (if not already entered above).
* **Employee Name** (`employee_name`, `text`, required: false): Enter the employee's name (if not already entered above).
* **Employee Email** (`employee_email`, `email`, required: false): Enter the employee's email address (if not already entered above).
* **Employee Phone** (`employee_phone`, `text`, required: false): Enter the employee's phone number (if not already entered above).
* **Manager Name** (`manager_name`, `text`, required: false): Enter the manager's name.
* **Manager Phone** (`manager_phone`, `text`, required: false): Enter the manager's phone number.
* **Manager Email** (`manager_email`, `email`, required: false): Enter the manager's email address.
* **Store ID** (`store_id`, `number`, required: false): Enter the store ID.
* **Store Name** (`store_name`, `text`, required: false): Enter the store name.
* **Store Location** (`store_location`, `text`, required: false): Enter the store location.
* **Notes** (`notes`, `note`, required: false): Add any additional notes regarding the leave.
* **Manager Note** (`manager_note`, `note`, required: false): Add a note for the manager if needed.
* **Store Hours** (`store_hours`, `time`, required: false): Enter the store hours if necessary.
* **Store End Hours** (`store_hours_end`, `time`, required: false): Enter the end store hours if necessary.
* **Cashier Note** (`cashier_note`, `note`, required: false): Add a note for the cashier if necessary.
