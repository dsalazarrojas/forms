<thinking>
If a user wants to use this form to track service requests, they would need to understand what the form is used for and why it's necessary. This form is used to track the status and resolution of service requests, providing a clear and organized way to manage and prioritize these requests. It's essential to ensure that the form is filled out correctly to avoid duplicate or incomplete requests. The form should only be filled out once the service request has been received and not before or after it has been resolved. 
</thinking>

# Service Request Tracker - Help Guide
## Purpose
The Service Request Tracker form is used to track the status and resolution of service requests. This form is essential for service management, allowing users to prioritize and organize service requests in an organized and clear way.

## How To Complete This Form
1. Fill out the form once a service request is received.
2. Complete all required fields.
3. Review and update fields as the service request is processed and resolved.

## Field-by-Field Explanation
* **service_request_id** (`service_request_id`, number, required/optional): A unique identifier for the service request.
* **request_date** (`request_date`, date, required/optional): The date the service request was received.
* **request_date_time** (`request_date_time`, time, required/optional): The time the service request was received.
* **request_status** (`request_status`, select_one, required/optional): The current status of the service request. Select from:
	+ Request Open
	+ Request Open - Waiting On
	+ Request Open - Waiting On - Assigned
	+ Request Open - Resolved
* **request_category** (`request_category`, select_multiple, required/optional): The category of the service request. Select from:
	+ IT Request
	+ Facilities Request
	+ HR Request
* **requested_by** (`requested_by`, text, required/optional): The person requesting the service.
* **assigned_to** (`assigned_to`, text, required/optional): The person assigned to process the service request.
* **request_type** (`request_type`, text, required/optional): Additional information about the service request.
* **details** (`details`, note, required/optional): Additional details about the service request.
* **priority** (`priority`, select_one, required/optional): The priority level of the service request. Select from:
	+ High
	+ Medium
	+ Low
* **service_request_description** (`service_request_description`, text, required/optional): A description of the service request.
* **service_request_status_update** (`service_request_status_update`, text, required/optional): An update on the status of the service request.
* **service_request_resolution_time** (`service_request_resolution_time`, select_multiple, required/optional): The time it took to resolve the service request. Select from:
	+ Less Than 1 hour
	+ 1 hour or more
* **service_request_resolution_date** (`service_request_resolution_date`, date, required/optional): The date the service request was resolved.
* **service_request_resolution_time** (`service_request_resolution_time`, time, required/optional): The time the service request was resolved.
* **service_request_resolution_status** (`service_request_resolution_status`, select_one, required/optional): The status of the service request after resolution. Select from:
	+ Request Open
	+ Request Open - Waiting On
	+ Request Open - Waiting On - Assigned
	+ Request Open - Resolved
* **request_close_status** (`request_close_status`, select_one, required/optional): The status of the service request after closure. Select from:
	+ Request Open
	+ Request Open - Waiting On
	+ Request Open - Waiting On - Assigned
	+ Request Open - Resolved
* **service_request_close_time** (`service_request_close_time`, time, required/optional): The time the service request was closed.
* **service_request_close_date** (`service_request_close_date`, date, required/optional): The date the service request was closed.
* **service_request_close_comment** (`service_request_close_comment`, text, required/optional): A comment about closing the service request.
* **service_request_close_reason** (`service_request_close_reason`, text, required/optional): The reason for closing the service request.
* **service_request_close_status_reason** (`service_request_close_status_reason`, text, required/optional): A note about the reason for closing the service request.
* **service_request_close_status_note** (`service_request_close_status_note`, text, required/optional): A note about the status of the service request after closure.
* **assigned_to_user** (`assigned_to_user`, text, required/optional): The user assigned to process the service request.
