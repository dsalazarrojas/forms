# Fire Alarm Inspection Form - Help Guide
## Purpose
The Fire Alarm Inspection Form is used to document and record the results of a fire alarm inspection performed on a building.

## How To Complete This Form
1. Fill out the form completely, but only enter information for the fields that are required for your inspection.
2. For the `building_info` field, enter a unique identifier for the building being inspected.
3. In the `fire_alarm_system_info` field, describe the fire alarm system in the building, including any relevant details.
4. In the `fire_alarm_inspection_result` field, select all the components that are functioning properly.
5. For the `date` field, enter the date on which the inspection was performed.
6. For the `time` field, enter the time at which the inspection was completed.

## Field-by-Field Explanation

### Building Information
* **building_info** (`building_info`, number, required: false): A unique identifier for the building being inspected.

### Fire Alarm System Information
* **fire_alarm_system_info** (`fire_alarm_system_info`, text, required: false): A brief description of the fire alarm system in the building.

### Fire Alarm Inspection Result
* **fire_alarm_inspection_result** (`fire_alarm_inspection_result`, select multiple, required: false): A list of all components of the fire alarm system that are functioning properly.

### Date and Time
* **date** (`date`, date, required: false): The date on which the inspection was performed.
* **time** (`time`, time, required: false): The time at which the inspection was completed.
