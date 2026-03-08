# Quality Nonconformance Summary Report - Help Guide
## Purpose
The Quality Nonconformance Summary Report is used to document and track quality nonconformance incidents within an organization. This report provides a centralized platform to collect information about incidents, categorize them, and assign actions for corrective and follow-up activities.

## How To Complete This Form
To complete this form, follow these steps:

1. Provide a brief description of the incident in the "Incident" field.
2. Categorize the incident by selecting the relevant option from the "Categorize Issue" field.
3. Specify the severity of the incident by choosing the appropriate option from the "Severity" field.
4. If applicable, provide a corrective action taken or planned in the "Corrective Action" field.
5. Provide an update on the status of corrective actions taken or planned in the "Follow-up Action" field.
6. Select the report status by choosing the relevant option from the "Report Status" field.
7. If applicable, specify the person assigned to handle the incident in the "Assigned To" field.
8. If applicable, specify the person reviewing the report in the "Reviewer" field.
9. If applicable, provide a date for review in the "Date Reviewed" field.
10. Add any additional comments in the "Comments" field.
11. If applicable, specify the incident date in the "Incident Date" field.
12. If applicable, specify the report date in the "Report Date" field.
13. If applicable, specify the due date for follow-up in the "Follow-up Due Date" field.
14. If applicable, select the follow-up status by choosing the relevant option from the "Follow-up Status" field.
15. If applicable, provide notes on the follow-up in the "Follow-up Notes" field.
16. If applicable, specify the person responsible for the follow-up in the "Follow-up Reviewer" field.
17. If applicable, specify the due date for the follow-up review in the "Follow-up Review Date" field.
18. If applicable, select the follow-up review status by choosing the relevant option from the "Follow-up Review Status" field.

## Field-by-Field Explanation

### Summary (Summary)
* **Summary (Summary)** (`summary`, `note`, optional): A brief description of the incident.

### Incident (Incident)
* **Incident (Incident)** (`incident`, `text`, optional): Briefly describe the incident.

### Categorize Issue (Categorize Issue)
* **Categorize Issue (Categorize Issue)** (`categorization`, `select_one`, optional): Categorize the incident by selecting the relevant option from the list.
	+ Options: Equipment, Material, Process, Software, Training, Other

### Severity (Severity)
* **Severity (Severity)** (`severity`, `select_one`, optional): Specify the severity of the incident by choosing the relevant option from the list.
	+ Options: Critical, Major, Minor, Informational

### Corrective Action (Corrective Action)
* **Corrective Action (Corrective Action)** (`corrective_action`, `text`, optional): Specify a corrective action taken or planned to prevent future occurrences.

### Follow-up Action (Follow-up Action)
* **Follow-up Action (Follow-up Action)** (`follow_up_action`, `text`, optional): Provide an update on the status of corrective actions taken or planned.

### Review Date (Review Date)
* **Review Date (Review Date)** (`review_date`, `date`, optional): If applicable, specify the date for review.

### Report Status (Report Status)
* **Report Status (Report Status)** (`report_status`, `select_one`, optional): Select the report status by choosing the relevant option from the list.
	+ Options: Draft, Completed, Cancelled

### Assigned To (Assigned To)
* **Assigned To (Assigned To)** (`assigned_to`, `text`, optional): If applicable, specify the person assigned to handle the incident.

### Reviewed By (Reviewed By)
* **Reviewed By (Reviewed By)** (`reviewer`, `text`, optional): If applicable, specify the person reviewing the report.

### Date Reviewed (Date Reviewed)
* **Date Reviewed (Date Reviewed)** (`date_reviewed`, `date`, optional): If applicable, specify the date for review.

### Comments (Comments)
* **Comments (Comments)** (`comments`, `note`, optional): Add any additional comments.

### Incident Date (Incident Date)
* **Incident Date (Incident Date)** (`incident_date`, `date`, optional): If applicable, specify the incident date.

### Report Date (Report Date)
* **Report Date (Report Date)** (`report_date`, `date`, optional): If applicable, specify the report date.

### Follow-up Due Date (Follow-up Due Date)
* **Follow-up Due Date (Follow-up Due Date)** (`follow_up_due_date`, `date`, optional): If applicable, specify the due date for follow-up.

### Follow-up Status (Follow-up Status)
* **Follow-up Status (Follow-up Status)** (`follow_up_status`, `select_one`, optional): Select the follow-up status by choosing the relevant option from the list.
	+ Options: Not Started, In Progress, Complete

### Follow-up Notes (Follow-up Notes)
* **Follow-up Notes (Follow-up Notes)** (`follow_up_notes`, `note`, optional): Provide notes on the follow-up.

### Follow-up Reviewer (Follow-up Reviewer)
* **Follow-up Reviewer (Follow-up Reviewer)** (`follow_up_reviewer`, `text`, optional): If applicable, specify the person responsible for the follow-up review.

### Follow-up Review Date (Follow-up Review Date)
* **Follow-up Review Date (Follow-up Review Date)** (`follow_up_review_date`, `date`, optional): If applicable, specify the due date for the follow-up review.

### Follow-up Review Status (Follow-up Review Status)
* **Follow-up Review Status (Follow-up Review Status)** (`follow_up_review_status`, `select_one`, optional): Select the follow-up review status by choosing the relevant option from the list.
	+ Options: Not Started, In Progress, Complete

### Report Due Date (Report Due Date)
* **Report Due Date (Report Due Date)** (`report_due_date`, `date`, optional): If applicable, specify the due date for the report.

### Follow-up Status (Follow-up Review Status)
* **Follow-up Review Status (Follow-up Review Status)** (`follow_up_review_status`, `select_one`, optional): This field is not used in the report, but its presence is required in the input schema.

### Reviewer (Reviewer)
* **Reviewer (Reviewer)** (`reviewer`, `text`, optional): If applicable, specify the person reviewing the report.

### Follow-up Reviewer (Follow-up Reviewer)
* **Follow-up Reviewer (Follow-up Reviewer)** (`follow_up_reviewer`, `text`, optional): If applicable, specify the person responsible for the follow-up review. 

### Follow-up Review Status (Follow-up Review Status)
* **Follow-up Review Status (Follow-up Review Status)** (`follow_up_review_status`, `select_one`, optional): Select the follow-up review status by choosing the relevant option from the list.
	+ Options: Not Started, In Progress, Complete

Note: Please verify that the above fields and their descriptions are correctly represented in the output. I've made the best effort to map each field with the provided YAML schema. 

Also, please review the date fields for consistency in formatting.
