# Health Data Research Sharing Consent Form - Help Guide
## Purpose
The Health Data Research Sharing Consent Form is designed to collect informed consent from research participants for the sharing of their health data. This form ensures that participants understand how their data will be used, stored, and protected.

## How To Complete This Form

1. Please provide your research team's information, including the team's name, department or institution, and contact details.
2. Enter your participant information, including your name, ID number, and contact information.
3. Provide details about the study, including its title, description, and purpose.
4. Select the type of data that you are willing to share, such as Research, Non-Personal Data, Anonymized Data, or De-Identified Data.
5. Describe how you would like your data to be used in the study.
6. Specify the storage location where your data will be stored.
7. Choose whether you want access control for your data, such as password protection or encryption.
8. Enter the number of years or months you would like your data to be retained.
9. Explain the reason for data retention.
10. Confirm whether you consent to share your data.
11. Enter the date and time you are giving your consent.
12. Sign the form to indicate your agreement to share your data.

## Field-by-Field Explanation

* **Research Team Info** (`research_team_info`, text, required): Enter the name of the research team, department or institution, and contact details.
* **Participant Info** (`participant_info`, text, required): Enter your name, ID number, and contact information.
* **Study Details** (`study_details`, text, required): Provide a brief description of the study, including its title and purpose.
* **Data Sharing** (`data_sharing`, select multiple, required): Select the types of data you are willing to share:
	+ Research
	+ Non-Personal Data
	+ Anonymized Data
	+ De-Identified Data
* **Data Use** (`data_use`, text, required): Describe how you would like your data to be used in the study.
* **Storage Location** (`storage_location`, text, required): Specify where you would like your data to be stored.
* **Access Control** (`access_control`, select one, required): Choose whether you want access control for your data, such as password protection or encryption.
	+ True
	+ False
* **Data Retention Period** (`data_retention`, number, optional): Enter the number of years or months you would like your data to be retained.
* **Data Retention Reason** (`data_retention_reason`, text, optional): Explain the reason for data retention.
* **Consent** (`consent`, select one, required): Confirm whether you consent to share your data.
	+ True
	+ False
* **Consent Date** (`consent_date`, date, required): Enter the date you are giving your consent.
* **Consent Time** (`consent_time`, time, required): Enter the time you are giving your consent.
* **Participant Signature** (`participant_signature`, note, required): Sign the form to indicate your agreement to share your data.
