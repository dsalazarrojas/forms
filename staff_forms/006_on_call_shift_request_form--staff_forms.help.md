<thinking>
The On Call Shift Request Form is designed to allow employees to request on-call shifts. Before filling out this form, please ensure that you have reviewed the company's on-call shift schedule and policies to avoid duplicating requests. This form should be used for submitting new requests, not to confirm existing shifts or request changes to existing shifts.
</thinking>

# On Call Shift Request Form - Help Guide
## Purpose
The On Call Shift Request Form is used to request on-call shifts. This form is used by employees to submit their shift requests.

## How To Complete This Form
To complete this form, follow these steps:

1. Ensure you have reviewed the company's on-call shift schedule and policies.
2. Fill out the form with your request details, including:
	* Employee Request: A brief description of your request.
	* Start Time: The time you want to start your on-call shift.
	* End Time: The time you want to end your on-call shift.
	* Approval Status: The status of your request, which will be set by the supervisor.
	* Shift Date: The date you want to work your on-call shift.
	* Employee Name: Your name.
	* Team Member: Your team role, which can be Manager, Supervisor, or Team Member.
	* Department: The department you work in.
	* Shift Duration: The length of your on-call shift in hours.
	* Shift Start Time: The time you want to start your on-call shift.
	* Shift End Time: The time you want to end your on-call shift.
	* Supervisor Comment: Optional comments for the supervisor to provide feedback.
	* Request Type: The type of request, which can be Request, Call, or Shift.
	* On Call Request Form Comments: Optional comments for your request.
3. Submit the form to your supervisor for review and approval.

## Field-by-Field Explanation
* **Employee Request** (`employee_request_form`, `text`, required): A brief description of your request.
* **Start Time** (`start_time`, `date`, required): The time you want to start your on-call shift.
* **End Time** (`end_time`, `time`, required): The time you want to end your on-call shift.
* **Approval Status** (`supervisor_approval_status`, `select_one`, required): The status of your request, which will be set by the supervisor.
* **Shift Date** (`shift_date`, `date`, required): The date you want to work your on-call shift.
* **Employee Name** (`employee_name`, `text`, required): Your name.
* **Team Member** (`team_member`, `select_multiple`, required): Your team role, which can be Manager, Supervisor, or Team Member.
* **Department** (`department`, `text`, required): The department you work in.
* **Shift Duration** (`shift_duration`, `number`, required): The length of your on-call shift in hours.
* **Shift Start Time** (`shift_start_time`, `time`, required): The time you want to start your on-call shift.
* **Shift End Time** (`shift_end_time`, `time`, required): The time you want to end your on-call shift.
* **Supervisor Comment** (`supervisor_comment`, `text`, optional): Optional comments for the supervisor to provide feedback.
* **Request Type** (`request_type`, `select_one`, required): The type of request, which can be Request, Call, or Shift.
* **On Call Request Form Comments** (`on_call_request_form_comments`, `text`, optional): Optional comments for your request.
