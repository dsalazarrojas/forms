# stress_leave_time_off_form - Help Guide
## Purpose
The purpose of this form is to document and track an employee's request for time off, including the start and end dates of the leave, the reason for the leave, and the status of the approval or acknowledgement.

## How To Complete This Form
1. Fill out the form completely, ensuring that all required fields are filled out.
2. Enter the employee's name and job title.
3. Select the start and end dates of the leave.
4. Enter a brief reason for the leave.
5. Select the approval status and acknowledgement from the options provided.
6. If necessary, enter the dates for the employee and manager's acknowledgement.

## Field-by-Field Explanation
* **employee** (`employee`, text, optional): Enter the name of the employee requesting time off.
* **job_title** (`job_title`, text, optional): Enter the job title of the employee requesting time off.
* **start_date** (`start_date`, date, required): Select the start date of the leave.
* **end_date** (`end_date`, date, required): Select the end date of the leave.
* **reason** (`reason`, text, required): Enter a brief reason for the leave.
* **notes** (`notes`, note, optional): Enter any additional notes or comments related to the leave.
* **manager_notes** (`manager_notes`, note, optional): Enter any additional notes or comments from the manager related to the leave.
* **approval_status** (`approval_status`, select_one, required): Select the status of the approval, either "approved", "denied", or "pending".
* **acknowledgement** (`acknowledgement`, select_multiple, required): Select the acknowledgement status from the employee and manager, either "acknowledged", "not acknowledged", or "unknown".
* **acknowledgement_date** (`acknowledgement_date`, date, optional): Enter the date of the employee's acknowledgement.
* **manager_acknowledgement** (`manager_acknowledgement`, select_multiple, optional): Select the acknowledgement status from the manager, either "acknowledged", "not acknowledged", or "unknown".
* **manager_acknowledgement_date** (`manager_acknowledgement_date`, date, optional): Enter the date of the manager's acknowledgement.

## Tips
- Make sure to fill out all required fields before submitting the form.
- Enter the dates in the correct format (MM/DD/YY).
- Use the options provided in the selection fields to ensure accurate and correct responses.
