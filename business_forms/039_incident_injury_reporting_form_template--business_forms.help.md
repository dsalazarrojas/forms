# incident_injury_reporting_form_template - Help Guide
## Purpose
This form is designed to gather information about incidents that resulted in injuries, allowing for a structured reporting process and facilitating communication among relevant parties.

## How To Complete This Form

1.  To report an incident, start by selecting the appropriate page (1).
2.  Enter the details about the accident that occurred. This can include, but is not limited to, descriptions of what happened.
3.  Enter the date and time the incident occurred. This helps establish a timeline for reference purposes.
4.  Indicate the location where the accident took place.
5.  Provide any witness details, if applicable.
6.  Identify who reported the incident.
7.  Enter any relevant comments about the reporting officer's role in the process.
8.  Finally, enter any additional details regarding the witness's account.

## Field-by-Field Explanation

*   **Accident**:
    `accident` (text, required/optional)
    Briefly describe the incident that resulted in the injury.
*   **Incident Date**:
    `incident_date` (date, required/optional)
    Enter the date the incident occurred in the format MM/DD/YYYY.
*   **Incident Time**:
    `incident_time` (time, required/optional)
    Enter the time of day the incident occurred in the format HH:MM AM/PM.
*   **Location**:
    `location` (text, required/optional)
    Provide the address or a description of the location where the incident took place.
*   **Incident Details**:
    `incident_details` (text, required/optional)
    Add any additional context or details about the accident that are relevant to the report.
*   **Injured Person**:
    `injured_person` (text, required/optional)
    Identify the individual who was injured, including their name, if applicable.
*   **Witness**:
    `witness` (text, required/optional)
    Describe the witnesses to the incident, including their number and any identifying details.
*   **Reporting Officer**:
    `reporting_officer` (text, required/optional)
    Enter the name of the person or department that reported the incident.
*   **Supervisor**:
    `supervisor` (text, required/optional)
    Identify the supervisor or manager who oversaw the incident or its aftermath.
*   **Witness Details**:
    `witness_details` (text, required/optional)
    Add any additional information from the witness, such as their account of the incident.
*   **Reporting Officer Comments**:
    `reporting_officer_comments` (text, required/optional)
    Enter any comments or notes from the reporting officer about the incident and the reporting process.
*   **Reporting Officer’s Comments (Witness)**:
    `reporting_officer_comments` (text, required/optional)
    This field is not explicitly mentioned in the provided YAML structure, so it seems to be a duplicate field, likely intended for the witness's comments. However, it is not recommended to be used.
