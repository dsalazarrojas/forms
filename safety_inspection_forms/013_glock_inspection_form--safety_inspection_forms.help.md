# glock-inspection-form - Help Guide
## Purpose
The purpose of this form is to collect information about the GLOCK firearm's condition, safety features, and maintenance records.

## How To Complete This Form

To complete this form, follow the steps below:

1. Start by filling in the required fields, which are marked as "required."
2. For the "weapon condition" field, select the correct condition of the firearm using the provided options (Good, Fair, or Poor).
3. In the "safety check list" field, select all the safety features that are present on the firearm (e.g., Trigger is safe to use, Safety is engaged properly, etc.).
4. In the "GLOCK model" field, select the correct model of the firearm from the provided options.
5. For the "inspection date" field, enter the date of the inspection.
6. In the "GLOCK condition" field, select all the conditions that apply to the firearm (e.g., Operational, Damaged, etc.).
7. For the "inspection status" field, select the status of the inspection (Incomplete, Complete, or Not Inspected).
8. In the "GLOCK maintenance record" field, provide any relevant maintenance records for the firearm.
9. Finally, sign the "GLOCK inspection signature" field with your name to confirm that you have inspected the firearm.

## Field-by-Field Explanation

* **weapon_condition**: (`weapon_condition`, `select_one`, required/optional): Selects the overall condition of the firearm (Good, Fair, or Poor).
* **safety_checklist**: (`safety_checklist`, `select_multiple`, required/optional): Selects all the safety features that are present on the firearm (e.g., Trigger is safe to use, Safety is engaged properly, etc.).
* **glock_model**: (`glock_model`, `select_one`, required/optional): Selects the correct model of the firearm from the provided options.
* **inspection_date**: (`inspection_date`, `date`, required/optional): Enters the date of the inspection.
* **glock_condition**: (`glock_condition`, `select_multiple`, required/optional): Selects all the conditions that apply to the firearm (e.g., Operational, Damaged, etc.).
* **inspection_status**: (`inspection_status`, `select_one`, required/optional): Selects the status of the inspection (Incomplete, Complete, or Not Inspected).
* **glock_maintenance_record**: (`glock_maintenance_record`, `note`, required/optional): Provides any relevant maintenance records for the firearm.
* **glock_inspection_signature**: (`glock_inspection_signature`, `text`, required/optional): Signs the inspection with your name to confirm that you have inspected the firearm.
