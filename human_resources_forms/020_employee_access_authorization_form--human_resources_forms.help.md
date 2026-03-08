# Employee Access Authorization Form - Help Guide
## Purpose
The Employee Access Authorization Form is used to record and verify the access authorization details of an employee, ensuring that access to company resources is properly granted or revoked. This form is essential for administrative tasks such as granting or revoking access to company resources.


## How To Complete This Form
1. Ensure that you have all the necessary information at hand before completing this form.
2. Fill in the employee ID, name, and job title as accurately as possible.
3. Select the current status of the employee (active, inactive, or pending).
4. Provide the dates and times of last access and next access as required.
5. Fill in any additional details such as last accessed location and date.

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, number, required): This is the unique identifier for the employee in the system. Please fill in the correct ID as per the company's employee database.
* **Employee Name** (`employee_name`, text, required): This is the name of the employee being authorized for access.
* **Job Title** (`job_title`, text, required): This field captures the job title of the employee for whom you are granting access.
* **Manager ID** (`manager_id`, number, optional): This is the identifier for the employee's manager in the system, usually used for hierarchical reporting purposes.
* **Employee Department** (`employee_department`, text, optional): This captures the department the employee belongs to for company organizational structure purposes.
* **Employee Supervisor ID** (`employee_supervisor_id`, number, optional): This is the identifier for the employee's supervisor in the system.
* **Employee Status** (`employee_status`, select_one, optional): This indicates the current status of the employee's access (active, inactive, or pending).
* **Date of Last Access** (`date_of_last_access`, date, optional): This is the date of the employee's last access to the system or resource.
* **Last Accessed Date** (`last_accessed_date`, date, optional): This date captures the date of the employee's last access to the system or resource.
* **Date of Next Access** (`date_of_next_access`, date, optional): This date specifies when the employee's access will be next granted or reviewed.
* **Last Accessed Time** (`last_accessed_time`, time, optional): This field captures the time of the employee's last access to the system or resource.
* **Date of Next Accessed Time** (`date_of_next_accessed_time`, time, optional): This time field captures the time of the next access review for the employee.
* **Last Accessed Location** (`last_accessed_location`, text, optional): This specifies the location of the last access for the employee, if applicable.
* **Date of Last Accessed Location** (`date_of_last_accessed_location`, text, optional): This field captures the date of the last accessed location for the employee, if applicable.
* **Date of Next Accessed Location** (`date_of_next_accessed_location`, text, optional): This field captures the date of next accessed location for the employee, if applicable.
* **Last Accessed Date of Last Access** (`last_accessed_date_of_last_access`, text, optional): This field captures the date of last access for the last access event.
* **Last Accessed Last Access Date** (`last_accessed_last_accessed_date`, text, optional): This field is used to specify the date of last access for last access event.
