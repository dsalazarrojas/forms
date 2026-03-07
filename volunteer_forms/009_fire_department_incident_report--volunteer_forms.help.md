<thinking> 
To determine the purpose and relevance of this form, we need to analyze its fields. The form is titled "Fire Department Incident Report". The presence of fields like "Call Type", "Situation Found", and "Units Involved" suggests that this form is used to record information about emergency incidents handled by the fire department. The options for "Call Type" are "Fire Department", "Medical", "Mutual Aid", and "Other", indicating that it can be used to report various types of incidents. The fields "Situation Found" and "Date" and "Time" imply that the form is used to record incident details and timing. "Units Involved" suggests that it may be used to track which units were dispatched or responded to the incident. The "Volunteer" and "Volunteer Firefighter" fields indicate that it may be used to track whether volunteer firefighters were involved in the response. Given this analysis, we can infer that the purpose of this form is to record information about fire department incidents, including the type of call, situation, units involved, and timing.</thinking>
# fire_department_incident_report - Help Guide
## Purpose
This form is used to record information about fire department incidents, including the type of call, situation, units involved, and timing.

## How To Complete This Form
To complete this form, follow these steps:
1. Select the type of call from the "Call Type" field. This field helps us understand the nature of the incident.
2. In the "Situation Found" field, briefly describe the situation.
3. If applicable, select the units involved in the response from the "Units Involved" field.
4. If volunteer firefighters were involved, answer "Yes" in the "Volunteer" field.
5. If the location of the incident was not listed, enter the correct location in the "Location Other" field.
6. Enter the date of the incident in the "Date" field, in the correct format (YYYY-MM-DD).
7. Enter the time of the incident in the "Time" field, in the 12-hour format (HH:MM AM/PM).

## Field-by-Field Explanation
### Call Type
• **Call Type** (`Call Type`, `select_one`, required): Select the type of call from the provided options: Fire Department, Medical, Mutual Aid, and Other.

### Situation Found
• **Situation Found** (`Situation Found`, `text`, required): Briefly describe the situation found when responding to the incident.

### Officer in Charge
• **Officer in Charge** (`Officer in Charge`, `text`, optional): Enter the name of the officer in charge, if applicable.

### Units Involved
• **Units Involved** (`Units Involved`, `select_multiple`, required): Select all the units involved in the response.

### Volunteer
• **Volunteer** (`Volunteer`, `select_one`, optional): If volunteer firefighters were involved, select "Yes".

### Volunteer Firefighter
• **Volunteer Firefighter** (`Volunteer Firefighter`, `select_multiple`, optional): Select all the volunteer firefighters involved, if applicable.

### Units Involved Other
• **Units Involved Other** (`Units Involved Other`, `text`, optional): Enter any other units involved that were not listed above.

### Date
• **Date** (`Date`, `date`, required): Enter the date of the incident, in the format YYYY-MM-DD.

### Time
• **Time** (`Time`, `time`, required): Enter the time of the incident, in the 12-hour format (HH:MM AM/PM).

### Location
• **Location** (`Location`, `select_one`, optional): If the location of the incident is one of the listed options, select "Yes".

### Location Other
• **Location Other** (`Location Other`, `text`, optional): If the location of the incident is not listed, enter the correct location.

## Tips
* Always select the correct call type to accurately represent the nature of the incident.
* Enter a brief description of the situation found when responding to the incident.
* If units were involved that are not listed, enter them in the "Units Involved Other" field.
* Be precise when entering the date and time of the incident.
* If the location of the incident is not listed, enter the correct location in the "Location Other" field.
