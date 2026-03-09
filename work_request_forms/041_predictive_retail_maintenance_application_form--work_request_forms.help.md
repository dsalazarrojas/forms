# Predictive Retail Maintenance Application Form - Help Guide
## Purpose
This form is designed to collect and manage predictive retail maintenance requests. It helps store information about maintenance requests, including their details, location, priority, and status.

## How To Complete This Form
To fill out this form, follow these steps:

1. Select the "Maintenance Request Details" page.
2. Provide a brief description of the maintenance request in the "Description" field.
3. Choose the location where the maintenance is required in the "Location" field.
4. Select the priority level of the request from "High," "Medium," or "Low."
5. Select the person or team member assigned to work on the request from "Jimmy," "John," or "Jane."
6. Choose the current status of the request from "New," "In Progress," or "Done."
7. Fill in the "Date Created" and "Time Created" fields with the relevant dates and times.

## Field-by-Field Explanation
* **Maintenance Request Details** (`maintenance_request_details`, text, required): This field is where you provide a brief description of the maintenance request.
* **Location** (`location`, text, required): Select the location where the maintenance is required.
* **Priority** (`priority`, select_one, required): Choose the priority level of the request:
	+ **High**: High-priority requests will be handled first.
	+ **Medium**: Medium-priority requests will be handled after high-priority requests.
	+ **Low**: Low-priority requests will be handled last.
* **Description** (`description`, text, required): This field should be used to provide additional information about the maintenance request.
* **Assigned To** (`assigned_to`, select_one, required): Select the person or team member assigned to work on the request:
	+ **Jimmy**: The person assigned to work on the request.
	+ **John**: The person assigned to work on the request.
	+ **Jane**: The person assigned to work on the request.
* **Status** (`status`, select_one, required): Choose the current status of the request:
	+ **New**: The request has just been created.
	+ **In Progress**: The request is currently being worked on.
	+ **Done**: The request has been completed.
* **Date Created** (`date_created`, date, required): Fill in the date when the maintenance request was created.
* **Time Created** (`time_created`, time, required): Fill in the time when the maintenance request was created.

## Tips
- Make sure to provide detailed descriptions for each maintenance request.
- Select the correct location and assigned person to ensure accurate tracking.
- Choose the correct priority and status to reflect the current state of the request.
