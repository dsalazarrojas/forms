# Overtime Request Form - Help Guide

## Purpose
The Overtime Request Form is used to submit requests for overtime pay for work performed outside of regular working hours. This form is intended for employees to provide information about the overtime request, such as the employee's job title, request date, start and end time, number of hours worked, comments, manager approval, and more.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the employee who is submitting the overtime request from the employee dropdown menu.
2. Enter the employee's job title.
3. Choose the date when the overtime was worked.
4. Enter the start and end times when the overtime was worked.
5. Enter the number of hours worked.
6. Provide comments about the reason for the overtime request, if desired.
7. Select the manager's dropdown menu to approve or deny the request.

## Field-by-Field Explanation
### Employee
* **Employee** (`employee`, `number`, **Required**): Select the employee who is submitting this overtime request.

### Job Title
* **Job Title** (`job_title`, `text`, **Required**): Enter the job title of the employee submitting this request.

### Request Date
* **Request Date** (`request_date`, `date`, **Required**): Choose the date when the overtime was worked.

### Start Time
* **Start Time** (`start_time`, `time`, **Required**): Enter the start time when the overtime was worked.

### End Time
* **End Time** (`end_time`, `time`, **Required**): Enter the end time when the overtime was worked.

### Hours
* **Hours** (`hours`, `number`, **Required**): Enter the number of hours worked.

### Comments
* **Comments** (`comments`, `text`, **Optional**): Provide comments about the reason for the overtime request, if desired.

### Manager
* **Manager** (`manager_id`, `number`, **Required**): Select the manager who will review and approve or deny this request.

### Approved
* **Approved** (`approved`, `select_one`, **Required**): Select "Approved" or "Denied" to indicate the manager's decision.
