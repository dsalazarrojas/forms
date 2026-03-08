<thinking>...</thinking>

# Staff Supervision - Help Guide
## Purpose
This form is used to manage employee supervision, gathering information about an employee's current status and any necessary comments or signoffs from their supervisor.

## How To Complete This Form
1. Select the employee you wish to supervise from a list (not included in this document).
2. Fill out the relevant fields:
	* Employee Details: enter the employee's basic information.
	* Employee Name: enter the employee's name.
	* Job Title: enter the employee's job title.
3. Add or modify comments and signoffs as necessary:
	* Supervisor Comments: add comments from the supervisor.
	* Employee Supervisor Comments: add comments from the employee to the supervisor.
	* Supervisor Name: enter the supervisor's name.
	* Supervisor Signoff: date and time of the supervisor's signoff.
	* Employee Signoff: date and time of the employee's signoff.
4. Update the employee's employment status:
	* Employment Status: select the employee's current status (Active, Inactive, On Leave).

## Field-by-Field Explanation

* **Employee Details** (`staff_supervision_form`, text, required/optional): This field is not actually required, but is intended to provide a general description of the employee and their role.
* **Employee Name** (`employee_name`, text, required/optional): Enter the name of the employee being supervised.
* **Job Title** (`job_title`, text, required/optional): Enter the employee's job title.
* **Supervisor Comments** (`supervisor_comments`, text, required/optional): Add comments or notes from the supervisor about the employee's performance or issues.
* **Employee Status** (`employee_status`, select_one, required/optional): Select the employee's current status (Active, Inactive, On Leave).
* **Employee Supervisor Comments** (`employee_supervisor_comments`, text, required/optional): Add comments or notes from the employee to the supervisor.
* **Supervisor Name** (`employee_supervisor_name`, text, required/optional): Enter the name of the supervisor who is completing this form.
* **Supervisor Signoff** (`supervisor_signoff`, date, required/optional): Date and time of the supervisor's signoff.
* **Employee Signoff** (`employee_signoff`, date, required/optional): Date and time of the employee's signoff.
* **Comments** (`supervisor_comments`, text, required/optional): Add any additional comments from the supervisor.
* **Employment Status** (`employee_employment_status`, select_multiple, required/optional): Select the employee's current employment status (Full Time, Part Time, Contractor).
