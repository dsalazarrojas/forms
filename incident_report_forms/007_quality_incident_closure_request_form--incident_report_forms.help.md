# Quality Incident Closure Request Form - Help Guide

## Purpose
The "Quality Incident Closure Request Form" is used to document and track the closure of incidents reported to the quality team. This form helps the quality team to efficiently manage and close incidents, ensuring that issues are resolved and lessons are learned.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the Incident Details (page 1).
2. Select the Incident Status and Action Status as per the incident's current state.
3. Select the Quality Team member who is handling the incident.
4. Select the Action Date and Approval Date for the closure of the incident, if applicable.
5. Enter the Closure Reason for the incident.
6. Select the Final Status of the incident.
7. Enter the Incident ID (if provided).
8. If necessary, enter any additional details for the Assigned To field.

## Field-by-Field Explanation

* **Incident Details** (`incident_details`, text, not required):
	+ Use this field to describe the incident that is being closed.
* **Incident Status** (`incident_status`, select_one, not required):
	+ Select the current status of the incident, which can be Open, Closed, On-going, or In Progress.
* **Quality Team** (`quality_team`, text, not required):
	+ Enter the name or ID of the quality team member handling the incident.
* **Action Status** (`action_status`, select_multiple, not required):
	+ Select the current action status of the incident, which can be Approved, Pending, or Rejected.
* **Approval Date** (`approval_date`, date, not required):
	+ Enter the date the incident was approved, if applicable.
* **Closure Date** (`closure_date`, date, not required):
	+ Enter the date the incident was closed.
* **Closure Reason** (`closure_reason`, text, not required):
	+ Enter a brief description for the reason of the closure.
* **Final Status** (`final_status`, select_one, not required):
	+ Select the final status of the incident, which can be Open or Closed.
* **Incident ID** (`incident_id`, text, not required):
	+ Enter the incident ID, if provided.
* **Action Date** (`action_date`, date, not required):
	+ Enter the date the incident's action was taken, if applicable.
* **Assigned To** (`assigned_to`, text, not required):
	+ Enter the person or team assigned to resolve the incident.
* **On-going** (`action_status`, select_one, not required):
	+ Note: This field might be redundant with "Incident Status" field above.
