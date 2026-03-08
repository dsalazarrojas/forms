<thinking>
This form is meant to track and record the work schedule of an employee. It allows for the selection of multiple work schedules, including whether the employee has completed shifts, the rate of task completion, start and end times of shifts, duration of shifts, status of tasks, date of shifts, and whether an employee is present or not. The form does not have any required fields, indicating that it is meant to provide optional data for tracking purposes.
</thinking>

# work_schedule_checklist - Help Guide
## Purpose
This form is used to record and track an employee's work schedule.

## How To Complete This Form
To use this form, follow these steps:

1. Select all applicable options from the "work_schedule_checklist" section. This section has multiple options, including "Yes" and "No".
2. For the "shifts_completed" section, choose from "Yes" or "No" to indicate if the employee has completed their shifts.
3. Select the "task_completion_rate" from "Good", "Fair", or "Poor" to indicate the rate of task completion.
4. Choose a start time for the "shift_start_time" field using the time input field. Enter a valid time in 24-hour format (e.g., 08:00, 12:00).
5. Select a shift end time from the "shift_end_time" field using the time input field. Enter a valid time in 24-hour format (e.g., 09:00, 13:00).
6. Choose a shift duration from the "shift_duration" field.
7. For the "task_completion_status" field, select from "Active" or "Inactive" to indicate the status of tasks.
8. Select a date for the "shift_date" field using the date input field. Enter a valid date in YYYY-MM-DD format (e.g., 2022-01-01).
9. For the "employee_id" field, select "Yes" or "No" to indicate if the employee is present.
10. Choose a date for the "task_completion_date" field using the date input field.
11. Select the "employee_name" field with the employee's name.

## Field-by-Field Explanation
* **work_schedule_checklist** (`work_schedule_checklist`, select_multiple): Select all applicable options to track work schedules.
* **shifts_completed** (`shifts_completed`, select_one): Choose "Yes" if the employee has completed shifts, "No" otherwise.
* **task_completion_rate** (`task_completion_rate`, select_one): Select "Good", "Fair", or "Poor" to indicate the rate of task completion.
* **shift_start_time** (`shift_start_time`, time): Enter a valid time in 24-hour format (e.g., 08:00, 12:00) to indicate the start time of a shift.
* **shift_end_time** (`shift_end_time`, time): Select a shift end time in 24-hour format (e.g., 09:00, 13:00).
* **shift_duration** (`shift_duration`, number): Choose a shift duration.
* **task_completion_status** (`task_completion_status`, select_one): Select "Active" or "Inactive" to indicate the status of tasks.
* **shift_date** (`shift_date`, date): Enter a valid date in YYYY-MM-DD format (e.g., 2022-01-01) to indicate the date of a shift.
* **employee_id** (`employee_id`, select_one): Select "Yes" or "No" to indicate if the employee is present.
* **task_completion_date** (`task_completion_date`, date): Choose a date for task completion.
* **employee_name** (`employee_name`, select_one): Select the employee's name.
