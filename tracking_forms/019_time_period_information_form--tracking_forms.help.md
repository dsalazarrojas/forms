# Time Period Information Form - Help Guide
## Purpose
The Time Period Information Form is a tool used for tracking and managing projects. It helps to gather essential information about a project, including its time period status, project status, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Time Period ID field with a unique identifier for the time period.
2. Enter the project name in the project_name field.
3. Select the start date and start time of the time period from the calendar and time picker options.
4. Select the end date and end time of the time period from the calendar and time picker options.
5. Choose the time period status (Active or Inactive).
6. Choose the project status (Project Start, Project In Progress, or Project End).
7. Enter any additional notes about the time period in the time_period_notes field.
8. Enter the team name, team members, and team lead information.
9. Enter the project manager's contact information (email and phone).
10. Enter the submitter's contact information (email and phone).
11. Select the person who submitted the form (submitted_by).
12. Enter the date and time when the form was submitted.

## Field-by-Field Explanation

* **Time Period ID** (`time_period_id`, `text`, **required**): This is a unique identifier for the time period. Enter a unique name or code to identify the time period.
* **Project Name** (`project_name`, `text`, **optional**): Enter the name of the project related to this time period.
* **Start Date** (`start_date`, `date`, **required**): Select the start date of the time period using the calendar picker.
* **Start Time** (`start_time`, `time`, **required**): Select the start time of the time period using the time picker.
* **End Date** (`end_date`, `date`, **required**): Select the end date of the time period using the calendar picker.
* **End Time** (`end_time`, `time`, **required**): Select the end time of the time period using the time picker.
* **Time Period Status** (`time_period_status`, `select_one`, **required**): Choose whether the time period is Active or Inactive.
* **Project Status** (`project_status`, `select_one`, **required**): Choose the status of the project (Project Start, Project In Progress, or Project End).
* **Time Period Notes** (`time_period_notes`, `note`, **optional**): Enter any additional notes about the time period.
* **Email** (`email`, `email`, **optional**): Enter the team lead's or project manager's email address.
* **Phone** (`phone`, `text`, **optional**): Enter the team lead's or project manager's phone number.
* **Team Name** (`team_name`, `text`, **required**): Enter the name of the team responsible for the time period.
* **Team Members** (`team_members`, `text`, **required**): Enter the names of team members responsible for the time period.
* **Team Lead** (`team_lead`, `text`, **required**): Enter the name of the team lead responsible for the time period.
* **Team Lead Email** (`team_lead_email`, `email`, **optional**): Enter the email address of the team lead.
* **Team Lead Phone** (`team_lead_phone`, `text`, **optional**): Enter the phone number of the team lead.
* **Project Manager** (`project_manager`, `text`, **required**): Enter the name of the project manager responsible for the time period.
* **Project Manager Email** (`project_manager_email`, `email`, **optional**): Enter the email address of the project manager.
* **Project Manager Phone** (`project_manager_phone`, `text`, **optional**): Enter the phone number of the project manager.
* **Submitter** (`submitter`, `text`, **required**): Enter the name of the person who submitted the form.
* **Submitter Email** (`submitter_email`, `email`, **optional**): Enter the email address of the person who submitted the form.
* **Submitter Phone** (`submitter_phone`, `text`, **optional**): Enter the phone number of the person who submitted the form.
* **Submitted By** (`submitted_by`, `text`, **required**): Enter the name of the person who submitted the form.
* **Submitted On** (`submitted_on`, `date`, **required**): Enter the date when the form was submitted.
* **Submitted At** (`submitted_at`, `time`, **required**): Enter the time when the form was submitted.
