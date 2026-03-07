<thinking>
The form purpose is to collect information about personnel actions. The personnel action form is used to document changes in an employee's status, such as hiring, promotion, or separation. This form is designed to be completed by the HR department or relevant personnel. The form is not intended to be used for other purposes, such as employee onboarding or performance reviews.
</thinking>

# personnel_action_form - Help Guide
## Purpose
This form is used to document personnel actions, such as hiring, promotion, or separation, and to track employee information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's name in the "Employee Name" field.
2. Enter the job title of the employee.
3. Enter the date the employee was hired.
4. Enter the name of the employee's manager.
5. Enter the department the employee is a part of.
6. Select the type of job the employee has (Administrative, Managerial, Professional, Skilled, or Unskilled).
7. Enter the date the employee's employment was terminated, if applicable.
8. If the employee's employment was terminated, enter the reason for separation.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter the name of the employee.
* **Job Title** (`job_title`, text, required): Enter the job title of the employee.
* **Date of Hire** (`date_of_hire`, date, required): Enter the date the employee was hired.
* **Manager Name** (`manager_name`, text, required): Enter the name of the employee's manager.
* **Department** (`department`, text, required): Enter the department the employee is a part of.
* **Job Type** (`job_type`, select_one, required): Select the type of job the employee has:
	+ Administrative
	+ Managerial
	+ Professional
	+ Skilled
	+ Unskilled
* **Date of Separation** (`date_of_separation`, date): Enter the date the employee's employment was terminated, if applicable.
* **Reason for Separation** (`reason_for_separation`, text): Enter the reason the employee's employment was terminated.

## Tips
This form is designed to collect essential information about personnel actions. Make sure to complete all required fields, and use the "Select One" option for job type to ensure accuracy. If the employee's employment was terminated, provide a clear reason to help with future reference.
