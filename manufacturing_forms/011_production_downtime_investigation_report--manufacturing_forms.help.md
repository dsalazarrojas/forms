<thinking>...</thinking>

# Production Downtime Investigation Report - Help Guide

## Purpose
The Production Downtime Investigation Report is used to collect information about production downtime incidents, including the date and time of the incident, its duration, details, causes, and actions taken to address it. This report helps to identify potential root causes and facilitate corrective actions to prevent future incidents.

## How To Complete This Form
To complete this form, please follow these steps:

1. Fill out the **Incident Details** page with the relevant information about the incident.
2. Move on to the **Incident Date** field and select or enter the date of the incident.
3. Next, enter the **Duration** of the incident in the **Duration** field.
4. Provide a brief description of what happened during the incident in the **Details** field.
5. Answer the question of whether you believe the incident was caused by a **Possible Cause** in the **Possible Causes** field.
6. Select the actual **Cause** of the incident from the list of options in the **Cause** field.
7. Enter the actions you took to address the incident in the **Actions** field.
8. Indicate whether you took any **Next Steps** in the **Next Steps** field.
9. Provide a detailed explanation of the **Root Cause** of the incident in the **Root Cause** field.

## Field-by-Field Explanation

* **Incident Details** (`incident_details`, text, optional): Enter a brief description of the incident.
* **Incident Date** (`incident_date`, date, optional): Enter the date of the incident.
* **Incident Time** (`incident_time`, time, optional): Enter the time of the incident.
* **Duration** (`incident_duration`, text, optional): Enter the duration of the incident.
* **Possible Causes** (`possible_causes`, select_multiple, optional): Answer whether you believe the incident was caused by one of the possible causes.
* **Cause** (`actual_cause`, select_one, optional): Select the actual cause of the incident.
* **Actions** (`actions_taken`, text, optional): Enter the actions you took to address the incident.
* **Next Steps** (`next_steps`, select_multiple, optional): Indicate the next steps you plan to take.
* **Root Cause** (`root_cause`, text, optional): Enter a detailed explanation of the root cause of the incident.
