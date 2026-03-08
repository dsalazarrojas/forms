<thinking>
  We will be creating a help guide for the "unpaid_leave_request_form" form that explains its purpose, how to complete it, and each field's meaning.
  This form is used to submit an unpaid leave request from an employee.
  This form should only be completed if an employee has not already submitted a leave request for the same date range.
  The form should be completed by the employee who is requesting the leave.
  Each field is explained below.
</thinking>

# unpaid_leave_request_form - Help Guide
## Purpose
The "unpaid_leave_request_form" is used to submit an unpaid leave request from an employee.

## How To Complete This Form
To complete this form, follow these steps:
1. Enter your employee details in the "Employee Details" field.
2. Select the start date of your leave in the "start_date" field.
3. Select the end date of your leave in the "end_date" field.
4. Choose the type of leave you are requesting in the "leave_type" field.
5. Enter the reason for your leave in the "reason" field.
6. Select the approval status of your leave in the "approval_status" field.
7. Enter any additional notes about your leave in the "notes" field.
8. Select the date your manager approved your leave in the "manager_approval_date" field.
9. Select the date you approved your leave in the "employee_approval_date" field.
10. Enter the name of the person who submitted the form in the "form_submitted_by" field.
11. Select the approval status of your leave by your manager in the "manager_approval" field.
12. Select the approval status of your leave by the employee in the "employee_approval" field.
13. Select the status of your leave in the "status" field.
14. Enter the number of leave days requested in the "leave_days" field.
15. Enter the total number of leave days you have taken in the "total_leave_days" field.
16. Enter the number of leave days approved by your manager in the "leave_days_approved" field.
17. Enter the number of leave days denied by your manager in the "leave_days_denied" field.
18. Enter the number of leave days pending approval in the "leave_days_pending" field.
19. Enter the number of leave days cancelled by you in the "leave_days_cancelled" field.
20. Enter the number of leave days reimbursed to you in the "leave_days_reimbursed" field.
21. Enter the total number of leave days reimbursed to you in the "total_leave_days_reimbursed" field.
22. Enter your leave balance in the "leave_balance" field.
23. Enter the total number of leave days you have taken in the "total_leave_days_taken" field.
24. Enter the total number of leave days remaining in the "total_leave_days_remaining" field.
25. Enter a unique ID for the form in the "form_id" field.

## Field-by-Field Explanation
- **Employee Details** (`employee_details`, text, required): Enter your employee details, including your name, department, and job title.
- **start_date** (`start_date`, date, required): Select the start date of your leave.
- **end_date** (`end_date`, date, required): Select the end date of your leave.
- **leave_type** (`leave_type`, select_one, required): Choose the type of leave you are requesting (e.g., sick leave, vacation, etc.).
- **reason** (`reason`, text, optional): Enter the reason for your leave.
- **approval_status** (`approval_status`, select_one, required): Select the status of your leave approval (e.g., Approved, Denied, Pending).
- **notes** (`notes`, note, optional): Enter any additional notes about your leave.
- **manager_approval_date** (`manager_approval_date`, date, optional): Select the date your manager approved your leave.
- **employee_approval_date** (`employee_approval_date`, date, optional): Select the date you approved your leave.
- **form_submitted_by** (`form_submitted_by`, text, required): Enter the name of the person who submitted the form.
- **manager_approval** (`manager_approval`, select_one, required): Select the status of your leave approval by your manager (e.g., Approved, Denied, Pending).
- **employee_approval** (`employee_approval`, select_one, optional): Select the status of your leave approval by the employee (e.g., Approved, Denied, Pending).
- **status** (`status`, select_one, required): Select the status of your leave (e.g., Active, Inactive, Pending).
- **leave_days** (`leave_days`, number, required): Enter the number of leave days requested.
- **total_leave_days** (`total_leave_days`, number, required): Enter the total number of leave days you have taken.
- **leave_days_approved** (`leave_days_approved`, number, optional): Enter the number of leave days approved by your manager.
- **leave_days_denied** (`leave_days_denied`, number, optional): Enter the number of leave days denied by your manager.
- **leave_days_pending** (`leave_days_pending`, number, optional): Enter the number of leave days pending approval.
- **leave_days_cancelled** (`leave_days_cancelled`, number, optional): Enter the number of leave days cancelled by you.
- **leave_days_reimbursed** (`leave_days_reimbursed`, number, optional): Enter the number of leave days reimbursed to you.
- **total_leave_days_reimbursed** (`total_leave_days_reimbursed`, number, optional): Enter the total number of leave days reimbursed to you.
- **leave_balance** (`leave_balance`, number, required): Enter your leave balance.
- **total_leave_days_taken** (`total_leave_days_taken`, number, required): Enter the total number of leave days you have taken.
- **total_leave_days_remaining** (`total_leave_days_remaining`, number, required): Enter the total number of leave days remaining.
- **form_id** (`form_id`, text, optional): Enter a unique ID for the form.

## Tips
* Please ensure that you have not already submitted a leave request for the same date range.
* Enter accurate and truthful information to ensure that your leave request is approved.
* If you are unsure about any field, consult with your manager or HR representative.
* Please note that this form is for unpaid leave requests only. If you are requesting paid leave, please use the "paid_leave_request_form" instead.
