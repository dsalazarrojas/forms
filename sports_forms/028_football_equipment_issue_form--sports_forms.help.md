# Football Equipment Issue Form - Help Guide
## Purpose

This form is used to report and track football equipment issues.

## How To Complete This Form

To complete this form, follow these steps:

1. Enter the name of the player involved in the issue.
2. Select the date when the issue occurred.
3. Provide a detailed description of the problem.
4. Choose the type of equipment that is affected.
5. Enter the Equipment ID, if applicable.
6. Select the current status of the issue.
7. Choose who the issue is assigned to.
8. Add any additional notes related to the issue.
9. Enter a contact email (optional).
10. Enter a contact phone number (optional).

## Field-by-Field Explanation

* **Player Name** (`player_name`, text, required): Enter the name of the player involved in the issue.
* **Issue Date** (`issue_date`, date, required): Select the date when the issue occurred.
* **Issue Details** (`issue_details`, text, required): Provide a detailed description of the problem.
* **Team Member** (`team_member`, select_one, required): Choose the team that the player belongs to.
* **Equipment Type** (`equipment_type`, select_multiple, required): Select all equipment types that are affected by the issue.
* **Equipment ID** (`equipment_id`, text, optional): Enter the Equipment ID, if available.
* **Status** (`status`, select_one, required): Choose the current status of the issue.
* **Assigned To** (`assigned_to`, select_one, required): Choose who the issue is assigned to.
* **Notes** (`notes`, text, optional): Add any additional notes related to the issue.
* **Email** (`email`, email, optional): Enter a contact email (if applicable).
* **Phone** (`phone`, text, optional): Enter a contact phone number (if applicable).
* **Assigned Tool** (`assigned_tool`, select_one, optional): Choose who the issue is assigned to (if different from "Assigned To").
* **Category** (`category`, select_one, optional): Choose a category for the issue (if applicable).
