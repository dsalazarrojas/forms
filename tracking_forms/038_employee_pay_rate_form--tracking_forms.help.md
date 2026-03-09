# Employee Pay Rate Form - Help Guide
## Purpose
The Employee Pay Rate Form is designed to collect and manage employee pay rate data, including frequency, currency, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields, including Employee Name, Email, Pay Date, Pay Frequency, and Pay Rate.
2. Select the relevant pay currency and symbol from the provided options.
3. Choose the appropriate employee status and department from the provided options.
4. Fill in any additional notes or review notes if necessary.
5. Review and submit the form for accurate and up-to-date information.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter the employee's name.
* **Pay Rate** (`pay_rate`, number, optional): Enter the employee's current pay rate. Leave this field blank if you're updating or adding a new pay rate.
* **Salary Currency** (`salary_currency`, select_one, required): Select the currency in which the employee is paid (USD, EUR, or GBP).
* **Currency Symbol** (`currency_symbol`, select_one, required): Select the symbol used to represent the chosen currency (e.g., $, £, or €).
* **Pay Frequency** (`pay_frequency`, select_multiple, required): Choose the frequency at which the employee is paid (Weekly, Bi-Weekly, Monthly, or Quarterly).
* **Pay Date** (`pay_date`, date, required): Enter the date on which the employee is paid (e.g., 01/01/2022).
* **Pay Date 1/2** (`pay_date1`/`pay_date2`, date, required): Enter the dates on which the employee is paid (e.g., 01/01/2022 and 01/02/2022).
* **Employee Status** (`employee_status1`/`employee_status2`, select_multiple, required): Choose the status of the employee (Active, Inactive, or Leave).
* **Employee Department** (`employee_department`, select_one, required): Select the department the employee belongs to (Marketing, Sales, or Support).
* **Manager Name** (`manager_name`, text, optional): Enter the name of the employee's manager.
* **Manager Email** (`manager_email`, email, required): Enter the manager's email address.
* **Manager Phone Number** (`manager_phone_number`, text, optional): Enter the manager's phone number.
* **Notes** (`notes`, note, optional): Fill in any additional notes or information about the employee.
* **Review Date** (`review_date`, time, required): Enter the date on which the review took place (e.g., 02/01/2022).
* **Review Notes** (`review_notes`, note, optional): Fill in any review notes or information from the reviewer.
* **Review Notes 2** (`review_notes2`, note, optional): Fill in any additional review notes or information from the second reviewer.
* **Employee Status 1/2** (`employee_status1`/`employee_status2`, select_multiple, required): Choose the status of the employee (Active, Inactive, or Leave).
* **Email** (`email`, email, required): Enter the employee's email address.
* **Phone Number** (`phone_number`, text, optional): Enter the employee's phone number.
