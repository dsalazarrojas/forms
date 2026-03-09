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
