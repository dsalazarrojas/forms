<thinking>

To provide a well-structured and user-friendly help guide, we first need to understand the purpose and requirements of the form.

The "sports_facility_incident_form" is designed to collect information about incidents that occur at sports facilities. This form is likely used to report and manage incidents such as accidents, injuries, and other events that happen during sports activities.

From the provided YAML, we can see that the form is divided into several sections, each with a specific purpose. To complete this form, the user needs to provide information about the incident, including the date and time it occurred, the facility where it took place, the type of incident, and details about the incident.

Before we proceed, it's essential to check for duplication and ensure that this guide is not already available. Assuming it's not, let's move on to creating the help guide.

# sports_facility_incident_form - Help Guide
## Purpose
The "sports_facility_incident_form" is designed to collect information about incidents that occur at sports facilities. This form is used to report and manage incidents such as accidents, injuries, and other events that happen during sports activities.

## How To Complete This Form

To complete this form, follow these steps:

1. Fill in the Incident Date field with the date the incident occurred.
2. Enter the Incident Time field with the time the incident occurred.
3. Select the Facility Name field to specify the name of the facility where the incident took place.
4. Choose the type of incident that occurred (e.g., accident, injury) from the Incident Type field.
5. Provide a detailed description of the incident in the Description field.
6. Enter the address of the facility where the incident occurred in the Facility Address field.
7. Specify the location of the incident in the Incident Location field.
8. Enter the name and contact information of the person who reported the incident in the Incident Reporter and Incident Reporter Contact fields.
9. Describe the relationship between the incident reporter and the facility in the Incident Reporter Relationship field.
10. Specify the status of the incident (e.g., pending, resolved, ongoing) in the Incident Status field.
11. Enter the nature of the incident (e.g., accident, injury) in the Incident Nature field.
12. If the incident was not listed as an accident or injury, use the Other (please specify) field to provide additional information.
13. Enter a summary of the incident in the Incident Summary field.
14. If a summary is not enough, provide more details about the incident in the Incident Summary Other field.
15. Identify the person responsible for facility operations and contact information in the Facility Contact Person and Facility Contact Details fields.
16. List the participants involved in the incident in the Injured Participants field.
17. If necessary, provide additional information about other participants in the Incident Injured Participants Other field.
18. Enter the facility's response to the incident in the Facility Response field.
19. If necessary, provide additional information about the incident location in the Incident Location Other field.
20. Enter the cause of the incident in the Incident Cause field.
21. If the incident cause is not listed, provide additional information about it in the Incident Cause Other field.
22. Enter more details about the incident cause in the Incident Cause Details field.
23. If necessary, provide additional information about other incident causes in the Incident Cause Other Details field.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, date, required): Enter the date the incident occurred.
* **Incident Time** (`incident_time`, time, required): Enter the time the incident occurred.
* **Facility Name** (`facility_name`, text, required): Specify the name of the facility where the incident took place.
* **Incident Type** (`incident_type`, select_one, required): Choose the type of incident that occurred (e.g., accident, injury).
* **Description** (`description`, text, required): Provide a detailed description of the incident.
* **Facility Address** (`facility_address`, text, required): Enter the address of the facility where the incident occurred.
* **Incident Location** (`incident_location`, text, required): Specify the location of the incident.
* **Incident Reporter** (`incident_reporter`, text, required): Enter the name of the person who reported the incident.
* **Incident Reporter Relationship** (`incident_reporter_relationship`, text, required): Describe the relationship between the incident reporter and the facility.
* **Incident Reporter Contact** (`incident_reporter_contact`, text, required): Enter the contact information of the person who reported the incident.
* **Incident Status** (`incident_status`, select_one, required): Specify the status of the incident (e.g., pending, resolved, ongoing).
* **Incident Nature** (`incident_nature`, text, required): Enter the nature of the incident (e.g., accident, injury).
* **Other (please specify)** (`incident_nature_other`, text, optional): If the incident was not listed as an accident or injury, provide additional information.
* **Incident Summary** (`incident_summary`, text, required): Enter a summary of the incident.
* **Incident Summary Other** (`incident_summary_other`, text, optional): If a summary is not enough, provide more details about the incident.
* **Facility Contact Person** (`facility_contact_person`, text, required): Identify the person responsible for facility operations and contact information.
* **Facility Contact Details** (`facility_contact_details`, text, required): Enter the contact information of the person responsible for facility operations.
* **Injured Participants** (`incident_injured_participants`, text, required): List the participants involved in the incident.
* **Incident Injured Participants Other** (`incident_injured_participants_other`, text, optional): If necessary, provide additional information about other participants.
* **Facility Response** (`facility_response`, text, required): Enter the facility's response to the incident.
* **Incident Location Other** (`incident_location_other`, text, optional): If necessary, provide additional information about the incident location.
* **Incident Cause** (`incident_cause`, text, required): Enter the cause of the incident.
* **Incident Cause Other** (`incident_cause_other`, text, optional): If the incident cause is not listed, provide additional information.
* **Incident Cause Details** (`incident_cause_details`, text, required): Enter more details about the incident cause.
* **Incident Cause Other Details** (`incident_cause_other_details`, text, optional): If necessary, provide additional information about other incident causes.

## Tips

* Be thorough when filling in each field to ensure accurate and comprehensive information.
* Double-check the information you enter in each field for clarity and consistency.
* If unsure about any field or section, refer back to the form's purpose and instructions.
