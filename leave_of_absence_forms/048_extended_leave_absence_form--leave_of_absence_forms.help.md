# Extended Leave Absence Form - Help Guide
## Purpose
The "Extended Leave Absence Form" is a tool for employees to apply for extended leave absences. This form helps the HR department or manager track and process these requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Determine if you need to apply for an extended leave absence.
2. Fill out the form with the required information.

## Field-by-Field Explanation

* **Extended Leave Absence**: (`leave_absence_type`, select_one, **required: false**)
	+ This field indicates whether you are applying for an extended leave absence or not.
* **Start Date**: (`start_date`, date, **required: false**)
	+ This field is for the start date of your extended leave absence. If you are unsure, you can leave it blank.
* **End Date**: (`end_date`, date, **required: false**)
	+ This field is for the end date of your extended leave absence. If you are unsure, you can leave it blank.
* **Reason**: (`reason`, text, **required: false**)
	+ In this field, you can provide a brief explanation for your extended leave absence.
* **Employee ID**: (`employee_id`, number, **required: false**)
	+ This field is for your employee ID number. Please ensure it is accurate to avoid delays in processing your request.
* **Employee Name**: (`employee_name`, text, **required: false**)
	+ This field is for your name.
* **Manager ID**: (`manager_id`, number, **required: false**)
	+ This field is for your manager's ID number.
* **Manager Name**: (`manager_name`, text, **required: false**)
	+ This field is for your manager's name.
* **Leave Type**: (`leave_type`, select_one, **required: false**)
	+ This field indicates the type of leave you are applying for (e.g., "Yes" for leave, "No" for no leave).
* **Leave Status**: (`leave_status`, select_one, **required: false**)
	+ This field indicates the status of your leave request (e.g., "Active" for active, "Inactive" for inactive).
* **Leave Duration**: (`leave_duration`, number, **required: false**)
	+ This field is for the number of days or weeks you are requesting for the extended leave absence.
* **Leave Frequency**: (`leave_frequency`, select_one, **required: false**)
	+ This field indicates whether the leave absence is frequent or infrequent.
