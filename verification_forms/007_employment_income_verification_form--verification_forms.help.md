# Employment Income Verification Form - Help Guide
## Purpose
This form is used to verify an employee's employment status and income information.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's ID number in the "Employee ID" field.
2. Enter the employee's name in the "Employee Name" field.
3. Enter the company's name in the "Company Name" field.
4. Select the employee's employment status from the options provided in the "Employment Status" field.
5. Select the employee's employment type from the options provided in the "Employment Type" field.
6. If applicable, enter the start and end dates of the employment period in the "Start Date" and "End Date" fields, respectively.
7. Enter any reason for leaving in the "Reason for Leaving" field, if applicable.
8. Enter the employee's salary and address in the "Salary" and "Address" fields, if applicable.
9. Enter the employee's department and job title in the "Department" and "Job Title" fields, respectively.
10. Enter the manager's name in the "Manager Name" field, if applicable.

## Field-by-Field Explanation
* **Employee ID** (`employee_id`, number, required: false): Enter the employee's ID number.
* **Company Name** (`company_name`, text, required: false): Enter the name of the company the employee was employed by.
* **Start Date** (`start_date`, date, required: false): Enter the start date of the employee's employment period, if applicable.
* **End Date** (`end_date`, date, required: false): Enter the end date of the employee's employment period, if applicable.
* **Employee Name** (`employee_name`, text, required: false): Enter the employee's name.
* **Employment Status** (`employment_status`, select_one, required: true): Select the employee's current or past employment status from the options provided.
	+ Options: Active, Resigned, Retired, Terminated, Left
* **Reason for Leaving** (`reason_for_leaving`, text, required: false): Enter a brief explanation for the reason the employee left their job, if applicable.
* **Employment Type** (`employment_type`, select_one, required: true): Select the employee's employment type from the options provided.
	+ Options: Full-time, Part-time, Contract, Seasonal, Temporary
* **Salary** (`salary`, number, required: false): Enter the employee's salary, if applicable.
* **Address** (`address`, text, required: false): Enter the employee's address, if applicable.
* **Department** (`department`, text, required: false): Enter the employee's department, if applicable.
* **Job Title** (`job_title`, text, required: false): Enter the employee's job title, if applicable.
* **Manager Name** (`manager_name`, text, required: false): Enter the manager's name, if applicable.
