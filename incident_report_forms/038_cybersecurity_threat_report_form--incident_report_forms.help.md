<thinking>
We need to ensure that the "Cybersecurity Threat Report Form" is filled out by users with the intent of documenting potential or actual security incidents. This form should not be used for general feedback or support requests. To ensure consistency, please review the form fields carefully and only select relevant options that fit your incident description. If you're unsure about a field or its purpose, please ask your supervisor or a security team member for clarification.
</thinking>

# Cybersecurity Threat Report Form - Help Guide

## Purpose
The Cybersecurity Threat Report Form is used to document and report potential or actual security threats and incidents affecting the company's systems, data, or users. Fill out this form to provide a detailed report of the incident, including its type, location, date, and impact on the system.

## How To Complete This Form
1. Review the form carefully to ensure you're reporting the correct information.
2. Choose the correct threat type from the provided options.
3. Enter the location where the incident occurred.
4. Select the date and time when the incident occurred.
5. Provide a clear and concise summary of the incident.
6. Enter an estimated impact (in dollars) on the system.
7. Choose the severity level of the incident.
8. Select all applicable categories affected by the incident.
9. Specify the source of the threat (internal, external, or other).

## Field-by-Field Explanation

* **Threat Type** (`threat_type`, select_one): Choose from the following options:
	+ Malware
	+ Phishing
	+ Other (please specify)
	+ Ransomware
	+ Data Breach
	+ Social Engineering
	+ SQL Injection
	+ Cross Site Scripting (XSS)
* **Location** (`threat_location`, text): Where did the incident occur?
* **Date of Incident** (`threat_date`, date): Enter the date when the incident occurred.
* **Time of Incident** (`threat_time`, time): Enter the time when the incident occurred.
* **Incident Summary** (`threat_summary`, note): Provide a clear and concise summary of the incident.
* **Impact** (`threat_impact`, number): Estimated impact on the system (in dollars).
* **Threat Severity** (`threat_severity`, select_one): Choose from the following options:
	+ Low
	+ Medium
	+ High
	+ Critical
* **Threat Category** (`threat_category`, select_multiple): Choose all applicable categories affected by the incident:
	+ Network
	+ Application
	+ Data
	+ System
	+ User Account
* **Source** (`threat_source`, select_one): Choose from the following options:
	+ Internal
	+ External
	+ Other (please specify)
	+ Unknown

## Tips
* If you're unsure about a field or its purpose, please ask your supervisor or a security team member for clarification.
* Fill out this form accurately and thoroughly to ensure the security team can properly assess and respond to the incident.
