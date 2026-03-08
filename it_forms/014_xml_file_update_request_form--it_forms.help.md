# xml_file_update_request_form - Help Guide
## Purpose
The xml_file_update_request_form is used to collect information about requests to update XML files.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill out the **Request Information** field with a brief description of the update request.
2. Upload the XML file that needs to be updated in the **XML File** field.
3. Select the **Priority** level for the update request. You can choose from High, Low, or Medium.
4. Select one or more assignees who will work on the update request in the **Assignee** field.
5. (Optional) Enter a description of the update request in the **Description** field.
6. (Optional) Set a date and time for the request to be created in the **Date Created** and **Time Uploaded** fields.

## Field-by-Field Explanation
* **Request Information**:
	+ A brief description of the update request.
	+ Type: `text`
	+ Required: No
* **XML File**:
	+ The XML file that needs to be updated.
	+ Type: `text`
	+ Required: Yes
* **Priority**:
	+ A level of priority for the update request (High, Low, Medium).
	+ Type: `select_one`
	+ Required: Yes
* **Assignee**:
	+ One or more users who will work on the update request.
	+ Type: `select_multiple`
	+ Required: Yes
* **Description**:
	+ A description of the update request.
	+ Type: `text`
	+ Required: No
* **Date Created**:
	+ A date and time for the request to be created.
	+ Type: `date`
	+ Required: No
* **Time Uploaded**:
	+ A time for the request to be uploaded.
	+ Type: `time`
	+ Required: No
