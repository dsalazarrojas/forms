# Aircraft Cabin Safety Inspection Form - Help Guide
## Purpose
This form is used to document the findings and results of an aircraft cabin safety inspection. It's essential to ensure that all fields are accurately and completely filled out to maintain accurate records.

## How To Complete This Form
To complete this form, follow these steps:

1.  Fill in your name as the inspector conducting the inspection.
2.  Enter the date of the inspection.
3.  Evaluate the general condition of the cabin, selecting one of the three options (Good, Fair, or Poor).
4.  Check the status of the safety equipment, such as life vests, oxygen masks, and extinguishers.
5.  Check if the emergency exits are operational.
6.  Evaluate the condition of the lavatory (if applicable).
7.  Check the condition of the galley equipment (if applicable).
8.  Record any findings and recommendations for corrective actions.
9.  Sign and date your signature as the inspector.

## Field-by-Field Explanation

* **Inspector name** (`inspector_name`, text, required): This is your name as the inspector conducting the inspection. Please enter your name to ensure accurate records.
* **Inspection date** (`inspection_date`, date, required): The date on which the inspection was conducted. Please enter the date in the correct format (MM/DD/YYYY).
* **General cabin condition** (`cabin_condition`, select_one, required): The overall condition of the cabin, selecting one of the three options:
	+ Good: The cabin is in good condition, with no significant issues.
	+ Fair: The cabin has some minor issues, but they do not affect safety.
	+ Poor: The cabin has significant issues affecting safety.
* **Safety equipment check** (`safety_equipment_check`, text, required): Check the status of the safety equipment, such as life vests, oxygen masks, and extinguishers. Please record any issues or concerns you have.
* **Emergency exits operational** (`emergency_exits`, select_one, required): Check if the emergency exits are functioning properly. Select 'True' if the exits are operational, 'False' otherwise.
* **Lavatory condition** (`lavatory_condition`, select_one, optional): The condition of the lavatory, selecting one of the three options:
	+ Good: The lavatory is clean and functional.
	+ Fair: The lavatory has some minor issues, but it is still functional.
	+ Poor: The lavatory is not functional.
* **Galley equipment status** (`galley_equipment`, text, optional): Check the condition of the galley equipment, such as appliances and storage. Please record any issues or concerns you have.
* **Findings and recommendations** (`findings_and_recommendations`, text, required): Record any findings or concerns you have about the cabin, including any recommendations for corrective actions.
* **Inspector signature** (`inspector_signature`, note, required): Sign and date your signature as the inspector, acknowledging completion of the checklist.
