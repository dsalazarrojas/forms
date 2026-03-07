<thinking>... (internal reasoning: The form "Work Completion Record Form" is likely used to track work completion records, which are used in project management to monitor progress, deadlines, and status updates. Its fields are designed to capture essential information such as status, completion date, time, comments, assigned tools, creator, and updater. The form may be used by project managers or team members to record work completion, providing visibility and accountability within a team or organization. There's no indication that this form is for public use or submission, so it's likely a tool for internal team usage or reporting purposes. No fields appear to be specifically designed for data collection or analysis, so it's likely meant for simple record-keeping and tracking. I'll create a concise and practical user guide to help end-users understand its purpose and usage.)... </thinking>

# Work Completion Record Form - Help Guide

## Purpose
The Work Completion Record Form is designed to record and track work completion records for monitoring progress, deadlines, and status updates within a team or organization.

## How To Complete This Form

1.  To start, ensure you have all the necessary information ready to fill out the form.
2.  Begin by selecting the status of the work: "Completed", "Not Started", or "In Progress".
3.  Enter the date the work was completed in the "date_completed" field.
4.  If applicable, enter the time the work was completed in the "time_completed" field.
5.  Use the "comments" field to provide any additional details about the work completion.
6.  In "assigned_tool", enter any tools used to complete the work.
7.  In "created_by" and "updated_by", enter the names of individuals or teams responsible for the work and updates, respectively.
8.  Lastly, enter the "created_date" and "updated_date" fields with the dates when the work was created and last updated.

## Field-by-Field Explanation

*   **Status** (`status`, select_one, required): Select the current status of the work: "Completed", "Not Started", or "In Progress".
*   **Date Completed** (`date_completed`, date, required): Enter the date on which the work was completed.
*   **Time Completed** (`time_completed`, time, optional): Enter the time the work was completed.
*   **Comments** (`comments`, note, optional): Provide any additional details about the work completion.
*   **Assigned Tool** (`assigned_tool`, text, optional): Enter the tool used to complete the work.
*   **Created By** (`created_by`, text, required): Enter the name of the individual or team responsible for creating the work.
*   **Created Date** (`created_date`, date, optional): Enter the date when the work was created.
*   **Updated By** (`updated_by`, text, optional): Enter the name of the individual or team responsible for the last update.
*   **Updated Date** (`updated_date`, date, optional): Enter the date when the work was last updated.
