# service_unavailability_notification - Help Guide
## Purpose
The "service_unavailability_notification" form is used to report and manage service outages, disruptions, or other incidents that affect users or services. This form helps to track and resolve these incidents efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in the required fields:
    *   **Incident Status** (`incident_status`): Select the current status of the incident from the dropdown list (In progress, Solved, or Planned).
    *   **Incident Status Update** (`incident_status_update`): Provide a brief update about the incident status.
    *   **Last Updated by** (`incident_status_last_updated_by`): Enter the name of the person who last updated the incident status.
2.  Fill in the optional fields:
    *   **User** (`user`): Enter the name of the user affected by the outage or incident.
    *   **Impact** (`impact`): Describe the impact of the outage or incident on users or services.
    *   **Time** (`time`): Enter the time when the outage or incident started.
    *   **End Time** (`end_time`): Enter the time when the outage or incident ended.
    *   **Cause** (`cause`): Provide a brief description of what happened to cause the outage or incident.
    *   **Update** (`update`): Add any additional information about the incident.
    *   **Last Updated** (`incident_status_last_update`): Enter the date and time when the incident status was last updated.

## Field-by-Field Explanation

*   **User** (`user`, text, optional):
    *   Enter the name of the user affected by the outage or incident. This field helps to track which users were impacted and allows for targeted communication.
*   **Impact** (`impact`, text, optional):
    *   Describe the impact of the outage or incident on users or services. This field helps to understand the severity and scope of the incident.
*   **Time** (`time`, date, optional):
    *   Enter the time when the outage or incident started. This field helps to establish a timeline for the incident.
*   **End Time** (`end_time`, date, optional):
    *   Enter the time when the outage or incident ended. This field helps to track the duration of the incident.
*   **Cause** (`cause`, text, optional):
    *   Provide a brief description of what happened to cause the outage or incident. This field helps to identify root causes and prevent similar incidents in the future.
*   **Update** (`update`, text, optional):
    *   Add any additional information about the incident. This field is for free-form text and can be used to share any relevant details.
*   **Incident Status** (`incident_status`, select_multiple, required):
    *   Select the current status of the incident from the dropdown list (In progress, Solved, or Planned). This field helps to track the progress and resolution of the incident.
*   **Incident Status Update** (`incident_status_update`, text, required):
    *   Provide a brief update about the incident status. This field helps to keep the status up-to-date and inform stakeholders.
*   **Last Updated by** (`incident_status_last_updated_by`, text, required):
    *   Enter the name of the person who last updated the incident status. This field helps to maintain accountability and transparency.
*   **Last Updated** (`incident_status_last_update`, date, optional):
    *   Enter the date and time when the incident status was last updated. This field helps to track changes in the incident status over time.

# Tips

*   Make sure to fill out as much information as possible, especially the required fields, to ensure that the incident is tracked accurately.
*   Keep the fields up-to-date as the situation evolves.
*   Use this form to report only new incidents, and avoid repeating reports that are already being tracked.
*   If you're unsure about any field, refer to the field name or ask for clarification.
*   Review the form regularly to ensure that it's being used correctly and effectively.
