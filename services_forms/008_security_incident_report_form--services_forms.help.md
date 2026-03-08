# security_incident_report_form - Help Guide
## Purpose
The purpose of this form is to document and report security incidents, providing our incident response team with the information needed to assess and respond to potential security risks.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the incident date and time from the calendar and clock input fields.
2. Choose the incident location from the text field.
3. Select the type of incident from the drop-down menu (e.g., Malicious Activity, Data Breach, etc.).
4. Identify the affected areas, which may include Data Center, Network, Server, or Other.
5. Indicate if the incident was reported to the relevant authorities (e.g., 'Yes' or 'No').
6. Specify if the incident was reported by an internal individual (e.g., 'Yes' or 'No').
7. Enter the time the incident was reported.
8. Provide a detailed description of the incident in the text field.

## Field-by-Field Explanation
- **Incident Date** (`incident_date`, Date, required: false): Enter the date the security incident occurred.
- **Incident Time** (`incident_time`, Time, required: false): Select the time the security incident occurred.
- **Incident Location** (`incident_location`, Text, required: false): Enter the physical location where the security incident occurred.
- **Incident Type** (`incident_type`, Select One, required: false): Choose the type of security incident that occurred (e.g., Malicious Activity, Data Breach, etc.).
  - Malicious Activity: A deliberate attempt to cause harm or exploit vulnerabilities.
  - Data Breach: Unauthorized access or exposure of sensitive data.
  - Other: Select this option if the incident type is not listed above.
- **Affected Areas** (`affected_areas`, Select Multiple, required: false): Select all relevant areas that were affected by the security incident (e.g., Data Center, Network, Server, etc.).
- **Incident Reported To** (`incident_reported`, Select One, required: false): Indicate if the incident was reported to the relevant authorities (e.g., 'Yes' or 'No').
- **Incident Reported By** (`incident_reported_by`, Select One, required: false): Specify if the incident was reported by an internal individual (e.g., 'Yes' or 'No').
- **Incident Reported Time** (`incident_reported_time`, Time, required: false): Enter the time the incident was reported.
- **Incident Description** (`incident_description`, Text, required: false): Provide a detailed description of the security incident.
