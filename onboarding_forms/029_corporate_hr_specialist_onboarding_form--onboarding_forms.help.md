# corporate_hr_specialist_onboarding_form - Help Guide
## Purpose
This form is used to collect and store employee information for onboarding purposes.

## How To Complete This Form
Please follow the steps below to complete this form:

1. Fill in the employee's basic details such as job title, department, job status, hire date, and termination date.
2. Add their contact information like email, phone number, and address.
3. Specify their manager's information, including their name, title, email, and phone number.
4. Define their reporting structure, including their reporting manager's name, title, email, and phone number, as well as their reporting team and level.
5. Finally, provide details about their direct and indirect manager, if applicable.

## Field-by-Field Explanation
* **Employee Information (1)** (`employee_information`, `text`, required/optional): Enter the employee's details such as job title, department, job status, hire date, and termination date.
* **Job Title (2)** (`job_title`, `text`, required/optional): Enter the employee's job title as per their job description.
* **Department (3)** (`department`, `select_one`, required/optional): Select the employee's department from the dropdown list.
* **Job Status (4)** (`job_status`, `select_one`, required/optional): Select the employee's current job status from the dropdown list.
* **Hire Date (5)** (`hire_date`, `date`, required/optional): Enter the employee's hire date in the format MM/DD/YYYY.
* **Termination Date (6)** (`termination_date`, `date`, required/optional): Enter the employee's termination date in the format MM/DD/YYYY, if applicable.
* **Employee Email (7)** (`employee_email`, `email`, required/optional): Enter the employee's email address.
* **Phone Number (8)** (`phone_number`, `text`, required/optional): Enter the employee's phone number.
* **Address (9)** (`address`, `note`, required/optional): Enter the employee's address.
* **Manager Name (10)** (`manager_name`, `text`, required/optional): Enter the employee's manager's name.
* **Manager Email (11)** (`manager_email`, `email`, required/optional): Enter the manager's email address.
* **Manager Phone (12)** (`manager_phone`, `text`, required/optional): Enter the manager's phone number.
* **Manager Title (13)** (`manager_title`, `text`, required/optional): Enter the manager's title.
* **Reporting Manager (14)** (`reporting_manager`, `select_multiple`, required/optional): Select the employee's reporting manager's name from the list.
* **Reporting Manager Phone (15)** (`reporting_manager_phone`, `text`, required/optional): Enter the reporting manager's phone number.
* **Reporting Manager Email (16)** (`reporting_manager_email`, `email`, required/optional): Enter the reporting manager's email address.
* **Reporting Manager Title (17)** (`reporting_manager_title`, `text`, required/optional): Enter the reporting manager's title.
* **Team (18)** (`team`, `text`, required/optional): Enter the employee's team name.
* **Reporting Team (19)** (`reporting_team`, `text`, required/optional): Enter the reporting team name.
* **Reporting Line (20)** (`reporting_line`, `text`, required/optional): Enter the reporting line description.
* **Reporting Level (21)** (`reporting_level`, `text`, required/optional): Enter the reporting level description.
* **Reporting Line Manager (22)** (`reporting_line_manager`, `text`, required/optional): Enter the reporting line manager's name.
* **Direct Manager (23)** (`direct_manager`, `text`, required/optional): Enter the employee's direct manager's name.
* **Indirect Manager (24)** (`indirect_manager`, `text`, required/optional): Enter the employee's indirect manager's name.
* **Reporting Line Direct Manager (25)** (`reporting_line_direct_manager`, `text`, required/optional): Enter the employee's reporting line direct manager's name.

## Tips
- Make sure to double-check the employee's information for accuracy.
- If an employee has multiple reporting managers, ensure all managers are listed.
- If an employee has a complex reporting structure, provide a clear description of their reporting line.
