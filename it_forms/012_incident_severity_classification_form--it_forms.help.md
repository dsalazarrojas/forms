<thinking>
The Incident Severity Classification Form is a tool used to classify incidents based on their impact on the organization. The form helps to standardize and prioritize the classification process, ensuring that incidents are evaluated consistently and accurately. This form is used by staff to classify incidents as Low, Medium, or High, and provide relevant details and justifications for each classification.
</thinking>

# Incident Severity Classification Form - Help Guide
## Purpose
The Incident Severity Classification Form is a tool used to classify incidents based on their impact on the organization. The form helps to standardize and prioritize the classification process, ensuring that incidents are evaluated consistently and accurately.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the severity level of the incident from the Severity Classification dropdown menu:
    - **Low**: Incidents with minimal impact, with no or minor effects on services or operations.
    - **Medium**: Incidents with moderate impact, affecting some services or operations.
    - **High**: Incidents with significant impact, affecting all or most services or operations.
2.  If required, provide a detailed description of the incident in the Incident Details field.
3.  Assess the impact of the incident by selecting a level of impact:
    - **Low**: Incidents with minimal or no impact on services or operations.
    - **Medium**: Incidents with moderate impact on services or operations.
    - **High**: Incidents with significant impact on all or most services or operations.
4.  Provide a brief justification for your priority choice in the Priority Rationale field.
5.  If required, enter a unique incident ID in the Incident ID field.
6.  Select the type of incident:
    - **Network**: Incidents related to network issues.
    - **Server**: Incidents related to server issues.
    - **Application**: Incidents related to application issues.
7.  Assess the priority of the incident by selecting a level:
    - **Low**: Incidents with minimal priority.
    - **Medium**: Incidents with moderate priority.
    - **High**: Incidents with high priority.

## Field-by-Field Explanation

* **Severity Classification** (`incident_severity_classification_form`, select_one, required): Select the severity level of the incident.
* **Incident Details** (`incident_details`, text, optional): Provide a detailed description of the incident.
* **Impact Assessment** (`impact_assessment`, number, required): Assess the impact of the incident.
* **Priority Rationale** (`priority_rationale`, text, optional): Provide a brief justification for your priority choice.
* **Follow-up Details** (`follow_up_details`, text, optional): Provide additional information about follow-up actions.
* **Severity Classification Date** (`severity_classification_date`, date, required): Date of the incident classification.
* **Incident ID** (`incident_id`, text, optional): Enter a unique incident ID.
* **Incident Type** (`incident_type`, select_multiple, required): Select the type of incident.
* **Impact Scale** (`impact_scale`, select_one, required): Assess the impact of the incident.
* **Priority Scale** (`priority_scale`, select_one, required): Assess the priority of the incident.
