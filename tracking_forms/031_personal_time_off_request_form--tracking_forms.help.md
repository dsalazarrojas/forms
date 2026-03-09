# personal_time_off_request_form - Help Guide
## Purpose
The personal time off request form is designed for employees to submit and track their personal time off requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your Employee ID.
2. Select the Start Date of your time off.
3. Select the End Date of your time off.
4. Provide a Reason for your time off.
5. Check the Approval Status if your request has already been reviewed.
6. Enter the Assigned User ID if you have been assigned a specific user to review your request.
7. Add any Notes if necessary.
8. Enter the Created By and Updated By fields which are automatically populated with your username.

## Field-by-Field Explanation
* **Employee Id** (`employee_id`, text, required): Enter your unique employee ID to identify yourself in the system.
* **Start Date** (`start_date`, date, required): Select the date you wish to start your time off from.
* **End Date** (`end_date`, date, required): Select the date you wish to end your time off.
* **Reason** (`reason`, text, required): Provide a clear and concise reason for your time off request.
* **Approval Status** (`approval_status`, select_multiple, optional): If your request has already been reviewed, select the current status.
* **Assigned User Id** (`assigned_user_id`, text, optional): If you have been assigned a specific user to review your request, enter their ID.
* **Notes** (`notes`, note, optional): Add any additional comments or notes for the reviewer.
* **Created By** (`created_by`, text, required): This field is automatically populated with your username.
* **Updated By** (`updated_by`, text, required): This field is automatically populated with your username.
