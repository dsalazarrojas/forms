# First Aid Incident Report Form - Help Guide
## Purpose
The First Aid Incident Report Form is a comprehensive form for reporting incidents that require first aid. It collects essential information about the incident, including date, time, location, personal details, and medical provider information.

## How To Complete This Form
To complete this form, follow these steps:

1. Fill in the **form_title** field with a brief description of the incident.
2. Enter the **incident_date** in the specified format (MM/DD/YYYY).
3. Enter the **incident_time** field with the time of the incident.
4. Specify the **location** where the incident occurred.
5. Provide detailed information about the **incident_details**.
6. Enter personal information in the **personal_info** field.
7. List any medical injuries in the **medical_injuries** field.
8. If applicable, enter the **medical_provider_info** and sign with your **medical_provider_sig**.
9. Select the **incident_reported_by** field with the person reporting the incident.
10. Select the **incident_reported_to** field with the person or department to report the incident to.
11. Enter the contact information of the **first_aid_provider**, including name, contact number, and signature.
12. Specify whether to send a **slack_notification** or not.
13. If you want to add additional notes, use the **notes** field.
14. If you are using Airtable integration, select the **airtable_integration** option.
15. If you are using Google Sheets integration, select the **google_sheets_integration** option.
16. Choose the **first_aid_incident_category** and **first_aid_incident_category_2** fields to categorize the incident (multiple categories can be selected).
17. Choose the **first_aid_incident_category_3** field to further categorize the incident (multiple categories can be selected).

## Field-by-Field Explanation

* **form_title**: Enter a brief description of the incident.
	+ Type: text
	+ Required: no
* **incident_date**: Enter the date of the incident (MM/DD/YYYY).
	+ Type: date
	+ Required: yes
* **incident_time**: Enter the time of the incident.
	+ Type: time
	+ Required: yes
* **location**: Specify the location where the incident occurred.
	+ Type: text
	+ Required: yes
* **incident_details**: Provide detailed information about the incident.
	+ Type: text
	+ Required: yes
* **personal_info**: Enter personal information.
	+ Type: text
	+ Required: yes
* **medical_injuries**: List any medical injuries.
	+ Type: text
	+ Required: yes
* **medical_provider_info**: Enter medical provider information (if applicable).
	+ Type: text
	+ Required: no
* **medical_provider_sig**: Sign with the medical provider (if applicable).
	+ Type: select_one
	+ Required: no
* **incident_reported_by**: Select the person reporting the incident.
	+ Type: select_multiple
	+ Required: yes
* **incident_reported_to**: Select the person or department to report the incident to.
	+ Type: select_one
	+ Required: yes
* **first_aid_provider**: Enter contact information of the first aid provider.
	+ Type: text
	+ Required: yes
* **first_aid_provider_contact**: Enter contact number of the first aid provider.
	+ Type: text
	+ Required: yes
* **first_aid_provider_sig**: Sign with the first aid provider.
	+ Type: select_one
	+ Required: yes
* **first_aid_provider_phone**: Enter phone number of the first aid provider.
	+ Type: text
	+ Required: yes
* **email**: Enter the email of the first aid provider.
	+ Type: email
	+ Required: yes
* **slack_notification**: Specify whether to send a notification to Slack.
	+ Type: select_one
	+ Required: yes
* **notes**: Add additional notes about the incident.
	+ Type: note
	+ Required: no
* **airtable_integration**: Specify whether to use Airtable integration.
	+ Type: select_one
	+ Required: yes
* **google_sheets_integration**: Specify whether to use Google Sheets integration.
	+ Type: select_one
	+ Required: no
* **first_aid_incident_category**: Categorize the incident.
	+ Type: select_multiple
	+ Required: yes
* **first_aid_incident_category_2**: Categorize the incident further.
	+ Type: select_multiple
	+ Required: no
* **first_aid_incident_category_3**: Categorize the incident further.
	+ Type: select_multiple
	+ Required: no

## Tips

* Be clear and concise when filling in the form.
* Make sure to enter all required fields.
* Use the **notes** field for additional information.
* If you're unsure about any field, ask for clarification.
* Review the form carefully before submitting it.

Note that this help guide is based on the provided YAML structure, and the explanations are written to the best of my understanding. If any field label is unclear or has an unintended meaning, please let me know for further clarification.
