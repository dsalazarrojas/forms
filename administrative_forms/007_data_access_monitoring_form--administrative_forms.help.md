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
