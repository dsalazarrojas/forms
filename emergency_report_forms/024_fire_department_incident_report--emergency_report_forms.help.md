# Fire Department Incident Report - Help Guide
## Purpose
The Fire Department Incident Report form is used to document incidents reported to the fire department.

## How To Complete This Form
To complete the Fire Department Incident Report form, follow these steps:

1. Select the type of incident from the "Incident Type" dropdown menu. Choose from:
	* FIRE: Fire-related incidents
	* EMERGENCY: Emergency-related incidents
	* FALSE ALARM: False alarms or other non-emergency incidents
	* OTHER: Other types of incidents
2. Provide a brief description of the situation in the "situation_found" field.
3. Select the officer in charge from the "officer_in_charge" dropdown menu. Choose from:
	* Officer A
	* Officer B
	* Officer C
4. Choose the units involved from the "units_involved" field. Select one or more units involved in the incident.
5. Enter the call number (if applicable) in the "call_number" field.
6. Enter the date of the incident in the "call_date" field.
7. Enter the time of the incident in the "call_time" field.

## Field-by-Field Explanation

* **Incident Type** (`Incident Type`, `select_one`, required/optional): This field is used to categorize the incident type. Select the correct type to ensure accurate reporting.
* **Situation Found** (`situation_found`, `text`, optional): Provide a brief description of the situation when the incident was found.
* **Officer In Charge** (`officer_in_charge`, `select_one`, optional): This field is used to identify the officer in charge of the incident.
* **Units Involved** (`units_involved`, `select_multiple`, optional): Choose one or more units involved in the incident.
* **Call Number** (`call_number`, `number`, optional): Enter the call number if it was assigned during the incident.
* **Call Date** (`call_date`, `date`, optional): Enter the date of the incident.
* **Call Time** (`call_time`, `time`, optional): Enter the time of the incident.

## Tips
* Make sure to select the correct incident type and units involved to ensure accurate reporting.
* If the incident involves multiple units, select all relevant units in the "units_involved" field.
* Enter the call number and date/time of the incident if it was recorded during the incident.

Note: The form is designed for general guidance; however, specific requirements may vary based on the internal business needs and policies of the fire department. 

This help guide is designed to provide a general understanding of the form and its fields. It is recommended to review and follow internal guidelines and policies for more detailed and specific requirements.
