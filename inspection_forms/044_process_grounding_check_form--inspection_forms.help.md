<thinking>
We need to ensure that the form purpose and instructions are clear for end-users who will be completing this form. Let's assume that this form is used in a safety-related context, such as an industrial facility, where a "Process Grounding Check" is a safety inspection to verify that a piece of equipment or facility is properly grounded to prevent electrical shock or fire hazards. The form is meant to collect information about the location of the facility, the inspector's name and ID, the date and time the inspection was completed, the result of the grounding check, and any actions taken as a result.

To avoid duplication of effort, we should also ensure that the form is not used for the same facility and inspection multiple times.

</thinking>

# Process Grounding Check Form - Help Guide
## Purpose
The Process Grounding Check Form is used to record the result of a safety inspection at an industrial facility, verifying that the facility's equipment is properly grounded to prevent electrical shock or fire hazards.

## How To Complete This Form
- Fill out the form for each inspection completed.
- Complete the form only once for each facility inspected.

## Field-by-Field Explanation

- **Facility Location** (`facility_location`, text, optional): Enter the location of the facility where the grounding check was performed.
- **Inspector Name** (`inspector_name`, text, optional): Enter the name of the inspector who performed the check.
- **Inspector ID** (`inspector_id`, text, optional): Enter the ID number of the inspector who performed the check.
- **Date Completed** (`date_completed`, date, optional): Enter the date the grounding check was completed. Use the date format (e.g., YYYY-MM-DD).
- **Time Completed** (`time_completed`, time, optional): Enter the time the grounding check was completed. Use the 24-hour clock format (e.g., 14:30).
- **Grounding Check Result** (`grounding_check_result`, select_one, required): Choose one of the following options:
	+ Good: The facility's equipment is properly grounded.
	+ Bad: The facility's equipment is not properly grounded.
	+ Needs Review: The inspection result requires further review or additional information.
- **Reason for Bad Result** (`reason_for_bad_result`, text, optional): If the grounding check result was "Bad", enter a brief description of the reason why the result was not satisfactory.
- **Action Taken** (`action_taken`, text, optional): Enter a description of any actions taken as a result of the grounding check, such as corrective measures or follow-up inspections.
