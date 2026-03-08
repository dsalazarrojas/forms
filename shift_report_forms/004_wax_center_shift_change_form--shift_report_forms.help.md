# Wax Center Shift Change Form - Help Guide
## Purpose
The Wax Center Shift Change Form is used to document changes to the shift schedule, including assigning employees and clients to shifts.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the Employee ID of the employee whose shift is being changed.
2. Enter the Client ID of the client whose shift is being changed.
3. Select the date of the shift change.
4. Select the start and end times of the shift.
5. Enter any client notes regarding the shift change.
6. Enter any employee notes regarding the shift change.
7. Select the employees and clients to be assigned to the shift.
8. Select the type of shift being changed (e.g., shift 1, shift 2, etc.).

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, number, required): Enter the ID number of the employee whose shift is being changed.
* **Client ID** (`client_id`, number, required): Enter the ID number of the client whose shift is being changed.
* **Shift Date** (`shift_date`, date, required): Select the date of the shift change.
* **Shift Start Time** (`shift_start_time`, time, required): Select the start time of the shift.
* **Shift End Time** (`shift_end_time`, time, required): Select the end time of the shift.
* **Client Notes** (`client_notes`, text, optional): Enter any notes regarding the client's shift change.
* **Employee Notes** (`employee_notes`, text, optional): Enter any notes regarding the employee's shift change.
* **Assigned Employees** (`employee_id`, select_multiple, optional): Select the employees assigned to the shift.
* **Assigned Clients** (`client_id`, select_multiple, optional): Select the clients assigned to the shift.
* **Shift** (`shift`, select_one, optional): Select the type of shift being changed (e.g., shift 1, shift 2, etc.).

## Tips
* Make sure to enter accurate dates and times for the shift change.
* Be as detailed as possible when entering client and employee notes.
* Use the select multiple options to assign multiple employees and clients to a shift.
