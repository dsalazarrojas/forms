# new_initiative_request_form - Help Guide
## Purpose
This form is used to collect information about a new business initiative before it is created.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the details of the new initiative on the first page.
2. Select the initiative's status and priority.
3. Provide any additional information about the location and contacts if necessary.
4. Review your input to ensure it is accurate before submitting the form.

## Field-by-Field Explanation

* **New initiative details** (`new_initiative_details`, `text`, required):
	+ This field is where you enter a brief description of the new initiative.
* **Initiative Name** (`initiative_name`, `text`, required):
	+ This field is where you enter the name of the new initiative.
* **Initiative Description** (`initiative_description`, `text`, optional):
	+ This field is where you can enter additional details about the new initiative, if necessary.
* **Start Date** (`initiative_start_date`, `date`, required):
	+ This field is where you enter the start date of the new initiative.
* **End Date** (`initiative_end_date`, `date`, optional):
	+ This field is where you enter the end date of the new initiative, if known.
* **Status** (`initiative_status`, `select_one`, required):
	+ This field is where you select the current status of the new initiative:
		- `pending`: The initiative is pending approval.
		- `active`: The initiative is currently active.
		- `cancelled`: The initiative has been cancelled.
* **Business Owner** (`business_owner`, `text`, required):
	+ This field is where you enter the name of the business owner responsible for the initiative.
* **Priority** (`priority`, `select_one`, required):
	+ This field is where you select the priority level of the new initiative:
		- `high`: High priority.
		- `medium`: Medium priority.
		- `low`: Low priority.
* **Budget** (`initiative_budget`, `number`, required):
	+ This field is where you enter the budget allocated for the new initiative.
* **Location** (`initiative_location`, `text`, optional):
	+ This field is where you enter any additional location-specific information about the new initiative.
* **Contacts** (`initiative_contacts`, `text`, optional):
	+ This field is where you enter any additional contact information about the new initiative, if necessary.

## Tips
- Please ensure that all required fields are completed before submitting the form.
- If you have any doubts or questions, please reach out to your business owner or support team for assistance.
