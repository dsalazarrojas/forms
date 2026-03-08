<thinking>
This form is used to obtain work location authorization from a manager and HR representative. It is intended for employees to provide information about their work location and schedule, and for managers and HR to review and approve or decline the request. It is essential to ensure that all required fields are filled in accurately and completely to avoid delays in processing. The form should not be duplicated; each instance should be submitted only once.
</thinking>

# work_location_authorization_form - Help Guide
## Purpose
The Work Location Authorization Form is used to request approval for employees to work from a specific location. This form must be completed by the employee and approved by both the manager and HR representative.

## How To Complete This Form
1. Fill in your employee ID and manager ID in the respective fields.
2. Enter the date you plan to start working at the new location in the `start_date` field.
3. Enter the date you plan to end working at the new location in the `end_date` field.
4. Provide a brief reason for your leave in the `reason_for_leave` field.
5. The manager and HR will review and approve or decline your request based on their assessment.
6. If approved, please sign and date the form in the `manager_signature` and `hr_signature` fields respectively.

## Field-by-Field Explanation
* **employee_id** (`number`, required): Enter your employee ID number.
* **manager_id** (`number`, required): Enter your manager's ID number.
* **work_location** (`text`, required): Enter the specific work location you are requesting approval for.
* **start_date** (`date`, required): Enter the date you plan to start working at the new location.
* **end_date** (`date`, required): Enter the date you plan to end working at the new location.
* **reason_for_leave** (`text`, required): Enter a brief reason for your leave.
* **manager_approval** (`select_one`, required): Choose 'Yes' if you wish for your manager to approve your request, 'No' otherwise.
* **manager_comments** (`text`, optional): Enter any comments or concerns your manager may have.
* **hr_approval** (`select_one`, required): Choose 'Yes' if you wish for HR to approve your request, 'No' otherwise.
* **hr_comments** (`text`, optional): Enter any comments or concerns HR may have.
* **form_submitted_by** (`text`, required): Enter your name and signature, indicating that you are submitting this form.
* **manager_signature** (`note`, required): Sign and date this section to approve or decline the request.
* **hr_signature** (`note`, required): Sign and date this section to approve or decline the request.
