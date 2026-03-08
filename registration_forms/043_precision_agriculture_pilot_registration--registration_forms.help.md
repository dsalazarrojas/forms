# Precision Agriculture Pilot Registration - Help Guide
## Purpose
This form is designed to collect information from farmers or agricultural organizations about their farms, participants, and activities. It may be used for research, monitoring, or data collection purposes.

## How To Complete This Form
1. Please fill out the form accurately and honestly.
2. Make sure to enter the correct farm ID and location.
3. Select the correct farm type and status.
4. Enter the correct participant details, including name, contact information, and any notes.
5. Fill out the farm size and dates (start and end dates) if applicable.
6. Select the correct farm status and aggregation status.
7. If assigned a tool, enter the tool's name.

## Field-by-Field Explanation
* **farmer_details** (id: 1, type: text): Enter the name or description of the farm.
* **participant_name** (id: 2, type: text): Enter the name of the participant (farmer's name).
* **farm_id** (id: 3, type: number): Enter the farm's ID number.
* **farm_type** (id: 4, type: select_one): Select 'Yes' or 'No' to indicate if the farm is a pilot farm.
* **farm_location** (id: 5, type: text): Enter the farm's location (address or coordinates).
* **farm_coordinates** (id: 6, type: text): Enter the farm's coordinates (e.g., latitude and longitude).
* **participant_details** (id: 7, type: select_multiple): Select 'Yes' or 'No' to indicate if the participant has provided details.
* **crop_types** (id: 8, type: select_multiple): Select 'Yes' or 'No' to indicate if the farm grows multiple crop types.
* **farm_size** (id: 9, type: number): Enter the farm's size in hectares or acres.
* **participant_contact** (id: 10, type: text): Enter the participant's contact information.
* **participant_email** (id: 11, type: email): Enter the participant's email address.
* **participant_phone** (id: 12, type: text): Enter the participant's phone number.
* **participant_notes** (id: 13, type: note): Enter any additional participant notes.
* **farm_notes** (id: 14, type: note): Enter any farm-specific notes.
* **participant_address** (id: 15, type: text): Enter the participant's address.
* **participant_zip** (id: 16, type: text): Enter the participant's ZIP code.
* **farm_start_date** (id: 17, type: date): Enter the date the farm started (if applicable).
* **farm_end_date** (id: 18, type: date): Enter the date the farm ended (if applicable).
* **farm_end_reason** (id: 19, type: select_one): Select 'Yes' or 'No' to indicate if the farm ended due to a reason.
* **farm_status** (id: 20, type: select_one): Select 'Active' or 'Inactive' to indicate the farm's status.
* **farm_status_date** (id: 21, type: date): Enter the date the farm's status changed (if applicable).
* **farm_comments** (id: 22, type: note): Enter any comments about the farm.
* **participant_comments** (id: 23, type: note): Enter any comments about the participant.
* **farm_aggregation_status** (id: 24, type: select_one): Select 'Active' or 'Inactive' to indicate the farm's aggregation status.
* **assigned_tool** (id: 25, type: text): Enter the tool assigned to the farm (if applicable).
