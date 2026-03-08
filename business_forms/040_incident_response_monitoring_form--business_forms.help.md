# Incident Response Monitoring Form - Help Guide
## Purpose
This form is used to track and monitor incidents that have occurred in the organization. It helps to gather information about the incident, the response efforts, and the status changes made along the way.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select "Yes" or "No" to indicate if the incident has been resolved.
2. Choose the correct incident type from the options provided.
3. Enter a detailed description of the incident.
4. Select the correct date and time when the incident occurred.
5. Enter the location where the incident took place.
6. Specify the person who reported the incident.
7. Provide any relevant escalation details.
8. Enter the resolution of the incident.
9. Add any additional notes about the incident.
10. Select the priority and urgency levels of the incident.
11. Indicate if the incident is certified.
12. Choose who reported the incident and which department they belong to.
13. Enter the contact information of the person who reported the incident.
14. Enter status comments and changes.
15. Specify who made the status changes and when they were made.

## Field-by-Field Explanation

* **Monitoring Form** (`incident_response_monitoring_form`, select_multiple, required): 
  This field allows you to indicate if the incident has been resolved. Choose "Yes" if the incident has been resolved and "No" if it hasn't.
* **Incident Type** (`incident_type`, select_one, required): 
  Select the type of incident from the options provided.
* **Status** (`incident_status`, select_one, required): 
  Choose the current status of the incident from the options provided.
* **Description** (`incident_description`, text, required): 
  Enter a detailed description of what happened.
* **Date** (`incident_date`, date, required): 
  Enter the date when the incident occurred.
* **Time** (`incident_time`, time, required): 
  Enter the time when the incident occurred.
* **Location** (`incident_location`, text, required): 
  Enter the location where the incident took place.
* **Incident Reporter** (`incident_reporter`, text, required): 
  Enter the name of the person who reported the incident.
* **Escalation** (`incident_escalation`, text, required): 
  Enter any escalation details, if applicable.
* **Resolution** (`incident_resolution`, text, required): 
  Enter how the incident was resolved.
* **Notes** (`incident_notes`, text, required): 
  Add any additional notes about the incident.
* **Priority** (`incident_priority`, select_one, required): 
  Select the priority level of the incident from the options provided.
* **Urgency** (`incident_urgency`, select_one, required): 
  Select the urgency level of the incident from the options provided.
* **Certification** (`incident_certification`, select_one, required): 
  Indicate if the incident is certified.
* **Reported By** (`incident_reported_by`, select_one, required): 
  Choose who reported the incident from the options provided.
* **Reported By Department** (`incident_reported_by_department`, select_one, required): 
  Choose which department the person who reported the incident belongs to.
* **Reported By Contact** (`incident_reported_by_contact`, text, required): 
  Enter the contact information of the person who reported the incident.
* **Status Comments** (`incident_status_comments`, text, required): 
  Enter any comments about the status changes made.
* **Status Changed By** (`incident_status_changed_by`, text, required): 
  Specify who made the status changes.
* **Status Changed On** (`incident_status_changed_on`, date, required): 
  Enter the date when the status changes were made.
* **Status Changed By User** (`incident_status_changed_by_user`, text, required): 
  Specify who made the status changes.
* **Last Updated By** (`incident_last_updated_by`, text, optional): 
  Specify who last updated the incident status.
* **Last Updated On** (`incident_last_updated_on`, date, optional): 
  Enter the date when the incident status was last updated.
* **Last Updated By User** (`incident_last_updated_by_user`, text, optional): 
  Specify who last updated the incident status.
* **Last Updated Status** (`incident_last_updated_status`, text, optional): 
  Enter a brief description of the last updated status.

## Tips

* Review the form carefully before submitting.
* Use clear and concise language when filling out the form.
* Make sure to update the status fields regularly to reflect the current status of the incident.
* Use the escalation and resolution fields for accurate tracking and reporting.
* Enter detailed descriptions for all fields where applicable.
* Use the correct format for dates and times (e.g., DD/MM/YYYY, 10:00 AM).
* If you are unsure about any field or process, refer to the organization's incident response guidelines.
