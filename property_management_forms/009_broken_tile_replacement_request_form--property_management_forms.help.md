# Broken Tile Replacement Request Form - Help Guide
## Purpose
The Broken Tile Replacement Request Form is designed to collect information from tenants who have reported a broken tile in their unit. This form will help the maintenance team to process your request efficiently and ensure that the repair is done in a timely manner.

## How To Complete This Form

1. Please fill in your personal details:
	* Tenant Name
	* Unit Number
	* Phone Number
	* Email Address (optional)
2. Provide the location and details of the broken tile:
	* Property Address
	* Tile Location (e.g. Kitchen Floor, Bathroom Wall)
	* Location Description (optional)
	* Number of Broken Tiles
	* Tile Size (e.g. Small, Medium, Large)
	* Tile Color or Pattern (optional)
	* Damage Severity (e.g. Minor, Moderate, Severe)
	* Cause of Damage (e.g. Normal wear and tear, Dropped object, etc.)
	* Additional Damage Description (optional)
3. Schedule the repair:
	* Preferred Service Date
	* Access Instructions (e.g. Key location, etc.)
4. Confirm the repair:
	* If you will be present during the repair, please select "Yes I will be present"
	* If you are leaving the key in a secure location, please specify the location
	* If other arrangements have been made, please describe them
5. Confirm the urgency level of the repair:
	* Emergency
	* High Priority
	* Standard
	* Low Priority
6. Confirm that you authorize the repair:
	* Yes I Authorize

## Field-by-Field Explanation

* **Tenant Name** (`tenant_name`, `text`, required): Please fill in your full name as it appears on your rental agreement.
* **Unit Number** (`unit_number`, `text`, required): Please enter the apartment or unit number where the tile is located.
* **Phone Number** (`phone_number`, `text`, required): Please enter your contact phone number for any follow-up communication.
* **Email Address** (`email_address`, `email`, optional): Please enter your email address for any follow-up communication.
* **Property Address** (`property_address`, `text`, required): Please enter the full address of the property where the tile is located.
* **Tile Location** (`tile_location`, `select_one`, required): Please select the location of the broken tile (e.g. Kitchen Floor, Bathroom Wall).
* **Location Description** (`location_description`, `text`, optional): Please provide any additional details about the location of the broken tile.
* **Number of Broken Tiles** (`number_of_broken_tiles`, `number`, required): Please enter the number of tiles that are broken.
* **Tile Size** (`tile_size`, `select_one`, required): Please select the approximate size of the tiles (e.g. Small, Medium, Large).
* **Tile Color or Pattern** (`tile_color_pattern`, `text`, optional): Please describe the color or pattern of the tile if known.
* **Damage Severity** (`damage_severity`, `select_one`, required): Please select the severity of the damage (e.g. Minor, Moderate, Severe).
* **Cause of Damage** (`damage_cause`, `select_one`, required): Please select the cause of the damage (e.g. Normal wear and tear, Dropped object, etc.).
* **Additional Damage Description** (`damage_description`, `text`, optional): Please provide any additional details about the damage.
* **Preferred Service Date** (`preferred_service_date`, `date`, required): Please select a date for the repair to be done.
* **Access Instructions** (`access_instructions`, `text`, required): Please provide instructions on how the maintenance team can access the unit.
* **Tenant Will Be Present** (`tenant_available`, `select_one`, required): Please select whether someone will be present during the repair.
* **Urgency Level** (`urgency_level`, `select_one`, required): Please select the urgency level of the repair (e.g. Emergency, High Priority, Standard, Low Priority).
* **Repair Authorization** (`repair_authorization`, `select_one`, required): Please select whether you authorize the repair and understand that costs may apply.
* **Submission Date** (`submission_date`, `date`, required): Please select the date of this request.

## Tips

* Please ensure that all fields are filled in correctly to avoid delays in processing your request.
* If you are unsure about any of the fields, please contact the maintenance team for assistance.
* Please note that the repair will be scheduled based on the information provided in this form.
* Please confirm that you have reviewed and understood the form before submitting it.
