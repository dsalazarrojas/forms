# new_employee_details_form - Help Guide
## Purpose
The new_employee_details_form is a form used to collect and store employee information for Human Resources management. This form is used to create a new employee profile, which includes personal details, job information, and emergency contact information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the required fields: First Name, Last Name, Email, and Salary.
2. Provide optional details such as Job Title, Date of Birth, Hire Date, Department, Job Description, and Reporting Manager.
3. Add emergency contact information, including relationship, name, phone number, and email.
4. Confirm any job title changes, reporting manager changes, and emergency contact relationship changes if applicable.

## Field-by-Field Explanation

* **First Name** (`first_name`, `text`, required): Enter the employee's first name.
* **Last Name** (`last_name`, `text`, required): Enter the employee's last name.
* **Email** (`email`, `email`, required): Enter the employee's email address. Ensure it is a valid email address.
* **Job Title** (`job_title`, `select_multiple`, optional): Select the employee's job title (Yes or No).
* **Date of Birth** (`date_of_birth`, `date`, optional): Enter the employee's date of birth in the format MM/DD/YY.
* **Hire Date** (`hire_date`, `date`, optional): Enter the employee's hire date in the format MM/DD/YY.
* **Department** (`department`, `select_one`, optional): Select the employee's department (Yes or No).
* **Job Description** (`job_description`, `note`, optional): Enter a brief job description.
* **Reporting Manager** (`reporting_manager`, `select_one`, optional): Select whether the employee has a reporting manager (Yes or No).
* **Salary** (`salary`, `number`, required): Enter the employee's salary.
* **Employment Status** (`employment_status`, `select_one`, optional): Select the employee's employment status (Active or Inactive).
* **Job Status** (`job_status`, `select_one`, optional): Select the employee's job status (Active or Inactive).
* **Manager Note** (`manager_note`, `note`, optional): Add any notes from the manager.
* **Employee Notes** (`employee_notes`, `note`, optional): Add any notes from the employee.
* **Emergency Contact Name** (`emergency_contact_name`, `text`, optional): Enter the emergency contact's name.
* **Relationship** (`emergency_contact_relationship`, `select_one`, optional): Select the relationship with the emergency contact (Yes or No).
* **Emergency Contact Number** (`emergency_contact_number`, `text`, optional): Enter the emergency contact's phone number.
* **Emergency Contact Email** (`emergency_contact_email`, `email`, optional): Enter the emergency contact's email address.
* **Address** (`emergency_contact_address`, `text`, optional): Enter the emergency contact's address.
* **Job Title Change** (`job_title_change`, `select_one`, optional): Select whether there's a job title change (Yes or No).
* **Reporting Manager Change** (`reporting_manager_change`, `select_one`, optional): Select whether there's a reporting manager change (Yes or No).
* **Manager Note Change** (`manager_note_change`, `note`, optional): Add any notes from the manager regarding the job title change.
* **Employee Notes Change** (`employee_notes_change`, `note`, optional): Add any notes from the employee regarding the job title change.
* **Emergency Contact Relationship Change** (`emergency_contact_relationship_change`, `select_one`, optional): Select whether there's an emergency contact relationship change (Yes or No).
