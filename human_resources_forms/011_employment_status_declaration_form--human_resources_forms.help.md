<thinking>...</thinking>

# employment_status_declaration_form - Help Guide

## Purpose
The purpose of this form is to collect information about an employee's employment status, including their active or inactive status, job title, supervisor's contact information, and other relevant details.

## How To Complete This Form

To complete this form, follow these steps:

1. Select the employment status of the employee by choosing "Active" or "Inactive" from the dropdown menu.
2. Enter the job title of the employee.
3. If applicable, enter the supervisor's name, phone number, and email address.
4. Enter the start and end dates of the employee's employment.
5. Confirm if the employee is currently employed with the company by selecting "Yes" or "No".
6. Enter the job location of the employee.
7. Enter the employee's supervisor relationship status and title.
8. Enter the employee's supervisor's contact information.
9. Confirm the employee's signature by signing with their name and date.
10. Enter the manager's signature, name, title, phone number, email address, and location.
11. Enter the manager's date and any additional notes.

## Field-by-Field Explanation

* **employment_status** (`employment_status`, select_one, required): Select the current employment status of the employee, either "Active" or "Inactive".
* **job_title** (`job_title`, text, required): Enter the title of the job held by the employee.
* **supervisor_name** (`supervisor_name`, text, optional): If applicable, enter the name of the employee's supervisor.
* **supervisor_phone** (`supervisor_phone`, text, optional): If applicable, enter the phone number of the employee's supervisor.
* **supervisor_email** (`supervisor_email`, email, optional): If applicable, enter the email address of the employee's supervisor.
* **employment_start_date** (`employment_start_date`, date, required): Enter the start date of the employee's employment.
* **employment_end_date** (`employment_end_date`, date, required): Enter the end date of the employee's employment.
* **employment_currently_employed** (`employment_currently_employed`, select_one, required): Confirm if the employee is currently employed with the company by selecting "Yes" or "No".
* **job_location** (`job_location`, text, required): Enter the location where the employee is working.
* **supervisor_phone** (`supervisor_phone`, text, optional): Enter the phone number of the employee's supervisor.
* **supervisor_email** (`supervisor_email`, email, optional): Enter the email address of the employee's supervisor.
* **job_notes** (`job_notes`, text, optional): Enter any additional notes about the job.
* **employment_status_notes** (`employment_status_notes`, text, optional): Enter any additional notes about the employment status.
* **manager_signature** (`manager_signature`, note, optional): This field is not applicable for this form.
* **employee_signature** (`employee_signature`, note, required): Confirm the employee's signature by signing with their name and date.
* **date** (`date`, date, required): Enter the date of the form completion.
* **manager_name** (`manager_name`, text, required): Enter the name of the manager.
* **manager_title** (`manager_title`, text, required): Enter the title of the manager.
* **manager_email** (`manager_email`, email, required): Enter the email address of the manager.
* **manager_phone** (`manager_phone`, text, required): Enter the phone number of the manager.
* **manager_location** (`manager_location`, text, required): Enter the location of the manager.
* **employment_status_declaration_form_notes** (`employment_status_declaration_form_notes`, text, optional): Enter any additional notes about the form.
* **manager_date** (`manager_date`, date, required): Enter the date of the manager's signature.
* **employee_supervisor_relationship** (`employee_supervisor_relationship`, select_one, required): Confirm if the employee has a supervisor by selecting "Yes" or "No".
* **employee_supervisor_title** (`employee_supervisor_title`, text, required): Enter the title of the employee's supervisor.
* **employee_supervisor_phone** (`employee_supervisor_phone`, text, required): Enter the phone number of the employee's supervisor.

Note: This help guide is based on the provided YAML fields and assumes that the form has the same structure and labels. If any fields are missing or have different labels, the guide may need to be adjusted accordingly.
