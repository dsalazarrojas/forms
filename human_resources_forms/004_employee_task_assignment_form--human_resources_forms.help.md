# Employee Task Assignment Form - Help Guide
## Purpose
The Employee Task Assignment Form is a tool for tracking and documenting tasks assigned to employees. It provides a structured format for collecting and storing information about task assignments, including employee details, task details, and other relevant context.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the employee's name in the "Employee Name" field.
2. Enter the task name and details in the "Task Name" field.
3. Select the start date for the task in the "Start Date" field.
4. Select the end date for the task in the "End Date" field.
5. For tasks assigned to others, select "Yes" or "No" in the "Assigned To" field.
6. If a task is assigned to a specific tool, enter the tool's name in the "Assigned Tool" field.
7. If a tool is assigned to the task, select "Yes" or "No" in the "Assigned Tool Type" field.
8. Enter any comments or notes about the task in the "Comments" field.

## Field-by-Field Explanation
- **Employee Name** (`employee_name`, text, required: false): Enter the name of the employee to whom the task is assigned.
- **Task Name** (`task_name`, text, required: false): Enter a brief description of the task.
- **Start Date** (`start_date`, date, required: false): Select the start date for the task.
- **End Date** (`end_date`, date, required: false): Select the end date for the task.
- **Assigned To** (`assigned_to`, select_multiple, required: false): Check if the task is assigned to someone else. If yes, select the name of the assigned person.
- **Assigned By** (`assigned_by`, text, required: false): Enter the name of the person assigning the task.
- **Task Progress** (`task_progress`, select_one, required: false): Check the task's progress.
- **Comments** (`comments`, note, required: false): Enter any comments or notes about the task.
- **Assigned Tool** (`assigned_tool`, text, required: false): Enter the name of the tool assigned to the task.
- **Assigned Tool Type** (`assigned_tool_type`, text, required: false): Select the type of tool assigned to the task.
- **Assigned Tool User** (`assigned_tool_user`, select_one, required: false): Check if the task is assigned to a specific user.
- **Assigned Tool Password** (`assigned_tool_password`, text, required: false): Enter the password for the assigned tool (if applicable).
