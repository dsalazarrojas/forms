# Employee Pay Period Submission - Help Guide
## Purpose
The Employee Pay Period Submission form is used to collect information about an employee's pay period, which is essential for accurate payroll processing.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form carefully and ensure you have all required information before submitting.
2. Fill in the Submission field with a brief description of your submission.
3. Enter your pay cycle in the pay_cycle field.
4. Enter your regular hours worked during the pay period in the Regular Hours field.
5. Enter your overtime hours worked during the pay period in the Overtime Hours field.
6. Check the "Submitted By" field and select "Yes" if you submitted this form, "No" otherwise.
7. Enter the date you submitted this form in the Submission Date field.
8. Enter the date for the pay cycle in the Pay Cycle Date field.
9. Check the "Submitted User" field and select "Yes" if you submitted this form as a user, "No" otherwise.
10. Enter your Employee ID in the Employee ID field.
11. If you have any additional comments or notes, enter them in the Notes field.

## Field-by-Field Explanation
* **Submission** (`submission`, text, optional): A brief description of your submission.
* **pay_cycle** (`pay_cycle`, text, optional): Your pay cycle.
* **Regular Hours** (`regular_hours`, number, optional): Your regular hours worked during the pay period.
* **Overtime Hours** (`overtime_hours`, number, optional): Your overtime hours worked during the pay period.
* **Submitted By** (`submitted_by`, select_one, optional): Check "Yes" if you submitted this form, "No" otherwise.
* **Date** (`submitted_date`, date, optional): The date you submitted this form.
* **Submission Date** (`submission_date`, date, optional): The date for the submission.
* **Pay Cycle Date** (`pay_cycle_date`, date, optional): The date for the pay cycle.
* **User** (`submitted_user`, select_one, optional): Check "Yes" if you submitted this form as a user, "No" otherwise.
* **Employee ID** (`employee_id`, select_one, optional): Your Employee ID.
* **Notes** (`notes`, note, optional): Any additional comments or notes you have.
