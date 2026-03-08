<thinking>
Before creating the help guide, let's break down the form purpose and ensure it's not a duplication. Based on the provided YAML, the form is designed for reporting workplace violence incidents in a manufacturing setting. This form aims to collect essential details about the incident, including location, date and time, description, perpetrator, victim, witness, and other relevant information.

To avoid duplication, the form seems to be a comprehensive collection of various incident details, which is not readily available in other areas of the application. However, it's essential to verify this assumption and confirm that this form is not duplicating existing functionality.

Assuming the form is unique, let's move on to creating the help guide.

</thinking>

# Manufacturing Workplace Violence Incident Report - Help Guide
## Purpose
This form is designed to report workplace violence incidents in a manufacturing setting. It helps to collect and document essential details about the incident, which is crucial for incident management and follow-up actions.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the required fields with accurate information about the incident.
2. Select the correct options for each field, such as incident category, perpetrator relationship, and incident severity.
3. Provide thorough descriptions for fields like incident description and incident outcome details.
4. Ensure you select all relevant follow-up actions required.

## Field-by-Field Explanation

- **Incident Location** (`incident_location`, `text`, required: false): Enter the exact location where the incident occurred.
  - This field is optional, but providing it helps in tracking the incident's context.

- **Incident Date** (`incident_date`, `date`, required: false): Select the date the incident occurred.
  - This field is optional, but it's crucial for tracking the incident's timeline.

- **Incident Time** (`incident_time`, `time`, required: false): Select the time the incident occurred.
  - This field is optional, but it's essential for precise timing.

- **Incident Description** (`incident_description`, `text`, required: false): Describe the incident in detail, including the events leading up to and following the incident.
  - This field is optional but provides valuable context for the incident.

- **Perpetrator** (`perpetrator`, `text`, required: false): Enter the name or description of the person involved in the incident.
  - This field is optional but helps in identifying the individual involved.

- **Victim** (`victim`, `text`, required: false): Enter the name or description of the person affected by the incident.
  - This field is optional but is essential for identifying the victim.

- **Witness** (`witness`, `text`, required: false): Enter the name or description of the witness, if any.
  - This field is optional but helps in collecting witness statements.

- **Reported By** (`reported_by`, `text`, required: false): Enter the name or description of the person reporting the incident.
  - This field is optional but helps in tracking the reporter's details.

- **Reported Date** (`reported_date`, `date`, required: false): Select the date the incident was reported.
  - This field is optional but helps in tracking the reporting timeline.

- **Incident Category** (`incident_category`, `select_one`, required: false): Select the type of incident from the provided list.
  - This field helps in categorizing the incident for further analysis.

- **Incident Severity** (`incident_severity`, `select_one`, required: false): Select the severity level of the incident from the provided list.
  - This field helps in assessing the incident's severity.

- **Incident Outcome** (`incident_outcome`, `select_one`, required: false): Select the outcome of the incident from the provided list.
  - This field helps in tracking the incident's resolution.

- **Incident Outcome Details** (`incident_outcome_details`, `text`, required: false): Enter additional details about the incident's outcome.
  - This field is optional but provides more context about the outcome.

- **Relationship to Reported** (`incident_reported_by_relationship`, `select_one`, required: false): Select the relationship between the reporter and perpetrator from the provided list.
  - This field helps in understanding the context of the incident.

- **Incident Location Type** (`incident_location_type`, `select_one`, required: false): Select the type of location where the incident occurred from the provided list.
  - This field helps in understanding the incident's context.

- **Incident Injuries** (`incident_injuries`, `select_multiple`, required: false): Select any injuries sustained during the incident from the provided list.
  - This field helps in tracking any injuries.

- **Incident Damage** (`incident_damage`, `number`, required: false): Enter any property damage or cost associated with the incident.
  - This field is optional but helps in tracking any damage.

- **Incident Reporting Reason** (`incident_reporting_reason`, `select_one`, required: false): Select the reason for reporting the incident from the provided list.
  - This field helps in understanding the context of the reporting.

- **Follow-up** (`incident_follow_up`, `select_multiple`, required: false): Select follow-up actions required from the provided list.
  - This field helps in planning further actions.

## Tips

- Ensure accuracy and thoroughness when filling in the form.
- Review and update the form regularly to reflect any changes in incident details.
- If you're unsure about any field, consult with your manager or HR representative for guidance.
