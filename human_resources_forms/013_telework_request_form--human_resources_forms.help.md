<thinking>...</thinking>

# Telework Request Form - Help Guide

## Purpose
This form is used for employees to request telework arrangements, which allow them to work from home or another remote location. The form is used to gather information about the employee's request, including their name, job title, department, and reason for the request. The form is also used by managers to approve or decline telework requests and record their decision and reason for approval or decline.

## How To Complete This Form

To complete this form, follow these steps:

* Enter your employee name in the "Employee Name" field.
* Select your job title in the "Job Title" field.
* Indicate whether you are in the "Yes" or "No" department in the "Department" field.
* Enter the date you wish to start telework in the "Work From Home Date" field.
* Enter the date you wish to end telework in the "End Date" field.
* Enter your manager's name in the "Manager Name" field.
* Enter your manager's email address in the "Manager Email" field.
* Enter a brief reason for your telework request in the "Reason for Request" field.
* Select whether your telework request has been approved or declined by your manager in the "Approved by" field.
* If your request has been declined, select "Yes" in the "Declined by" field.
* Enter any comments or additional information about your request in the "Comments" field (optional).
* If your request has been approved, enter the date it was approved in the "Approved Date" field (optional).
* If your request has been declined, enter the date it was declined in the "Denied Date" field (optional).

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter your name as it appears on your employee ID.
* **Job Title** (`job_title`, text, required): Select your official job title from the list of options.
* **Department** (`department`, select_multiple, required): Select "Yes" if your department allows telework, "No" otherwise.
* **Work From Home Date** (`work_from_home_date`, date, required): Enter the date you wish to start telework.
* **End Date** (`end_date`, date, required): Enter the date you wish to end telework.
* **Manager Name** (`manager_name`, text, required): Enter your manager's name.
* **Manager Email** (`manager_email`, email, required): Enter your manager's email address.
* **Reason for Request** (`reason_for_request`, text, required): Enter a brief description of why you are requesting telework.
* **Approved by** (`approved_by`, select_one, required): Select "Yes" if your manager has approved your request, "No" otherwise.
* **Declined by** (`declined_by`, select_one, required): Select "Yes" if your request has been declined.
* **Comments** (`comments`, text, optional): Enter any additional information or comments about your request.
* **Approved Date** (`approved_date`, date, optional): Enter the date your request was approved (if applicable).
* **Denied Date** (`denied_date`, date, optional): Enter the date your request was declined (if applicable).
