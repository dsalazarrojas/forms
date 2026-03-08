<thinking>
This form is designed to help incident reporting teams gather insights and information about incidents that have occurred. It is intended for use by staff members to report and analyze incidents in a structured format. Please fill this form only if you have encountered an incident and want to provide more information to the incident reporting team. If you have already reported an incident, please do not submit a duplicate report.
</thinking>

# incident-report-insights-survey - Help Guide
## Purpose

The purpose of this form is to gather information about incidents that have occurred, including details about the incident's cause, impact, and resolution. This information will help the incident reporting team to analyze and improve incident reporting processes.

## How To Complete This Form

1. Please provide a clear and concise title for the incident in the "incident-title" field.
2. Enter the date and time of the incident in the "incident-report-date" and "incident-report-time" fields, respectively.
3. Estimate the duration of the incident in the "incident-report-duration" field.
4. Select the cause of the incident from the options provided in the "incident-report-cause" field.
5. If the incident was caused by human error, natural disaster, or equipment failure, provide more details about the cause in the "incident-report-cause-details" field.
6. Enter the number of employees affected by the incident in the "incident-report-employees-affected" field.
7. Report any deaths or injuries that occurred during the incident in the "incident-report-deaths-or-injuries" field.
8. Describe any damage that occurred as a result of the incident in the "incident-report-damage" field.
9. Provide learning points or suggestions for improvement in the "incident-report-learning-points" field.
10. Outline the actions taken to resolve the incident in the "incident-report-actions-taken" field.
11. Add any additional comments about the incident in the "incident-report-comments" field.

## Field-by-Field Explanation

* **incident-title** (`incident_title`, text, required): Provide a clear and concise title for the incident.
* **incident-report-date** (`incident_report_date`, date, required): Enter the date the incident occurred.
* **incident-report-time** (`incident_report_time`, time, required): Enter the time the incident occurred.
* **incident-report-duration** (`incident_report_duration`, number, required): Estimate the duration of the incident.
* **incident-report-cause** (`incident_report_cause`, select_one, required): Select the cause of the incident from the options provided.
* **incident-report-cause-details** (`incident_report_cause_details`, select_multiple, required): If the incident was caused by human error, natural disaster, or equipment failure, provide more details about the cause.
* **incident-report-cause-harm** (`incident_report_cause_harm`, number, required): Report the level of harm or damage caused by the incident.
* **incident-report-location** (`incident_report_location`, text, required): Enter the location where the incident occurred.
* **incident-report-employees-affected** (`incident_report_employees_affected`, number, required): Report the number of employees affected by the incident.
* **incident-report-deaths-or-injuries** (`incident_report_deaths_or_injuries`, number, required): Report any deaths or injuries that occurred during the incident.
* **incident-report-damage** (`incident_report_damage`, text, required): Describe any damage that occurred as a result of the incident.
* **incident-report-learning-points** (`incident_report_learning_points`, text, required): Provide learning points or suggestions for improvement.
* **incident-report-actions-taken** (`incident_report_actions_taken`, text, required): Outline the actions taken to resolve the incident.
* **incident-report-comments** (`incident_report_comments`, text, required): Add any additional comments about the incident.
