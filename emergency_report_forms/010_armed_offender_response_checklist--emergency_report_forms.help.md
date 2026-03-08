# Armed Offender Response Checklist - Help Guide
## Purpose
This form is used to gather information about incidents involving armed offenders. It is designed to be completed by responding officers or other authorized personnel in emergency situations.

## How To Complete This Form
1. Ensure you have a clear understanding of the incident's circumstances.
2. Fill out the form completely and accurately, providing as much detail as possible.
3. Answer each question to the best of your ability.
4. Review and verify your responses before submitting the form.

## Field-by-Field Explanation

* **Incident Date and Time** (`incident_date`, `date`, `true`): Enter the date and time the incident occurred.
* **Time of Incident** (`incident_time`, `time`, `true`): Enter the time of the incident (if not already entered in `incident_date`).
* **Location of Incident** (`incident_location`, `text`, `true`): Enter the building, address, or facility name where the incident took place.
* **Number of People Involved** (`number_of_people_involved`, `number`, `false`): (Optional) Enter the number of people involved in the incident.
* **Type of Weapons Involved** (`weapons_involved`, `select_multiple`, `true`): Select the type(s) of weapons involved in the incident (e.g., Firearm - handgun, Firearm - rifle, Knife or blade, Blunt object, Unknown, Other).
* **Police or Emergency Services Notified** (`police_notified`, `select_one`, `true`): Select if police or emergency services were notified, and if so, whether it was immediately or after a delay.
* **Evacuation Procedures Initiated** (`evacuation_initiated`, `select_one`, `true`): Select if evacuation procedures were initiated, and if so, if it was a full or partial evacuation.
* **Shelter in Place Procedures Activated** (`shelter_in_place`, `select_one`, `false`): Select if shelter in place procedures were activated.
* **Area Locked Down to Prevent Access** (`area_lockdown`, `select_one`, `true`): Select if the area was locked down to prevent access.
* **Injuries Reported or Suspected** (`injuries_reported`, `select_one`, `true`): Select the level of injuries reported or suspected (e.g., No injuries, Minor injuries, Moderate injuries, Serious injuries, Fatalities).
* **Medical Response Teams Contacted or on Scene** (`medical_response`, `select_one`, `false`): Select if medical response teams were contacted or on scene.
* **All Personnel Accounted For** (`personnel_accounting`, `select_one`, `true`): Select if all personnel are accounted for, or if there are missing or unaccounted persons.
* **Number of Missing or Unaccounted Persons** (`missing_count`, `number`, `false`): (Optional) Enter the number of missing or unaccounted persons.
* **Incident Commander Assigned** (`incident_commander_assigned`, `select_one`, `true`): Select if an incident commander was assigned.
* **Crisis Response Team or Coordinator Notified** (`crisis_team_notified`, `select_one`, `false`): Select if the crisis response team or coordinator was notified.
* **Media Access Controlled or Restricted** (`media_control`, `select_one`, `false`): Select if media access was controlled or restricted.
* **Incident Report Completed By** (`report_completed_by`, `text`, `true`): Enter the name and title of the reporting officer.
* **Additional Notes or Actions Taken** (`additional_notes`, `text`, `false`): Enter any additional notes or actions taken during the incident.
