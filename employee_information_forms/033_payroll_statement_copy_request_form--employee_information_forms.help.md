# Payroll Statement Copy Request Form - Help Guide
## Purpose
This form is used to request a copy of a payroll statement for a specific period. It's intended for employees to submit their requests for payroll statements, which can be used for various reasons such as tracking payroll history, verifying pay rates, or checking payment details.

## How To Complete This Form
1. Fill in the required fields with accurate information.
2. Select the correct pay frequency and statements to request.
3. Enter any additional details, if necessary.
4. Review the form carefully before submitting it.
5. Submit the form to request a payroll copy.

## Field-by-Field Explanation
* **Employee** (`employee`, `text`, required: false): Enter your employee name or ID to associate the request with your payroll information.
* **Pay Statement Start Date** (`pay_statement_start_date`, `date`, required: false): Select the start date of the payroll period you want to request.
* **Pay Statement End Date** (`pay_statement_end_date`, `date`, required: false): Select the end date of the payroll period you want to request.
* **Pay Frequency** (`pay_frequency`, `select_one`, required: false): Choose the frequency of your pay statements, such as weekly, biweekly, or monthly.
* **Pay Frequency Other** (`pay_frequency_other`, `text`, required: false): Enter any other pay frequency not listed in the options.
* **Pay Frequency Details** (`pay_frequency_details`, `text`, required: false): Provide any additional details about your pay frequency.
* **Payroll Statements** (`payroll_statements`, `select_multiple`, required: false): Select the specific payroll statements you want to request, such as pay stubs or payment receipts.
* **Pay Statement Frequency** (`pay_statement_frequency`, `select_one`, required: false): Choose the frequency of your payroll statements, such as weekly, biweekly, or monthly.
* **Employee ID** (`employee_id`, `number`, required: false): Enter your employee ID number for tracking purposes.
* **Employee Name** (`employee_name`, `text`, required: false): Enter your employee name for reference.
* **Employee Phone** (`employee_phone`, `text`, required: false): Enter your employee phone number for communication.
* **Employee Email** (`employee_email`, `email`, required: false): Enter your employee email address for communication.
* **Pay Rate** (`pay_rate`, `number`, required: false): Enter your current pay rate, if applicable.
* **Pay Frequency Details** (`pay_frequency_details`, `text`, required: false): Provide any additional details about your pay frequency.
* **Department** (`department`, `text`, required: false): Enter your department or job title.
* **Location** (`location`, `text`, required: false): Enter your work location or office address.
* **Manager Name** (`manager_name`, `text`, required: false): Enter your manager's name for reference.
* **Manager Title** (`manager_title`, `text`, required: false): Enter your manager's title or job title.
* **Manager Phone** (`manager_phone`, `text`, required: false): Enter your manager's phone number for communication.
* **Manager Email** (`manager_email`, `email`, required: false): Enter your manager's email address for communication.
* **Employee Notes** (`employee_notes`, `text`, required: false): Enter any additional notes or comments about your request.
* **Pay Rate Details** (`pay_rate_details`, `text`, required: false): Provide any additional details about your pay rate.
* **Manager Notes** (`manager_notes`, `text`, required: false): Enter any additional notes or comments from your manager.
* **Submit** (`submit`, `text`, required: false): Click submit to send your request to HR or payroll department.
