# Harassment Reporting Monitoring Form - Help Guide
## Purpose
The Harassment Reporting Monitoring Form is designed to gather information about incidents of harassment reported by users. Please use this form to provide detailed information about the harassment incident.

## How To Complete This Form
- Start by selecting the "Incident Type" and "Perpetrator List" to provide details about the harassment incident.
- Provide a clear and concise description of the incident, including any witness names if applicable.
- Choose a "Reporting Officer" from the list to select who will handle the incident.
- Select the "Resolution" status, such as "Open", "Closed", or "Pending".
- If necessary, add follow-up actions to be taken.
- Add any additional comments or notes about the incident in the "Notes" field.
- Finally, fill out the "Email" and "Phone" fields if you want the reporting officer to contact you directly.
- Click the "Submit" button to submit the form.

## Field-by-Field Explanation
- **Incident Details**: Enter a brief description of the incident.
  - Label: Incident Details
  - Label: <label> `incident_details`
  - Type: text
  - Description: Please provide information about the incident.
  - Hint: <hint> Please provide information about the incident

  This field is a free-text field where you can enter any details about the incident.
  - Required: <required> false

- **Reporting Officer**: Select the person who will handle the incident.
  - Label: Reporting Officer
  - Label: <label> `reporting_officer`
  - Type: select_one
  - Description: <description> Select the person who will handle the incident.
  - Hint: <hint> null

  This field allows you to select who will handle the incident.
  - Options: John Doe, Jane Doe, Jane Smith

- **Reporting Date**: Enter the date the incident occurred.
  - Label: Reporting Date
  - Label: <label> `reporting_date`
  - Type: date
  - Description: <description> Enter the date the incident occurred.
  - Hint: <hint> null

  This field is a date field where you can enter the date the incident occurred.
  - Required: <required> false

- **Witness List**: Select any witnesses who may have seen the incident.
  - Label: Witness List
  - Label: <label> `witness_list`
  - Type: select_multiple
  - Description: <description> Select any witnesses who may have seen the incident.
  - Hint: <hint> null

  This field allows you to select any witnesses who may have seen the incident.
  - Options: Witness 1, Witness 2, Witness 3

- **Incident Type**: Select the type of harassment incident.
  - Label: Incident Type
  - Label: <label> `incident_type`
  - Type: select_one
  - Description: <description> Please choose the type of harassment incident.
  - Hint: <hint> Please choose the type of harassment incident

  This field is for selecting the type of harassment incident.
  - Options: Bullying, Harassment, Other

- **Perpetrator List**: Select any perpetrators involved in the incident.
  - Label: Perpetrator List
  - Label: <label> `perpetrator_list`
  - Type: select_multiple
  - Description: <description> Select any perpetrators involved in the incident.
  - Hint: <hint> null

  This field allows you to select any perpetrators involved in the incident.
  - Options: Perpetrator 1, Perpetrator 2, Perpetrator 3

- **Resolution**: Select the current status of the incident.
  - Label: Resolution
  - Label: <label> `resolution`
  - Type: select_one
  - Description: <description> Select the current status of the incident.
  - Hint: <hint> null

  This field is for selecting the status of the incident.
  - Options: Open, Closed, Pending

- **Follow Up Actions**: Select any follow-up actions to be taken.
  - Label: Follow Up Actions
  - Label: <label> `follow_up_actions`
  - Type: select_multiple
  - Description: <description> Select any follow-up actions to be taken.
  - Hint: <hint> null

  This field allows you to select any follow-up actions to be taken.
  - Options: Follow Up 1, Follow Up 2, Follow Up 3

- **Notes**: Add any additional comments or notes about the incident.
  - Label: Notes
  - Label: <label> `notes`
  - Type: note
  - Description: <description> Add any additional comments or notes about the incident.
  - Hint: <hint> null

  This field is for adding any additional comments or notes about the incident.
  - Required: <required> false

- **Email**: Enter your email address.
  - Label: Email
  - Label: <label> `email`
  - Type: email
  - Description: <description> Enter your email address.
  - Hint: <hint> null

  This field is for entering your email address.
  - Required: <required> false

- **Phone**: Enter your phone number.
  - Label: Phone
  - Label: <label> `phone`
  - Type: text
  - Description: <description> Enter your phone number.
  - Hint: <hint> null

  This field is for entering your phone number.
  - Required: <required> false

- **Reporting Time**: Enter the time the incident occurred.
  - Label: Reporting Time
  - Label: <label> `reporting_date_time`
  - Type: time
  - Description: <description> Enter the time the incident occurred.
  - Hint: <hint> null

  This field is for entering the time the incident occurred.
  - Required: <required> false

## Tips
- Please make sure to fill out all required fields before submitting the form.
- If you are unsure about any of the information, please contact your supervisor or HR department directly.
- Make sure to provide accurate and detailed information to ensure proper handling of the incident.
