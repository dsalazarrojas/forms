<thinking>... internal reasoning and form purpose check ...

This form is used to request extended sick leave. It is a critical process for HR to manage employee leave requests and ensure that employees have a clear understanding of their leave status and any required actions from their manager or the company. The purpose of this form is to gather necessary information from employees to facilitate the approval process.

... </thinking>

# extended_sick_leave_form - Help Guide
## Purpose
The **extended sick leave form** is a request for extended sick leave made by an employee to their manager and the company.

## How To Complete This Form
To complete the form, follow these steps:

1. Select the type of leave you are requesting.
2. Provide a brief reason for your sick leave.
3. Enter the start date of your leave.
4. Enter the end date of your leave.
5. Indicate the duration of your leave.
6. Check your leave status (if applicable).
7. Enter any comments from your manager (if applicable).
8. Select your manager's approval status (if applicable).
9. Enter any comments from your manager (if applicable).
10. Enter any comments from the company (if applicable).
11. Select the company's approval status (if applicable).

## Field-by-Field Explanation

* **Sick Leave Type** (`sick_leave_type`, text, required): This field allows you to select the type of leave you are requesting. Please select the option that best describes your situation.
* **Reason** (`reason`, text, required): Provide a brief description of why you are requesting sick leave. Please be as concise as possible while still conveying the necessary information.
* **Start Date** (`start_date`, date, required): Enter the date you plan to start your sick leave. Make sure to use the format `YYYY-MM-DD`.
* **End Date** (`end_date`, date, required): Enter the date you plan to end your sick leave. Make sure to use the format `YYYY-MM-DD`.
* **Duration** (`duration`, number, required): Indicate the number of days or weeks you will be on sick leave.
* **Leave Status** (`leave_status`, select one, required): Check your current leave status. This will help your manager and the company track your leave.
* **Manager Comments** (`manager_comments`, text, optional): If your manager has left comments, enter them here.
* **Manager Approval** (`manager_approval`, select one, optional): Select your manager's approval status.
* **Manager Remarks** (`manager_remarks`, text, optional): If your manager has any additional comments, enter them here.
* **Company Comments** (`company_comments`, text, optional): If the company has any comments, enter them here.
* **Company Approval** (`company_approval`, select one, optional): Select the company's approval status.
