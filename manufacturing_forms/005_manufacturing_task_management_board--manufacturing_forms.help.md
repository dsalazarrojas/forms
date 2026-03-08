# Manufacturing Task Management Board - Help Guide
## Purpose
The Manufacturing Task Management Board form is a tool used to manage tasks assigned to team members in a manufacturing setting. It helps to ensure that tasks are completed efficiently and effectively.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the "Assigned To" field from the list of team members.
2. Choose the "Task Priority" by selecting "Low", "Medium", or "High".
3. If applicable, select a "Due Date" for the task.
4. Select the "Status" of the task from "Active" or "Inactive".
5. Enter a brief "Task Description" to provide context for the task.
6. Select whether the task is "True" or "False" for "Task Type".
7. Choose the "Production Line" from the list of available lines.
8. Select the "Production Line Status" as "Active" or "Inactive".
9. Choose the "Task Responsibility" from the list of team members.
10. Enter any additional "Task Notes" as needed.
11. If applicable, select "Active" or "Inactive" for "Production Line Status".
12. Select "True" or "False" for "Task Category".

## Field-by-Field Explanation

* **Assigned To** (`assigned_to`, select_one, required): Select the team member assigned to complete the task.
* **Task Priority** (`task_priority`, select_one, required): Choose the priority level for the task, which can be "Low", "Medium", or "High".
* **Due Date** (`due_date`, date, optional): Enter the date when the task is due, if applicable.
* **Status** (`status`, select_one, optional): Select the status of the task as "Active" or "Inactive".
* **Task Description** (`task_description`, text, required): Enter a brief description of the task to provide context.
* **Task Type** (`task_type`, select_one, required): Select whether the task is "True" or "False".
* **Production Line** (`production_line`, select_one, required): Choose the production line where the task is to be completed.
* **Start Date** (`start_date`, date, optional): Enter the date when the task is expected to start, if applicable.
* **End Date** (`end_date`, date, optional): Enter the date when the task is expected to end, if applicable.
* **Task Responsibility** (`task_responsibility`, select_one, required): Select the team member responsible for the task.
* **Task Notes** (`task_notes`, text, optional): Enter any additional notes or comments about the task.
* **Production Line Status** (`production_line_status`, select_one, optional): Select the production line status as "Active" or "Inactive".
* **Task Category** (`task_category`, select_one, optional): Select whether the task is "True" or "False".
* **Assigned By** (`assigned_by`, select_one, optional): Select the person who assigned the task.
