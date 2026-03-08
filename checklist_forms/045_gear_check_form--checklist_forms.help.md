# Gear Check Form - Help Guide
## Purpose
The Gear Check Form is used to report and record information about equipment issues, inspections, and maintenance activities.

## How To Complete This Form
To complete this form, please follow these steps:
1. Select "Equipment Inspection" as the relevant page.
2. Briefly describe the issue with the equipment in the "Issue Description" field.
3. Choose one of the possible follow-up actions for the equipment in the "Follow-up Action" field.
4. Answer "Yes" or "No" to whether the issue was reported by the current user in the "Reported By" field.
5. Select a date when the issue was reported using the "Reported Date" field.
6. Select a date when the issue was resolved using the "Resolved Date" field.
7. Answer "Yes" or "No" to whether the issue was resolved in the "Resolved By" field.
8. Provide a detailed description of the equipment condition in the "Equipment Condition" field.
9. Select the priority level of the issue from the available options in the "Issue Priority" field.

## Field-by-Field Explanation
* **Equipment Inspection** (`equipment_inspection`, note, required: false): This page serves as a header for the form and indicates that this form is used for recording equipment inspections.
* **Issue Description** (`issue_description`, text, required: false): Briefly describe the issue with the equipment.
* **Follow-up Action** (`follow_up_action`, select multiple, required: false): Choose one or more follow-up actions that the equipment requires, such as cleaning or repair.
* **Reported By** (`reported_by`, select one, required: false): Answer "Yes" or "No" to indicate whether the issue was reported by the current user.
* **Reported Date** (`reported_date`, date, required: false): Select a date when the issue was reported.
* **Resolved Date** (`resolved_date`, date, required: false): Select a date when the issue was resolved.
* **Resolved By** (`resolved_by`, select one, required: false): Answer "Yes" or "No" to indicate whether the issue was resolved.
* **Equipment Condition** (`equipment_condition`, text, required: false): Provide a detailed description of the equipment condition.
* **Issue Priority** (`issue_priority`, select one, required: false): Select the priority level of the issue, such as Low, High, or Critical.
