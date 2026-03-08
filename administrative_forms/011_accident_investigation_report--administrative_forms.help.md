<thinking>Before designing the help guide, I reviewed the form's purpose and content. The Accident Investigation Report form is designed to collect information about incidents that occur within the workplace. Its primary goal is to document the facts surrounding an incident, identify the root cause, and outline corrective actions to prevent similar incidents in the future. This form should only be completed for incidents that require reporting under your company's incident reporting policy.</thinking>

# Accident Investigation Report - Help Guide
## Purpose

The Accident Investigation Report form is used to document incidents that occur within the workplace. It helps to gather essential information, identify the root cause, and implement corrective actions to prevent similar incidents from happening again.

## How To Complete This Form

1. Review the incident and gather all relevant information.
2. Fill out the form in a clear and concise manner, ensuring all required fields are completed.
3. Be thorough in your description of the incident, including details of what happened, the date and time it occurred, and the location.
4. Identify the injured employee and their department.
5. Describe the direct and root causes of the incident.
6. Document any immediate and long-term corrective actions taken or recommended.
7. Specify the person responsible for follow-up actions and the target completion date.
8. Indicate if the incident is OSHA recordable.

## Field-by-Field Explanation

* **Report Number** (`report_number`, text, required): Enter the assigned report number by the safety department.
* **Date of Report** (`report_date`, date, required): The date the report was completed.
* **Investigator Name** (`investigator_name`, text, required): The name of the person conducting the investigation.
* **Investigator Title or Position** (`investigator_title`, text, required): The title or position of the investigator.
* **Date of Incident** (`incident_date`, date, required): The date the incident occurred.
* **Time of Incident** (`incident_time`, time, required): The time the incident occurred.
* **Incident Location** (`incident_location`, text, required): The location where the incident happened (e.g., building, floor, area, workstation).
* **Name of Injured Employee** (`injured_employee_name`, text, required): The name of the employee involved.
* **Department of Injured Employee** (`employee_department`, text, required): The department the injured employee belongs to.
* **Type of Incident** (`incident_type`, select_one, required): Choose the type of incident (e.g., Near miss, First aid only, Medical treatment, Lost time injury, Fatality, Property damage only).
* **Detailed Description of What Happened** (`incident_description`, text, required): A detailed description of what occurred during the incident, including a sequence of events.
* **Direct Cause of the Incident** (`direct_cause`, text, required): The immediate action or condition that led to the incident.
* **Contributing Factors** (`contributing_factors`, select_multiple, required): Select all factors that contributed to the incident (e.g., Inadequate training, Equipment failure, Unsafe work practices, Environmental conditions, Lack of supervision, PPE not used or unavailable, Fatigue or distraction, Inadequate procedures).
* **Root Cause** (`root_cause`, text, required): The underlying systemic issue that led to the incident.
* **Immediate Corrective Actions Taken** (`immediate_actions`, text, required): Actions taken immediately after the incident.
* **Long-Term Corrective Actions Recommended** (`long_term_actions`, text, required): Recommended long-term actions to prevent similar incidents.
* **Person Responsible for Follow-Up Actions** (`action_responsible_person`, text, required): The person responsible for ensuring the corrective actions are implemented.
* **Target Completion Date for Corrective Actions** (`target_completion_date`, date, required): The target date for completing the corrective actions.
* **Witness Statements or Names** (`witness_statements`, text, optional): Statements or names from witnesses who witnessed the incident.
* **Is This Incident OSHA Recordable?** (`osha_recordable`, select_one, required): Whether the incident is OSHA recordable.
