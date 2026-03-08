# it_security_incident_investigation_request_form - Help Guide

## Purpose
The "it_security_incident_investigation_request_form" is used to report and investigate security incidents within your organization. This form gathers essential information about the incident, enabling the IT security team to respond promptly and effectively.

## How To Complete This Form
To complete the form, follow these steps:
1. Fill out each section with accurate and relevant information.
2. Review and submit the form once complete.

## Field-by-Field Explanation
### Report Incident (1)
* **Report Incident** (`report_incident`, `text`, Optional):
	+ A brief description of the incident or issue reported.

### Incident Date (2)
* **Incident Date** (`incident_date`, `date`, Required):
	+ The date when the incident occurred or was first noticed.

### Incident Type (3)
* **Incident Type** (`incident_type`, `select_one`, Required):
	+ Select 'Yes' if the incident is a security-related issue, 'No' otherwise.

### Incident Details (4)
* **Incident Details** (`incident_details`, `note`, Optional):
	+ A detailed description of the incident, including steps taken to address it.

### Incident Location (5)
* **Incident Location** (`incident_location`, `text`, Optional):
	+ The location where the incident occurred or was noticed.

### Incident Reporter (6)
* **Incident Reporter** (`incident_reporter`, `text`, Required):
	+ The person who reported the incident, ideally including their name and title.

### Incident Department (7)
* **Incident Department** (`incident_department`, `select_one`, Optional):
	+ Select 'Yes' if the incident involves your department; 'No' otherwise.

### Incident Priority (8)
* **Incident Priority** (`incident_priority`, `select_one`, Required):
	+ Select the priority level of the incident, such as 'High' or 'Low'.

### Incident Status (9)
* **Incident Status** (`incident_status`, `select_one`, Required):
	+ Select the status of the incident, such as 'Active' or 'Inactive'.

### Incident Assigned To (10)
* **Incident Assigned To** (`incident_assigned_to`, `select_multiple`, Required):
	+ Select the team members or personnel assigned to resolve the incident.

### Incident Comments (11)
* **Incident Comments** (`incident_comments`, `note`, Optional):
	+ Additional comments or observations from the incident reporter.

### Incident Attachments (12)
* **Incident Attachments** (`incident_attachments`, `select_multiple`, Optional):
	+ Check if attachments or supporting files are relevant to the incident.

### Incident Resolved (13)
* **Incident Resolved** (`incident_resolved`, `text`, Required):
	+ A confirmation of whether the incident has been resolved.

### Incident Resolved Date (14)
* **Incident Resolved Date** (`incident_resolved_date`, `date`, Optional):
	+ The date the incident was resolved.

### Incident Reporter Comments (15)
* **Incident Reporter Comments** (`incident_reporter_comments`, `note`, Optional):
	+ Additional comments from the incident reporter.

### Incident Reviewer Comments (16)
* **Incident Reviewer Comments** (`incident_reviewer_comments`, `note`, Optional):
	+ Comments from the incident reviewer or investigator.

Note:
* This guide is a reference for users to follow when completing the form.
