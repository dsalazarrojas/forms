# leave_time_off_request_form - Help Guide
## Purpose
The leave time off request form is used to submit a request for time off from work. It's a necessary step to track and manage leave requests, ensuring that all employees are aware of each other's schedules and can plan accordingly.

## How To Complete This Form

To complete this form, follow these steps:

1. Select your Employee ID from the list.
2. Enter the date you want to start your time off from.
3. Enter the date you want to end your time off from.
4. Specify the reason for your time off.
5. Choose the duration of your time off.
6. Select the status of your request (Pending, Approved, or Denied).
7. Add any additional notes about your request.
8. Select who submitted this request (e.g., John Doe).
9. Select who reviewed this request (e.g., John Smith).
10. Select who this request was submitted to (e.g., Manager).
11. Select who last updated this request (e.g., John Doe).
12. Select who last updated this request (e.g., Jane Doe).
13. Select who approved this request (e.g., John Smith).
14. Select who denied this request (e.g., Jane Smith).

## Field-by-Field Explanation

* **Employee ID** (`employee_id`, select_one):
	+ Select your unique employee ID from the dropdown menu.
* **Request Date** (`request_date`, date):
	+ Enter the date you want to start your time off from.
* **End Date** (`end_date`, date):
	+ Enter the date you want to end your time off from.
* **Reason** (`reason`, text):
	+ Enter a brief description of why you are requesting time off.
* **Duration** (`duration`, number):
	+ Enter the number of days or hours you will be taking off.
* **Status** (`status`, select_one):
	+ Select the current status of your request (Pending, Approved, or Denied).
* **Notes** (`notes`, note):
	+ Add any additional comments or details about your request.
* **Submitted By** (`submitted_by`, select_one):
	+ Select who submitted this request (e.g., John Doe).
* **Manager Reviewed** (`manager_reviewed`, select_one):
	+ Select who reviewed this request (e.g., John Smith).
* **Submitted To** (`submitted_to`, select_one):
	+ Select who this request was submitted to (e.g., Manager).
* **Submitted Date** (`submitted_date`, date):
	+ Enter the date this request was submitted.
* **Updated By** (`updated_by`, select_one):
	+ Select who last updated this request (e.g., John Doe).
* **Updated Date** (`updated_date`, date):
	+ Enter the date this request was last updated.
* **Approved By** (`approved_by`, select_one):
	+ Select who approved this request (e.g., John Smith).
* **Approved Date** (`approved_date`, date):
	+ Enter the date this request was approved.
* **Denied By** (`denied_by`, select_one):
	+ Select who denied this request (e.g., Jane Smith).
* **Denied Date** (`denied_date`, date):
	+ Enter the date this request was denied.

Note: Fields with optional values will be blank or have a default value in the form.</thinking>
