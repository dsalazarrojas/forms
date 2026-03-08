# Property Maintenance Request - Help Guide
## Purpose
The Property Maintenance Request form is a tool used to gather information for property owners or managers to submit maintenance requests for a specific property. This form ensures that maintenance requests are handled efficiently and in a timely manner.

## How To Complete This Form
To complete the form, follow these steps:

1. Select the property type from the dropdown menu to indicate the type of property for which the maintenance request is being made.
2. Choose the type of maintenance required from the dropdown menu to indicate the nature of the repair or maintenance needed.
3. Select the date the maintenance request was made.
4. Enter the time the maintenance request was made.
5. Provide a brief description of the maintenance request.
6. Choose the contact person responsible for handling the maintenance request.
7. Select the tool or equipment needed for the maintenance request.
8. Select the status of the maintenance request.
9. If required, select the priority level of the maintenance request.

## Field-by-Field Explanation
* **Maintenance Request** (`property_maintenance_request`, text, optional): A brief description of the maintenance issue, e.g., "Leaky faucet in the kitchen" or "Broken light bulb in the living room".
* **Property Type** (`property_type`, select_one, optional): Choose the type of property (e.g., Apartment, House, etc.).
* **Maintenance Type** (`maintenance_type`, select_multiple, optional): Select the type of maintenance or repair needed (e.g., Repair, Maintenance, etc.).
* **Maintenance Request Date** (`maintenance_request_date`, date, optional): Enter the date the maintenance request was made.
* **Maintenance Request Time** (`maintenance_request_time`, time, optional): Enter the time the maintenance request was made.
* **Maintenance Request Description** (`maintenance_request_description`, text, optional): Provide a detailed description of the maintenance request.
* **Assigned Contact** (`assigned_contact`, select_one, optional): Choose the contact person responsible for handling the maintenance request.
* **Assigned Tool** (`assigned_tool`, select_one, optional): Select the tool or equipment needed for the maintenance request.
* **Maintenance Request Status** (`maintenance_request_status`, select_one, optional): Select the status of the maintenance request (e.g., Open, Closed, etc.).
* **Maintenance Request Priority** (`maintenance_request_priority`, number, optional): If applicable, select the priority level of the maintenance request.
* **Maintenance Request ID** (not shown, as it's not visible in the form): Please note that the maintenance request ID is not visible in the form and is automatically generated upon submission.
