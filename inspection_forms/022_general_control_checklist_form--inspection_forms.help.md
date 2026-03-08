<thinking>This form is a General Control Checklist Form, designed for inspecting general control systems in different departments. Its purpose is to gather information on the status of general control systems and ensure that they are functioning correctly. This form helps in the following areas: tracking progress, identifying issues, and maintaining records of control system inspections.</thinking>

# General Control Checklist Form - Help Guide
## Purpose
The General Control Checklist Form is used to inspect general control systems, track progress, and maintain records of control system inspections.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the department from the options provided.
2. Enter the location of the control system.
3. Identify the facility or facilities where the control system is located.
4. Select the control area of the control system.
5. Enter the date of the inspection (optional).
6. Select the follow-up status of the control system (e.g., scheduled, completed, etc.).
7. Enter any follow-up comments regarding the control system.
8. Select the user assigned to perform the inspection.
9. Select the user who submitted the form.
10. Add any comments or notes about the inspection.
11. Enter any additional notes regarding the facility.

## Field-by-Field Explanation
* **Department** (`general_control_checklist_form`, select_one, required):
	+ Select the department where the control system is located.
* **Location** (`location`, text, required):
	+ Enter the physical location of the control system.
* **Facility** (`facility`, select_multiple, optional):
	+ Select all the facilities where the control system is located.
* **Control Area** (`control_area`, select_one, required):
	+ Identify the specific control area of the control system.
* **Inspection Date** (`inspection_date`, date, optional):
	+ Enter the date of the inspection (if applicable).
* **Follow-up Status** (`follow_up_status`, select_one, required):
	+ Select the follow-up status of the control system (e.g., scheduled, completed, etc.).
* **Follow-up Comments** (`follow_up_comments`, note, optional):
	+ Enter any comments regarding the follow-up status of the control system.
* **Assigned User** (`assigned_user`, select_one, required):
	+ Select the user assigned to perform the inspection.
* **Submitting User** (`submitting_user`, select_one, optional):
	+ Select the user who submitted the form.
* **Comments** (`comments`, note, optional):
	+ Add any comments or notes about the inspection.
* **Facility Notes** (`facility_notes`, note, optional):
	+ Enter any additional notes about the facility.
