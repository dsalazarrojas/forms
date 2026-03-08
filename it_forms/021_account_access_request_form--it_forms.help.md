# Account Access Request Form - Help Guide
## Purpose
This form is used to request access to company resources, such as systems, applications, or data, for employees or contractors. It helps the requestor provide relevant information about their access needs and facilitates the approval process for the resource owner.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in your name, employee ID, and email address in the relevant fields.
2. Select your department and job title from the drop-down menus.
3. Choose the type of access you are requesting (e.g., new account, additional access, etc.).
4. Select the systems or applications you need access to.
5. Specify the level of access required (e.g., read-only, standard user, etc.).
6. Provide a business justification for the access request.
7. If applicable, select a start and end date for the access.
8. Get your manager to approve or deny the request.

## Field-by-Field Explanation
* **Requester Full Name** (`requester_name`, `text`, required): Please enter your full name as it appears on your employee ID.
* **Employee ID** (`employee_id`, `text`, required): Enter your employee ID number.
* **Email Address** (`email`, `email`, required): Enter your work email address.
* **Department** (`department`, `select_one`, required): Select your department from the available options (e.g., Administration, Engineering, Finance, etc.).
* **Job Title** (`job_title`, `text`, required): Enter your job title.
* **Direct Manager Name** (`manager_name`, `text`, required): Enter your direct manager's name.
* **Request Type** (`request_type`, `select_one`, required): Choose the type of access you are requesting (e.g., new account, additional access, etc.).
* **Systems or Applications Requiring Access** (`systems_requested`, `select_multiple`, required): Select all the systems or applications you need access to.
* **Access Level Required** (`access_level`, `select_one`, required): Choose the level of access you require (e.g., read-only, standard user, etc.).
* **Access Start Date** (`access_start_date`, `date`, required): Enter the start date for the access.
* **Access End Date (if temporary)** (`access_end_date`, `date`, optional): If this is a temporary access request, enter the end date for the access.
* **Business Justification for Access** (`business_justification`, `text`, required): Explain why you need this access.
* **Manager Approval Status** (`manager_approval`, `select_one`, required): Select the status of the manager's approval (e.g., pending, approved, etc.).
* **Additional Notes** (`additional_notes`, `text`, optional): Provide any additional information about your request.
