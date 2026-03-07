<thinking>...</thinking>

# police_patrol_log_form - Help Guide
## Purpose
The **police_patrol_log_form** is a form used to document and record the details of a police patrol shift, including officer identity, shift start and end times, incident details, and other relevant information. This form is essential for maintaining accurate records and facilitating communication between officers and dispatchers.

## How To Complete This Form
1. Ensure you have all the necessary information and resources before starting to fill out the form.
2. Select the correct officer ID from the options provided.
3. Enter the start and end times of your shift using the time format (HH:MM:SS).
4. Enter the date of your shift in the required date format (YYYY-MM-DD).
5. For the Incident Id field, select 'Yes' if you were involved in an incident during your shift, and 'No' if not.
6. Enter a detailed description of any incidents you were involved in.
7. Enter your name as the officer who completed the form.
8. Provide the location where the incident occurred or where you were patrolling.
9. (Optional) Add any additional notes or comments about your shift.
10. Select the Patrol Unit that was assigned to you for the shift.
11. Select the Vehicle Id of the vehicle you were using (if applicable).

## Field-by-Field Explanation
* **Officer Id** (`officer_id`, number, required): Enter your unique officer ID.
* **Shift Start Time** (`shift_start_time`, time, required): Enter the start time of your shift in the time format (HH:MM:SS).
* **Shift End Time** (`shift_end_time`, time, required): Enter the end time of your shift in the time format (HH:MM:SS).
* **Shift Date** (`shift_date`, date, required): Enter the date of your shift in the required date format (YYYY-MM-DD).
* **Incident Id** (`incident_id`, select_one, required): Select 'Yes' if you were involved in an incident during your shift, and 'No' if not.
* **Incident Description** (`incident_description`, text, required): Enter a detailed description of any incidents you were involved in.
* **Officer Name** (`officer_name`, text, required): Enter your name as the officer who completed the form.
* **Location** (`location`, text, required): Provide the location where the incident occurred or where you were patrolling.
* **Notes** (`notes`, note, optional): Add any additional notes or comments about your shift.
* **Shift Officer Id** (`shift_officer_id`, number, optional): Enter the ID of the officer who was assigned to you for the shift.
* **Patrol Unit** (`patrol_unit`, select_multiple, required): Select the Patrol Unit that was assigned to you for the shift.
* **Vehicle Id** (`vehicle_id`, number, optional): Enter the ID of the vehicle you were using (if applicable).
