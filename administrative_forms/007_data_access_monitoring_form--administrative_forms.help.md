<thinking>
The purpose of this form is to monitor and record access to sensitive data within the organization. It helps administrators keep track of who has accessed data, when, and under what circumstances. This form ensures that access is granted and recorded properly, and that there is a clear record of who has been granted access and by whom. This form is used by administrators to maintain accountability and transparency in data access management.

To complete this form, follow these steps:

1. Select the "User Request" field to enter the name or description of the data access request.
2. Choose the appropriate "Access Level" for the data access request.
3. Enter the date of access in the "Access Date" field.
4. Select the time of access in the "Access Time" field.
5. Indicate whether the data is classified as "Yes" or "No" in the "Data Classification" field.
6. Choose how the access was made in the "Access Method" field.
7. Select the location of access in the "Access Location" field.
8. Enter the justification for the access request in the "Access Justification" field.
9. Choose whether "Access Reviewed By" was done in the "Access Reviewed By" field.
10. Select whether "Access Approved By" was done in the "Access Approved By" field.
11. Choose whether "Access Denied By" was done in the "Access Denied By" field.

</thinking>

# data_access_monitoring_form - Help Guide
## Purpose
The data_access_monitoring_form is used to monitor and record access to sensitive data within the organization.

## How To Complete This Form

To complete this form, follow the steps outlined above.

## Field-by-Field Explanation
* **User Request** (`user_request`, `text`, required: false): Enter the name or description of the data access request.
* **Access Level** (`access_level`, `select_one`, required: false): Choose the level of access required for the data access request.
* **Access Date** (`access_date`, `date`, required: false): Enter the date of access in the format mm/dd/yyyy.
* **Access Time** (`access_time`, `time`, required: false): Select the time of access in the format hh:mm am/pm.
* **Data Classification** (`data_classification`, `select_multiple`, required: false): Indicate whether the data is classified as "Yes" or "No".
* **Access Method** (`access_method`, `select_one`, required: false): Choose how the access was made in the "Access Method" field.
* **Access Location** (`access_location`, `select_one`, required: false): Select the location of access in the "Access Location" field.
* **Access Justification** (`access_justification`, `text`, required: false): Enter the justification for the access request.
* **Access Reviewed By** (`access_reviewed_by`, `select_one`, required: false): Choose whether "Access Reviewed By" was done in the "Access Reviewed By" field.
* **Access Approved By** (`access_approved_by`, `select_one`, required: false): Select whether "Access Approved By" was done in the "Access Approved By" field.
* **Access Denied By** (`access_denied_by`, `select_one`, required: false): Choose whether "Access Denied By" was done in the "Access Denied By" field.
