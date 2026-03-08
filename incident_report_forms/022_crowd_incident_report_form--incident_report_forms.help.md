# crowd_incident_report_form - Help Guide
## Purpose
The purpose of this form is to gather detailed information about incidents that have occurred. It's a crucial tool for reporting and tracking incidents, and it helps ensure that all relevant information is collected accurately and efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the required fields, which are marked with an asterisk (\*).
2. Enter your First Name in the **First Name** field.
3. Enter your Email in the **Email** field.
4. Enter your Phone number in the **Phone** field.
5. Choose the date of the incident in the **Incident Date** field.
6. Enter the location where the incident occurred in the **Incident Location** field (optional).
7. Select the type of incident that occurred from the provided options in the **Incident Type** field (optional).
8. Provide a detailed description of the incident in the **Incident Description** field.
9. If applicable, provide a description of any witnesses in the **Witness Description** field.
10. Choose the tool assigned to resolve the incident from the provided options in the **Assigned Tool** field.
11. Enter the name of the user assigned to resolve the incident in the **Assigned User** field.
12. Select the priority of the incident from the provided options (High, Low, Medium) in the **Incident Priority** field.
13. Choose the status of the incident from the provided options (Open, Closed, In Progress, Resolved) in the **Incident Status** field.
14. If applicable, provide a resolution or outcome of the incident in the **Incident Resolution** field.

## Field-by-Field Explanation

* **First Name** (`first_name`, text, \*): Enter your full name as it appears on your identification.
* **Email** (`email`, email, \*): Enter your email address.
* **Phone** (`phone`, text, \*): Enter your phone number.
* **Incident Date** (`incident_date`, date, \*): Choose the date the incident occurred.
* **Incident Location** (`incident_location`, text, false): Enter the location where the incident occurred. This field is optional.
* **Incident Type** (`incident_type`, text, false): Select the type of incident that occurred. This field is optional and allows you to choose from a list of options.
* **Incident Description** (`incident_description`, text, \*): Provide a detailed description of what happened.
* **Witness Description** (`witness_description`, text, false): If there were witnesses involved, provide a description of their involvement. This field is optional.
* **Assigned Tool** (`assigned_tool`, text, \*): Choose the tool assigned to resolve the incident.
* **Assigned User** (`assigned_user`, text, \*): Enter the name of the user assigned to resolve the incident.
* **Incident Priority** (`incident_priority`, select_one, \*): Select the priority of the incident from the provided options (High, Low, Medium).
* **Incident Status** (`incident_status`, select_multiple, \*): Choose the status of the incident from the provided options (Open, Closed, In Progress, Resolved).
* **Incident Resolution** (`incident_resolution`, text, false): If the incident has been resolved, provide a description of the resolution. This field is optional.
