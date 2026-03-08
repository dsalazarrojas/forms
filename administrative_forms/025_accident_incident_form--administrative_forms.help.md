<thinking>
We will create a comprehensive help guide for the "Accident Incident Form" based on the provided YAML schema. The form aims to capture details about an incident or accident that occurred, and its purpose is to gather information for reporting and recording incidents that may have occurred in the workplace. This form will help ensure that accurate and complete information is provided to facilitate prompt and appropriate action.

To complete this form, please follow these steps:

## How To Complete This Form

1. Fill in the "Incident Reporter Name," "Reporter Position," and "Incident Date," which are required fields that ask for the name of the person reporting the incident, their job title or position, and the date when the incident occurred.
2. For the "Incident Time," "Incident Location," "Injured Employee Name," "Employee ID," "Employee Department," "Employee Position," and "Employee Supervisor" fields, enter the corresponding details of the employee involved in the incident.
3. In the "Incident Type" field, select the type of accident from the provided options (e.g., "Slip/Trip/Fall," "Struck by Object," etc.).
4. For "Body Parts Affected," select the areas of the body that were injured using the provided options.
5. In the "Injury Severity" field, choose the level of severity of the injury from the options provided.
6. For "Immediate Causes" and "Contributing Factors," describe the immediate and contributing factors that led to the incident.
7. In the "Witnesses Present" field, indicate if there were any witnesses to the incident, and in the "Witness Details" field, provide their names and contact information, if applicable.
8. Describe the "Corrective Actions Taken" after the incident.
9. In the "Preventive Measures" field, describe the measures that will be implemented to prevent similar accidents.
10. Finally, sign and date the "Supervisor Signature" and "Signature Date" fields, indicating that the supervisor has reviewed and verified the information provided.

## Field-by-Field Explanation

* **Incident Reporter Name** (`incident_reporter_name`, Text, Required): Enter the name of the person reporting the incident.
* **Reporter Position** (`reporter_position`, Text, Required): Enter the job title or position of the person reporting the incident.
* **Incident Date** (`incident_date`, Date, Required): Enter the date when the incident occurred.
* **Incident Time** (`incident_time`, Time, Required): Enter the time when the incident occurred.
* **Incident Location** (`incident_location`, Text, Required): Enter the specific location where the incident occurred.
* **Injured Employee Name** (`injured_employee_name`, Text, Required): Enter the full name of the employee involved in the incident.
* **Employee ID** (`employee_id`, Text, Required): Enter the employee identification number.
* **Employee Department** (`employee_department`, Text, Required): Enter the department where the employee works.
* **Employee Position** (`employee_position`, Text, Required): Enter the job title or position of the injured employee.
* **Employee Supervisor** (`employee_supervisor`, Text, Required): Enter the name of the employee's direct supervisor.
* **Incident Type** (`incident_type`, Select One, Required): Select the type of accident that occurred from the provided options.
* **Activity During Incident** (`activity_during_incident`, Text, Required): Describe what the employee was doing when the incident occurred.
* **Body Parts Affected** (`body_parts_affected`, Select Multiple, Required): Select the areas of the body that were injured.
* **Injury Severity** (`injury_severity`, Select One, Required): Select the level of severity of the injury from the options provided.
* **Immediate Causes** (`immediate_causes`, Text, Required): Describe the immediate factors that led to the incident.
* **Contributing Factors** (`contributing_factors`, Text, Required): Describe the contributing factors that led to the incident.
* **Witnesses Present** (`witnesses_present`, Select One, Required): Indicate if there were any witnesses to the incident.
* **Witness Details** (`witness_details`, Text, Required): If applicable, provide the names and contact information of witnesses.
* **Corrective Actions Taken** (`corrective_actions_taken`, Text, Required): Describe the immediate actions taken after the incident.
* **Preventive Measures** (`preventive_measures`, Text, Required): Describe the measures that will be implemented to prevent similar accidents.
* **Supervisor Signature** (`supervisor_signature`, Text, Required): Enter the signature of the employee's supervisor.
* **Signature Date** (`signature_date`, Date, Required): Enter the date of the supervisor's signature.

## Tips

* Make sure to complete all required fields accurately and thoroughly.
* Provide as much detail as possible for fields with options (e.g., "Incident Type," "Body Parts Affected," etc.).
* If there were witnesses, ensure you provide their names and contact information in the "Witness Details" field.
* Sign and date the "Supervisor Signature" and "Signature Date" fields once the supervisor has reviewed and verified the information.
