<thinking>
This form is used to document and record the results of a fire alarm inspection performed on a building. The form is likely used by facilities management, safety or engineering teams to report on the status of fire alarm systems. This form should not be used for other purposes. The fields are likely to be used to gather information about the building, its fire alarm system, and the inspection results. The fields should be completed as follows: 
  - building_info: This field is likely to be the building's ID or a unique identifier. 
  - fire_alarm_system_info: This field is likely to be a brief description of the fire alarm system in the building. 
  - fire_alarm_inspection_result: This field is likely to be a list of whether certain components of the fire alarm system are functioning properly. 
  - date: This field is likely to be the date on which the inspection was performed. 
  - time: This field is likely to be the time at which the inspection was completed.
</thinking>

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
