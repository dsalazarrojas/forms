# Signout Audit And Payroll Survey - Help Guide
## Purpose
This form is designed to collect information about an employee's sign-out, including their hours worked, pay rate, and other relevant details. The form aims to track each employee's sign-out information accurately and efficiently.

## How To Complete This Form
1. Enter the employee's name, manager's name, and select the date and time of sign-out.
2. Enter the hours worked, pay rate, and payroll amount for the respective period.
3. Indicate the payroll frequency (yes or no) and select the applicable frequencies.
4. Provide the employee's email and phone number (if applicable).
5. Add any additional payroll notes (if necessary).

## Field-by-Field Explanation

* **Employee Name** (`employee_name`, text, required): Enter the employee's name who is signing out.
* **Manager Name** (`manager_name`, text, required): Enter the name of the employee's manager.
* **Start Date** (`start_date`, date, required): Enter the date the employee started working.
* **End Date** (`end_date`, date, required): Enter the date the employee ended working.
* **Hours Worked** (`hours_worked`, number, required): Enter the total hours worked.
* **Pay Rate** (`pay_rate`, text, required): Enter the employee's pay rate.
* **Payroll Amount** (`payroll_amount`, number, required): Enter the total payroll amount.
* **Payroll Frequency** (`payroll_frequency`, select_one, required): Indicate whether the employee is paid daily, weekly, bi-weekly, or otherwise.
* **Payroll Schedule** (`payroll_schedule`, select_multiple, optional): Select the days or periods the employee is paid (e.g., Monday to Friday).
* **Payroll Notes** (`payroll_notes`, note, optional): Enter any additional notes about the employee's payroll.
* **Email** (`email`, email, optional): Enter the employee's email address.
* **Phone** (`phone`, text, optional): Enter the employee's phone number.
* **Sign Out Time** (`sign_out_time`, time, required): Enter the time the employee signed out.
* **Break Time** (`break_time`, time, required): Enter the time the employee took a break.
* **Hours Worked 1**, **Hours Worked 2**, **Hours Worked 3**, **Hours Worked 4**, **Hours Worked 5**, **Hours Worked 6**, **Hours Worked 7**, **Hours Worked 8** (`hours_worked_1`, `hours_worked_2`, `hours_worked_3`, `hours_worked_4`, `hours_worked_5`, `hours_worked_6`, `hours_worked_7`, `hours_worked_8`, number, optional): Enter the hours worked for each respective period.
* **Payroll Frequency 1, **Payroll Frequency 2, **Payroll Frequency 3** (`payroll_frequency_1`, `payroll_frequency_2`, `payroll_frequency_3`, select_one, optional): Indicate whether the employee is paid daily, weekly, bi-weekly, or otherwise for each respective frequency.

## Tips

* Make sure to enter accurate information for each field to ensure correct pay calculation.
* Use the payroll frequency field to track changes in pay schedules.
* Use the payroll notes field for additional information about the employee's pay.
* Use the email and phone fields for employee contact information (if applicable).
* Review each field carefully before submitting the form.
