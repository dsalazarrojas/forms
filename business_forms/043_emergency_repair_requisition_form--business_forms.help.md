# Emergency Repair Requisition Form - Help Guide

## Purpose
This form is for requesting emergency repairs on company property. It is essential to provide accurate information to facilitate prompt and efficient resolution of the issue.

## How To Complete This Form
1. Select the "Emergency Location" field to specify the exact location where the repair is required.
2. Describe the "Description" field to explain the nature of the emergency repair needed.
3. Choose the "Priority" level of the repair (if applicable).
4. If necessary, select "Contact Person" to specify who should be contacted for further information.
5. Provide your contact email or phone number in the "Contact Email" and "Contact Phone" fields (if applicable).
6. Finally, select the "Date Requested" field to specify when the repair is needed by.

## Field-by-Field Explanation
* **Emergency Location** (`emergency_location`, text, **required**): Please provide the exact location where the repair is required (e.g., Room 202 or Building A).
* **Description** (`description`, text, **required**): Clearly explain the nature of the emergency repair needed (e.g., leaky faucet, power outage, or broken lock).
* **Priority** (`priority`, select_one, optional): Choose the priority level of the repair:
	+ High: Urgent and time-sensitive repair
	+ Medium: Regular repair with no time pressure
	+ Low: Non-essential repair that can wait
	+ Urgent: Emergency repair that requires immediate attention
* **Contact Person** (`contact_person`, select_multiple, optional): If necessary, specify who should be contacted for further information or coordination:
	+ Property Manager: The person responsible for managing the property
	+ Maintenance Team: The team responsible for performing the repair
* **Contact Email** (`contact_email`, email, optional): Provide your email address for further communication and updates
* **Contact Phone** (`contact_phone`, text, optional): Provide your phone number for further communication and updates
* **Date Requested** (`date_requested`, date, **required**): Specify when the repair is needed by, in the format of MM/DD/YYYY
