# crunch_time_leave_of_absence_request - Help Guide
## Purpose
This form is designed to guide users through the necessary information required for a leave of absence request.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the General Information page with your basic details.
2. Select the type of leave you are requesting from the options provided.
3. Enter the start and end dates of your leave.
4. Provide a brief reason for your leave.
5. Add any additional comments or notes if necessary.
6. Specify the approval status and manager comments if necessary.
7. Confirm manager approvals and status.
8. Identify any team coverage and coverage details.

## Field-by-Field Explanation

* **General Information** (`1`, `text`, required: false): This section is for entering your basic details such as employee_name, department, job_title, and team_name.
* **leave_type** (`2`, `select_one`, required: false): Select from the options: Vacation, Personal Leave, Sick Leave, or Other.
* **start_date** (`3`, `date`, required: false): Enter the start date of your leave.
* **end_date** (`4`, `date`, required: false): Enter the end date of your leave.
* **reason** (`5`, `note`, required: false): Provide a brief reason for your leave.
* **comments** (`6`, `note`, required: false): Add any additional comments or notes if necessary.
* **approval_status** (`7`, `select_one`, required: false): Select from the options: Approved, Pending, or Rejected.
* **manager_comments** (`8`, `note`, required: false): Enter manager comments if necessary.
* **employee_name** (`9`, `text`, required: false): Enter your employee name.
* **department** (`10`, `text`, required: false): Enter your department.
* **job_title** (`11`, `text`, required: false): Enter your job title.
* **team_name** (`12`, `text`, required: false): Enter your team name.
* **manager_name** (`13`, `text`, required: false): Enter your manager name.
* **manager_email** (`14`, `email`, required: false): Enter your manager's email.
* **manager_phone** (`15`, `text`, required: false): Enter your manager's phone number.
* **manager_approvals** (`16`, `select_multiple`, required: false): Confirm manager approvals.
* **manager_status** (`17`, `select_one`, required: false): Select manager status: Approved, Pending, or Rejected.
* **team_leader** (`18`, `select_one`, required: false): Select team leader: No One or Team Leader.
* **comments** (`19`, `note`, required: false): Add any comments if necessary.
* **employee_approvals** (`20`, `select_multiple`, required: false): Confirm employee approvals.
* **coverage** (`21`, `select_one`, required: false): Select coverage: No Coverage or Team Leader.
* **coverage_name** (`22`, `text`, required: false): Enter coverage name if team leader is selected.
* **coverage_start** (`23`, `date`, required: false): Enter coverage start date if team leader is selected.
* **coverage_end** (`24`, `date`, required: false): Enter coverage end date if team leader is selected.
* **coverage_comments** (`25`, `note`, required: false): Add any coverage comments if necessary.
