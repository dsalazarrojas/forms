# Sporting Event Fan Incident Report Form - Help Guide
## Purpose
The form is designed to collect reports of incidents that have occurred during a sporting event. This form will help identify potential risks and improve crowd safety.

## How To Complete This Form
To complete this form, follow these steps:

* Please select the relevant event where the incident occurred.
* Provide a detailed description of what happened.
* Choose the type of incident that best describes the situation.
* Enter the time when the incident occurred.
* Enter the location where the incident took place.
* If you witnessed the incident, select 'True' or 'False'.
* Enter your name and title (e.g. your name and position) to report the incident.
* Enter the date and time when you are submitting this report.
* If you have any photos or videos of the incident, please attach them as an image.

## Field-by-Field Explanation

### Event Details (Page 1)
* **<label> (Page 1)** (`<title>`, `text`, required/optional): Enter the title of the sporting event where the incident occurred.
### Incident Description
* **Incident Description (Page 1)** (`incident_description`, `text`, required/optional): Provide a detailed description of what happened.
### Incident Type
* **Incident Type (Page 1)** (`incident_type`, `select_one`, required/optional): Select the type of incident that best describes the situation:
	+ **Injury**: Physical harm to a person or damage to property.
	+ **Medical Condition**: Medical emergency or condition affecting a person.
	+ **Security Incident**: Incident involving security personnel or breach of event rules.
	+ **Other**: Any other incident not listed above.
### Incident Time
* **Incident Time (Page 1)** (`incident_time`, `time`, required/optional): Enter the time when the incident occurred.
### Location
* **Location (Page 1)** (`location`, `text`, required/optional): Enter the location where the incident took place.
### Witness
* **Witness (Page 1)** (`witness`, `select_multiple`, required/optional): Check if you witnessed the incident:
	+ **True**: Yes, I witnessed the incident.
	+ **False**: No, I did not witness the incident.
### Reported By
* **Reported By (Page 1)** (`report_by`, `text`, required/optional): Enter your name and title (e.g. your name and position) to report the incident.
### Report Date
* **Report Date (Page 2)** (`report_date`, `date`, required/optional): Enter the date when you are submitting this report.
### Report Time
* **Report Time (Page 2)** (`report_time`, `time`, required/optional): Enter the time when you are submitting this report.
### Incident Photo
* **Incident Photo (Page 2)** (`incident_photo`, `note`, required/optional): If you have any photos or videos of the incident, please attach them as an image.
