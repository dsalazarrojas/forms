# Leave Approval Form - Help Guide
## Purpose

The Leave Approval Form is used to manage employee leave requests. Employees can submit their leave requests, and managers can review, approve, or deny these requests based on the provided information.

## How To Complete This Form

To complete this form, follow these steps:

1. **Employee:** Fill in your personal details, such as your name, employee ID, and department ID.
2. **Leave Request:** Enter the start and end dates of your leave, the type of leave (e.g., Vacation, Sick, Emergency), and the number of leave days.
3. **Reason for Leave:** Enter the reason for your leave.
4. **Manager's Review:** If you are a manager, review the submitted leave requests, select the status (Approved, Denied, or Pending) and provide any comments.

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, **required**): Enter your full name as it appears on your employee ID.
* **Start Date** (`start_date`, date, **required**): Enter the date you would like to start your leave.
* **End Date** (`end_date`, date, **required**): Enter the date you would like to end your leave.
* **Reason for Leave** (`reason`, text, **required**): Enter the reason for your leave request.
* **Approval Status** (`approval_status`, select_one, **optional**): Select the status of your leave request (Approved, Denied, or Pending).
* **Employee ID** (`employee_id`, number, **required**): Enter your employee ID number.
* **Department ID** (`department_id`, number, **required**): Enter the department ID where you belong.
* **Manager Name** (`manager_name`, text, **required**): Enter the name of your manager.
* **Manager ID** (`manager_id`, number, **required**): Enter the ID of your manager.
* **Leave Type** (`leave_type`, select_one, **optional**): Select the type of leave (e.g., Vacation, Sick, Emergency).
* **Leave Days** (`leave_days`, number, **required**): Enter the number of leave days you are requesting.
* **Leave From** (`leave_from`, date, **required**): Enter the date you would like to start your leave.
* **Leave To** (`leave_to`, date, **required**): Enter the date you would like to end your leave.
* **Leave Reason** (`leave_reason`, text, **required**): Enter the reason for your leave request.
* **Manager Comments** (`manager_comments`, text, **optional**): Provide any comments or reasons for your leave request status.
* **Employee Comments** (`employee_comments`, text, **optional**): Provide any comments or reasons for your leave request status.
* **Status** (`status`, select_one, **optional**): Select the status of your leave request (Approved, Denied, or Pending).
* **Approved By** (`approved_by`, text, **required**): Enter the name of the person who approved your leave request.
* **Approved At** (`approved_at`, date, **required**): Enter the date your leave request was approved.
* **Submitted At** (`submitted_at`, date, **required**): Enter the date your leave request was submitted.
* **Submitted By** (`submitted_by`, text, **required**): Enter your name.
* **Leave Status** (`leave_status`, select_multiple, **optional**): Select the status of your leave request (Approved, Denied, or Pending).
* **Leave Request ID** (`leave_request_id`, number, **required**): Enter the ID of your leave request.
* **Leave Request Date** (`leave_request_date`, date, **required**): Enter the date your leave request was submitted.
* **Leave Request Comments** (`leave_request_comments`, text, **optional**): Enter any comments or reasons for your leave request status.
