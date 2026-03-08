# Office Flooding Incident Form - Help Guide
## Purpose
The Office Flooding Incident Form is used to report and track office flooding incidents within the organization. This form collects information about the incident, including the affected area, employee injuries, and contact information, to help the maintenance team respond to and resolve the issue efficiently.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the category of the incident from the "Category" field.
2. Provide a brief description of the incident in the "Description" field.
3. Select the date and time of the incident from the "Incident Date" and "Incident Time" fields.
4. Describe the affected area in the "Flooded Area Description" field.
5. If there were any employee injuries, provide a description of them in the "Employee Injuries Description" field and select the number of injured employees in the "Employee Injuries Number" field.
6. Select the condition of the injured employees from the "Employee Injuries Condition" field.
7. Select the affected areas of the incident from the "Affected Areas" field.
8. Select the type of flooded area from the "Flooded Area" field.
9. Select "True" or "False" to indicate if there were any employee injuries from the "Employee Injuries" field.
10. Provide the contact information of the person reporting the incident in the "Contact Name", "Contact Email", "Contact Phone", "Contact Department", "Contact Title", and "Contact Extension" fields.
11. Upload an image of the incident in the "Incident Image" field.
12. Provide a description of the incident in the "Incident Description" field.
13. Select the status of the incident from the "Incident Status" field.

## Field-by-Field Explanation

* **Category** (`category`, `select_one`, required: false): Select the category of the incident from the dropdown menu.
* **Description** (`description`, `text`, required: false): Provide a brief description of the incident.
* **Incident Date** (`incident_date`, `date`, required: false): Select the date of the incident.
* **Time** (`time`, `time`, required: false): Select the time of the incident.
* **Flooded Area Description** (`flooded_area_description`, `text`, required: false): Describe the affected area of the incident.
* **Employee Injuries Description** (`employee_injuries_description`, `text`, required: false): If there were any employee injuries, describe them in this field.
* **Affected Areas** (`affected_areas`, `select_multiple`, required: false): Select the affected areas of the incident from the dropdown menu.
* **Flooded Area** (`flooded_area`, `select_one`, required: false): Select the type of flooded area from the dropdown menu.
* **Employee Injuries** (`employee_injuries`, `select_multiple`, required: false): Select "True" or "False" to indicate if there were any employee injuries.
* **Employee Injuries Number** (`employee_injuries_number`, `number`, required: false): Enter the number of injured employees.
* **Employee Injuries Condition** (`employee_injuries_condition`, `select_multiple`, required: false): Select the condition of the injured employees from the dropdown menu.
* **Contact Name** (`contact_name`, `text`, required: false): Enter the name of the person reporting the incident.
* **Contact Email** (`contact_email`, `email`, required: false): Enter the email of the person reporting the incident.
* **Contact Phone** (`contact_phone`, `text`, required: false): Enter the phone number of the person reporting the incident.
* **Contact Department** (`contact_department`, `text`, required: false): Enter the department of the person reporting the incident.
* **Contact Title** (`contact_title`, `text`, required: false): Enter the title of the person reporting the incident.
* **Contact Extension** (`contact_extension`, `text`, required: false): Enter the extension of the person reporting the incident.
* **Contact Location** (`contact_location`, `text`, required: false): Enter the location of the person reporting the incident.
* **Incident Image** (`incident_image`, `text`, required: false): Upload an image of the incident.
* **Incident Description** (`incident_description`, `text`, required: false): Provide a description of the incident.
* **Incident Report Date** (`incident_report_date`, `date`, required: false): Select the date the incident was reported.
* **Incident Report Time** (`incident_report_time`, `time`, required: false): Select the time the incident was reported.
* **Incident Status** (`incident_status`, `select_one`, required: false): Select the status of the incident from the dropdown menu.
