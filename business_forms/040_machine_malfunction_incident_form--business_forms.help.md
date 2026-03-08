# Machine Malfunction Incident Form - Help Guide

## Purpose
The Machine Malfunction Incident Form is designed to collect information on machine malfunctions that have occurred within the organization. The form aims to standardize the documentation of incidents, enabling the maintenance team to track and analyze malfunctions, identify patterns, and take corrective actions to prevent future occurrences.

## How To Complete This Form

1. Fill in the **Incident Date** field with the date the malfunction occurred or was discovered.
2. Provide a detailed description of the incident in the **Description** field.
3. Specify the **Location** where the malfunction happened.
4. If the malfunction affected equipment, choose 'Yes' or 'No' in the **Affected Equipment** field.
5. Select the type of incident in the **Incident Type** field.
6. If the incident's root cause has been identified, choose 'Yes' or 'No' in the **Root Cause** field.
7. Describe the action taken in response to the malfunction in the **Action Taken** field.
8. Add any additional notes about the incident in the **Notes** field.
9. If applicable, enter the business unit involved in the malfunction in the **Business Unit** field.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, date, required: false): Enter the date the malfunction occurred or was discovered.
* **Description** (`description`, text, required: false): Provide a detailed description of what happened.
* **Location** (`location`, text, required: false): Specify the location where the malfunction happened.
* **Affected Equipment** (`affected_equipment`, select_one, required: false): If equipment was affected, choose 'Yes'.
* **Incident Type** (`incident_type`, select_one, required: false): Select the type of incident that occurred.
* **Root Cause** (`root_cause`, select_one, required: false): If the root cause of the malfunction has been identified, choose 'Yes'.
* **Action Taken** (`action_taken`, text, required: false): Describe the action taken in response to the malfunction.
* **Notes** (`notes`, note, required: false): Add any additional notes about the incident.
* **Business Unit** (`business_unit`, text, required: false): If applicable, enter the business unit involved in the malfunction.
