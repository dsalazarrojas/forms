# Procurement Vendor Change Request Form - Help Guide
## Purpose
The Procurement Vendor Change Request Form is used to request changes to vendors associated with procurement processes. This form is intended for employees who need to make changes to the vendor information, such as updating the vendor's name, ID, or address.

## How To Complete This Form
1. Fill in your name and title as the requestor.
2. Enter the current vendor's name and ID.
3. Select the type of change you're requesting (e.g., new vendor, change vendor, or cancel vendor).
4. Fill in the date you're requesting the change.
5. Enter the reason for the change.
6. Provide the contact person's name and email.

## Field-by-Field Explanation
* **Requestor** (`requestor_name`, text, optional): The name and title of the person submitting the request.
* **Vendor Name** (`vendor_name`, text, optional): The name of the vendor you're requesting changes for.
* **Vendor ID** (`vendor_id`, text, optional): The ID number of the vendor you're requesting changes for.
* **Change Type** (`change_type`, select multiple, optional): Choose one or more of the following options:
	+ New vendor: Requesting the addition of a new vendor.
	+ Change vendor: Requesting changes to an existing vendor.
	+ Cancel vendor: Requesting to cancel a vendor.
* **Request Date** (`request_date`, date, optional): The date you're requesting the change.
* **Change Date** (`change_date`, date, optional): The date you're expecting the change to take effect.
* **Vendor Address** (`vendor_address`, text, optional): The address of the vendor.
* **Reason for Change** (`reason_for_change`, text, optional): A brief description of the reason for the change.
* **Contact Person** (`contact_person`, text, optional): The name of the person you'd like to be contacted for further information.
* **Email** (`email`, email, optional): The email address of the contact person.
