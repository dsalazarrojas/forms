# Pod Start Checklist - Help Guide
## Purpose
The Pod Start Checklist is a form used to collect project details for new projects. It helps the team lead or project administrator to gather essential information about the project, ensuring that it is properly set up and managed.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide the team lead contact information.
2. Describe the project goals.
3. Specify the project duration.
4. Indicate whether there are team members for the project.
5. Select the team members responsible for the project.
6. Enter a brief description of the task.
7. Enter the due date for the task.
8. Choose the task status (Active or Inactive).
9. Enter any additional notes about the task.
10. Select any relevant task tags.

## Field-by-Field Explanation

* **Team Lead Contact** (`team_lead_contact`, text, required: false): Enter the name and contact information of the team lead or project administrator.
* **Project Goals** (`project_goals`, text, required: false): Briefly describe the main objectives of the project.
* **Project Duration** (`project_duration`, number, required: false): Specify the duration of the project in days or hours.
* **Team Members** (`team_members`, select_multiple, required: false): Choose whether there are team members for the project.
	+ Select 'Yes' if there are team members assigned to the project.
	+ Select 'No' if there are no team members assigned to the project.
* **Responsible Team Members** (`responsible_team_members`, select_multiple, required: false): Choose the team members responsible for the project.
	+ Select 'Yes' to indicate the team members are responsible.
	+ Select 'No' to indicate the team members are not responsible.
* **Task Description** (`task_description`, text, required: false): Enter a brief description of the task.
* **Task Due Date** (`task_duedate`, date, required: false): Specify the due date for the task.
* **Task Status** (`task_status`, select_one, required: false): Choose the task status.
	+ Select 'Active' if the task is currently active.
	+ Select 'Inactive' if the task is not active.
* **Task Notes** (`task_notes`, text, required: false): Enter any additional notes about the task.
* **Task Tags** (`task_tags`, select_multiple, required: false): Select any relevant tags for the task.
	+ Select 'Yes' to add a tag.
	+ Select 'No' to exclude a tag.

## Tips
- Make sure to fill out all required fields accurately.
- Use relevant and concise language for each field.
- If a field is marked as optional, provide information if it is relevant to the project.
- Double-check the form for any errors before submitting.
