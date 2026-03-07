<thinking>...</thinking>

# Police Report Request Form - Help Guide
## Purpose
The Police Report Request Form is used to gather information for a police report from a witness or individual who witnessed a crime or incident. This form is used to capture details of what happened, the date and time, location, and other relevant details related to the report.

## How To Complete This Form
1. To complete this form, start by filling out each field with as much detail as possible.
2. Select "Police Report 1" or the appropriate report type from the "Police Report Type" field if the report is for a specific purpose (e.g., traffic incident, suspicious activity).
3. Choose the department to which the report should be submitted (e.g., local police, state police).
4. Enter your contact information so that we can reach you if we need more information.

## Field-by-Field Explanation
* **Police Report Request Form** (`police_report_request_form`, text, required): This field is the title of the form, and it will be automatically populated based on the form type.
* **Name** (`name`, text, optional): Enter your name as the reporter.
* **Date of Incident** (`date_of_incident`, date, optional): Enter the date of the incident, in the format `YYYY-MM-DD`.
* **Time of Incident** (`time_of_incident`, time, optional): Enter the time of the incident, in the format `HH:MM`.
* **Location** (`location`, text, optional): Enter the location where the incident occurred.
* **Description** (`description`, text, optional): Provide a detailed description of what happened.
* **Police Report Type** (`police_report_type`, select_one, optional): Select the type of report being requested (e.g., traffic, suspicious activity).
* **Contact Number** (`contact_number`, text, optional): Enter your contact number so we can reach you if needed.
* **Contact Email** (`contact_email`, email, optional): Enter your email address so we can reach you if needed.
* **Police Department** (`police_department`, select_one, optional): Select the department to which the report should be submitted (e.g., local police, state police).
* **Submitted By** (`submitted_by`, select_multiple, optional): Select the individual or organization submitting the report (e.g., witness, victim).
