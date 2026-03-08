# Harassment Complaint Absence Form - Help Guide
## Purpose
The "Harassment Complaint Absence Form" is designed to document incidents of harassment in the workplace, enabling the relevant authorities to investigate and address these incidents efficiently and effectively.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the type of incident that occurred (e.g., harassment, bullying, etc.)
2. Enter the date the incident occurred
3. Describe the location where the incident took place
4. Provide a detailed description of what happened
5. Select the resolution status of the incident
6. Enter the number of days off due to the incident
7. Enter the employee's ID number
8. Enter the manager's ID number
9. Enter the date the employee reported the incident
10. If applicable, select the tool used for the incident
11. Enter any additional information about the incident (if necessary)

## Field-by-Field Explanation
* **incident-type** (`incident_type`, text, required): Select the type of incident that occurred (e.g., harassment, bullying, etc.).
* **date** (`date`, date, required): Enter the date the incident occurred.
* **location** (`location`, text, required): Describe the location where the incident took place.
* **description** (`description`, text, required): Provide a detailed description of what happened.
* **resolution-status** (`resolution_status`, select_one, required): Select the resolution status of the incident (Pending, Resolved, In Progress).
* **time-off-start** (`time_off_start`, number, required): Enter the number of days off due to the incident.
* **time-off-end** (`time_off_end`, number, required): Enter the number of days off due to the incident.
* **employee-id** (`employee_id`, number, required): Enter the employee's ID number.
* **manager-id** (`manager_id`, number, required): Enter the manager's ID number.
* **reporting-date** (`reporting_date`, date, required): Enter the date the employee reported the incident.
* **incident-reported** (`incident_reported`, text, optional): Enter a brief description of what happened (if necessary).
* **resolution-date** (`resolution_date`, date, optional): Enter the date the incident was resolved (if known).
* **comments** (`comments`, text, optional): Enter any additional comments about the incident (if necessary).
* **assigned-tool** (`assigned_tool`, select_one, optional): Select the tool used for the incident.
* **additional-info-prophets** (`additional_info_prophets`, text, optional): Enter any additional information about the incident (if necessary).
* **resolution-details** (`resolution_details`, text, optional): Enter any details about the resolution of the incident (if necessary).
* **incident-reported-date** (`incident_reported_date`, date, optional): Enter the date the incident was reported.
* **resolution-method** (`resolution_method`, text, optional): Enter the method used to resolve the incident (if necessary).
* **witness-names** (`witness_names`, text, optional): Enter the names of any witnesses (if applicable).
* **resolution-outcome** (`resolution_outcome`, text, optional): Enter the outcome of the incident resolution (if necessary).
* **follow-up-required** (`follow_up_required`, select_one, required): Select if follow-up is required.
* **follow-up-date** (`follow_up_date`, date, optional): Enter the date for the follow-up (if applicable).
* **follow-up-details** (`follow_up_details`, text, optional): Enter any follow-up details (if necessary).
* **reporting-employee** (`reporting_employee`, text, optional): Enter the employee who reported the incident (if necessary).
* **reporting-employee-id** (`reporting_employee_id`, number, optional): Enter the employee ID number of the employee who reported the incident (if necessary).
