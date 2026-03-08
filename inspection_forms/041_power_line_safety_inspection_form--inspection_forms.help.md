# Power Line Safety Inspection Form - Help Guide
## Purpose
The Power Line Safety Inspection Form is used to conduct regular power line inspections to ensure the safety and reliability of power lines in the electrical grid. This form gathers information about the inspection date, location, type of inspection, and any hazards or compliance issues found during the inspection.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the inspection date from the calendar and enter it into the `inspection_date` field.
2. Enter the name of the utility company performing the inspection in the `utility_name` field.
3. Specify the location of the inspection in the `inspection_location` field.
4. Choose the type of inspection from the `inspection_type` dropdown menu, which should be either "Line Inspection" or "Tower Inspection".
5. List any safety hazards found during the inspection in the `safety_hazards` field.
6. If any compliance issues were found, list them in the `compliance_issues` field.
7. Add any additional notes about the inspection in the `notes` field.
8. Select the inspection status from the `inspection_status` dropdown menu, which should be either "Complete", "Not Started", or "Deferred".
9. Enter the name of the person assigned to conduct the inspection in the `assigned_to` field.

## Field-by-Field Explanation
* **Inspection Date** (`inspection_date`, date): Enter the date of the inspection in the format of YYYY-MM-DD.
* **Utility Name** (`utility_name`, text): Enter the name of the utility company performing the inspection.
* **Inspection Location** (`inspection_location`, text): Specify the location of the inspection, e.g., power line 123 Main St.
* **Inspection Type** (`inspection_type`, select_one): Choose the type of inspection, either "Line Inspection" or "Tower Inspection".
	+ Line Inspection: Conduct an inspection of a specific power line.
	+ Tower Inspection: Conduct an inspection of a specific tower.
* **Safety Hazards** (`safety_hazards`, text): List any safety hazards found during the inspection, e.g., loose wire, open door.
* **Compliance Issues** (`compliance_issues`, text): List any compliance issues found during the inspection, e.g., missing tags, incorrect wiring.
* **Additional Notes** (`notes`, note): Enter any additional notes or comments about the inspection.
* **Inspection Status** (`inspection_status`, select_one): Select the status of the inspection, either "Complete", "Not Started", or "Deferred".
	+ Complete: The inspection has been completed.
	+ Not Started: The inspection has not been started.
	+ Deferred: The inspection has been postponed or rescheduled.
* **Assigned To** (`assigned_to`, text): Enter the name of the person assigned to conduct the inspection.
