<thinking>
The "hvac_equipment_survey_form" form is designed to collect data on Heating, Ventilation, and Air Conditioning (HVAC) equipment. This form is meant to gather information on various aspects of the equipment, including its status, location, and maintenance details. 

The form should only be used for surveying HVAC equipment that is relevant to the provided context. Duplicate entries should be avoided to prevent unnecessary redundancy and data inconsistency. 

</thinking>

# hvac_equipment_survey_form - Help Guide
## Purpose
The hvac_equipment_survey_form is designed to collect data on Heating, Ventilation, and Air Conditioning (HVAC) equipment. This information will help in maintaining accurate records and improving the maintenance process.

## How To Complete This Form
1. Select the relevant HVAC equipment for which you want to survey. 
2. Fill in the required fields, marked with an asterisk (\*), with accurate and relevant information.
3. Choose the correct status and equipment type from the available options.
4. Add any additional notes or comments in the "notes" fields as necessary.

## Field-by-Field Explanation

* **Heating_Ventilation** (`1`, `text`, *required*): Enter a brief description of the HVAC equipment, e.g., "Heat Pump" or "Ventilation System".
* **air_conditioning** (`2`, `text`, *required*): Enter a brief description of the air conditioning equipment, e.g., "Air Conditioner" or "Chiller".
* **status** (`3`, `select_one`, *required*): Choose the current status of the equipment:
	+ Online: The equipment is currently in operation and functioning properly.
	+ Offline: The equipment is not currently in operation due to maintenance or other issues.
	+ Inactive: The equipment is not currently in use but is still maintained for future use.
	+ Unknown: The status of the equipment is unknown.
* **notes** (`4`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **facility_id** (`5`, `number`, *required*): Enter the ID number of the facility where the equipment is located.
* **technician_id** (`6`, `number`, *required*): Enter the ID number of the technician who last updated the equipment status.
* **last_updated** (`7`, `date`, *required*): Enter the date and time the equipment status was last updated.
* **equipment_make** (`8`, `text`, *optional*): Enter the manufacturer of the HVAC equipment.
* **equipment_model** (`9`, `text`, *optional*): Enter the model number or type of the HVAC equipment.
* **notes_2** (`10`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_3** (`11`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_4** (`12`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_5** (`13`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_6** (`14`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_7** (`15`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_8** (`16`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **equipment_id** (`17`, `text`, *required*): Enter the ID number of the HVAC equipment.
* **equipment_serial** (`18`, `text`, *optional*): Enter the serial number of the HVAC equipment.
* **equipment_type** (`19`, `select_one`, *required*): Choose the type of HVAC equipment:
	+ Air Handler
	+ Air Compressor
	+ Chill Water
	+ Cooling Tower
	+ Heat Exchanger
* **equipment_location** (`20`, `text`, *optional*): Enter the location of the HVAC equipment.
* **notes_9** (`21`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_10** (`22`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_11** (`23`, `note`, *optional*): Add any additional comments or notes about the equipment.
* **notes_12** (`24`, `note`, *optional*): Add any additional comments or notes about the equipment.
