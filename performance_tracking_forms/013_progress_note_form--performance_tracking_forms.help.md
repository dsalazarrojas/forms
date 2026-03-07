</thinking>

# Progress Note Form - Help Guide
## Purpose
The Progress Note Form is designed to track employee progress on projects. It helps managers and team leads to monitor and record the status of ongoing projects.

## How To Complete This Form
To complete the Progress Note Form, follow these steps:

1. Fill in the Employee Name field with the name of the employee working on the project.
2. Select the project status by choosing from the options "Active" or "Inactive" in the Project Status field.
3. Enter the date of completion for the project in the Date of Completion field (optional).
4. Add any comments or feedback from the employee in the Comments field (optional).
5. Enter any comments or notes from the employee in the Employee Comments field (optional).
6. Add any notes or updates from the employer in the Employer Notes field (optional).

## Field-by-Field Explanation
* **Employee Name** (`employee_name`, text, required/optional): Enter the name of the employee working on the project.
* **Project** (`project_id`, select_one, required/optional): Select the status of the project as either "Active" or "Inactive".
* **Project Status** (`project_status`, select_multiple, required/optional): Note: This field seems to be a mistake, as it's a select_multiple field, but only two options are available. Select "Active" or "Inactive" to indicate the current status of the project.
* **Date of Completion** (`date_of_completion`, date, required/optional): Enter the expected or actual completion date of the project.
* **Comments** (`comments`, note, required/optional): Add any additional comments or feedback from the employee about the project.
* **Employee Comments** (`employee_comments`, note, required/optional): Enter any comments or notes from the employee about the project.
* **Project Due Date** (`project_due_date`, date, required/optional): Note: This field seems to be redundant, as the Date of Completion field already exists. This field can be ignored.
* **Employer Notes** (`employer_notes`, note, required/optional): Add any additional notes or updates from the employer about the project.

Note: The required/optional status of fields can be confusing, but it seems that all fields are intended to be optional. If you're unsure, just fill in all fields to ensure accurate tracking. 

Tips:
* Make sure to update the form regularly to reflect changes in project status.
* Be concise when adding comments or notes to ensure easy review. 
* Use clear and descriptive language when writing comments or notes to avoid confusion.
