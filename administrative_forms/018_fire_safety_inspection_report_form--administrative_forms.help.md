# Fire Safety Inspection Report Form - Help Guide
## Purpose
This form is used to report on the status of a facility's fire safety systems and equipment. It allows users to document observations, findings, and recommendations on fire safety hazards and equipment. The form helps facilities maintain compliance with fire safety regulations and ensures a safe working environment for employees and visitors.

## How To Complete This Form
1. Fill in the required fields:
	* Facility address and name.
	* Fire inspector's name, email, and phone number.
2. Select the fire hazards found during the inspection.
3. Report the status of fire equipment and safety systems.
4. Record any test results or inspection dates for fire safety equipment.

## Field-by-Field Explanation
* **fire_inspector_name** (`text`, required): Enter the name of the fire inspector who conducted the inspection.
* **fire_inspector_email** (`email`, required): Enter the email address of the fire inspector.
* **fire_inspector_phone** (`text`, required): Enter the phone number of the fire inspector.
* **facility_name** (`text`, required): Enter the name of the facility being inspected.
* **facility_address** (`text`, required): Enter the address of the facility.
* **fire_hazards** (`select_one`, required): Select one of the following fire hazards:
	+ Fire extinguishing systems
	+ Fire safety equipment
	+ Fire safety signs
	+ Fire exit routes
	+ Fire drills
	+ Fire safety plan
	+ Fire safety training
	+ Emergency exit plan
	+ Fire hazards
	+ Emergency contact numbers
	+ Fire safety equipment testing
* **fire_equipment** (`text`, required): Describe the fire equipment found in the facility.
* **fire_equipment_status** (`select_multiple`, required): Report the status of fire equipment:
	+ Working
	+ Not working
	+ Needs repair
	+ Needs inspection
	+ Not required
* **fire_safety_equipment_testing** (`select_multiple`, required): Report the test results for fire safety equipment:
	+ Pass
	+ Fail
	+ Pending
* **fire_safety_equipment_inspection_date** (`date`, required): Enter the date of the last fire safety equipment inspection.
* **fire_safety_equipment_last_inspection_date** (`date`, required): Enter the date of the last inspection for fire safety equipment.

# Tips
* Make sure to select all fire hazards that were found during the inspection.
* Be specific when describing the status of fire equipment and safety systems.
* Ensure the form is completed accurately and thoroughly to provide a clear picture of the facility's fire safety status.
