# employee-leave-request-approval-form - Help Guide
## Purpose
This guide is to help employees understand how to complete the Employee Leave Request Form, a form used to request and track leave within the organization.

## How To Complete This Form
To complete this form, follow the steps below:

1. Enter your name and ID to identify yourself as the requesting employee.
2. Specify the start and end dates of your leave.
3. Choose the reason for your absence.
4. Select whether your manager has approved your request.
5. Indicate whether your manager has approved your leave.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, `text`, required): Enter your full name as it appears on your employee ID or company records.
* **Employee ID** (`employee_id`, `number`, required): Enter your unique employee ID number.
* **Leave Request Form** (`employee_leave_request_form`, `text`, required): Enter a brief description of your leave request.
* **Start Date** (`start_date`, `date`, required): Enter the date you would like to start your leave.
* **End Date** (`end_date`, `date`, required): Enter the date you would like to end your leave.
* **Reason for Absence** (`reason_for_absence`, `select_multiple`, required): Select the reason for your absence from the available options.
* **Approval Status** (`approval_status`, `select_one`, required): Select whether your manager has approved your request (Approved), denied your request (Denied), or if the status is pending (Pending).
* **Manager Approval** (`manager_approval`, `select_multiple`, required): Select whether your manager has approved your request (Yes) or not (No).
* **Manager Approval Status**: This field is automatically populated by the manager's selection in the Manager Approval field.

## Tips
* Make sure to enter accurate and up-to-date personal information.
* Clearly specify the dates and reason for your leave to ensure accurate processing.
* Review the form carefully before submitting to avoid errors.
* If you have any issues or concerns, contact your HR department for assistance.
