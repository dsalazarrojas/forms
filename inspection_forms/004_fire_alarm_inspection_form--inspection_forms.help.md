# Fire Alarm Inspection Form - Help Guide
## Purpose
The Fire Alarm Inspection Form is used to collect information about the fire alarm system in a facility or building. This form is designed to help inspectors conduct a thorough inspection of the fire alarm system and record their findings.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the Fire Alarm System section, which asks for a brief description of the fire alarm system.
2. Answer the questions about the Alarm Types, Alarm Location, and Zone Description to provide more detailed information about the fire alarm system.
3. Check the status of the Fire Alarm System, including whether it is Active or Inactive.
4. Enter the Inspection Date and Inspection Time if applicable.
5. Answer questions about the Fire Alarm Certificate, Inspection Results, and Comments to provide further information about the inspection process.
6. Check if a specific tool was assigned to inspect the fire alarm system.
7. Enter any additional information about the fire alarm system in the Fire Alarm Inspection Date and Fire Alarm Certificate 2 fields.
8. Finally, review and submit the form.

## Field-by-Field Explanation

* **Fire Alarm System** (`fire_alarm_system`, `text`, required: false): Provide a brief description of the fire alarm system.
* **System Description** (`system_description`, `text`, required: false): Enter a more detailed description of the fire alarm system.
* **Alarm Types** (`alarm_types`, `select_multiple`, required: false): Check all that apply for the types of alarms present in the system.
	+ Options: Yes, No
* **Alarm Location** (`alarm_location`, `select_one`, required: false): Check where the alarm is located.
	+ Options: Yes, No
* **Zone Description** (`zone_description`, `text`, required: false): Enter a description of each zone in the system.
* **Fire Alarm System Description** (`fire_alarm_system_description`, `text`, required: false): Enter a description of the fire alarm system.
* **Fire Alarm System Status** (`fire_alarm_system_status`, `select_one`, required: false): Check the status of the fire alarm system.
	+ Options: Active, Inactive
* **Inspection Date** (`inspection_date`, `date`, required: false): Enter the date of the inspection if applicable.
* **Inspection Time** (`inspection_time`, `time`, required: false): Enter the time of the inspection if applicable.
* **Fire Alarm Certificate** (`fire_alarm_certificate`, `select_multiple`, required: false): Check if a fire alarm certificate is present.
	+ Options: Yes, No
* **Inspection Results** (`inspection_results`, `text`, required: false): Enter the results of the inspection.
* **Comments** (`comments`, `text`, required: false): Enter any comments or notes from the inspector.
* **Assigned Tool** (`assigned_tool`, `select_one`, required: false): Check if a specific tool was assigned to inspect the fire alarm system.
	+ Options: Yes, No
* **Fire Alarm Inspection Date** (`fire_alarm_inspection_date`, `date`, required: false): Enter the inspection date if applicable.
* **Fire Alarm Certificate 2** (`fire_alarm_certificate_2`, `text`, required: false): Enter any additional information about the fire alarm certificate.
* **Inspection Time 2** (`inspection_time_2`, `time`, required: false): Enter the inspection time if applicable.
