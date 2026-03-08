<thinking>
The form is for requesting IT access for employees. It's used to gather information about the employee, their department, job title, manager, and type of IT access required. The form is likely used by HR or management staff to process requests for IT access for new hires, offboarding, access modifications, temporary access, or other types of IT access requests. This form is likely used by HR or management staff to ensure that all necessary information is gathered for processing the request correctly. The form does not appear to be a duplicate of other forms that might be used for similar purposes, as it is focused on specific employee information and IT access types.

</thinking>

# Anatole It Access - Help Guide
## Purpose
The Anatole It Access form is a tool used to request IT access for employees. It's used to gather necessary information from employees and HR/management staff to process and manage IT access requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling in the employee's information:
   * Enter the employee's name in the "Employee Name" field.
   * Enter the employee's ID number in the "Employee ID" field.
   * Select the employee's department from the "Department" dropdown menu.
   * Enter the employee's job title in the "Job Title" field.
   * Enter the name of the employee's direct manager in the "Manager Name" field.

2. Next, select the type of IT access request from the "Request Type" dropdown menu:
   * New Hire Onboarding: for new employees joining the company.
   * Employee Offboarding: for departing employees.
   * Access Modification: for changing existing IT access.
   * Temporary Access: for temporary or short-term access.

3. Set the start and end dates for the IT access:
   * Enter the effective start date in the "Start Date" field.
   * Enter the end date for temporary access or offboarding in the "End Date" field.

4. Specify any additional access requirements:
   * Select if email access is needed from the "Email Access Required" dropdown menu.
   * Select the type of computer needed for work from the "Computer Type" dropdown menu.
   * Select all software that access is needed for from the "Software Access Required" dropdown menu (this field supports multiple selections).
   * Select if network drive access is needed and if so, whether it's full access or read-only from the "Network Drive Access" dropdown menu.
   * Describe any additional access requirements in the "Special Access Requirements" text field.

5. Complete the approval information:
   * Enter the name of the manager approving the request in the "Approved By" field.
   * Select the date of approval in the "Approval Date" field.

6. Enter any additional notes or comments in the "Additional Notes" field.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter the full name of the employee.
* **Employee ID** (`employee_id`, text, required): Enter the employee's identification number.
* **Department** (`department`, select_one, required): Select the department the employee belongs to.
* **Job Title** (`job_title`, text, required): Enter the employee's job title.
* **Manager Name** (`manager_name`, text, required): Enter the name of the direct manager.
* **Request Type** (`request_type`, select_one, required): Select the type of IT access request (New Hire Onboarding, Employee Offboarding, Access Modification, Temporary Access).
* **Start Date** (`start_date`, date, required): Enter the effective start date for the IT access.
* **End Date** (`end_date`, date, optional): Enter the end date for temporary access or offboarding.
* **Email Access Required** (`email_access`, select_one, required): Select if email access is needed.
* **Computer Type** (`computer_type`, select_one, required): Select the type of computer needed for work (Windows Laptop, MacBook, Desktop PC, Not Required).
* **Software Access Required** (`software_access`, select_multiple, required): Select all software that access is needed for (multiple selections allowed).
* **Network Drive Access** (`network_drive_access`, select_one, optional): Select if network drive access is needed and if so, whether it's full access or read-only.
* **Special Access Requirements** (`special_access_requirements`, text, optional): Describe any additional access requirements.
* **Approved By** (`approved_by`, text, required): Enter the name of the manager approving the request.
* **Approval Date** (`approval_date`, date, required): Select the date of approval.
* **Additional Notes** (`additional_notes`, text, optional): Enter any additional notes or comments.
