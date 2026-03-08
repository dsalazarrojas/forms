<thinking>...this form is designed to collect information about incident reports from various types of incidents, including accidents, and involve parties involved in the incident, such as the incident reporter and witnesses. It captures details like date and time of the incident, location, description, actions taken, safety measures, and incident reporting and updates. The form is meant to be completed by a person who witnessed or was involved in the incident and aims to gather accurate and comprehensive information for official incident reporting purposes. Please note that this form does not collect any personal identifiable information, and all fields are optional unless marked as required. If you've already reported an incident with the same details, this form will not allow you to report it again...</thinking>

# incident_report_request_form - Help Guide
## Purpose
This form is designed to collect information about incident reports from various types of incidents that involve parties such as witnesses, incident reporters, or those involved.

## How To Complete This Form
To complete this form, follow the steps below:

1. Select the type of incident that occurred by choosing one of the options provided in the "What type of incident" field.
2. Enter the date when the incident occurred in the "What date did it occur" field.
3. Provide the location of the incident in the "Where did it occur" field.
4. Select the party(ies) involved in the incident from the "Who was involved" field.
5. Give a detailed description of the incident in the "Incident description" field.
6. If applicable, describe the actions taken in response to the incident in the "Actions taken" field.
7. Specify any safety measures taken to mitigate the incident in the "Safety measures taken" field.
8. Enter your name and other relevant details about yourself in the "Incident reporter" field.
9. Enter the date the incident was reported in the "Incident reported" field.
10. If the incident has been updated, enter the date of the update in the "Incident updated" field.

## Field-by-Field Explanation

* **What type of incident** (`incident_type`, `select_one`, required):
	+ Select the type of incident from the given options (Incident or Accident).
* **What date did it occur** (`incident_date`, `date`, required):
	+ Enter the date when the incident occurred.
* **Where did it occur** (`incident_location`, `text`, required):
	+ Provide the exact location where the incident occurred.
* **Who was involved** (`involved_party`, `select_multiple`, required):
	+ Choose one or more of the options (Involved, Witness, Reporter).
* **Incident description** (`incident_description`, `text`, optional):
	+ Give a clear and detailed description of the incident.
* **Actions taken** (`actions_taken`, `text`, optional):
	+ Describe any actions taken in response to the incident.
* **Safety measures taken** (`safety_measures`, `text`, optional):
	+ Specify any safety measures taken to mitigate the incident.
* **Incident reporter** (`incident_reporter`, `text`, required):
	+ Provide your name and any other relevant details about yourself.
* **Incident reported** (`incident_reported`, `date`, required):
	+ Enter the date the incident was reported.
* **Incident updated** (`incident_updated`, `date`, optional):
	+ Enter the date the incident was updated if it has been revised.
