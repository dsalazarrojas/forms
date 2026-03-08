# extension_cord_safety_checklist - Help Guide
## Purpose
The "extension_cord_safety_checklist" is a form used to inspect and record the safety of extension cords. It is designed to ensure compliance with safety regulations or standards.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine the safety status of the extension cord.
2. Select "True" if the extension cord is safe, or "False" if it's not.
3. Enter the date of the inspection.
4. Identify any hazards found during the inspection.
5. Select the type(s) of hazard(s) found.
6. Enter the location of the hazard(s).
7. Add any additional notes about the inspection.
8. If applicable, select the tool used for the inspection.
9. Enter the name of the inspector.

## Field-by-Field Explanation
* **extension_cord** (`extension_cord`, select_one, required): Select "True" if the extension cord is safe, or "False" if it's not.
* **inspection_date** (`inspection_date`, date, required): Enter the date of the inspection.
* **hazard_found** (`hazard_found`, select_multiple, required): Identify any hazards found during the inspection. Select multiple hazards if needed.
* **hazard_type** (`hazard_type`, text, required): Enter the type(s) of hazard(s) found.
* **hazard_location** (`hazard_location`, text, required): Enter the location(s) of the hazard(s).
* **notes** (`notes`, note, required): Add any additional notes about the inspection.
* **assigned_tool** (`assigned_tool`, text, optional): If applicable, select the tool used for the inspection.
* **inspector_name** (`inspector_name`, text, required): Enter the name of the inspector.
