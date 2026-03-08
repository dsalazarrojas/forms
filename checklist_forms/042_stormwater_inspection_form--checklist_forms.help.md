# Stormwater Inspection Form - Help Guide
## Purpose
The Stormwater Inspection Form is used to assess the status of stormwater systems, including their functionality, components, and compliance with regulations. This form helps ensure that stormwater systems are in good working order and meet regulatory requirements.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the status of the stormwater system:
	* If the system is functioning as expected, select "System is functioning as expected".
	* If the system is not functioning correctly, select "System is malfunctioning".
	* If no issues have been reported, select "No issues reported".
2. List all stormwater system components, such as pipes, pumps, valves, and motors.
3. Provide a detailed description of the inspection results, including any issues or concerns.
4. Answer questions about recent damage to the system:
	* Select "Yes" if damage has occurred.
	* Select "No" if no damage has occurred.
5. Indicate if maintenance is planned or scheduled:
	* Select "True" if maintenance is planned.
	* Select "False" if no maintenance is planned.
6. Confirm if the system is in regulatory compliance:
	* Select "True" if the system is fully compliant.
	* Select "Partial" if the system is partially compliant.
	* Select "False" if the system is not compliant.

## Field-by-Field Explanation
* **Stormwater System** (`stormwater_system`, select_one, required): Select whether the stormwater system is present or not.
* **System Functioning** (`system_functioning`, select_multiple, required): Describe the system's status, including "System is functioning as expected", "System is malfunctioning", or "No issues reported".
* **Stormwater System Components** (`stormwater_system_components`, select_multiple, required): List all system components, such as pipes, pumps, valves, or motors.
* **Inspection Results** (`inspection_results`, text, required): Provide a detailed description of the inspection results, including any issues or concerns.
* **Recent Damage** (`recent_damage`, select_one, required): Indicate if recent damage has occurred, selecting "Yes" or "No".
* **Maintenance Planned** (`maintenance_planned`, select_one, required): Indicate if maintenance is planned or scheduled, selecting "True" or "False".
* **Regulatory Compliance** (`regulatory_compliance`, select_one, required): Confirm if the system is in regulatory compliance, selecting "True", "Partial", or "False".
