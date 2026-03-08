# Team Leader Report Form - Help Guide
## Purpose
The Team Leader Report Form is a tool used for project management and team reporting. It helps project leaders gather essential information from their team members about project progress, status, and performance.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the team leader's name in the "team-leaders-name" field.
2. Select the reporting date and time for the report.
3. Choose the team members who have contributed to the project.
4. Provide a note about the team members' contribution.
5. Select the project status (in progress, completed, or on hold).
6. Provide additional comments or notes about the project.
7. Choose the project lead responsible for the project.
8. Add any further comments or notes about the project lead.
9. Fill in the date and time the form was created.
10. Enter any additional details about the form version.

## Field-by-Field Explanation

* **team-leaders-name** (`team_leaders_name`, `text`, required): Enter your name as the team leader responsible for this project.
* **reporting-date** (`reporting_date`, `date`, required): Select the date on which you are submitting this report.
* **reporting-time** (`reporting_time`, `time`, required): Choose the time on which you are submitting this report.
* **team-members** (`team_members`, `select_multiple`, required): Choose the team members who contributed to this project.
* **team-members-note** (`team_members_note`, `text`, optional): Add any notes about the team members' contribution.
* **project-status** (`project_status`, `select_one`, optional): Select the current status of the project (in progress, completed, or on hold).
* **project-status-note** (`project_status_note`, `text`, optional): Add any additional comments about the project status.
* **completed-tasks** (`completed_tasks`, `text`, optional): List any completed tasks related to the project.
* **notes** (`notes`, `text`, optional): Add any additional comments or notes about the project.
* **comments** (`comments`, `text`, optional): Add any comments about the project.
* **project-lead** (`project_lead`, `select_one`, optional): Choose the project lead responsible for the project.
* **project-lead-note** (`project_lead_note`, `text`, optional): Add any comments or notes about the project lead.
* **created-at** (`created_at`, `date`, required): The date and time the form was created, automatically filled in.
* **updated-at** (`updated_at`, `date`, required): The last date and time the form was updated, automatically filled in.
* **deleted-at** (`deleted_at`, `date`, required): The date and time the form was deleted, automatically filled in.
* **created-by** (`created_by`, `text`, required): The username who created the form, automatically filled in.
* **updated-by** (`updated_by`, `text`, required): The username who last updated the form, automatically filled in.
* **deleted-by** (`deleted_by`, `text`, required): The username who last deleted the form, automatically filled in.
* **form-version** (`form_version`, `text`, required): The current version of the form, automatically filled in.
* **form-version-history** (`form_version_history`, `text`, required): A history of previous form versions, automatically filled in.
* **assigned-to** (`assigned_to`, `text`, optional): The username to which the form was assigned, automatically filled in.
* **assigned-to-note** (`assigned_to_note`, `text`, optional): Add any comments or notes about the assignment.
* **assigned-by** (`assigned_by`, `text`, optional): The username who assigned the form to another user, automatically filled in.
* **submitted-at** (`submitted_at`, `date`, required): The date and time the form was submitted, automatically filled in.
* **submitted-by** (`submitted_by`, `select_one`, optional): Choose the user who submitted the form (User 1, User 2, or User 3).
* **project-lead** (`project_lead`, `select_one`, optional): Choose the project lead responsible for the project.
* **project-lead-note** (`project_lead_note`, `text`, optional): Add any comments or notes about the project lead.

## Tips
- Make sure to fill in all required fields before submitting the form.
- If you're unsure about any field, refer back to this help guide for clarification.
- If you need help with submitting the form, contact the form creator at form@gic.mx.
