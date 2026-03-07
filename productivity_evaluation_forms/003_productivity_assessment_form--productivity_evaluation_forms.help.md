<thinking>...</thinking>

# Productivity Assessment Form - Help Guide
## Purpose
The Productivity Assessment Form is a tool used to evaluate the productivity level of employees across different departments. It helps management to track and compare the performance of employees in various areas of the organization.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee ID number to identify the employee being assessed.
2. Select the date on which the assessment was completed.
3. Provide a score out of 10 to rate the employee's productivity level.
4. Optionally, provide suggestions for areas of improvement.
5. Select the employee's productivity level (High, Medium, or Low) based on their performance.
6. Choose one or more departments where the employee works (Sales, Marketing, IT, or Operations).
7. Optionally, provide a text-based review of the employee's performance from their manager.
8. Optionally, add any additional comments from the employee.

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, `number`, required): Enter the employee's unique ID number assigned by the organization.
* **Date Completed** (`date_completed`, `date`, required): Select the date when the assessment was completed.
* **Assessment Score** (`assessment_score`, `number`, required): Rate the employee's productivity level out of 10.
* **Improvement Suggestions** (`improvement_suggestions`, `note`, optional): Optionally, add any areas where the employee can improve their productivity.
* **Productivity Level** (`productivity_level`, `select_one`, required): Select one of the three options: High, Medium, or Low, to rate the employee's productivity level.
* **Department** (`department`, `select_multiple`, required): Choose one or more departments where the employee works: Sales, Marketing, IT, or Operations.
* **Manager Review** (`manager_review`, `text`, optional): Add a text-based review of the employee's performance from their manager.
* **Employee Comments** (`employee_comments`, `text`, optional): Add any additional comments from the employee.
