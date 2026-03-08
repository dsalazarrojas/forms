<thinking>
We are creating a user-facing help guide for a form with a specific set of fields. The purpose of the form is to assign privileges to a property management system, which likely involves granting access to certain properties or resources. The form is called "Property Management Privilege Assignment." This form is likely used by administrators or managers within an organization to manage access to properties or resources.

Before proceeding, we will assume that the user has a basic understanding of the form's purpose and will not delve into the underlying business logic or technical details. We will focus on explaining each field in a clear and concise manner, making sure to cover all the fields that are part of the form.

To complete this form, follow the instructions below:

1. Ensure you have the necessary permissions to access the form.
2. Review the fields below and fill in the required information.
3. Submit the form once all fields are completed.

## Property Management Privilege Assignment - Help Guide
## Purpose
This form is used to assign privileges to a property management system. This allows you to grant access to specific properties or resources within the system.

## How To Complete This Form
1. Fill in the form with the required information for your privilege assignment.
2. Review the fields below for further instructions on each field.

## Field-by-Field Explanation

* **property_title** (`text`, required: false): Enter a title for the property or resource you are assigning privileges to.
* **property_description** (`text`, required: false): Provide a brief description of the property or resource.
* **assigned_tool** (`text`, required: false): Identify the tool or equipment being assigned to the property.
* **user_id** (`number`, required: false): Enter the ID of the user to whom the privilege is being assigned.
* **start_time** (`date`, required: false): Set the start date and time for the privilege assignment.
* **end_time** (`date`, required: false): Set the end date and time for the privilege assignment.
* **status** (`select_one`, required: false): Select the status of the privilege assignment:
	+ Active: The privilege is currently active.
	+ Inactive: The privilege is not active.
	+ Pending: The privilege is pending assignment.
	+ Deleted: The privilege is deleted.
* **contact_name** (`select_multiple`, required: false): Indicate whether you want to be contacted for any issues related to the property management:
	+ Yes: You want to be contacted.
	+ No: You do not want to be contacted.

Tips:

* Review the property title and description to ensure accuracy.
* Verify the user ID is correct.
* Set the start and end dates and times carefully.
* Select the correct status for the privilege assignment.
* Consider whether you want to be contacted about issues related to the property management system.
