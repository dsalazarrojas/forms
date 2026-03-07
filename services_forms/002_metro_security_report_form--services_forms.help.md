<thinking>
This form is intended for reporting security incidents or concerns within a metropolitan area. It is designed to provide a standardized and structured format for users to report such incidents, allowing for efficient and accurate documentation and follow-up actions.

Before creating this guide, I've reviewed the provided YAML fields to ensure that it meets the requirements and is free from duplication. I have not copied or extracted content from any proprietary forms or platforms.

This guide will explain each field and its purpose, making it easier for end-users to complete the form accurately and effectively.

</thinking>

# metro_security_report_form - Help Guide
## Purpose
This form is designed to aid in the reporting of security incidents or concerns within a metropolitan area. It provides a structured format for users to document and submit their reports, facilitating efficient follow-up actions and investigations.

## How To Complete This Form
To complete this form, follow these steps:

1. Select the type of report you wish to submit (Security Threat, Misconduct, or Other).
2. Provide a brief description of the incident or concern.
3. Enter the date and time of the incident, if applicable.
4. Specify the location of the incident.
5. Enter the name and any relevant contact information of the person involved or reporting the incident.
6. Include any additional information that may be relevant to the incident.
7. Choose how you want to submit your report (Save and Submit, or Share with selected authorities or colleagues).

## Field-by-Field Explanation

* **Report Type** (`report_type`, `select_one`, required: false): Choose the category that best describes the nature of your report. Select from Security Threat, Misconduct, or Other.
* **Description** (`description`, `text`, required: false): Briefly describe the incident or concern in this field.
* **Incident Date** (`incident_date`, `date`, required: false): Enter the date the incident occurred, if applicable.
* **Incident Time** (`incident_time`, `time`, required: false): Specify the time the incident occurred, if applicable.
* **Location** (`location`, `text`, required: false): Provide the exact location of the incident.
* **Report Person** (`report_person`, `text`, required: false): Enter the name of the person involved or reporting the incident.
* **Contact Info** (`contact_info`, `text`, required: false): If applicable, provide any contact information for the person reporting the incident or involved.
* **Additional Info** (`additional_info`, `text`, required: false): Include any other relevant details that may aid in the investigation or resolution of the incident.
* **Submit** (`submit`, `select_one`, required: false): Choose whether you want to submit and save your report, or submit and share it with authorities or colleagues. You can also select to share with Other (specify below).
* **Share With** (`share_with`, `select_multiple`, required: false): If you choose to share your report, select which authorities or colleagues you want to share it with. Options include Authorities, Colleagues, or Other (specify below).

## Tips
* Please be as detailed and accurate as possible when filling out this form to ensure the incident is handled efficiently.
* If you are sharing your report with authorities or colleagues, ensure that the relevant contacts are informed.
* For Other (specify below) option, please enter the names and contact information of the individuals or groups you wish to share the report with.
