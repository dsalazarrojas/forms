<thinking>...</thinking>

# leave_request - Help Guide
## Purpose
The leave request form is used to submit a request for leave of absence to the management team. This form is used to communicate leave details to the concerned authorities and ensure timely approval or rejection of the leave request.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your user details, including your employee name, email, phone number, and department.
2. Select the type of leave you are requesting (e.g., vacation, sick, or emergency).
3. Enter the start and end dates of your leave.
4. Provide a brief reason for your leave.
5. If applicable, select your manager's approval status.
6. Enter any comments or notes about your leave request.
7. Finally, confirm your manager's name and contact information (email and phone number).

## Field-by-Field Explanation
- **Employee Name** (`employee_name`, text, required): Enter your full name as an employee.
- **Employee Email** (`employee_email`, email, required): Enter your official email address.
- **Employee Phone** (`employee_phone`, text, required): Enter your official phone number.
- **Department** (`department`, text, required): Select your department name.
- **Leave Type** (`leave_type`, select_one, required): Choose the reason for your leave (e.g., vacation, sick, or emergency).
- **Start Date** (`start_date`, date, required): Enter the start date of your leave.
- **End Date** (`end_date`, date, required): Enter the end date of your leave.
- **Reason** (`reason`, text, required): Briefly describe the reason for your leave.
- **Duration** (`duration`, number, required): Enter the number of days you are taking for leave.
- **Manager Approval** (`manager_approval`, select_one, required): Select the manager's approval status (Approved, Rejected, or Pending).
- **Manager Comments** (`comments`, text, required): Enter any comments or notes about your leave request.
- **Manager Name** (`manager_name`, text, required): Enter your manager's full name.
- **Manager Email** (`manager_email`, email, required): Enter your manager's email address.
- **Manager Phone** (`manager_phone`, text, required): Enter your manager's phone number.
- **Manager Extension** (`manager_extension`, number, required): Enter your manager's extension number.
- **Manager Status** (`manager_status`, select_one, required): Select your manager's status (Active or Inactive).
- **Department Status** (`department_status`, select_one, required): Select your department status (Active or Inactive).
- **Leave Date Type** (`leave_date_type`, select_one, required): Choose the type of leave date (Start Date or End Date).
- **Employee Status** (`employee_status`, select_one, required): Select your status (Active or Inactive).
- **Employee Note** (`employee_note`, text, required): Enter any additional notes or comments about your leave request.
