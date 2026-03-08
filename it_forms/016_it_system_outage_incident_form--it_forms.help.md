<thinking>
To determine the form's purpose, I've analyzed the input schema and extracted the following information:

* The form is called "IT System Outage Incident Form" and is intended to collect information about IT system outages.
* The form includes fields for categorizing, describing, and timing the incident, as well as its resolution status.
* The form's options and labels suggest that it is used for tracking and managing IT system outages, likely for IT support or operations teams.

To avoid duplication, I've reviewed the form's fields and determined that it is not a duplicate of any other form that I've previously analyzed.

</thinking>

# IT System Outage Incident Form - Help Guide
## Purpose
This form is designed to collect information about IT system outages, including the category, description, timing, and resolution status of the incident. It helps IT support or operations teams to track and manage outages efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Start by filling in the form title, which is used to identify the form and provide a brief overview of the incident.
2. Select the category that best describes the type of system that was affected.
3. Provide a brief description of the outage, including the system name and any other relevant details.
4. Select the type of incident, such as planned maintenance or an unexpected outage.
5. Specify the time and date of the outage, including start and end times and dates.
6. Describe the incident in detail, including any actions taken to resolve it.
7. Select the current status of the incident, such as active, resolved, or in progress.
8. Choose the priority level of the incident, from critical to low.
9. Select the resolution status of the incident, such as planned, in progress, or resolved.

## Field-by-Field Explanation

* **Form Title** (`form_title`, text, optional)
	+ This field is used to provide a brief title for the form and incident.
	+ Enter a short title that summarizes the incident, such as "Server Down: Database Outage on Monday".
* **Category** (`category`, select_one, optional)
	+ Select the category that best describes the type of system affected, such as "IT Forms".
* **Description** (`description`, text, optional)
	+ Provide a brief description of the outage, including the system name and any other relevant details.
* **System Name** (`system_name`, text, optional)
	+ Enter the name of the system affected by the outage, such as "Database Server".
* **Incident Type** (`incident_type`, select_one, optional)
	+ Select the type of incident, such as "Planned Maintenance" or "Unexpected Outage".
* **Incident Time** (`incident_time`, time, optional)
	+ Enter the time of the incident, including start and end times.
* **Incident Start Date** (`incident_start_date`, date, optional)
	+ Enter the start date of the incident.
* **Incident End Date** (`incident_end_date`, date, optional)
	+ Enter the end date of the incident.
* **Incident Start Time** (`incident_start_time`, time, optional)
	+ Enter the start time of the incident.
* **Incident Description** (`incident_description`, note, optional)
	+ Provide a detailed description of the incident, including any actions taken to resolve it.
* **Incident Status** (`incident_status`, select_one, optional)
	+ Select the current status of the incident, such as "Active", "Resolved", or "In Progress".
* **Priority** (`incident_priority`, select_one, optional)
	+ Select the priority level of the incident, from "Critical" to "Low".
* **Resolution Status** (`incident_resolution_status`, select_one, optional)
	+ Select the resolution status of the incident, such as "Planned", "In Progress", or "Resolved".

## Tips

* Make sure to fill in all required fields to ensure accurate tracking and reporting of the incident.
* If you're unsure about any field, consult with the IT team or support personnel.
* Keep the form concise and clear, avoiding unnecessary details and descriptions.
