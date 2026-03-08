# Task Progress Monitoring Form - Help Guide
## Purpose
The Task Progress Monitoring Form is used by team members to report on their progress towards completing tasks assigned to them. This form helps team members to provide regular updates on their status and enables team leads to track progress and make informed decisions.

## How To Complete This Form
To complete this form, follow these steps:

1. Select whether you are a team member and if you have progress to report on the task.
2. Select the current status of your progress (Active or Inactive).
3. Select the date of the progress update.
4. If required, select the time of the progress update.
5. If required, type in the name of the team lead assigned to you for the task.
6. Click the submit button to send the form.

## Field-by-Field Explanation
* **Team Member** (`team_member`, `select_one`, required: false): Indicate whether you are a team member and if you have progress to report on the task. Select "Yes" if you are a team member and have progress, or "No" otherwise.
* **Progress Status** (`progress_status`, `select_multiple`, required: false): Select the current status of your progress towards completing the task. Choose "Active" if you are making progress, or "Inactive" if you are not.
* **Progress Date** (`progress_date`, `date`, required: false): Enter the date of the progress update.
* **Progress Time** (`progress_time`, `time`, required: false): If required, enter the time of the progress update.
* **Team Lead** (`team_lead`, `text`, required: false): If required, enter the name of the team lead assigned to you for the task.
* **Task Progress** (`task_progress`, `note`, required: false): Enter a brief note about your progress towards completing the task.
