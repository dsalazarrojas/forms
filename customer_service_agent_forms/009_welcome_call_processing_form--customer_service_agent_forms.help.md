# Welcome Call Processing Form - Help Guide
## Purpose
The Welcome Call Processing Form is designed to gather information from new guests arriving at a hotel or similar establishment. This form helps customer service agents to efficiently process the welcome call by collecting necessary details about the guest.

## How To Complete This Form
1. Fill in the "New Guest" field with the guest's name.
2. Enter the guest's name in the "Guest Name" field.
3. Input the guest's "Date of Arrival".
4. Enter the guest's phone number in the "Phone Number" field (this is the guest's contact information).
5. Enter the guest's email in the "Email" field (this is the guest's contact information).
6. Select the type of room allocation from the options provided in the "Room Allocation" field.
7. If required, enter any special requests in the "Special Requests" field.
8. In the "CRM Sync" field, select the relevant CRM system to sync with (e.g., "Salesforce", "Zendesk", etc.).
9. If syncing with other platforms is required, select the relevant options in the "Sync with Other Platform" field.
10. Input any additional notes about the guest in the "Notes" field.
11. Finally, select the "Welcome Call Status" as "Completed", "In Progress", or "Not Required" to indicate the progress of the welcome call.

## Field-by-Field Explanation
* **New Guest** (`new_guest`, text, required: false): Enter the guest's name as it appears on their ID or reservation.
* **Guest Name** (`guest_name`, text, required: false): Enter the guest's name in this field.
* **Date of Arrival** (`date_of_arrival`, date, required: false): Enter the date the guest is expected to arrive.
* **Phone Number** (`phone_number`, text, required: false): Enter the guest's contact phone number (this is the agent's phone number for internal use).
* **Email** (`email`, text, required: false): Enter the guest's contact email (this is the agent's email for internal use).
* **Room Allocation** (`room_allocation`, select_one, required: false): Select the type of room allocation from the options provided.
* **Special Requests** (`special_requests`, text, required: false): Enter any special requests the guest has (e.g., dietary restrictions, etc.).
* **CRM Sync** (`crm_sync`, select_multiple, required: false): Select the CRM system to sync with (e.g., "Salesforce", "Zendesk", etc.).
* **Other CRM** (`crm_sync_other`, text, required: false): Enter any other CRM system to sync with.
* **Notes** (`notes`, note, required: false): Enter any additional notes about the guest.
* **Welcome Call Status** (`welcome_call_status`, select_one, required: false): Select the status of the welcome call as "Completed", "In Progress", or "Not Required".
