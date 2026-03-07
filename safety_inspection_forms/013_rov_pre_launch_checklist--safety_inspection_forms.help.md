# ROV Pre Launch Checklist - Help Guide

## Purpose
The ROV Pre Launch Checklist form is a checklist designed to ensure that all safety and functionality aspects of a Robotic Operating Vehicle (ROV) are checked before it is launched. This form helps users verify that the ROV is ready for launch by confirming the status of its components and systems.

## How To Complete This Form
To complete the ROV Pre Launch Checklist form, follow these steps:

* Review the form carefully to ensure you have a clear understanding of the questions and options.
* Fill in the ROV Model select option with the correct model of your ROV.
* For each of the remaining fields, choose the corresponding status from the dropdown options:
	+ Battery Status: Fully Charged, Charging, or Discharging.
	+ Control Systems: Functional or Non-Functional.
	+ Navigation Systems: Functional or Non-Functional.
	+ Propulsion Systems: Functional or Non-Functional.
	+ Communication Systems: Functional or Non-Functional.
	+ Safety Equipment: Installed or Not Installed.
	+ Safety Procedures: Completed or Not Completed.
* For the final two fields, select the correct status:
	+ Pre Launch Checklist Complete: True or False.
	+ Pre Launch Checklist Reviewed: Reviewed or Not Reviewed.

## Field-by-Field Explanation
* **ROV Model** (`rov_model`, select_one, required: false): Choose the model of your ROV.
* **Battery Status** (`battery_status`, select_multiple, required: false): Select the current status of the battery: Fully Charged, Charging, or Discharging.
* **Control Systems** (`control_systems`, select_multiple, required: false): Choose the status of the control systems: Functional or Non-Functional.
* **Navigation Systems** (`navigation_systems`, select_multiple, required: false): Select the status of the navigation systems: Functional or Non-Functional.
* **Propulsion Systems** (`propulsion_systems`, select_multiple, required: false): Choose the status of the propulsion systems: Functional or Non-Functional.
* **Communication Systems** (`communication_systems`, select_multiple, required: false): Select the status of the communication systems: Functional or Non-Functional.
* **Safety Equipment** (`safety_equipment`, select_multiple, required: false): Choose the status of the safety equipment: Installed or Not Installed.
* **Safety Procedures** (`safety_procedures`, select_multiple, required: false): Select the status of the safety procedures: Completed or Not Completed.
* **Pre Launch Checklist Complete** (`pre_launch_checklist_complete`, select_one, required: false): Indicate if the pre-launch checklist is complete (True) or not (False).
* **Pre Launch Checklist Reviewed** (`pre_launch_checklist_reviewed`, select_one, required: false): Indicate if the pre-launch checklist has been reviewed (Reviewed) or not (Not Reviewed).

## Tips
* Make sure to fill in all fields accurately to ensure the ROV is ready for launch.
* If any field indicates a non-functional or non-completed status, investigate and correct the issue before proceeding with launch.
* The pre-launch checklist should be reviewed and updated regularly to ensure the ROV's systems and equipment are functioning correctly.
