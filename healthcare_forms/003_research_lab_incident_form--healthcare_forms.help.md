<thinking>
The purpose of this form is to collect information about research lab incidents, including the date and time of the incident, its location, nature, and description. This form is meant to be used by lab staff to document and report incidents in a standardized way.

The form is divided into sections that guide the user through the collection of relevant information. The fields in this form are designed to capture specific details about the incident, such as the date and time it occurred, where it happened, what happened, and why.

This form is intended for use by laboratory staff, and the information collected will be used for internal purposes. Please ensure that all fields are filled in accurately and completely to ensure the effectiveness of the incident report.

</thinking>

# research_lab_incident_form - Help Guide
## Purpose
The research lab incident form is designed to collect standardized information about research lab incidents, which will be used for documentation and reporting purposes.

## How To Complete This Form
1. Select the date and time of the incident using the date field.
2. Enter the location where the incident occurred in the incident location field.
3. Provide a brief description of the incident in the incident description field.
4. Choose the type of incident from the incident type field, or select 'Other-Related' and enter a description in the incident type other field.
5. Enter any additional information about the cause of the incident in the cause field.
6. If the incident is not one of the pre-defined types, select 'Other-Related' and enter a description in the incident type other field.

## Field-by-Field Explanation
* **Incident Date** (`incident_date`, date, required: false): Enter the date of the incident.
* **Incident Time** (`incident_time`, time, required: false): Enter the time of the incident.
* **Incident Location** (`incident_location`, text, required: false): Enter the location where the incident occurred.
* **Incident Nature** (`incident_nature`, text, required: false): Enter a brief description of the incident.
* **Incident Nature Other** (`incident_nature_other`, text, required: false): If the incident nature is not one of the pre-defined types, enter a brief description here.
* **Reporting Unit** (`reporting_unit`, text, required: false): Enter the unit or team responsible for the incident.
* **Lab Supervisor Name** (`lab_supervisor_name`, text, required: false): Enter the name of the lab supervisor responsible for the incident.
* **Incident Description** (`incident_description`, text, required: false): Enter a detailed description of the incident.
* **Incident Type** (`incident_type`, select_one, required: false): Select the type of incident from the options provided (Lab-Related, Equipment-Related, Other-Related).
* **Incident Type Other** (`incident_type_other`, text, required: false): If the incident type is not one of the pre-defined types, enter a brief description here.
* **Cause** (`cause`, text, required: false): Enter any additional information about the cause of the incident.

## Tips
* Ensure that all fields are filled in accurately and completely.
* If the incident type is not one of the pre-defined types, select 'Other-Related' and enter a description in the incident type other field.
* If the incident nature is not one of the pre-defined types, enter a brief description in the incident nature other field.
