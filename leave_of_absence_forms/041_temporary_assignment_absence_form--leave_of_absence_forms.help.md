# temporary_assignment_absence_form - Help Guide
## Purpose
The temporary assignment absence form is used to report temporary leave or absence by an employee. This form is meant to be completed when you are temporarily away from work and need to inform your manager or HR department.

## How To Complete This Form
1. Ensure you have not already submitted this form for the same reason and duration.
2. Enter your User ID, which is your unique identifier.
3. Set the Start date of your absence.
4. Set the End date of your absence.
5. Provide the Reason for your absence. This could be a short note explaining why you are taking time off.
6. Specify the Location of your absence, if applicable.
7. If you have been assigned a tool or equipment while on temporary leave, select the Assigned tool from the provided options, or type in "other" to specify a different tool.

## Field-by-Field Explanation
* **User ID** (`user_id`, number, required: false): Your unique identifier as an employee.
* **Start date** (`start_date`, date, required: false): The date when your temporary absence begins.
* **End date** (`end_date`, date, required: false): The date when your temporary absence ends.
* **Reason** (`reason`, text, required: false): A brief explanation for your temporary absence.
* **Location** (`location`, text, required: false): If your temporary absence involves traveling or a change in location during your absence.
* **Assigned tool** (`assigned_tool`, select_one, required: false): A list of tools you might be assigned while on temporary leave. Please select from the options provided, or if none apply, type "other" to specify a different tool.
* **Other assigned tool** (`assigned_tool_other`, text, required: false): If "other" was selected in the Assigned tool field, provide a detailed description of the tool or equipment you have been assigned.
