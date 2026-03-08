<thinking>
The Project Key Sign Out Form is designed to track and record the status of project keys that have been signed out by employees. This form is typically used for project management and asset management purposes. It helps project managers and facility teams monitor and track project keys that are signed out for a project, ensuring that they are returned on time and in good condition. This form is a crucial tool for maintaining accurate records and preventing asset loss.
</thinking>

# Project Key Sign Out Form - Help Guide
## Purpose
The Project Key Sign Out Form is a tool used to track and record the status of project keys that have been signed out by employees. It ensures that project keys are returned on time and in good condition, and helps project managers and facility teams maintain accurate records.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the project name in the `Project Name` field.
2. Select the expected return date and time in the `Expected Return Date/Time` field.
3. Enter the returned date and time in the `Returned Date/Time` field.
4. Select the project status from the options provided in the `Project Status`, `Returned Status`, and `Returned By Status` fields.
5. Enter the return reason and comments in the `Return Reason` and `Returned Comments` fields.
6. Select the returned by party and their status from the options provided in the `Returned By Party` and `Returned By Status` fields.
7. Enter any additional comments in the `Comments` field.

## Field-by-Field Explanation

* **Project Name** (`project_key_sign_out_form_project_name`, text, required): Enter the name of the project for which the key was signed out.
* **Expected Return Date/Time** (`project_key_sign_out_form_expected_return_date_time`, date/time, required): Enter the expected return date and time of the project key.
* **Returned Date/Time** (`project_key_sign_out_form_returned_date_time`, date/time, required): Enter the actual return date and time of the project key.
* **Project Status** (`project_key_sign_out_form_project_status`, select_one, required): Select the current status of the project (Completed, Cancelled, On Hold, In Progress).
* **Job Site** (`project_key_sign_out_form_job_site`, text, required): Enter the location where the project key was signed out.
* **Facility** (`project_key_sign_out_form_facility`, select_one, required): Select the facility where the project key was signed out (Site Office, Warehouse, Shop Floor, Other).
* **Responsible Party** (`project_key_sign_out_form_responsible_party`, select_one, required): Select the party responsible for signing out the project key (Self, Team, Supervisor).
* **Accountability** (`project_key_sign_out_form_accountability`, select_one, required): Select whether the project key is accountable (True, False, N/A, Unknown).
* **Comments** (`project_key_sign_out_form_comments`, note, required): Enter any additional comments about the project key.
* **Return Reason** (`project_key_sign_out_form_return_reason`, text, required): Enter the reason for returning the project key.
* **Returned By** (`project_key_sign_out_form_returned_by`, text, required): Enter the name of the person or party that returned the project key.
* **Return To** (`project_key_sign_out_form_return_to`, text, required): Enter the location to which the project key was returned.
* **Return To Location** (`project_key_sign_out_form_return_to_location`, text, required): Enter the location to which the project key was returned.
* **Returned Date/Time** (`project_key_sign_out_form_returned_date_time`, time, required): Enter the actual return date and time of the project key.
* **Returned By Party** (`project_key_sign_out_form_returned_by_party`, text, required): Enter the name of the person or party that returned the project key.
* **Returned Comments** (`project_key_sign_out_form_returned_comments`, note, required): Enter any additional comments about the returned project key.
* **Returned Status** (`project_key_sign_out_form_returned_status`, select_one, required): Select the status of the returned project key (Completed, Cancelled, On Hold, In Progress).
* **Returned By Status** (`project_key_sign_out_form_returned_by_party_status`, select_one, required): Select the status of the person or party that returned the project key (Completed, Cancelled, On Hold, In Progress).
