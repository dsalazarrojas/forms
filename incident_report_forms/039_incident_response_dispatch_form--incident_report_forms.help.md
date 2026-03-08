# Incident Response Dispatch Form - Help Guide
## Purpose
The Incident Response Dispatch Form is used to document and track incidents within the organization, ensuring that they are properly reported, assigned, and followed up on in a timely manner.

## How To Complete This Form

1. Fill out each field completely and accurately to ensure that all necessary information is provided.
2. If a field is not applicable or not relevant to the incident, mark it as `N/A` (Not Applicable) or provide a brief explanation for why it is not applicable.
3. Use the options provided in the `Select One` and `Select Multiple` fields to choose the most accurate option that describes the incident.
4. When entering dates and times, use the format `MM/DD/YYYY HH:MM:SS` (e.g., 01/01/2024 12:00:00).
5. Use the space provided for the `Notes` field to provide any additional information about the incident.

## Field-by-Field Explanation

* **Incident Report** (`incident_response_dispatch_form_1`): A short summary of the incident.
	+ Type: text
	+ Required: false
* **Dispatch Details** (`dispatch_details`): Additional information related to the dispatch of the incident.
	+ Type: text
	+ Required: false
* **Incident Response Status** (`incident_response_status`): The current status of the response to the incident.
	+ Type: text
	+ Required: false
* **Incident Reporter** (`incident_reporter`): The person who reported the incident.
	+ Type: select one
	+ Options: Operations Manager, Team Member, Other
	+ Required: false
* **Response Assignment** (`response_assignment`): The personnel assigned to respond to the incident.
	+ Type: select multiple
	+ Options: Operations Manager, Team Member, Other
	+ Required: false
* **Incident Priority** (`incident_priority`): The level of priority assigned to the incident.
	+ Type: select one
	+ Options: High, Low, Medium
	+ Required: false
* **Incident Category** (`incident_category`): The category of the incident.
	+ Type: select multiple
	+ Options: Environmental Emergency, Security Breach, Medical Emergency, Other
	+ Required: false
* **Incident Description** (`incident_description`): A detailed description of the incident.
	+ Type: text
	+ Required: false
* **Incident Date** (`incident_date`): The date of the incident.
	+ Type: date
	+ Required: false
* **Incident Time** (`incident_time`): The time of the incident.
	+ Type: time
	+ Required: false
* **Incident Location** (`incident_location`): The location of the incident.
	+ Type: text
	+ Required: false
* **Response Time** (`response_time`): The time taken for response.
	+ Type: time
	+ Required: false
* **Response Status** (`response_status`): The status of the response.
	+ Type: select one
	+ Options: Completed, In Progress, Delayed
	+ Required: false
* **Incident Type** (`incident_type`): The type of incident.
	+ Type: select one
	+ Options: Fire, Police, Medical
	+ Required: false
* **Incident Number** (`incident_number`): The incident report number.
	+ Type: number
	+ Required: false
* **Incident Status** (`incident_status`): The status of the incident.
	+ Type: select one
	+ Options: Active, Closed, Delayed
	+ Required: false
* **Incident Date 2** (`incident_date_2`): The date of the incident 2.
	+ Type: date
	+ Required: false
* **Incident Time 2** (`incident_time_2`): The time of the incident 2.
	+ Type: time
	+ Required: false
* **Incident Location 2** (`incident_location_2`): The location of the incident 2.
	+ Type: text
	+ Required: false
* **Notes** (`notes`): Additional information about the incident.
	+ Type: note
	+ Required: false
* **Contact Email** (`email`): The contact email for follow-up.
	+ Type: email
	+ Required: false
* **Contact Phone** (`phone`): The contact phone number for follow-up.
	+ Type: text
	+ Required: false
* **Assigned User** (`assigned_user`): The user assigned to the incident.
	+ Type: select one
	+ Options: Operations Manager, Team Member, Other
	+ Required: false
* **Follow-up Date** (`follow_up_date`): The date to follow up on the incident.
	+ Type: date
	+ Required: false
* **Follow-up Status** (`follow_up_status`): The status of the follow-up.
	+ Type: select one
	+ Options: Completed, In Progress, Delayed
	+ Required: false
