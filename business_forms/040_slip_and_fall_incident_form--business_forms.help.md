# Slip And Fall Incident Form - Help Guide
## Purpose
The purpose of this form is to gather information about slip and fall incidents that occurred within the company. This includes gathering details about the incident, such as date, location, and description, as well as any injuries sustained.

## How To Complete This Form
To complete this form, follow these steps:

1. Enter the date of the incident using the date field.
2. Enter the name of the employee who experienced the incident in the Employee Name field.
3. Describe the location where the incident occurred in the Location of Incident field.
4. Provide a detailed description of what happened in the Description of Incident field.
5. If applicable, specify any injuries sustained in the Injuries Sustained field.
6. Select the type of incident that occurred (e.g., Fall, Slip, Trip, Other) in the Type of Incident field.
7. If assistance was required, select all that apply from the Assistance Required field.
8. If any injuries were treated, select all that apply from the Injuries Treated field.
9. Indicate the current status of the incident in the Incident Status field.
10. Enter the name of the person assigned to follow up on the incident in the Assigned to field.
11. Enter the employee's phone number in the Employee Phone field, using the format XXX-XXX-XXXX.
12. Enter the employee's email address in the Employee Email field, using the format example@example.com.
13. If desired, add any additional notes about the incident status in the Incident Status Note field.

## Field-by-Field Explanation

* **Date of Incident** (`incident_date`, `date`, required): Enter the date of the incident in MM/DD/YYYY format.
* **Employee Name** (`employee_name`, `text`, required): Enter the name of the employee who experienced the incident.
* **Location of Incident** (`incident_location`, `text`, required): Describe the location where the incident occurred.
* **Description of Incident** (`incident_description`, `text`, required): Provide a detailed description of what happened.
* **Injuries Sustained** (`injuries_sustained`, `text`, required): List any injuries sustained as a result of the incident.
* **Type of Incident** (`incident_type`, `select_one`, required): Select the type of incident that occurred (e.g., Fall, Slip, Trip, Other).
* **Assistance Required** (`assistance_required`, `select_multiple`, required): If assistance was required, select all that apply.
* **Injuries Treated** (`injuries_treated`, `select_multiple`, required): If any injuries were treated, select all that apply.
* **Incident Status** (`incident_status`, `select_one`, required): Indicate the current status of the incident (e.g., Active, Inactive, Closed).
* **Assigned to** (`assigned_to`, `text`, required): Enter the name of the person assigned to follow up on the incident.
* **Employee Phone** (`employee_phone`, `text`, required): Enter the employee's phone number in the format XXX-XXX-XXXX.
* **Employee Email** (`employee_email`, `email`, required): Enter the employee's email address in the format example@example.com.
* **Incident Status Note** (`incident_status_note`, `note`, optional): If desired, add any additional notes about the incident status.
