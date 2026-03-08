# Web Issue Permission Form - Help Guide
## Purpose
The Web Issue Permission Form is designed to collect information about a web issue. Fill out this form to report a web issue that requires attention from the IT team or web development team.

## How To Complete This Form
1. Click on the "Web Issue Details" page to enter the basic information about the issue.
2. Select the "Access Level" of the issue from the dropdown menu, based on its severity.
3. Enter the "IT Requester" name and description of the issue in the text fields.
4. Choose the "Supervisor Approval" status from the dropdown menu.
5. Enter the "Date of Occurrence" of the issue using the date picker.
6. Enter a detailed "Description of Issue" describing the problem.
7. Select the "Web Team Approval" status from the dropdown menu.
8. Choose the "Issue Status" from the dropdown menu, whether it's "Resolved", "Open", or "Closed".
9. Enter the "Supervisor Name" who needs to be informed.
10. Finally, enter the "Created By", "Created At", and "Updated By", "Updated At" fields with the relevant information.

## Field-by-Field Explanation
* **Web Issue Details (Page 1)** (`web_issue_permission_form_1`, `note`, required)
    * This is the first page where you need to enter the basic information about the issue.
* **Access Level (Page 2)** (`access_level`, `select_multiple`, required)
    * Choose the severity level of the issue from the dropdown menu: Low, Medium, High, Critical.
* **IT Requester (Page 3)** (`it_requester`, `text`, required)
    * Enter the name and title of the person who reported the issue.
* **Supervisor Approval (Page 4)** (`supervisor_approval`, `select_one`, required)
    * Select whether the supervisor has approved or denied the issue.
* **Date of Occurrence (Page 5)** (`date_of_occurrence`, `date`, required)
    * Enter the date when the issue occurred using the date picker.
* **Description of Issue (Page 6)** (`description_of_issue`, `text`, required)
    * Enter a detailed description of the issue.
* **Web Team Approval (Page 7)** (`web_team_approval`, `select_one`, required)
    * Select whether the web team has approved or denied the issue.
* **Issue Report (Page 8)** (`issue_report`, `text`, optional)
    * This field is optional and only used for additional comments or reports.
* **Supervisor Name (Page 9)** (`supervisor_name`, `text`, required)
    * Enter the name of the supervisor who needs to be informed.
* **IT Approval (Page 10)** (`it_approvement`, `select_one`, required)
    * Select whether IT has approved or denied the issue.
* **Issue Status (Page 11)** (`issue_status`, `select_one`, required)
    * Choose the status of the issue from the dropdown menu: Resolved, Open, Closed.
* **Comments (Page 12)** (`comments`, `text`, optional)
    * This field is optional and only used for additional comments.
* **Created By (Page 13)** (`created_by`, `text`, required)
    * Enter the name of the person who created the issue.
* **Created At (Page 14)** (`created_at`, `date`, required)
    * Enter the date and time when the issue was created using the date picker.
* **Updated By (Page 15)** (`updated_by`, `text`, required)
    * Enter the name of the person who last updated the issue.
* **Updated At (Page 16)** (`updated_at`, `date`, required)
    * Enter the date and time when the issue was last updated using the date picker.
