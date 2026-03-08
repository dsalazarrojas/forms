# Moderation Case Submission - Help Guide
## Purpose
This form is used to submit a moderation case to the moderation team for review and handling. It is essential to use this form when reporting incidents that require moderator attention. Before submitting this form, please ensure you have not already reported a similar incident or case.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields, denoted by an asterisk (*) in the label.
2. Provide a clear and concise title for the case.
3. Describe the incident in the description field.
4. Select the priority of the case from the priority dropdown menu.
5. Choose the severity of the incident from the severity dropdown menu.
6. Indicate if you would like to follow up on the case in the follow up field.
7. Provide your email address and phone number for communication.
8. Add any additional case notes if necessary.
9. Select the tool used to handle the case from the assigned tool dropdown menu.
10. Choose the status of the case from the case status dropdown menu.

## Field-by-Field Explanation

* **Incident Report** (`incident_report`, text, optional): A brief description of the incident or case.
* **Description** (`description`, text, optional): A clear and concise explanation of the incident or case.
* **Date** (`date`, date, optional): The date of the incident or case.
* **Time** (`time`, time, optional): The time of the incident or case.
* **Priority** (`priority`, select_one, optional): The priority level of the case, with options:
	+ High
	+ Medium
	+ Low
* **Severity** (`severity`, select_multiple, optional): The level of severity of the incident or case, with options:
	+ Mild
	+ Moderate
	+ Severe
	+ Very Severe
* **Follow Up** (`follow_up`, select_multiple, optional): Indicate if you would like to follow up on the case, with options:
	+ True
	+ False
* **Email** (`email`, email, optional): Your email address for communication.
* **Phone** (`phone`, text, optional): Your phone number for communication.
* **Case Notes** (`case_notes`, note, optional): Additional notes about the case.
* **Assigned Tool** (`assigned_tool`, select_one, optional): The tool used to handle the case, with options:
	+ Chatjimmy
	+ Other
* **Case Status** (`case_status`, select_one, optional): The status of the case, with options:
	+ New
	+ In Progress
	+ Resolved
	+ Closed
* **Follow Up Details** (`follow_up_details`, text, optional): Additional details about follow up.
* **Additional Notes** (`additional_notes`, text, optional): Any additional information about the case.
