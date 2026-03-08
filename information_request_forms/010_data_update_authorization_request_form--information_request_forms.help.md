# Data Update Authorization Request Form - Help Guide
## Purpose
This form is used to request authorization for updating data. It is intended for employees who need to make changes to their personal data or other relevant information. The form is used to verify that the update is legitimate and to ensure that all necessary approvals are in place.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out your name and ID information (First Name, Last Name, Date of Birth, Employee ID, Email, Phone).
2. Select your department (e.g. Human Resources, Marketing, Finance, Operations, Sales).
3. If applicable, provide your manager's ID and name.
4. Indicate if you are authorized to update data (true/false).
5. Provide a reason for the update.
6. Enter the date of the update (approval date and update date).
7. Finally, confirm that you are the person making the update (Updated By).

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required/optional): Enter your first name.
* **Last Name** (`last_name`, `text`, required/optional): Enter your last name.
* **Date of Birth** (`date_of_birth`, `date`, required/optional): Enter your date of birth in the standard date format (mm/dd/yyyy).
* **Employee ID** (`employee_id`, `number`, required/optional): Enter your employee ID number.
* **Email** (`email`, `email`, required/optional): Enter your email address.
* **Phone** (`phone`, `text`, required/optional): Enter your phone number.
* **Department** (`department`, `select_one`, required/optional): Select your department (e.g. Human Resources, Marketing, Finance, Operations, Sales).
* **Department ID** (`department_id`, `number`, required/optional): Enter the department ID number.
* **Manager ID** (`manager_id`, `number`, required/optional): Enter your manager's ID number.
* **Manager Name** (`manager_name`, `text`, required/optional): Enter your manager's name.
* **Authorization** (`authorization`, `select_multiple`, required/optional): Check if you are authorized to update data (true/false).
* **Reason** (`reason`, `text`, required/optional): Provide a brief reason for the update.
* **Approval Date** (`approval_date`, `date`, required/optional): Enter the date of the approval.
* **Update Date** (`update_date`, `date`, required/optional): Enter the date of the update.
* **Updated By** (`updated_by`, `text`, required/optional): Confirm that you are the person making the update.
