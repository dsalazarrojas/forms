# Duty Log Form - Help Guide
## Purpose
This form is designed to record details about duties that are carried out or observed. Filling out this form helps to ensure that progress and accountability are maintained within the organization.

## How To Complete This Form
To complete this form, follow these steps:
- Fill out each field as needed, taking note that some fields may be optional.
- The `duty_log` field is the primary input field where you can describe the duty being logged.
- Select the relevant options for `start_time`, `end_time`, `task_id`, `task_type`, and `incident_type` based on the specific duty being logged.
- Enter any additional comments or notes about the duty in the `notes` field.
- Enter the date of the duty in the `duty_date` field.

## Field-by-Field Explanation
* **duty_log** (`duty_log`, text, required): Describe the duty being logged in a few words or a brief sentence.
* **start_time** (`start_time`, select_one, optional): Select 'Yes' if the duty started within the expected timeframe, 'No' otherwise.
* **end_time** (`end_time`, text, optional): Enter the actual end time of the duty if different from expected.
* **task_id** (`task_id`, select_multiple, optional): Select 'Yes' for each relevant task ID that relates to the logged duty.
* **task_type** (`task_type`, select_one, optional): Select 'Yes' for the specific task type that corresponds to the duty.
* **incident_type** (`incident_type`, select_one, optional): Select 'Yes' if an incident occurred, 'No' otherwise.
* **notes** (`notes`, text, optional): Enter any additional comments or notes about the duty.
* **duty_date** (`duty_date`, date, optional): Enter the date the duty was completed.

## Tips
- This form is meant for individual use; please ensure each entry is accurate and truthful.
- Review each field carefully before submission to ensure all relevant details are captured.
- If the duty is not completed on the expected date, use the `start_time` field to note the actual start time and `end_time` field to record the actual end time if different from expected.
