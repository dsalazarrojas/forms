<thinking>
To avoid confusion and unnecessary work, please review this form purpose and fields carefully before completing it.
The Temperature Sensor Replacement Request Form is used to track and manage temperature sensor replacement requests across the organization. Each request contains information about the user who submitted the request, the asset affected (if any), and the status of the replacement process. The purpose of this form is to ensure that all relevant information about the sensor replacements is documented and communicated effectively.
Before proceeding, please check the following:
- Have you already submitted a similar request for this asset? If yes, please check its status first.
- Are you sure that this request is not related to another issue with the asset that needs to be addressed first?
</thinking>

# Temperature Sensor Replacement Request Form - Help Guide

## Purpose
The Temperature Sensor Replacement Request Form is used to track and manage temperature sensor replacement requests across the organization.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill in your User Name and choose your Department.
2. Enter the Asset ID associated with the temperature sensor you are requesting to be replaced.
3. Check if the sensor is currently active or inactive.
4. Select the priority level of the replacement request.
5. If possible, enter the date you discovered the issue.
6. Provide a brief description of the issue.
7. Decide whether the request is assigned to someone else.
8. Choose the status of the sensor at the moment of the request.
9. Check the resolution of the issue (if known).
10. Enter any relevant notes about the request.

## Field-by-Field Explanation

* **User Name** (`user_name`, text, required: false): Enter your name as it appears on your company records.
* **Department** (`department`, text, required: false): Choose your department from the list below:
	+ [Insert options: 'IT', 'Operations', 'Maintenance', etc.]
* **Asset ID** (`asset_id`, number, required: false): Enter the ID of the temperature sensor you are requesting to be replaced.
* **Sensor Type** (`sensor_type`, select_one, required: false):
	+ Yes: The sensor is active and working correctly.
	+ No: The sensor is not active or working correctly.
* **Serial Number** (`serial_number`, text, required: false): Enter the serial number of the temperature sensor.
* **Date Discovered** (`date_discovered`, date, required: false): If possible, enter the date you discovered the issue with the sensor.
* **Description** (`description`, text, required: false): Provide a brief description of the issue with the sensor.
* **Assigned To** (`assigned_to`, select_one, required: false):
	+ Yes: The request is assigned to someone else.
	+ No: The request is assigned to you.
* **Status** (`status`, select_one, required: false):
	+ Active: The sensor is currently active and working correctly.
	+ Inactive: The sensor is not active or working correctly.
* **Priority** (`priority`, select_one, required: false):
	+ Yes: This is a high priority request.
	+ No: This is not a high priority request.
* **Resolution** (`resolution`, text, required: false): If known, enter the resolution of the issue.
* **Closed Date** (`closed_date`, date, required: false): If applicable, enter the date the issue was resolved.
* **Notes** (`notes`, text, required: false): Enter any relevant notes about the request.

## Tips
- Be as detailed as possible in your description and resolution fields.
- If you have any further questions or concerns, please contact your supervisor or support team.
- This form is for tracking and managing temperature sensor replacement requests only. If you need help with other issues, please submit a separate request form.
