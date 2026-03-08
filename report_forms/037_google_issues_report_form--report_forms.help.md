# google_issues_report_form - Help Guide
## Purpose
The Google Issues Report Form is designed to collect issues related to Google products, allowing users to report common issues efficiently.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select the Google product related to the issue you are reporting.
2. Choose the type of issue you are experiencing (Bug, Feature Request, or General Feedback).
3. Select the priority of the issue (High, Medium, or Low).
4. Choose the status of the issue (Open, Closed, or In Progress).
5. Optionally, provide the reporter's name and contact information.
6. Select a date and time when the issue occurred.
7. Submit the form to report the issue.

## Field-by-Field Explanation
* **Issue Subject** (`issue_subject`, text, optional): A brief description of the issue you are experiencing.
* **Issue Description** (`issue_description`, text, optional): A detailed description of the issue.
* **Google Product** (`google_product`, select_one, optional): Choose the Google product related to the issue (Google Drive, Google Docs, Google Sheets, or Google Slides).
* **Issue Type** (`issue_type`, select_one, required): Choose the type of issue you are experiencing (Bug, Feature Request, or General Feedback).
* **Issue Priority** (`issue_priority`, select_one, required): Choose the priority of the issue (High, Medium, or Low).
* **Issue Status** (`issue_status`, select_one, required): Choose the status of the issue (Open, Closed, or In Progress).
* **Reporter** (`reporter`, text, optional): Enter the name and contact information of the person reporting the issue.
* **Assignee** (`assignee`, text, optional): If the issue requires assignment, enter the name and contact information of the person assigned to resolve the issue.
* **Report Date** (`report_date`, date, optional): Enter the date when the issue occurred.
* **Reported At** (`reported_at`, time, optional): Enter the time when the issue occurred.
* **Updated At** (`updated_at`, time, optional): Enter the time when the issue was last updated.
