# employee_injury_questionnaire - Help Guide

## Purpose
The "employee_injury_questionnaire" form is designed to collect information about employee injuries, allowing for a clear and accurate report of incidents that may have occurred in the workplace. This form helps to gather essential details to ensure proper reporting, investigation, and support for the injured employee.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the employee's name and description of the injury in the relevant fields.
2.  Select the date and time of the incident using the date and time fields.
3.  Enter the location where the incident occurred.
4.  Choose the type of injury from the list of options provided.
5.  Enter a detailed description of the incident.
6.  Indicate who reported the injury.

## Field-by-Field Explanation

* **Employee Injuries** (`employee_injuries`, text, required): Enter the employee's name(s) involved in the injury.
* **Employee Injuries Description** (`employee_injuries_description`, text, required): Enter a clear and concise description of the injury.
* **Incident Date** (`incident_date`, date, required): Select the date the incident occurred.
* **Incident Time** (`incident_time`, time, required): Select the time the incident happened.
* **Incident Location** (`incident_location`, text, required): Enter the location where the incident occurred.
* **Incident Type** (`incident_type`, select_multiple, required): Choose from the list of available options to indicate the type of injury:
	+ Broken bone
	+ Cut
	+ Sprain
	+ Strain
	+ Burn
	+ Chemical exposure
	+ Other
* **Incident Description** (`incident_description`, text, required): Enter a detailed description of what happened during the incident.
* **Reported By** (`reported_by`, text, required): Indicate who reported the injury.
