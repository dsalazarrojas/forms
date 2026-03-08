# Fire Department Incident Form - Help Guide

## Purpose
The Fire Department Incident Form is a standardized form used to report and document incidents that occur within the fire department's jurisdiction. This form is used to gather information about each incident, including the date, time, location, description, and other relevant details.

## How To Complete This Form
To complete this form, follow these steps:

1.  Select the date of the incident in the "Incident Date" field.
2.  Enter the time of the incident in the "Incident Time" field.
3.  Type in the location of the incident in the "Incident Location" field.
4.  Provide a brief description of the incident in the "Incident Description" field.
5.  Select the type of incident that occurred from the "Incident Type" dropdown menu.
6.  Indicate whether or not the incident is of high priority by selecting "Yes" or "No" in the "Incident Priority" field.
7.  Select the status of the incident as "Active" or "Inactive" in the "Incident Status" field.
8.  Enter the name of the person who reported the incident in the "Incident Reporter" field.
9.  Enter the name of the person assigned to respond to the incident in the "Incident Assignee" field.

## Field-by-Field Explanation
* **Incident Date** (`incident_date`, Date, required: false): The date of the incident. Please enter the date in MM/dd/yyyy format (e.g., 02/27/2023).
* **Incident Time** (`incident_time`, Time, required: false): The time of the incident. Please enter the time in 24-hour format (e.g., 14:30).
* **Incident Location** (`incident_location`, Text, required: false): The location where the incident occurred. Please enter the exact address or a brief description of the location.
* **Incident Description** (`incident_description`, Text, required: false): A brief description of what happened during the incident.
* **Incident Type** (`incident_type`, Select One, required: false, options: 'Yes', 'No'): The type of incident that occurred, such as an emergency call or a routine inspection.
* **Incident Priority** (`incident_priority`, Select One, required: false, options: 'Yes', 'No'): Indicate whether the incident is of high priority or not.
* **Incident Status** (`incident_status`, Select One, required: false, options: Active, Inactive): Indicate whether the incident is active or inactive.
* **Incident Reporter** (`incident_reporter`, Text, required: false): The name of the person who reported the incident.
* **Incident Assignee** (`incident_assignee`, Text, required: false): The name of the person assigned to respond to the incident.
