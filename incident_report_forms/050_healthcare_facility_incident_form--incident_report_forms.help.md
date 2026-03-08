<thinking>
This form is designed to collect information about incidents that occur within healthcare facilities. The form is used to report and document incidents that may have a significant impact on patient safety or facility operations. The purpose of this form is to ensure that incidents are properly reported and reviewed to maintain high standards of care and compliance with relevant regulations. This form should not be used for reporting minor incidents or routine events that do not require formal review. It is recommended that the form be filled out as soon as possible after an incident occurs to ensure accurate and timely reporting.
</thinking>

# healthcare_facility_incident_form - Help Guide
## Purpose
This form is designed to collect information about incidents that occur within healthcare facilities.

## How To Complete This Form
1. Ensure you have filled out all required fields (facility_id, facility_name, incident_date, incident_location, incident_time, reporting_officer, reporting_date).
2. Select the type of incident that occurred (if applicable).
3. Provide a detailed description of the incident.
4. Enter the date and time the incident occurred (if the incident_date_time field is not filled out).
5. Enter the time the incident occurred (if the incident_time field is not filled out).
6. If the incident_date_time field is available, fill it out with the date and time of the incident.
7. Provide a detailed description of the incident outcome.
8. Enter the name of the individual reviewing the incident (if applicable).
9. Select whether the incident has been reviewed (if applicable).

## Field-by-Field Explanation
* **Form Purpose** (`id: 1`, `type: text`, required: false): This field explains the purpose of the form and its requirements.
* **facility_id** (`id: 2`, `type: select_multiple`, required: true): Select all facilities where the incident occurred.
* **incident_type** (`id: 3`, `type: select_one`, required: false): Choose the type of incident that occurred from the list:
	+ Medical Error
	+ Patient Harm
	+ Radiation Exposure
	+ Security Incident
	+ System Breach
	+ Theft/Loss
* **description** (`id: 4`, `type: text`, required: true): Provide a detailed description of the incident.
* **facility_name** (`id: 5`, `type: text`, required: true): Enter the name of the healthcare facility where the incident occurred.
* **incident_date** (`id: 6`, `type: date`, required: true): Enter the date of the incident.
* **incident_location** (`id: 7`, `type: text`, required: true): Enter the location of the incident.
* **incident_time** (`id: 8`, `type: time`, required: true): Enter the time of the incident.
* **incident_date_time** (`id: 9`, `type: date`, required: false): If the incident_date_time field is available, enter the date and time of the incident.
* **incident_description** (`id: 10`, `type: text`, required: false): Provide additional details about the incident (if necessary).
* **incident_outcome** (`id: 11`, `type: select_one`, required: false): Select the outcome of the incident from the list:
	+ Closed
	+ Open
* **reporting_officer** (`id: 12`, `type: text`, required: true): Enter the name of the person reporting the incident.
* **reporting_date** (`id: 13`, `type: date`, required: true): Enter the date the incident was reported.
* **incident_reviewed** (`id: 14`, `type: select_one`, required: false): Select whether the incident has been reviewed from the list:
	+ Completed
	+ Not Reviewed
	+ Reviewing
* **reviewer** (`id: 15`, `type: text`, required: false): Enter the name of the individual reviewing the incident (if applicable).
* **reviewer_signature** (`id: 16`, `type: text`, required: false): Enter the reviewer's signature (if applicable).
