<thinking>...</thinking>

# Payroll System Access Registration Form - Help Guide
## Purpose
This form is used to register employees for access to the Payroll System. It collects employee-specific information, job title, department, and manager details. The form aims to provide a structured way of requesting access for new employees, ensuring that all necessary information is captured accurately and consistently.

## How To Complete This Form

1. Select the "Employee Info" page to start your registration.
2. Fill in the required fields for employee information, job title, job code, and department.
3. On the "Manager Info" page:
	* Enter your manager's name under "Manager Name".
	* Enter your manager's email address under "Manager Email".
4. For "Approval Level" and "Access Level", select the relevant options from the dropdown menus.
5. Add any additional notes or comments for the payroll system access request under "Notes" or "Approval Note" (if applicable).
6. Review your input carefully before submitting the form.

## Field-by-Field Explanation

* **Employee Info** (`employee_info`, text, required):
	+ Enter your name and any other relevant employee identification details.
* **Job Title** (`job_title`, text, required):
	+ Enter your job title as per the company's organizational structure.
* **Job Code** (`job_code`, text, required):
	+ Enter your job code as per the company's job classification.
* **Department** (`department`, select_one, required):
	+ Select your department from the available options.
* **Manager Name** (`manager_name`, text, required):
	+ Enter your direct manager's name.
* **Manager Email** (`manager_email`, email, required):
	+ Enter your manager's email address.
* **Approval Level** (`approval_level`, select_multiple, required):
	+ Select the approval levels for the payroll system access request (e.g., Approve, Reject, Pending).
* **Access Level** (`access_level`, select_one, required):
	+ Select the access level for the payroll system access request (e.g., Full, Limited).
* **Notes** (`notes`, note, optional):
	+ Add any additional comments or explanations for the request.
* **Approval Note** (`approval_note`, note, optional):
	+ Add any comments or explanations for the approval process.
## Tips

* Ensure that all fields are filled in accurately to avoid delays in processing your request.
* Double-check the "Manager Email" address for correctness.
* If you're unsure about any field, ask your manager or HR representative for assistance.
