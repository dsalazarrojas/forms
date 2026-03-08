<thinking>Internal Note: This form is designed to collect information for releasing tasks, and it is crucial to provide clear guidance to users to avoid duplication or incorrect submission. The purpose of this form is to gather essential details about a task, including its name, assigned team, due date, priority, and other relevant attributes. The goal is to ensure accurate and comprehensive task information is recorded and tracked. The form should be filled out by the task manager or a delegated team member, and it's essential to understand each field's significance to avoid missing crucial information.</thinking>

# release_task_form - Help Guide
## Purpose
The "Release Task Form" is used to collect and record information about a task for release and tracking purposes.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the task's name and provide a brief description.
2. Assign the task to a team member or team members (if applicable).
3. Choose the priority level of the task.
4. Select the status of the task.
5. Choose the tool used for the task (if applicable).
6. Select the category and tags for the task (if applicable).
7. Upload any attachments related to the task (if applicable).
8. Add comments or notes about the task (if applicable).
9. Provide the task's due date.
10. Enter the project name, manager's name, team name, and team members (required fields).
11. Enter the task's creator's name and the updated-by field (required fields).

## Field-by-Field Explanation
* **Task Name** (`task_name`, text, required): Enter the name of the task.
* **Assigned To** (`assigned_to`, select_multiple, optional): Select the team members responsible for this task.
* **Start Date** (`start_date`, date, optional): Enter the start date of the task.
* **End Date** (`end_date`, date, optional): Enter the end date of the task.
* **Due Date** (`due_date`, date, optional): Enter the due date of the task.
* **Priority** (`priority`, select_one, optional): Choose the priority level of the task.
* **Status** (`status`, select_one, optional): Select the status of the task.
* **Tool** (`prophets_tool`, select_one, optional): Choose the tool used for this task.
* **Category** (`category`, select_multiple, optional): Select the categories for the task.
* **Tags** (`tags`, select_multiple, optional): Choose the tags for the task.
* **Attachments** (`attachments`, select_multiple, optional): Upload any attachments related to the task.
* **Comments** (`comments`, text, optional): Enter any additional comments or notes about the task.
* **Notes** (`note`, text, optional): Enter any additional notes about the task.
* **Email** (`email`, email, optional): Enter the contact email address (if applicable).
* **Phone** (`phone`, text, optional): Enter the contact phone number (if applicable).
* **Task Type** (`task_type`, select_one, optional): Select the type of task.
* **Project Name** (`project_name`, text, required): Enter the project name.
* **Project Manager** (`project_manager`, text, required): Enter the project manager's name.
* **Team Name** (`team_name`, text, required): Enter the team name.
* **Team Members** (`team_members`, text, required): Enter the team members responsible for this task.
* **Task Manager** (`task_manager`, text, required): Enter the task manager's name.
* **Created Date** (`created_date`, time, optional): Enter the created date.
* **Created By** (`created_by`, text, required): Enter the created-by field.
* **Updated By** (`updated_by`, text, required): Enter the updated-by field.
