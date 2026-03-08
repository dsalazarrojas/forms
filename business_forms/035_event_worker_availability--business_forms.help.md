<thinking>...</thinking>

# Event Worker Availability - Help Guide
## Purpose
This form is used to collect information about an event worker's availability, transportation requirements, and tool assignment details. 

## How To Complete This Form
To complete this form, follow these steps:
1. Answer the questions as accurately as possible.
2. For "Event Dates", select all the dates the event worker is available to work.
3. For "Required Transportation", select the transportation method that is required for the event worker to perform their duties.
4. For "Drive", "Fly", and "Notes" fields, select or enter the corresponding information as needed.
5. For "Assigned Tool", select the tool that is assigned to the event worker.
6. Enter any additional notes about the event worker's availability in the "Notes" field if necessary.

## Field-by-Field Explanation
- **Event Worker Availability** (`event_worker_availability`, text, optional): Enter a brief description of the event worker's availability.
- **Event Dates** (`available_dates`, select_multiple, true): Select all the dates the event worker is available to work.
  - For example, if the event worker is available on multiple dates, select all those dates from the list.
- **Event Dates**: Note that this field requires multiple selections.
- **Required Transportation** (`required_transportation`, select_one, true): Select the transportation method required for the event worker to perform their duties.
- **Drive** (`drive_available`, select_multiple, false): If the event worker is available to drive, select "Yes" to indicate this ability.
  - If not, select "No" to indicate this inability.
- **Fly** (`fly_available`, select_multiple, false): If the event worker is available to fly, select "Yes" to indicate this ability.
  - If not, select "No" to indicate this inability.
- **Notes** (`notes`, note, false): Enter any additional notes about the event worker's availability.
- **Assigned Tool** (`assigned_tool`, select_one, false): Select the tool that is assigned to the event worker.
- **Label** (`assigned_tool_label`, text, false): Enter the label for the assigned tool.
- **Value** (`assigned_tool_value`, text, false): Enter the value of the assigned tool.

Note: The labels for "Label" and "Value" fields may vary depending on the tool assigned.
