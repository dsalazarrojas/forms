<thinking>
This form is designed to collect information from operators regarding their duties and shifts. It is meant to be used by fleet management or maintenance personnel to ensure that operators are aware of their responsibilities and that necessary tools are assigned to them for their duties. The form should only be used for operators who are actively working or are scheduled to work during the specified date and time range. It is not intended for general operator registration or other purposes. Please ensure that you are using this form correctly and only for its intended purpose.
</thinking>

# operator_duty_acknowledgment_form - Help Guide
## Purpose
This form is used to gather information from operators regarding their duties and shifts. It is essential for fleet management and maintenance personnel to ensure that operators are aware of their responsibilities and that necessary tools are assigned to them.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your `operator_id` in the designated field. This is a unique identifier for you as an operator.
2. Provide your name in the `operator_name` field.
3. Select the date and time range for which you were scheduled to work, from `duty_timing` to `shift_start` and `shift_end`.
4. Enter the start and end times of your shift in the `shift_start` and `shift_end` fields, respectively.
5. Add any necessary notes or comments regarding your duties and shifts in the `assignment_notes` field.
6. Indicate whether you have signed the acknowledgement by selecting 'Yes' or 'No' from the `signed_acknowledgment` field.
7. If necessary, specify the tool(s) assigned to you for your duties in the `assigned_tool` field.
8. Indicate the status of your shift as Active or Inactive in the `shift_status` field.
9. Enter the ID of the vehicle you were assigned to in the `vehicle_id` field.
10. Specify the location of the operator and vehicle in the `operator_location` and `vehicle_location` fields, respectively.
11. Indicate the status of the vehicle as Active or Inactive in the `vehicle_status` field.
12. Add any additional notes or comments in the `notes` field.
13. Finally, sign and date the form using the `signed_by` field.

## Field-by-Field Explanation
* **operator_id** (`number`, Required: False):
	+ Enter your unique identifier as an operator.
* **operator_name** (`text`, Required: False):
	+ Provide your name to be associated with your duties and shifts.
* **duty_timing** (`date`, Required: False):
	+ Select the date and time range during which you were scheduled to work.
* **shift_start** (`time`, Required: False):
	+ Enter the start time of your shift.
* **shift_end** (`time`, Required: False):
	+ Enter the end time of your shift.
* **assignment_notes** (`text`, Required: False):
	+ Add any necessary notes or comments regarding your duties and shifts.
* **signed_acknowledgment** (`select_one`, Required: False):
	+ Indicate whether you have signed the acknowledgement by selecting 'Yes' or 'No'.
* **assigned_tool** (`text`, Required: False):
	+ If necessary, specify the tool(s) assigned to you for your duties.
* **shift_status** (`select_multiple`, Required: False):
	+ Indicate the status of your shift as Active or Inactive.
* **vehicle_id** (`number`, Required: False):
	+ Enter the ID of the vehicle you were assigned to.
* **operator_location** (`text`, Required: False):
	+ Specify the location of the operator.
* **vehicle_location** (`text`, Required: False):
	+ Specify the location of the vehicle.
* **vehicle_status** (`select_multiple`, Required: False):
	+ Indicate the status of the vehicle as Active or Inactive.
* **notes** (`text`, Required: False):
	+ Add any additional notes or comments.
* **signed_by** (`text`, Required: False):
	+ Sign and date the form as proof of completion.
