<thinking>
To create a user-facing help guide for the "offense_incident_report_form" form, we need to consider the following internal reasoning:

* The form is likely used to report incidents, which could be events or situations that have occurred within an organization.
* The form's purpose is to collect information about these incidents, possibly for tracking, investigation, or resolution purposes.
* Each field in the form should be clearly explained to ensure end-users understand what information they need to provide.
* The form's structure and fields suggest it may be used in a workplace or business setting, where incidents might be reported by employees or team members.
* We should avoid inventing business logic or making assumptions about the form's purpose or usage.
</thinking>

# offense_incident_report_form - Help Guide

## Purpose
The offense_incident_report_form is used to report incidents that have occurred within an organization. This form collects information about incidents to help track, investigate, or resolve them.

## How To Complete This Form
To complete the form, follow these steps:

1. Enter the date and time of the incident using the "Incident Date" and "Incident Time" fields.
2. Provide a brief description of the incident in the "Incident Description" field.
3. Specify the type of incident using the "Incident Type" field.
4. Select the category of the incident using the "Incident Category" field.
5. Choose the status of the incident using the "Incident Status" field.
6. If applicable, provide the resolution of the incident in the "Incident Resolution" field.
7. Select who is assigned to investigate or resolve the incident using the "Assigned to" field.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, date, required: false): Enter the date the incident occurred.
* **Incident Time** (`incident_time`, time, required: false): Enter the time the incident occurred.
* **Incident Location** (`incident_location`, text, required: false): Provide the location where the incident happened.
* **Incident Description** (`incident_description`, text, required: false): Briefly describe the incident.
* **Incident Type** (`incident_type`, select_one, required: false): Specify the type of incident (e.g., "Yes" or "No").
* **Incident Category** (`incident_category`, select_multiple, required: false): Select all categories that apply to the incident (e.g., "Yes" or "No").
* **Incident Status** (`incident_status`, select_one, required: false): Choose the status of the incident (e.g., "Active" or "Inactive").
* **Incident Resolution** (`incident_resolution`, text, required: false): If applicable, provide a brief resolution or outcome of the incident.
* **Assigned to** (`assigned_to`, select_one, required: false): Select the person assigned to investigate or resolve the incident (e.g., "John Doe" or "Jane Doe").

## Tips
* Make sure to fill out the form as accurately and thoroughly as possible to help facilitate investigation and resolution of the incident. 
* If unsure about any field, refer to your team or supervisor for guidance.
