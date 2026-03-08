# grievance_form - Help Guide
## Purpose
The grievance_form is a tool for collecting information about employee grievances. It is used to gather details about the issue, the employee's contact information, and any relevant circumstances surrounding the incident.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter your contact information in the "contact_info" field.
2. Describe the grievance in the "grievance_details" field.
3. Select "Yes" or "No" to indicate whether the grievance is related to a specific type of issue in the "grievance_type" field.
4. Enter the date and time of the incident in the "report_date" and "report_time" fields.
5. Enter your contact number and email in the "contact_number" and "report_email" fields.
6. Select "Yes" or "No" to indicate whether the grievance has been resolved in the "grievance_resolution" field.
7. Finally, select "Yes" or "No" to indicate whether the grievance falls under a specific category in the "grievance_category" field.

## Field-by-Field Explanation

* **contact_info** (`contact_info`, text, optional): Enter your contact information, including your name and any other relevant contact details.
* **grievance_details** (`grievance_details`, note, optional): Describe the issue that you are experiencing. Please be as detailed as possible, including any relevant background information.
* **grievance_type** (`grievance_type`, select_one, optional): Select "Yes" if the grievance is related to a specific type of issue, and "No" otherwise.
* **report_date** (`report_date`, date, optional): Enter the date of the incident.
* **report_time** (`report_time`, time, optional): Enter the time of the incident.
* **contact_number** (`contact_number`, text, optional): Enter your contact number.
* **report_email** (`report_email`, email, optional): Enter your email address.
* **grievance_resolution** (`grievance_resolution`, select_one, optional): Select "Yes" if the grievance has been resolved, and "No" otherwise.
* **grievance_category** (`grievance_category`, select_one, optional): Select "Yes" if the grievance falls under a specific category, and "No" otherwise.
