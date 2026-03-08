<thinking>
We are creating a help guide for a Cash Handling Incident Report form, which is used to document and report incidents related to cash handling, such as cash shortages, overages, or discrepancies. The purpose of this form is to gather information about the incident, including the date, time, and location, as well as details about the incident itself and the actions taken to address it. This guide will walk users through how to complete the form and explain each field's purpose.

</thinking>

# Cash Handling Incident Report - Help Guide
## Purpose
The Cash Handling Incident Report form is used to document and report incidents related to cash handling, such as cash shortages, overages, or discrepancies.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the report date at the top of the form.
2. Enter the incident date and time.
3. Provide the location where the incident occurred.
4. Enter the name and position of the person reporting the incident.
5. Select the type of incident that occurred.
6. Enter the amount involved in the incident.
7. Provide a detailed description of the incident.
8. Enter the cash register or terminal number.
9. Enter the expected and actual cash balance.
10. Calculate the discrepancy amount.
11. Indicate if management was notified.
12. If necessary, provide investigation notes and follow-up required.

## Field-by-Field Explanation

* **Report Date** (`report_date`, required, date): Enter the date the incident was reported.
* **Incident Date** (`incident_date`, required, date): Enter the date the incident occurred.
* **Incident Time** (`incident_time`, required, time): Enter the time the incident occurred.
* **Location Information** (`location_section`, optional, note): Enter the location where the incident occurred.
* **Business or Store Location Name** (`business_name`, required, text): Enter the name of the business or store location.
* **Location Address** (`location_address`, required, text): Enter the address of the business or store location.
* **Department or Area** (`department_area`, required, text): Enter the department or area where the incident occurred.
* **Name of Person Reporting Incident** (`reporter_name`, required, text): Enter the name of the person reporting the incident.
* **Position or Job Title** (`reporter_position`, required, text): Enter the position or job title of the person reporting the incident.
* **Phone Number** (`reporter_phone`, required, text): Enter the phone number of the person reporting the incident.
* **Type of Incident** (`incident_type`, required, select_one): Select the type of incident that occurred.
* **Amount Involved** (`amount_involved`, required, number): Enter the dollar amount involved in the incident.
* **Detailed Description of Incident** (`incident_description`, required, text): Enter a detailed description of the incident.
* **Cash Register or Terminal Number** (`register_number`, required, text): Enter the number of the cash register or terminal involved.
* **Expected Cash Balance** (`expected_balance`, required, number): Enter the expected cash balance.
* **Actual Cash Balance Found** (`actual_balance`, required, number): Enter the actual cash balance.
* **Discrepancy Amount** (`discrepancy_amount`, required, number): Calculate the discrepancy amount by subtracting the actual balance from the expected balance.
* **Immediate Action Taken** (`immediate_action`, required, text): Enter the immediate action taken to address the incident.
* **Management Notified?** (`management_notified`, required, select_one): Indicate if management was notified.
* **Investigation Notes and Follow-up Required** (`investigation_notes`, optional, text): Enter any additional investigation notes and follow-up required.

Note: The "Location Information" and "Action Taken" sections are notes fields, and are not required to be filled out.
