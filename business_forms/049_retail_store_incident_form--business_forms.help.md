<thinking>...</thinking>

## retail_store_incident_form - Help Guide

## Purpose
This form is designed to collect incident reports from retail store employees, allowing them to document and report any accidents or incidents that occur within the store. The information collected will be used to analyze and improve store safety and employee well-being.

## How To Complete This Form
To complete this form, follow these steps:

1. Review the form carefully and ensure you have all the necessary information before filling it out.
2. Enter the details of the incident in the "Incident Details" field.
3. Specify the location where the incident occurred in the "Incident Location" field.
4. Provide a detailed description of what happened in the "Description" field.
5. Identify the employee involved in the incident in the "Employee Involved" field.
6. Enter the time the incident occurred in the "Incident Time" field.

## Field-by-Field Explanation

* **Incident Details** (`incident_details`, text, required: false): Enter a brief description of the incident, including any relevant details such as date, time, and location.
* **Incident Location** (`incident_location`, text, required: false): Specify the exact location where the incident occurred, e.g., "Main Sales Floor" or "Warehouse Area 3".
* **Description** (`incident_description`, text, required: false): Provide a detailed description of what happened, including any injuries or damages that resulted from the incident.
* **Employee Involved** (`employee_involved`, select_one, required: false): Select the employee who was involved in the incident. If there are multiple employees involved, select the one who reported the incident or was most affected.
* **Incident Time** (`incident_time`, time, required: false): Enter the time the incident occurred, using the 24-hour clock format (e.g., 14:30 for 2:30 PM).
