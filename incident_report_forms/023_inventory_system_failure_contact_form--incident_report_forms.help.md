# inventory_system_failure_contact_form - Help Guide
## Purpose
This form is a contact form for reporting incidents or malfunctions with the inventory system. It helps the team to quickly understand the issues and take corrective action to resolve them.

## How To Complete This Form
To complete this form, follow these steps:
1. Fill in the required fields (marked as "required") with the requested information.
2. Choose the correct option for the "Priority", "Urgency", and "Asset Impact" fields.
3. Select the correct date and time of the incident from the calendar and time picker.
4. Fill in any other optional fields with relevant information if necessary.

## Field-by-Field Explanation

* **Incident Report** (`incident_report`, text, required/optional): Briefly describe the incident or malfunction you experienced with the inventory system.
* **Contact Details** (`contact_details`, select_one, required/optional): How would you like to be contacted about this incident? Please select one of the following options: Phone, Email, or None.
* **Description** (`description`, text, required/optional): Provide a detailed description of the incident or malfunction, including any error messages or logs you may have encountered.
* **Priority** (`priority`, select_one, required): Indicate the level of severity of the incident, choose from High, Medium, or Low.
* **Urgency** (`urgency`, select_one, required): Indicate the urgency of addressing the incident, choose from Urgent or Non-urgent.
* **Asset Impact** (`asset_impact`, select_multiple, optional): If applicable, indicate which assets were affected by the incident, choose from High, Medium, or Low.
* **Date** (`incident_date`, date, required): Enter the date of the incident.
* **Time** (`incident_time`, time, required): Enter the time of the incident.
* **Report Status** (`report_status`, select_one, required/optional): Indicate the status of the incident report, choose from Open, In Progress, or Resolved.

## Tips
* Make sure to fill out all required fields before submitting the form.
* Be as detailed as possible when providing descriptions to help the team understand the issue.
* If you have any additional information or attachments, please upload them to the support channel.
* You will receive updates on the status of your incident report once it is processed.
