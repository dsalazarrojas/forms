# Research Lab Incident Form - Help Guide
## Purpose
The purpose of this form is to gather information about incidents that occur within the research lab. It is used by lab administrators or safety officers to quickly and efficiently document and respond to incidents.

## How To Complete This Form

1. Review each page carefully and provide as much detail as possible.
2. Enter the incident's location where it occurred.
3. Enter the date and time of the incident.
4. Provide a detailed description of what happened.
5. Indicate if the person responsible for the incident was aware of the potential risks or consequences.
6. Identify the investigator or person responsible for investigating the incident.
7. Indicate if the incident was caused by human error or a technical issue.
8. Classify the severity of the incident.
9. Indicate if any injuries occurred as a result of the incident.
10. Add any additional notes or comments about the incident.

## Field-by-Field Explanation

* **Incident Location** (`incident_location`, text, required): Enter a detailed description of where the incident occurred, including the specific room or area of the lab where it happened.
* **Incident Time** (`incident_time`, time, required): Enter the time of day when the incident occurred, using 24-hour format (HH:MM).
* **Incident Date** (`incident_date`, date, required): Enter the date of the incident, using the format MM/DD/YYYY.
* **Incident Description** (`incident_description`, text, required): Provide a detailed and objective description of what happened during the incident.
* **Incident Responsible** (`incident_responsible`, select_one, required): Indicate if the person responsible for the incident was aware of the potential risks or consequences. Select 'Yes' if they were aware, or 'No' if they were not.
* **Incident Investigator** (`incident_investigator`, text, required): Enter the name of the person or team responsible for investigating the incident.
* **Incident Cause** (`incident_cause`, select_one, required): Classify the cause of the incident as either 'Yes' (human error) or 'No' (technical issue).
* **Incident Severity** (`incident_severity`, select_one, required): Classify the severity of the incident as either 'Yes' (serious) or 'No' (non-serious).
* **Injuries** (`incident_injuries`, select_one, required): Indicate if any injuries occurred as a result of the incident. Select 'Yes' if there were injuries, or 'No' if there were not.
* **Incident Notes** (`incident_notes`, note, required): Add any additional comments or notes about the incident.
