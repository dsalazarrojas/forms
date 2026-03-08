> thinking
We are designing a form to collect information about incidents where a source ID is missing. The "missing_source_id_report" form is used to report incidents where the source ID cannot be found or is not present in the system. This form is intended for use by authorized personnel to report and document these incidents, allowing for a more accurate and comprehensive understanding of the system's performance.
The form is divided into several fields that need to be filled out, which will be explained in the following section.
</thinking>

# missing_source_id_report - Help Guide
## Purpose
The "missing_source_id_report" form is used to report incidents where the source ID cannot be found or is not present in the system.

## How To Complete This Form
1. Please fill out the form with the required and optional fields.
2. Enter the incident date and time when the incident occurred.
3. Select the type of incident (e.g. Incident, Other, or Unknown).
4. If applicable, select "Yes" or "No" for "source id" to indicate whether a source ID was missing.
5. Enter the location where the source ID was supposed to be found.
6. Provide any additional details about the incident.
7. Click the "submit" button to complete the form.

## Field-by-Field Explanation

* **missing source id** (`missing_source_id`, text, required): Enter the missing source ID that was not found.
* **incident date** (`incident_date`, date, optional): Enter the date of the incident in the format MM/DD/YYYY.
* **incident time** (`incident_time`, time, optional): Enter the time of the incident in the format HH:MM:SS AM/PM.
* **incident type** (`incident_type`, select_one, optional): Select the type of incident that occurred (e.g. Incident, Other, or Unknown).
* **source id** (`source_id`, select_multiple, optional): Select "Yes" or "No" to indicate whether a source ID was missing.
* **missing source id location** (`missing_source_id_location`, text, optional): Enter the location where the source ID was supposed to be found.
* **missing source id details** (`missing_source_id_details`, text, optional): Provide any additional details about the incident that is relevant to the missing source ID.
* **submit** (`submit`, note, optional): This is a submit button, click to complete the form.

## Tips
* Make sure to fill out all the required fields before submitting the form.
* If you are unsure about any of the fields, please consult with your supervisor or the system's administrator.
* Please provide as much detail as possible in the "missing source id details" field to help with incident investigation.
* The system will use this information to track and analyze incidents, so please ensure the information is accurate and complete.
