# daily_encounter_log - Help Guide
## Purpose
The daily encounter log form is designed to collect information about client interactions, including dates, times, locations, staff members, client encounter types, and follow-up actions. This form is likely used in a healthcare setting to track client interactions and provide a record of daily encounters.

## How To Complete This Form
1. Fill out the form for each client interaction on a daily basis.
2. Select the date and time of the visit using the provided date and time fields.
3. Enter the location of the visit in the text field.
4. Select the staff member who interacted with the client using the staff member name field.
5. Choose the type of client encounter from the options provided (e.g., Emergency Call, Home Visit, etc.).
6. Provide any relevant notes about the interaction in the encounter notes field.
7. Select a follow-up action from the options provided or choose "No Follow-up Required" if no action is necessary.

## Field-by-Field Explanation
* **Date of Visit** (`date_of_visit`, date, required: false): Enter the date of the client visit using the provided date field.
* **Time of Visit** (`time_of_visit`, time, required: false): Enter the time of the client visit.
* **Location of Visit** (`location_of_visit`, text, required: false): Enter the location where the client visit took place.
* **Staff Member Name** (`staff_member_name`, text, required: false): Enter the name of the staff member who interacted with the client.
* **Client Encounter Type** (`client_encounter_type`, select_one, required: false): Select the type of client encounter (e.g., Emergency Call, Home Visit, etc.).
	+ **Options:**
		- Emergency Call
		- Home Visit
		- Hospital Visit
		- Office Visit
		- Other
* **Encounter Notes** (`encounter_notes`, text, required: false): Provide any notes about the interaction with the client.
* **Follow-up Action** (`follow_up_action`, select_one, required: false): Select the follow-up action for the client (e.g., No Follow-up Required, Schedule Follow-up, etc.).
	+ **Options:**
		- No Follow-up Required
		- Schedule Follow-up
		- Send Reminder
		- Refer to Specialist
		- Other
