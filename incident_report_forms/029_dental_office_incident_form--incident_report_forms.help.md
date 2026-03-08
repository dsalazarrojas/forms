# dental_office_incident_form - Help Guide
## Purpose
The "dental_office_incident_form" is designed to collect information about incidents that have occurred in the dental office. This form helps in recording, reporting, and analyzing incidents to improve the office's safety and prevention measures.

## How To Complete This Form
1. Select the type of incident that has occurred.
2. Enter the date and time when the incident occurred.
3. Describe the incident and its location.
4. Confirm if anyone was injured during the incident.
5. Provide the reporter's name and contact information (if necessary).
6. Choose whether the incident was escalated or not.
7. Describe any attachment related to the incident (if any).
8. Confirm if the incident was reviewed or escalated (if necessary).
9. Provide a note for any reopened incident.
10. Explain the cause of the incident.
11. Suggest any preventative measures to avoid future incidents.
12. Confirm if the incident was reviewed.
13. Add any additional note for the reviewed incident.

## Field-by-Field Explanation

* **incident_type** (`incident_type`, select_one, required): Select the type of incident that occurred.
	+ This field is required to identify the category of the incident.
* **incident_date** (`incident_date`, date, required): Enter the date when the incident occurred.
	+ This field is required for tracking and analysis.
* **incident_time** (`incident_time`, time, required): Enter the time when the incident occurred.
	+ This field is required for accurate timing.
* **incident_description** (`incident_description`, text, optional): Describe the incident in detail.
	+ This field is useful but not required.
* **incident_location** (`incident_location`, text, required): Enter the location where the incident occurred.
	+ This field is essential for identifying the incident's context.
* **incident_injured** (`incident_injured`, select_one, optional): Confirm if anyone was injured during the incident.
	+ This field helps in assessing incident severity.
* **incident_reporter** (`incident_reporter`, text, required): Enter the name and contact information of the person reporting the incident (if necessary).
	+ This field is required for contact and follow-up.
* **incident_escalate** (`incident_escalate`, select_one, required): Choose whether the incident was escalated or not.
	+ This field is essential for determining incident severity and response.
* **incident_note** (`incident_note`, note, optional): Add any additional note about the incident.
	+ This field is useful but not required.
* **incident_attachment** (`incident_attachment`, text, optional): Attach any relevant document or file to the incident report.
	+ This field is useful but not required.
* **incident_email** (`incident_email`, email, optional): Enter the email address of the incident reporter (if necessary).
	+ This field is useful but not required.
* **incident_phone** (`incident_phone`, text, optional): Enter the phone number of the incident reporter (if necessary).
	+ This field is useful but not required.
* **incident_address** (`incident_address`, text, optional): Enter the address where the incident occurred (if necessary).
	+ This field is useful but not required.
* **incident_city** (`incident_city`, text, optional): Enter the city where the incident occurred (if necessary).
	+ This field is useful but not required.
* **incident_state** (`incident_state`, text, optional): Enter the state where the incident occurred (if necessary).
	+ This field is useful but not required.
* **incident_zip** (`incident_zip`, text, optional): Enter the zip code where the incident occurred (if necessary).
	+ This field is useful but not required.
* **incident_investigation** (`incident_investigation`, select_one, required): Choose the status of the incident investigation.
	+ This field is required for tracking and analysis.
* **incident_closed** (`incident_closed`, select_one, required): Confirm if the incident was closed.
	+ This field is required for tracking and analysis.
* **incident_reopened** (`incident_reopened`, select_one, required): Confirm if the incident was reopened.
	+ This field is required for tracking and analysis.
* **incident_reopened_note** (`incident_reopened_note`, text, optional): Add any additional note about the reopened incident.
	+ This field is useful but not required.
* **incident_reopened_reason** (`incident_reopened_reason`, text, optional): Explain the reason for reopening the incident.
	+ This field is useful but not required.
* **incident_cause** (`incident_cause`, text, optional): Explain the cause of the incident.
	+ This field is useful but not required.
* **incident_preventative_measures** (`incident_preventative_measures`, text, optional): Suggest any preventative measures to avoid similar incidents.
	+ This field is useful but not required.
* **incident_reviewed** (`incident_reviewed`, select_one, required): Confirm if the incident was reviewed.
	+ This field is required for tracking and analysis.
* **incident_reviewed_note** (`incident_reviewed_note`, text, optional): Add any additional note about the reviewed incident.
	+ This field is useful but not required.

## Tips
* Please ensure that all fields are filled in accurately and completely.
* Use the correct format for date and time fields (MM/DD/YYYY and HH:MM AM/PM respectively).
* For select_one fields, choose one of the provided options.
* Use the correct format for email and phone fields.
* If you are unsure about any field, please refer to the above explanations or consult the relevant person.
