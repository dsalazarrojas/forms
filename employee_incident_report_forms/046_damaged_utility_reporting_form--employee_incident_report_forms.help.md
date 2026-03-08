# Damaged Utility Reporting Form - Help Guide
## Purpose
The Damaged Utility Reporting Form is used to report incidents involving damaged utility equipment or infrastructure to the relevant maintenance team. This form is designed to collect relevant information to facilitate prompt attention and resolution to the issue.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date and time of the incident using the date field.
2. Enter the location where the incident occurred using the location field.
3. Select the type of damage that occurred using the dropdown menu.
4. (Optional) Attach a photo or description of the damage using the damage photo field.
5. Provide any additional comments or context about the incident using the comments field.
6. If the incident date is not known, enter the date of discovery using the incident date 2 field.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, `date`, required: false): Enter the date and time of the incident.
* **Location** (`location`, `text`, required: false): Enter the location where the incident occurred.
* **Type of Damage** (`damage_type`, `select_one`, required: false): Select one of the following options:
	+ Electrical
	+ Mechanical
	+ Physical
	+ Other
* **Damage Photo** (`damage_photo`, `text`, required: false): Attach a photo or description of the damage.
* **Comments** (`comments`, `text`, required: false): Provide any additional comments or context about the incident.
* **Incident Date (If not known)** (`incident_date_2`, `date`, required: false): If the incident date is not known, enter the date of discovery.
