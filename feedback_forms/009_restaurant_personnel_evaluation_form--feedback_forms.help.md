# restaurant_personnel_evaluation_form - Help Guide
## Purpose
This form is designed to collect feedback and evaluations from employees about their colleagues or superiors during their shifts at the restaurant. It helps to assess their performance, identify areas of improvement, and track progress over time.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the name of the employee being evaluated.
2. Choose the date of the evaluation period.
3. Select the shift that the evaluation pertains to.
4. Enter the start and end times of the evaluation period.
5. Select the type of employee being evaluated (Management, Server, or Barista).
6. Provide any comments or feedback for the employee.
7. Enter a score for the employee's performance (out of 100).
8. Enter the name of the person who assigned the evaluation.
9. Enter the name of the person who assigned the evaluation to.

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required): Enter the name of the employee being evaluated.
* **Date** (`date`, date, required): Choose the date of the evaluation period.
* **Shift** (`shift`, select_one, required): Select the shift that the evaluation pertains to (Monday to Sunday).
* **Start Time** (`start_time`, select_multiple, required): Enter the start time of the evaluation period in 10-minute increments (e.g., 10:00, 10:30, etc.).
* **End Time** (`end_time`, time, required): Enter the end time of the evaluation period.
* **Employee Type** (`employee_type`, select_multiple, required): Select the type of employee being evaluated (Management, Server, or Barista).
* **Comments** (`comments`, note, optional): Provide any comments or feedback for the employee.
* **Score** (`score`, number, required): Enter a score for the employee's performance (out of 100).
* **Assigned To** (`assigned_to`, text, required): Enter the name of the person who assigned the evaluation.
* **Assigned By** (`assigned_by`, text, required): Enter the name of the person who assigned the evaluation.
