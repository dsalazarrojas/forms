<thinking>
The "library_incident_report_form" is used to gather information about incidents that occur within a library or other similar institution. This form is intended to capture the details of the incident, including its type, date, time, location, and description, as well as information about the person who reported it. The data collected through this form will likely be used to report and track incidents for internal management purposes. It is assumed that the user is aware of the general purpose of the form and is not repeating this information already provided elsewhere. Please proceed with the help guide.

</thinking>

# library_incident_report_form - Help Guide
## Purpose
The "library_incident_report_form" is used to collect information about incidents that occur within a library or other similar institution.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields (if any) and provide as much detail as possible in the non-required fields.
2. For fields with options, select the most accurate answer from the available choices.
3. Review your entries before submitting the form to ensure accuracy and completeness.

## Field-by-Field Explanation

* **Library Incident Details** (`incident_details`, text, optional):
	+ Briefly describe the incident, including any relevant details such as what happened and any consequences.
* **Incident Type** (`incident_type`, select_one, optional):
	+ Select one of the available options to indicate the type of incident that occurred (e.g., "Yes" or "No").
* **Date** (`incident_date`, date, optional):
	+ Enter the date on which the incident occurred.
* **Time** (`incident_time`, time, optional):
	+ Enter the time at which the incident occurred.
* **Incident Description** (`incident_description`, text, optional):
	+ Provide a detailed description of what happened during the incident.
* **Location** (`incident_location`, text, optional):
	+ Enter the location where the incident occurred.
* **Reporter** (`incident_reporter`, text, optional):
	+ Enter the name or contact information of the person who reported the incident.
* **Reporter Role** (`incident_reporter_role`, select_one, optional):
	+ Indicate if the reporter is a staff member or student (choose "Yes" or "No").
* **Phone** (`incident_reporter_phone`, text, optional):
	+ Enter the phone number of the reporter, if available.
* **Email** (`incident_reporter_email`, email, optional):
	+ Enter the email address of the reporter, if available.
* **Contact** (`incident_reporter_contact`, text, optional):
	+ Provide any additional contact information for the reporter.
