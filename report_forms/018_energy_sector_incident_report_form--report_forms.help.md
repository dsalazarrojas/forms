# Energy Sector Incident Report Form - Help Guide
## Purpose
This form is used to report incidents that occurred in the energy sector. Please ensure that the incident you are reporting is not already documented in our system before proceeding. Duplicate reports will be automatically flagged and require manual review for approval.

## How To Complete This Form
To complete this form, follow the steps below:

1. Provide a clear and concise description of the incident in the **Incident Description** field.
2. Select the type of incident that occurred from the **Incident Type** dropdown menu.
3. Enter the location where the incident occurred in the **Incident Location** field.
4. Specify the date and time of the incident in the **Incident Date** and **Incident Time** fields respectively.
5. Summarize the incident in a few sentences in the **Incident Summary** field.
6. Provide more detailed information about the incident in the **Incident Details** field.
7. Specify the cause of the incident in the **Incident Cause** field.
8. Describe the effect of the incident in the **Incident Effect** field.
9. List the units that were impacted by the incident in the **Impacted Units** field.
10. List the customers who were impacted by the incident in the **Impacted Customers** field.
11. Specify the assets that were impacted by the incident in the **Impacted Assets** field.
12. List the equipment that was impacted by the incident in the **Impacted Equipment** field.
13. Specify the grid that was impacted by the incident in the **Impacted Grid** field.
14. Specify the grid segment that was impacted by the incident in the **Impacted Grid Segment** field.

## Field-by-Field Explanation
* **Incident Description** (`incident_description`, text, required): Provide a clear and concise description of the incident that occurred.
* **Incident Type** (`incident_type`, select_one, required): Select the type of incident that occurred from the dropdown menu. Options: Power Outage, Equipment Damage, Other.
* **Incident Location** (`incident_location`, text, required): Enter the location where the incident occurred.
* **Incident Date** (`incident_date`, date, required): Enter the date of the incident.
* **Incident Time** (`incident_time`, time, required): Enter the time of the incident.
* **Incident Summary** (`incident_summary`, text, required): Summarize the incident in a few sentences.
* **Incident Details** (`incident_details`, text, required): Provide more detailed information about the incident.
* **Incident Cause** (`incident_cause`, text, required): Specify the cause of the incident.
* **Incident Effect** (`incident_effect`, text, required): Describe the effect of the incident.
* **Impacted Units** (`incident_impacted_units`, text, required): List the units that were impacted by the incident.
* **Impacted Customers** (`incident_impacted_customers`, text, required): List the customers who were impacted by the incident.
* **Impacted Assets** (`incident_impacted_assets`, text, required): Specify the assets that were impacted by the incident.
* **Impacted Equipment** (`incident_impacted_equipment`, text, required): List the equipment that was impacted by the incident.
* **Impacted Grid** (`incident_impacted_grid`, text, required): Specify the grid that was impacted by the incident.
* **Impacted Grid Segment** (`incident_impacted_grid_segment`, text, required): Specify the grid segment that was impacted by the incident.

Please note that this form requires manual review for all fields except **Incident Type**, which is automatically checked for duplicates.
