# Calm Resolve Support Log - Help Guide
## Purpose
The Calm Resolve Support Log form is designed to capture key information about support sessions, including staff names, client information, and resolution details. This guide will walk you through each field to help you complete the form accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields for Staff Name and Client Name, which are essential for tracking and follow-up purposes.
2. Select a valid date for the Session Date, which helps record the timing of the support session.
3. Optionally, enter the Session Time if applicable.
4. Provide a Brief Description of the issue in the Issue Summary field, which will help identify the problem.
5. Document the Actions Taken to resolve the issue in the Actions Taken field.
6. Indicate the Resolution Status of the issue, choosing from Resolved, Escalated, or Pending.
7. Confirm whether Further Action is required, and if so, select True or False.
8. If follow-up action is required, assign the staff member to follow up in the Follow Up Assigned To field.
9. Add any Additional Notes for further comments or observations in the Additional Notes field.

## Field-by-Field Explanation
* **Staff Name** (`staff_name`, `text`, required): This field is for identifying the support staff who handled the session. Enter the actual name of the staff member.
* **Client Name** (`client_name`, `text`, required): This field is for identifying the person who received support. Enter the actual name of the client or customer.
* **Session Date** (`session_date`, `date`, required): Enter the date the support session took place, using the standard date format (e.g., YYYY-MM-DD).
* **Session Time** (`session_time`, `time`, optional): This field is for entering the time the session started. Enter the time using the 24-hour format (e.g., 14:30).
* **Issue Summary** (`issue_summary`, `text`, required): Provide a brief description of the problem or issue.
* **Actions Taken** (`actions_taken`, `text`, required): Describe the steps taken during the session to resolve the issue.
* **Resolution Status** (`resolution_status`, `select_one`, required): Choose one of the three options: Resolved, Escalated, or Pending, to indicate the issue's current status.
* **Follow Up Required** (`follow_up_required`, `select_one`, required): Check True if further action is required; False otherwise.
* **Follow Up Assigned To** (`follow_up_by`, `text`, optional): If follow-up action is required, enter the name of the staff member assigned to follow up.
* **Additional Notes** (`notes`, `text`, optional): Any further comments or observations can be added here.
