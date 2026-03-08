# ImportExport Control System Access Form - Help Guide

## Purpose
This form is used to manage access control for import and export operations in the system.

## How To Complete This Form

1. Select the export type from the dropdown list to specify the type of export operation being requested.
2. Choose the export frequency from the dropdown list to indicate how often the export operation is requested.
3. Enter the user ID to identify the user requesting access.
4. Select the import type from the dropdown list to specify the type of import operation being requested.
5. Choose the import frequency from the dropdown list to indicate how often the import operation is requested.
6. Enter the user name to identify the user making the request.
7. Enter the user email address to identify the user's contact information.
8. Enter the user phone number to store the user's contact information.
9. Enter the export user to specify the user responsible for the export operation.
10. Choose the access level from the dropdown list to specify the level of access required for the export operation.
11. Enter the request date and time to track the date and time of the request.
12. Choose the approved status from the dropdown list to indicate the status of the request.
13. Choose the declined status from the dropdown list to indicate a declined request.
14. Choose the canceled status from the dropdown list to indicate a request cancellation.
15. Enter comments for the requestor to provide additional information.
16. Choose the status of the export operation from the dropdown list to track its progress.

## Field-by-Field Explanation

* **Export Type** (export_type, select_one, required: false): Select the type of export operation being requested.
* **Export Frequency** (export_frequency, select_one, required: false): Choose how often the export operation is requested.
* **User ID** (user_id, text, required: false): Enter the user ID to identify the user requesting access.
* **Import Type** (import_type, select_one, required: false): Select the type of import operation being requested.
* **Import Frequency** (import_frequency, select_one, required: false): Choose how often the import operation is requested.
* **User Name** (user_name, text, required: false): Enter the user name to identify the user making the request.
* **User Email** (user_email, email, required: false): Enter the user email address to identify the user's contact information.
* **User Phone** (user_phone, text, required: false): Enter the user phone number to store the user's contact information.
* **Export User** (export_user, text, required: false): Enter the user responsible for the export operation.
* **Access Level** (access_level, select_one, required: false): Choose the level of access required for the export operation.
* **Request Date** (request_date, date, required: false): Enter the request date to track the date of the request.
* **Request Time** (request_time, time, required: false): Enter the request time to track the time of the request.
* **Reason** (reason, text, required: false): Enter comments or reason for the request.
* **Approved** (approved, select_one, required: false): Choose the status of the request as approved or not.
* **Declined** (declined, select_one, required: false): Choose the status of the request as declined or not.
* **Canceled** (canceled, select_one, required: false): Choose the status of the request as canceled or not.
* **Comments** (comments, text, required: false): Enter additional comments or information for the request.
* **Status** (status, select_one, required: false): Choose the status of the export operation from the dropdown list.
