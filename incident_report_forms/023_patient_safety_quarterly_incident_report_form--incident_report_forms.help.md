# Patient Safety Quarterly Incident Report Form - Help Guide

## Purpose
This form is used to report incidents related to patient safety, providing a structured way to document and follow up on issues that may have occurred during the quarter. 

## How To Complete This Form
1. Enter the incident date in the format `yyyy-mm-dd` in the **Incident Date** field.
2. Enter the name of the patient who was involved in the incident.
3. Choose 'Yes' or 'No' to indicate if the incident involved a reportable event.
4. Describe the incident in the **Description** field.
5. Identify the cause of the incident in the **Cause** field.
6. Enter the location where the incident occurred.
7. Indicate if staff were involved in the incident by choosing 'Yes' or 'No' for each staff member.
8. Indicate if near misses occurred by choosing 'Yes' or 'No' for each near miss.
9. Enter any root causes of the incident in the **Root Cause** field.
10. Describe your plans for addressing the incident in the **Action Plan** field.
11. Enter the date to review the incident again.
12. If required, enter follow up date and location details for further action.
13. Choose 'Active' or 'Inactive' to indicate the status of the incident.
14. Enter any additional follow-up comments or notes related to the incident.

## Field-by-Field Explanation

* **Incident Date** (`incident_date`, date, required): Enter the date of the incident in the format `yyyy-mm-dd`.
* **Patient Name** (`patient_name`, text, required): Enter the name of the patient who was involved in the incident.
* **Report Type** (`report_type`, select_one, required): Check 'Yes' if the incident involved a reportable event.
* **Description** (`description`, text, required): Describe the incident in detail.
* **Cause** (`cause`, text, required): Identify the cause of the incident.
* **Location** (`location`, text, required): Enter the location where the incident occurred.
* **Incident Type** (`incident_type`, select_one, required): Check 'Yes' if the incident involved a reportable event.
* **Staff Involvement** (`staff_involvement`, select_multiple, optional): Check 'Yes' or 'No' for each staff member involved.
* **Near Misses** (`near_misses`, select_multiple, optional): Check 'Yes' or 'No' for each near miss.
* **Root Cause** (`root_cause`, text, required): Enter the root cause of the incident.
* **Action Plan** (`action_plan`, text, required): Describe your plans for addressing the incident.
* **Review Date** (`review_date`, date, required): Enter the date to review the incident again.
* **Follow Up Date** (`follow_up_date`, date, optional): Enter the date of the follow-up action.
* **Follow Up Person** (`follow_up_person`, text, optional): Enter the name of the person responsible for the follow-up action.
* **Follow Up Location** (`follow_up_location`, text, optional): Enter the location where the follow-up action will take place.
* **Follow Up Comments** (`follow_up_comments`, text, optional): Enter any additional comments or notes related to the follow-up action.
* **Root Cause Comments** (`root_cause_comments`, text, optional): Enter any additional comments or notes related to the root cause of the incident.
* **Incident Status** (`incident_status`, select_multiple, required): Check 'Active' or 'Inactive' to indicate the status of the incident.
