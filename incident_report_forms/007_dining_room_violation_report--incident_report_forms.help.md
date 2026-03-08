# dining_room_violation_report - Help Guide
## Purpose
This form is used to report incidents related to the dining room area, such as maintenance issues, accidents, or other events that require follow-up action.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter a brief description of the incident in the "Issue Description" field.
2. Provide the date and time of the incident in the "Incident Date" and "Incident Time" fields, respectively.
3. Specify the location where the incident occurred in the "Incident Location" field.
4. If applicable, attach a photo of the incident as evidence in the "Photo Evidence" field.
5. Select the current status of the incident from the dropdown options in the "Incident Status" field.
6. If applicable, select one or more tools that were assigned to the incident in the "Assigned Tool" field.
7. Add any additional notes about the incident in the "Notes" field.
8. If applicable, schedule a follow-up action for the incident in the "Follow Up Date" and "Follow Up Time" fields.
9. Specify the status of the follow-up action from the dropdown options in the "Follow Up Status" field.
10. Add any additional follow-up notes in the "Follow Up Notes" field.

## Field-by-Field Explanation

* **Incident Details** (`incident_details`, text, optional): A brief description of the incident, including details about what happened and its severity.
* **Incident Date** (`incident_date`, date, optional): The date the incident occurred.
* **Incident Time** (`incident_time`, time, optional): The time the incident occurred.
* **Incident Location** (`incident_location`, text, optional): The location where the incident occurred.
* **Issue Description** (`issue_description`, text, optional): A detailed description of the issue that was experienced.
* **Photo Evidence** (`photo_evidence`, note, optional): Attach a photo as evidence to support the incident report.
* **Incident Status** (`incident_status`, select_one, optional): The current status of the incident (Active, Closed, or Pending).
* **Assigned Tool** (`assigned_tool`, select_multiple, optional): Select one or more tools that are assigned to the incident.
* **Notes** (`notes`, note, optional): Additional notes about the incident.
* **Follow Up Date** (`follow_up_date`, date, optional): The date scheduled for the follow-up action.
* **Follow Up Time** (`follow_up_time`, time, optional): The time scheduled for the follow-up action.
* **Follow Up Status** (`follow_up_status`, select_one, optional): The status of the follow-up action (Completed, Due, or In Progress).
* **Follow Up Notes** (`follow_up_notes`, note, optional): Additional notes about the follow-up action.
