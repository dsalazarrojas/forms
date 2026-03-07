<thinking>
This form is used for estate management, likely for tracking and managing maintenance requests and tasks related to properties. The form may be used by property owners, managers, or administrators to report issues, request maintenance, and track progress. It's possible that this form is part of a larger system for property management, including tracking tasks, maintenance schedules, and communication with tenants or staff. This form should be used to gather relevant information about a property, including its details, maintenance requests, and contact information for the individual submitting the request. This form likely helps to ensure that maintenance requests are properly documented and tracked, and that the right personnel are assigned to address them.
</thinking>

# Estate Management Form - Help Guide

## Purpose
The Estate Management Form is used to track and manage maintenance requests and tasks related to properties.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of request you wish to make (Maintenance or Other).
2. Provide a brief description of the maintenance request.
3. If applicable, select the type of maintenance you are requesting (Maintenance, Maintenance Request, or Maintenance Type).
4. Enter the date and time you are requesting the maintenance (Request Date and Request Time).
5. Select the priority level of the request (High, Medium, or Low).
6. Choose the user to whom the request should be assigned (ChatJimmy or Other).
7. Select the tool or resource needed for the maintenance (ChatJimmy or Other).
8. Enter any comments or notes about the request.
9. Confirm the status of the request (Pending, In Progress, or Completed).
10. Check if the request has been completed (Done, Not Done, or In Progress).

## Field-by-Field Explanation

* **first_page** (`first_page`, text, optional): Enter a brief description of the property or the reason for the request.
* **property_details** (`property_details`, number, optional): Enter the property's details (e.g., address, location).
* **tenant_details** (`tenant_details`, text, optional): Enter the tenant's details, if applicable.
* **request** (`request`, select_multiple, optional): Select the type of request you wish to make (Maintenance or Other).
* **Maintenance** (`maintenance_request`, select_one, optional): Select the type of maintenance you are requesting (Maintenance, Maintenance Request, or Maintenance Type).
* **maintenance_type** (`maintenance_type`, select_one, optional): Select the type of maintenance (e.g., plumbing, electrical).
* **contact_details** (`contact_details`, date, optional): Enter the date of contact with the tenant or property manager.
* **maintenance_start_date** (`maintenance_start_date`, date, optional): Enter the start date of the maintenance.
* **maintenance_end_date** (`maintenance_end_date`, date, optional): Enter the end date of the maintenance.
* **maintenance_status** (`maintenance_status`, select_one, optional): Select the status of the maintenance request (Pending, In Progress, or Completed).
* **priority** (`priority`, select_one, optional): Select the priority level of the request (High, Medium, or Low).
* **request_date** (`request_date`, date, optional): Enter the date the request was made.
* **request_time** (`request_time`, time, optional): Enter the time the request was made.
* **assigned_user** (`assigned_user`, select_one, optional): Select the user to whom the request should be assigned (ChatJimmy or Other).
* **assigned_tool** (`assigned_tool`, select_one, optional): Select the tool or resource needed for the maintenance (ChatJimmy or Other).
* **description** (`description`, text, optional): Enter a brief description of the maintenance request.
* **comments** (`comments`, text, optional): Enter any comments or notes about the request.
* **request_comments** (`request_comments`, text, optional): Enter any additional comments about the request.
* **status** (`status`, select_one, optional): Select the status of the request (Pending, In Progress, or Completed).
* **completed** (`completed`, select_one, optional): Check if the request has been completed (Done, Not Done, or In Progress).
* **notes** (`notes`, note, optional): Enter any additional notes about the request.
* **property_notes** (`property_notes`, note, optional): Enter any additional notes about the property.
* **contact_number** (`contact_number`, text, optional): Enter the contact phone number.
* **contact_email** (`contact_email`, email, optional): Enter the contact email address.
* **contact_name** (`contact_name`, text, optional): Enter the contact name.

Note: This help guide assumes that the form fields are self-explanatory, but if a field is not clear, a brief explanation is provided for context and clarity.
