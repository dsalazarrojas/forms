<thinking>
The form "overtime_report_form" is used to report overtime worked by employees in various departments. The form is used to track employee work hours beyond their regular working hours, and is typically completed by employees to request reimbursement for extra hours worked. The form is used by management to review and approve overtime requests, ensuring accurate tracking and reimbursement of employee time.
</thinking>

# overtime_report_form - Help Guide
## Purpose
The overtime_report_form is used to report overtime worked by employees to request reimbursement for extra hours worked.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the Start Date from the calendar picker to the date you first worked overtime.
2. Enter the number of Hours Worked you would like to be reimbursed for.
3. Choose your Department from the dropdown list (e.g. Accounting, IT, Sales, etc.).
4. Choose your Project from the dropdown list (e.g. Accounting, HR, Marketing, etc.).
5. Choose your Manager from the dropdown list (e.g. John Doe, Jane Doe, etc.).
6. If necessary, enter additional Notes about your overtime hours.
7. Click the Submit button to send your request.

## Field-by-Field Explanation
* **Start Date** (`start_date`, date, not required): Enter the date you first worked overtime. You can use the calendar picker to select the date.
* **Hours Worked** (`hours_worked`, number, not required): Enter the number of hours you worked overtime. This will be the number of hours you are requesting reimbursement for.
* **Department** (`department`, select_one, required): Select the department you worked overtime for. This will be used to track which department you are requesting reimbursement for.
* **Project** (`project`, select_one, required): Select the project you worked overtime for. This will be used to track which project you are requesting reimbursement for.
* **Manager** (`manager`, select_one, required): Select your supervisor or manager. They will review and approve your request.
* **Notes** (`notes`, note, not required): Add any additional comments or context about your overtime hours if needed.
* **Submit** (text, not required): Click this button to send your request for review and approval.
