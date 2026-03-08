# leave_cancellation_form - Help Guide
## Purpose
This form is used to cancel a previously requested leave of absence. It is designed to collect information related to the employee's leave cancellation, including the start date of the leave, reason for cancellation, confirmation number, and confirmation status.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields (if any).
2. Enter the start date of the cancelled leave.
3. Provide the reason for cancelling the leave.
4. Enter the confirmation number (if available).
5. Select the confirmation status of your leave cancellation.

## Field-by-Field Explanation
* **Employee** (`employee`, text, optional): This field is for entering the employee's name or ID.
* **Start Date** (`start_date`, date, optional): Enter the date from which the leave was originally scheduled to start.
* **Reason for Leave Cancellation** (`reason`, text, optional): Describe the reason for cancelling the leave. This will help management understand the circumstances.
* **Confirmation Number** (`confirmation_number`, text, optional): Enter the confirmation number associated with the original leave request (if available).
* **Confirmation Status** (`confirmation_status`, select_one, optional): Select the confirmation status of your leave cancellation:
	+ Pending
	+ Approved
	+ Rejected
* **Cancellation Date** (`cancellation_date`, date, optional): This field is for entering the date of the cancellation.
