<thinking>
We need to create a help guide for the "untitled_form" form, which is part of the "SurveyTemplates" category. This form appears to be used for reporting incidents, such as bail jumping or other events. Before creating the help guide, we need to ensure that we understand the form's purpose and the fields it contains.

Based on the provided YAML, it seems that this form is for collecting information about incidents, including the date, time, location, and details about the incident. The form also includes fields for uploading documents, selecting a reporting agency, and choosing supporting documents. There may be a need for a review of the form to check for duplication of fields and ensure that it is not being used for a different purpose than intended.

It's also worth noting that some fields seem to be duplicate or similar in nature, such as "incident_date" and "incident_date_2", which may need to be reviewed for potential merge or removal.

Assuming the form is intended for collecting incident reports, we can proceed with creating the help guide.</thinking>

# untitled_form - Help Guide
## Purpose
The "untitled_form" is a survey template used to collect information about incidents, such as bail jumping or other events.

## How To Complete This Form
To complete this form, follow these steps:

* Please fill in the required fields with the requested information about the incident.
* Select the correct reporting agency from the list.
* If applicable, upload supporting documents and choose the type of document.
* Fill in any additional details about the incident.

## Field-by-Field Explanation

* **Bail Jumping Notification Form** (`bail_jumping_notification_form`, text, optional): Enter a brief description of the incident, if applicable.
* **Date** (`incident_date`, date, optional): Enter the date of the incident.
* **Time** (`incident_time`, time, optional): Enter the time of the incident.
* **Location** (`incident_location`, text, optional): Enter the location of the incident.
* **Description** (`incident_description`, text, optional): Enter a detailed description of the incident.
* **Uploaded Document ID** (`uploaded_document_id`, number, optional): Enter the ID of the uploaded document, if applicable.
* **Document Name** (`document_name`, text, optional): Enter the name of the uploaded document, if applicable.
* **Incident Reporter** (`incident_reporter`, text, optional): Enter the name of the incident reporter.
* **Reporting Agency** (`reporting_agency`, select_one, optional): Select the agency that will be reporting this incident (e.g. court, law office, bail agency).
* **Supporting Documents** (`supporting_documents`, select_multiple, optional): Select the type of supporting documents to be uploaded (e.g. bail warrant, court document, incident report).
* **Reporting Reason** (`reporting_reason`, text, optional): Enter the reason for reporting the incident.
* **Incident Type** (`incident_type`, text, optional): Enter the type of incident.
* **Incident Status** (`incident_status`, text, optional): Enter the status of the incident.
* **Bail Amount** (`bail_amount`, number, optional): Enter the bail amount, if applicable.
* **Bail Type** (`bail_type`, text, optional): Enter the type of bail.
* **Incident Number** (`incident_number`, text, optional): Enter the incident number.
* **Incident Date** (`incident_date_2`, date, optional): Enter the date of the incident ( duplicate of "Date" field).
* **Incident Time** (`incident_time_2`, time, optional): Enter the time of the incident (duplicate of "Time" field).

Tips:

* Make sure to fill in all required fields.
* If you are unsure about a field, please ask your supervisor or the reporting agency for guidance.
* If you have any questions or concerns, please contact our support team.
