<thinking>
This form is intended to collect information related to workplace safety incidents. It is crucial that only relevant and accurate information is provided to ensure the effectiveness of the incident report. Please do not attempt to access this form if you are not authorized to do so. This form should only be used for legitimate incident reporting purposes. 
</thinking>

# safety_incident_report_access_form - Help Guide

## Purpose
The safety incident report access form is used to collect and track information about workplace safety incidents. It is essential to complete this form accurately and truthfully to aid in incident investigation and resolution.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you are authorized to access and report safety incidents.
2. Provide your Employee name, email, and phone number.
3. Specify the location and description of the incident.
4. Choose whether the incident involved a "Yes" or "No" response to the type of incident.
5. Enter the date and time of the incident.
6. Provide details about the incident.
7. Specify the employee's department and position.
8. Choose whether the incident was investigated by "Yes" or "No".
9. Choose the status of the investigation (Active or Inactive).
10. Enter the investigation date and details.
11. If applicable, select the date and person who closed the investigation.
12. Select the status of the incident (Active or Inactive).
13. Provide the name and title of the investigator and reporter.
14. Enter the name and title of the person who closed the investigation.

## Field-by-Field Explanation
* **Employee name** (`employee_name`, `text`, required): Enter your name as an employee.
* **Employee Email** (`employee_email`, `email`, required): Enter your work email address.
* **Employee Phone** (`employee_phone`, `text`, required): Enter your work phone number.
* **Location** (`incident_location`, `text`, required): Describe the location where the incident occurred.
* **Incident Description** (`incident_description`, `note`, required): Provide a detailed description of the incident.
* **Incident Type** (`incident_type`, `select_one`, required): Choose whether the incident involved a "Yes" or "No" response.
* **Incident Date** (`incident_date`, `date`, required): Enter the date of the incident.
* **Incident Time** (`incident_time`, `time`, optional): Enter the time of the incident.
* **Incident Details** (`incident_details`, `text`, required): Provide additional details about the incident.
* **Employee Department** (`employee_department`, `text`, required): Enter your department name.
* **Employee Position** (`employee_position`, `text`, required): Enter your job title or position.
* **Investigated by** (`incident_investigated_by`, `select_one`, required): Choose whether the incident was investigated by "Yes" or "No".
* **Investigation Status** (`incident_investigation_status`, `select_one`, required): Select the status of the investigation (Active or Inactive).
* **Investigation Date** (`incident_investigation_date`, `date`, optional): Enter the date the investigation was completed.
* **Investigation Details** (`incident_investigation_details`, `text`, required): Provide details about the investigation.
* **Investigation Closed** (`incident_investigation_closed`, `date`, optional): If the investigation was closed, enter the date.
* **Investigation Closed by** (`incident_investigation_closed_by`, `text`, optional): Enter the name of the person who closed the investigation.
* **Status** (`incident_status`, `select_one`, required): Select the status of the incident (Active or Inactive).
* **Investigator** (`incident_investigator`, `text`, optional): Enter the name and title of the investigator.
* **Reporter** (`incident_reporter`, `text`, optional): Enter the name and title of the person who reported the incident.
* **Submitter** (`incident_submitter`, `text`, optional): Enter the name and title of the person who submitted the report.
* **Prophets** (`prophets`, `text`, optional): Note: This field is not used in the provided form structure, but it seems to be a mistake in the YAML.
