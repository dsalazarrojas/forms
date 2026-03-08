# Maintenance Request Form - Help Guide
## Purpose
The Maintenance Request Form is a tool for requesting maintenance on buildings. It's used to report any issues that need to be addressed and track the progress of the maintenance requests.

## How To Complete This Form
To ensure that your maintenance request is processed correctly, please complete the form in the following order:

1. Select the "Maintenance Request Form" title and fill in the "Building Manager" field with the person responsible for the building's maintenance.
2. Enter the "Property Owner" if applicable, as this may be the person who submitted the request.
3. Describe the "Maintenance Issue" in as much detail as possible.
4. Add any additional "Description" about the request.
5. Select the date and time when the "Date Submitted" and "Time Submitted" fields were filled in.
6. Choose the "Status" of the request (Complete, Pending, or Cancelled).
7. If applicable, provide "Comments" for additional information.
8. Fill in the "Building Location", "Building Floor", and "Building Room".
9. Select the "Service Request" type and provide the "Service Request ID" if applicable.
10. Choose who the "Assigned To" field is for the request (chatjimmy or Other).
11. Select the "Priority" of the request (High, Medium, or Low).
12. If the request is completed, fill in the "Date Completed" and "Time Completed".
13. Add any "Status Comments" for the request.
14. Select the "Maintenance Type" (Maintenance Request or Other).
15. Enter the "Maintenance Request ID".
16. If applicable, add any "Notes" for additional information.
17. Select if there are "Attachments" (Yes or No).
18. Finally, select the "Service Request Status" (Active or Inactive).

## Field-by-Field Explanation
- **Maintenance Request Form** (`maintenance_request_form_1`, `text`, required): Select the title of the form to start filling in the required fields.
- **Building Manager** (`building_manager`, `text`, required): Enter the person in charge of the building's maintenance.
- **Property Owner** (`property_owner`, `text`, optional): If the property owner submitted the request, enter their name here.
- **Maintenance Issue** (`maintenance_issue`, `text`, required): Describe the issue that needs to be addressed.
- **Description** (`description`, `text`, required): Add any additional information about the request.
- **Date Submitted** (`date_submitted`, `date`, required): Enter the date when the request was submitted.
- **Time Submitted** (`time_submitted`, `time`, required): Enter the time when the request was submitted.
- **Status** (`maintenance_request_status`, `select_one`, required): Select the status of the request (Complete, Pending, or Cancelled).
- **Comments** (`comments`, `note`, optional): Provide any additional information for the request.
- **Building Location** (`building_location`, `text`, required): Enter the building location where the issue is located.
- **Building Floor** (`building_floor`, `text`, required): Enter the floor where the issue is located.
- **Building Room** (`building_room`, `text`, required): Enter the room where the issue is located.
- **Building Equipment** (`building_equipment`, `text`, optional): If applicable, describe the building equipment that needs maintenance.
- **Service Request** (`service_request`, `text`, required): Select the type of service request.
- **Assigned To** (`assigned_to`, `select_one`, required): Choose who is assigned to handle the request (chatjimmy or Other).
- **Priority** (`priority`, `select_one`, required): Select the priority of the request (High, Medium, or Low).
- **Date Completed** (`date_completed`, `date`, optional): If the request is completed, enter the date completed.
- **Time Completed** (`time_completed`, `time`, optional): If the request is completed, enter the time completed.
- **Status Comments** (`status_comments`, `text`, optional): Provide any comments about the status of the request.
- **Maintenance Type** (`maintenance_type`, `select_one`, required): Select the type of maintenance request (Maintenance Request or Other).
- **Maintenance Request ID** (`maintenance_request_id`, `text`, required): Enter the ID of the maintenance request.
- **Notes** (`notes`, `note`, optional): Add any additional information for the request.
- **Attachments** (`attachments`, `select_multiple`, optional): Select if there are attachments (Yes or No).
- **Service Request Status** (`service_request_status`, `select_one`, optional): Select the status of the service request (Active or Inactive).
- **Service Request ID** (`service_request_id`, `text`, optional): Enter the ID of the service request if applicable.
